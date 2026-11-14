export const FOLLOW_PROMPT_DISMISS_KEY =
  'vt:content-push:prompt-dismissed-until';
export const FOLLOW_PROMPT_SUBSCRIBED_KEY = 'vt:content-push:subscribed';
export const FOLLOW_PROMPT_DISMISS_MS = 30 * 24 * 60 * 60 * 1000;

export type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export function shouldShowFollowPrompt(
  nowMs: number,
  storage: StorageLike
): boolean {
  if (storage.getItem(FOLLOW_PROMPT_SUBSCRIBED_KEY) === '1') {
    return false;
  }
  const until = Number(storage.getItem(FOLLOW_PROMPT_DISMISS_KEY));
  if (Number.isFinite(until) && nowMs < until) {
    return false;
  }
  return true;
}

export function rememberFollowPromptDismissed(
  nowMs: number,
  storage: StorageLike,
  durationMs = FOLLOW_PROMPT_DISMISS_MS
): void {
  storage.setItem(FOLLOW_PROMPT_DISMISS_KEY, String(nowMs + durationMs));
}

export function rememberFollowPromptSubscribed(storage: StorageLike): void {
  storage.setItem(FOLLOW_PROMPT_SUBSCRIBED_KEY, '1');
  storage.removeItem(FOLLOW_PROMPT_DISMISS_KEY);
}

export function clearFollowPromptSubscribed(storage: StorageLike): void {
  storage.removeItem(FOLLOW_PROMPT_SUBSCRIBED_KEY);
}

export function isBrowserPushSupported(input: {
  hasNotification: boolean;
  hasServiceWorker: boolean;
  hasPushManager: boolean;
}): boolean {
  return (
    input.hasNotification && input.hasServiceWorker && input.hasPushManager
  );
}
