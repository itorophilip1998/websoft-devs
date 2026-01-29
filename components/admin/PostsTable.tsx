'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: Date;
  author: {
    name: string | null;
  };
  _count: {
    comments: number;
  };
}

interface PostsTableProps {
  posts: Post[];
}

export default function PostsTable({ posts: initialPosts }: PostsTableProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    } finally {
      setDeletingId(null);
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const post = posts.find((p) => p.id === id);
      if (!post) return;

      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          published: !currentStatus,
        }),
      });

      if (res.ok) {
        setPosts(
          posts.map((p) =>
            p.id === id ? { ...p, published: !currentStatus } : p
          )
        );
      } else {
        alert('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comments
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No posts yet. Create your first post!
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                    <div className="text-sm text-gray-500">{post.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.author.name || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post._count.comments}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleTogglePublish(post.id, post.published)}
                        className="text-gray-600 hover:text-[var(--primary)]"
                        title={post.published ? 'Unpublish' : 'Publish'}
                      >
                        {post.published ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-gray-600 hover:text-[var(--primary)]"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={deletingId === post.id}
                        className="text-red-600 hover:text-red-800 disabled:opacity-50"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
