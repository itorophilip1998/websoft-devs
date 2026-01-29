import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const dbUser = await getCurrentUser();
    if (!dbUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const comment = await prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Only author or admin can edit
    const admin = await isAdmin();
    if (comment.authorId !== dbUser.id && !admin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { content } = body;

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { content },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(updatedComment);
  } catch (error: any) {
    console.error('Error updating comment:', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    return NextResponse.json(
      { error: 'Failed to update comment' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const dbUser = await getCurrentUser();
    if (!dbUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const comment = await prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Only author or admin can delete
    const admin = await isAdmin();
    if (comment.authorId !== dbUser.id && !admin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await prisma.comment.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting comment:', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    return NextResponse.json(
      { error: 'Failed to delete comment' },
      { status: 500 }
    );
  }
}
