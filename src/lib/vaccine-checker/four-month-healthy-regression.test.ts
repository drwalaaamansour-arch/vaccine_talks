import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  isRoutineHexRecommendation,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(vaccineHistory: VaccineHistoryRecord[]): CheckerInput {
  const birth = dob(2026, 5, 9);
  const today = dob(2026, 9, 9);

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

describe('4-month healthy child regression (2026-05-09 DOB, 2026-09-09 as-of)', () => {
  const dose1 = dob(2026, 7, 9);

  const nimenrixHistory: VaccineHistoryRecord = {
    category: 'meningococcalACWY',
    product: 'nimenrix',
    numberOfDoses: 1,
    firstDoseDate: dose1,
    lastDoseDate: dose1,
    doseDates: [dose1],
  };

  it('does not generate standalone Hexavalent catch-up or booster cards when routine is complete', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));

    const hexItems = [...results.dueNow, ...results.upcoming, ...results.eligibleNow].filter(
      isRoutineHexRecommendation
    );
    expect(hexItems).toEqual([]);
  });

  it('shows Nimenrix dose 2 due now on 2026-09-09 after dose 1 at 2026-07-09', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));

    const dose2 = results.dueNow.find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBe('2026-09-09');
    expect(
      results.dueNow.some(
        (item) =>
          item.vaccineCategory === 'meningococcalACWY' && item.doseLabelKey === 'doseLabel_dose1'
      )
    ).toBe(false);
  });

  it('shows Nimenrix booster upcoming on 2027-05-09', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));

    const booster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(booster).toBeDefined();
    expect(booster?.minimumValidDate ?? booster?.recommendedDate).toBe('2027-05-09');
  });

  it('does not show product-dependent MenACWY wording when Nimenrix is already recorded', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));
    const menacwyItems = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'meningococcalACWY'
    );

    for (const item of menacwyItems) {
      expect(item.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');
      expect(item.noteKeys).not.toContain('note_menacwyProductDoseCountDependsOnProduct');
    }

    expect(translateKey('ar', 'note_menacwyProductScheduleDependsOnAge')).toBe(
      'ميعاد الجرعة اللي بعد كده بيعتمد على نوع التطعيم المستخدم.'
    );
  });

  it('does not duplicate MenACWY recommendations', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));
    const menacwyItems = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'meningococcalACWY'
    );

    expect(menacwyItems).toHaveLength(2);
    expect(
      menacwyItems.filter((item) => item.doseLabelKey === 'doseLabel_dose2')
    ).toHaveLength(1);
    expect(
      menacwyItems.filter((item) => item.doseLabelKey === 'doseLabel_booster')
    ).toHaveLength(1);
  });

  it('resolves zero-dose MenACWY to Nimenrix with dose 2 conditional and no product-dependent wording', () => {
    const results = calculateVaccineRecommendations(baseInput([]));

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
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(conditionalDose2?.recommendedDate).toBe('2026-11-09');

    const conditionalBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalACWY' &&
        item.product === 'nimenrix' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(conditionalBooster?.timingKind).toBe('MINIMUM_START_ONLY');
    expect(conditionalBooster?.minimumValidDate ?? conditionalBooster?.recommendedDate).toBe(
      '2027-05-09'
    );
    expect(getConditionalNextDoseTranslationKey(conditionalBooster!)).toBe(
      'resultConditionalNimenrixInfantTwoPrimaryBooster'
    );
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

    const allMenacwy = [
      ...results.dueNow,
      ...results.upcoming,
      ...results.eligibleNow,
      ...results.needsReview,
    ].filter((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(allMenacwy.some((item) => item.product === 'menactra')).toBe(false);
  });

  it('does not suggest Menactra as an alternative in this age and history scenario', () => {
    const results = calculateVaccineRecommendations(baseInput([nimenrixHistory]));
    const allMenacwy = [
      ...results.dueNow,
      ...results.upcoming,
      ...results.eligibleNow,
      ...results.needsReview,
    ].filter((item) => item.vaccineCategory === 'meningococcalACWY');

    expect(allMenacwy.every((item) => item.product === 'nimenrix')).toBe(true);
    expect(allMenacwy.some((item) => item.product === 'menactra')).toBe(false);
  });
});
