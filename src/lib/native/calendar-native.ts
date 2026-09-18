'use client';

import { buildVaccineDueIcs, downloadIcsInBrowser, type CalendarEventInput } from '@/lib/native/calendar-ics';
import { isNativeApp } from '@/lib/native/platform';

export type AddToCalendarResult = 'shared' | 'saved' | 'cancelled' | 'failed';

/**
 * User-initiated only. Writes nothing silently.
 * Primary path: share an .ics file (no calendar permission on most devices).
 * Optional path: native calendar API when user confirms and plugin is available.
 */
export async function addVaccineDueToCalendar(
  event: CalendarEventInput,
  options?: { preferNativeCalendar?: boolean },
): Promise<AddToCalendarResult> {
  const ics = buildVaccineDueIcs(event);
  const filename = 'vaccine-talks-reminder.ics';

  if (!(await isNativeApp())) {
    downloadIcsInBrowser(ics, filename);
    return 'saved';
  }

  if (options?.preferNativeCalendar) {
    try {
      const { CapacitorCalendar } = await import('@ebarooni/capacitor-calendar');
      const [y, m, d] = event.date.split('-').map(Number);
      const start = new Date(y, m - 1, d).getTime();
      await CapacitorCalendar.createEventWithPrompt({
        title: event.title,
        description: event.description,
        startDate: start,
        endDate: start,
        isAllDay: true,
      });
      return 'saved';
    } catch {
      /* fall through to ICS share */
    }
  }

  try {
    const { Filesystem, Directory, Encoding } = await import('@capacitor/filesystem');
    const { Share } = await import('@capacitor/share');
    const path = `vaccine-talks/${Date.now()}-${filename}`;
    await Filesystem.writeFile({
      path,
      data: ics,
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
    });
    const { uri } = await Filesystem.getUri({
      path,
      directory: Directory.Cache,
    });
    await Share.share({
      title: event.title,
      text: event.description ?? event.title,
      url: uri,
      dialogTitle: 'Add to calendar',
    });
    return 'shared';
  } catch (error) {
    if (error instanceof Error && /cancel/i.test(error.message)) {
      return 'cancelled';
    }
    downloadIcsInBrowser(ics, filename);
    return 'saved';
  }
}
