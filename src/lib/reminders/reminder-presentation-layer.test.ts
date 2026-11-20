import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { enrichRecommendationsForPresentation } from '@/lib/vaccine-checker/result-presentation';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { makeRecommendation, type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { getReminderEligibility } from '@/lib/reminders/reminder-eligibility';
import { withReminderDatePreservedFromChecker } from '@/lib/reminders/reminder-source-date';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function synflorixOverdueInput(): CheckerInput {
  const birth = dob(2026, 1, 1);
  const referenceDate = dob(2026, 10, 2);
  const dose1 = dob(2026, 7, 30);
  return {
    dob: birth,
    referenceDate,
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: ['2months', '4months', '6months'],
    vaccineHistory: [
      {
        category: 'pneumococcal',
        product: 'synflorix',
        numberOfDoses: 1,
        firstDoseDate: dose1,
        lastDoseDate: dose1,
        doseDates: [dose1],
      },
    ],
  };
}

/** Mirrors RecommendationReminderActions show/hide (without native scheduling). */
function reminderUiMode(
  item: VaccineRecommendation,
  referenceDate: Date
): 'conditional_message' | 'set_reminder' | 'hidden' {
  if (item.conditionalNextDose) {
    return 'conditional_message';
  }
  if (!getReminderEligibility(item, referenceDate).eligible) {
    return 'hidden';
  }
  return 'set_reminder';
}

describe('reminderDate survives presentation enrichment (Phase 1B layering)', () => {
  const input = synflorixOverdueInput();

  it('1. raw exact date survives into reminderDate after presentation enrichment', () => {
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.product === 'synflorix' &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2).toBeDefined();
    expect(dose2!.recommendedDate).toBeUndefined();
    expect(dose2!.reminderDate).toBe('2026-09-30');
  });

  it('2. overdue exact-date recommendation remains reminder-eligible', () => {
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_dose2'
    )!;
    expect(getReminderEligibility(dose2, input.referenceDate)).toEqual({
      eligible: true,
      recommendedDate: '2026-09-30',
      overdue: true,
    });
  });

  it('3. conditional recommendation remains ineligible', () => {
    const conditional = makeRecommendation({
      id: 'pcv-d3-conditional',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose3',
      status: 'upcoming',
      conditionalNextDose: true,
      recommendedDate: '2027-01-01',
      noteKeys: [],
    });
    expect(getReminderEligibility(conditional, input.referenceDate)).toEqual({
      eligible: false,
      reason: 'conditional',
    });
  });

  it('4. window-only recommendation remains ineligible', () => {
    const windowOnly = makeRecommendation({
      id: 'pcv-booster',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      windowStart: '2027-01-01',
      windowEnd: '2027-04-01',
      timingKind: 'RECOMMENDED_WINDOW',
      noteKeys: [],
    });
    expect(getReminderEligibility(windowOnly, input.referenceDate)).toEqual({
      eligible: false,
      reason: 'window',
    });
  });

  it('5. missing source date remains ineligible', () => {
    const noDate = makeRecommendation({
      id: 'rotavirus-d1',
      vaccineCategory: 'rotavirus',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
    });
    expect(getReminderEligibility(noDate, input.referenceDate)).toEqual({
      eligible: false,
      reason: 'missing_date',
    });
  });

  it('6. reminder UI appears for overdue exact-date recommendation', () => {
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_dose2'
    )!;
    expect(reminderUiMode(dose2, input.referenceDate)).toBe('set_reminder');
  });

  it('7. reminder UI remains hidden for conditional recommendation', () => {
    const conditional = makeRecommendation({
      id: 'menb-booster-conditional',
      vaccineCategory: 'meningococcalB',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      conditionalNextDose: true,
      noteKeys: [],
    });
    expect(reminderUiMode(conditional, input.referenceDate)).toBe('conditional_message');
  });

  it('8. presentation hiding behavior for overdue unadministered dose is unchanged', () => {
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_dose2'
    )!;
    expect(dose2.recommendedDate).toBeUndefined();
    expect(dose2.recommendedDateLabelKey).toBeUndefined();
    const timingLines = getTimingDisplayLines(dose2, input.referenceDate);
    expect(timingLines.some((line) => line.key === 'resultRecommendedDate')).toBe(false);
    expect(timingLines.some((line) => line.key === 'resultOriginalRecommendedDate')).toBe(false);
  });

  it('9. Synflorix dose 2 engine date unchanged in reminderDate (medical display date still hidden)', () => {
    const raw: VaccineRecommendation = makeRecommendation({
      id: 'pcv-synflorix-dose2',
      vaccineCategory: 'pneumococcal',
      product: 'synflorix',
      doseLabelKey: 'doseLabel_dose2',
      status: 'due-now',
      recommendedDate: '2026-09-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    const [enriched] = enrichRecommendationsForPresentation(input, [raw]);
    expect(enriched.recommendedDate).toBeUndefined();
    expect(enriched.reminderDate).toBe('2026-09-30');
    expect(withReminderDatePreservedFromChecker(raw).reminderDate).toBe('2026-09-30');
  });
});
