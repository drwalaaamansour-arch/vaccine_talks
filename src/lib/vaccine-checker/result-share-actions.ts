export type ShareResultsOutcome = 'shared' | 'copied' | 'failed';

export type ShareResultsOptions = {
  title: string;
  text: string;
  url?: string;
};

export async function shareResultsText(
  options: ShareResultsOptions
): Promise<ShareResultsOutcome> {
  const shareText = options.url ? `${options.text}\n\n${options.url}` : options.text;

  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: options.title,
        text: shareText,
      });
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'failed';
      }
    }
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(shareText);
      return 'copied';
    } catch {
      return 'failed';
    }
  }

  return 'failed';
}

export function printResults(): void {
  if (typeof window !== 'undefined' && typeof window.print === 'function') {
    window.print();
  }
}
