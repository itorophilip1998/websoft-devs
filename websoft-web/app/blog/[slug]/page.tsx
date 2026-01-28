import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';

async function getPost(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(
    `${baseUrl}/api/posts/slug/${slug}`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

async function getRelatedPosts(currentSlug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(
    `${baseUrl}/api/posts?published=true&limit=3`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    return [];
  }
  const { posts } = await res.json();
  return posts.filter((p: any) => p.slug !== currentSlug).slice(0, 3);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const relatedPosts = await getRelatedPosts(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-96 md:h-[500px]" data-aos="fade-up">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Post Header */}
        <header className="mb-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author.name || 'Anonymous'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--primary)] prose-strong:text-gray-900"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments Section */}
        <div data-aos="fade-up">
          <CommentsSection postId={post.id} comments={post.comments || []} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16" data-aos="fade-up">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </article>
  );
}
