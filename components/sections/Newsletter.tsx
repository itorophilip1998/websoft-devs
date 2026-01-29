'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string) {
  return EMAIL_REGEX.test(value.trim());
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };

      if (!res.ok) {
        setError(data.error || data.message || 'Something went wrong. Please try again.');
        return;
      }

      setSuccessMessage(data.message || "You're subscribed. Check your inbox for a confirmation.");
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage('');
      }, 6000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hasError = Boolean(error);
  const errorId = 'newsletter-error';
  const labelId = 'newsletter-email-label';

  return (
    <section className="text-white" style={{ background: 'var(--primary-gradient)' }} data-aos="fade-up">
      <div className="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <Mail className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 opacity-90" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Newsletter
          </h2>
          <p className="text-lg sm:text-xl mb-2 opacity-95">
            Sign up for updates.
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            We send updates once in a while—no spam.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto text-left" noValidate>
            <div className="flex-1 w-full">
              <label id={labelId} htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="you@example.com"
                disabled={loading || submitted}
                aria-labelledby={labelId}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                required
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-900 placeholder:text-gray-500 text-base bg-white border shadow-sm focus:ring-2 focus:ring-white focus:outline-none disabled:opacity-70 ${
                  hasError ? 'border-2 border-red-400' : 'border-gray-200'
                }`}
              />
              {hasError && (
                <p id={errorId} className="mt-2 text-sm text-red-200" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading || submitted}
              className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[56px] disabled:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: submitted ? '#22c55e' : 'white',
                color: submitted ? 'white' : 'var(--primary)',
                boxShadow: submitted ? undefined : 'var(--cta-shadow)',
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Subscribing…
                </>
              ) : submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-green-200 text-base sm:text-lg" role="status">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
