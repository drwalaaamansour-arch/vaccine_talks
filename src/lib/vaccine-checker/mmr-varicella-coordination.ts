import {
  addDays,
  addMonths,
  daysBetween,
  isBefore,
  isOnOrAfter,
  isOnOrBefore,
  isSameDay,
  laterOf,
  earlierOf,
  startOfDay,
  toIsoDate,
} from '@/lib/vaccine-checker/date-utils';
import { type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

export const LIVE_VACCINE_GAP_DAYS = 28;

function recommendationDate(item: VaccineRecommendation): Date | null {
  if (!item.recommendedDate) {
    return null;
  }

  const [year, month, day] = item.recommendedDate.split('-').map(Number);
  return startOfDay(new Date(year, month - 1, day));
}

function isActiveScheduledItem(item: VaccineRecommendation): boolean {
  return item.status === 'due-now' || item.status === 'upcoming';
}

function isPlannedMmr(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'routine' &&
    Boolean(item.routineVaccineKey?.startsWith('mmrDose')) &&
    isActiveScheduledItem(item) &&
    Boolean(item.recommendedDate)
  );
}

function isPlannedVaricella(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'varicella' &&
    isActiveScheduledItem(item) &&
    Boolean(item.recommendedDate)
  );
}

function liveVaccineGapDays(dateA: Date, dateB: Date): number {
  if (isSameDay(dateA, dateB)) {
    return 0;
  }

  return Math.abs(daysBetween(dateA, dateB));
}

function satisfiesLiveVaccineInterval(candidate: Date, mmrDates: Date[]): boolean {
  for (const mmrDate of mmrDates) {
    const gap = liveVaccineGapDays(candidate, mmrDate);
    if (gap > 0 && gap < LIVE_VACCINE_GAP_DAYS) {
      return false;
    }
  }

  return true;
}

function canVaricellaBeScheduledOn(
  candidate: Date,
  dob: Date,
  mmrDates: Date[]
): boolean {
  if (isBefore(candidate, addMonths(dob, 12))) {
    return false;
  }

  return satisfiesLiveVaccineInterval(candidate, mmrDates);
}

function statusForDate(date: Date, today: Date): 'due-now' | 'upcoming' {
  return isOnOrBefore(date, today) ? 'due-now' : 'upcoming';
}

function withVaricellaCoordinationNotes(
  item: VaccineRecommendation,
  alignedSameDay: boolean
): string[] {
  const withoutInterval = item.noteKeys.filter((key) => key !== 'note_varicellaMmrInterval');

  if (alignedSameDay) {
    const noteKeys = withoutInterval.filter((key) => key !== 'note_varicellaMmrSameDay');
    if (!noteKeys.includes('note_varicellaMmrScheduling')) {
      noteKeys.push('note_varicellaMmrScheduling');
    }
    return noteKeys;
  }

  if (!withoutInterval.includes('note_varicellaMmrInterval')) {
    return [...withoutInterval, 'note_varicellaMmrInterval'];
  }

  return withoutInterval;
}

function updateVaricellaItem(
  item: VaccineRecommendation,
  newDate: Date,
  today: Date,
  alignedSameDay: boolean
): VaccineRecommendation {
  const status = statusForDate(newDate, today);

  return {
    ...item,
    status,
    recommendedDate: toIsoDate(newDate),
    noteKeys: withVaricellaCoordinationNotes(item, alignedSameDay),
    urgency: status === 'due-now' ? 80 : 40,
  };
}

function collectMmrDatesForValidation(
  input: CheckerInput,
  recommendations: VaccineRecommendation[]
): Date[] {
  const planned = recommendations
    .filter(isPlannedMmr)
    .map(recommendationDate)
    .filter((date): date is Date => date !== null);

  return [...input.mmrDates.map(startOfDay), ...planned];
}

export function coordinateMmrVaricellaPlannedDates(
  recommendations: VaccineRecommendation[],
  input: CheckerInput
): VaccineRecommendation[] {
  const today = startOfDay(input.referenceDate);
  const updated = [...recommendations];

  const mmrEntries = updated
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => isPlannedMmr(item));

  const varicellaEntries = updated
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => isPlannedVaricella(item));

  if (mmrEntries.length === 0 || varicellaEntries.length === 0) {
    return updated;
  }

  for (const { item: mmrItem } of mmrEntries) {
    const mmrDate = recommendationDate(mmrItem);
    if (!mmrDate) {
      continue;
    }

    for (const { item: varItem, index: varIndex } of varicellaEntries) {
      const varDate = recommendationDate(varItem);
      if (!varDate) {
        continue;
      }

      const gap = liveVaccineGapDays(mmrDate, varDate);
      if (gap === 0 || gap >= LIVE_VACCINE_GAP_DAYS) {
        continue;
      }

      const later = laterOf(mmrDate, varDate);
      const earlier = earlierOf(mmrDate, varDate);
      const allMmrDates = collectMmrDatesForValidation(input, updated);

      if (canVaricellaBeScheduledOn(later, input.dob, allMmrDates)) {
        updated[varIndex] = updateVaricellaItem(
          updated[varIndex],
          later,
          today,
          isSameDay(later, mmrDate)
        );
        continue;
      }

      const spacedDate = addDays(earlier, LIVE_VACCINE_GAP_DAYS);
      if (!canVaricellaBeScheduledOn(spacedDate, input.dob, allMmrDates)) {
        continue;
      }

      if (isOnOrAfter(varDate, mmrDate)) {
        updated[varIndex] = updateVaricellaItem(updated[varIndex], spacedDate, today, false);
      } else {
        updated[varIndex] = updateVaricellaItem(updated[varIndex], spacedDate, today, false);
      }
    }
  }

  return updated;
}
