import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

const prismaWithReactions = prisma as typeof prisma & {
  postReaction?: {
    findMany: (args: { where: { postId: string }; select: { value: true; userId: true } }) => Promise<{ value: number; userId: string }[]>;
    count: (args: { where: { postId: string; value?: number } }) => Promise<number>;
  };
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: postId } = await params;
  if (!prismaWithReactions.postReaction) {
    return NextResponse.json(
      { error: "Reactions not available for this database" },
      { status: 501 }
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
    const [likes, dislikes, reactions] = await Promise.all([
      prismaWithReactions.postReaction.count({
        where: { postId, value: 1 },
      }),
      prismaWithReactions.postReaction.count({
        where: { postId, value: -1 },
      }),
      prismaWithReactions.postReaction.findMany({
        where: { postId },
        select: { value: true, userId: true },
      }),
    ]);
    const dbUser = await getCurrentUser();
    let userReaction: 1 | -1 | null = null;
    if (dbUser) {
      const user = reactions.find((r) => r.userId === dbUser.id);
      if (user) userReaction = user.value === 1 ? 1 : -1;
    }
    return NextResponse.json({
      likes,
      dislikes,
      userReaction,
    });
  } catch (error) {
    console.error("Error fetching reactions:", error);
    return NextResponse.json(
      { error: "Failed to fetch reactions" },
      { status: 500 }
    );
  }
}
