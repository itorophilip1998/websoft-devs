import Link from 'next/link';
import Image from 'next/image';

interface RelatedPostsProps {
  posts: Array<{
    id: string;
    title: string;
    slug: string;
    featuredImage?: string | null;
  }>;
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
            data-aos="fade-up"
          >
            {post.featuredImage && (
              <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--primary)] transition-colors">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
