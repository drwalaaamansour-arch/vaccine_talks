import {
  type AdditionalVaccineCategory,
  type AdditionalVaccineRecord,
  type WizardState,
  parseDateParts,
} from '@/types/wizard-types';
import { dateFromParts, type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import {
  getAllDoseDatesFromRecord,
  getHpvAdministeredDoseDates,
  hasAllRequiredDoseDates,
} from '@/lib/vaccine-checker/dose-date-storage';
import { getWizardRequiredDoseDateCount } from '@/lib/vaccine-checker/teen-history-simplification';
import { isDoseCountSpecified } from '@/lib/vaccine-checker/wizard-history';
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
  hepatitisAHistoryCompleteWithoutDates,
  hepatitisAWizardCompleteAfterDoseCount,
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

  if (!isDoseCountSpecified(record)) {
    return false;
  }

  if (record.numberOfDoses <= 0) {
    return record.category === 'pneumococcal' || record.category === 'hepatitisA';
  }

  if (hepatitisAHistoryCompleteWithoutDates(record)) {
    return true;
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
    const required = getWizardRequiredDoseDateCount(record, dob, today);
    if (getHpvAdministeredDoseDates(record).length < required) {
      return false;
    }
  } else if (
    record.category === 'hepatitisA' &&
    record.numberOfDoses === 1 &&
    getAllDoseDatesFromRecord(record).length < 1
  ) {
    return false;
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
  state: WizardState,
  currentIndex: number,
  referenceDate: Date = new Date()
): 'productSelection' | 'doseCount' | 'review' {
  const vaccines = state.additionalVaccines;
  const nextIndex = vaccines.findIndex(
    (record, index) =>
      index > currentIndex &&
      !isVaccineRecordComplete(record, referenceDate, state.dateOfBirth)
  );

  if (nextIndex === -1) {
    return 'review';
  }

  if (vaccines[nextIndex].category === 'pneumococcal') {
    return 'doseCount';
  }

  return vaccineNeedsProductSelectionForState(state, vaccines[nextIndex].category, referenceDate)
    ? 'productSelection'
    : 'doseCount';
}

function vaccineNeedsProductSelectionForState(
  state: WizardState,
  category: AdditionalVaccineCategory,
  referenceDate: Date
): boolean {
  if (!categoryNeedsProduct(category) || !state.dateOfBirth) {
    return false;
  }

  const dob = parseDateParts(state.dateOfBirth);

  if (category === 'meningococcalACWY' && isHealthyMenAcwySingleDosePath(dob, referenceDate)) {
    return false;
  }

  if (category === 'pneumococcal' && isHealthyPcvOlderThanFive(dob, referenceDate)) {
    return false;
  }

  return true;
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
  const stored =
    record.category === 'hpv'
      ? getHpvAdministeredDoseDates(record)
      : getAllDoseDatesFromRecord(record);

  return stored
    .map((value) => dateFromParts(value))
    .filter((value): value is Date => value !== null);
}

export function recordToHistory(record: AdditionalVaccineRecord): VaccineHistoryRecord {
  const doseDates = buildDoseDates(record);
  const normalizedProduct = normalizeProductId(
    record.product ?? (record.category === 'meningococcalB' ? 'bexsero' : undefined)
  );

  const reportedDoses = isDoseCountSpecified(record) ? record.numberOfDoses : 0;

  return {
    category: record.category,
    product: normalizedProduct,
    numberOfDoses: reportedDoses,
    lastDoseDate: dateFromParts(record.lastDoseDate),
    firstDoseDate: dateFromParts(
      record.category === 'hpv'
        ? getHpvAdministeredDoseDates(record)[0] ?? null
        : record.firstDoseDate ?? record.dose1Date ?? record.lastDoseDate
    ),
    doseDates,
    influenzaPrimingComplete: record.influenzaPrimingComplete,
    influenzaCurrentSeasonReceived: record.influenzaCurrentSeasonReceived,
    firstDoseDateUnknown: record.firstDoseDateUnknown,
    secondDoseDateUnknown: record.secondDoseDateUnknown,
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

export function getActiveVaccineIndexForState(
  state: WizardState,
  referenceDate: Date = new Date()
): number {
  return getActiveVaccineIndex(state.additionalVaccines, referenceDate, state.dateOfBirth);
}
