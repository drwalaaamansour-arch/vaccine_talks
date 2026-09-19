import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { addDays, addMonths, ageAtDate } from '@/lib/vaccine-checker/date-utils';
import {
  assertNoProjectedDatesOnPcvRemainingItems,
  isPcvInfantRemainingBoosterConditionalItem,
  isPcvInfantRemainingPrimaryConditionalItem,
  synflorixAgeAtFirstDoseMonths,
} from '@/lib/vaccine-checker/pcv-infant-remaining-schedule';
import { isPcvRemainingSevenToElevenBoosterConditionalItem } from '@/lib/vaccine-checker/pcv-remaining-schedule';
import {
  getConditionalNextDoseTranslationKey,
} from '@/lib/vaccine-checker/result-presentation';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';
import type { CheckerInput, VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';

function pcvItems(input: CheckerInput) {
  const results = calculateVaccineRecommendations(input);
  return [...results.dueNow, ...results.eligibleNow, ...results.upcoming, ...results.completed].filter(
    (item) => item.vaccineCategory === 'pneumococcal'
  );
}

function synflorixHistory(numberOfDoses: number, doseDates: Date[]): VaccineHistoryRecord {
  const first = doseDates[0] ?? null;
  const last = doseDates[doseDates.length - 1] ?? null;
  return history({
    category: 'pneumococcal',
    product: 'synflorix',
    numberOfDoses,
    firstDoseDate: first,
    lastDoseDate: last,
    doseDates,
  });
}

function ctxInput(birth: Date, asOf: Date, doseDates: Date[]): CheckerInput {
  return baseHealthyInput(birth, asOf, {
    vaccineHistory: [synflorixHistory(doseDates.length, doseDates)],
  });
}

describe('Synflorix branch selection (age at first dose, matches calculatePcv)', () => {
  const birth = dateParts(2026, 1, 19);

  it('first dose at 2 months → before-7-month primary series (remaining rows)', () => {
    const dose1 = dateParts(2026, 3, 19);
    expect(synflorixAgeAtFirstDoseMonths(birth, dose1)).toBe(2);
    const items = pcvItems(ctxInput(birth, dateParts(2026, 9, 19), [dose1]));
    expect(items.some((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toBe(true);
  });

  it('first dose at 6 months 29 days → still before 7 months', () => {
    const dose1 = addDays(addMonths(birth, 6), 29);
    const age = ageAtDate(birth, dose1);
    expect(age.months).toBe(6);
    expect(age.days).toBe(29);
    expect(synflorixAgeAtFirstDoseMonths(birth, dose1)).toBe(6);
    const items = pcvItems(ctxInput(birth, dateParts(2026, 9, 19), [dose1]));
    expect(items.some((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toBe(true);
  });

  it('first dose exactly at 7 months → 7–11 month branch (conditional booster, not 3-primary rows)', () => {
    const dose1 = addMonths(birth, 7);
    expect(synflorixAgeAtFirstDoseMonths(birth, dose1)).toBe(7);
    const asOf = addMonths(birth, 8);
    const items = pcvItems(ctxInput(birth, asOf, [dose1]));
    expect(items.some((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toBe(false);
    expect(items.some((i) => isPcvRemainingSevenToElevenBoosterConditionalItem(i))).toBe(true);
  });

  it('first dose after 7 months → 7–11 conditional booster when one dose recorded', () => {
    const dose1 = addDays(addMonths(birth, 7), 1);
    expect(synflorixAgeAtFirstDoseMonths(birth, dose1)).toBe(7);
    const items = pcvItems(ctxInput(birth, addMonths(birth, 9), [dose1]));
    expect(items.some((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toBe(false);
    expect(items.some((i) => isPcvRemainingSevenToElevenBoosterConditionalItem(i))).toBe(true);
  });
});

describe('Synflorix before-7-month remaining schedule presentation', () => {
  const birth = dateParts(2026, 1, 19);
  const dose1 = dateParts(2026, 3, 19);
  const dose2 = dateParts(2026, 5, 19);
  const dose3 = dateParts(2026, 7, 19);
  const booster = dateParts(2026, 12, 19);

  it('manual 8-month case: dose 2 due + dose 3 & booster conditional without projected dates', () => {
    const items = pcvItems(ctxInput(birth, dateParts(2026, 9, 19), [dose1]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose2' && i.status === 'due-now')).toBe(true);
    expect(items.find((i) => isPcvInfantRemainingPrimaryConditionalItem(i))?.doseLabelKey).toBe(
      'doseLabel_dose3'
    );
    expect(items.some((i) => isPcvInfantRemainingBoosterConditionalItem(i))).toBe(true);
    assertNoProjectedDatesOnPcvRemainingItems(items);
    const boosterKey = getConditionalNextDoseTranslationKey(
      items.find((i) => isPcvInfantRemainingBoosterConditionalItem(i))!
    );
    expect(boosterKey).toBe('resultConditionalPcvInfantBoosterAfterPrimarySeries');
    const boosterTranslationKey = 'resultConditionalPcvInfantBoosterAfterPrimarySeries' as const;
    expect(TRANSLATIONS[boosterTranslationKey]).toMatch(/11–15 months/);
    expect(TRANSLATIONS[boosterTranslationKey]).toMatch(/6 months after the last primary/);
    expect(AR_TRANSLATIONS[boosterTranslationKey]).toMatch(/11–15 شهر/);
  });

  it('zero prior Synflorix doses (under 7 months): dose 1 + conditional 2, 3, booster', () => {
    const asOf = addMonths(birth, 2);
    const items = pcvItems(baseHealthyInput(birth, asOf, { vaccineHistory: [synflorixHistory(0, [])] }));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose1' && !i.conditionalNextDose)).toBe(true);
    expect(items.filter((i) => isPcvInfantRemainingPrimaryConditionalItem(i)).map((i) => i.doseLabelKey)).toEqual([
      'doseLabel_dose2',
      'doseLabel_dose3',
    ]);
    expect(items.some((i) => isPcvInfantRemainingBoosterConditionalItem(i))).toBe(true);
  });

  it('two prior doses: dose 3 from engine + conditional booster only', () => {
    const items = pcvItems(ctxInput(birth, dateParts(2026, 9, 19), [dose1, dose2]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose3' && !i.conditionalNextDose)).toBe(true);
    expect(items.filter((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toHaveLength(0);
    expect(items.filter((i) => isPcvInfantRemainingBoosterConditionalItem(i))).toHaveLength(1);
  });

  it('three primaries: engine booster row, no duplicate conditional primaries', () => {
    const items = pcvItems(ctxInput(birth, dateParts(2026, 9, 19), [dose1, dose2, dose3]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_booster' && !i.conditionalNextDose)).toBe(true);
    expect(items.filter((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toHaveLength(0);
    expect(items.filter((i) => isPcvInfantRemainingBoosterConditionalItem(i))).toHaveLength(0);
  });

  it('completed booster: no future rows', () => {
    const items = pcvItems(ctxInput(birth, dateParts(2027, 1, 19), [dose1, dose2, dose3, booster]));
    expect(items.some((i) => i.status === 'completed')).toBe(true);
    expect(items.filter((i) => i.conditionalNextDose)).toHaveLength(0);
  });

  it('Prevenar13 same infant path shows remaining rows', () => {
    const asOf = dateParts(2026, 9, 19);
    const items = pcvItems(
      baseHealthyInput(birth, asOf, {
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
    expect(items.some((i) => isPcvInfantRemainingPrimaryConditionalItem(i))).toBe(true);
    expect(items.some((i) => isPcvInfantRemainingBoosterConditionalItem(i))).toBe(true);
  });
});
