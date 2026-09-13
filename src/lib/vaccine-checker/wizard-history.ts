import { buildDateParts, parseDateParts, type AdditionalVaccineCategory, type AdditionalVaccineRecord } from '@/types/wizard-types';
import {
  isHealthyPcvOlderThanFive,
} from '@/lib/vaccine-checker/teen-history-simplification';
const ADDITIONAL_VACCINE_CATEGORY_ORDER: AdditionalVaccineCategory[] = [
  'rotavirus',
  'pneumococcal',
  'meningococcalACWY',
  'meningococcalB',
  'varicella',
  'hepatitisA',
  'influenza',
  'hpv',
];

/** Wizard-only sentinel: dose count not chosen yet (distinct from user-entered 0 prior doses). */
export const UNSPECIFIED_DOSE_COUNT = -1;

export function isDoseCountSpecified(record: Pick<AdditionalVaccineRecord, 'numberOfDoses'>): boolean {
  return record.numberOfDoses >= 0;
}

export function buildEmptyAdditionalVaccineRecord(
  category: AdditionalVaccineCategory
): AdditionalVaccineRecord {
  return {
    category,
    product: category === 'meningococcalB' ? 'bexsero' : undefined,
    numberOfDoses: UNSPECIFIED_DOSE_COUNT,
    lastDoseDate: null,
    firstDoseDate: null,
    doseDates: [],
  };
}

export function patchAdditionalVaccineAtIndex(
  vaccines: AdditionalVaccineRecord[],
  index: number,
  patch: Partial<AdditionalVaccineRecord>
): AdditionalVaccineRecord[] {
  if (index < 0 || index >= vaccines.length) {
    return vaccines;
  }

  const next = [...vaccines];
  next[index] = { ...next[index], ...patch };
  return next;
}

export function mergeSelectedAdditionalVaccineRecords(
  currentRecords: AdditionalVaccineRecord[],
  selectedCategories: AdditionalVaccineCategory[]
): AdditionalVaccineRecord[] {
  return selectedCategories.map((category) => {
    const existing = currentRecords.find((record) => record.category === category);
    return existing ?? buildEmptyAdditionalVaccineRecord(category);
  });
}

const EXPLICIT_ZERO_DOSE_WHEN_NOT_SELECTED: AdditionalVaccineCategory[] = [
  'pneumococcal',
  'hepatitisA',
];

/** Selected in additional-vaccines list = previously received yes. */
export function applyPreviouslyReceivedYesDefaults(
  record: AdditionalVaccineRecord,
  dob: Date,
  today: Date
): AdditionalVaccineRecord {
  if (
    record.category === 'pneumococcal' &&
    isHealthyPcvOlderThanFive(dob, today) &&
    !isDoseCountSpecified(record)
  ) {
    return { ...record, numberOfDoses: 1 };
  }

  return record;
}

export function buildZeroDoseAdditionalRecord(
  category: AdditionalVaccineCategory
): AdditionalVaccineRecord {
  return {
    ...buildEmptyAdditionalVaccineRecord(category),
    numberOfDoses: 0,
  };
}

export function buildAdditionalVaccinesAfterSelection(
  currentRecords: AdditionalVaccineRecord[],
  selectedCategories: AdditionalVaccineCategory[],
  eligibleCategories: AdditionalVaccineCategory[],
  dob: Date,
  today: Date
): AdditionalVaccineRecord[] {
  if (selectedCategories.length === 0) {
    return [];
  }

  const orderedEligible = ADDITIONAL_VACCINE_CATEGORY_ORDER.filter((category) =>
    eligibleCategories.includes(category)
  );

  const records: AdditionalVaccineRecord[] = [];

  for (const category of orderedEligible) {
    if (selectedCategories.includes(category)) {
      const existing = currentRecords.find((record) => record.category === category);
      const base = existing ?? buildEmptyAdditionalVaccineRecord(category);
      records.push(applyPreviouslyReceivedYesDefaults(base, dob, today));
      continue;
    }

    if (EXPLICIT_ZERO_DOSE_WHEN_NOT_SELECTED.includes(category)) {
      records.push(buildZeroDoseAdditionalRecord(category));
    }
  }

  return records;
}

export function parseWizardDob(
  dateOfBirth: { day: number; month: number; year: number } | null
): Date | null {
  if (!dateOfBirth) {
    return null;
  }

  return parseDateParts(dateOfBirth);
}

export function buildDate(day: number, month: number, year: number) {
  return buildDateParts({ day, month, year });
}
