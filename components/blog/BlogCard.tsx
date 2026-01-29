import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
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
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      data-aos="fade-up"
    >
      {post.featuredImage && (
        <Link href={`/blog/${post.slug}`}>
          <div className="relative w-full h-64">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      )}
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[var(--primary)] transition-colors">
            {post.title}
          </h2>
        </Link>
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name || 'Anonymous'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          {post._count && post._count.comments > 0 && (
            <span>{post._count.comments} comments</span>
          )}
        </div>
      </div>
    </article>
  );
}
