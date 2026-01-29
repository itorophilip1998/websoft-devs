import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: unknown): email is string {
  return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body?.email;
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { message: 'You are already subscribed.' },
        { status: 200 }
      );
    }

    await prisma.subscriber.create({ data: { email } });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || 'onboarding@resend.dev';

    if (resendApiKey) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "You're subscribed to Websoft",
          html: `
            <p>Thanks for subscribing to Websoft.</p>
            <p>We'll send updates from time to time—no spam.</p>
            <p>— The Websoft Team</p>
          `,
        });
      } catch (emailError) {
        console.error('Newsletter welcome email failed:', emailError);
        // Subscription was saved; do not fail the request
      }
    }

    return NextResponse.json(
      { message: "You're subscribed. Check your inbox for a confirmation." },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
