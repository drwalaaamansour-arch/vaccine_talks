import { describe, expect, it } from 'vitest';
import { makeRecommendation } from '@/lib/vaccine-checker/types';
import { getReminderEligibility } from '@/lib/reminders/reminder-eligibility';

const ref = new Date(2026, 8, 19);

function rec(
  partial: Omit<Parameters<typeof makeRecommendation>[0], 'noteKeys'> & { noteKeys?: string[] }
) {
  return makeRecommendation({ noteKeys: [], ...partial });
}

describe('getReminderEligibility', () => {
  it('1. exact date → eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-09-30',
      timingKind: 'FIXED_DATE',
    });
    expect(getReminderEligibility(item, ref)).toEqual({
      eligible: true,
      recommendedDate: '2026-09-30',
      overdue: false,
    });
  });

  it('2. conditional → not eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose3',
      status: 'upcoming',
      conditionalNextDose: true,
    });
    expect(getReminderEligibility(item, ref)).toEqual({ eligible: false, reason: 'conditional' });
  });

  it('3. window only → not eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      windowStart: '2026-11-01',
      windowEnd: '2027-02-01',
      timingKind: 'RECOMMENDED_WINDOW',
    });
    expect(getReminderEligibility(item, ref)).toEqual({ eligible: false, reason: 'window' });
  });

  it('4. minimum-valid-date only → not eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      minimumValidDate: '2026-12-01',
      timingKind: 'MINIMUM_START_ONLY',
    });
    expect(getReminderEligibility(item, ref)).toEqual({ eligible: false, reason: 'minimum_start' });
  });

  it('5. missing date → not eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'rotavirus',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
    });
    expect(getReminderEligibility(item, ref)).toEqual({ eligible: false, reason: 'missing_date' });
  });

  it('6. invalid date → not eligible', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'rotavirus',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-02-30',
      timingKind: 'FIXED_DATE',
    });
    expect(getReminderEligibility(item, ref)).toEqual({ eligible: false, reason: 'invalid_date' });
  });

  it('7. overdue → eligible with overdue flag', () => {
    const item = rec({
      id: 'x',
      vaccineCategory: 'routine',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      recommendedDate: '2026-01-15',
      timingKind: 'FIXED_DATE',
    });
    const result = getReminderEligibility(item, ref);
    expect(result).toEqual({
      eligible: true,
      recommendedDate: '2026-01-15',
      overdue: true,
    });
  });
});
