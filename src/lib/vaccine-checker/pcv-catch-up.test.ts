import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getTimingDisplayLines, inferTimingKind } from '@/lib/vaccine-checker/recommendation-timing';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
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

describe('PCV catch-up after two infant doses', () => {
  const birth = dob(2025, 3, 4);

  it('does not recommend a duplicate dose 2 after two infant doses', () => {
    const today = dob(2026, 9, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const duplicateDose2 = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(duplicateDose2).toEqual([]);
  });

  it('recommends the booster window instead of a completion dose with one fixed date', () => {
    const today = dob(2026, 9, 4);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [twoInfantDoseHistory(birth)])
    );

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_booster');
    expect(pcv?.recommendedDate).toBeUndefined();
    expect(pcv?.windowStart).toBe('2026-02-04');
    expect(pcv?.windowEnd).toBe('2026-06-04');
    expect(inferTimingKind(pcv!)).toBe('RECOMMENDED_WINDOW');
    expect(getTimingDisplayLines(pcv!, today)[0]?.key).toBe('resultPastPreferredBoosterWindow');
  });
});
