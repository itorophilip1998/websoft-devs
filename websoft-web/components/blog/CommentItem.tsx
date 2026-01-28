'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { Reply, Edit, Trash2 } from 'lucide-react';
import CommentForm from './CommentForm';

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string | null;
    image: string | null;
    email: string;
  };
  createdAt: Date;
  replies?: Comment[];
}

interface CommentItemProps {
  comment: Comment;
  postId: string;
  onCommentUpdated: (commentId: string, content: string) => void;
  onCommentDeleted: (commentId: string) => void;
  onReplyAdded: (comment: Comment) => void;
}

export default function CommentItem({
  comment,
  postId,
  onCommentUpdated,
  onCommentDeleted,
  onReplyAdded,
}: CommentItemProps) {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAuthor = user?.id && comment.author.email === user.primaryEmailAddress?.emailAddress;

  const handleEdit = async () => {
    if (!editContent.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editContent }),
      });

      if (res.ok) {
        onCommentUpdated(comment.id, editContent);
        setIsEditing(false);
      } else {
        alert('Failed to update comment');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('Failed to update comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this comment?')) return;

    try {
      const res = await fetch(`/api/comments/${comment.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        onCommentDeleted(comment.id);
      } else {
        alert('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment');
    }
  };

  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {comment.author.image ? (
            <Image
              src={comment.author.image}
              alt={comment.author.name || 'User'}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">
                {comment.author.name?.[0] || 'U'}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-900">
                {comment.author.name || 'Anonymous'}
              </h4>
              <p className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </div>
            {isAuthor && (
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 hover:bg-gray-100 rounded"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-2 hover:bg-gray-100 rounded text-red-600"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  disabled={isSubmitting}
                  className="px-4 py-1 bg-[var(--primary)] text-white rounded hover:bg-[var(--primary-hover)] text-sm disabled:opacity-50"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditContent(comment.content);
                  }}
                  className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 mb-3">{comment.content}</p>
          )}

          {!isEditing && (
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-2 text-sm text-[var(--primary)] hover:underline"
            >
              <Reply className="w-4 h-4" />
              Reply
            </button>
          )}

          {isReplying && (
            <div className="mt-4 ml-4">
              <CommentForm
                postId={postId}
                parentId={comment.id}
                onCommentAdded={(reply) => {
                  onReplyAdded(reply);
                  setIsReplying(false);
                }}
                onCancel={() => setIsReplying(false)}
              />
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-8 space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  postId={postId}
                  onCommentUpdated={onCommentUpdated}
                  onCommentDeleted={onCommentDeleted}
                  onReplyAdded={onReplyAdded}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
