import { describe, expect, it } from 'vitest';
import { buildVaccineDueIcs } from '@/lib/native/calendar-ics';

describe('buildVaccineDueIcs', () => {
  it('builds an all-day ICS event without child PII', () => {
    const ics = buildVaccineDueIcs({
      title: 'PCV — Dose 2',
      date: '2026-10-15',
      description: 'Vaccine Talks reminder',
    });
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('DTSTART;VALUE=DATE:20261015');
    expect(ics).toContain('SUMMARY:PCV — Dose 2');
    expect(ics).not.toContain('child');
  });
});
