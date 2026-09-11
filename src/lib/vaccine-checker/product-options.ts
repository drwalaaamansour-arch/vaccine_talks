import {
  type AdditionalVaccineCategory,
  type AdditionalVaccineRecord,
  type DateOfBirth,
  parseDateParts,
} from '@/types/wizard-types';
import { addYears, ageAtDate, isAfter, type AgeAtDate } from '@/lib/vaccine-checker/date-utils';
import { getReferenceDate } from '@/lib/vaccine-checker/wizard-flow';

export type ProductMinAge = {
  minWeeks?: number;
  minMonths?: number;
  minYears?: number;
};

export type ProductMaxAge = {
  /** Last calendar day the product may start a new series (inclusive), measured from DOB. */
  maxYearsInclusive?: number;
};

export type WizardProductOption = {
  value: string;
  labelEn: string;
  labelAr: string;
  minAge?: ProductMinAge;
  maxAge?: ProductMaxAge;
};

const PRODUCT_OPTIONS: Partial<Record<AdditionalVaccineCategory, WizardProductOption[]>> = {
  rotavirus: [
    { value: 'rotarix', labelEn: 'Rotarix', labelAr: 'Rotarix' },
    { value: 'rotateq', labelEn: 'RotaTeq', labelAr: 'RotaTeq' },
    { value: 'dontKnow', labelEn: "Don't know", labelAr: 'لا أعرف' },
  ],
  pneumococcal: [
    {
      value: 'synflorix',
      labelEn: 'Synflorix',
      labelAr: 'Synflorix',
      maxAge: { maxYearsInclusive: 5 },
    },
    { value: 'prevenar13', labelEn: 'Prevenar 13', labelAr: 'Prevenar 13' },
    { value: 'vaxneuvance', labelEn: 'Vaxneuvance', labelAr: 'Vaxneuvance' },
    { value: 'prevenar20', labelEn: 'Prevenar 20', labelAr: 'Prevenar 20' },
    { value: 'dontKnow', labelEn: "Don't know", labelAr: 'لا أعرف' },
  ],
  meningococcalACWY: [
    {
      value: 'nimenrix',
      labelEn: 'Nimenrix',
      labelAr: 'Nimenrix',
      minAge: { minWeeks: 6 },
    },
    {
      value: 'menactra',
      labelEn: 'Menactra',
      labelAr: 'Menactra',
      minAge: { minMonths: 9 },
    },
    { value: 'other', labelEn: 'Other', labelAr: 'أخرى' },
    { value: 'dontKnow', labelEn: "Don't know", labelAr: 'لا أعرف' },
  ],
  varicella: [
    { value: 'barycela', labelEn: 'Barycela', labelAr: 'Barycela' },
    { value: 'varivax', labelEn: 'Varivax', labelAr: 'Varivax' },
    { value: 'other', labelEn: 'Other', labelAr: 'أخرى' },
    { value: 'dontKnow', labelEn: "Don't know", labelAr: 'لا أعرف' },
  ],
  hpv: [
    { value: 'gardasil4', labelEn: 'Gardasil 4', labelAr: 'Gardasil 4' },
    { value: 'gardasil9', labelEn: 'Gardasil 9', labelAr: 'Gardasil 9' },
    { value: 'cervarix', labelEn: 'Cervarix', labelAr: 'Cervarix' },
    { value: 'other', labelEn: 'Other', labelAr: 'أخرى' },
    { value: 'dontKnow', labelEn: "Don't know", labelAr: 'لا أعرف' },
  ],
};

function dateFromStored(value: DateOfBirth | null | undefined): Date | null {
  if (!value) {
    return null;
  }

  return parseDateParts(value);
}

export function isSynflorixEligibleForNewStart(dob: Date, asOfDate: Date): boolean {
  return !isAfter(asOfDate, addYears(dob, 5));
}

export function isOlderThanFiveYears(dob: Date, asOfDate: Date): boolean {
  return isAfter(asOfDate, addYears(dob, 5));
}

export function isProductEligibleAtAge(
  option: WizardProductOption,
  age: AgeAtDate,
  dob?: Date,
  referenceDate?: Date
): boolean {
  if (option.maxAge?.maxYearsInclusive !== undefined) {
    if (!dob || !referenceDate) {
      return false;
    }

    if (!isSynflorixEligibleForNewStart(dob, referenceDate)) {
      return false;
    }
  }

  if (!option.minAge) {
    return true;
  }

  const { minWeeks, minMonths, minYears } = option.minAge;

  if (minYears !== undefined && age.years < minYears) {
    return false;
  }

  if (minMonths !== undefined) {
    const totalMonths = age.years * 12 + age.months;
    if (totalMonths < minMonths) {
      return false;
    }
  }

  if (minWeeks !== undefined && age.totalWeeks < minWeeks) {
    return false;
  }

  return true;
}

export function getProductEligibilityReferenceDate(
  vaccine: Pick<AdditionalVaccineRecord, 'numberOfDoses' | 'firstDoseDate' | 'lastDoseDate' | 'doseDates'>,
  today: Date = getReferenceDate()
): Date {
  if (vaccine.numberOfDoses <= 0) {
    return today;
  }

  const knownDates = [
    dateFromStored(vaccine.firstDoseDate),
    dateFromStored(vaccine.lastDoseDate),
    ...vaccine.doseDates.map((value) => dateFromStored(value)),
  ].filter((value): value is Date => value !== null);

  if (knownDates.length === 0) {
    return today;
  }

  return knownDates.sort((left, right) => left.getTime() - right.getTime())[0];
}

export function getEligibleProductOptions(
  category: AdditionalVaccineCategory,
  dob: Date,
  vaccine: Pick<
    AdditionalVaccineRecord,
    'numberOfDoses' | 'firstDoseDate' | 'lastDoseDate' | 'doseDates'
  >,
  today: Date = getReferenceDate()
): WizardProductOption[] {
  const options = PRODUCT_OPTIONS[category] ?? [];
  const referenceDate = getProductEligibilityReferenceDate(vaccine, today);
  const age = ageAtDate(dob, referenceDate);

  return options.filter((option) => isProductEligibleAtAge(option, age, dob, referenceDate));
}

export function getAllProductOptions(
  category: AdditionalVaccineCategory
): WizardProductOption[] {
  return PRODUCT_OPTIONS[category] ?? [];
}
