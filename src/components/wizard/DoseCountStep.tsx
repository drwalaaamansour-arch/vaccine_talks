'use client';

import { useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { parseDateParts, type WizardStepProps } from '@/types/wizard-types';
import {
  getActiveVaccineIndex,
  getActiveVaccineIndexForState,
} from '@/lib/vaccine-checker/input-adapter';
import { getNextStepAfterDoseCount, getReferenceDate } from '@/lib/vaccine-checker/wizard-flow';
import { getAvailableDoseCounts } from '@/lib/vaccine-checker/dose-count-options';
import {
  isDoseCountSpecified,
  patchAdditionalVaccineAtIndex,
  UNSPECIFIED_DOSE_COUNT,
} from '@/lib/vaccine-checker/wizard-history';
import { influenzaUsesCurrentSeasonQuestion } from '@/lib/vaccine-checker/teen-history-simplification';
import { getVaccineHistoryStepLabel } from '@/translations/vaccine-history-labels';

export function DoseCountStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const today = getReferenceDate();
  const currentIndex = getActiveVaccineIndex(
    state.additionalVaccines,
    today,
    state.dateOfBirth
  );
  const currentVaccine = state.additionalVaccines[currentIndex];
  const category = currentVaccine?.category ?? 'rotavirus';

  const dob = state.dateOfBirth ? parseDateParts(state.dateOfBirth) : null;
  const isInfluenzaCurrentSeason =
    category === 'influenza' && dob !== null && influenzaUsesCurrentSeasonQuestion(dob, today);

  const [currentSeasonReceived, setCurrentSeasonReceived] = useState<boolean | null>(
    currentVaccine?.influenzaCurrentSeasonReceived ?? null
  );

  const availableCounts = useMemo(() => {
    if (!currentVaccine || isInfluenzaCurrentSeason) {
      return [];
    }

    return getAvailableDoseCounts(state, currentVaccine);
  }, [state, currentVaccine, isInfluenzaCurrentSeason]);

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
    const savedSelection =
      isDoseCountSpecified({ numberOfDoses: saved ?? UNSPECIFIED_DOSE_COUNT }) &&
      availableCounts.includes(saved!)
        ? saved!
        : null;

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
    if (!currentVaccine) return;

    if (isInfluenzaCurrentSeason) {
      if (currentSeasonReceived === null) return;

      setState((current) => {
        const index = getActiveVaccineIndexForState(current, today);
        const additionalVaccines = patchAdditionalVaccineAtIndex(current.additionalVaccines, index, {
          numberOfDoses: currentSeasonReceived ? 1 : 0,
          influenzaCurrentSeasonReceived: currentSeasonReceived,
        });
        const nextState = {
          ...current,
          additionalVaccines,
        };

        return {
          ...nextState,
          currentStep: getNextStepAfterDoseCount(nextState, index, today),
        };
      });
      return;
    }

    if (doseCount === null || doseCount === undefined || doseCount < 0) return;

    setState((current) => {
      const index = getActiveVaccineIndexForState(current, today);
      const additionalVaccines = patchAdditionalVaccineAtIndex(current.additionalVaccines, index, {
        numberOfDoses: doseCount,
        product:
          doseCount === 0 ? undefined : current.additionalVaccines[index]?.product,
      });
      const nextState = {
        ...current,
        additionalVaccines,
      };

      return {
        ...nextState,
        currentStep: getNextStepAfterDoseCount(nextState, index, today),
      };
    });
  };

  const influenzaSeasonTitle =
    language === 'ar' ? t('influenzaCurrentSeasonQuestionAr') : t('influenzaCurrentSeasonQuestion');

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      contextLabel={getVaccineHistoryStepLabel('context', category, t)}
      title={
        isInfluenzaCurrentSeason
          ? influenzaSeasonTitle
          : getVaccineHistoryStepLabel('doseCount', category, t)
      }
    >
      {isInfluenzaCurrentSeason ? (
        <div className="vaccine-checker-choice-row vaccine-checker-choice-row--stack">
          <button
            type="button"
            onClick={() => setCurrentSeasonReceived(true)}
            className={`btn vaccine-checker-choice ${currentSeasonReceived === true ? 'btn-primary' : 'btn-outline'}`}
          >
            {language === 'ar' ? t('step2YesAr') : t('step2Yes')}
          </button>
          <button
            type="button"
            onClick={() => setCurrentSeasonReceived(false)}
            className={`btn vaccine-checker-choice ${currentSeasonReceived === false ? 'btn-primary' : 'btn-outline'}`}
          >
            {language === 'ar' ? t('step2NoAr') : t('step2No')}
          </button>
        </div>
      ) : availableCounts.length === 0 ? (
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

      {!isInfluenzaCurrentSeason && doseCount !== null && doseCount !== undefined && (
        <p className="vaccine-checker-help">
          {language === 'ar'
            ? `${doseCount} ${doseCount === 1 ? 'جرعة' : 'جرعات'}`
            : `${doseCount} dose${doseCount > 1 ? 's' : ''}`}
        </p>
      )}

      <button
        type="button"
        onClick={continueHandler}
        disabled={
          isInfluenzaCurrentSeason
            ? currentSeasonReceived === null
            : doseCount === null || doseCount === undefined || doseCount < 0 || availableCounts.length === 0
        }
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
