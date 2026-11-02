'use client';

import { FOLLOW_UPDATES_COPY } from '@/lib/content-notifications/copy';

export default function FollowUpdatesFooterLink() {
  return (
    <button
      type="button"
      className="policy-link follow-updates-footer-link"
      lang="ar"
      dir="rtl"
      onClick={() =>
        window.dispatchEvent(new Event('vaccine-talks:open-follow-updates'))
      }
    >
      {FOLLOW_UPDATES_COPY.follow}
    </button>
  );
}
