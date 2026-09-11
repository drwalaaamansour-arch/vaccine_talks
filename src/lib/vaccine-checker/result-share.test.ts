import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { printResults, shareResultsText } from '@/lib/vaccine-checker/result-share-actions';
import {
  buildResultsShareText,
  shouldShowResultsActionButtons,
  VACCINE_CHECKER_SHARE_URL,
  type ResultsShareSnapshot,
} from '@/lib/vaccine-checker/result-share';
import { attachRoutineVaccineLedger } from '@/lib/vaccine-checker/input-adapter';
import { type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseCheckerInput(overrides: Partial<CheckerInput> = {}): CheckerInput {
  const birth = dob(2025, 3, 11);
  const today = dob(2026, 9, 11);
  return attachRoutineVaccineLedger({
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
    ...overrides,
  });
}

function recommendation(
  overrides: Partial<VaccineRecommendation> = {}
): VaccineRecommendation {
  return {
    id: 'pcv-dose1',
    vaccineCategory: 'pneumococcal',
    product: 'prevenar13',
    doseLabelKey: 'doseLabel_dose1',
    status: 'due-now',
    noteKeys: [],
    urgency: 80,
    ...overrides,
  };
}

function baseSnapshot(overrides: Partial<ResultsShareSnapshot> = {}): ResultsShareSnapshot {
  const referenceDate = dob(2026, 9, 11);
  return {
    language: 'en',
    referenceDate,
    childDobFormatted: '11/03/2025',
    childAgeFormatted: '1 year, 6 months, 0 days',
    calculationDateFormatted: '11/09/2026',
    sections: [
      { titleKey: 'dueNow', section: 'dueNow', items: [] },
      { titleKey: 'upcoming', section: 'upcoming', items: [] },
    ],
    importantNoteKeys: [],
    ...overrides,
  };
}

describe('results action visibility', () => {
  it('1. shows Print and Share actions only on Results', () => {
    expect(shouldShowResultsActionButtons('results')).toBe(true);
  });

  it('2. hides Print and Share actions on wizard input steps', () => {
    expect(shouldShowResultsActionButtons('review')).toBe(false);
    expect(shouldShowResultsActionButtons('dob')).toBe(false);
    expect(shouldShowResultsActionButtons('routineVaccines')).toBe(false);
  });
});

describe('buildResultsShareText', () => {
  it('3. omits empty result sections from shared text', () => {
    const text = buildResultsShareText(
      baseSnapshot({
        sections: [
          { titleKey: 'dueNow', section: 'dueNow', items: [] },
          {
            titleKey: 'upcoming',
            section: 'upcoming',
            items: [
              recommendation({
                id: 'flu-dose2',
                vaccineCategory: 'influenza',
                product: undefined,
                doseLabelKey: 'doseLabel_dose2',
                status: 'upcoming',
                recommendedDate: '2026-09-20',
              }),
            ],
          },
        ],
      }),
      baseCheckerInput(),
      (key, params) => translateKey('en', key, params)
    );

    expect(text).not.toContain('Due Now:');
    expect(text).toContain('Upcoming:');
    expect(text).toContain('Influenza');
  });

  it('4. uses Arabic labels in Arabic share text', () => {
    const text = buildResultsShareText(
      baseSnapshot({
        language: 'ar',
        childDobFormatted: '11/3/2025',
        childAgeFormatted: '1 سنة، 6 أشهر، 0 أيام',
        calculationDateFormatted: '11/9/2026',
        sections: [
          {
            titleKey: 'dueNow',
            section: 'dueNow',
            items: [
              recommendation({
                vaccineCategory: 'pneumococcal',
                product: 'prevenar13',
                doseLabelKey: 'doseLabel_dose1',
              }),
            ],
          },
        ],
      }),
      baseCheckerInput(),
      (key, params) => translateKey('ar', key, params)
    );

    expect(text).toContain('نتيجة Vaccine Checker');
    expect(text).toContain('مستحق دلوقتي:');
    expect(text).toContain('المكورات الرئوية');
    expect(text).toContain('الجرعة الأولى');
  });

  it('5. uses English labels in English share text', () => {
    const text = buildResultsShareText(
      baseSnapshot({
        sections: [
          {
            titleKey: 'dueNow',
            section: 'dueNow',
            items: [
              recommendation({
                vaccineCategory: 'meningococcalB',
                product: 'bexsero',
                doseLabelKey: 'doseLabel_dose1',
              }),
            ],
          },
        ],
      }),
      baseCheckerInput(),
      (key, params) => translateKey('en', key, params)
    );

    expect(text).toContain('Vaccine Checker Result');
    expect(text).toContain('Due Now:');
    expect(text).toContain('Meningococcal B (Bexsero)');
    expect(text).toContain('Dose 1');
  });

  it('6. preserves already-calculated dates in shared text', () => {
    const text = buildResultsShareText(
      baseSnapshot({
        sections: [
          {
            titleKey: 'upcoming',
            section: 'upcoming',
            items: [
              recommendation({
                id: 'varicella-upcoming',
                vaccineCategory: 'varicella',
                doseLabelKey: 'doseLabel_dose1',
                status: 'upcoming',
                recommendedDate: '2026-10-02',
              }),
            ],
          },
        ],
      }),
      baseCheckerInput(),
      (key, params) => translateKey('en', key, params)
    );

    expect(text).toContain('02/10/2026');
  });

  it('includes the Vaccine Talks link', () => {
    const text = buildResultsShareText(
      baseSnapshot(),
      baseCheckerInput(),
      (key, params) => translateKey('en', key, params)
    );

    expect(text).toContain(VACCINE_CHECKER_SHARE_URL);
    expect(text).toContain('Vaccine Talks');
  });
});

describe('shareResultsText', () => {
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

  it('7. uses the Web Share API when available', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: share,
    });

    const outcome = await shareResultsText({
      title: 'Vaccine Checker Result',
      text: 'Example share body',
    });

    expect(outcome).toBe('shared');
    expect(share).toHaveBeenCalledWith({
      title: 'Vaccine Checker Result',
      text: 'Example share body',
    });
  });

  it('8. falls back to clipboard when Web Share API is unavailable', async () => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: undefined,
    });
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    const outcome = await shareResultsText({
      title: 'Vaccine Checker Result',
      text: 'Example share body',
    });

    expect(outcome).toBe('copied');
    expect(writeText).toHaveBeenCalledWith('Example share body');
  });

  it('fails gracefully when share and clipboard are unavailable', async () => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    });

    await expect(
      shareResultsText({
        title: 'Vaccine Checker Result',
        text: 'Example share body',
      })
    ).resolves.toBe('failed');
  });
});

describe('printResults', () => {
  it('calls window.print when available', () => {
    const print = vi.fn();
    vi.stubGlobal('window', { print });
    printResults();
    expect(print).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});

describe('print stylesheet', () => {
  it('9. hides navigation/actions and preserves printable result content', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');
    expect(css).toContain('@media print');
    expect(css).toContain('.vaccine-checker-no-print');
    expect(css).toContain('.vaccine-checker-print-area');
    expect(css).toContain('.header');
    expect(css).toContain('.chat-button');
    expect(css).toContain('break-inside: avoid');
  });
});
