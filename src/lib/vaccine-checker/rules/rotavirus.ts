import {
  addMonths,
  addWeeks,
  daysBetween,
  isAfter,
  isBefore,
  isOnOrAfter,
  weeksAndDaysFromDob,
} from '@/lib/vaccine-checker/date-utils';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

function rotarixRules(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const product = 'rotarix';
  const results: VaccineRecommendation[] = [];

  const earliestStart = addWeeks(dob, 6);
  const recommendedStart = addMonths(dob, 2);
  const latestStart = addWeeks(dob, 20);
  const finalDoseLimit = addMonths(dob, 8);

  if (doses.length >= 2) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-completed',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      })
    );
    return results;
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 2);
    if (isAfter(today, finalDoseLimit)) {
      return results;
    }
    if (isOnOrAfter(today, dose2Recommended)) {
      results.push(
        makeRecommendation({
          id: 'rotavirus-dose2-due',
          vaccineCategory: 'rotavirus',
          product,
          doseLabelKey: 'doseLabel_dose2',
          status: 'due-now',
          recommendedDate: iso(dose2Recommended),
          latestDate: iso(finalDoseLimit),
          noteKeys: ['note_rotavirusFinalDoseLimit'],
          urgency: 95,
        })
      );
    } else {
      results.push(
        makeRecommendation({
          id: 'rotavirus-dose2-upcoming',
          vaccineCategory: 'rotavirus',
          product,
          doseLabelKey: 'doseLabel_dose2',
          status: 'upcoming',
          recommendedDate: iso(dose2Recommended),
          latestDate: iso(finalDoseLimit),
          noteKeys: [],
        })
      );
    }
    return results;
  }

  if (isBefore(today, earliestStart)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-not-yet-eligible',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        earliestDate: iso(earliestStart),
        recommendedDate: iso(recommendedStart),
        latestDate: iso(latestStart),
        noteKeys: [],
      })
    );
    return results;
  }

  if (isAfter(today, latestStart)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-age-limit-passed',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'age-limit-passed',
        latestDate: iso(latestStart),
        noteKeys: ['note_rotavirusStartLimitPassed'],
        reasonKey: 'reason_rotavirusStartLimitPassed',
        urgency: 100,
      })
    );
    return results;
  }

  if (isOnOrAfter(today, recommendedStart)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-dose1-due',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        recommendedDate: iso(recommendedStart),
        latestDate: iso(latestStart),
        noteKeys: [],
        urgency: 95,
      })
    );
    return results;
  }

  results.push(
    makeRecommendation({
      id: 'rotavirus-dose1-eligible',
      vaccineCategory: 'rotavirus',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'eligible-now',
      earliestDate: iso(earliestStart),
      recommendedDate: iso(recommendedStart),
      latestDate: iso(latestStart),
      noteKeys: ['note_rotavirusEligibleOrWait'],
    })
  );

  return results;
}

function rotateqRules(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const product = 'rotateq';
  const results: VaccineRecommendation[] = [];

  const earliestStart = addWeeks(dob, 6);
  const latestStart = weeksAndDaysFromDob(dob, 14, 6);
  const cannotStartAfter = addWeeks(dob, 15);
  const finalDoseLimit = addMonths(dob, 8);
  const recommendedStart = addMonths(dob, 2);

  if (doses.length >= 3) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-completed',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      })
    );
    return results;
  }

  if (doses.length > 0) {
    const nextDoseNumber = doses.length + 1;
    const nextRecommended = addMonths(doses[doses.length - 1], 2);

    if (isAfter(today, finalDoseLimit)) {
      return results;
    }

    const status = isOnOrAfter(today, nextRecommended) ? 'due-now' : 'upcoming';
    results.push(
      makeRecommendation({
        id: `rotavirus-dose${nextDoseNumber}`,
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: `doseLabel_dose${nextDoseNumber}`,
        status,
        recommendedDate: iso(nextRecommended),
        latestDate: iso(finalDoseLimit),
        noteKeys: status === 'due-now' ? ['note_rotavirusFinalDoseLimit'] : [],
        urgency: status === 'due-now' ? 95 : 40,
      })
    );
    return results;
  }

  if (isBefore(today, earliestStart)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-not-yet-eligible',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        earliestDate: iso(earliestStart),
        recommendedDate: iso(recommendedStart),
        latestDate: iso(latestStart),
        noteKeys: [],
      })
    );
    return results;
  }

  if (isOnOrAfter(today, cannotStartAfter)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-age-limit-passed',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'age-limit-passed',
        latestDate: iso(latestStart),
        noteKeys: ['note_rotavirusRotateqStartLimitPassed'],
        reasonKey: 'reason_rotavirusRotateqStartLimitPassed',
        urgency: 100,
      })
    );
    return results;
  }

  if (isOnOrAfter(today, recommendedStart)) {
    results.push(
      makeRecommendation({
        id: 'rotavirus-dose1-due',
        vaccineCategory: 'rotavirus',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        recommendedDate: iso(recommendedStart),
        latestDate: iso(latestStart),
        noteKeys: [],
        urgency: 95,
      })
    );
    return results;
  }

  results.push(
    makeRecommendation({
      id: 'rotavirus-dose1-eligible',
      vaccineCategory: 'rotavirus',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'eligible-now',
      earliestDate: iso(earliestStart),
      recommendedDate: iso(recommendedStart),
      latestDate: iso(latestStart),
      noteKeys: ['note_rotavirusEligibleOrWait'],
    })
  );

  return results;
}

export function calculateRotavirus(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('rotavirus');
  const doses = history?.doseDates ?? [];
  const product = history?.product;

  if (product === 'dontKnow') {
    return [
      makeRecommendation({
        id: 'rotavirus-needs-review',
        vaccineCategory: 'rotavirus',
        doseLabelKey: 'doseLabel_reviewNeeded',
        status: 'needs-review',
        noteKeys: ['note_rotavirusProductUnknown'],
        reasonKey: 'reason_rotavirusProductUnknown',
      }),
    ];
  }

  if (product === 'rotateq') {
    return rotateqRules(ctx, doses);
  }

  if (product === 'rotarix') {
    return rotarixRules(ctx, doses);
  }

  return rotavirusCatchUp(ctx, doses);
}

function isRotateqStartLimitPassed(dob: Date, today: Date): boolean {
  return isOnOrAfter(today, addWeeks(dob, 15));
}

function isRotarixStartStillAllowed(dob: Date, today: Date): boolean {
  return !isAfter(today, addWeeks(dob, 20));
}

function rotavirusCatchUpDose1NoteKeys(
  ctx: RuleContext,
  item: VaccineRecommendation
): string[] {
  if (item.doseLabelKey !== 'doseLabel_dose1') {
    return item.noteKeys.filter((key) => key !== 'note_rotavirusFinalDoseLimit');
  }

  if (item.status !== 'due-now' && item.status !== 'eligible-now') {
    return item.noteKeys.filter((key) => key !== 'note_rotavirusFinalDoseLimit');
  }

  const { dob, today } = ctx;
  const rotateqPassed = isRotateqStartLimitPassed(dob, today);
  const rotarixAvailable = isRotarixStartStillAllowed(dob, today);

  if (rotateqPassed && rotarixAvailable) {
    return ['note_rotavirusRotarixOnlyCatchUp'];
  }

  if (item.status === 'due-now') {
    return ['note_rotavirusProductDependsOnChoice'];
  }

  return item.noteKeys.filter((key) => key !== 'note_rotavirusFinalDoseLimit');
}

function rotavirusCatchUpProduct(
  ctx: RuleContext,
  item: VaccineRecommendation
): string | undefined {
  if (item.doseLabelKey !== 'doseLabel_dose1') {
    return undefined;
  }

  if (item.status !== 'due-now' && item.status !== 'eligible-now') {
    return undefined;
  }

  const { dob, today } = ctx;

  if (isRotateqStartLimitPassed(dob, today) && isRotarixStartStillAllowed(dob, today)) {
    return 'rotarix';
  }

  return undefined;
}

function rotavirusCatchUp(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  if (doses.length > 0) {
    return [
      makeRecommendation({
        id: 'rotavirus-needs-review',
        vaccineCategory: 'rotavirus',
        doseLabelKey: 'doseLabel_reviewNeeded',
        status: 'needs-review',
        noteKeys: ['note_rotavirusProductUnknown'],
        reasonKey: 'reason_rotavirusProductUnknown',
      }),
    ];
  }

  const { dob, today } = ctx;

  if (isRotateqStartLimitPassed(dob, today) && !isRotarixStartStillAllowed(dob, today)) {
    return [
      makeRecommendation({
        id: 'rotavirus-catchup-age-limit-passed',
        vaccineCategory: 'rotavirus',
        doseLabelKey: 'doseLabel_dose1',
        status: 'age-limit-passed',
        noteKeys: [],
        reasonKey: 'reason_rotavirusCatchUpStartLimitPassed',
      }),
    ];
  }

  return rotarixRules(ctx, doses).map((item) => ({
    ...item,
    id: `rotavirus-catchup-${item.id}`,
    product: rotavirusCatchUpProduct(ctx, item),
    noteKeys: rotavirusCatchUpDose1NoteKeys(ctx, item),
  }));
}

export function getRotavirusAgeLimitUrgency(dob: Date, today: Date): number {
  const latestStartRotarix = addWeeks(dob, 20);
  const latestStartRotateq = weeksAndDaysFromDob(dob, 14, 6);
  const daysToRotarix = daysBetween(today, latestStartRotarix);
  const daysToRotateq = daysBetween(today, latestStartRotateq);
  const nearest = Math.min(daysToRotarix, daysToRotateq);
  if (nearest <= 14) return 98;
  return 0;
}
