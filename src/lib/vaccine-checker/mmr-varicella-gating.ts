import { ageInWholeMonths } from '@/lib/vaccine-checker/date-utils';

/** MMR dose 1 date can affect varicella only while the child is still near the 12-month visit. */
export const MMR_DOSE1_DATE_COLLECTION_MAX_AGE_MONTHS = 24;

/** MMR dose 2 date can affect varicella only while the child is still near the 18-month visit. */
export const MMR_DOSE2_DATE_COLLECTION_MAX_AGE_MONTHS = 30;

export function couldMmrDose1DateAffectVaricella(dob: Date, today: Date): boolean {
  const ageMonths = ageInWholeMonths(dob, today);
  return ageMonths >= 12 && ageMonths < MMR_DOSE1_DATE_COLLECTION_MAX_AGE_MONTHS;
}

export function couldMmrDose2DateAffectVaricella(dob: Date, today: Date): boolean {
  const ageMonths = ageInWholeMonths(dob, today);
  return ageMonths >= 18 && ageMonths < MMR_DOSE2_DATE_COLLECTION_MAX_AGE_MONTHS;
}
