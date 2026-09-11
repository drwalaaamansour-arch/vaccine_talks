import {
  addMonths,
  ageInWholeMonths,
  isBefore,
  isOnOrBefore,
  startOfDay,
} from '@/lib/vaccine-checker/date-utils';
import {
  getDocumentedHexavalentDoseKeys,
  getLastHexavalentDoseDate,
  getRoutineHexBoosterDate,
  HEXAVALENT_DOSE_LABEL_KEYS,
  HEXAVALENT_PRIMARY_DOSE_KEYS,
  isHexavalentBoosterReceived,
  isRoutinePrimaryCompletedInFirstYear,
  shouldSuppressHexCatchUp,
} from '@/lib/vaccine-checker/routine-catch-up/hexavalent-utils';
import {
  type HexavalentCatchUpAssessment,
  type HexavalentPathway,
  type ScheduledRoutineCatchUpDose,
} from '@/lib/vaccine-checker/routine-catch-up/types';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { iso, makeRecommendation, type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

const FIRST_YEAR_PRIMARY_TARGET = 3;
const AGE_12M_PLUS_CATCH_UP_DOSES = 2;
const PREFERRED_INTERVAL_MONTHS = 2;
const MINIMUM_INTERVAL_MONTHS = 1;
const BOOSTER_AFTER_LAST_PRIMARY_MONTHS = 6;

function usesTwoDoseCatchUpFromToday(pathway: HexavalentPathway): boolean {
  return (
    pathway === 'AGE_12M_PLUS_NO_PRIOR_2_DOSE' ||
    pathway === 'AGE_12M_PLUS_ONE_PRIOR_2_DOSE'
  );
}

function isPrimaryCompletePathway(pathway: HexavalentPathway): boolean {
  return (
    pathway === 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR' ||
    pathway === 'SECOND_YEAR_CATCHUP_PRIMARY_COMPLETE'
  );
}

function determineHexavalentPathway(
  ageMonths: number,
  documentedCount: number,
  ledger: RoutineVaccineLedger
): HexavalentPathway {
  if (documentedCount >= FIRST_YEAR_PRIMARY_TARGET) {
    return isRoutinePrimaryCompletedInFirstYear(ledger)
      ? 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR'
      : 'SECOND_YEAR_CATCHUP_PRIMARY_COMPLETE';
  }

  if (ageMonths >= 12) {
    if (documentedCount === 0) {
      return 'AGE_12M_PLUS_NO_PRIOR_2_DOSE';
    }

    if (documentedCount === 1) {
      return 'AGE_12M_PLUS_ONE_PRIOR_2_DOSE';
    }

    return 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING';
  }

  return 'FIRST_YEAR_3_DOSE';
}

function doseStatus(
  recommendedDate: Date,
  today: Date
): ScheduledRoutineCatchUpDose['status'] {
  return isOnOrBefore(recommendedDate, today) ? 'due-now' : 'upcoming';
}

function schedulePrimarySeries(
  input: CheckerInput,
  documentedCount: number,
  targetPrimary: number,
  lastDoseDate: Date | null
): ScheduledRoutineCatchUpDose[] {
  const remaining = Math.max(0, targetPrimary - documentedCount);
  const scheduled: ScheduledRoutineCatchUpDose[] = [];
  let anchor = lastDoseDate;

  for (let index = 0; index < remaining; index += 1) {
    const doseNumber = documentedCount + index + 1;
    const doseKey = HEXAVALENT_PRIMARY_DOSE_KEYS[doseNumber - 1] ?? `hexavalentDose${doseNumber}`;
    const preferredDate = anchor
      ? addMonths(anchor, PREFERRED_INTERVAL_MONTHS)
      : input.referenceDate;
    const minimumDate = anchor
      ? addMonths(anchor, MINIMUM_INTERVAL_MONTHS)
      : input.referenceDate;

    scheduled.push({
      doseKey,
      doseLabelKey: HEXAVALENT_DOSE_LABEL_KEYS[doseKey as keyof typeof HEXAVALENT_DOSE_LABEL_KEYS] ?? 'routineVaccine_hexavalentDose1',
      recommendedDate: iso(preferredDate),
      minimumValidDate: iso(minimumDate),
      status: doseStatus(preferredDate, input.referenceDate),
    });

    anchor = preferredDate;
  }

  return scheduled;
}

function scheduleCatchUpDosesFromToday(
  input: CheckerInput,
  doseCount: number,
  firstDoseNumber = 1
): ScheduledRoutineCatchUpDose[] {
  const scheduled: ScheduledRoutineCatchUpDose[] = [];
  let anchor: Date | null = null;

  for (let index = 0; index < doseCount; index += 1) {
    const doseNumber = firstDoseNumber + index;
    const doseKey = HEXAVALENT_PRIMARY_DOSE_KEYS[doseNumber - 1] ?? `hexavalentDose${doseNumber}`;
    const preferredDate: Date = anchor
      ? addMonths(anchor, PREFERRED_INTERVAL_MONTHS)
      : input.referenceDate;
    const minimumDate: Date = anchor
      ? addMonths(anchor, MINIMUM_INTERVAL_MONTHS)
      : input.referenceDate;

    scheduled.push({
      doseKey,
      doseLabelKey: HEXAVALENT_DOSE_LABEL_KEYS[doseKey as keyof typeof HEXAVALENT_DOSE_LABEL_KEYS] ?? 'routineVaccine_hexavalentDose1',
      recommendedDate: iso(preferredDate),
      minimumValidDate: iso(minimumDate),
      status: doseStatus(preferredDate, input.referenceDate),
    });

    anchor = preferredDate;
  }

  return scheduled;
}

function boosterDateAfterLastPrimary(lastPrimaryDate: Date | null): Date | null {
  if (!lastPrimaryDate) {
    return null;
  }

  return addMonths(lastPrimaryDate, BOOSTER_AFTER_LAST_PRIMARY_MONTHS);
}

function resolveHexBoosterDate(
  input: CheckerInput,
  pathway: HexavalentPathway,
  lastScheduledPrimaryDate: Date | null,
  lastDoseDate: Date | null
): Date | null {
  if (pathway === 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR') {
    return getRoutineHexBoosterDate(input.dob);
  }

  if (pathway === 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING') {
    return addMonths(input.referenceDate, BOOSTER_AFTER_LAST_PRIMARY_MONTHS);
  }

  return boosterDateAfterLastPrimary(lastScheduledPrimaryDate ?? lastDoseDate);
}

function isOverduePreferredPrimaryDate(
  dose: ScheduledRoutineCatchUpDose,
  today: Date
): boolean {
  if (dose.status !== 'due-now' || !dose.recommendedDate) {
    return false;
  }

  const [year, month, day] = dose.recommendedDate.split('-').map(Number);
  const preferredDate = startOfDay(new Date(year, month - 1, day));
  return isBefore(preferredDate, startOfDay(today));
}

function buildRemainingPrimaryRecommendation(
  dose: ScheduledRoutineCatchUpDose,
  input: CheckerInput,
  index: number
): VaccineRecommendation {
  const overdue = isOverduePreferredPrimaryDate(dose, input.referenceDate);

  return makeRecommendation({
    id: `routine-hex-primary-${index + 1}`,
    vaccineCategory: 'routine',
    routineVaccineKey: dose.doseKey,
    doseLabelKey: 'routineVaccine_hexRemainingPrimary',
    status: dose.status === 'due-now' ? 'due-now' : 'upcoming',
    timingKind: overdue ? undefined : 'FIXED_DATE',
    recommendedDate: overdue ? undefined : dose.recommendedDate,
    minimumValidDate: overdue ? undefined : dose.minimumValidDate,
    noteKeys: overdue ? ['note_hexRemainingPrimaryDueNow'] : [],
  });
}

function resolveNoteKeys(
  pathway: HexavalentPathway,
  scheduledPrimaryDoses: ScheduledRoutineCatchUpDose[]
): string[] {
  if (scheduledPrimaryDoses.length === 0) {
    return [];
  }

  if (pathway === 'FIRST_YEAR_3_DOSE') {
    return ['note_hexPreferredMinimumInterval'];
  }

  if (usesTwoDoseCatchUpFromToday(pathway)) {
    return ['note_hexAge12TwoDoseInterval'];
  }

  if (pathway === 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING') {
    const notes = ['note_hexPreferredMinimumInterval'];
    if (scheduledPrimaryDoses.some((dose) => dose.status === 'due-now')) {
      notes.push('note_hexRemainingPrimaryDueNow');
    }
    return notes;
  }

  return [];
}

function buildRoutineHexBoosterRecommendation(
  boosterDateIso: string,
  input: CheckerInput,
  pathway: HexavalentPathway
): VaccineRecommendation {
  const [year, month, day] = boosterDateIso.split('-').map(Number);
  const boosterDate = startOfDay(new Date(year, month - 1, day));
  const today = startOfDay(input.referenceDate);
  const dueNow = isOnOrBefore(boosterDate, today);
  const overdue = isBefore(boosterDate, today);

  if (pathway === 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR') {
    const noteKeys: string[] = [];
    if (dueNow) {
      noteKeys.push('note_hexRoutineBoosterDueNow');
    }
    if (overdue) {
      noteKeys.push('note_hexRoutineBoosterOverdue');
    }

    return makeRecommendation({
      id: 'routine-hex-booster',
      vaccineCategory: 'routine',
      routineVaccineKey: 'dtpBooster',
      doseLabelKey: 'routineVaccine_hexBooster',
      status: dueNow ? 'due-now' : 'upcoming',
      timingKind: overdue ? undefined : 'FIXED_DATE',
      recommendedDate: overdue ? undefined : boosterDateIso,
      historicalRecommendedDate: overdue ? boosterDateIso : undefined,
      noteKeys,
    });
  }

  return makeRecommendation({
    id: 'routine-hex-booster',
    vaccineCategory: 'routine',
    routineVaccineKey: 'dtpBooster',
    doseLabelKey: 'routineVaccine_hexBooster',
    status: dueNow ? 'due-now' : 'upcoming',
    timingKind: 'FIXED_DATE',
    recommendedDate: boosterDateIso,
    noteKeys: ['note_hexBoosterAfterLastPrimary'],
  });
}

function attachHexAssessmentNotesToFirstPrimary(
  recommendations: VaccineRecommendation[],
  noteKeys: string[]
): VaccineRecommendation[] {
  if (noteKeys.length === 0) {
    return recommendations;
  }

  const firstPrimaryIndex = recommendations.findIndex((item) =>
    item.id.startsWith('routine-hex-primary-')
  );

  if (firstPrimaryIndex === -1) {
    return recommendations;
  }

  return recommendations.map((item, index) =>
    index === firstPrimaryIndex
      ? { ...item, noteKeys: [...noteKeys, ...item.noteKeys] }
      : item
  );
}

function buildHexavalentRecommendations(
  assessment: HexavalentCatchUpAssessment,
  input: CheckerInput
): VaccineRecommendation[] {
  const recommendations: VaccineRecommendation[] = [];
  const remainingPrimaryPending =
    assessment.pathway === 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING';

  for (const [index, dose] of assessment.scheduledPrimaryDoses.entries()) {
    if (remainingPrimaryPending) {
      recommendations.push(buildRemainingPrimaryRecommendation(dose, input, index));
      continue;
    }

    recommendations.push(
      makeRecommendation({
        id: `routine-hex-primary-${index + 1}`,
        vaccineCategory: 'routine',
        routineVaccineKey: dose.doseKey,
        doseLabelKey: dose.doseLabelKey,
        status: dose.status === 'due-now' ? 'due-now' : 'upcoming',
        timingKind: 'FIXED_DATE',
        recommendedDate: dose.recommendedDate,
        minimumValidDate: dose.minimumValidDate,
        noteKeys: [],
      })
    );
  }

  if (assessment.boosterDate && !assessment.boosterReceived) {
    const boosterDate = assessment.boosterDate;

    if (remainingPrimaryPending) {
      recommendations.push(
        makeRecommendation({
          id: 'routine-hex-booster',
          vaccineCategory: 'routine',
          routineVaccineKey: 'dtpBooster',
          doseLabelKey: 'routineVaccine_hexBooster',
          status: 'upcoming',
          timingKind: 'MINIMUM_START_ONLY',
          recommendedDate: boosterDate,
          conditionalNextDose: true,
          noteKeys: [],
        })
      );
      return recommendations;
    }

    recommendations.push(
      buildRoutineHexBoosterRecommendation(boosterDate, input, assessment.pathway)
    );
  }

  return attachHexAssessmentNotesToFirstPrimary(recommendations, assessment.noteKeys);
}

function buildSuppressedHexCatchUpAssessment(
  ledger: RoutineVaccineLedger,
  ageMonths: number
): HexavalentCatchUpAssessment {
  const documentedDoseKeys = getDocumentedHexavalentDoseKeys(ledger);
  const documentedDoseCount = documentedDoseKeys.length;
  const primaryComplete = isRoutinePrimaryCompletedInFirstYear(ledger);

  return {
    documentedDoseCount,
    documentedDoseKeys: [...documentedDoseKeys],
    pathway: primaryComplete
      ? 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR'
      : ageMonths >= 12
        ? documentedDoseCount === 0
          ? 'AGE_12M_PLUS_NO_PRIOR_2_DOSE'
          : documentedDoseCount === 1
            ? 'AGE_12M_PLUS_ONE_PRIOR_2_DOSE'
            : 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING'
        : 'FIRST_YEAR_3_DOSE',
    targetPrimaryDoses: primaryComplete ? 3 : ageMonths >= 12 ? 2 : 3,
    remainingPrimaryDoses: 0,
    scheduledPrimaryDoses: [],
    boosterReceived: isHexavalentBoosterReceived(ledger),
    noteKeys: [],
  };
}

export function assessHexavalentCatchUp(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): { assessment: HexavalentCatchUpAssessment; recommendations: VaccineRecommendation[] } {
  const ageMonths = ageInWholeMonths(input.dob, input.referenceDate);

  if (shouldSuppressHexCatchUp(input, ledger)) {
    return {
      assessment: buildSuppressedHexCatchUpAssessment(ledger, ageMonths),
      recommendations: [],
    };
  }

  const documentedDoseKeys = getDocumentedHexavalentDoseKeys(ledger);
  const documentedDoseCount = documentedDoseKeys.length;
  const pathway = determineHexavalentPathway(ageMonths, documentedDoseCount, ledger);
  const boosterReceived = isHexavalentBoosterReceived(ledger);
  const lastDoseDate = getLastHexavalentDoseDate(input, ledger);
  const primaryComplete = isPrimaryCompletePathway(pathway);

  const targetPrimaryDoses = usesTwoDoseCatchUpFromToday(pathway)
    ? AGE_12M_PLUS_CATCH_UP_DOSES
    : FIRST_YEAR_PRIMARY_TARGET;

  const scheduledPrimaryDoses = primaryComplete
    ? []
    : usesTwoDoseCatchUpFromToday(pathway)
      ? scheduleCatchUpDosesFromToday(
          input,
          AGE_12M_PLUS_CATCH_UP_DOSES,
          documentedDoseCount + 1
        )
      : schedulePrimarySeries(
          input,
          documentedDoseCount,
          FIRST_YEAR_PRIMARY_TARGET,
          lastDoseDate
        );

  const lastScheduledPrimaryDate = scheduledPrimaryDoses.at(-1)?.recommendedDate
    ? new Date(scheduledPrimaryDoses.at(-1)!.recommendedDate!)
    : lastDoseDate;

  const boosterDate = resolveHexBoosterDate(
    input,
    pathway,
    lastScheduledPrimaryDate,
    lastDoseDate
  );

  const boosterDateIso = boosterDate ? iso(boosterDate) : undefined;

  const assessment: HexavalentCatchUpAssessment = {
    documentedDoseCount,
    documentedDoseKeys: [...documentedDoseKeys],
    pathway,
    targetPrimaryDoses,
    remainingPrimaryDoses: primaryComplete
      ? 0
      : usesTwoDoseCatchUpFromToday(pathway)
        ? AGE_12M_PLUS_CATCH_UP_DOSES
        : Math.max(0, FIRST_YEAR_PRIMARY_TARGET - documentedDoseCount),
    scheduledPrimaryDoses,
    boosterDate: boosterDateIso,
    boosterReceived,
    noteKeys: resolveNoteKeys(pathway, scheduledPrimaryDoses),
  };

  return {
    assessment,
    recommendations: buildHexavalentRecommendations(assessment, input),
  };
}
