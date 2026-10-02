'use client';

import { useState } from 'react';
import type { CalendarEventInput } from '@/lib/native/calendar-ics';
import { addVaccineDueToCalendar } from '@/lib/native/calendar-native';

type ResultsCalendarActionsProps = {
  events: CalendarEventInput[];
  addLabel: string;
  addedLabel: string;
  language: 'en' | 'ar';
};

export function ResultsCalendarActions({
  events,
  addLabel,
  addedLabel,
  language,
}: ResultsCalendarActionsProps) {
  const [status, setStatus] = useState<string | null>(null);

  if (events.length === 0) return null;

  const handleAdd = async (event: CalendarEventInput) => {
    setStatus(null);
    const result = await addVaccineDueToCalendar(event);
    if (result === 'cancelled') return;
    if (result === 'failed') {
      setStatus(language === 'ar' ? 'تعذّر إضافة الحدث.' : 'Could not add event.');
      return;
    }
    setStatus(addedLabel);
  };

  return (
    <div className="vaccine-checker-results-actions vaccine-checker-no-print">
      <p className="vaccine-checker-results-copy" style={{ width: '100%', marginBottom: '0.35rem' }}>
        {language === 'ar'
          ? 'إضافة مواعيد الاستحقاق إلى تقويم هاتفك (على الجهاز فقط — لا يُرسل شيء إلى خوادم Vaccine Talks).'
          : 'Add due dates to your phone calendar (device-only — nothing is sent to Vaccine Talks servers).'}
      </p>
      {events.map((event) => (
        <button
          key={`${event.date}-${event.title}`}
          type="button"
          className="vaccine-checker-results-action"
          onClick={() => void handleAdd(event)}
        >
          <span>{addLabel}: {event.title} ({event.date})</span>
        </button>
      ))}
      {status && (
        <p className="vaccine-checker-share-feedback" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </div>
  );
}
