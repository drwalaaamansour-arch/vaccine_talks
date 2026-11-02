import { describe, expect, it } from 'vitest';
import {
  FOLLOW_PROMPT_DISMISS_KEY,
  FOLLOW_PROMPT_DISMISS_MS,
  FOLLOW_PROMPT_SUBSCRIBED_KEY,
  isBrowserPushSupported,
  rememberFollowPromptDismissed,
  rememberFollowPromptSubscribed,
  shouldShowFollowPrompt,
} from '@/lib/content-notifications/prompt-storage';

function memoryStorage(seed: Record<string, string> = {}) {
  const data = { ...seed };
  return {
    getItem(key: string) {
      return Object.prototype.hasOwnProperty.call(data, key)
        ? data[key]
        : null;
    },
    setItem(key: string, value: string) {
      data[key] = value;
    },
    removeItem(key: string) {
      delete data[key];
    },
    data,
  };
}

describe('follow prompt dismissal and subscription memory', () => {
  it('shows the prompt for a first visit', () => {
    expect(shouldShowFollowPrompt(1_000, memoryStorage())).toBe(true);
  });

  it('hides the prompt for 30 days after X / dismiss', () => {
    const storage = memoryStorage();
    const now = 1_700_000_000_000;
    rememberFollowPromptDismissed(now, storage);
    expect(Number(storage.getItem(FOLLOW_PROMPT_DISMISS_KEY))).toBe(
      now + FOLLOW_PROMPT_DISMISS_MS
    );
    expect(shouldShowFollowPrompt(now + 1000, storage)).toBe(false);
    expect(
      shouldShowFollowPrompt(now + FOLLOW_PROMPT_DISMISS_MS + 1, storage)
    ).toBe(true);
  });

  it('never auto-shows after a successful subscribe', () => {
    const storage = memoryStorage();
    rememberFollowPromptDismissed(0, storage);
    rememberFollowPromptSubscribed(storage);
    expect(storage.getItem(FOLLOW_PROMPT_SUBSCRIBED_KEY)).toBe('1');
    expect(storage.getItem(FOLLOW_PROMPT_DISMISS_KEY)).toBeNull();
    expect(shouldShowFollowPrompt(Date.now(), storage)).toBe(false);
  });

  it('detects missing browser push support without opening a permission flow', () => {
    expect(
      isBrowserPushSupported({
        hasNotification: false,
        hasServiceWorker: true,
        hasPushManager: true,
      })
    ).toBe(false);
    expect(
      isBrowserPushSupported({
        hasNotification: true,
        hasServiceWorker: true,
        hasPushManager: true,
      })
    ).toBe(true);
  });
});
