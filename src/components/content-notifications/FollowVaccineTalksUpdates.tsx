'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  subscribeToContentNotifications,
  unsubscribeFromContentNotifications,
  type ContentPushClientDeps,
} from '@/lib/content-notifications/client';
import { getFollowUpdatesCopy } from '@/lib/content-notifications/copy';
import {
  FOLLOW_PROMPT_SUBSCRIBED_KEY,
  clearFollowPromptSubscribed,
  isBrowserPushSupported,
  rememberFollowPromptDismissed,
  rememberFollowPromptSubscribed,
  shouldShowFollowPrompt,
} from '@/lib/content-notifications/prompt-storage';
import type { ContentNotificationAudience } from '@/lib/content-notifications/types';

const AUDIENCE_OPTIONS: ContentNotificationAudience[] = [
  'HCP',
  'PARENT',
  'BOTH',
];

const copy = getFollowUpdatesCopy();

function browserPermission(): NotificationPermission | 'unsupported' {
  if (typeof Notification === 'undefined') return 'unsupported';
  return Notification.permission;
}

function createBrowserDeps(): ContentPushClientDeps {
  const hasNotification = typeof window !== 'undefined' && 'Notification' in window;
  const hasServiceWorker =
    typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  const hasPushManager = typeof window !== 'undefined' && 'PushManager' in window;

  return {
    hasNotification,
    hasServiceWorker,
    hasPushManager,
    permission: browserPermission(),
    vapidPublicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    requestPermission: () => Notification.requestPermission(),
    getPushSubscription: async () => {
      const registration = await navigator.serviceWorker.ready;
      return registration.pushManager.getSubscription();
    },
    subscribePush: async (key) => {
      const registration = await navigator.serviceWorker.ready;
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: key as BufferSource,
      });
    },
    unsubscribePush: (subscription) => subscription.unsubscribe(),
    fetchImpl: window.fetch.bind(window),
  };
}

function optionLabel(value: ContentNotificationAudience): string {
  if (value === 'HCP') return copy.optionHcp;
  if (value === 'PARENT') return copy.optionParent;
  return copy.optionBoth;
}

function followSubscribeDiagnostic(detail: unknown): string {
  if (typeof detail === 'string' && detail.trim()) {
    return detail.trim().slice(0, 180);
  }
  if (detail instanceof Error) {
    const name = detail.name?.trim() || 'Error';
    const message = detail.message?.trim();
    return (message ? `${name}: ${message}` : name).slice(0, 180);
  }
  return 'unknown_error';
}

function withFollowSubscribeDiagnostic(detail: unknown): string {
  return `${copy.error}\nDiagnostic: ${followSubscribeDiagnostic(detail)}`;
}

export default function FollowVaccineTalksUpdates() {
  const titleId = useId();
  const introId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [audience, setAudience] = useState<ContentNotificationAudience | null>(
    null
  );
  const [subscribed, setSubscribed] = useState(false);
  const [supported, setSupported] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const closeWithoutRemembering = useCallback(() => {
    setOpen(false);
    setError(null);
    previouslyFocused.current?.focus?.();
  }, []);

  const dismissForThirtyDays = useCallback(() => {
    rememberFollowPromptDismissed(Date.now(), window.localStorage);
    closeWithoutRemembering();
  }, [closeWithoutRemembering]);

  const openFromFallback = useCallback(() => {
    setError(null);
    setOpen(true);
  }, []);

  useEffect(() => {
    const openFromEvent = () => openFromFallback();
    window.addEventListener('vaccine-talks:open-follow-updates', openFromEvent);
    return () => {
      window.removeEventListener(
        'vaccine-talks:open-follow-updates',
        openFromEvent
      );
    };
  }, [openFromFallback]);

  useEffect(() => {
    const deps = createBrowserDeps();
    const pushSupported = isBrowserPushSupported(deps);
    setSupported(pushSupported);

    let cancelled = false;
    (async () => {
      let alreadySubscribed =
        window.localStorage.getItem(FOLLOW_PROMPT_SUBSCRIBED_KEY) === '1';
      if (pushSupported) {
        try {
          const registration = await navigator.serviceWorker.ready;
          const existing = await registration.pushManager.getSubscription();
          alreadySubscribed = Boolean(existing);
        } catch {
          /* keep localStorage value */
        }
      }
      if (cancelled) return;
      setSubscribed(alreadySubscribed);
      if (alreadySubscribed) {
        rememberFollowPromptSubscribed(window.localStorage);
        return;
      }
      if (shouldShowFollowPrompt(Date.now(), window.localStorage)) {
        setOpen(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const frame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismissForThirtyDays();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, dismissForThirtyDays]);

  const onFollow = useCallback(async () => {
    setError(null);
    if (!supported) {
      setError(copy.unsupported);
      return;
    }
    if (!audience) {
      setError(copy.pickAudience);
      return;
    }

    setBusy(true);
    try {
      const result = await subscribeToContentNotifications(
        audience,
        true,
        createBrowserDeps()
      );
      if (!result.ok) {
        if (result.reason === 'unsupported') setError(copy.unsupported);
        else if (result.reason === 'permission_denied') setError(copy.denied);
        else setError(withFollowSubscribeDiagnostic(result.reason));
        return;
      }
      rememberFollowPromptSubscribed(window.localStorage);
      setSubscribed(true);
      closeWithoutRemembering();
    } catch (error) {
      setError(withFollowSubscribeDiagnostic(error));
    } finally {
      setBusy(false);
    }
  }, [audience, closeWithoutRemembering, supported]);

  const onUnsubscribe = useCallback(async () => {
    setError(null);
    setBusy(true);
    try {
      const result = await unsubscribeFromContentNotifications(
        createBrowserDeps()
      );
      if (!result.ok) {
        setError(copy.error);
        return;
      }
      clearFollowPromptSubscribed(window.localStorage);
      setSubscribed(false);
      closeWithoutRemembering();
    } catch {
      setError(copy.error);
    } finally {
      setBusy(false);
    }
  }, [closeWithoutRemembering]);

  if (!open) return null;

  return (
        <div className="follow-updates-layer">
          <div
            className="follow-updates-backdrop"
            onClick={dismissForThirtyDays}
            aria-hidden="true"
          />
          <div
            className="follow-updates-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={introId}
            lang="ar"
            dir="rtl"
          >
            <button
              ref={closeRef}
              type="button"
              className="follow-updates-close"
              onClick={dismissForThirtyDays}
              aria-label={copy.close}
            >
              <span aria-hidden="true">×</span>
            </button>

            <h2 id={titleId} className="follow-updates-title">
              {copy.titleAr}
            </h2>
            <p id={introId} className="follow-updates-intro">
              {copy.intro}
            </p>

            {supported ? (
              <>
                <fieldset className="follow-updates-audience">
                  <legend className="follow-updates-question">
                    {copy.question}
                  </legend>
                  {AUDIENCE_OPTIONS.map((value) => (
                    <label key={value} className="follow-updates-option">
                      <input
                        type="radio"
                        name="content-notification-audience"
                        value={value}
                        checked={audience === value}
                        onChange={() => setAudience(value)}
                      />
                      <span>{optionLabel(value)}</span>
                    </label>
                  ))}
                </fieldset>

                {subscribed ? (
                  <button
                    type="button"
                    className="start-button follow-updates-submit follow-updates-submit--secondary"
                    onClick={onUnsubscribe}
                    disabled={busy}
                  >
                    {busy ? copy.saving : copy.unsubscribe}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="start-button follow-updates-submit"
                    onClick={onFollow}
                    disabled={busy}
                  >
                    {busy ? copy.saving : copy.follow}
                  </button>
                )}
              </>
            ) : (
              <p className="follow-updates-unsupported" role="status">
                {copy.unsupported}
              </p>
            )}

            {error ? (
              <p
                className="follow-updates-error"
                role="alert"
                style={{ whiteSpace: 'pre-line' }}
              >
                {error}
              </p>
            ) : null}
          </div>
        </div>
  );
}
