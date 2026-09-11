'use client';

import { useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { type WizardStepProps } from '@/types/wizard-types';
import { getActiveVaccineIndex } from '@/lib/vaccine-checker/input-adapter';
import { getNextStepAfterDoseCount } from '@/lib/vaccine-checker/wizard-flow';
import { getAvailableDoseCounts } from '@/lib/vaccine-checker/dose-count-options';
import { getVaccineHistoryStepLabel } from '@/translations/vaccine-history-labels';

export function DoseCountStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const currentIndex = getActiveVaccineIndex(state.additionalVaccines);
  const currentVaccine = state.additionalVaccines[currentIndex];
  const category = currentVaccine?.category ?? 'rotavirus';

  const availableCounts = useMemo(() => {
    if (!currentVaccine) {
      return [];
    }

    return getAvailableDoseCounts(state, currentVaccine);
  }, [state, currentVaccine]);

  const selectionContextKey = `${currentIndex}:${category}:${availableCounts.join(',')}`;
  const [selectionState, setSelectionState] = useState<{
    key: string;
    value: number | null;
  }>({
    key: selectionContextKey,
    value: null,
  });

  const doseCount = useMemo(() => {
    const saved = currentVaccine?.numberOfDoses;
    const savedSelection = saved && availableCounts.includes(saved) ? saved : null;

    if (selectionState.key !== selectionContextKey) {
      return savedSelection;
    }

    if (selectionState.value !== null && availableCounts.includes(selectionState.value)) {
      return selectionState.value;
    }

    return savedSelection;
  }, [
    availableCounts,
    currentVaccine?.numberOfDoses,
    selectionContextKey,
    selectionState,
  ]);

  const selectDoseCount = (count: number) => {
    setSelectionState({ key: selectionContextKey, value: count });
  };

  const continueHandler = () => {
    if (doseCount === null || doseCount === undefined || doseCount < 0 || !currentVaccine) return;

    setState((current) => {
      const vaccines = [...current.additionalVaccines];
      vaccines[currentIndex] = {
        ...vaccines[currentIndex],
        numberOfDoses: doseCount,
        product: doseCount === 0 ? undefined : vaccines[currentIndex].product,
      };
      const nextState = {
        ...current,
        additionalVaccines: vaccines,
      };

      return {
        ...nextState,
        currentStep: getNextStepAfterDoseCount(nextState, currentIndex),
      };
    });
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      contextLabel={getVaccineHistoryStepLabel('context', category, t)}
      title={getVaccineHistoryStepLabel('doseCount', category, t)}
    >
      {availableCounts.length === 0 ? (
        <p className="vaccine-checker-help">{t('doseCountUnavailable')}</p>
      ) : (
        <div className="vaccine-checker-choice-row">
          {availableCounts.map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => selectDoseCount(count)}
              className={`btn vaccine-checker-choice ${doseCount === count ? 'btn-primary' : 'btn-outline'}`}
            >
              {count}
            </button>
          ))}
        </div>
      )}

      {doseCount && (
        <p className="vaccine-checker-help">
          {language === 'ar'
            ? `${doseCount} ${doseCount === 1 ? 'جرعة' : 'جرعات'}`
            : `${doseCount} dose${doseCount > 1 ? 's' : ''}`}
        </p>
      )}

      <button
        type="button"
        onClick={continueHandler}
        disabled={doseCount === null || doseCount === undefined || doseCount < 0 || availableCounts.length === 0}
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
