import {
  addMonths,
  isOnOrAfter,
  isOnOrBefore,
  laterOf,
  startOfDay,
} from '@/lib/vaccine-checker/date-utils';
import { getVisitDueDate } from '@/lib/vaccine-checker/routine';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import {
  type MmrCatchUpAssessment,
} from '@/lib/vaccine-checker/routine-catch-up/types';
import { iso, makeRecommendation, type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

const MMR_DOSE1_AGE_MONTHS = 12;
const MMR_DOSE2_AGE_MONTHS = 18;
const MIN_DOSE_INTERVAL_MONTHS = 1;

function hasDocumentedMmrDose1(input: CheckerInput, ledger: RoutineVaccineLedger): boolean {
  return (
    ledger.bySeries.mmr.documentedDoseKeys.includes('mmrDose1') ||
    input.mmrDate !== null ||
    input.mmrDates.length >= 1
  );
}

function hasDocumentedMmrDose2(input: CheckerInput, ledger: RoutineVaccineLedger): boolean {
  return (
    ledger.bySeries.mmr.documentedDoseKeys.includes('mmrDose2') ||
    input.mmrDose2Date != null ||
    input.mmrDates.length >= 2
  );
}

export function getMmrDose1Date(input: CheckerInput, ledger: RoutineVaccineLedger): Date | null {
  if (input.mmrDate) {
    return startOfDay(input.mmrDate);
  }

  if (input.mmrDates[0]) {
    return startOfDay(input.mmrDates[0]);
  }

  if (ledger.bySeries.mmr.documentedDoseKeys.includes('mmrDose1')) {
    return getVisitDueDate(input.dob, '12months');
  }

  return null;
}

export function getMmrDose2Date(input: CheckerInput, ledger: RoutineVaccineLedger): Date | null {
  if (input.mmrDose2Date) {
    return startOfDay(input.mmrDose2Date);
  }

  if (input.mmrDates[1]) {
    return startOfDay(input.mmrDates[1]);
  }

  if (ledger.bySeries.mmr.documentedDoseKeys.includes('mmrDose2')) {
    return getVisitDueDate(input.dob, '18months');
  }

  return null;
}

export function getDocumentedMmrDoseKeys(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): string[] {
  const keys = new Set(ledger.bySeries.mmr.documentedDoseKeys);

  if (hasDocumentedMmrDose1(input, ledger)) {
    keys.add('mmrDose1');
  }

  if (hasDocumentedMmrDose2(input, ledger)) {
    keys.add('mmrDose2');
  }

  return ['mmrDose1', 'mmrDose2'].filter((key) => keys.has(key));
}

function hasReached12Months(dob: Date, today: Date): boolean {
  return isOnOrAfter(today, addMonths(dob, MMR_DOSE1_AGE_MONTHS));
}

function hasReached18Months(dob: Date, today: Date): boolean {
  return isOnOrAfter(today, addMonths(dob, MMR_DOSE2_AGE_MONTHS));
}

function shouldSuppressFutureRoutineMmrDose(
  input: CheckerInput,
  documentedDoseCount: number,
  dob: Date,
  today: Date
): boolean {
  return (
    input.routineVaccinesStatus === 'complete' &&
    documentedDoseCount === 1 &&
    !hasReached18Months(dob, today)
  );
}

function routineMmrDose2Date(dob: Date, dose1Date: Date, today: Date): Date {
  const dose1PlusOneMonth = addMonths(dose1Date, MIN_DOSE_INTERVAL_MONTHS);

  if (hasReached18Months(dob, today)) {
    return dose1PlusOneMonth;
  }

  return laterOf(addMonths(dob, MMR_DOSE2_AGE_MONTHS), dose1PlusOneMonth);
}

function dose2NoteKey(
  dob: Date,
  dose2Date: Date,
  today: Date,
  hasActualDose1: boolean
): string | null {
  if (!hasActualDose1) {
    if (hasReached18Months(dob, today)) {
      return 'note_mmrDose2OneMonthAfterFirst';
    }

    const eighteenMonthDate = addMonths(dob, MMR_DOSE2_AGE_MONTHS);
    if (dose2Date.getTime() === eighteenMonthDate.getTime()) {
      return 'note_mmrDose2At18Months';
    }

    return 'note_mmrDose2MinInterval';
  }

  if (isOnOrBefore(dose2Date, today)) {
    return 'note_mmrDose2DueAfterOneMonthPassed';
  }

  const eighteenMonthDate = addMonths(dob, MMR_DOSE2_AGE_MONTHS);
  if (dose2Date.getTime() === eighteenMonthDate.getTime()) {
    return 'note_mmrDose2At18Months';
  }

  return null;
}

function dose2NoteKeys(
  dob: Date,
  dose2Date: Date,
  today: Date,
  hasActualDose1: boolean
): string[] {
  const noteKey = dose2NoteKey(dob, dose2Date, today, hasActualDose1);
  return noteKey ? [noteKey] : [];
}

function recommendationStatus(recommendedDate: Date, today: Date) {
  return isOnOrBefore(recommendedDate, today) ? ('due-now' as const) : ('upcoming' as const);
}

export function assessMmrCatchUp(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): { assessment: MmrCatchUpAssessment; recommendations: VaccineRecommendation[] } {
  const today = startOfDay(input.referenceDate);
  const documentedDoseKeys = getDocumentedMmrDoseKeys(input, ledger);
  const documentedDoseCount = documentedDoseKeys.length;

  if (!hasReached12Months(input.dob, today)) {
    return {
      assessment: {
        documentedDoseCount,
        documentedDoseKeys,
        status: 'not_yet_due',
      },
      recommendations: [],
    };
  }

  if (documentedDoseCount >= 2) {
    const dose1 = getMmrDose1Date(input, ledger);
    const dose2 = getMmrDose2Date(input, ledger);

    return {
      assessment: {
        documentedDoseCount,
        documentedDoseKeys,
        dose1Date: dose1 ? iso(dose1) : undefined,
        dose2Date: dose2 ? iso(dose2) : undefined,
        status: 'completed',
      },
      recommendations: [
        makeRecommendation({
          id: 'routine-mmr-series-complete',
          vaccineCategory: 'routine',
          routineVaccineKey: 'mmrDose2',
          doseLabelKey: 'routineVaccine_mmrSeriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ],
    };
  }

  const recommendations: VaccineRecommendation[] = [];

  if (documentedDoseCount === 0) {
    const dose1Date = today;
    const dose2Date = routineMmrDose2Date(input.dob, dose1Date, today);

    recommendations.push(
      makeRecommendation({
        id: 'routine-mmr-dose-1',
        vaccineCategory: 'routine',
        routineVaccineKey: 'mmrDose1',
        doseLabelKey: 'routineVaccine_mmrDose1',
        status: 'due-now',
        noteKeys: ['note_mmrDose1DueNow'],
      }),
      makeRecommendation({
        id: 'routine-mmr-dose-2',
        vaccineCategory: 'routine',
        routineVaccineKey: 'mmrDose2',
        doseLabelKey: 'routineVaccine_mmrDose2',
        status: recommendationStatus(dose2Date, today),
        timingKind: 'FIXED_DATE',
        recommendedDate: iso(dose2Date),
        noteKeys: dose2NoteKeys(input.dob, dose2Date, today, false),
      })
    );

    return {
      assessment: {
        documentedDoseCount,
        documentedDoseKeys,
        scheduledDose2Date: iso(dose2Date),
        status: 'catch_up',
      },
      recommendations,
    };
  }

  const dose1Date = getMmrDose1Date(input, ledger);
  if (!dose1Date) {
    return {
      assessment: {
        documentedDoseCount,
        documentedDoseKeys,
        status: 'catch_up',
      },
      recommendations: [],
    };
  }

  if (shouldSuppressFutureRoutineMmrDose(input, documentedDoseCount, input.dob, today)) {
    return {
      assessment: {
        documentedDoseCount,
        documentedDoseKeys,
        dose1Date: iso(dose1Date),
        status: 'not_yet_due',
      },
      recommendations: [],
    };
  }

  const dose2Date = routineMmrDose2Date(input.dob, dose1Date, today);

  recommendations.push(
    makeRecommendation({
      id: 'routine-mmr-dose-2',
      vaccineCategory: 'routine',
      routineVaccineKey: 'mmrDose2',
      doseLabelKey: 'routineVaccine_mmrDose2',
      status: recommendationStatus(dose2Date, today),
      timingKind: 'FIXED_DATE',
      recommendedDate: iso(dose2Date),
      noteKeys: dose2NoteKeys(input.dob, dose2Date, today, true),
    })
  );

  return {
    assessment: {
      documentedDoseCount,
      documentedDoseKeys,
      dose1Date: iso(dose1Date),
      scheduledDose2Date: iso(dose2Date),
      status: 'catch_up',
    },
    recommendations,
  };
}
