'use client';

import { useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { buildRoutineVisitHistory, getReceivedRoutineVisits } from '@/lib/vaccine-checker/routine-history';
import {
  getDueRoutineVisitsForState,
  getNextStepAfterRoutineVaccines,
  shouldShowAdditionalVaccinesStep,
} from '@/lib/vaccine-checker/wizard-flow';
import { getRoutineVisitLabel } from '@/translations/routine-visit-labels';
import { type RoutineVisitKey, type WizardStepProps } from '@/types/wizard-types';

export function RoutineVaccinesStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const dueVisits = useMemo(() => getDueRoutineVisitsForState(state), [state]);

  const [routineStatus, setRoutineStatus] = useState(state.routineVaccinesStatus);
  const [selectedVisits, setSelectedVisits] = useState<RoutineVisitKey[]>(() => {
    const fromHistory = getReceivedRoutineVisits(state.routineVisitHistory, dueVisits);
    if (fromHistory.length > 0) {
      return fromHistory;
    }

    return state.completedRoutineVisits.filter((visit) => dueVisits.includes(visit));
  });

  const handleStatusChange = (status: 'complete' | 'some' | 'none') => {
    setRoutineStatus(status);
    if (status === 'some') {
      const fromHistory = getReceivedRoutineVisits(state.routineVisitHistory, dueVisits);
      setSelectedVisits(fromHistory);
      return;
    }

    setSelectedVisits([]);
  };

  const handleVisitToggle = (key: RoutineVisitKey) => {
    setSelectedVisits((current) =>
      current.includes(key) ? current.filter((visit) => visit !== key) : [...current, key]
    );
  };

  const continueHandler = () => {
    const filteredSelected = selectedVisits.filter((visit) => dueVisits.includes(visit));
    const routineVisitHistory = buildRoutineVisitHistory(
      routineStatus,
      dueVisits,
      routineStatus === 'some' ? filteredSelected : []
    );
    const completedRoutineVisits = getReceivedRoutineVisits(routineVisitHistory, dueVisits);

    setState((current) => {
      const routineUpdate = {
        ...current,
        routineVaccinesStatus: routineStatus,
        routineVisitHistory,
        completedRoutineVisits,
      };
      const skipAdditional = !shouldShowAdditionalVaccinesStep(routineUpdate);

      return {
        ...routineUpdate,
        additionalVaccines: skipAdditional ? [] : current.additionalVaccines,
        currentStep: getNextStepAfterRoutineVaccines(routineUpdate),
      };
    });
  };

  const canContinue =
    routineStatus === 'complete' ||
    routineStatus === 'none' ||
    (routineStatus === 'some' && selectedVisits.length > 0);

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('step3Title')}
    >
      <div className="vaccine-checker-choice-row vaccine-checker-choice-row--stack">
        <button
          type="button"
          onClick={() => handleStatusChange('complete')}
          className={`btn vaccine-checker-choice ${routineStatus === 'complete' ? 'btn-primary' : 'btn-outline'}`}
        >
          {language === 'ar' ? t('step3YesAllAr') : t('step3YesAll')}
        </button>
        <button
          type="button"
          onClick={() => handleStatusChange('some')}
          className={`btn vaccine-checker-choice ${routineStatus === 'some' ? 'btn-primary' : 'btn-outline'}`}
        >
          {language === 'ar' ? t('step3SomeAr') : t('step3Some')}
        </button>
        <button
          type="button"
          onClick={() => handleStatusChange('none')}
          className={`btn vaccine-checker-choice ${routineStatus === 'none' ? 'btn-primary' : 'btn-outline'}`}
        >
          {language === 'ar' ? t('step3NoAr') : t('step3No')}
        </button>
      </div>

      {routineStatus === 'some' && (
        <div className="vaccine-checker-list">
          <p className="vaccine-checker-field-label">{t('routineVisitsSelectTitle')}</p>
          {dueVisits.map((key) => {
            const selected = selectedVisits.includes(key);

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleVisitToggle(key)}
                className={`vaccine-checker-list-item ${selected ? 'vaccine-checker-list-item--selected' : ''}`}
                aria-pressed={selected}
              >
                <span>{getRoutineVisitLabel(key, language, t)}</span>
                <span className="vaccine-checker-list-mark">{selected ? '✓' : ''}</span>
              </button>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={continueHandler}
        disabled={!canContinue}
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
