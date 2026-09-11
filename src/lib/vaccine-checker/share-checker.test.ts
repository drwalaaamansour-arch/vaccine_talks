import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  buildVaccineCheckerShareUrl,
  shareVaccineChecker,
} from '@/lib/vaccine-checker/share-checker';
import { shareResultsText } from '@/lib/vaccine-checker/result-share-actions';
import { translateKey } from '@/translations/translate';

describe('buildVaccineCheckerShareUrl', () => {
  it('1. always ends with /vaccine-checker', () => {
    const url = buildVaccineCheckerShareUrl('https://www.vaccinetalks.com');
    expect(url.endsWith('/vaccine-checker')).toBe(true);
  });

  it('2. uses the current origin', () => {
    expect(buildVaccineCheckerShareUrl('http://localhost:3000')).toBe(
      'http://localhost:3000/vaccine-checker'
    );
    expect(buildVaccineCheckerShareUrl('https://preview.vercel.app')).toBe(
      'https://preview.vercel.app/vaccine-checker'
    );
  });
});

describe('shareVaccineChecker', () => {
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

  it('3. passes the checker URL to navigator.share', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    const payload = {
      title: 'Vaccine Checker | Vaccine Talks',
      text: translateKey('en', 'shareCheckerText'),
      url: buildVaccineCheckerShareUrl('https://www.vaccinetalks.com'),
    };

    const outcome = await shareVaccineChecker(payload, { share, clipboard: undefined });

    expect(outcome).toBe('shared');
    expect(share).toHaveBeenCalledWith(payload);
    expect(share.mock.calls[0][0].url).toMatch(/\/vaccine-checker$/);
  });

  it('4. copies the checker URL when Web Share API is unavailable', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    const url = buildVaccineCheckerShareUrl('https://preview.vercel.app');

    const outcome = await shareVaccineChecker(
      {
        title: 'Vaccine Checker',
        text: translateKey('en', 'shareCheckerText'),
        url,
      },
      { share: undefined, clipboard: { writeText } }
    );

    expect(outcome).toBe('copied');
    expect(writeText).toHaveBeenCalledWith(url);
  });
});

describe('Share Vaccine Checker labels', () => {
  it('5. exposes correct Arabic label and text', () => {
    expect(translateKey('ar', 'shareChecker')).toBe('شارك Vaccine Checker');
    expect(translateKey('ar', 'shareCheckerText')).toBe(
      'جرّب Vaccine Checker لمعرفة التطعيمات المناسبة حسب عمر الطفل.'
    );
    expect(translateKey('ar', 'shareCheckerCopied')).toBe('تم نسخ رابط Vaccine Checker.');
  });

  it('6. exposes correct English label and text', () => {
    expect(translateKey('en', 'shareChecker')).toBe('Share Vaccine Checker');
    expect(translateKey('en', 'shareCheckerText')).toBe(
      "Try the Vaccine Checker to see which vaccines may be appropriate for your child's age."
    );
    expect(translateKey('en', 'shareCheckerCopied')).toBe('Vaccine Checker link copied.');
  });
});

describe('Share Result remains separate', () => {
  it('7. keeps Share Result behavior unchanged', async () => {
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

    const resultsActions = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsActions.tsx'),
      'utf8'
    );
    const pageShell = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/VaccineCheckerPageShell.tsx'),
      'utf8'
    );
    expect(resultsActions).toContain('shareResultsText');
    expect(resultsActions).toContain("t('shareResult')");
    expect(resultsActions).not.toContain('shareVaccineChecker');
    expect(pageShell).not.toContain('ShareCheckerButton');
  });
});

describe('Home Vaccine Checker CTA', () => {
  it('includes Share Vaccine Checker on the homepage card', () => {
    const homeCta = readFileSync(
      resolve(process.cwd(), 'src/components/HomeVaccineCheckerCta.tsx'),
      'utf8'
    );

    expect(homeCta).toContain('<ShareCheckerButton appearance="link"');
    expect(homeCta).toContain('home-vaccine-checker-share');
  });
});
