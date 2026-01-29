import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

const prismaWithReactions = prisma as typeof prisma & {
  postReaction?: {
    findUnique: (args: { where: { postId_userId: { postId: string; userId: string } } }) => Promise<{ value: number } | null>;
    upsert: (args: {
      where: { postId_userId: { postId: string; userId: string } };
      create: { postId: string; userId: string; value: number };
      update: { value: number };
    }) => Promise<unknown>;
    delete: (args: { where: { postId_userId: { postId: string; userId: string } } }) => Promise<unknown>;
    count: (args: { where: { postId: string; value?: number } }) => Promise<number>;
  };
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const dbUser = await getCurrentUser();
  if (!dbUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!prismaWithReactions.postReaction) {
    return NextResponse.json(
      { error: "Reactions not available for this database" },
      { status: 501 }
    );
  }
  const { id: postId } = await params;
  let body: { value?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const value = body.value;
  if (value !== 1 && value !== -1) {
    return NextResponse.json(
      { error: "value must be 1 (like) or -1 (dislike)" },
      { status: 400 }
    );
  }
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { id: true },
    });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const existing = await prismaWithReactions.postReaction.findUnique({
      where: {
        postId_userId: { postId, userId: dbUser.id },
      },
    });
    if (existing?.value === value) {
      await prismaWithReactions.postReaction.delete({
        where: {
          postId_userId: { postId, userId: dbUser.id },
        },
      });
    } else {
      await prismaWithReactions.postReaction.upsert({
        where: {
          postId_userId: { postId, userId: dbUser.id },
        },
        create: { postId, userId: dbUser.id, value },
        update: { value },
      });
    }
    const [likes, dislikes] = await Promise.all([
      prismaWithReactions.postReaction.count({
        where: { postId, value: 1 },
      }),
      prismaWithReactions.postReaction.count({
        where: { postId, value: -1 },
      }),
    ]);
    const userReaction =
      existing?.value === value ? null : value;
    return NextResponse.json({
      likes,
      dislikes,
      userReaction,
    });
  } catch (error) {
    console.error("Error updating reaction:", error);
    return NextResponse.json(
      { error: "Failed to update reaction" },
      { status: 500 }
    );
  }
}
