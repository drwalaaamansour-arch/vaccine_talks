import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  getCurrentPageSharePayload,
  getSharePageAccessibilityLabel,
  getSharePageCopiedMessage,
  resolvePageLanguage,
  shareCurrentPage,
} from '@/lib/page-share';
import { shareResultsText } from '@/lib/vaccine-checker/result-share-actions';

describe('getCurrentPageSharePayload', () => {
  it('1. uses the current page title and URL for sharing', () => {
    const payload = getCurrentPageSharePayload(
      { title: 'Hepatitis B FAQ | Vaccine Talks' },
      { href: 'https://vaccinetalks.example/faq/hepatitis-b' }
    );

    expect(payload.title).toBe('Hepatitis B FAQ | Vaccine Talks');
    expect(payload.url).toBe('https://vaccinetalks.example/faq/hepatitis-b');
  });
});

describe('shareCurrentPage', () => {
  const originalShare = navigator.share;
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: originalShare,
    });
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: originalClipboard,
    });
  });

  it('2. calls navigator.share with the current page URL when supported', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    const navigatorLike = { share, clipboard: undefined };

    const payload = {
      title: 'Vaccine Checker | Vaccine Talks',
      url: 'https://vaccinetalks.example/vaccine-checker',
    };

    const outcome = await shareCurrentPage(payload, navigatorLike);

    expect(outcome).toBe('shared');
    expect(share).toHaveBeenCalledWith({
      title: payload.title,
      text: payload.title,
      url: payload.url,
    });
  });

  it('3. copies the current page URL when Web Share API is unavailable', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    const navigatorLike = {
      share: undefined,
      clipboard: { writeText },
    };

    const payload = {
      title: 'Special populations',
      url: 'https://vaccinetalks.example/hcp-special-populations/preterm-infants',
    };

    const outcome = await shareCurrentPage(payload, navigatorLike);

    expect(outcome).toBe('copied');
    expect(writeText).toHaveBeenCalledWith(payload.url);
  });

  it('fails gracefully when share and clipboard are unavailable', async () => {
    const outcome = await shareCurrentPage(
      { title: 'About', url: 'https://vaccinetalks.example/about' },
      { share: undefined, clipboard: undefined }
    );

    expect(outcome).toBe('failed');
  });
});

describe('page share accessibility labels', () => {
  it('5. renders Arabic and English accessibility labels correctly', () => {
    expect(getSharePageAccessibilityLabel('ar')).toBe('مشاركة الصفحة');
    expect(getSharePageAccessibilityLabel('en')).toBe('Share page');
    expect(getSharePageCopiedMessage('ar')).toBe('تم نسخ رابط الصفحة.');
    expect(getSharePageCopiedMessage('en')).toBe('Page link copied.');
    expect(resolvePageLanguage('ar')).toBe('ar');
    expect(resolvePageLanguage('en')).toBe('en');
    expect(resolvePageLanguage('en-US')).toBe('en');
  });
});

describe('Vaccine Checker result share remains separate', () => {
  const originalShare = navigator.share;
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: originalShare,
    });
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: originalClipboard,
    });
  });

  it('4. keeps Share Result sharing calculated text instead of the page URL', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: share,
    });

    const outcome = await shareResultsText({
      title: 'Vaccine Checker Result',
      text: 'Due now: PCV Dose 1',
    });

    expect(outcome).toBe('shared');
    expect(share).toHaveBeenCalledWith({
      title: 'Vaccine Checker Result',
      text: 'Due now: PCV Dose 1',
    });
    expect(share).not.toHaveBeenCalledWith(
      expect.objectContaining({
        url: expect.any(String),
      })
    );
  });

  it('4b. ResultsActions still uses result-share-actions for Share Result', () => {
    const source = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsActions.tsx'),
      'utf8'
    );

    expect(source).toContain("from '@/lib/vaccine-checker/result-share-actions'");
    expect(source).toContain('shareResultsText');
    expect(source).toContain("t('shareResult')");
    expect(source).not.toContain('shareCurrentPage');
  });
});
