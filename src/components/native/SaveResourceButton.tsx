'use client';

import { useEffect, useState } from 'react';
import { isResourceSaved, saveResource } from '@/lib/native/saved-resources';
import { resolvePageLanguage } from '@/lib/page-share';

export default function SaveResourceButton() {
  const [saved, setSaved] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [language, setLanguage] = useState<'ar' | 'en'>('en');

  useEffect(() => {
    setLanguage(resolvePageLanguage(document.documentElement.lang));
    void (async () => {
      if (typeof window === 'undefined') return;
      setSaved(await isResourceSaved(window.location.href));
    })();
  }, []);

  const label =
    language === 'ar'
      ? saved
        ? 'محفوظ'
        : 'حفظ في مواردي'
      : saved
        ? 'Saved'
        : 'Save resource';

  const handleSave = async () => {
    if (typeof window === 'undefined' || saved) return;
    await saveResource({
      title: document.title,
      url: window.location.href,
      lang: language,
    });
    setSaved(true);
    setFeedback(language === 'ar' ? 'تم الحفظ على هذا الجهاز.' : 'Saved on this device.');
  };

  return (
    <div className="share-page-control">
      <button
        type="button"
        className="menu-btn share-page-btn"
        onClick={() => void handleSave()}
        disabled={saved}
        aria-label={label}
        title={label}
      >
        <span aria-hidden>{saved ? '★' : '☆'}</span>
      </button>
      {feedback && (
        <p className="share-page-feedback" role="status" aria-live="polite">
          {feedback}
        </p>
      )}
    </div>
  );
}
