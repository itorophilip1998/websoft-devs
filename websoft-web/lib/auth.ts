import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from './db';

export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;

  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  // Get or create user in database
  let dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        name:
          clerkUser.firstName && clerkUser.lastName
            ? `${clerkUser.firstName} ${clerkUser.lastName}`
            : clerkUser.firstName || clerkUser.username || 'User',
        image: clerkUser.imageUrl,
        role: 'user',
      },
    });
  }

  return dbUser;
}

export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === 'admin';
}
