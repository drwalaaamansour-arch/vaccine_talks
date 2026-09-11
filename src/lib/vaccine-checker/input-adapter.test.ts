import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { recordToHistory, wizardStateToCheckerInput } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

function baseWizardState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'ar',
    dateOfBirth: buildDateParts({ day: 24, month: 7, year: 2012 }),
    calculatedAge: { years: 14, months: 1, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'results',
    showResults: true,
    showDisclaimer: false,
    ...overrides,
  };
}

describe('wizardStateToCheckerInput HPV history', () => {
  it('preserves Gardasil 4 dose history from wizard state', () => {
    const dose1 = buildDateParts({ day: 24, month: 7, year: 2026 });
    const state = baseWizardState({
      additionalVaccines: [
        {
          category: 'hpv',
          product: 'gardasil4',
          numberOfDoses: 1,
          lastDoseDate: dose1,
          firstDoseDate: dose1,
          doseDates: [dose1],
        },
      ],
    });

    const input = wizardStateToCheckerInput(state, new Date(2026, 7, 24));
    expect(input).not.toBeNull();

    const history = input?.vaccineHistory.find((record) => record.category === 'hpv');
    expect(history?.product).toBe('gardasil4');
    expect(history?.numberOfDoses).toBe(1);
    expect(history?.doseDates).toHaveLength(1);
    expect(history?.firstDoseDate).toEqual(new Date(2026, 6, 24));
    expect(history?.lastDoseDate).toEqual(new Date(2026, 6, 24));
  });

  it('maps wizard HPV history to Gardasil 4 dose 2 and dose 3 upcoming results', () => {
    const dose1 = buildDateParts({ day: 24, month: 7, year: 2026 });
    const input = wizardStateToCheckerInput(
      baseWizardState({
        additionalVaccines: [
          {
            category: 'hpv',
            product: 'gardasil4',
            numberOfDoses: 1,
            lastDoseDate: dose1,
            firstDoseDate: dose1,
            doseDates: [dose1],
          },
        ],
      }),
      new Date(2026, 7, 24)
    );

    expect(input).not.toBeNull();
    const results = calculateVaccineRecommendations(input!);
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
          product: 'gardasil4',
        }),
        expect.objectContaining({
          doseLabelKey: 'doseLabel_dose3',
          status: 'upcoming',
          recommendedDate: '2027-01-24',
          product: 'gardasil4',
        }),
      ])
    );
  });

  it('normalizes product ids when adapting wizard records', () => {
    const history = recordToHistory({
      category: 'hpv',
      product: 'Gardasil4',
      numberOfDoses: 1,
      lastDoseDate: buildDateParts({ day: 24, month: 7, year: 2026 }),
      firstDoseDate: buildDateParts({ day: 24, month: 7, year: 2026 }),
      doseDates: [buildDateParts({ day: 24, month: 7, year: 2026 })],
    });

    expect(history.product).toBe('gardasil4');
  });
});
