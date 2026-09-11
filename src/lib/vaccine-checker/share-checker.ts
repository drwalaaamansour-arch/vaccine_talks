export type ShareCheckerOutcome = 'shared' | 'copied' | 'failed';

export type ShareCheckerPayload = {
  title: string;
  text: string;
  url: string;
};

type ShareNavigatorLike = {
  share?: Navigator['share'];
  clipboard?: Pick<Clipboard, 'writeText'>;
};

export function buildVaccineCheckerShareUrl(origin: string): string {
  return new URL('/vaccine-checker', origin).href;
}

export async function shareVaccineChecker(
  payload: ShareCheckerPayload,
  navigatorLike: ShareNavigatorLike = navigator
): Promise<ShareCheckerOutcome> {
  if (typeof navigatorLike.share === 'function') {
    try {
      await navigatorLike.share(payload);
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'failed';
      }
    }
  }

  if (navigatorLike.clipboard?.writeText) {
    try {
      await navigatorLike.clipboard.writeText(payload.url);
      return 'copied';
    } catch {
      return 'failed';
    }
  }

  return 'failed';
}
