import { describe, expect, it } from 'vitest';
import {
  getMmrDateCollectionContext,
  validateCollectedMmrDate,
} from '@/lib/vaccine-checker/mmr-date-validation';
import {
  shouldCollectMmrDose1DateForVaricella,
  shouldCollectMostRecentMmrDateForVaricella,
} from '@/lib/vaccine-checker/wizard-flow';
import { buildDateParts, type WizardState } from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'ar',
    dateOfBirth: buildDateParts({ day: 2, month: 3, year: 2025 }),
    calculatedAge: null,
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines: [],
    currentStep: 'mmrDate',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

const t = (key: string) => translateKey('ar', key);

describe('MMR date validation for Varicella timing', () => {
  const birth = dob(2025, 3, 2);
  const asOf = dob(2026, 9, 2);
  const eighteenMonthDate = dob(2026, 9, 2);

  it('1. rejects an 18-month MMR date before the 18-month birthday', () => {
    const tooEarly = dob(2025, 12, 2);
    const result = validateCollectedMmrDate(tooEarly, birth, asOf, 'varicella18Month', t);

    expect(result.valid).toBe(false);
    expect(result.error).toBe(
      'التاريخ ده قبل ميعاد تطعيم MMR بتاع سنة ونص. راجعي التاريخ المكتوب في سجل التطعيمات.'
    );
  });

  it('2. accepts the exact 18-month birthday as the MMR date', () => {
    const result = validateCollectedMmrDate(eighteenMonthDate, birth, asOf, 'varicella18Month', t);

    expect(result.valid).toBe(true);
    expect(result.error).toBeNull();
  });

  it('3. asks only for the 12-month MMR date between 12 and 17 months', () => {
    const today = dob(2026, 5, 2);
    const state = baseState({
      routineVaccinesStatus: 'some',
      completedRoutineVisits: ['12months'],
      additionalVaccinesHistoryAnswer: 'yes',
    });

    expect(getChildAgeMonthsAt(today, birth)).toBeGreaterThanOrEqual(12);
    expect(getChildAgeMonthsAt(today, birth)).toBeLessThan(18);
    expect(shouldCollectMostRecentMmrDateForVaricella(state, today)).toBe(false);
    expect(shouldCollectMmrDose1DateForVaricella(state, today)).toBe(true);
    expect(getMmrDateCollectionContext(state, today)).toBe('varicella12Month');
    expect(translateKey('ar', 'mmr12MonthVaricellaTitle')).toBe('تطعيم MMR بتاع السنة اتاخد إمتى؟');
  });

  it('4. rejects any MMR date in the future', () => {
    const futureDate = dob(2026, 10, 2);
    const result = validateCollectedMmrDate(futureDate, birth, asOf, 'varicella18Month', t);

    expect(result.valid).toBe(false);
    expect(result.error).toBe(translateKey('ar', 'mmrDateErrorFuture'));
  });

  it('uses the 18-month Varicella wording at exactly 18 months with routine complete', () => {
    const state = baseState();
    expect(getMmrDateCollectionContext(state, asOf)).toBe('varicella18Month');
    expect(translateKey('ar', 'mmrDose2Title')).toBe('تطعيم الـ MMR (تطعيم سنة ونص) اتاخد إمتى؟');
    expect(translateKey('ar', 'mmrDose2Help')).toBe(
      'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.'
    );
  });

  it('uses catch-up wording when Varicella timing does not need an exact MMR date', () => {
    const today = dob(2026, 5, 2);
    const state = baseState({
      routineVaccinesStatus: 'some',
      completedRoutineVisits: ['12months'],
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
    });

    expect(getMmrDateCollectionContext(state, today)).toBe('catchUp');
  });
});

function getChildAgeMonthsAt(today: Date, birth: Date): number {
  const ageYears = today.getFullYear() - birth.getFullYear();
  const ageMonths = today.getMonth() - birth.getMonth();
  const totalMonths = ageYears * 12 + ageMonths;
  if (today.getDate() < birth.getDate()) {
    return totalMonths - 1;
  }
  return totalMonths;
}
