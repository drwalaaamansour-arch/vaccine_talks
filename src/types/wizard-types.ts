import { type ReactNode } from 'react';

export type Language = 'en' | 'ar';

export type AgeRange = {
  years: number;
  months: number;
  days: number;
};

export type DateOfBirth = {
  day: number;
  month: number;
  year: number;
  iso: string;
};

export type WizardStepId =
  | 'intro'
  | 'dob'
  | 'medicalCondition'
  | 'routineVaccines'
  | 'routineVisits'
  | 'mmrDate'
  | 'additionalVaccines'
  | 'productSelection'
  | 'doseCount'
  | 'lastDoseDate'
  | 'review'
  | 'results';

export const WIZARD_STEP_ORDER: WizardStepId[] = [
  'intro',
  'dob',
  'medicalCondition',
  'routineVaccines',
  'mmrDate',
  'additionalVaccines',
  'productSelection',
  'doseCount',
  'lastDoseDate',
  'review',
  'results',
];

export type RoutineVisitKey =
  | 'birth'
  | '1month'
  | '2months'
  | '4months'
  | '6months'
  | '9months'
  | '12months'
  | '18months';

export type RoutineVisit = {
  key: RoutineVisitKey;
  nameAr: string;
  nameEn: string;
  vaccines: RoutineVaccine[];
  completed: boolean;
};

export type RoutineVaccine =
  | 'hepatitisB'
  | 'bcg'
  | 'opv'
  | 'hexavalent';

export type MedicalCondition = {
  hasCondition: boolean;
  showStopMessage: boolean;
};

export type AdditionalVaccineCategory =
  | 'rotavirus'
  | 'pneumococcal'
  | 'meningococcalACWY'
  | 'meningococcalB'
  | 'varicella'
  | 'hepatitisA'
  | 'influenza'
  | 'hpv';

export type AdditionalVaccineProduct = {
  rotavirus: 'Rotarix' | 'RotaTeq' | 'dontKnow';
  pneumococcal: 'Synflorix' | 'Prevenar13' | 'Vaxneuvance' | 'Prevenar20' | 'dontKnow';
  meningococcalACWY: 'Nimenrix' | 'Menactra' | 'Other' | 'dontKnow';
  varicella: 'Barycela' | 'Varivax' | 'Other' | 'dontKnow';
  hpv: 'Gardasil4' | 'Gardasil9' | 'Cervarix' | 'dontKnow';
};

export type AdditionalVaccineRecord = {
  category: AdditionalVaccineCategory;
  product?: string;
  numberOfDoses: number;
  lastDoseDate: DateOfBirth | null;
  firstDoseDate?: DateOfBirth | null;
  dose1Date?: DateOfBirth | null;
  dose2Date?: DateOfBirth | null;
  dose3Date?: DateOfBirth | null;
  dose4Date?: DateOfBirth | null;
  doseDates: DateOfBirth[];
  influenzaPrimingComplete?: boolean;
  /** Age ≥9: received influenza vaccine for the current season (not lifetime history). */
  influenzaCurrentSeasonReceived?: boolean;
  /** HPV: parent chose not to enter first-dose date when it would help timing. */
  firstDoseDateUnknown?: boolean;
};

export type RoutineVisitReceiptStatus = 'received' | 'notReceived';

export type RoutineVisitHistory = Partial<Record<RoutineVisitKey, RoutineVisitReceiptStatus>>;

export type WizardState = {
  language: Language;
  dateOfBirth: DateOfBirth | null;
  calculatedAge: AgeRange | null;
  medicalCondition: MedicalCondition;
  routineVaccinesStatus: 'complete' | 'some' | 'none';
  routineVisitHistory: RoutineVisitHistory;
  completedRoutineVisits: RoutineVisitKey[];
  mmrDate: DateOfBirth | null;
  mmrDose2Date: DateOfBirth | null;
  additionalVaccinesHistoryAnswer: 'yes' | 'no' | null;
  additionalVaccines: AdditionalVaccineRecord[];
  currentStep: WizardStepId;
  showResults: boolean;
  showDisclaimer: boolean;
};

export type TranslateFn = (key: string, params?: Record<string, string>) => string;

export type WizardContextValue = {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslateFn;
  goToStep: (step: WizardStepId) => void;
  canGoNext: boolean;
  canGoBack: boolean;
  restart: () => void;
};

export type WizardStepProps = Pick<
  WizardContextValue,
  't' | 'language' | 'setLanguage' | 'state' | 'setState' | 'goToStep' | 'canGoBack' | 'restart'
>;

export type WizardShellProps = {
  initialLanguage?: Language;
  children: (context: WizardContextValue) => ReactNode;
};

export function buildDateParts(parts: {
  day: number;
  month: number;
  year: number;
}): DateOfBirth {
  return {
    day: parts.day,
    month: parts.month,
    year: parts.year,
    iso: `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`,
  };
}

export function isCompleteDate(parts: {
  day?: number;
  month?: number;
  year?: number;
} | null): parts is { day: number; month: number; year: number } {
  if (!parts) return false;
  return (
    typeof parts.day === 'number' &&
    parts.day >= 1 &&
    parts.day <= 31 &&
    typeof parts.month === 'number' &&
    parts.month >= 1 &&
    parts.month <= 12 &&
    typeof parts.year === 'number' &&
    parts.year >= 1900 &&
    parts.year <= new Date().getFullYear()
  );
}

export type DateInputParts = {
  day: string;
  month: string;
  year: string;
};

export function emptyDateInput(): DateInputParts {
  return { day: '', month: '', year: '' };
}

export function dateInputFromStored(parts: {
  day: number;
  month: number;
  year: number;
} | null): DateInputParts {
  if (!parts) return emptyDateInput();
  return {
    day: String(parts.day),
    month: String(parts.month),
    year: String(parts.year),
  };
}

export function sanitizeNumericDateField(value: string, maxLength: number): string {
  const normalized = value
    .replace(/[\u0660-\u0669]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/\D/g, '');

  return normalized.slice(0, maxLength);
}

export function parseDateInput(parts: DateInputParts): {
  day: number;
  month: number;
  year: number;
} | null {
  if (!parts.day || !parts.month || !parts.year) return null;

  const day = Number(parts.day);
  const month = Number(parts.month);
  const year = Number(parts.year);

  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    return null;
  }

  return { day, month, year };
}

export function isCompleteDateInput(parts: DateInputParts): boolean {
  const parsed = parseDateInput(parts);
  if (!parsed) return false;
  return isCompleteDate(parsed);
}

export function calculateAgeFromDate(dob: Date): AgeRange | null {
  const today = new Date();
  if (dob > today) return null;

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export function parseDateParts(parts: {
  day: number;
  month: number;
  year: number;
}): Date {
  return new Date(
    `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`
  );
}

import { isVaccineRecordComplete } from '@/lib/vaccine-checker/input-adapter';
import {
  getPreviousStepBeforeAdditionalVaccineFlow,
  getPreviousStepBeforeMmrDate,
  shouldIncludeMmrStepInFlow,
  shouldShowAdditionalVaccinesStep,
  shouldShowMmrDateStep,
} from '@/lib/vaccine-checker/wizard-flow';

export function getPreviousWizardStep(state: WizardState): WizardStepId | null {
  switch (state.currentStep) {
    case 'intro':
      return null;
    case 'dob':
      return 'intro';
    case 'medicalCondition':
      return 'dob';
    case 'routineVaccines':
      return 'medicalCondition';
    case 'additionalVaccines':
      return 'routineVaccines';
    case 'mmrDate':
      return getPreviousStepBeforeMmrDate(state);
    case 'productSelection':
      return getPreviousStepBeforeAdditionalVaccineFlow(state);
    case 'doseCount':
      return categoryNeedsProductForPrevious(state)
        ? 'productSelection'
        : getPreviousStepBeforeAdditionalVaccineFlow(state);
    case 'lastDoseDate':
      return 'doseCount';
    case 'review':
      if (shouldIncludeMmrStepInFlow(state)) return 'mmrDate';
      if (state.additionalVaccines.some((record) => isVaccineRecordComplete(record))) {
        return 'lastDoseDate';
      }
      if (shouldShowAdditionalVaccinesStep(state)) return 'additionalVaccines';
      return 'routineVaccines';
    case 'results':
      return state.medicalCondition.showStopMessage ? null : 'review';
    default:
      return null;
  }
}

function categoryNeedsProductForPrevious(state: WizardState): boolean {
  const index = state.additionalVaccines.length - 1;
  const record = state.additionalVaccines[index];
  if (!record) return false;
  return ['rotavirus', 'pneumococcal', 'meningococcalACWY', 'varicella', 'hpv'].includes(record.category);
}
