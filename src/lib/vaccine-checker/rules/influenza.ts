import {
  addDays,
  addMonths,
  addWeeks,
  ageAtDate,
  isAfter,
  isBefore,
  isOnOrAfter,
} from '@/lib/vaccine-checker/date-utils';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

function getCurrentSeasonStart(referenceDate: Date): Date {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();
  const seasonYear = month >= 9 ? year : year - 1;
  return new Date(seasonYear, 9, 1);
}

function hasDoseInCurrentSeason(doses: Date[], referenceDate: Date): boolean {
  const seasonStart = getCurrentSeasonStart(referenceDate);
  return doses.some((dose) => dose >= seasonStart && dose <= referenceDate);
}

export function calculateInfluenza(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('influenza');
  const doses = history?.doseDates ?? [];
  const { dob, today } = ctx;
  const age = ageAtDate(dob, today);
  const ageMonths = age.years * 12 + age.months;
  const ageYears = age.years;

  if (ageMonths < 6) {
    return [
      makeRecommendation({
        id: 'influenza-not-yet-eligible',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(addMonths(dob, 6)),
        noteKeys: [],
      }),
    ];
  }

  if (history?.influenzaCurrentSeasonReceived === true || hasDoseInCurrentSeason(doses, today)) {
    return [
      makeRecommendation({
        id: 'influenza-season-complete',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_seasonComplete',
        status: 'completed',
        noteKeys: ['note_influenzaSeasonComplete'],
      }),
    ];
  }

  if (ageYears >= 9) {
    return [
      makeRecommendation({
        id: 'influenza-season-dose',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_seasonDose',
        status: 'due-now',
        noteKeys: ['note_influenzaOneDosePerSeason'],
      }),
    ];
  }

  const primingComplete =
    history?.influenzaPrimingComplete === true ||
    doses.length >= 2 ||
    (history?.numberOfDoses ?? 0) >= 2;

  if (primingComplete) {
    return [
      makeRecommendation({
        id: 'influenza-season-dose',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_seasonDose',
        status: 'due-now',
        noteKeys: ['note_influenzaOneDosePerSeason'],
      }),
    ];
  }

  const recentDoses = doses.filter((dose) => isAfter(dose, addMonths(today, -12)));
  if (recentDoses.length === 1) {
    const dose2Recommended = addWeeks(recentDoses[0], 4);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'influenza-dose2-priming',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: ['note_influenzaSecondDoseInterval'],
        urgency: status === 'due-now' ? 80 : 40,
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'influenza-dose1-priming',
      vaccineCategory: 'influenza',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
    }),
  ];
}

export function calculateInfluenzaCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  const ageMonths =
    ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  if (ageMonths < 6) {
    return [];
  }

  return calculateInfluenza(ctx);
}
