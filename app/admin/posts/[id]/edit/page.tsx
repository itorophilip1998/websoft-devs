import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import PostForm from '@/components/admin/PostForm';

async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: { id },
  });
}

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Edit Post</h1>
        <p className="text-gray-600">Update your blog post</p>
      </div>
      <PostForm post={post} />
    </div>
  );
}
