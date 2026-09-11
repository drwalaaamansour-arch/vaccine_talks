import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

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

describe('MenACWY presentation when product is unknown', () => {
  function expectNeutralUnknownProductMenacwy(
    results: ReturnType<typeof calculateVaccineRecommendations>,
    noteKey:
      | 'note_menacwyProductScheduleDependsOnAge'
      | 'note_menacwyProductDoseCountDependsOnProduct'
  ) {
    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menacwy?.status).toBe('due-now');
    expect(menacwy?.product).toBeUndefined();
    expect(menacwy?.noteKeys).toContain(noteKey);
    expect(menacwy?.doseLabelKey).not.toBe('doseLabel_singleDose');

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.product === 'nimenrix'
      )
    ).toBe(false);
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.product === 'menactra'
      )
    ).toBe(false);
  }

  it('auto-resolves to Nimenrix at 4 months with zero history and projects dose 2 from today', () => {
    const birth = dob(2026, 5, 9);
    const today = dob(2026, 9, 9);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.status).toBe('due-now');
    expect(menacwy?.product).toBe('nimenrix');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyProductDoseCountDependsOnProduct');

    const conditionalDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.conditionalNextDose
    );
    expect(conditionalDose2?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditionalDose2?.recommendedDate).toBe('2026-11-09');

    const conditionalBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(conditionalBooster?.recommendedDate).toBe('2027-05-09');
    expect(getConditionalNextDoseTranslationKey(conditionalBooster!)).toBe(
      'resultConditionalNimenrixInfantTwoPrimaryBooster'
    );
    expect(
      translateKey(
        'ar',
        getConditionalNextDoseTranslationKey(conditionalBooster!),
        getConditionalNextDoseTranslationParams(
          conditionalBooster!,
          (isoDate) => {
            if (!isoDate) return '';
            const [year, month, day] = isoDate.split('-').map(Number);
            return `${day}/${month}/${year}`;
          },
          (key) => key
        )
      )
    ).toBe('لو اتاخدت الجرعتين الأساسيتين في مواعيدهم، الجرعة المنشطة تبقى يوم 9/5/2027.');
    expect(
      translateKey(
        'en',
        getConditionalNextDoseTranslationKey(conditionalBooster!),
        getConditionalNextDoseTranslationParams(
          conditionalBooster!,
          (isoDate) => {
            if (!isoDate) return '';
            const [year, month, day] = isoDate.split('-').map(Number);
            return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
          },
          (key) => key
        )
      )
    ).toBe('If both primary doses are given on schedule, the booster would be on 09/05/2027.');

    expect(
      [...results.dueNow, ...results.upcoming, ...results.eligibleNow].some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.product === 'menactra'
      )
    ).toBe(false);
  });

  it('shows dose 1 due with a neutral note and no product-specific upcoming card at 9 months', () => {
    const birth = dob(2025, 11, 25);
    const today = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    expectNeutralUnknownProductMenacwy(results, 'note_menacwyProductScheduleDependsOnAge');
    expect(translateKey('ar', 'note_menacwyProductScheduleDependsOnAge')).toBe(
      'ميعاد الجرعة اللي بعد كده بيعتمد على نوع التطعيم المستخدم.'
    );
  });

  it('shows dose 1 due with a dose-count note at exactly 12 months and not single dose', () => {
    const birth = dob(2025, 8, 23);
    const today = dob(2026, 8, 23);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    expectNeutralUnknownProductMenacwy(results, 'note_menacwyProductDoseCountDependsOnProduct');
    expect(translateKey('ar', 'note_menacwyProductDoseCountDependsOnProduct')).toBe(
      'عدد الجرعات اللي بعد كده بيعتمد على نوع التطعيم المستخدم.'
    );
    expect(translateKey('ar', 'doseLabel_singleDose')).toBe('جرعة واحدة');
  });

  it('shows the same neutral dose-count behavior at 18 months with zero history', () => {
    const birth = dob(2025, 2, 23);
    const today = dob(2026, 8, 23);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    expectNeutralUnknownProductMenacwy(results, 'note_menacwyProductDoseCountDependsOnProduct');
  });

  it('uses the Nimenrix one-dose pathway when Nimenrix is recorded at 12 months', () => {
    const birth = dob(2025, 8, 23);
    const today = dob(2026, 8, 23);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.product).toBe('nimenrix');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_singleDose');
    expect(menacwy?.status).toBe('due-now');
  });

  it('projects Menactra dose 2 three calendar months after dose 1 at 12 months', () => {
    const birth = dob(2025, 8, 23);
    const today = dob(2026, 8, 23);
    const dose1 = today;
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const dose2 = [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'menactra' &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.recommendedDate).toBe('2026-11-23');
  });

  it('still projects Nimenrix booster when Nimenrix dose 1 is recorded at 9 months', () => {
    const birth = dob(2025, 11, 25);
    const today = dob(2026, 8, 25);
    const dose1 = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const booster = [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(booster?.minimumValidDate ?? booster?.recommendedDate).toBeTruthy();
  });

  it('still projects Menactra dose 2 when Menactra dose 1 is recorded in the 9–23 month pathway', () => {
    const birth = dob(2025, 11, 25);
    const dose1 = dob(2026, 8, 25);
    const today = dob(2026, 9, 25);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          {
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          } satisfies VaccineHistoryRecord,
        ],
      })
    );

    const dose2 = [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'menactra' &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.recommendedDate).toBe('2026-11-25');
  });
});
