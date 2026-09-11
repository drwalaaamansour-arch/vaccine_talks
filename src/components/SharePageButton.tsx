'use client';

import { useEffect, useState } from 'react';
import {
  getCurrentPageSharePayload,
  getSharePageAccessibilityLabel,
  getSharePageCopiedMessage,
  resolvePageLanguage,
  shareCurrentPage,
  type PageLanguage,
} from '@/lib/page-share';

function SharePageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 16V4" />
      <path d="m8 8 4-4 4 4" />
    </svg>
  );
}

export default function SharePageButton() {
  const [language, setLanguage] = useState<PageLanguage>('ar');
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    setLanguage(resolvePageLanguage(document.documentElement.lang));
  }, []);

  const handleShare = async () => {
    setFeedback(null);
    const payload = getCurrentPageSharePayload(document, window.location);
    const outcome = await shareCurrentPage(payload);

    if (outcome === 'copied') {
      setFeedback(getSharePageCopiedMessage(language));
    }
  };

  const label = getSharePageAccessibilityLabel(language);

  return (
    <div className="share-page-control">
      <button
        type="button"
        className="menu-btn share-page-btn"
        onClick={handleShare}
        aria-label={label}
        title={label}
      >
        <SharePageIcon />
      </button>
      {feedback && (
        <p className="share-page-feedback" role="status" aria-live="polite">
          {feedback}
        </p>
      )}
    </div>
  );
}
