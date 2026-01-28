import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import PostsTable from '@/components/admin/PostsTable';

async function getPosts() {
  return await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export default async function ManagePostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between" data-aos="fade-up">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Manage Posts
          </h1>
          <p className="text-gray-600">
            Create, edit, and manage your blog posts
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--primary-hover)] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Post
        </Link>
      </div>

      <PostsTable posts={posts} />
    </div>
  );
}
