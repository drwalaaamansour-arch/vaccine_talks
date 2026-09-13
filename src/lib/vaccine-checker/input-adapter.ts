import {
  type AdditionalVaccineCategory,
  type AdditionalVaccineRecord,
  type WizardState,
  parseDateParts,
} from '@/types/wizard-types';
import { dateFromParts, type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import {
  getAllDoseDatesFromRecord,
  hasAllRequiredDoseDates,
} from '@/lib/vaccine-checker/dose-date-storage';
import {
  getEffectiveCompletedRoutineVisits,
  resolveMmrDatesForEngine,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  getNotReceivedRoutineVisits,
  getReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import { buildRoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import {
  influenzaTeenSeasonAnswerComplete,
  influenzaUsesCurrentSeasonQuestion,
  isHealthyMenAcwySingleDosePath,
  isHealthyPcvOlderThanFive,
  menAcwyTeenHistoryCompleteWithoutDetails,
  pcvTeenHistoryCompleteWithoutDetails,
} from '@/lib/vaccine-checker/teen-history-simplification';

export const CATEGORIES_WITH_PRODUCT: AdditionalVaccineCategory[] = [
  'rotavirus',
  'pneumococcal',
  'meningococcalACWY',
  'varicella',
  'hpv',
];

export const ALL_ADDITIONAL_CATEGORIES: AdditionalVaccineCategory[] = [
  'rotavirus',
  'pneumococcal',
  'meningococcalACWY',
  'meningococcalB',
  'varicella',
  'hepatitisA',
  'influenza',
  'hpv',
];

export function categoryNeedsProduct(category: AdditionalVaccineCategory): boolean {
  return CATEGORIES_WITH_PRODUCT.includes(category);
}

export function getFirstIncompleteVaccineIndex(
  vaccines: AdditionalVaccineRecord[],
  referenceDate: Date = new Date(),
  dateOfBirth?: { day: number; month: number; year: number } | null
): number {
  return vaccines.findIndex(
    (record) => !isVaccineRecordComplete(record, referenceDate, dateOfBirth)
  );
}

export function isVaccineRecordCompleteForState(
  state: WizardState,
  record: AdditionalVaccineRecord,
  referenceDate: Date = new Date()
): boolean {
  return isVaccineRecordComplete(record, referenceDate, state.dateOfBirth);
}

export function isVaccineRecordComplete(
  record: AdditionalVaccineRecord,
  referenceDate: Date = new Date(),
  dateOfBirth?: { day: number; month: number; year: number } | null
): boolean {
  const dob =
    dateOfBirth !== undefined && dateOfBirth !== null
      ? parseDateParts(dateOfBirth)
      : null;
  const today = referenceDate;

  if (dob && influenzaTeenSeasonAnswerComplete(record, dob, today)) {
    return true;
  }

  if (record.numberOfDoses <= 0) {
    return record.category === 'pneumococcal';
  }

  if (dob) {
    if (pcvTeenHistoryCompleteWithoutDetails(record, dob, today)) {
      return true;
    }
    if (menAcwyTeenHistoryCompleteWithoutDetails(record, dob, today)) {
      return true;
    }
  }

  const needsProduct =
    categoryNeedsProduct(record.category) &&
    !(
      dob &&
      record.category === 'meningococcalACWY' &&
      isHealthyMenAcwySingleDosePath(dob, today)
    ) &&
    !(dob && record.category === 'pneumococcal' && isHealthyPcvOlderThanFive(dob, today));

  if (needsProduct && !record.product) {
    return false;
  }

  if (record.category === 'hpv' && record.firstDoseDateUnknown) {
    return record.numberOfDoses > 0 && Boolean(record.product);
  }

  if (dob && record.category === 'hpv') {
    const required = record.firstDoseDateUnknown ? 0 : 1;
    if (getAllDoseDatesFromRecord(record).length < required) {
      return false;
    }
  } else if (!hasAllRequiredDoseDates(record)) {
    return false;
  }

  if (record.category === 'influenza' && record.influenzaPrimingComplete === undefined) {
    if (dob && influenzaUsesCurrentSeasonQuestion(dob, today)) {
      return record.influenzaCurrentSeasonReceived !== undefined;
    }
    return false;
  }
  return true;
}

export function getNextVaccineStepAfterLastDose(
  vaccines: AdditionalVaccineRecord[],
  currentIndex: number
): 'productSelection' | 'doseCount' | 'review' {
  const nextIndex = vaccines.findIndex(
    (record, index) => index > currentIndex && !isVaccineRecordComplete(record)
  );

  if (nextIndex === -1) {
    return 'review';
  }

  if (vaccines[nextIndex].category === 'pneumococcal') {
    return 'doseCount';
  }

  return categoryNeedsProduct(vaccines[nextIndex].category) ? 'productSelection' : 'doseCount';
}

export function normalizeProductId(product: string | undefined): string | undefined {
  if (!product) {
    return undefined;
  }

  const normalized = product.trim().toLowerCase().replace(/\s+/g, '');
  const aliases: Record<string, string> = {
    gardasil4: 'gardasil4',
    gardasil9: 'gardasil9',
    cervarix: 'cervarix',
    rotarix: 'rotarix',
    rotateq: 'rotateq',
    synflorix: 'synflorix',
    prevenar13: 'prevenar13',
    vaxneuvance: 'vaxneuvance',
    prevenar20: 'prevenar20',
    nimenrix: 'nimenrix',
    menactra: 'menactra',
    barycela: 'barycela',
    varivax: 'varivax',
    bexsero: 'bexsero',
    dontknow: 'dontKnow',
    other: 'other',
  };

  return aliases[normalized] ?? product;
}

function buildDoseDates(record: AdditionalVaccineRecord): Date[] {
  return getAllDoseDatesFromRecord(record)
    .map((value) => dateFromParts(value))
    .filter((value): value is Date => value !== null);
}

export function recordToHistory(record: AdditionalVaccineRecord): VaccineHistoryRecord {
  const doseDates = buildDoseDates(record);
  const normalizedProduct = normalizeProductId(
    record.product ?? (record.category === 'meningococcalB' ? 'bexsero' : undefined)
  );

  return {
    category: record.category,
    product: normalizedProduct,
    numberOfDoses: record.numberOfDoses,
    lastDoseDate: dateFromParts(record.lastDoseDate),
    firstDoseDate: dateFromParts(record.firstDoseDate ?? record.dose1Date ?? record.lastDoseDate),
    doseDates,
    influenzaPrimingComplete: record.influenzaPrimingComplete,
    influenzaCurrentSeasonReceived: record.influenzaCurrentSeasonReceived,
    firstDoseDateUnknown: record.firstDoseDateUnknown,
  };
}

export function wizardStateToCheckerInput(
  state: WizardState,
  referenceDate: Date = new Date()
): CheckerInput | null {
  if (!state.dateOfBirth) return null;

  const dob = parseDateParts(state.dateOfBirth);
  const mmrDates = resolveMmrDatesForEngine(state);
  const reachedRoutineVisits = getDueRoutineVisits(dob, referenceDate);
  const routineVisitHistory = hasRoutineHistoryForReachedVisits(
    state.routineVisitHistory,
    reachedRoutineVisits
  )
    ? Object.fromEntries(
        reachedRoutineVisits.map((visit) => [visit, state.routineVisitHistory[visit]!])
      )
    : undefined;

  const baseInput: CheckerInput = {
    dob,
    referenceDate,
    mmrDate: state.mmrDate ? parseDateParts(state.mmrDate) : null,
    mmrDose2Date: state.mmrDose2Date ? parseDateParts(state.mmrDose2Date) : null,
    mmrDates,
    routineVaccinesStatus: state.routineVaccinesStatus,
    completedRoutineVisits: getEffectiveCompletedRoutineVisits(state, referenceDate),
    routineVisitHistory,
    vaccineHistory: state.additionalVaccines.map(recordToHistory),
  };

  return attachRoutineVaccineLedger(baseInput);
}

export function attachRoutineVaccineLedger(input: CheckerInput): CheckerInput {
  return {
    ...input,
    routineVaccineLedger: buildRoutineVaccineLedger(input),
  };
}

export function getHistoryForCategory(
  history: VaccineHistoryRecord[],
  category: AdditionalVaccineCategory
): VaccineHistoryRecord | undefined {
  return history.find((record) => record.category === category);
}

export function categoryRequiresFirstDoseDate(
  _category: AdditionalVaccineCategory,
  numberOfDoses: number
): boolean {
  return numberOfDoses >= 2;
}

export function categoryRequiresInfluenzaPrimingQuestion(
  category: AdditionalVaccineCategory,
  numberOfDoses: number,
  dob?: Date | null,
  referenceDate: Date = new Date()
): boolean {
  if (category !== 'influenza' || numberOfDoses < 1) {
    return false;
  }

  if (dob && influenzaUsesCurrentSeasonQuestion(dob, referenceDate)) {
    return false;
  }

  return true;
}

export function getActiveVaccineIndex(
  vaccines: AdditionalVaccineRecord[],
  referenceDate: Date = new Date(),
  dateOfBirth?: { day: number; month: number; year: number } | null
): number {
  const incomplete = getFirstIncompleteVaccineIndex(vaccines, referenceDate, dateOfBirth);
  return incomplete === -1 ? Math.max(vaccines.length - 1, 0) : incomplete;
}
