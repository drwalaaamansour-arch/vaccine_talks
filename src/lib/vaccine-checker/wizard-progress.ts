import { getActiveVaccineIndexForState } from '@/lib/vaccine-checker/input-adapter';
import {
  getReferenceDate,
  shouldIncludeMmrStepInFlow,
  shouldShowAdditionalVaccinesStep,
} from '@/lib/vaccine-checker/wizard-flow';
import { wizardRequiresProductSelection } from '@/lib/vaccine-checker/teen-history-simplification';
import {
  type AdditionalVaccineCategory,
  type WizardState,
  type WizardStepId,
} from '@/types/wizard-types';

export type WizardProgressScreen =
  | 'dob'
  | 'medicalCondition'
  | 'routineVaccines'
  | 'mmrDate'
  | 'additionalVaccinesYesNo'
  | 'additionalVaccinesSelect'
  | { kind: 'product'; category: AdditionalVaccineCategory }
  | { kind: 'doseCount'; category: AdditionalVaccineCategory }
  | { kind: 'doseDates'; category: AdditionalVaccineCategory }
  | 'review';

function screensEqual(a: WizardProgressScreen, b: WizardProgressScreen): boolean {
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }

  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    return a.kind === b.kind && a.category === b.category;
  }

  return false;
}

export function buildWizardProgressScreens(
  state: WizardState,
  today: Date = getReferenceDate()
): WizardProgressScreen[] {
  const screens: WizardProgressScreen[] = ['dob', 'medicalCondition', 'routineVaccines'];

  if (shouldShowAdditionalVaccinesStep(state, today)) {
    screens.push('additionalVaccinesYesNo');

    if (state.additionalVaccinesHistoryAnswer === 'yes' || state.additionalVaccines.length > 0) {
      screens.push('additionalVaccinesSelect');
    }

    for (const record of state.additionalVaccines) {
      if (record.category === 'pneumococcal') {
        screens.push({ kind: 'doseCount', category: record.category });
        screens.push({ kind: 'product', category: record.category });
        screens.push({ kind: 'doseDates', category: record.category });
      } else {
        if (wizardRequiresProductSelection(state, record.category, today)) {
          screens.push({ kind: 'product', category: record.category });
        }
        screens.push({ kind: 'doseCount', category: record.category });
        screens.push({ kind: 'doseDates', category: record.category });
      }
    }
  }

  if (shouldIncludeMmrStepInFlow(state, today)) {
    screens.push('mmrDate');
  }

  screens.push('review');
  return screens;
}

export function resolveCurrentProgressScreen(state: WizardState): WizardProgressScreen | null {
  switch (state.currentStep) {
    case 'dob':
      return 'dob';
    case 'medicalCondition':
      return 'medicalCondition';
    case 'routineVaccines':
    case 'routineVisits':
      return 'routineVaccines';
    case 'mmrDate':
      return 'mmrDate';
    case 'additionalVaccines':
      return state.additionalVaccinesHistoryAnswer === 'yes'
        ? 'additionalVaccinesSelect'
        : 'additionalVaccinesYesNo';
    case 'productSelection': {
      const record =
        state.additionalVaccines[getActiveVaccineIndexForState(state, getReferenceDate())];
      return record ? { kind: 'product', category: record.category } : null;
    }
    case 'doseCount': {
      const record =
        state.additionalVaccines[getActiveVaccineIndexForState(state, getReferenceDate())];
      return record ? { kind: 'doseCount', category: record.category } : null;
    }
    case 'lastDoseDate': {
      const record =
        state.additionalVaccines[getActiveVaccineIndexForState(state, getReferenceDate())];
      return record ? { kind: 'doseDates', category: record.category } : null;
    }
    case 'review':
      return 'review';
    default:
      return null;
  }
}

export function getWizardProgressPosition(
  state: WizardState,
  today: Date = getReferenceDate()
): { current: number; total: number } | null {
  const currentScreen = resolveCurrentProgressScreen(state);
  if (!currentScreen) {
    return null;
  }

  const screens = buildWizardProgressScreens(state, today);
  const index = screens.findIndex((screen) => screensEqual(screen, currentScreen));

  if (index === -1) {
    return null;
  }

  return {
    current: index + 1,
    total: screens.length,
  };
}

export function isWizardProgressStep(step: WizardStepId): boolean {
  return step !== 'intro' && step !== 'results';
}
