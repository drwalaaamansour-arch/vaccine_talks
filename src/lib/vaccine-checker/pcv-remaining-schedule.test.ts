import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import {
  assertNoProjectedDatesOnPcvRemainingItems,
  isPcvRemainingBoosterAfterPrimarySeriesConditionalItem,
  isPcvRemainingPrimaryConditionalItem,
  isPcvRemainingSevenToElevenBoosterConditionalItem,
} from '@/lib/vaccine-checker/pcv-remaining-schedule';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';
import type { CheckerInput, VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

type PcvProduct = 'synflorix' | 'prevenar13' | 'prevenar20' | 'vaxneuvance';

function pcvHistory(
  product: PcvProduct,
  numberOfDoses: number,
  doseDates: Date[]
): VaccineHistoryRecord {
  const first = doseDates[0] ?? null;
  const last = doseDates[doseDates.length - 1] ?? null;
  return history({
    category: 'pneumococcal',
    product,
    numberOfDoses,
    firstDoseDate: first,
    lastDoseDate: last,
    doseDates,
  });
}

function pcvItems(birth: Date, asOf: Date, record: VaccineHistoryRecord) {
  const input: CheckerInput = baseHealthyInput(birth, asOf, { vaccineHistory: [record] });
  const results = calculateVaccineRecommendations(input);
  return [...results.dueNow, ...results.eligibleNow, ...results.upcoming, ...results.completed].filter(
    (item) => item.vaccineCategory === 'pneumococcal'
  );
}

const birth = dateParts(2026, 1, 19);
const dose1 = dateParts(2026, 3, 19);
const dose2 = dateParts(2026, 5, 19);
const dose3 = dateParts(2026, 7, 19);
const booster = dateParts(2026, 12, 19);

describe('PCV 3+1 infant path (<7 mo start): remaining schedule', () => {
  const threePrimaryProducts: PcvProduct[] = ['synflorix', 'prevenar13', 'prevenar20'];

  for (const product of threePrimaryProducts) {
    describe(product, () => {
      it('0 doses: conditional primaries 2–3 and booster', () => {
        const asOf = addMonths(birth, 2);
        const items = pcvItems(birth, asOf, pcvHistory(product, 0, []));
        expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose1' && !i.conditionalNextDose)).toBe(true);
        expect(items.filter((i) => isPcvRemainingPrimaryConditionalItem(i)).map((i) => i.doseLabelKey)).toEqual([
          'doseLabel_dose2',
          'doseLabel_dose3',
        ]);
        expect(items.some((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toBe(true);
        assertNoProjectedDatesOnPcvRemainingItems(items);
      });

      it('1 dose: dose 2 due + conditional dose 3 and booster', () => {
        const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory(product, 1, [dose1]));
        expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose2' && i.status === 'due-now')).toBe(true);
        expect(items.find((i) => isPcvRemainingPrimaryConditionalItem(i))?.doseLabelKey).toBe('doseLabel_dose3');
        expect(items.some((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toBe(true);
      });

      it('2 doses: dose 3 due + conditional booster only', () => {
        const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory(product, 2, [dose1, dose2]));
        expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose3' && !i.conditionalNextDose)).toBe(true);
        expect(items.filter((i) => isPcvRemainingPrimaryConditionalItem(i))).toHaveLength(0);
        expect(items.filter((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toHaveLength(1);
      });

      it('3 primaries: engine booster only', () => {
        const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory(product, 3, [dose1, dose2, dose3]));
        expect(items.some((i) => i.doseLabelKey === 'doseLabel_booster' && !i.conditionalNextDose)).toBe(true);
        expect(items.filter((i) => i.id.startsWith('pcv-remaining-'))).toHaveLength(0);
      });

      it('series complete: no conditional rows', () => {
        const items = pcvItems(
          birth,
          dateParts(2027, 1, 19),
          pcvHistory(product, 4, [dose1, dose2, dose3, booster])
        );
        expect(items.some((i) => i.status === 'completed')).toBe(true);
        expect(items.filter((i) => i.conditionalNextDose)).toHaveLength(0);
      });
    });
  }
});

describe('Vaxneuvance infant (<7 mo start)', () => {
  it('0 doses: dose 1 + conditional booster', () => {
    const asOf = addMonths(birth, 2);
    const items = pcvItems(birth, asOf, pcvHistory('vaxneuvance', 0, []));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose1')).toBe(true);
    expect(items.some((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toBe(true);
    expect(items.filter((i) => isPcvRemainingPrimaryConditionalItem(i))).toHaveLength(0);
  });

  it('1 dose: dose 2 + conditional booster', () => {
    const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory('vaxneuvance', 1, [dose1]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose2' && !i.conditionalNextDose)).toBe(true);
    expect(items.some((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toBe(true);
  });

  it('2 doses short interval: dose 3 + conditional booster', () => {
    const shortDose2 = dateParts(2026, 4, 10);
    const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory('vaxneuvance', 2, [dose1, shortDose2]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose3' && !i.conditionalNextDose)).toBe(true);
    expect(items.some((i) => isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(i))).toBe(true);
  });

  it('2 doses long interval: booster from engine only', () => {
    const items = pcvItems(birth, dateParts(2026, 9, 19), pcvHistory('vaxneuvance', 2, [dose1, dose2]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_booster' && !i.conditionalNextDose)).toBe(true);
    expect(items.filter((i) => i.id.startsWith('pcv-remaining-'))).toHaveLength(0);
  });
});

describe('PCV 7–11 month start', () => {
  const startBirth = dateParts(2025, 6, 1);
  const firstAt8m = dateParts(2026, 2, 1);

  it('1 dose recorded: dose 2 dated + conditional booster (Prevenar13)', () => {
    const asOf = dateParts(2026, 4, 1);
    const items = pcvItems(startBirth, asOf, pcvHistory('prevenar13', 1, [firstAt8m]));
    expect(items.some((i) => i.doseLabelKey === 'doseLabel_dose2' && !i.conditionalNextDose)).toBe(true);
    expect(items.some((i) => isPcvRemainingSevenToElevenBoosterConditionalItem(i))).toBe(true);
    assertNoProjectedDatesOnPcvRemainingItems(items);
  });
});
