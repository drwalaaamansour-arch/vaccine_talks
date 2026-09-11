'use client';

import { useState, useCallback } from 'react';
import {
  type Language,
  type WizardShellProps,
  type WizardState,
  type WizardStepId,
} from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

const INITIAL_STATE = (language: Language): WizardState => ({
  language,
  dateOfBirth: null,
  calculatedAge: null,
  medicalCondition: { hasCondition: false, showStopMessage: false },
  routineVaccinesStatus: 'none',
  routineVisitHistory: {},
  completedRoutineVisits: [],
  mmrDate: null,
  mmrDose2Date: null,
  additionalVaccinesHistoryAnswer: null,
  additionalVaccines: [],
  currentStep: 'intro',
  showResults: false,
  showDisclaimer: false,
});

export function WizardShell({ children, initialLanguage = 'en' }: WizardShellProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [state, setState] = useState<WizardState>(() => INITIAL_STATE(initialLanguage));

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setState((current) => ({ ...current, language: lang }));
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  }, []);

  const goToStep = useCallback((step: WizardStepId) => {
    setState((current) => ({ ...current, currentStep: step }));
  }, []);

  const restart = useCallback(() => {
    setState(INITIAL_STATE(language));
  }, [language]);

  const canGoBack = state.currentStep !== 'intro';
  const canGoNext = true;

  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      return translateKey(language, key, params);
    },
    [language]
  );

  return (
    <>
      {children({
        state,
        setState,
        language,
        setLanguage,
        t,
        goToStep,
        canGoNext,
        canGoBack,
        restart,
      })}
    </>
  );
}
