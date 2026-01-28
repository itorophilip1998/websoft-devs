import { prisma } from '@/lib/db';
import DashboardStats from '@/components/admin/DashboardStats';
import QuickActions from '@/components/admin/QuickActions';

async function getStats() {
  const [totalPosts, publishedPosts, totalComments, totalUsers] =
    await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.comment.count(),
      prisma.user.count(),
    ]);

  return {
    totalPosts,
    publishedPosts,
    draftPosts: totalPosts - publishedPosts,
    totalComments,
    totalUsers,
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="space-y-8">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Welcome to the admin panel</p>
      </div>

      <DashboardStats stats={stats} />
      <QuickActions />
    </div>
  );
}
