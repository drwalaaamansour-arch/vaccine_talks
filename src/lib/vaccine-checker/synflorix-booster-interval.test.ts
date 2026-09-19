import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function history(doseDates: Date[]): VaccineHistoryRecord {
  return {
    category: 'pneumococcal',
    product: 'synflorix',
    numberOfDoses: doseDates.length,
    firstDoseDate: doseDates[0] ?? null,
    lastDoseDate: doseDates[doseDates.length - 1] ?? null,
    doseDates,
  };
}

function findBooster(results: ReturnType<typeof calculateVaccineRecommendations>) {
  return [...results.dueNow, ...results.upcoming].find(
    (item) =>
      item.vaccineCategory === 'pneumococcal' &&
      item.product === 'synflorix' &&
      item.doseLabelKey === 'doseLabel_booster'
  );
}

describe('Synflorix before-7-month booster (6-month interval vs 11–15 month preference)', () => {
  it('delayed primaries: booster earliest is last primary + 6 months even after 15 months of age', () => {
    const birth = dob(2026, 1, 1);
    const dose1 = dob(2026, 7, 30);
    const dose2 = dob(2026, 9, 30);
    const dose3 = dob(2026, 11, 30);
    const asOf = dob(2027, 3, 1);

    const input: CheckerInput = {
      dob: birth,
      referenceDate: asOf,
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [history([dose1, dose2, dose3])],
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
    };

    const booster = findBooster(calculateVaccineRecommendations(input));
    expect(booster).toBeDefined();
    expect(booster?.timingKind).toBe('MINIMUM_START_ONLY');
    expect(booster?.minimumValidDate).toBe('2027-05-30');
    expect(booster?.noteKeys).toContain('note_pcvSynflorixBoosterMinimumAfterLastPrimary');
    expect(booster?.noteKeys).not.toContain('note_pcvSynflorixBoosterTimingNeedsReview');
    expect(booster?.status).toBe('upcoming');
  });

  it('on-time primaries: booster uses preferred window adjusted by 6-month rule when inside 11–15 months', () => {
    const birth = dob(2026, 1, 19);
    const dose1 = dob(2026, 3, 19);
    const dose2 = dob(2026, 5, 19);
    const dose3 = dob(2026, 7, 19);
    const asOf = dob(2026, 8, 1);

    const input: CheckerInput = {
      dob: birth,
      referenceDate: asOf,
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [history([dose1, dose2, dose3])],
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
    };

    const booster = findBooster(calculateVaccineRecommendations(input));
    expect(booster?.timingKind).toBe('RECOMMENDED_WINDOW');
    expect(booster?.windowStart).toBe(toIsoDate(dob(2027, 1, 19)));
    expect(booster?.windowEnd).toBe(toIsoDate(dob(2027, 4, 19)));
  });

  it('Prevenar13 booster unchanged (11–15 month window from DOB only)', () => {
    const birth = dob(2026, 1, 1);
    const dose1 = dob(2026, 7, 30);
    const dose2 = dob(2026, 9, 30);
    const dose3 = dob(2026, 11, 30);
    const input: CheckerInput = {
      dob: birth,
      referenceDate: dob(2027, 3, 1),
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [
        {
          category: 'pneumococcal',
          product: 'prevenar13',
          numberOfDoses: 3,
          firstDoseDate: dose1,
          lastDoseDate: dose3,
          doseDates: [dose1, dose2, dose3],
        },
      ],
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
    };

    const results = calculateVaccineRecommendations(input);
    const booster = [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.product === 'prevenar13' &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(booster?.product).toBe('prevenar13');
    expect(booster?.windowStart).toBe(toIsoDate(dob(2026, 12, 1)));
    expect(booster?.windowEnd).toBe(toIsoDate(dob(2027, 4, 1)));
    expect(booster?.minimumValidDate).toBeUndefined();
  });
});
