import {
  type AdditionalVaccineCategory,
  type AdditionalVaccineRecord,
  parseDateParts,
  type WizardState,
} from '@/types/wizard-types';
import { ageAtDate } from '@/lib/vaccine-checker/date-utils';
import { isOlderThanFiveYears } from '@/lib/vaccine-checker/product-options';
import { categoryNeedsProduct } from '@/lib/vaccine-checker/input-adapter';

export function ageYearsAt(dob: Date, today: Date): number {
  return ageAtDate(dob, today).years;
}

export function ageMonthsAt(dob: Date, today: Date): number {
  const age = ageAtDate(dob, today);
  return age.years * 12 + age.months;
}

/** Healthy MenACWY single-dose pathway (project rule for age ≥ 2 years). */
export function isHealthyMenAcwySingleDosePath(dob: Date, today: Date): boolean {
  return ageMonthsAt(dob, today) >= 24;
}

export function isHealthyPcvOlderThanFive(dob: Date, today: Date): boolean {
  return isOlderThanFiveYears(dob, today);
}

export function influenzaUsesCurrentSeasonQuestion(dob: Date, today: Date): boolean {
  return ageYearsAt(dob, today) >= 9;
}

export function wizardRequiresProductSelection(
  state: WizardState,
  category: AdditionalVaccineCategory,
  today: Date
): boolean {
  if (!categoryNeedsProduct(category) || !state.dateOfBirth) {
    return false;
  }

  const dob = parseDateParts(state.dateOfBirth);

  if (category === 'meningococcalACWY' && isHealthyMenAcwySingleDosePath(dob, today)) {
    return false;
  }

  if (category === 'pneumococcal' && isHealthyPcvOlderThanFive(dob, today)) {
    return false;
  }

  return true;
}

export function pcvTeenHistoryCompleteWithoutDetails(
  record: Pick<AdditionalVaccineRecord, 'category' | 'numberOfDoses'>,
  dob: Date,
  today: Date
): boolean {
  return (
    record.category === 'pneumococcal' &&
    isHealthyPcvOlderThanFive(dob, today) &&
    record.numberOfDoses >= 1
  );
}

export function menAcwyTeenHistoryCompleteWithoutDetails(
  record: Pick<AdditionalVaccineRecord, 'category' | 'numberOfDoses'>,
  dob: Date,
  today: Date
): boolean {
  return (
    record.category === 'meningococcalACWY' &&
    isHealthyMenAcwySingleDosePath(dob, today) &&
    record.numberOfDoses >= 1
  );
}

export function influenzaTeenSeasonAnswerComplete(
  record: Pick<AdditionalVaccineRecord, 'category' | 'influenzaCurrentSeasonReceived'>,
  dob: Date,
  today: Date
): boolean {
  return (
    record.category === 'influenza' &&
    influenzaUsesCurrentSeasonQuestion(dob, today) &&
    record.influenzaCurrentSeasonReceived !== undefined
  );
}

/** How many dose-date fields the wizard must collect (may be fewer than numberOfDoses). */
export function getWizardRequiredDoseDateCount(
  record: AdditionalVaccineRecord,
  dob: Date,
  today: Date
): number {
  if (record.firstDoseDateUnknown) {
    return 0;
  }

  if (record.category === 'hpv') {
    if (record.numberOfDoses <= 0) {
      return 0;
    }
    return 1;
  }

  return record.numberOfDoses;
}

export function teenHistoryRecordComplete(
  record: AdditionalVaccineRecord,
  dob: Date,
  today: Date,
  doseDatesCollected: number
): boolean {
  if (pcvTeenHistoryCompleteWithoutDetails(record, dob, today)) {
    return true;
  }

  if (menAcwyTeenHistoryCompleteWithoutDetails(record, dob, today)) {
    return true;
  }

  if (influenzaTeenSeasonAnswerComplete(record, dob, today)) {
    return true;
  }

  const requiredDates = getWizardRequiredDoseDateCount(record, dob, today);
  if (record.category === 'hpv' && record.firstDoseDateUnknown) {
    return record.numberOfDoses > 0;
  }

  return doseDatesCollected >= requiredDates;
}

export function shouldSkipHistoryDetailsAfterDoseCount(
  state: WizardState,
  record: AdditionalVaccineRecord,
  today: Date
): boolean {
  if (!state.dateOfBirth) {
    return false;
  }

  const dob = parseDateParts(state.dateOfBirth);

  if (record.category === 'pneumococcal' && isHealthyPcvOlderThanFive(dob, today)) {
    return true;
  }

  if (
    record.category === 'meningococcalACWY' &&
    isHealthyMenAcwySingleDosePath(dob, today) &&
    record.numberOfDoses >= 1
  ) {
    return true;
  }

  if (record.category === 'influenza' && influenzaUsesCurrentSeasonQuestion(dob, today)) {
    return record.influenzaCurrentSeasonReceived !== undefined;
  }

  return false;
}
