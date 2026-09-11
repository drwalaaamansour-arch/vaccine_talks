import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { buildConditionalUpcomingRecommendations } from '@/lib/vaccine-checker/conditional-upcoming';
import { type CheckerInput, type RuleContext } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

describe('conditional upcoming doses', () => {
  it('projects dose 2 from today when dose 1 is overdue and not yet given', () => {
    const birth = dob(2026, 6, 15);
    const today = dob(2026, 8, 22);

    const results = calculateVaccineRecommendations({
      dob: birth,
      referenceDate: today,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [],
    });

    const rotavirusConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'rotavirus' && item.conditionalNextDose
    );

    expect(rotavirusConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(rotavirusConditional?.recommendedDate).toBe('2026-10-22');
    expect(rotavirusConditional?.recommendedDate).not.toBe('2026-10-15');

    const menacwyConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
    );
    expect(menacwyConditional?.product).toBe('nimenrix');
    expect(menacwyConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(menacwyConditional?.recommendedDate).toBe('2026-10-22');

    const menbConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.conditionalNextDose
    );
    expect(menbConditional?.recommendedDate).toBe('2026-10-22');
  });

  it('does not create conditional cards when a previous dose is already recorded', () => {
    const birth = dob(2026, 6, 15);
    const today = dob(2026, 8, 22);
    const dose1Date = dob(2026, 8, 22);

    const results = calculateVaccineRecommendations({
      dob: birth,
      referenceDate: today,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [
        {
          category: 'rotavirus',
          product: 'rotarix',
          numberOfDoses: 1,
          lastDoseDate: dose1Date,
          firstDoseDate: dose1Date,
          doseDates: [dose1Date],
        },
      ],
    });

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'rotavirus' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('anchors conditional projection to referenceDate in isolation', () => {
    const birth = dob(2026, 6, 15);
    const today = dob(2026, 8, 22);
    const ctx: RuleContext = {
      input: {
        referenceDate: today,
      } as CheckerInput,
      dob: birth,
      today,
      mmrDate: null,
      mmrDates: [],
      getHistory: () => undefined,
    };

    const conditional = buildConditionalUpcomingRecommendations(
      [
        {
          id: 'rotavirus-dose1-due',
          vaccineCategory: 'rotavirus',
          doseLabelKey: 'doseLabel_dose1',
          status: 'due-now',
          recommendedDate: '2026-08-15',
          noteKeys: [],
          urgency: 95,
        },
      ],
      ctx
    );

    expect(conditional[0]?.recommendedDate).toBe('2026-10-22');
  });

  it('does not project MenACWY conditionals when product is unknown at 9 months', () => {
    const birth = dob(2025, 11, 25);
    const today = dob(2026, 8, 25);
    const ctx: RuleContext = {
      input: {
        referenceDate: today,
      } as CheckerInput,
      dob: birth,
      today,
      mmrDate: null,
      mmrDates: [],
      getHistory: () => undefined,
    };

    const conditional = buildConditionalUpcomingRecommendations(
      [
        {
          id: 'menacwy-dose1-eligible',
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: 'doseLabel_dose1',
          status: 'eligible-now',
          recommendedDate: '2026-09-04',
          noteKeys: [],
          urgency: 90,
        },
      ],
      ctx
    );

    expect(conditional).toHaveLength(0);
  });

  it('does not project zero-history PCV conditionals when product is unknown', () => {
    const birth = dob(2026, 4, 22);
    const today = dob(2026, 8, 22);
    const results = calculateVaccineRecommendations({
      dob: birth,
      referenceDate: today,
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [],
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
    });

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
      )
    ).toBe(false);
    expect(results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal')?.noteKeys).toContain(
      'note_pcvRemainingDosesDependOnProduct'
    );
  });

  it('projects MenB conditional booster as full 12–23 month window for 12-month catch-up', () => {
    const birth = dob(2025, 8, 23);
    const today = dob(2026, 8, 23);

    const results = calculateVaccineRecommendations({
      dob: birth,
      referenceDate: today,
      mmrDate: today,
      mmrDates: [today],
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [],
    });

    const menbDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-10-23');

    const menbBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBooster?.windowStart).toBe('2027-10-23');
    expect(menbBooster?.windowEnd).toBe('2028-09-23');
    expect(menbBooster?.recommendedDate).toBeUndefined();
  });
});
