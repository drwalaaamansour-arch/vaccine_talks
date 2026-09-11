import { describe, expect, it } from 'vitest';
import { addDays } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getDisplayCardNoteKeys,
  getDisplayCardNoteParams,
} from '@/lib/vaccine-checker/result-presentation';
import {
  getNextStepAfterAdditionalVaccineHistory,
  shouldCollectMmrDose1Date,
  shouldCollectMmrDose2Date,
  shouldShowMmrDateStep,
} from '@/lib/vaccine-checker/wizard-flow';
import { wizardStateToCheckerInput } from '@/lib/vaccine-checker/input-adapter';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { buildDateParts, type WizardState } from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseWizardState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'en',
    dateOfBirth: buildDateParts({ day: 11, month: 3, year: 2025 }),
    calculatedAge: null,
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines: [],
    currentStep: 'review',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
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

function varicellaDose1(input: CheckerInput) {
  const results = calculateVaccineRecommendations(input);
  return (
    results.dueNow.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    ) ??
    results.upcoming.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    ) ??
    results.needsReview.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    )
  );
}

describe('18-month MMR dose 2 + Varicella flow', () => {
  const birth = dob(2025, 3, 11);
  const today = dob(2026, 9, 11);

  it('1. asks for MMR dose 2 before review when additional history is no', () => {
    const state = baseWizardState({ additionalVaccinesHistoryAnswer: 'no' });
    expect(shouldCollectMmrDose2Date(state, today)).toBe(true);
    expect(shouldCollectMmrDose1Date(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
    expect(getNextStepAfterAdditionalVaccineHistory(state, today)).toBe('mmrDate');
    expect(translateKey('en', 'mmr18MonthVaricellaTitle')).toBe(
      'When was the 18-month MMR vaccine given?'
    );
    expect(translateKey('en', 'mmrDose2Help')).toBe(
      'We need the date to calculate the Varicella timing accurately.'
    );
    expect(translateKey('ar', 'mmrDose2Title')).toBe('تطعيم الـ MMR (تطعيم سنة ونص) اتاخد إمتى؟');
    expect(translateKey('ar', 'mmrDose2Help')).toBe(
      'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.'
    );
  });

  it('1b. keeps Varicella needs-review fallback only when MMR dose 2 is still missing at Results time', () => {
    const missingDateInput = baseInput(birth, today);
    const missingDateCard = varicellaDose1(missingDateInput);
    expect(missingDateCard).toBeDefined();
    expect(missingDateCard?.status).toBe('needs-review');
    expect(missingDateCard?.reasonKey).toBe('reason_varicellaMmrDateNeeded');
  });

  it('1c. after entering MMR dose 2, Results calculate Varicella normally without needs-review', () => {
    const state = baseWizardState({
      additionalVaccinesHistoryAnswer: 'no',
      mmrDose2Date: buildDateParts({ day: 11, month: 9, year: 2026 }),
    });
    const input = wizardStateToCheckerInput(state, today);
    expect(input).not.toBeNull();

    const results = calculateVaccineRecommendations(input!);
    expect(
      results.needsReview.some((item) => item.vaccineCategory === 'varicella')
    ).toBe(false);
    expect(
      results.dueNow.some(
        (item) =>
          item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
      )
    ).toBe(true);
  });

  it('2. MMR dose 2 today -> Varicella dose 1 due now', () => {
    const input = baseInput(birth, today, {
      mmrDose2Date: today,
      mmrDates: [today],
    });
    const dose1 = varicellaDose1(input);
    expect(dose1?.status).toBe('due-now');
    expect(dose1?.noteKeys).toContain('note_varicellaMmrSameDay');
    expect(getDisplayCardNoteKeys(dose1!, input)).toContain('note_varicellaMmrScheduling');
  });

  it('3. MMR dose 2 seven days ago -> Varicella upcoming at MMR2 + 28 days', () => {
    const mmr2 = addDays(today, -7);
    const input = baseInput(birth, today, {
      mmrDose2Date: mmr2,
      mmrDates: [mmr2],
    });
    const dose1 = varicellaDose1(input);
    expect(dose1?.status).toBe('upcoming');
    expect(dose1?.recommendedDate).toBe('2026-10-02');
    expect(getDisplayCardNoteKeys(dose1!, input)).toEqual(['note_varicellaDelayedAfterRecentMmr']);
    expect(
      getDisplayCardNoteParams('note_varicellaDelayedAfterRecentMmr', dose1!, input, (value) => value ?? '')
        ?.earliestVaricellaDate
    ).toBe('2026-10-02');
  });

  it('4. MMR dose 2 exactly 28 days ago -> Varicella due now without delay wording', () => {
    const mmr2 = addDays(today, -28);
    const input = baseInput(birth, today, {
      mmrDose2Date: mmr2,
      mmrDates: [mmr2],
    });
    const dose1 = varicellaDose1(input);
    expect(dose1?.status).toBe('due-now');
    expect(getDisplayCardNoteKeys(dose1!, input)).toEqual([]);
  });

  it('5. MMR dose 2 more than 28 days ago -> Varicella due now without delay wording', () => {
    const mmr2 = addDays(today, -40);
    const input = baseInput(birth, today, {
      mmrDose2Date: mmr2,
      mmrDates: [mmr2],
    });
    const dose1 = varicellaDose1(input);
    expect(dose1?.status).toBe('due-now');
    expect(getDisplayCardNoteKeys(dose1!, input)).toEqual([]);
  });

  it('6. does not ask again when MMR dose 2 date is already stored', () => {
    const state = baseWizardState({
      mmrDose2Date: buildDateParts({ day: 11, month: 9, year: 2026 }),
    });
    expect(shouldCollectMmrDose2Date(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
    expect(getNextStepAfterAdditionalVaccineHistory(state, today)).toBe('review');
  });

  it('7. keeps MMR dose 1 and dose 2 as independent fields in engine input', () => {
    const dose1Date = buildDateParts({ day: 11, month: 3, year: 2026 });
    const dose2Date = buildDateParts({ day: 11, month: 9, year: 2026 });
    const state = baseWizardState({
      mmrDate: dose1Date,
      mmrDose2Date: dose2Date,
    });
    const input = wizardStateToCheckerInput(state, today);
    expect(input?.mmrDate?.toISOString().slice(0, 10)).toBe('2026-03-11');
    expect(input?.mmrDose2Date?.toISOString().slice(0, 10)).toBe('2026-09-11');
    expect(input?.mmrDates.map((date) => date.toISOString().slice(0, 10))).toEqual([
      '2026-03-11',
      '2026-09-11',
    ]);
  });

  it('does not show routine MMR dose 2 as missing when the 18-month visit was received', () => {
    const input = baseInput(birth, today, {
      mmrDose2Date: today,
      mmrDates: [today],
    });
    const results = calculateVaccineRecommendations(input);
    expect(results.dueNow.some((item) => item.routineVaccineKey === 'mmrDose2')).toBe(false);
    expect(results.upcoming.some((item) => item.routineVaccineKey === 'mmrDose2')).toBe(false);
    expect(results.routineMissing.some((item) => item.visitKey === '18months')).toBe(false);
  });
});
