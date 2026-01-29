'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface PostReactionsProps {
  postId: string;
}

interface ReactionState {
  likes: number;
  dislikes: number;
  userReaction: 1 | -1 | null;
  loading: boolean;
  unavailable?: boolean;
}

export default function PostReactions({ postId }: PostReactionsProps) {
  const { isSignedIn } = useUser();
  const [state, setState] = useState<ReactionState>({
    likes: 0,
    dislikes: 0,
    userReaction: null,
    loading: true,
  });

  const fetchReactions = async () => {
    try {
      const res = await fetch(`/api/posts/${postId}/reactions`);
      if (res.status === 501) {
        setState((s) => ({ ...s, loading: false, unavailable: true }));
        return;
      }
      if (!res.ok) return;
      const data = await res.json();
      setState((s) => ({
        ...s,
        likes: data.likes ?? 0,
        dislikes: data.dislikes ?? 0,
        userReaction: data.userReaction ?? null,
        loading: false,
      }));
    } catch {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  useEffect(() => {
    fetchReactions();
  }, [postId]);

  const handleReaction = async (value: 1 | -1) => {
    if (!isSignedIn) return;
    if (state.unavailable) return;
    setState((s) => ({ ...s, loading: true }));
    try {
      const res = await fetch(`/api/posts/${postId}/reaction`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value }),
      });
      if (!res.ok) return;
      const data = await res.json();
      setState((s) => ({
        ...s,
        likes: data.likes ?? 0,
        dislikes: data.dislikes ?? 0,
        userReaction: data.userReaction ?? null,
        loading: false,
      }));
    } catch {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  if (state.unavailable) return null;

  const likeActive = state.userReaction === 1;
  const dislikeActive = state.userReaction === -1;
  const canAct = isSignedIn && !state.loading;

  return (
    <div className="flex flex-wrap items-center gap-4 py-6 border-y border-gray-200">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleReaction(1)}
          disabled={!canAct}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
            likeActive
              ? 'bg-[var(--primary)] text-white'
              : canAct
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-gray-100 text-gray-400 cursor-default'
          }`}
          aria-pressed={likeActive}
          aria-label="Like"
        >
          <ThumbsUp className="w-5 h-5" />
          <span>{state.likes}</span>
        </button>
        <button
          type="button"
          onClick={() => handleReaction(-1)}
          disabled={!canAct}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
            dislikeActive
              ? 'bg-gray-700 text-white'
              : canAct
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-gray-100 text-gray-400 cursor-default'
          }`}
          aria-pressed={dislikeActive}
          aria-label="Dislike"
        >
          <ThumbsDown className="w-5 h-5" />
          <span>{state.dislikes}</span>
        </button>
      </div>
      {!isSignedIn && (
        <p className="text-sm text-gray-500">
          Sign in to like or dislike this post.
        </p>
      )}
    </div>
  );
}
