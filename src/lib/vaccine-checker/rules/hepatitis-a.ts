import {
  addMonths,
  ageAtDate,
  isBefore,
  isOnOrAfter,
} from '@/lib/vaccine-checker/date-utils';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

export function calculateHepatitisA(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('hepatitisA');
  const doses = history?.doseDates ?? [];
  const reportedDoses = history?.numberOfDoses ?? doses.length;
  const { dob, today } = ctx;

  if (doses.length >= 2 || reportedDoses >= 2) {
    return [
      makeRecommendation({
        id: 'hepa-completed',
        vaccineCategory: 'hepatitisA',
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 6);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'hepa-dose2',
        vaccineCategory: 'hepatitisA',
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: ['note_hepaNoRestart'],
        urgency: status === 'due-now' ? 75 : 40,
      }),
    ];
  }

  const recommendedDose1 = addMonths(dob, 12);

  if (isBefore(today, recommendedDose1)) {
    return [
      makeRecommendation({
        id: 'hepa-not-yet-eligible',
        vaccineCategory: 'hepatitisA',
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(recommendedDose1),
        noteKeys: [],
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'hepa-dose1-due',
      vaccineCategory: 'hepatitisA',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
      urgency: 75,
    }),
  ];
}

export function calculateHepatitisACatchUp(ctx: RuleContext): VaccineRecommendation[] {
  if (ctx.getHistory('hepatitisA')) {
    return calculateHepatitisA(ctx);
  }

  const ageMonths = ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  if (ageMonths < 12) {
    return [];
  }

  return calculateHepatitisA(ctx);
}
