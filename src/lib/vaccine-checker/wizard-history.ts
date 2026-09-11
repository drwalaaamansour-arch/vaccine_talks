import { buildDateParts, type AdditionalVaccineCategory, type AdditionalVaccineRecord } from '@/types/wizard-types';

export function buildEmptyAdditionalVaccineRecord(
  category: AdditionalVaccineCategory
): AdditionalVaccineRecord {
  return {
    category,
    product: category === 'meningococcalB' ? 'bexsero' : undefined,
    numberOfDoses: 0,
    lastDoseDate: null,
    firstDoseDate: null,
    doseDates: [],
  };
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

export function buildDate(day: number, month: number, year: number) {
  return buildDateParts({ day, month, year });
}
