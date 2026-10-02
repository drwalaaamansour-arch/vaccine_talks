import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';
import type { CalendarEventInput } from '@/lib/native/calendar-ics';

/**
 * Derives calendar rows from existing Checker output only (no schedule recalculation).
 */
export function calendarEventsFromRecommendations(
  items: VaccineRecommendation[],
  labelFor: (item: VaccineRecommendation) => string,
): CalendarEventInput[] {
  const seen = new Set<string>();
  const events: CalendarEventInput[] = [];

  for (const item of items) {
    const date = item.recommendedDate?.trim();
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    const key = `${item.id}-${date}-${item.doseLabelKey}`;
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({
      title: labelFor(item),
      date,
      description: 'Vaccine Talks — vaccine due date reminder (device-local).',
    });
  }

  return events.sort((a, b) => a.date.localeCompare(b.date));
}
