/**
 * Seed script: author, 20 blog posts (with featured images), comments, replies.
 * To (re)apply featured images to all seed posts, run: npx prisma db seed
 */
import "dotenv/config";
import { prisma } from "../lib/db";

const SEED_AUTHOR_CLERK_ID = "seed-author";
const SEED_AUTHOR_EMAIL = "seed@example.com";
const SEED_SLUG_PREFIX = "seed-post-";
const FEATURED_IMAGE_PATHS = [
  "/images/Illustrator1.jpg",
  "/images/illstrator2.jpg",
  "/images/illustrator3.jpg",
];

const SAMPLE_TITLES = [
  "Getting Started with Modern Web Development",
  "Tips for Building Scalable Applications",
  "Understanding TypeScript Best Practices",
  "The Future of Frontend Frameworks",
  "Introduction to API Design",
  "Best Practices for Database Design",
  "Building Responsive Layouts",
  "Introduction to Testing Strategies",
  "Deploying Applications to Production",
  "Security Tips for Web Developers",
  "Optimizing Performance in React",
  "Introduction to GraphQL",
  "Working with Serverless Functions",
  "CSS Techniques You Should Know",
  "Introduction to Docker and Containers",
  "Managing State in Large Applications",
  "Accessibility Best Practices",
  "Introduction to CI/CD Pipelines",
  "Working with REST and RESTful APIs",
  "Debugging Tips and Tools",
];

const SAMPLE_EXCERPTS = [
  "A quick overview of the key concepts.",
  "Learn the fundamentals in minutes.",
  "Practical advice you can use today.",
  "Everything you need to get started.",
  "A deep dive into the topic.",
];

const SAMPLE_CONTENT = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`.trim();

const COMMENT_LINES = [
  "Great post, thanks for sharing!",
  "This was really helpful.",
  "I learned something new today.",
  "Could you elaborate on the second point?",
  "Exactly what I was looking for.",
  "Thanks for the clear explanation.",
  "Looking forward to more content like this.",
  "I had a different experience with this.",
  "This helped me solve my problem.",
  "Nice write-up!",
];

const REPLY_LINES = [
  "Thanks for the feedback!",
  "Glad it helped.",
  "I'll cover that in a follow-up.",
  "Good point!",
  "Appreciate it!",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const author = await prisma.user.upsert({
    where: { email: SEED_AUTHOR_EMAIL },
    create: {
      clerkId: SEED_AUTHOR_CLERK_ID,
      email: SEED_AUTHOR_EMAIL,
      name: "Seed Author",
      role: "admin",
    },
    update: {},
  });

  for (let i = 1; i <= 20; i++) {
    const slug = `${SEED_SLUG_PREFIX}${i}`;
    const title = SAMPLE_TITLES[i - 1] ?? `Seed Post ${i}`;
    const featuredImage =
      FEATURED_IMAGE_PATHS[(i - 1) % FEATURED_IMAGE_PATHS.length];
    await prisma.post.upsert({
      where: { slug },
      create: {
        title,
        slug,
        content: SAMPLE_CONTENT,
        excerpt: pick(SAMPLE_EXCERPTS),
        featuredImage,
        authorId: author.id,
        published: true,
      },
      update: { featuredImage },
    });
  }

  // Guarantee featured images on all seed posts (e.g. after re-running seed)
  for (let i = 1; i <= 20; i++) {
    const slug = `${SEED_SLUG_PREFIX}${i}`;
    const featuredImage =
      FEATURED_IMAGE_PATHS[(i - 1) % FEATURED_IMAGE_PATHS.length];
    await prisma.post.updateMany({
      where: { slug },
      data: { featuredImage },
    });
  }

  const posts = await prisma.post.findMany({
    where: { slug: { startsWith: SEED_SLUG_PREFIX } },
    orderBy: { createdAt: "asc" },
    select: { id: true, _count: { select: { comments: true } } },
  });

  for (const post of posts) {
    if (post._count.comments > 0) continue;
    const numComments = randomInt(2, 6);
    const commentIds: string[] = [];

    for (let c = 0; c < numComments; c++) {
      const comment = await prisma.comment.create({
        data: {
          content: pick(COMMENT_LINES),
          authorId: author.id,
          postId: post.id,
        },
      });
      commentIds.push(comment.id);
    }

    for (const commentId of commentIds) {
      const numReplies = randomInt(0, 3);
      for (let r = 0; r < numReplies; r++) {
        await prisma.comment.create({
          data: {
            content: pick(REPLY_LINES),
            authorId: author.id,
            postId: post.id,
            parentId: commentId,
          },
        });
      }
    }
  }

  console.log("Seed completed: 1 author, 20 posts (all with featured images), comments and replies.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
