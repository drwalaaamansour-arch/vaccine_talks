import { describe, expect, it } from 'vitest';
import { addMonths, toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getTimingDisplayLines,
  inferTimingKind,
} from '@/lib/vaccine-checker/recommendation-timing';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function ref(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(
  birth: Date,
  today: Date,
  vaccineHistory: VaccineHistoryRecord[]
): CheckerInput {
  return {
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory,
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
  };
}

function prevenar13PrimaryHistory(birth: Date): VaccineHistoryRecord {
  const dose1 = addMonths(birth, 2);
  const dose2 = addMonths(dose1, 2);
  const dose3 = addMonths(dose2, 2);

  return {
    category: 'pneumococcal',
    product: 'prevenar13',
    numberOfDoses: 3,
    firstDoseDate: dose1,
    lastDoseDate: dose3,
    doseDates: [dose1, dose2, dose3],
  };
}

function findBooster(results: ReturnType<typeof calculateVaccineRecommendations>) {
  return [...results.dueNow, ...results.upcoming].find(
    (item) =>
      item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_booster'
  );
}

function formatTimingLine(
  line: { key: string; params: Record<string, string> },
  language: 'en' | 'ar'
): string {
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(line.params)) {
    if (key.endsWith('Date')) {
      const [year, month, day] = value.split('-').map(Number);
      params[key] =
        language === 'ar'
          ? `${day}/${month}/${year}`
          : `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
      continue;
    }

    params[key] = value;
  }

  return translateKey(language, line.key, params);
}

function twoInfantDoseHistory(birth: Date): VaccineHistoryRecord {
  const dose1 = dob(2025, 9, 4);
  const dose2 = dob(2025, 11, 4);

  return {
    category: 'pneumococcal',
    product: 'prevenar13',
    numberOfDoses: 2,
    firstDoseDate: dose1,
    lastDoseDate: dose2,
    doseDates: [dose1, dose2],
  };
}

describe('PCV booster 11–15 month preferred window (Prevenar 13, two infant doses)', () => {
  const birth = dob(2025, 3, 4);

  it('shows the current 11–15 month preferred window at 12 months', () => {
    const today = ref(2026, 3, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster).toBeDefined();
    expect(booster!.windowStart).toBe('2026-02-04');
    expect(booster!.windowEnd).toBe('2026-06-04');
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(false);
    expect(getTimingDisplayLines(booster!, today)[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('treats exactly 15 months as still inside the preferred window', () => {
    const today = ref(2026, 6, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(false);
    expect(getTimingDisplayLines(booster!, today)[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('shows due now with the missed preferred window at 18 months', () => {
    const today = ref(2026, 9, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(true);
    expect(booster!.recommendedDate).toBeUndefined();

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPastPreferredBoosterWindow');
    expect(formatTimingLine(lines[0]!, 'ar')).toBe(
      'الفترة المفضلة للجرعة المنشطة كانت من 4/2/2026 إلى 4/6/2026، ولسه ممكن الطفل ياخدها دلوقتي.'
    );
  });

  it('matches the exact two-dose regression case', () => {
    const today = ref(2026, 9, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster?.doseLabelKey).toBe('doseLabel_booster');
    expect(booster!.windowStart).toBe('2026-02-04');
    expect(booster!.windowEnd).toBe('2026-06-04');
    expect(translateKey('ar', 'doseLabel_booster')).toBe('الجرعة المنشطة');

    const lines = getTimingDisplayLines(booster!, today);
    expect(formatTimingLine(lines[0]!, 'ar')).toBe(
      'الفترة المفضلة للجرعة المنشطة كانت من 4/2/2026 إلى 4/6/2026، ولسه ممكن الطفل ياخدها دلوقتي.'
    );
    expect(formatTimingLine(lines[0]!, 'en')).toBe(
      'The preferred booster window was from 04/02/2026 to 04/06/2026, and the dose can still be given now.'
    );
  });
});

describe('PCV booster 11–15 month preferred window (Prevenar 13, three primary doses)', () => {
  const birth = dob(2025, 3, 2);

  it('shows the full preferred window while the child is inside 11–15 months', () => {
    const today = ref(2026, 4, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [prevenar13PrimaryHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster).toBeDefined();
    expect(inferTimingKind(booster!)).toBe('RECOMMENDED_WINDOW');
    expect(booster!.windowStart).toBe(toIsoDate(addMonths(birth, 11)));
    expect(booster!.windowEnd).toBe(toIsoDate(addMonths(birth, 15)));
    expect(booster!.recommendedDate).toBeUndefined();
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(false);

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines).toHaveLength(1);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
    expect(formatTimingLine(lines[0]!, 'ar')).toBe(
      'الفترة المفضلة للجرعة المنشطة: من 2/2/2026 إلى 2/6/2026'
    );
  });

  it('treats the last day of the 15-month window as inside the preferred window', () => {
    const today = ref(2026, 6, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [prevenar13PrimaryHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(false);

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('keeps a missed booster due now after 15 months with the missed preferred window', () => {
    const today = ref(2026, 7, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [prevenar13PrimaryHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(true);
    expect(booster!.recommendedDate).toBeUndefined();
    expect(booster!.windowStart).toBe('2026-02-02');
    expect(booster!.windowEnd).toBe('2026-06-02');

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPastPreferredBoosterWindow');
    expect(formatTimingLine(lines[0]!, 'en')).toBe(
      'The preferred booster window was from 02/02/2026 to 02/06/2026, and the dose can still be given now.'
    );
  });

  it('matches the 18-month overdue booster example with parent-facing wording', () => {
    const today = ref(2026, 9, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [prevenar13PrimaryHistory(birth)])
    );

    const booster = findBooster(results);
    expect(booster).toBeDefined();
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(true);

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPastPreferredBoosterWindow');
    expect(formatTimingLine(lines[0]!, 'ar')).toBe(
      'الفترة المفضلة للجرعة المنشطة كانت من 2/2/2026 إلى 2/6/2026، ولسه ممكن الطفل ياخدها دلوقتي.'
    );
    expect(formatTimingLine(lines[0]!, 'en')).toBe(
      'The preferred booster window was from 02/02/2026 to 02/06/2026, and the dose can still be given now.'
    );
  });
});
