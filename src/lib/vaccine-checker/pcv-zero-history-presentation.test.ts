import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';
import {
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
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

function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}

describe('PCV zero-history simplified presentation', () => {
  const birth = dob(2026, 5, 9);
  const today = dob(2026, 9, 9);

  it('shows PCV dose 1 due now with a single product-dependency note in Arabic and English', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(pcv?.status).toBe('due-now');
    expect(pcv?.product).toBeUndefined();
    expect(pcv?.noteKeys).toEqual(['note_pcvRemainingDosesDependOnProduct']);
    expect(translateKey('ar', 'note_pcvRemainingDosesDependOnProduct')).toBe(
      'باقي عدد الجرعات ومواعيدها بتختلف حسب نوع التطعيم المستخدم.'
    );
    expect(translateKey('en', 'note_pcvRemainingDosesDependOnProduct')).toBe(
      'The number and timing of the remaining doses depend on the PCV product used.'
    );
  });

  it('does not show product-specific schedules or conditional PCV cards for zero history', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    expect(results.needsReview.some((item) => item.vaccineCategory === 'pneumococcal')).toBe(false);
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
      )
    ).toBe(false);
    expect(
      [...results.dueNow, ...results.upcoming].some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.product
      )
    ).toBe(false);
  });

  it('works at 6 months with the same simplified note only', () => {
    const sixMonthBirth = dob(2026, 3, 9);
    const sixMonthToday = dob(2026, 9, 9);
    const results = calculateVaccineRecommendations(baseInput(sixMonthBirth, sixMonthToday));

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.noteKeys).toContain('note_pcvRemainingDosesDependOnProduct');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('continues to show the exact remaining schedule when product and doses are known', () => {
    const dose1 = dob(2026, 7, 9);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const dose2 = results.dueNow.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.product === 'prevenar13' &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBe('2026-09-09');
    expect(dose2?.noteKeys).not.toContain('note_pcvRemainingDosesDependOnProduct');
    expect(
      results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal')?.noteKeys
    ).not.toContain('note_pcvRemainingDosesDependOnProduct');
  });
});

describe('PCV 7–11 month zero-history common catch-up schedule', () => {
  const birth = dob(2025, 10, 11);
  const today = dob(2026, 9, 11);

  it('shows dose 1 due now without the product-dependency note', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(pcv?.status).toBe('due-now');
    expect(pcv?.noteKeys).not.toContain('note_pcvRemainingDosesDependOnProduct');
  });

  it('projects dose 2 and booster from today with the shared 7–11 month schedule', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const pcvDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(pcvDose2?.recommendedDate).toBe('2026-11-11');
    expect(getConditionalNextDoseTranslationKey(pcvDose2!)).toBe('resultConditionalNextFixedDose');
    expect(
      translateKey(
        'ar',
        'resultConditionalNextFixedDose',
        getConditionalNextDoseTranslationParams(
          pcvDose2!,
          () => '11/11/2026',
          (key) => (key === 'doseLabel_dose1' ? 'الجرعة الأولى' : 'الجرعة الثانية')
        )
      )
    ).toBe('لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم 11/11/2026.');

    const pcvBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(pcvBooster?.recommendedDate).toBe('2027-01-11');
    expect(getConditionalNextDoseTranslationKey(pcvBooster!)).toBe(
      'resultConditionalPcvSevenToElevenBooster'
    );
    expect(
      translateKey('ar', 'resultConditionalPcvSevenToElevenBooster', { date: '11/01/2027' })
    ).toBe('لو الجرعة الثانية اتاخدت في ميعادها، الجرعة المنشطة تبدأ من 11/01/2027.');
    expect(
      translateKey('en', 'resultConditionalPcvSevenToElevenBooster', { date: '11/01/2027' })
    ).toBe('If Dose 2 is given as scheduled, the booster can start from 11/01/2027.');
  });
});

describe('PCV 12–23 month zero-history common catch-up schedule', () => {
  const birth = dob(2025, 9, 11);
  const today = dob(2026, 9, 11);

  it('shows dose 1 due now without the product-dependency note', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(pcv?.status).toBe('due-now');
    expect(pcv?.noteKeys).not.toContain('note_pcvRemainingDosesDependOnProduct');
  });

  it('projects dose 2 from today without a booster for the shared 12–23 month schedule', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const pcvDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(pcvDose2?.recommendedDate).toBe('2026-11-11');
    expect(getConditionalNextDoseTranslationKey(pcvDose2!)).toBe('resultConditionalNextFixedDose');
    expect(
      translateKey(
        'ar',
        'resultConditionalNextFixedDose',
        getConditionalNextDoseTranslationParams(
          pcvDose2!,
          () => '11/11/2026',
          (key) => (key === 'doseLabel_dose1' ? 'الجرعة الأولى' : 'الجرعة الثانية')
        )
      )
    ).toBe('لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم 11/11/2026.');
    expect(
      translateKey('en', 'resultConditionalNextFixedDose', {
        previousDose: 'Dose 1',
        nextDose: 'Dose 2',
        date: '11/11/2026',
      })
    ).toBe('If Dose 1 is given today, Dose 2 would be on 11/11/2026.');

    expect(
      results.upcoming.some(
        (item) =>
          item.vaccineCategory === 'pneumococcal' &&
          item.conditionalNextDose &&
          item.doseLabelKey === 'doseLabel_booster'
      )
    ).toBe(false);
  });

  it('keeps MenACWY product-dependent wording at 12 months', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.noteKeys).toContain('note_menacwyProductDoseCountDependsOnProduct');
  });
});

describe('MenACWY infant presentation with zero history', () => {
  const birth = dob(2026, 5, 9);
  const today = dob(2026, 9, 9);

  it('shows complete Nimenrix infant schedule without product-dependent wording', () => {
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.product).toBe('nimenrix');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');
  });
});
