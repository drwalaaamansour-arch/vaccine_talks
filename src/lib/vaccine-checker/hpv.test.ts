import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getAgeAtFirstDoseYears,
  isHpvTwoDoseSeries,
} from '@/lib/vaccine-checker/rules/hpv';
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

function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}

describe('HPV product-specific age-at-first-dose helpers', () => {
  const birth = dob(2012, 8, 24);

  it('classifies Cervarix as 2-dose through age 14 and 3-dose from age 15', () => {
    expect(isHpvTwoDoseSeries('cervarix', birth, dob(2026, 8, 24))).toBe(true);
    expect(isHpvTwoDoseSeries('cervarix', birth, dob(2027, 8, 25))).toBe(false);
  });

  it('classifies Gardasil 4 as 2-dose through age 13 and 3-dose from age 14', () => {
    expect(isHpvTwoDoseSeries('gardasil4', birth, dob(2025, 8, 24))).toBe(true);
    expect(isHpvTwoDoseSeries('gardasil4', birth, dob(2026, 8, 24))).toBe(false);
  });

  it('classifies Gardasil 9 as 2-dose through age 14 and 3-dose from age 15', () => {
    expect(isHpvTwoDoseSeries('gardasil9', birth, dob(2026, 8, 24))).toBe(true);
    expect(isHpvTwoDoseSeries('gardasil9', birth, dob(2027, 8, 25))).toBe(false);
  });

  it('does not group Gardasil 4 and Gardasil 9 under the same age cutoff at age 14', () => {
    const firstDoseAt14 = dob(2026, 8, 24);
    expect(isHpvTwoDoseSeries('gardasil4', birth, firstDoseAt14)).toBe(false);
    expect(isHpvTwoDoseSeries('gardasil9', birth, firstDoseAt14)).toBe(true);
    expect(isHpvTwoDoseSeries('cervarix', birth, firstDoseAt14)).toBe(true);
  });
});

describe('HPV zero-dose catch-up by current age', () => {
  it('shows Dose 1 due now at age 9 with a projected 6-month Dose 2 and no product note', () => {
    const birth = dob(2017, 8, 24);
    const today = dob(2026, 8, 24);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(hpv?.status).toBe('due-now');
    expect(hpv?.noteKeys).toEqual([]);

    const conditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'hpv' && item.conditionalNextDose
    );
    expect(conditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditional?.recommendedDate).toBe('2027-02-24');
    expect(
      translateKey('ar', 'resultConditionalHpvTwoDoseSecond', { date: '24/02/2027' })
    ).toBe('لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى بعد 6 شهور يوم 24/02/2027.');
  });

  it('uses 2-dose pathways for age 13 without requiring product selection', () => {
    const birth = dob(2013, 8, 24);
    const today = dob(2026, 8, 24);

    for (const product of ['cervarix', 'gardasil4', 'gardasil9'] as const) {
      expect(isHpvTwoDoseSeries(product, birth, today)).toBe(true);
    }

    const results = calculateVaccineRecommendations(baseInput(birth, today));
    expect(results.dueNow.find((item) => item.vaccineCategory === 'hpv')?.noteKeys).toEqual([]);
    expect(
      results.upcoming.some((item) => item.vaccineCategory === 'hpv' && item.conditionalNextDose)
    ).toBe(true);
  });

  it('requires product-dependent remaining doses at exact age 14 with zero previous doses', () => {
    const birth = dob(2012, 8, 24);
    const today = dob(2026, 8, 24);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.noteKeys).toContain('note_hpvRemainingDosesDependOnProduct');
    expect(
      translateKey('ar', 'note_hpvRemainingDosesDependOnProduct')
    ).toBe('عدد الجرعات اللي بعد كده بيعتمد على نوع تطعيم HPV المستخدم.');
    expect(
      results.upcoming.some((item) => item.vaccineCategory === 'hpv' && item.conditionalNextDose)
    ).toBe(false);
  });

  it('shows a 3-dose series note at age 15 with zero previous doses and no product-dependent dose-count wording', () => {
    const birth = dob(2011, 9, 11);
    const today = dob(2026, 9, 11);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(hpv?.status).toBe('due-now');
    expect(hpv?.noteKeys).toEqual(['note_hpvThreeDoseSeriesTimingDependsOnProduct']);
    expect(hpv?.noteKeys).not.toContain('note_hpvRemainingDosesDependOnProduct');
    expect(translateKey('en', 'note_hpvThreeDoseSeriesTimingDependsOnProduct')).toBe(
      '3-dose series. Timing of the remaining doses depends on the HPV vaccine product used.'
    );
    expect(translateKey('ar', 'note_hpvThreeDoseSeriesTimingDependsOnProduct')).toBe(
      'الجدول 3 جرعات، ومواعيد الجرعات التالية بتختلف حسب نوع التطعيم المستخدم.'
    );
    expect(results.needsReview.some((item) => item.vaccineCategory === 'hpv')).toBe(false);
    expect(
      results.upcoming.some((item) => item.vaccineCategory === 'hpv' && item.conditionalNextDose)
    ).toBe(false);
  });

  it('keeps under-15 zero-dose logic at 14 years 364 days', () => {
    const birth = dob(2011, 9, 12);
    const today = dob(2026, 9, 11);
    const results = calculateVaccineRecommendations(baseInput(birth, today));

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.noteKeys).toContain('note_hpvRemainingDosesDependOnProduct');
    expect(hpv?.noteKeys).not.toContain('note_hpvThreeDoseSeriesTimingDependsOnProduct');
  });

  it('projects product-specific 3-dose schedules from age 15 at first dose', () => {
    const birth = dob(2011, 9, 11);
    const firstDose = dob(2026, 9, 11);

    const cervarixResults = calculateVaccineRecommendations(
      baseInput(birth, firstDose, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'cervarix',
            numberOfDoses: 1,
            firstDoseDate: firstDose,
            lastDoseDate: firstDose,
            doseDates: [firstDose],
          }),
        ],
      })
    );
    const cervarixItems = [...cervarixResults.dueNow, ...cervarixResults.upcoming].filter(
      (item) => item.vaccineCategory === 'hpv'
    );
    expect(cervarixItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          doseLabelKey: 'doseLabel_dose2',
          recommendedDate: '2026-10-11',
        }),
        expect.objectContaining({
          doseLabelKey: 'doseLabel_dose3',
          recommendedDate: '2027-03-11',
        }),
      ])
    );

    for (const product of ['gardasil4', 'gardasil9'] as const) {
      const results = calculateVaccineRecommendations(
        baseInput(birth, firstDose, {
          vaccineHistory: [
            history({
              category: 'hpv',
              product,
              numberOfDoses: 1,
              firstDoseDate: firstDose,
              lastDoseDate: firstDose,
              doseDates: [firstDose],
            }),
          ],
        })
      );
      const hpvItems = [...results.dueNow, ...results.upcoming].filter(
        (item) => item.vaccineCategory === 'hpv'
      );
      expect(hpvItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            doseLabelKey: 'doseLabel_dose2',
            recommendedDate: '2026-11-11',
          }),
          expect.objectContaining({
            doseLabelKey: 'doseLabel_dose3',
            recommendedDate: '2027-03-11',
          }),
        ])
      );
    }
  });

  it('treats all products as 3-dose pathways from age 15 at first dose', () => {
    const birth = dob(2011, 8, 24);
    const firstDose = dob(2026, 8, 24);
    expect(getAgeAtFirstDoseYears(birth, firstDose)).toBe(15);

    for (const product of ['cervarix', 'gardasil4', 'gardasil9'] as const) {
      expect(isHpvTwoDoseSeries(product, birth, firstDose)).toBe(false);
    }

    const today = addMonths(firstDose, 2);
    for (const product of ['cervarix', 'gardasil4', 'gardasil9'] as const) {
      const results = calculateVaccineRecommendations(
        baseInput(birth, today, {
          vaccineHistory: [
            history({
              category: 'hpv',
              product,
              numberOfDoses: 1,
              firstDoseDate: firstDose,
              lastDoseDate: firstDose,
              doseDates: [firstDose],
            }),
          ],
        })
      );

      expect(
        [...results.dueNow, ...results.upcoming].find((item) => item.vaccineCategory === 'hpv')
          ?.doseLabelKey
      ).toBe('doseLabel_dose2');
    }
  });
});

describe('HPV series locked to age at first dose', () => {
  it('keeps Gardasil 4 on a 2-dose series when Dose 1 was given at age 13 years 11 months', () => {
    const birth = dob(2010, 9, 24);
    const dose1 = dob(2024, 8, 24);
    const today = dob(2025, 2, 24);
    expect(getAgeAtFirstDoseYears(birth, dose1)).toBe(13);

    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'gardasil4',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.doseLabelKey).toBe('doseLabel_dose2');
    expect(hpv?.recommendedDate).toBe('2025-02-24');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'hpv' && item.doseLabelKey === 'doseLabel_dose3'
      )
    ).toBe(false);
  });

  it('keeps Cervarix on a 2-dose series when Dose 1 was given at age 14 years 11 months', () => {
    const birth = dob(2010, 9, 24);
    const dose1 = dob(2025, 8, 24);
    const today = dob(2026, 2, 24);
    expect(getAgeAtFirstDoseYears(birth, dose1)).toBe(14);

    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'cervarix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const hpv = results.dueNow.find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.doseLabelKey).toBe('doseLabel_dose2');
    expect(hpv?.recommendedDate).toBe('2026-02-24');
  });

  it('uses a 3-dose Gardasil 4 schedule when Dose 1 starts at age 14', () => {
    const birth = dob(2012, 7, 24);
    const dose1 = dob(2026, 7, 24);
    const today = dob(2026, 8, 24);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'gardasil4',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const hpvItems = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'hpv'
    );
    expect(hpvItems.some((item) => item.doseLabelKey === 'doseLabel_dose1')).toBe(false);
    expect(hpvItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          doseLabelKey: 'doseLabel_dose2',
          status: 'upcoming',
          recommendedDate: '2026-09-24',
        }),
        expect.objectContaining({
          doseLabelKey: 'doseLabel_dose3',
          status: 'upcoming',
          recommendedDate: '2027-01-24',
        }),
      ])
    );
  });

  it('uses a 3-dose Gardasil 4 schedule when Dose 1 starts at age 14 and projects dose 2 due later', () => {
    const birth = dob(2012, 8, 24);
    const dose1 = dob(2026, 8, 24);
    const today = addMonths(dose1, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'gardasil4',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const hpv = [...results.dueNow, ...results.upcoming].find((item) => item.vaccineCategory === 'hpv');
    expect(hpv?.doseLabelKey).toBe('doseLabel_dose2');
    expect(hpv?.recommendedDate).toBe('2026-10-24');
  });

  it('requires product information when a previous HPV dose exists with unknown product', () => {
    const birth = dob(2017, 8, 24);
    const dose1 = dob(2026, 8, 24);
    const today = addMonths(dose1, 1);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'dontKnow',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    expect(results.needsReview.some((item) => item.vaccineCategory === 'hpv')).toBe(true);
    expect(results.needsReview[0]?.noteKeys).toContain('note_hpvProductUnknown');
  });
});
