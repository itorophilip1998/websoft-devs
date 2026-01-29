import { prisma } from '@/lib/db';
import BlogCard from '@/components/blog/BlogCard';

const POSTS_PER_PAGE = 9;

async function getPosts(page: number) {
  const skip = (page - 1) * POSTS_PER_PAGE;
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true, image: true },
        },
        _count: {
          select: { comments: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: POSTS_PER_PAGE,
      skip,
    }),
    prisma.post.count({ where: { published: true } }),
  ]);
  return { posts, total };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const { posts, total } = await getPosts(page);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl w-full">
        <div className="text-center mb-14" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            style={{ color: 'var(--headline)' }}
          >
            Our Blog
          </h1>
          <p
            className="text-base sm:text-lg text-gray-600"
            style={{ color: 'var(--body-text)' }}
          >
            Stay updated with our latest news and insights
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20" data-aos="fade-up">
            <p
              className="text-lg"
              style={{ color: 'var(--body-text)' }}
            >
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <>
            {page === 1 && posts.length > 0 && (
              <div className="mb-14" data-aos="fade-up">
                <BlogCard post={posts[0]} featured />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(page === 1 ? posts.slice(1) : posts).map((post, index) => (
                <div
                  key={post.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-12 flex items-center justify-center gap-2"
                aria-label="Blog pagination"
              >
                <a
                  href={page > 1 ? `?page=${page - 1}` : '#'}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    page <= 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                  aria-disabled={page <= 1}
                >
                  Previous
                </a>
                <span className="px-4 py-2 text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <a
                  href={page < totalPages ? `?page=${page + 1}` : '#'}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    page >= totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                  aria-disabled={page >= totalPages}
                >
                  Next
                </a>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
