import { describe, expect, it } from 'vitest';
import { addMonths, addWeeks } from '@/lib/vaccine-checker/date-utils';
import {
  getDueRoutineVisitsForState,
  getEffectiveCompletedRoutineVisits,
  getEligibleAdditionalVaccineCategories,
  getFirstAdditionalVaccineStep,
  getNextStepAfterAdditionalVaccines,
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterDoseCount,
  getNextStepAfterMmrDate,
  getNextStepAfterRoutineVaccines,
  hasExactlyOneDocumentedMmrDose,
  shouldCollectMmrDose1Date,
  shouldCollectMmrDose1DateForCatchUp,
  shouldCollectMmrDose2Date,
  shouldCollectMostRecentMmrDateForVaricella,
  shouldIncludeMmrStepInFlow,
  shouldShowAdditionalVaccinesStep,
  shouldShowMmrDateStep,
} from '@/lib/vaccine-checker/wizard-flow';
import { isVaccineRecordComplete } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, getPreviousWizardStep, type WizardState } from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

function dobFromDate(date: Date) {
  return buildDateParts({
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  });
}

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  const birth = new Date(2024, 5, 22);

  return {
    language: 'en',
    dateOfBirth: dobFromDate(birth),
    calculatedAge: null,
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'none',
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

function todayAtChildAgeMonths(birth: Date, ageMonths: number): Date {
  return addMonths(birth, ageMonths);
}

describe('routine visit age gating', () => {
  const birth = new Date(2024, 5, 22);

  it('shows birth, 1 month, and 2 months for a 2-month-old', () => {
    const today = todayAtChildAgeMonths(birth, 2);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });

    expect(getDueRoutineVisitsForState(state, today)).toEqual(['birth', '1month', '2months']);
  });

  it('shows visits through 6 months for a 7-month-old', () => {
    const today = todayAtChildAgeMonths(birth, 7);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });

    expect(getDueRoutineVisitsForState(state, today)).toEqual([
      'birth',
      '1month',
      '2months',
      '4months',
      '6months',
    ]);
  });

  it('shows visits through 12 months only for a 14-month-old', () => {
    const today = todayAtChildAgeMonths(birth, 14);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });

    expect(getDueRoutineVisitsForState(state, today)).toEqual([
      'birth',
      '1month',
      '2months',
      '4months',
      '6months',
      '9months',
      '12months',
    ]);
  });

  it('never includes future routine visits', () => {
    const today = todayAtChildAgeMonths(birth, 11);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });
    const due = getDueRoutineVisitsForState(state, today);

    expect(due).not.toContain('12months');
    expect(due).not.toContain('18months');
  });
});

describe('routine status = all respects current age', () => {
  const birth = new Date(2024, 5, 22);

  it('treats only age-due visits as completed for a 2-month-old choosing yes all', () => {
    const today = todayAtChildAgeMonths(birth, 2);
    const state = baseState({
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'complete',
    });

    expect(getEffectiveCompletedRoutineVisits(state, today)).toEqual(['birth', '1month', '2months']);
  });
});

describe('MMR date collection gating', () => {
  const birth = new Date(2024, 5, 22);

  function stateAtAgeMonths(
    ageMonths: number,
    routineOverrides: Partial<WizardState> = {},
    todayOverride?: Date
  ) {
    const today = todayOverride ?? todayAtChildAgeMonths(birth, ageMonths);
    return {
      state: baseState({
        dateOfBirth: dobFromDate(birth),
        additionalVaccines: [{ category: 'varicella', numberOfDoses: 0, lastDoseDate: null, doseDates: [] }],
        ...routineOverrides,
      }),
      today,
    };
  }

  it('does not ask for MMR at 2 months', () => {
    const { state, today } = stateAtAgeMonths(2, { routineVaccinesStatus: 'complete' });
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
  });

  it('does not ask for MMR at 8 months', () => {
    const { state, today } = stateAtAgeMonths(8, { routineVaccinesStatus: 'complete' });
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
  });

  it('does not ask for MMR at 11 months', () => {
    const { state, today } = stateAtAgeMonths(11, { routineVaccinesStatus: 'complete' });
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
  });

  it('does not ask for MMR at 12 months when the 12-month visit was not received', () => {
    const { state, today } = stateAtAgeMonths(12, {
      routineVaccinesStatus: 'some',
      completedRoutineVisits: ['birth', '1month', '2months', '4months', '6months', '9months'],
    });
    expect(shouldCollectMmrDose1Date(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
  });

  it('can ask for MMR dose 1 at 12 months when MMR was received and varicella is selected', () => {
    const { state, today } = stateAtAgeMonths(12, {
      routineVaccinesStatus: 'some',
      completedRoutineVisits: ['12months'],
      additionalVaccinesHistoryAnswer: 'yes',
    });
    expect(shouldCollectMmrDose1Date(state, today)).toBe(true);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
  });

  it('asks for MMR dose 1 at 12 months via catch-up when only the 12-month visit is documented', () => {
    const { state, today } = stateAtAgeMonths(12, {
      routineVaccinesStatus: 'complete',
      additionalVaccines: [],
    });
    expect(shouldCollectMmrDose1DateForCatchUp(state, today)).toBe(true);
    expect(shouldCollectMmrDose1Date(state, today)).toBe(true);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
  });

  it('routes routine vaccines to additional history before MMR at 12 months', () => {
    const birth = buildDateParts({ day: 27, month: 8, year: 2025 });
    const today = new Date(2026, 7, 27);
    const afterRoutine = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
    });

    expect(getNextStepAfterRoutineVaccines(afterRoutine, today)).toBe('additionalVaccines');
    expect(shouldShowMmrDateStep(afterRoutine, today)).toBe(true);
  });

  it('routes MMR to review after additional history at 12 months', () => {
    const birth = buildDateParts({ day: 27, month: 8, year: 2025 });
    const today = new Date(2026, 7, 27);
    const afterMmr = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
      mmrDate: buildDateParts({ day: 27, month: 8, year: 2026 }),
    });

    expect(getNextStepAfterMmrDate(afterMmr, today)).toBe('review');
    expect(shouldShowMmrDateStep(afterMmr, today)).toBe(false);
    expect(shouldIncludeMmrStepInFlow(afterMmr, today)).toBe(true);
  });

  it('routes additional history yes to product selection instead of skipping to review', () => {
    const birth = buildDateParts({ day: 27, month: 8, year: 2025 });
    const today = new Date(2026, 7, 27);
    const afterSelection = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
      mmrDate: buildDateParts({ day: 27, month: 8, year: 2026 }),
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

    expect(getNextStepAfterAdditionalVaccines(afterSelection)).toBe('productSelection');
    expect(getNextStepAfterMmrDate(afterSelection, today)).toBe('review');
  });

  it('routes additional history no to MMR when catch-up still needs a dose date', () => {
    const birth = buildDateParts({ day: 27, month: 8, year: 2025 });
    const today = new Date(2026, 7, 27);
    const afterAdditionalNo = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(getNextStepAfterAdditionalVaccines(afterAdditionalNo, today)).toBe('mmrDate');
  });

  it('follows the 12-month scenario step order through additional history, MMR, then review', () => {
    const birth = buildDateParts({ day: 27, month: 8, year: 2025 });
    const today = new Date(2026, 7, 27);
    const afterRoutine = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
    });

    expect(getNextStepAfterRoutineVaccines(afterRoutine, today)).toBe('additionalVaccines');

    const afterAdditionalSkip = {
      ...afterRoutine,
      additionalVaccinesHistoryAnswer: 'no' as const,
      additionalVaccines: [],
    };
    expect(getNextStepAfterAdditionalVaccines(afterAdditionalSkip, today)).toBe('mmrDate');

    const afterMmr = {
      ...afterAdditionalSkip,
      mmrDate: buildDateParts({ day: 27, month: 8, year: 2026 }),
    };
    expect(getNextStepAfterMmrDate(afterMmr, today)).toBe('review');
  });

  it('routes to MMR after completing additional vaccine history when varicella catch-up needs an MMR date', () => {
    const { state, today } = stateAtAgeMonths(18, {
      routineVaccinesStatus: 'complete',
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [],
    });
    expect(getNextStepAfterAdditionalVaccineHistory(state, today)).toBe('mmrDate');
  });

  it('routes to review after completing additional vaccine history when MMR was already collected', () => {
    const { state, today } = stateAtAgeMonths(12, {
      routineVaccinesStatus: 'complete',
      mmrDate: buildDateParts({ day: 27, month: 8, year: 2026 }),
      additionalVaccines: [
        {
          category: 'influenza',
          numberOfDoses: 1,
          lastDoseDate: buildDateParts({ day: 1, month: 6, year: 2025 }),
          doseDates: [buildDateParts({ day: 1, month: 6, year: 2025 })],
          influenzaPrimingComplete: true,
        },
      ],
    });
    expect(getNextStepAfterAdditionalVaccineHistory(state, today)).toBe('review');
  });

  it('does not ask for MMR dose 1 when the date was already entered', () => {
    const { state, today } = stateAtAgeMonths(12, {
      routineVaccinesStatus: 'complete',
      additionalVaccines: [],
      mmrDate: buildDateParts({ day: 22, month: 6, year: 2025 }),
    });
    expect(shouldCollectMmrDose1Date(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
  });

  it('uses parent-friendly Arabic wording for the 12-month MMR question', () => {
    expect(translateKey('ar', 'mmrDose1Title')).toBe(
      'تطعيم الـ MMR (تطعيم السنة) اتاخد إمتى؟'
    );
  });

  it('does not ask for MMR dose 2 when dose 1 is stored and dose 2 is still missing at 18 months', () => {
    const dose1Date = buildDateParts({ day: 22, month: 6, year: 2024 });
    const { state, today } = stateAtAgeMonths(18, {
      routineVaccinesStatus: 'complete',
      mmrDate: dose1Date,
      additionalVaccinesHistoryAnswer: 'yes',
    });
    expect(shouldCollectMmrDose1Date(state, today)).toBe(false);
    expect(shouldCollectMmrDose2Date(state, today)).toBe(true);
    expect(state.mmrDate).toEqual(dose1Date);
  });

  it('asks for MMR dose 2 at 18 months when both routine visits were received and varicella is relevant', () => {
    const { state, today } = stateAtAgeMonths(18, {
      routineVaccinesStatus: 'complete',
      additionalVaccinesHistoryAnswer: 'yes',
    });
    expect(shouldCollectMostRecentMmrDateForVaricella(state, today)).toBe(true);
    expect(shouldCollectMmrDose1DateForCatchUp(state, today)).toBe(false);
    expect(shouldCollectMmrDose2Date(state, today)).toBe(true);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
  });

  it('uses parent-friendly Arabic wording for the 18-month Varicella MMR question', () => {
    expect(translateKey('ar', 'mmrDose2Title')).toBe('تطعيم الـ MMR (تطعيم سنة ونص) اتاخد إمتى؟');
    expect(translateKey('ar', 'mmrDose2Help')).toBe(
      'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.'
    );
  });

  it('does not ask for MMR date for a 5-year-old with routine vaccines complete', () => {
    const birth = buildDateParts({ day: 24, month: 8, year: 2021 });
    const today = new Date(2026, 7, 24);
    const state = baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
      additionalVaccines: [],
    });

    expect(shouldCollectMmrDose1Date(state, today)).toBe(false);
    expect(shouldCollectMmrDose2Date(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
    expect(getNextStepAfterRoutineVaccines(state, today)).toBe('additionalVaccines');
  });
});

describe('MMR date gating at 18 months with complete routine vaccines', () => {
  const birth = buildDateParts({ day: 2, month: 3, year: 2025 });
  const today = new Date(2026, 8, 2);

  function stateAt18Months(overrides: Partial<WizardState> = {}) {
    return baseState({
      dateOfBirth: birth,
      routineVaccinesStatus: 'complete',
      ...overrides,
    });
  }

  it('A) asks for MMR dose 2 after additional history is no when Varicella catch-up still applies', () => {
    const state = stateAt18Months({
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(getNextStepAfterRoutineVaccines(state, today)).toBe('additionalVaccines');
    expect(getNextStepAfterAdditionalVaccines(state, today)).toBe('mmrDate');
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
    expect(shouldCollectMostRecentMmrDateForVaricella(state, today)).toBe(true);
  });

  it('B) asks for MMR dose 2 when varicella timing needs assessment', () => {
    const state = stateAt18Months({
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [],
    });

    expect(getNextStepAfterRoutineVaccines(state, today)).toBe('additionalVaccines');
    expect(getNextStepAfterAdditionalVaccineHistory(state, today)).toBe('mmrDate');
    expect(shouldCollectMostRecentMmrDateForVaricella(state, today)).toBe(true);
    expect(shouldCollectMmrDose2Date(state, today)).toBe(true);
    expect(shouldCollectMmrDose1DateForCatchUp(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
    expect(translateKey('ar', 'mmrDose2Title')).toBe('تطعيم الـ MMR (تطعيم سنة ونص) اتاخد إمتى؟');
  });

  it('C) does not ask for historical MMR dates for an older healthy child with complete routine vaccines', () => {
    const olderBirth = buildDateParts({ day: 24, month: 8, year: 2021 });
    const olderToday = new Date(2026, 7, 24);
    const state = baseState({
      dateOfBirth: olderBirth,
      routineVaccinesStatus: 'complete',
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines: [],
    });

    expect(shouldCollectMostRecentMmrDateForVaricella(state, olderToday)).toBe(false);
    expect(shouldCollectMmrDose1Date(state, olderToday)).toBe(false);
    expect(shouldShowMmrDateStep(state, olderToday)).toBe(false);
    expect(getNextStepAfterAdditionalVaccineHistory(state, olderToday)).toBe('review');
  });
});

describe('MMR catch-up wizard flow with one documented dose', () => {
  const dob = buildDateParts({ day: 1, month: 9, year: 2024 });
  const today = new Date(2026, 8, 1);
  const routineVisitsThrough12Months = [
    'birth',
    '1month',
    '2months',
    '4months',
    '6months',
    '9months',
    '12months',
  ] as const;

  it('requires MMR dose 1 date before review when only the 12-month dose is documented', () => {
    const state = baseState({
      dateOfBirth: dob,
      routineVaccinesStatus: 'some',
      completedRoutineVisits: [...routineVisitsThrough12Months],
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(hasExactlyOneDocumentedMmrDose(state, today)).toBe(true);
    expect(shouldCollectMmrDose1DateForCatchUp(state, today)).toBe(true);
    expect(shouldShowMmrDateStep(state, today)).toBe(true);
    expect(getNextStepAfterRoutineVaccines(state, today)).toBe('additionalVaccines');
    expect(getNextStepAfterAdditionalVaccines(state, today)).toBe('mmrDate');
  });

  it('uses parent-facing copy for the catch-up MMR dose 1 question', () => {
    expect(translateKey('ar', 'mmrDose1Title')).toBe(
      'تطعيم الـ MMR (تطعيم السنة) اتاخد إمتى؟'
    );
    expect(translateKey('ar', 'mmrDose1HelpCatchUp')).toBe(
      'محتاجين التاريخ علشان نحدد ميعاد الجرعة الثانية بدقة.'
    );
    expect(translateKey('en', 'mmrDose1TitleCatchUp')).toBe('When was the first MMR dose given?');
    expect(translateKey('en', 'mmrDose1HelpCatchUp')).toBe(
      'We need the date to calculate the second dose accurately.'
    );
  });

  it('does not ask again after MMR dose 1 date is stored', () => {
    const state = baseState({
      dateOfBirth: dob,
      routineVaccinesStatus: 'some',
      completedRoutineVisits: [...routineVisitsThrough12Months],
      mmrDate: buildDateParts({ day: 1, month: 8, year: 2026 }),
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(shouldCollectMmrDose1DateForCatchUp(state, today)).toBe(false);
    expect(shouldShowMmrDateStep(state, today)).toBe(false);
    expect(getNextStepAfterMmrDate(state, today)).toBe('review');
  });
});

describe('additional vaccine category age filtering', () => {
  const birth = new Date(2024, 5, 22);

  function categoriesAtAgeMonths(ageMonths: number) {
    const today = addMonths(birth, ageMonths);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });
    return getEligibleAdditionalVaccineCategories(state, today);
  }

  it('shows rotavirus, PCV, MenB, and MenACWY for a 2-month-old', () => {
    expect(categoriesAtAgeMonths(2)).toEqual([
      'rotavirus',
      'pneumococcal',
      'meningococcalACWY',
      'meningococcalB',
    ]);
  });

  it('adds influenza for a 7-month-old but not varicella, hepatitis A, or HPV', () => {
    const categories = categoriesAtAgeMonths(7);
    expect(categories).toContain('influenza');
    expect(categories).not.toContain('varicella');
    expect(categories).not.toContain('hepatitisA');
    expect(categories).not.toContain('hpv');
  });

  it('includes varicella and hepatitis A for a 14-month-old but not HPV', () => {
    const categories = categoriesAtAgeMonths(14);
    expect(categories).toContain('varicella');
    expect(categories).toContain('hepatitisA');
    expect(categories).not.toContain('hpv');
  });

  it('includes HPV for a 9-year-old and keeps infant vaccines for historical entry', () => {
    const today = addMonths(birth, 9 * 12);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });
    const categories = getEligibleAdditionalVaccineCategories(state, today);

    expect(categories).toContain('hpv');
    expect(categories).toContain('rotavirus');
    expect(categories).toContain('pneumococcal');
  });

  it('shows no categories before 6 weeks and skips the additional vaccines step', () => {
    const today = addWeeks(birth, 5);
    const state = baseState({ dateOfBirth: dobFromDate(birth) });

    expect(getEligibleAdditionalVaccineCategories(state, today)).toEqual([]);
    expect(shouldShowAdditionalVaccinesStep(state, today)).toBe(false);
    expect(getNextStepAfterRoutineVaccines(state, today)).toBe('review');
  });
});

describe('HPV wizard routing', () => {
  const hpvDob = buildDateParts({ day: 11, month: 9, year: 2011 });
  const dose1Date = buildDateParts({ day: 11, month: 9, year: 2026 });

  function hpvWizardState(
    overrides: Partial<WizardState['additionalVaccines'][number]> = {},
    step: WizardState['currentStep'] = 'productSelection'
  ): WizardState {
    return baseState({
      dateOfBirth: hpvDob,
      routineVaccinesStatus: 'complete',
      additionalVaccinesHistoryAnswer: 'yes',
      currentStep: step,
      additionalVaccines: [
        {
          category: 'hpv',
          numberOfDoses: 0,
          lastDoseDate: null,
          doseDates: [],
          ...overrides,
        },
      ],
    });
  }

  it.each(['cervarix', 'gardasil4', 'gardasil9'] as const)(
    'does not loop back to product selection after %s dose count is saved',
    (product) => {
      const afterProduct = hpvWizardState({ product }, 'doseCount');
      expect(getFirstAdditionalVaccineStep(afterProduct)).toBe('doseCount');

      const afterDoseCount = hpvWizardState({ product, numberOfDoses: 1 }, 'doseCount');
      expect(getNextStepAfterDoseCount(afterDoseCount, 0)).toBe('lastDoseDate');
      expect(getNextStepAfterDoseCount(afterDoseCount, 0)).not.toBe('productSelection');
    }
  );

  it('reaches review after Cervarix dose 1 date entry without revisiting product or dose count', () => {
    const afterDates = hpvWizardState({
      product: 'cervarix',
      numberOfDoses: 1,
      firstDoseDate: dose1Date,
      lastDoseDate: dose1Date,
      doseDates: [dose1Date],
    }, 'lastDoseDate');

    expect(isVaccineRecordComplete(afterDates.additionalVaccines[0]!)).toBe(true);
    expect(getNextStepAfterAdditionalVaccineHistory(afterDates)).toBe('review');
  });

  it('preserves product and dose count when advancing from dose count to dose dates', () => {
    const record = {
      category: 'hpv' as const,
      product: 'gardasil4' as const,
      numberOfDoses: 1,
      lastDoseDate: null,
      doseDates: [],
    };

    const nextStep = getNextStepAfterDoseCount(
      baseState({
        dateOfBirth: hpvDob,
        additionalVaccines: [record],
      }),
      0
    );

    expect(nextStep).toBe('lastDoseDate');
    expect(record.product).toBe('gardasil4');
    expect(record.numberOfDoses).toBe(1);
  });

  it('routes Cervarix with 2 previous doses to dose dates without returning to product selection', () => {
    const state = hpvWizardState({ product: 'cervarix', numberOfDoses: 2 }, 'doseCount');
    expect(getNextStepAfterDoseCount(state, 0)).toBe('lastDoseDate');
  });

  it('still supports intentional back navigation to edit HPV product and dose count', () => {
    const onDates = hpvWizardState(
      { product: 'cervarix', numberOfDoses: 1 },
      'lastDoseDate'
    );
    expect(getPreviousWizardStep(onDates)).toBe('doseCount');

    const onDoseCount = hpvWizardState(
      { product: 'cervarix', numberOfDoses: 1 },
      'doseCount'
    );
    expect(getPreviousWizardStep(onDoseCount)).toBe('productSelection');
  });

  it('allows changing HPV product through back navigation without creating a forward loop', () => {
    const afterProductChange = hpvWizardState(
      { product: 'gardasil9', numberOfDoses: 1 },
      'doseCount'
    );

    expect(afterProductChange.additionalVaccines[0]?.product).toBe('gardasil9');
    expect(afterProductChange.additionalVaccines[0]?.numberOfDoses).toBe(1);
    expect(getNextStepAfterDoseCount(afterProductChange, 0)).toBe('lastDoseDate');
  });

  it('reproduces and breaks the historical product ↔ dose-count loop', () => {
    const productThenDoseCount = hpvWizardState({ product: 'cervarix' }, 'doseCount');
    const loopStep = getNextStepAfterDoseCount(
      {
        ...productThenDoseCount,
        additionalVaccines: [
          {
            ...productThenDoseCount.additionalVaccines[0]!,
            numberOfDoses: 1,
          },
        ],
      },
      0
    );

    expect(loopStep).toBe('lastDoseDate');

    const wouldLoopAgain = getNextStepAfterDoseCount(
      {
        ...productThenDoseCount,
        additionalVaccines: [
          {
            category: 'hpv',
            product: 'cervarix',
            numberOfDoses: 1,
            lastDoseDate: null,
            doseDates: [],
          },
        ],
      },
      0
    );
    expect(wouldLoopAgain).not.toBe('productSelection');
  });
});
