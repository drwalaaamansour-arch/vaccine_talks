'use client';

import type { SharePageOutcome, SharePagePayload } from '@/lib/page-share';
import { shareCurrentPage as shareWeb } from '@/lib/page-share';
import { isNativeApp } from '@/lib/native/platform';

export async function sharePageNativeAware(
  payload: SharePagePayload,
): Promise<SharePageOutcome> {
  if (!(await isNativeApp())) {
    return shareWeb(payload);
  }

  try {
    const { Share } = await import('@capacitor/share');
    await Share.share({
      title: payload.title,
      text: payload.title,
      url: payload.url,
      dialogTitle: payload.title || 'Share',
    });
    return 'shared';
  } catch (error) {
    if (error instanceof Error && /cancel/i.test(error.message)) {
      return 'failed';
    }
    return shareWeb(payload);
  }
}

export async function shareTextNativeAware(options: {
  title: string;
  text: string;
  url?: string;
}): Promise<SharePageOutcome> {
  if (!(await isNativeApp())) {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: options.title,
          text: options.text,
          url: options.url,
        });
        return 'shared';
      } catch {
        /* fall through */
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      const clip = options.url ? `${options.text}\n\n${options.url}` : options.text;
      await navigator.clipboard.writeText(clip);
      return 'copied';
    }
    return 'failed';
  }

  try {
    const { Share } = await import('@capacitor/share');
    await Share.share({
      title: options.title,
      text: options.text,
      url: options.url,
      dialogTitle: options.title,
    });
    return 'shared';
  } catch {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      const clip = options.url ? `${options.text}\n\n${options.url}` : options.text;
      await navigator.clipboard.writeText(clip);
      return 'copied';
    }
    return 'failed';
  }
}
