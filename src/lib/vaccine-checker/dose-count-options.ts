import {
  type AdditionalVaccineCategory,
  type AdditionalVaccineRecord,
  parseDateParts,
  type WizardState,
} from '@/types/wizard-types';
import {
  addMonths,
  addWeeks,
  addYears,
  ageAtDate,
  isAfter,
  isBefore,
  laterOf,
} from '@/lib/vaccine-checker/date-utils';
import { getReferenceDate } from '@/lib/vaccine-checker/wizard-flow';
import {
  isHealthyMenAcwySingleDosePath,
  isHealthyPcvOlderThanFive,
} from '@/lib/vaccine-checker/teen-history-simplification';

type DoseSpacing = {
  minIntervalMonths?: number;
  minIntervalWeeks?: number;
};

function earliestNextDose(previousEarliest: Date, spacing: DoseSpacing): Date {
  if (spacing.minIntervalWeeks !== undefined) {
    return addWeeks(previousEarliest, spacing.minIntervalWeeks);
  }
  return addMonths(previousEarliest, spacing.minIntervalMonths ?? 2);
}

function maxPlausibleDosesBySpacing(
  today: Date,
  maxSeriesDoses: number,
  earliestFirstDose: Date,
  spacing: DoseSpacing,
  latestDoseDate?: Date
): number {
  if (isBefore(today, earliestFirstDose)) {
    return 0;
  }

  let count = 0;
  let lastEarliest = earliestFirstDose;

  for (let doseNumber = 1; doseNumber <= maxSeriesDoses; doseNumber++) {
    const earliestThisDose = doseNumber === 1 ? earliestFirstDose : earliestNextDose(lastEarliest, spacing);

    if (isAfter(earliestThisDose, today)) {
      break;
    }

    if (latestDoseDate && isAfter(earliestThisDose, latestDoseDate)) {
      break;
    }

    count = doseNumber;
    lastEarliest = earliestThisDose;
  }

  return count;
}

function maxPlausibleDosesBySchedule(
  today: Date,
  earliestDoseDates: Date[]
): number {
  let count = 0;

  for (const earliest of earliestDoseDates) {
    if (isAfter(earliest, today)) {
      break;
    }
    count += 1;
  }

  return count;
}

function rotavirusDoseCounts(
  dob: Date,
  today: Date,
  product: string | undefined
): number[] {
  const earliestFirstDose = addWeeks(dob, 6);
  const finalDoseLimit = addMonths(dob, 8);
  const spacing: DoseSpacing = { minIntervalMonths: 2 };

  if (product === 'rotarix') {
    const max = maxPlausibleDosesBySpacing(today, 2, earliestFirstDose, spacing, finalDoseLimit);
    return range(1, max);
  }

  if (product === 'rotateq') {
    const max = maxPlausibleDosesBySpacing(today, 3, earliestFirstDose, spacing, finalDoseLimit);
    return range(1, max);
  }

  const max = maxPlausibleDosesBySpacing(today, 3, earliestFirstDose, spacing, finalDoseLimit);
  return range(1, max);
}

function pcvInfantSeriesEarliestDates(dob: Date): Date[] {
  const dose1 = addWeeks(dob, 6);
  const dose2 = addMonths(dose1, 2);
  const dose3 = addMonths(dose2, 2);
  const booster = laterOf(addMonths(dob, 12), addMonths(dose3, 2));
  return [dose1, dose2, dose3, booster];
}

function pcvVaxneuvanceInfantEarliestDates(dob: Date): Date[] {
  const dose1 = addWeeks(dob, 6);
  const dose2 = addMonths(dose1, 2);
  const dose3 = addMonths(dose2, 2);
  const booster = laterOf(addMonths(dob, 11), addMonths(dose2, 2));
  return [dose1, dose2, dose3, booster];
}

function pneumococcalHistoricalSchedule(dob: Date, product: string | undefined): Date[] {
  if (product === 'vaxneuvance') {
    return pcvVaxneuvanceInfantEarliestDates(dob);
  }

  return pcvInfantSeriesEarliestDates(dob);
}

function pneumococcalDoseCounts(
  dob: Date,
  today: Date,
  product: string | undefined
): number[] {
  const earliestFirstDose = addWeeks(dob, 6);
  if (isBefore(today, earliestFirstDose)) {
    return [];
  }

  if (isHealthyPcvOlderThanFive(dob, today)) {
    return [0, 1];
  }

  const max = maxPlausibleDosesBySchedule(
    today,
    pneumococcalHistoricalSchedule(dob, product)
  );
  return [0, ...range(1, max)];
}

function nimenrixEarliestDates(dob: Date): Date[] {
  const dose1 = addWeeks(dob, 6);
  const dose2 = addMonths(dose1, 2);
  const booster = laterOf(addMonths(dob, 12), addMonths(dose2, 2));
  return [dose1, dose2, booster];
}

function menacwyDoseCounts(
  dob: Date,
  today: Date,
  product: string | undefined
): number[] {
  if (isHealthyMenAcwySingleDosePath(dob, today)) {
    const earliestFirstDose = addWeeks(dob, 6);
    if (isBefore(today, earliestFirstDose)) {
      return [];
    }
    return range(1, 3);
  }

  if (product === 'menactra') {
    const earliestFirstDose = addMonths(dob, 9);
    if (isBefore(today, earliestFirstDose)) {
      return [];
    }

    const max = maxPlausibleDosesBySchedule(today, [
      earliestFirstDose,
      addMonths(earliestFirstDose, 3),
    ]);
    return range(1, max);
  }

  const earliestFirstDose = addWeeks(dob, 6);
  if (isBefore(today, earliestFirstDose)) {
    return [];
  }

  const max = maxPlausibleDosesBySchedule(today, nimenrixEarliestDates(dob));
  return range(1, max);
}

function menbInfantEarliestDates(dob: Date): Date[] {
  const dose1 = addMonths(dob, 2);
  const dose2 = addMonths(dose1, 2);
  const booster = laterOf(addMonths(dob, 12), addMonths(dose2, 6));
  return [dose1, dose2, booster];
}

function meningococcalBDoseCounts(dob: Date, today: Date): number[] {
  const ageMonths = ageAtDate(dob, today).years * 12 + ageAtDate(dob, today).months;

  if (ageMonths < 2) {
    return [];
  }

  const max = maxPlausibleDosesBySchedule(today, menbInfantEarliestDates(dob));
  return range(1, max);
}

function varicellaDoseCounts(dob: Date, today: Date): number[] {
  const ageYears = ageAtDate(dob, today).years;
  const earliestFirstDose = addMonths(dob, 12);
  const spacing: DoseSpacing = { minIntervalMonths: ageYears >= 13 ? 1 : 3 };
  const max = maxPlausibleDosesBySpacing(today, 2, earliestFirstDose, spacing);
  return range(1, max);
}

function hepatitisADoseCounts(dob: Date, today: Date): number[] {
  const max = maxPlausibleDosesBySpacing(today, 2, addMonths(dob, 12), { minIntervalMonths: 6 });
  if (max < 1) {
    return [];
  }
  return range(0, max);
}

function influenzaDoseCounts(dob: Date, today: Date): number[] {
  const ageYears = ageAtDate(dob, today).years;
  const earliestFirstDose = addMonths(dob, 6);

  if (ageYears >= 9) {
    return isBefore(today, earliestFirstDose) ? [] : [1];
  }

  const max = maxPlausibleDosesBySpacing(today, 2, earliestFirstDose, { minIntervalWeeks: 4 });
  return range(1, max);
}

function hpvEarliestDates(dob: Date, twoDoseSeries: boolean, product: string | undefined): Date[] {
  const earliestFirstDose = addYears(dob, 9);

  if (twoDoseSeries) {
    return [earliestFirstDose, addMonths(earliestFirstDose, 6)];
  }

  if (product === 'cervarix') {
    return [earliestFirstDose, addMonths(earliestFirstDose, 1), addMonths(earliestFirstDose, 6)];
  }

  return [earliestFirstDose, addMonths(earliestFirstDose, 2), addMonths(earliestFirstDose, 6)];
}

function hpvDoseCounts(dob: Date, today: Date, product: string | undefined): number[] {
  const ageYears = ageAtDate(dob, today).years;
  if (ageYears < 9) {
    return [];
  }

  const twoDoseSeries =
    product === 'cervarix'
      ? ageYears >= 9 && ageYears <= 14
      : product === 'gardasil9'
        ? ageYears >= 9 && ageYears <= 14
        : product === 'gardasil4'
          ? ageYears >= 9 && ageYears <= 13
          : ageYears >= 9 && ageYears <= 13;

  const maxSeriesDoses = twoDoseSeries ? 2 : 3;
  const schedule = hpvEarliestDates(dob, twoDoseSeries, product).slice(0, maxSeriesDoses);
  const max = maxPlausibleDosesBySchedule(today, schedule);
  return range(1, max);
}

function range(min: number, max: number): number[] {
  if (max < min) {
    return [];
  }

  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

export function filterDoseCountsForPreviouslyReceived(counts: number[]): number[] {
  return counts.filter((count) => count >= 1);
}

export function getAvailableDoseCountsForVaccine(
  dob: Date,
  today: Date,
  vaccine: Pick<AdditionalVaccineRecord, 'category' | 'product'>,
  options?: { previouslyReceived?: boolean }
): number[] {
  const counts = getPossiblePreviousDoseCounts(dob, today, vaccine);
  if (options?.previouslyReceived) {
    return filterDoseCountsForPreviouslyReceived(counts);
  }
  return counts;
}

/** Doses the child could already have received historically by the current age. */
export function getPossiblePreviousDoseCounts(
  dob: Date,
  today: Date,
  vaccine: Pick<AdditionalVaccineRecord, 'category' | 'product'>
): number[] {
  switch (vaccine.category) {
    case 'rotavirus':
      return rotavirusDoseCounts(dob, today, vaccine.product);
    case 'pneumococcal':
      return pneumococcalDoseCounts(dob, today, vaccine.product);
    case 'meningococcalACWY':
      return menacwyDoseCounts(dob, today, vaccine.product);
    case 'meningococcalB':
      return meningococcalBDoseCounts(dob, today);
    case 'varicella':
      return varicellaDoseCounts(dob, today);
    case 'hepatitisA':
      return hepatitisADoseCounts(dob, today);
    case 'influenza':
      return influenzaDoseCounts(dob, today);
    case 'hpv':
      return hpvDoseCounts(dob, today, vaccine.product);
    default:
      return [];
  }
}

export function getAvailableDoseCounts(
  state: WizardState,
  vaccine: Pick<AdditionalVaccineRecord, 'category' | 'product'>,
  today: Date = getReferenceDate()
): number[] {
  if (!state.dateOfBirth) {
    return [];
  }

  const dob = parseDateParts(state.dateOfBirth);
  return getAvailableDoseCountsForVaccine(dob, today, vaccine, {
    previouslyReceived: true,
  });
}
