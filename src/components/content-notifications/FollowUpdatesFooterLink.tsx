'use client';

import { useEffect, useState } from 'react';
import { FOLLOW_PROMPT_SUBSCRIBED_KEY } from '@/lib/content-notifications/prompt-storage';
import { getBrowserContentPushSubscription } from '@/lib/content-notifications/browser';
import { FOLLOW_UPDATES_COPY } from '@/lib/content-notifications/copy';

const FOLLOW_UPDATES_EVENT = 'vaccine-talks:open-follow-updates';
const FOLLOW_UPDATES_STATUS_EVENT = 'vaccine-talks:content-push-status';

export default function FollowUpdatesFooterLink() {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const localStorageSubscribed =
        window.localStorage.getItem(FOLLOW_PROMPT_SUBSCRIBED_KEY) === '1';
      const browserSubscription = await getBrowserContentPushSubscription();

      if (!cancelled) {
        setSubscribed(localStorageSubscribed || Boolean(browserSubscription));
      }
    })();

    const onStatusChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ subscribed?: boolean }>;
      if (typeof customEvent.detail?.subscribed === 'boolean') {
        setSubscribed(customEvent.detail.subscribed);
      }
    };

    window.addEventListener(FOLLOW_UPDATES_STATUS_EVENT, onStatusChange);
    return () => {
      cancelled = true;
      window.removeEventListener(FOLLOW_UPDATES_STATUS_EVENT, onStatusChange);
    };
  }, []);

  return (
    <button
      type="button"
      className="policy-link follow-updates-footer-link"
      lang="ar"
      dir="rtl"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent(FOLLOW_UPDATES_EVENT, {
            detail: { subscribed },
          })
        )
      }
    >
      {subscribed ? FOLLOW_UPDATES_COPY.unsubscribe : FOLLOW_UPDATES_COPY.follow}
    </button>
  );
}
