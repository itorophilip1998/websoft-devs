import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CommentsSection from '@/components/blog/CommentsSection';
import PostReactions from '@/components/blog/PostReactions';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';

async function getPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
      comments: {
        where: { parentId: null },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true,
            },
          },
          replies: {
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
            orderBy: { createdAt: 'asc' },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  });
  if (!post || !post.published) return null;
  return post;
}

function getReadingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, ' ').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

async function getRelatedPosts(currentSlug: string) {
  return prisma.post.findMany({
    where: {
      published: true,
      slug: { not: currentSlug },
    },
    select: {
      id: true,
      title: true,
      slug: true,
      featuredImage: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });
}

async function getAdjacentPosts(createdAt: Date) {
  const [prev, next] = await Promise.all([
    prisma.post.findFirst({
      where: { published: true, createdAt: { lt: createdAt } },
      select: { slug: true, title: true, featuredImage: true },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.post.findFirst({
      where: { published: true, createdAt: { gt: createdAt } },
      select: { slug: true, title: true, featuredImage: true },
      orderBy: { createdAt: 'asc' },
    }),
  ]);
  return { prev, next };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const [relatedPosts, { prev, next }] = await Promise.all([
    getRelatedPosts(slug),
    post ? getAdjacentPosts(post.createdAt) : Promise.resolve({ prev: null, next: null }),
  ]);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://localhost:3000';
  const postUrl = `${baseUrl.replace(/\/$/, '')}/blog/${slug}`;

  return (
    <article className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl w-full">
        {/* Breadcrumb */}
        <nav
          className="text-sm text-gray-500 mb-6"
          aria-label="Breadcrumb"
          data-aos="fade-up"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-[var(--primary)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="container mx-auto px-4 max-w-4xl w-full" data-aos="fade-up">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 max-w-4xl w-full">
        {/* Post Header */}
        <header className="mb-10" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight"
            style={{ color: 'var(--headline)' }}
          >
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4" aria-label="Post byline">
            {post.author.name || 'Anonymous'}
            <span className="mx-2" aria-hidden="true">·</span>
            <time dateTime={new Date(post.createdAt).toISOString()}>
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
            <span className="mx-2" aria-hidden="true">·</span>
            {readingTime} min read
          </p>
          <ShareButtons url={postUrl} title={post.title} />
        </header>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--primary)] prose-strong:text-gray-900 prose-img:rounded-lg mb-10"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Like / Dislike */}
        <div className="mb-10" data-aos="fade-up">
          <PostReactions postId={post.id} />
        </div>

        {/* Next / Previous */}
        {(prev || next) && (
          <nav
            className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between py-10 border-t border-gray-200"
            aria-label="Previous and next posts"
            data-aos="fade-up"
          >
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex items-center gap-2 text-[var(--primary)] hover:underline"
              >
                <ChevronLeft className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex items-center gap-2 text-[var(--primary)] hover:underline sm:text-right"
              >
                <span className="truncate">{next.title}</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}

        {/* Comments Section */}
        <div className="mt-10 pt-10 border-t border-gray-200" data-aos="fade-up">
          <CommentsSection postId={post.id} comments={post.comments || []} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 pt-10 border-t border-gray-200" data-aos="fade-up">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </article>
  );
}
