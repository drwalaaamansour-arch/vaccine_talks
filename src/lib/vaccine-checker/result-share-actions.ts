import { shareTextNativeAware } from '@/lib/native/share';

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
  return shareTextNativeAware({
    title: options.title,
    text: shareText,
    url: options.url,
  });
}

export function printResults(): void {
  if (typeof window !== 'undefined' && typeof window.print === 'function') {
    window.print();
  }
}
