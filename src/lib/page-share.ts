export type SharePageOutcome = 'shared' | 'copied' | 'failed';

export type SharePagePayload = {
  title: string;
  url: string;
};

export type PageLanguage = 'ar' | 'en';

export function resolvePageLanguage(lang?: string | null): PageLanguage {
  return lang?.toLowerCase().startsWith('en') ? 'en' : 'ar';
}

export function getSharePageAccessibilityLabel(language: PageLanguage): string {
  return language === 'ar' ? 'مشاركة الصفحة' : 'Share page';
}

export function getSharePageCopiedMessage(language: PageLanguage): string {
  return language === 'ar' ? 'تم نسخ رابط الصفحة.' : 'Page link copied.';
}

export function getCurrentPageSharePayload(
  documentLike: Pick<Document, 'title'> | null | undefined,
  locationLike: Pick<Location, 'href'> | null | undefined
): SharePagePayload {
  return {
    title: documentLike?.title ?? '',
    url: locationLike?.href ?? '',
  };
}

type ShareNavigatorLike = {
  share?: Navigator['share'];
  clipboard?: Pick<Clipboard, 'writeText'>;
};

export async function shareCurrentPage(
  payload: SharePagePayload,
  navigatorLike: ShareNavigatorLike = navigator
): Promise<SharePageOutcome> {
  const { title, url } = payload;

  if (typeof navigatorLike.share === 'function') {
    try {
      await navigatorLike.share({
        title,
        text: title,
        url,
      });
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'failed';
      }
    }
  }

  if (navigatorLike.clipboard?.writeText) {
    try {
      await navigatorLike.clipboard.writeText(url);
      return 'copied';
    } catch {
      return 'failed';
    }
  }

  return 'failed';
}
