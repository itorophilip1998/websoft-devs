'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

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

interface CommentsSectionProps {
  postId: string;
  comments: Comment[];
}

export default function CommentsSection({
  postId,
  comments: initialComments,
}: CommentsSectionProps) {
  const { isSignedIn } = useUser();
  const [comments, setComments] = useState(initialComments);

  const handleCommentAdded = (newComment: Comment) => {
    setComments([newComment, ...comments]);
  };

  const handleCommentUpdated = (commentId: string, content: string) => {
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, content } : c
      )
    );
  };

  const handleCommentDeleted = (commentId: string) => {
    setComments(comments.filter((c) => c.id !== commentId));
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Comments ({comments.length})
      </h2>

      {isSignedIn && (
        <div className="mb-8">
          <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />
        </div>
      )}

      {!isSignedIn && (
        <div className="mb-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-600">
            Please sign in to leave a comment.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              postId={postId}
              onCommentUpdated={handleCommentUpdated}
              onCommentDeleted={handleCommentDeleted}
              onReplyAdded={handleCommentAdded}
            />
          ))
        )}
      </div>
    </div>
  );
}
