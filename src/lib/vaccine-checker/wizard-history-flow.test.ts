import { describe, expect, it } from 'vitest';
import {
  getNextStepAfterAdditionalVaccines,
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterMmrDate,
  getNextStepAfterRoutineVaccines,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  buildDate,
  mergeSelectedAdditionalVaccineRecords,
} from '@/lib/vaccine-checker/wizard-history';
import {
  isVaccineRecordComplete,
  recordToHistory,
} from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, getPreviousWizardStep, type WizardState } from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'en',
    dateOfBirth: buildDateParts({ day: 27, month: 8, year: 2025 }),
    calculatedAge: { years: 1, months: 0, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'routineVaccines',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

const today = new Date(2026, 7, 27);

describe('additional vaccine history wizard flow', () => {
  it('shows additional history before MMR and product steps before review at 12 months', () => {
    const afterRoutine = baseState();
    expect(getNextStepAfterRoutineVaccines(afterRoutine, today)).toBe('additionalVaccines');

    const afterAdditionalNo = baseState({
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });
    expect(getNextStepAfterAdditionalVaccines(afterAdditionalNo, today)).toBe('mmrDate');

    const afterMmr = baseState({
      currentStep: 'mmrDate',
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
      mmrDate: buildDate(27, 8, 2026),
    });
    expect(getNextStepAfterMmrDate(afterMmr, today)).toBe('review');

    const afterYesSelection = baseState({
      mmrDate: buildDate(27, 8, 2026),
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [
        {
          category: 'rotavirus',
          numberOfDoses: 0,
          lastDoseDate: null,
          doseDates: [],
        },
      ],
    });
    expect(getNextStepAfterAdditionalVaccines(afterYesSelection)).toBe('productSelection');
  });

  it('stores the mixed 12-month history scenario for review and calculations', () => {
    const rotavirusDose1 = buildDate(27, 10, 2025);
    const rotavirusDose2 = buildDate(27, 12, 2025);
    const pcvDose1 = buildDate(27, 10, 2025);
    const pcvDose2 = buildDate(27, 12, 2025);
    const menbDose1 = buildDate(27, 10, 2025);
    const menbDose2 = buildDate(27, 12, 2025);
    const nimenrixDose1 = buildDate(27, 5, 2026);

    const state = baseState({
      mmrDate: buildDate(27, 8, 2026),
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [
        {
          category: 'rotavirus',
          product: 'rotarix',
          numberOfDoses: 2,
          firstDoseDate: rotavirusDose1,
          lastDoseDate: rotavirusDose2,
          doseDates: [rotavirusDose1, rotavirusDose2],
        },
        {
          category: 'pneumococcal',
          product: 'vaxneuvance',
          numberOfDoses: 2,
          firstDoseDate: pcvDose1,
          lastDoseDate: pcvDose2,
          doseDates: [pcvDose1, pcvDose2],
        },
        {
          category: 'meningococcalB',
          product: 'bexsero',
          numberOfDoses: 2,
          firstDoseDate: menbDose1,
          lastDoseDate: menbDose2,
          doseDates: [menbDose1, menbDose2],
        },
        {
          category: 'meningococcalACWY',
          product: 'nimenrix',
          numberOfDoses: 1,
          firstDoseDate: nimenrixDose1,
          lastDoseDate: nimenrixDose1,
          doseDates: [nimenrixDose1],
        },
      ],
    });

    for (const record of state.additionalVaccines) {
      expect(isVaccineRecordComplete(record)).toBe(true);
    }

    expect(getNextStepAfterAdditionalVaccineHistory(state)).toBe('review');

    const rotavirus = recordToHistory(state.additionalVaccines[0]);
    expect(rotavirus.product).toBe('rotarix');
    expect(rotavirus.numberOfDoses).toBe(2);
    expect(rotavirus.doseDates.map((date, index) => state.additionalVaccines[0].doseDates[index]?.iso)).toEqual([
      '2025-10-27',
      '2025-12-27',
    ]);

    const pcv = recordToHistory(state.additionalVaccines[1]);
    expect(pcv.product).toBe('vaxneuvance');
    expect(pcv.doseDates).toHaveLength(2);

    const menb = recordToHistory(state.additionalVaccines[2]);
    expect(menb.product).toBe('bexsero');
    expect(menb.numberOfDoses).toBe(2);

    const menacwy = recordToHistory(state.additionalVaccines[3]);
    expect(menacwy.product).toBe('nimenrix');
    expect(menacwy.numberOfDoses).toBe(1);
    expect(menacwy.doseDates[0] && state.additionalVaccines[3].doseDates[0]?.iso).toBe('2026-05-27');
  });

  it('skips product and date questions when additional history is no and catch-up MMR is not needed', () => {
    const state = baseState({
      mmrDate: buildDate(27, 8, 2026),
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(getNextStepAfterAdditionalVaccines(state, today)).toBe('review');
  });

  it('uses the same yes/no question text in English and Arabic', () => {
    expect(translateKey('en', 'step4Title')).toBe(
      'Has your child received any additional vaccines before?'
    );
    expect(translateKey('ar', 'step4Title')).toBe('الطفل أخد أي تطعيمات إضافية قبل كده؟');
  });

  it('preserves entered history when re-selecting vaccines after back navigation', () => {
    const existing = [
      {
        category: 'rotavirus' as const,
        product: 'rotarix',
        numberOfDoses: 2,
        firstDoseDate: buildDate(27, 10, 2025),
        lastDoseDate: buildDate(27, 12, 2025),
        doseDates: [buildDate(27, 10, 2025), buildDate(27, 12, 2025)],
      },
      {
        category: 'pneumococcal' as const,
        product: 'vaxneuvance',
        numberOfDoses: 2,
        firstDoseDate: buildDate(27, 10, 2025),
        lastDoseDate: buildDate(27, 12, 2025),
        doseDates: [buildDate(27, 10, 2025), buildDate(27, 12, 2025)],
      },
    ];

    const merged = mergeSelectedAdditionalVaccineRecords(existing, [
      'rotavirus',
      'pneumococcal',
      'meningococcalB',
    ]);

    expect(merged[0]?.product).toBe('rotarix');
    expect(merged[0]?.numberOfDoses).toBe(2);
    expect(merged[1]?.product).toBe('vaxneuvance');
    expect(merged[2]?.category).toBe('meningococcalB');
    expect(merged[2]?.product).toBe('bexsero');
    expect(merged[2]?.numberOfDoses).toBe(0);
  });

  it('routes back from review to MMR when varicella catch-up still needs an MMR date', () => {
    const state = baseState({
      currentStep: 'review',
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [],
    });

    expect(getPreviousWizardStep(state)).toBe('mmrDate');
  });

  it('routes to MMR dose 2 before review when additional history is no at 18 months', () => {
    const eighteenMonthBirth = buildDateParts({ day: 11, month: 3, year: 2025 });
    const eighteenMonthToday = new Date(2026, 8, 11);
    const state = baseState({
      dateOfBirth: eighteenMonthBirth,
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(getNextStepAfterAdditionalVaccines(state, eighteenMonthToday)).toBe('mmrDate');
    expect(getNextStepAfterMmrDate(state, eighteenMonthToday)).toBe('review');
  });

  it('routes back from review to additional history after mixed entry', () => {
    const state = baseState({
      mmrDate: buildDate(27, 8, 2026),
      currentStep: 'review',
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [
        {
          category: 'rotavirus',
          product: 'rotarix',
          numberOfDoses: 2,
          firstDoseDate: buildDate(27, 10, 2025),
          lastDoseDate: buildDate(27, 12, 2025),
          doseDates: [buildDate(27, 10, 2025), buildDate(27, 12, 2025)],
        },
      ],
    });

    expect(getPreviousWizardStep(state)).toBe('mmrDate');
  });
});
