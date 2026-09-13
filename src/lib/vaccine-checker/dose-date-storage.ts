import { type AdditionalVaccineRecord, type DateOfBirth } from '@/types/wizard-types';

const DOSE_DATE_KEYS = ['dose1Date', 'dose2Date', 'dose3Date', 'dose4Date'] as const;

export function getDoseDateFromRecord(
  record: AdditionalVaccineRecord,
  doseNumber: number
): DateOfBirth | null {
  if (doseNumber < 1 || doseNumber > 4) {
    return null;
  }

  const fieldValue = record[DOSE_DATE_KEYS[doseNumber - 1]];
  if (fieldValue) {
    return fieldValue;
  }

  if (record.doseDates[doseNumber - 1]) {
    return record.doseDates[doseNumber - 1];
  }

  if (doseNumber === 1 && record.firstDoseDate) {
    return record.firstDoseDate;
  }

  if (
    record.category !== 'hpv' &&
    doseNumber === record.numberOfDoses &&
    record.lastDoseDate
  ) {
    return record.lastDoseDate;
  }

  return null;
}

/** HPV: only explicitly entered per-dose fields (never infer dose 2 from lastDoseDate). */
export function getHpvAdministeredDoseDates(record: AdditionalVaccineRecord): DateOfBirth[] {
  const dates: DateOfBirth[] = [];

  for (const key of DOSE_DATE_KEYS) {
    const value = record[key];
    if (!value) {
      break;
    }
    dates.push(value);
  }

  if (dates.length === 0 && record.firstDoseDate) {
    return [record.firstDoseDate];
  }

  return dates;
}

export function getAllDoseDatesFromRecord(record: AdditionalVaccineRecord): DateOfBirth[] {
  const dates: DateOfBirth[] = [];

  for (let doseNumber = 1; doseNumber <= record.numberOfDoses; doseNumber++) {
    const date = getDoseDateFromRecord(record, doseNumber);
    if (date) {
      dates.push(date);
    }
  }

  return dates;
}

export function hasAllRequiredDoseDates(record: AdditionalVaccineRecord): boolean {
  if (record.numberOfDoses <= 0) {
    return false;
  }

  return getAllDoseDatesFromRecord(record).length === record.numberOfDoses;
}

export function applyDoseDatesToRecord(
  record: AdditionalVaccineRecord,
  doseDates: DateOfBirth[]
): AdditionalVaccineRecord {
  const isHpv = record.category === 'hpv';
  const lastAdministered =
    doseDates.length >= 2
      ? doseDates[doseDates.length - 1]
      : isHpv
        ? null
        : doseDates[doseDates.length - 1] ?? null;

  const next: AdditionalVaccineRecord = {
    ...record,
    dose1Date: doseDates[0] ?? null,
    dose2Date: doseDates[1] ?? null,
    dose3Date: doseDates[2] ?? null,
    dose4Date: doseDates[3] ?? null,
    doseDates: isHpv ? doseDates : doseDates.slice(0, record.numberOfDoses),
    firstDoseDate: doseDates[0] ?? null,
    lastDoseDate: lastAdministered,
  };

  return next;
}
