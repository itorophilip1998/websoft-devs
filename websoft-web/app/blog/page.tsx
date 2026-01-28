import BlogCard from '@/components/blog/BlogCard';

async function getPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(
    `${baseUrl}/api/posts?published=true&limit=12`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    return { posts: [], total: 0 };
  }
  return res.json();
}

export default async function BlogPage() {
  const { posts } = await getPosts();

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Stay updated with our latest news and insights
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20" data-aos="fade-up">
            <p className="text-gray-600 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any, index: number) => (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
