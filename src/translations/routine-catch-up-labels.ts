import { type RoutineCatchUpAssessment } from '@/lib/vaccine-checker/routine-catch-up/types';
import { type Language, type TranslateFn } from '@/types/wizard-types';

function formatBcgLines(assessment: RoutineCatchUpAssessment, t: TranslateFn): string[] {
  switch (assessment.bcg.status) {
    case 'tuberculin_required':
      return [t('routineCatchUpBcgLabel'), t('routineCatchUpBcgTuberculin')];
    case 'missed_age_lte_6_months':
      return [t('routineCatchUpBcgLabel'), t('routineCatchUpBcgEligibleNow')];
    case 'received':
      return [t('routineCatchUpBcgLabel'), t('routineCatchUpBcgReceived')];
    default:
      return [];
  }
}

function formatHexavalentLines(assessment: RoutineCatchUpAssessment, t: TranslateFn): string[] {
  const { hexavalent } = assessment;

  if (
    (hexavalent.pathway === 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR' ||
      hexavalent.pathway === 'SECOND_YEAR_CATCHUP_PRIMARY_COMPLETE') &&
    hexavalent.boosterReceived
  ) {
    return [];
  }

  const lines = [t('routineCatchUpHexLabel')];

  if (hexavalent.pathway === 'AGE_12M_PLUS_ONE_PRIOR_2_DOSE') {
    lines.push(t('routineCatchUpHexOneDoseRemaining2'));
  } else if (hexavalent.pathway === 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING') {
    lines.push(t('routineCatchUpHexTwoDosesRemaining1'));
    if (hexavalent.noteKeys.includes('note_hexRemainingPrimaryDueNow')) {
      lines.push(t('note_hexRemainingPrimaryDueNow'));
    }
  } else if (hexavalent.pathway === 'AGE_12M_PLUS_NO_PRIOR_2_DOSE' && hexavalent.documentedDoseCount === 0) {
    lines.push(t('routineCatchUpHexZeroDoses2Primary'));
  } else if (hexavalent.documentedDoseCount === 0) {
    lines.push(t('routineCatchUpHexZeroDoses3Primary'));
  } else if (hexavalent.documentedDoseCount === 1) {
    lines.push(t('routineCatchUpHexOneDoseRemaining2'));
  } else if (hexavalent.documentedDoseCount === 2) {
    lines.push(t('routineCatchUpHexTwoDosesRemaining1'));
  }

  if (
    hexavalent.scheduledPrimaryDoses.length > 0 &&
    hexavalent.noteKeys.includes('note_hexPreferredMinimumInterval') &&
    hexavalent.pathway !== 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING'
  ) {
    lines.push(t('routineCatchUpHexIntervalNote'));
  }

  if (
    hexavalent.scheduledPrimaryDoses.length > 0 &&
    hexavalent.noteKeys.includes('note_hexAge12TwoDoseInterval')
  ) {
    lines.push(t('routineCatchUpHexTwoDoseInterval'));
    lines.push(t('routineCatchUpHexBoosterAfterLastDose'));
  }

  if (
    hexavalent.pathway === 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING' &&
    hexavalent.boosterDate &&
    !hexavalent.boosterReceived
  ) {
    lines.push(t('routineCatchUpHexBoosterAfterLastDose'));
  }

  return lines;
}

function formatOpvLines(assessment: RoutineCatchUpAssessment, t: TranslateFn): string[] {
  if (!assessment.opv.showHealthOfficeNote) {
    return [];
  }

  return [t('routineCatchUpOpvLabel'), t('note_opvHealthOfficeReferral')];
}

export function formatRoutineCatchUpLines(
  assessment: RoutineCatchUpAssessment,
  language: Language,
  t: TranslateFn
): string[] {
  void language;

  return [...formatBcgLines(assessment, t), ...formatHexavalentLines(assessment, t), ...formatOpvLines(assessment, t)];
}
