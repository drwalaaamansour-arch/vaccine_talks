import { isAfter, isBefore, startOfDay } from '@/lib/vaccine-checker/date-utils';
import { getVisitDueDate } from '@/lib/vaccine-checker/routine';
import {
  getReferenceDate,
  shouldCollectMmrDose1DateForCatchUp,
  shouldCollectMmrDose1DateForVaricella,
  shouldCollectMmrDose2Date,
} from '@/lib/vaccine-checker/wizard-flow';
import { parseDateParts, type DateInputParts, type WizardState, isCompleteDateInput, parseDateInput } from '@/types/wizard-types';

export type MmrDateCollectionContext = 'catchUp' | 'varicella12Month' | 'varicella18Month' | 'unspecified';

export function getMmrDateCollectionContext(
  state: WizardState,
  today: Date = getReferenceDate()
): MmrDateCollectionContext {
  if (shouldCollectMmrDose2Date(state, today)) {
    return 'varicella18Month';
  }

  if (shouldCollectMmrDose1DateForVaricella(state, today)) {
    return 'varicella12Month';
  }

  if (shouldCollectMmrDose1DateForCatchUp(state, today)) {
    return 'catchUp';
  }

  return 'unspecified';
}

export function getMmrDateTitleKey(context: MmrDateCollectionContext, language: 'en' | 'ar'): string {
  switch (context) {
    case 'catchUp':
      return language === 'en' ? 'mmrDose1TitleCatchUp' : 'mmrDose1Title';
    case 'varicella18Month':
      return language === 'ar' ? 'mmrDose2Title' : 'mmr18MonthVaricellaTitle';
    case 'varicella12Month':
      return 'mmr12MonthVaricellaTitle';
    default:
      return 'mmrDose1Title';
  }
}

export function getMmrDateHelpKey(context: MmrDateCollectionContext): string {
  switch (context) {
    case 'catchUp':
      return 'mmrDose1HelpCatchUp';
    case 'varicella18Month':
      return 'mmrDose2Help';
    case 'varicella12Month':
      return 'mmr12MonthVaricellaHelp';
    default:
      return 'mmrDose1Help';
  }
}

type TranslateFn = (key: string) => string;

export function validateCollectedMmrDate(
  mmrDate: Date,
  dob: Date,
  asOfDate: Date,
  context: MmrDateCollectionContext,
  t: TranslateFn
): { valid: boolean; error: string | null } {
  const mmr = startOfDay(mmrDate);
  const birth = startOfDay(dob);
  const asOf = startOfDay(asOfDate);

  if (isBefore(mmr, birth)) {
    return { valid: false, error: t('mmrDateErrorBeforeDOB') };
  }

  if (isAfter(mmr, asOf)) {
    return { valid: false, error: t('mmrDateErrorFuture') };
  }

  if (context === 'varicella18Month') {
    const earliestValid = startOfDay(getVisitDueDate(dob, '18months'));
    if (isBefore(mmr, earliestValid)) {
      return { valid: false, error: t('mmrDateErrorBefore18Month') };
    }
  }

  if (context === 'varicella12Month') {
    const earliestValid = startOfDay(getVisitDueDate(dob, '12months'));
    if (isBefore(mmr, earliestValid)) {
      return { valid: false, error: t('mmrDateErrorBefore12Month') };
    }
  }

  return { valid: true, error: null };
}

export function validateMmrDateInputParts(
  parts: DateInputParts,
  dob: Date | null,
  asOfDate: Date,
  context: MmrDateCollectionContext,
  t: TranslateFn
): {
  valid: boolean;
  error: string | null;
  parsed: ReturnType<typeof parseDateInput>;
} {
  const parsed = parseDateInput(parts);

  if (!parsed || !isCompleteDateInput(parts)) {
    return { valid: false, error: null, parsed: null };
  }

  if (!dob) {
    return { valid: true, error: null, parsed };
  }

  const result = validateCollectedMmrDate(parseDateParts(parsed), dob, asOfDate, context, t);
  return {
    valid: result.valid,
    error: result.error,
    parsed: result.valid ? parsed : parsed,
  };
}
