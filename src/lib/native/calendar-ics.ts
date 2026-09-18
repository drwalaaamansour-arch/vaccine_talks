/**
 * Device-local calendar helpers. No data is sent to Vaccine Talks servers.
 * ICS files are generated in memory and shared/opened on the user's phone.
 */

export type CalendarEventInput = {
  /** Vaccine / dose label from Checker output (no child name required). */
  title: string;
  /** ISO date YYYY-MM-DD — due date from existing Checker presentation. */
  date: string;
  /** Optional short note (non-PII). */
  description?: string;
};

function escapeIcsText(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

/** All-day event ICS (floating date — stays on device). */
export function buildVaccineDueIcs(event: CalendarEventInput): string {
  const compact = event.date.replace(/-/g, '');
  const uid = `vaccinetalks-${compact}-${Math.random().toString(36).slice(2, 10)}@vaccinetalks.com`;
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vaccine Talks//Vaccine Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART;VALUE=DATE:${compact}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
  ];
  if (event.description) {
    lines.push(`DESCRIPTION:${escapeIcsText(event.description)}`);
  }
  lines.push('END:VEVENT', 'END:VCALENDAR');
  return lines.join('\r\n');
}

export function downloadIcsInBrowser(ics: string, filename: string): void {
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
