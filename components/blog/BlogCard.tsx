import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content?: string;
    featuredImage?: string | null;
    author: {
      name: string | null;
      image: string | null;
    };
    createdAt: Date;
    _count?: {
      comments: number;
    };
  };
  featured?: boolean;
}

function getReadingTime(content: string | undefined): number | null {
  if (!content || typeof content !== 'string') return null;
  const text = content.replace(/<[^>]+>/g, ' ').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words === 0) return null;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const readingMin = getReadingTime(post.content);

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative w-full aspect-video lg:aspect-auto lg:min-h-[320px]">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div
                  className="w-full h-full min-h-[240px] flex items-center justify-center text-gray-300"
                  style={{ background: 'var(--hero-bg)' }}
                >
                  <span className="text-6xl font-bold">Blog</span>
                </div>
              )}
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors"
                style={{ color: 'var(--headline)' }}
              >
                {post.title}
              </h2>
              {post.excerpt && (
                <p
                  className="mb-4 line-clamp-3 text-base"
                  style={{ color: 'var(--body-text)' }}
                >
                  {post.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author?.name || 'Anonymous'}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                {post._count && post._count.comments > 0 && (
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {post._count.comments} comments
                  </span>
                )}
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-[var(--primary)] group-hover:gap-3 transition-all">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative w-full aspect-video">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-gray-300 text-2xl font-bold"
              style={{ background: 'var(--hero-bg)' }}
            >
              Blog
            </div>
          )}
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h2
            className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2"
            style={{ color: 'var(--headline)' }}
          >
            {post.title}
          </h2>
          {post.excerpt && (
            <p
              className="text-sm mb-4 line-clamp-3 flex-1"
              style={{ color: 'var(--body-text)' }}
            >
              {post.excerpt}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500 mt-auto">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author?.name || 'Anonymous'}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {readingMin != null && (
                <span>{readingMin} min read</span>
              )}
              {post._count && post._count.comments > 0 && (
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {post._count.comments}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
