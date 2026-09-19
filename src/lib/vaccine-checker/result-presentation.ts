import { addDays, isBefore, isOnOrAfter, isSameDay, startOfDay } from '@/lib/vaccine-checker/date-utils';
import { getHistoryForCategory } from '@/lib/vaccine-checker/input-adapter';
import {
  getRecentMmrCausingVaricellaDelay,
  getVaricellaSpacingMmrDatesFromInput,
} from '@/lib/vaccine-checker/rules/varicella';
import { type AdditionalVaccineCategory } from '@/types/wizard-types';
import { getVaccineCategoryLabel } from '@/translations/vaccine-category-labels';
import { iso, type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { expandEquivalentNoteKeys, getCardNoteKeys } from '@/lib/vaccine-checker/result-notes';
import { getTimingDisplayLines, type TimingDisplayLine } from '@/lib/vaccine-checker/recommendation-timing';
import { influenzaUsesCurrentSeasonQuestion } from '@/lib/vaccine-checker/teen-history-simplification';
import {
  isPcvInfantRemainingBoosterConditionalItem,
  isPcvInfantRemainingPrimaryConditionalItem,
} from '@/lib/vaccine-checker/pcv-infant-remaining-schedule';

function getMmrDatesFromInput(input: CheckerInput): Date[] {
  return getVaricellaSpacingMmrDatesFromInput(input);
}

const GENERIC_VARICELLA_MMR_NOTE_KEYS = new Set([
  'note_varicellaMmrScheduling',
  'note_varicellaMmrSameDay',
  'note_varicellaMmrInterval',
]);

export function shouldSuppressGenericVaricellaMmrNotes(
  item: VaccineRecommendation,
  input: CheckerInput
): boolean {
  if (item.vaccineCategory !== 'varicella' || item.doseLabelKey !== 'doseLabel_dose1') {
    return false;
  }

  if (item.status !== 'due-now') {
    return false;
  }

  const mmrDates = getMmrDatesFromInput(input);
  if (mmrDates.length === 0) {
    return false;
  }

  const today = startOfDay(input.referenceDate);
  if (mmrDates.some((mmrDate) => isSameDay(mmrDate, today))) {
    return false;
  }

  return mmrDates.some((mmrDate) =>
    isOnOrAfter(today, addDays(mmrDate, 28))
  );
}

export function shouldShowVaricellaDelayedAfterRecentMmrNote(
  item: VaccineRecommendation,
  input: CheckerInput
): boolean {
  if (item.vaccineCategory !== 'varicella' || item.doseLabelKey !== 'doseLabel_dose1') {
    return false;
  }

  if (item.status !== 'upcoming') {
    return false;
  }

  return getRecentMmrCausingVaricellaDelay(input.referenceDate, getMmrDatesFromInput(input)) !== null;
}

export function isInfluenzaTeenSeasonDueNowCard(
  item: VaccineRecommendation,
  input: CheckerInput
): boolean {
  if (item.vaccineCategory !== 'influenza' || item.conditionalNextDose) {
    return false;
  }

  if (item.doseLabelKey !== 'doseLabel_seasonDose' || item.status !== 'due-now') {
    return false;
  }

  return influenzaUsesCurrentSeasonQuestion(input.dob, input.referenceDate);
}

export function getResultsCardTimingLines(
  item: VaccineRecommendation,
  referenceDate: Date,
  input?: CheckerInput | null
): TimingDisplayLine[] {
  if (input && isInfluenzaTeenSeasonDueNowCard(item, input)) {
    return [{ key: 'resultInfluenzaSeasonDueNow', params: {} }];
  }

  return getTimingDisplayLines(item, referenceDate);
}

export function shouldHideDoseLabelForInfluenzaTeenSeasonDueNow(
  item: VaccineRecommendation,
  input?: CheckerInput | null
): boolean {
  return Boolean(input && isInfluenzaTeenSeasonDueNowCard(item, input));
}

export function getDisplayCardNoteKeys(
  item: VaccineRecommendation,
  input?: CheckerInput | null
): string[] {
  let base = getCardNoteKeys(item.noteKeys);

  if (input && isInfluenzaTeenSeasonDueNowCard(item, input)) {
    base = base.filter((key) => key !== 'note_influenzaOneDosePerSeason');
  }

  if (!input || item.vaccineCategory !== 'varicella') {
    return base;
  }

  if (shouldShowVaricellaDelayedAfterRecentMmrNote(item, input)) {
    return ['note_varicellaDelayedAfterRecentMmr'];
  }

  if (item.doseLabelKey === 'doseLabel_dose1' && item.status === 'due-now') {
    if (shouldSuppressGenericVaricellaMmrNotes(item, input)) {
      return base.filter(
        (key) =>
          key !== 'note_varicellaDelayedAfterRecentMmr' &&
          !GENERIC_VARICELLA_MMR_NOTE_KEYS.has(key)
      );
    }

    return base.filter(
      (key) =>
        key !== 'note_varicellaDelayedAfterRecentMmr' &&
        key !== 'note_varicellaMmrInterval'
    );
  }

  return base;
}

export function getDisplayCardNoteParams(
  noteKey: string,
  item: VaccineRecommendation,
  input: CheckerInput,
  formatDateValue: (isoDate: string | undefined) => string
): Record<string, string> | undefined {
  if (noteKey !== 'note_varicellaDelayedAfterRecentMmr') {
    return undefined;
  }

  const delay = getRecentMmrCausingVaricellaDelay(input.referenceDate, getMmrDatesFromInput(input));
  if (!delay) {
    return undefined;
  }

  return {
    mmrDate: formatDateValue(iso(delay.mmrDate)),
    earliestVaricellaDate: formatDateValue(item.recommendedDate),
  };
}

export type ResultsSectionKind =
  | 'dueNow'
  | 'eligibleNow'
  | 'upcoming'
  | 'ageLimitPassed'
  | 'completed'
  | 'needsReview';

const MISSING_INFO_REASON_KEYS = new Set([
  'reason_rotavirusProductUnknown',
  'reason_pcvProductUnknown',
  'reason_menacwyProductUnknown',
  'reason_varicellaProductUnknown',
  'reason_varicellaMmrDateNeeded',
  'reason_hpvProductUnknown',
]);

const VACCINE_SPECIFIC_REVIEW_REASON_KEYS = new Set([
  ...MISSING_INFO_REASON_KEYS,
  'reason_bcgTuberculinRequired',
]);

export const PRODUCT_EN_LABELS: Record<string, string> = {
  rotarix: 'Rotarix',
  rotateq: 'RotaTeq',
  synflorix: 'Synflorix',
  prevenar13: 'Prevenar 13',
  vaxneuvance: 'Vaxneuvance',
  prevenar20: 'Prevenar 20',
  nimenrix: 'Nimenrix',
  menactra: 'Menactra',
  barycela: 'Barycela',
  varivax: 'Varivax',
  gardasil4: 'Gardasil 4',
  gardasil9: 'Gardasil 9',
  cervarix: 'Cervarix',
  bexsero: 'Bexsero',
  pcv: 'PCV',
};

export function parseRecommendedIsoDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split('-').map(Number);
  return startOfDay(new Date(year, month - 1, day));
}

export function isOverdueRecommendedDate(
  item: VaccineRecommendation,
  referenceDate: Date
): boolean {
  if (!item.recommendedDate || item.conditionalNextDose) {
    return false;
  }

  if (item.status !== 'due-now' && item.status !== 'upcoming') {
    return false;
  }

  return isBefore(parseRecommendedIsoDate(item.recommendedDate), startOfDay(referenceDate));
}

/** Parent-facing: do not show a projected interval date in the past for doses not yet given. */
export function shouldHideOverdueUnadministeredRecommendedDate(
  item: VaccineRecommendation,
  referenceDate: Date
): boolean {
  return isOverdueRecommendedDate(item, referenceDate);
}

export function getRecommendedDateLabelKey(
  item: VaccineRecommendation,
  referenceDate: Date
): 'resultRecommendedDate' | 'resultOriginalRecommendedDate' {
  if (item.recommendedDateLabelKey) {
    return item.recommendedDateLabelKey;
  }

  return isOverdueRecommendedDate(item, referenceDate)
    ? 'resultOriginalRecommendedDate'
    : 'resultRecommendedDate';
}

function isCatchUpFirstDoseLabel(doseLabelKey: string): boolean {
  return doseLabelKey === 'doseLabel_dose1' || doseLabelKey === 'doseLabel_singleDose';
}

function hasZeroPreviousDoses(input: CheckerInput, category: string): boolean {
  const history = getHistoryForCategory(
    input.vaccineHistory,
    category as AdditionalVaccineCategory
  );

  if (!history) {
    return true;
  }

  return history.numberOfDoses === 0 && history.doseDates.length === 0;
}

export function shouldHideCatchUpStartRecommendedDate(
  item: VaccineRecommendation,
  referenceDate: Date,
  _dob: Date,
  hasZeroPreviousDosesForCategory: boolean
): boolean {
  if (!hasZeroPreviousDosesForCategory) {
    return false;
  }

  if (!isCatchUpFirstDoseLabel(item.doseLabelKey)) {
    return false;
  }

  if (item.status !== 'due-now' && item.status !== 'eligible-now') {
    return false;
  }

  if (!item.recommendedDate) {
    return false;
  }

  return isBefore(parseRecommendedIsoDate(item.recommendedDate), startOfDay(referenceDate));
}

export function enrichRecommendationsForPresentation(
  input: CheckerInput,
  recommendations: VaccineRecommendation[]
): VaccineRecommendation[] {
  const referenceDate = startOfDay(input.referenceDate);

  return recommendations.map((item) => {
    if (item.conditionalNextDose) {
      return item;
    }

    if (
      shouldHideCatchUpStartRecommendedDate(
        item,
        referenceDate,
        input.dob,
        hasZeroPreviousDoses(input, item.vaccineCategory)
      )
    ) {
      return {
        ...item,
        recommendedDate: undefined,
        recommendedDateLabelKey: undefined,
      };
    }

    if (!shouldHideOverdueUnadministeredRecommendedDate(item, referenceDate)) {
      return item;
    }

    return {
      ...item,
      status: 'due-now',
      recommendedDate: undefined,
      recommendedDateLabelKey: undefined,
      urgency: Math.max(item.urgency, 80),
    };
  });
}

export function shouldUseRotarixConditionalNote(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'rotavirus' &&
    item.product === 'rotarix' &&
    item.conditionalNextDose === true
  );
}

export function shouldUseInfluenzaConditionalNote(item: VaccineRecommendation): boolean {
  return item.vaccineCategory === 'influenza' && item.conditionalNextDose === true;
}

export function shouldUseNimenrixInfantBoosterConditionalNote(
  item: VaccineRecommendation
): boolean {
  return (
    item.vaccineCategory === 'meningococcalACWY' &&
    item.product === 'nimenrix' &&
    item.conditionalNextDose === true &&
    item.doseLabelKey === 'doseLabel_booster' &&
    item.id.endsWith('-conditional-infant-booster')
  );
}

export function shouldUseMenacwyBoosterConditionalNote(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'meningococcalACWY' &&
    item.conditionalNextDose === true &&
    item.doseLabelKey === 'doseLabel_booster' &&
    !shouldUseNimenrixInfantBoosterConditionalNote(item)
  );
}

export function shouldUseMenactraConditionalNote(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'meningococcalACWY' &&
    item.product === 'menactra' &&
    item.conditionalNextDose === true &&
    item.doseLabelKey === 'doseLabel_dose2'
  );
}

export function shouldUseMenbBoosterConditionalNote(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'meningococcalB' &&
    item.conditionalNextDose === true &&
    item.doseLabelKey === 'doseLabel_booster'
  );
}

export function shouldUsePcvSevenToElevenBoosterConditionalNote(
  item: VaccineRecommendation
): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.conditionalNextDose === true &&
    item.doseLabelKey === 'doseLabel_booster' &&
    item.id.endsWith('-conditional-seven-to-eleven-booster')
  );
}

export function isConditionalWindowRecommendation(item: VaccineRecommendation): boolean {
  return Boolean(
    item.conditionalNextDose && item.windowStart && item.windowEnd
  );
}

export function shouldUseHexConditionalBoosterNote(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'routine' &&
    item.routineVaccineKey === 'dtpBooster' &&
    item.conditionalNextDose === true &&
    item.id === 'routine-hex-booster'
  );
}

export function getConditionalNextDoseTranslationKey(item: VaccineRecommendation): string {
  if (isConditionalWindowRecommendation(item)) {
    return 'resultConditionalBoosterWindow';
  }

  if (shouldUseInfluenzaConditionalNote(item)) {
    return 'resultConditionalNextDoseInfluenza';
  }

  if (
    item.vaccineCategory === 'hpv' &&
    item.conditionalNextDose &&
    item.doseLabelKey === 'doseLabel_dose2'
  ) {
    return 'resultConditionalHpvTwoDoseSecond';
  }

  if (shouldUseHexConditionalBoosterNote(item)) {
    return 'resultConditionalHexBoosterAfterRemainingPrimary';
  }

  if (shouldUseNimenrixInfantBoosterConditionalNote(item)) {
    return 'resultConditionalNimenrixInfantTwoPrimaryBooster';
  }

  if (
    item.vaccineCategory === 'varicella' &&
    item.conditionalNextDose &&
    item.doseLabelKey === 'doseLabel_dose2' &&
    item.conditionalProjectedFromDate
  ) {
    return 'resultConditionalVaricellaDose2FromPlannedDose1';
  }

  if (shouldUseMenacwyBoosterConditionalNote(item)) {
    return 'resultConditionalNimenrixSinglePrimaryBooster';
  }

  if (shouldUsePcvSevenToElevenBoosterConditionalNote(item)) {
    return 'resultConditionalPcvSevenToElevenBooster';
  }

  if (isPcvInfantRemainingPrimaryConditionalItem(item)) {
    return 'resultConditionalPcvRemainingPrimaryAfterPrevious';
  }

  if (isPcvInfantRemainingBoosterConditionalItem(item)) {
    return 'resultConditionalPcvInfantBoosterAfterPrimarySeries';
  }

  if (item.doseLabelKey === 'doseLabel_booster' || shouldUseMenbBoosterConditionalNote(item)) {
    return 'resultConditionalBoosterStart';
  }

  return 'resultConditionalNextFixedDose';
}

export function getConditionalNextDoseTranslationParams(
  item: VaccineRecommendation,
  formatDateValue: (isoDate: string | undefined) => string,
  translateDoseLabel: (doseLabelKey: string) => string
): Record<string, string> {
  if (isConditionalWindowRecommendation(item)) {
    return {
      startDate: formatDateValue(item.windowStart),
      endDate: formatDateValue(item.windowEnd),
    };
  }

  if (getConditionalNextDoseTranslationKey(item) === 'resultConditionalNextFixedDose') {
    return {
      previousDose: translateDoseLabel(getPreviousDoseLabelKey(item.doseLabelKey)),
      nextDose: translateDoseLabel(item.doseLabelKey),
      date: formatDateValue(item.recommendedDate),
    };
  }

  if (
    getConditionalNextDoseTranslationKey(item) ===
    'resultConditionalPcvRemainingPrimaryAfterPrevious'
  ) {
    return {
      previousDose: translateDoseLabel(getPreviousDoseLabelKey(item.doseLabelKey)),
      nextDose: translateDoseLabel(item.doseLabelKey),
    };
  }

  if (
    getConditionalNextDoseTranslationKey(item) ===
    'resultConditionalVaricellaDose2FromPlannedDose1'
  ) {
    return {
      dose1Date: formatDateValue(item.conditionalProjectedFromDate),
      date: formatDateValue(item.recommendedDate),
    };
  }

  return {
    date: formatDateValue(item.recommendedDate),
  };
}

export function shouldHideDoseLabelForTimingDisplay(
  item: VaccineRecommendation,
  timingLineKeys: string[]
): boolean {
  if (item.conditionalNextDose) {
    return true;
  }

  return timingLineKeys.includes('resultScheduledDoseDate');
}

export function getProductDisplayLabel(product: string | undefined): string | null {
  if (!product) {
    return null;
  }

  return PRODUCT_EN_LABELS[product] ?? product;
}

export function dedupeNeedsReviewItems(items: VaccineRecommendation[]): VaccineRecommendation[] {
  const seen = new Set<string>();
  const deduped: VaccineRecommendation[] = [];

  for (const item of items) {
    const key = item.vaccineCategory === 'routine' ? item.id : item.vaccineCategory;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    deduped.push(item);
  }

  return deduped;
}

export function isRoutineHexRecommendation(item: VaccineRecommendation): boolean {
  return Boolean(
    item.vaccineCategory === 'routine' &&
      item.routineVaccineKey &&
      (item.routineVaccineKey.startsWith('hexavalent') || item.routineVaccineKey === 'dtpBooster')
  );
}

export function isNonActionableRoutineCompletion(item: VaccineRecommendation): boolean {
  return item.vaccineCategory === 'routine' && item.status === 'completed';
}

export function filterRecommendationsForResultsDisplay(
  items: VaccineRecommendation[]
): VaccineRecommendation[] {
  return items.filter((item) => !isNonActionableRoutineCompletion(item));
}

export function isRoutineBcgPrerequisite(item: VaccineRecommendation): boolean {
  return item.id === 'routine-bcg-tuberculin-prerequisite';
}

export function isRoutineMmrRecommendation(item: VaccineRecommendation): boolean {
  return Boolean(
    item.vaccineCategory === 'routine' &&
      item.routineVaccineKey &&
      item.routineVaccineKey.startsWith('mmr')
  );
}

export function getRecommendationCategoryLabel(
  item: VaccineRecommendation,
  language: 'en' | 'ar',
  t: (key: string) => string
): string {
  if (isRoutineHexRecommendation(item)) {
    return t('routineCatchUpHexLabel');
  }

  if (isRoutineMmrRecommendation(item)) {
    return t('routineCatchUpMmrLabel');
  }

  if (item.routineVaccineKey === 'bcg') {
    return t('routineCatchUpBcgLabel');
  }

  return getVaccineCategoryLabel(item.vaccineCategory, language);
}

export function shouldShowStatusOnCard(
  section: ResultsSectionKind,
  status: VaccineRecommendation['status']
): boolean {
  switch (section) {
    case 'ageLimitPassed':
      return false;
    case 'dueNow':
      return status !== 'due-now';
    case 'eligibleNow':
      return status !== 'eligible-now';
    case 'upcoming':
      return status !== 'upcoming' && status !== 'not-yet-eligible';
    case 'completed':
      return status !== 'completed';
    case 'needsReview':
      return false;
    default:
      return true;
  }
}

export function shouldShowDoseLabelOnCard(
  section: ResultsSectionKind,
  doseLabelKey: string
): boolean {
  if (section === 'ageLimitPassed') {
    return false;
  }

  if (section === 'needsReview' && doseLabelKey === 'doseLabel_reviewNeeded') {
    return false;
  }

  return true;
}

export function getPreviousDoseLabelKey(doseLabelKey: string): string {
  if (doseLabelKey === 'doseLabel_dose2') {
    return 'doseLabel_dose1';
  }

  if (doseLabelKey === 'doseLabel_dose3') {
    return 'doseLabel_dose2';
  }

  return 'doseLabel_dose1';
}

export function getCardExplanation(
  item: VaccineRecommendation,
  t: (key: string) => string,
  input?: CheckerInput | null
): string | null {
  const cardNotes = getDisplayCardNoteKeys(item, input);
  const primaryNote = cardNotes[0];

  if (primaryNote) {
    return t(primaryNote);
  }

  if (item.reasonKey) {
    return t(item.reasonKey);
  }

  return null;
}

export function collectDisplayedCardNoteKeys(
  items: VaccineRecommendation[],
  input?: CheckerInput | null
): Set<string> {
  const keys = new Set<string>();

  for (const item of items) {
    for (const noteKey of getDisplayCardNoteKeys(item, input)) {
      keys.add(noteKey);
    }
  }

  return keys;
}

export function filterImportantNotesForDisplay(
  noteKeys: string[],
  recommendations: VaccineRecommendation[],
  input?: CheckerInput | null
): string[] {
  const needsReviewItems = recommendations.filter((item) => item.status === 'needs-review');
  const cardNoteKeys = expandEquivalentNoteKeys(
    collectDisplayedCardNoteKeys(recommendations, input)
  );
  const onlyVaccineSpecificReview =
    needsReviewItems.length > 0 &&
    needsReviewItems.every(
      (item) => item.reasonKey && VACCINE_SPECIFIC_REVIEW_REASON_KEYS.has(item.reasonKey)
    );

  return noteKeys.filter((noteKey) => {
    if (noteKey === 'note_clinicianReviewRecommended' && onlyVaccineSpecificReview) {
      return false;
    }

    return !cardNoteKeys.has(noteKey);
  });
}

export function isMissingInfoNeedsReview(item: VaccineRecommendation): boolean {
  return Boolean(item.reasonKey && MISSING_INFO_REASON_KEYS.has(item.reasonKey));
}
