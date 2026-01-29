'use client';

import { useState } from 'react';
import { Share2, Check, Linkedin } from 'lucide-react';

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      // Use current page URL when copying so it works in any environment
      const copyUrl = typeof window !== 'undefined' ? window.location.href : url;
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--primary)] hover:underline"
      >
        X (Twitter)
      </a>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          'Copy link'
        )}
      </button>
    </div>
  );
}
