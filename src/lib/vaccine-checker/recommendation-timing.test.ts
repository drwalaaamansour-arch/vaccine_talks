import { describe, expect, it } from 'vitest';
import { addMonths, addWeeks, toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getTimingDisplayLines,
  inferTimingKind,
  normalizeRecommendationTiming,
} from '@/lib/vaccine-checker/recommendation-timing';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function ref(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(
  birth: Date,
  today: Date,
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  return {
    dob: birth,
    referenceDate: today,
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [],
    ...overrides,
  };
}

function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}

function findRecommendation(
  results: ReturnType<typeof calculateVaccineRecommendations>,
  category: string,
  doseLabelKey: string
) {
  const all = [
    ...results.dueNow,
    ...results.eligibleNow,
    ...results.upcoming,
    ...results.ageLimitPassed,
    ...results.completed,
    ...results.needsReview,
  ];
  return all.find(
    (item) => item.vaccineCategory === category && item.doseLabelKey === doseLabelKey
  );
}

describe('recommendation timing presentation', () => {
  const birth = dob(2025, 1, 15);

  it('PCV booster uses full 11–15 month age window for Vaxneuvance', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const today = ref(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'vaxneuvance',
            numberOfDoses: 2,
            lastDoseDate: dose2,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'pneumococcal', 'doseLabel_booster');
    expect(booster).toBeDefined();
    expect(inferTimingKind(booster!)).toBe('RECOMMENDED_WINDOW');
    expect(booster!.windowStart).toBe(toIsoDate(addMonths(birth, 11)));
    expect(booster!.windowEnd).toBe(toIsoDate(addMonths(birth, 15)));
    expect(booster!.recommendedDate).toBeUndefined();

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('PCV standard booster uses full 11–15 month age window', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const dose3 = dob(2025, 7, 15);
    const today = ref(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 3,
            lastDoseDate: dose3,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2, dose3],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'pneumococcal', 'doseLabel_booster');
    expect(inferTimingKind(booster!)).toBe('RECOMMENDED_WINDOW');
    expect(booster!.windowStart).toBe(toIsoDate(addMonths(birth, 11)));
    expect(booster!.windowEnd).toBe(toIsoDate(addMonths(birth, 15)));
    expect(booster!.recommendedDate).toBeUndefined();
  });

  it('MenB booster for 2–5 month start uses 12–15 month window with interval floor', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const today = ref(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalB',
            numberOfDoses: 2,
            lastDoseDate: dose2,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'meningococcalB', 'doseLabel_booster');
    expect(inferTimingKind(booster!)).toBe('RECOMMENDED_WINDOW');
    expect(booster!.windowStart).toBe(toIsoDate(addMonths(birth, 12)));
    expect(booster!.windowEnd).toBe(toIsoDate(addMonths(birth, 15)));
  });

  it('MenB booster for 12–23 month start uses 12–23 months after last primary dose', () => {
    const infantBirth = dob(2024, 1, 15);
    const dose1 = dob(2025, 2, 15);
    const dose2 = dob(2025, 4, 15);
    const today = ref(2025, 6, 15);
    const results = calculateVaccineRecommendations(
      baseInput(infantBirth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalB',
            numberOfDoses: 2,
            lastDoseDate: dose2,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'meningococcalB', 'doseLabel_booster');
    expect(booster).toBeDefined();
    expect(inferTimingKind(booster!)).toBe('RECOMMENDED_WINDOW');
    expect(booster!.windowStart).toBe(toIsoDate(addMonths(dose2, 12)));
    expect(booster!.windowEnd).toBe(toIsoDate(addMonths(dose2, 23)));
    expect(booster!.status).toBe('upcoming');
  });

  it('Nimenrix booster uses minimum start only without invented end date', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const today = ref(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 2,
            lastDoseDate: dose2,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'meningococcalACWY', 'doseLabel_booster');
    expect(inferTimingKind(booster!)).toBe('MINIMUM_START_ONLY');
    expect(booster!.minimumValidDate).toBe(toIsoDate(addMonths(birth, 12)));
    expect(booster!.windowEnd).toBeUndefined();
    expect(booster!.recommendedDate).toBeUndefined();

    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultMinimumStartBooster');
  });

  it('PCV dose 2 fixed 2-month interval remains a single recommended date', () => {
    const dose1 = dob(2025, 3, 15);
    const today = ref(2025, 4, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 1,
            lastDoseDate: dose1,
            firstDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const dose2 = findRecommendation(results, 'pneumococcal', 'doseLabel_dose2');
    expect(inferTimingKind(dose2!)).toBe('FIXED_DATE');
    expect(dose2!.recommendedDate).toBe(toIsoDate(addMonths(dose1, 2)));
    expect(dose2!.windowStart).toBeUndefined();
  });

  it('Influenza dose 2 fixed 4-week interval remains a single recommended date', () => {
    const infantBirth = dob(2024, 6, 1);
    const dose1 = dob(2025, 9, 15);
    const today = ref(2025, 10, 1);
    const results = calculateVaccineRecommendations(
      baseInput(infantBirth, today, {
        vaccineHistory: [
          history({
            category: 'influenza',
            numberOfDoses: 1,
            lastDoseDate: dose1,
            firstDoseDate: dose1,
            doseDates: [dose1],
            influenzaPrimingComplete: false,
          }),
        ],
      })
    );

    const dose2 = findRecommendation(results, 'influenza', 'doseLabel_dose2');
    expect(dose2).toBeDefined();
    expect(inferTimingKind(dose2!)).toBe('FIXED_DATE');
    expect(dose2!.recommendedDate).toBe(toIsoDate(addWeeks(dose1, 4)));
    expect(dose2!.windowStart).toBeUndefined();
  });

  it('Hepatitis A dose 2 fixed 6-month interval remains a single recommended date', () => {
    const dose1 = dob(2025, 1, 15);
    const today = ref(2025, 6, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hepatitisA',
            numberOfDoses: 1,
            lastDoseDate: dose1,
            firstDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const dose2 = findRecommendation(results, 'hepatitisA', 'doseLabel_dose2');
    expect(inferTimingKind(dose2!)).toBe('FIXED_DATE');
    expect(dose2!.recommendedDate).toBe(toIsoDate(addMonths(dose1, 6)));
  });

  it('Varicella dose 2 fixed 3-month interval remains a single recommended date for children under 13', () => {
    const dose1 = dob(2025, 3, 15);
    const today = ref(2025, 5, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        mmrDate: dob(2025, 1, 1),
        mmrDates: [dob(2025, 1, 1)],
        vaccineHistory: [
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            lastDoseDate: dose1,
            firstDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const dose2 = findRecommendation(results, 'varicella', 'doseLabel_dose2');
    expect(inferTimingKind(dose2!)).toBe('FIXED_DATE');
    expect(dose2!.recommendedDate).toBe(toIsoDate(addMonths(dose1, 3)));
    expect(dose2!.windowStart).toBeUndefined();
  });

  it('Rotavirus dose 1 age limits are age limits, not booster windows', () => {
    const today = ref(2025, 2, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'rotavirus',
            product: 'rotarix',
            numberOfDoses: 0,
            lastDoseDate: null,
            firstDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const dose1 = findRecommendation(results, 'rotavirus', 'doseLabel_dose1');
    expect(inferTimingKind(dose1!)).toBe('AGE_LIMIT_RANGE');
    expect(dose1!.windowStart).toBeUndefined();
    expect(dose1!.earliestDate).toBe(toIsoDate(addWeeks(birth, 6)));
    expect(dose1!.latestDate).toBe(toIsoDate(addWeeks(birth, 20)));

    const lines = getTimingDisplayLines(dose1!, today);
    expect(lines[0]?.key).toBe('resultAgeLimitRange');
  });

  it('child before a true window is upcoming with full range shown', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const dose3 = dob(2025, 7, 15);
    const today = ref(2025, 8, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 3,
            lastDoseDate: dose3,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2, dose3],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'pneumococcal', 'doseLabel_booster');
    expect(booster!.status).toBe('upcoming');
    expect(booster!.pastPreferredWindow).toBe(false);
    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('child inside a true window is due now with full range shown', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const dose3 = dob(2025, 7, 15);
    const today = ref(2026, 1, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 3,
            lastDoseDate: dose3,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2, dose3],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'pneumococcal', 'doseLabel_booster');
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(false);
    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
  });

  it('child past a true window is due now with original preferred range wording', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const dose3 = dob(2025, 7, 15);
    const today = ref(2026, 6, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 3,
            lastDoseDate: dose3,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2, dose3],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'pneumococcal', 'doseLabel_booster');
    expect(booster!.status).toBe('due-now');
    expect(booster!.pastPreferredWindow).toBe(true);
    const lines = getTimingDisplayLines(booster!, today);
    expect(lines[0]?.key).toBe('resultPastPreferredBoosterWindow');
  });

  it('minimum interval is not displayed as a preferred range', () => {
    const dose1 = dob(2025, 3, 15);
    const dose2 = dob(2025, 5, 15);
    const today = ref(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 2,
            lastDoseDate: dose2,
            firstDoseDate: dose1,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const booster = findRecommendation(results, 'meningococcalACWY', 'doseLabel_booster');
    expect(inferTimingKind(booster!)).toBe('MINIMUM_START_ONLY');
    expect(booster!.windowStart).toBeUndefined();
    expect(booster!.windowEnd).toBeUndefined();
    const normalized = normalizeRecommendationTiming(booster!, today);
    expect(normalized.timingKind).toBe('MINIMUM_START_ONLY');
  });
});
