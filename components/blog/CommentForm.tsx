'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface CommentFormProps {
  postId: string;
  parentId?: string;
  onCommentAdded: (comment: any) => void;
  onCancel?: () => void;
}

export default function CommentForm({
  postId,
  parentId,
  onCommentAdded,
  onCancel,
}: CommentFormProps) {
  const { user } = useUser();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content,
          postId,
          parentId,
        }),
      });

      if (res.ok) {
        const newComment = await res.json();
        onCommentAdded(newComment);
        setContent('');
        if (onCancel) onCancel();
      } else {
        alert('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
          required
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
