import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { getTimingDisplayLines, inferTimingKind } from '@/lib/vaccine-checker/recommendation-timing';
import {
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  getProductDisplayLabel,
} from '@/lib/vaccine-checker/result-presentation';

function dob(year: number, month: number, day: number): Date {
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
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
    ...overrides,
  };
}

const intervalNoteAr =
  'الفرق المفضل بين الجرعتين شهرين، وأقل فرق مسموح شهر.';

describe('Bexsero product label on MenB result cards', () => {
  it('shows Bexsero on both due-now dose 1 and upcoming conditional cards for infant zero-dose catch-up', () => {
    const birth = dob(2026, 5, 9);
    const today = dob(2026, 9, 9);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menbDueNow = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menbDueNow?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menbDueNow?.product).toBe('bexsero');
    expect(getProductDisplayLabel(menbDueNow?.product)).toBe('Bexsero');

    const menbUpcoming = results.upcoming.filter((item) => item.vaccineCategory === 'meningococcalB');
    expect(menbUpcoming.length).toBeGreaterThan(0);
    expect(menbUpcoming.every((item) => item.product === 'bexsero')).toBe(true);
    expect(menbUpcoming.every((item) => getProductDisplayLabel(item.product) === 'Bexsero')).toBe(
      true
    );
  });
});

describe('Bexsero parent-facing timing text (age 2+)', () => {
  it('shows Dose 1 due now, conditional Dose 2 at +2 months, and interval note at age 10 with zero doses', () => {
    const birth = dob(2016, 8, 25);
    const today = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menbDose1 = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menbDose1?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menbDose1?.status).toBe('due-now');
    expect(menbDose1?.product).toBe('bexsero');

    const menbDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-10-25');
    expect(menbDose2?.noteKeys).toContain('note_menbTwoToNineYearInterval');
    expect(translateKey('ar', 'note_menbTwoToNineYearInterval')).toBe(intervalNoteAr);
    expect(
      translateKey('ar', 'resultConditionalNextFixedDose', {
        previousDose: 'الجرعة الأولى',
        nextDose: 'الجرعة الثانية',
        date: '25/10/2026',
      })
    ).toBe('لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم 25/10/2026.');
  });

  it('calculates Dose 2 from actual Dose 1 date with the same interval note at age 5', () => {
    const birth = dob(2021, 8, 25);
    const dose1 = dob(2026, 6, 25);
    const today = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const menbDose2 = [...results.dueNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-08-25');
    expect(menbDose2?.noteKeys).toContain('note_menbTwoToNineYearInterval');
    expect(translateKey('ar', 'note_menbTwoToNineYearInterval')).toBe(intervalNoteAr);
  });

  it('does not attach the 2–9 year interval note to infant Bexsero conditional dose 2', () => {
    const birth = dob(2025, 8, 25);
    const today = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menbDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-10-25');
    expect(menbDose2?.noteKeys).not.toContain('note_menbTwoToNineYearInterval');
  });
});

describe('Bexsero 6–11 month start booster timing', () => {
  it('projects minimum-start-only booster for 9-month catch-up with no artificial 15-month cap', () => {
    const birth = dob(2025, 11, 27);
    const today = dob(2026, 8, 27);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menbDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-10-27');

    const menbBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBooster?.timingKind).toBe('MINIMUM_START_ONLY');
    expect(menbBooster?.minimumValidDate).toBe('2026-12-27');
    expect(menbBooster?.recommendedDate).toBe('2026-12-27');
    expect(menbBooster?.windowStart).toBeUndefined();
    expect(menbBooster?.windowEnd).toBeUndefined();
    expect(getConditionalNextDoseTranslationKey(menbBooster!)).toBe(
      'resultConditionalBoosterStart'
    );
    expect(
      getConditionalNextDoseTranslationParams(
        menbBooster!,
        (isoDate) => isoDate ?? '',
        (key) => key
      )
    ).toEqual({ date: '2026-12-27' });
    expect(
      translateKey('en', 'resultConditionalBoosterStart', { date: '27/12/2026' })
    ).toBe('If the primary doses are given on schedule, the booster can start from 27/12/2026.');
    expect(
      translateKey('ar', 'resultConditionalBoosterStart', { date: '27/12/2026' })
    ).toContain('27/12/2026');
  });

  it('uses minimum-start-only booster after two recorded primary doses started at 9 months', () => {
    const birth = dob(2025, 11, 27);
    const dose1 = dob(2026, 8, 27);
    const dose2 = dob(2026, 10, 27);
    const today = dob(2026, 10, 27);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const menbBooster = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_booster'
    );
    expect(inferTimingKind(menbBooster!)).toBe('MINIMUM_START_ONLY');
    expect(menbBooster?.minimumValidDate).toBe('2026-12-27');
    expect(menbBooster?.windowEnd).toBeUndefined();
    expect(getTimingDisplayLines(menbBooster!, today)).toEqual([
      {
        key: 'resultMinimumStartBooster',
        params: { startDate: '2026-12-27' },
      },
    ]);
  });

  it('keeps the 12–15 month booster window for 2–5 month infant start', () => {
    const birth = dob(2025, 3, 15);
    const dose1 = dob(2025, 5, 15);
    const dose2 = dob(2025, 7, 15);
    const today = dob(2025, 10, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const menbBooster = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_booster'
    );
    expect(inferTimingKind(menbBooster!)).toBe('RECOMMENDED_WINDOW');
    expect(menbBooster?.windowStart).toBe('2026-03-15');
    expect(menbBooster?.windowEnd).toBe('2026-06-15');
    expect(menbBooster?.minimumValidDate).toBeUndefined();

    const conditionalResults = calculateVaccineRecommendations(
      baseInput(birth, addMonths(birth, 2))
    );
    const conditionalBooster = conditionalResults.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(conditionalBooster?.timingKind).toBe('RECOMMENDED_WINDOW');
    expect(conditionalBooster?.windowEnd).toBe('2026-06-15');
    expect(conditionalBooster?.windowStart).toBeTruthy();
  });
});
