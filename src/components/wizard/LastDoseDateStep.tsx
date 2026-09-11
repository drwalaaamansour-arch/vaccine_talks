'use client';

import { useEffect, useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { VaccineCheckerDateInput } from '@/components/wizard/VaccineCheckerDateInput';
import {
  buildDateParts,
  dateInputFromStored,
  emptyDateInput,
  isCompleteDateInput,
  parseDateInput,
  parseDateParts,
  type DateInputParts,
  type WizardStepProps,
} from '@/types/wizard-types';
import {
  categoryRequiresInfluenzaPrimingQuestion,
  getActiveVaccineIndex,
} from '@/lib/vaccine-checker/input-adapter';
import { applyDoseDatesToRecord, getDoseDateFromRecord } from '@/lib/vaccine-checker/dose-date-storage';
import { getNextStepAfterAdditionalVaccineHistory } from '@/lib/vaccine-checker/wizard-flow';
import {
  getDoseDateFieldLabel,
  getDoseDatesHeading,
  getVaccineHistoryStepLabel,
} from '@/translations/vaccine-history-labels';

function buildInitialDoseInputs(
  numberOfDoses: number,
  getStoredDate: (doseNumber: number) => ReturnType<typeof getDoseDateFromRecord>
): DateInputParts[] {
  return Array.from({ length: numberOfDoses }, (_, index) => {
    const stored = getStoredDate(index + 1);
    return stored ? dateInputFromStored(stored) : emptyDateInput();
  });
}

export function LastDoseDateStep({ t, language, state, setState }: WizardStepProps) {
  const currentIndex = getActiveVaccineIndex(state.additionalVaccines);
  const currentVaccine = state.additionalVaccines[currentIndex];
  const category = currentVaccine?.category ?? 'rotavirus';
  const numberOfDoses = currentVaccine?.numberOfDoses ?? 1;
  const doseInputContextKey = `${currentIndex}:${category}:${numberOfDoses}`;

  const [doseInputs, setDoseInputs] = useState<DateInputParts[]>(() =>
    currentVaccine
      ? buildInitialDoseInputs(numberOfDoses, (doseNumber) =>
          getDoseDateFromRecord(currentVaccine, doseNumber)
        )
      : [emptyDateInput()]
  );
  const [influenzaPrimingComplete, setInfluenzaPrimingComplete] = useState<boolean | null>(
    currentVaccine?.influenzaPrimingComplete ?? null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentVaccine) return;

    setDoseInputs(
      buildInitialDoseInputs(numberOfDoses, (doseNumber) =>
        getDoseDateFromRecord(currentVaccine, doseNumber)
      )
    );
    setInfluenzaPrimingComplete(currentVaccine.influenzaPrimingComplete ?? null);
    setError(null);
  }, [currentVaccine, doseInputContextKey, numberOfDoses]);

  const needsInfluenzaPriming =
    currentVaccine &&
    categoryRequiresInfluenzaPrimingQuestion(currentVaccine.category, currentVaccine.numberOfDoses);

  const dateLabels = {
    day: language === 'ar' ? 'اليوم' : 'Day',
    month: language === 'ar' ? 'الشهر' : 'Month',
    year: language === 'ar' ? 'السنة' : 'Year',
  };

  const activeDoseInputs = doseInputs.slice(0, numberOfDoses);
  const parsedDates = activeDoseInputs.map((input) => parseDateInput(input));
  const heading = getDoseDatesHeading(category, numberOfDoses, language, t);

  const isValid = useMemo(() => {
    if (!currentVaccine) return false;
    if (needsInfluenzaPriming && influenzaPrimingComplete === null) return false;

    const today = new Date();
    const dob = state.dateOfBirth ? parseDateParts(state.dateOfBirth) : null;
    let previousDate: Date | null = null;

    for (let index = 0; index < numberOfDoses; index++) {
      const input = activeDoseInputs[index];
      const parsed = parsedDates[index];
      if (!parsed || !isCompleteDateInput(input)) {
        return false;
      }

      const doseDate = parseDateParts(parsed);
      if (doseDate > today) return false;
      if (dob && doseDate < dob) return false;
      if (previousDate && doseDate < previousDate) return false;
      previousDate = doseDate;
    }

    return true;
  }, [
    activeDoseInputs,
    currentVaccine,
    influenzaPrimingComplete,
    needsInfluenzaPriming,
    numberOfDoses,
    parsedDates,
    state.dateOfBirth,
  ]);

  const updateDoseField = (doseIndex: number, field: keyof DateInputParts, value: string) => {
    setDoseInputs((current) =>
      current.map((input, index) =>
        index === doseIndex
          ? {
              ...input,
              [field]: value,
            }
          : input
      )
    );
    setError(null);
  };

  const continueHandler = () => {
    if (!currentVaccine || !isValid) return;

    const today = new Date();
    const dob = state.dateOfBirth ? parseDateParts(state.dateOfBirth) : null;
    let previousDate: Date | null = null;

    for (let index = 0; index < numberOfDoses; index++) {
      const parsed = parsedDates[index];
      if (!parsed || !isCompleteDateInput(activeDoseInputs[index])) {
        return;
      }

      const doseDate = parseDateParts(parsed);
      if (doseDate > today) {
        setError(t('doseDateFutureError'));
        return;
      }
      if (dob && doseDate < dob) {
        setError(t('doseDateBeforeDOBError'));
        return;
      }
      if (previousDate && doseDate < previousDate) {
        setError(t('doseDateOrderError'));
        return;
      }
      previousDate = doseDate;
    }

    setError(null);
    setState((current) => {
      const vaccines = [...current.additionalVaccines];
      const doseDates = parsedDates
        .map((parsed, index) =>
          parsed && isCompleteDateInput(activeDoseInputs[index]) ? buildDateParts(parsed) : null
        )
        .filter((value): value is NonNullable<typeof value> => value !== null);

      vaccines[currentIndex] = applyDoseDatesToRecord(
        {
          ...vaccines[currentIndex],
          influenzaPrimingComplete: needsInfluenzaPriming
            ? influenzaPrimingComplete ?? undefined
            : vaccines[currentIndex].influenzaPrimingComplete,
        },
        doseDates
      );

      return {
        ...current,
        additionalVaccines: vaccines,
        currentStep: getNextStepAfterAdditionalVaccineHistory({
          ...current,
          additionalVaccines: vaccines,
        }),
      };
    });
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      contextLabel={getVaccineHistoryStepLabel('context', category, t)}
      title={heading}
    >
      {activeDoseInputs.map((input, index) => (
        <VaccineCheckerDateInput
          key={`${category}-dose-${index + 1}`}
          idPrefix={`dose-${index + 1}`}
          language={language}
          groupLabel={getDoseDateFieldLabel(index + 1, t)}
          labels={dateLabels}
          value={input}
          onChange={(field, value) => updateDoseField(index, field, value)}
        />
      ))}

      {needsInfluenzaPriming && (
        <div className="vaccine-checker-choice-row vaccine-checker-choice-row--stack">
          <p className="vaccine-checker-field-label">
            {language === 'ar' ? t('influenzaPrimingQuestionAr') : t('influenzaPrimingQuestion')}
          </p>
          <button
            type="button"
            onClick={() => setInfluenzaPrimingComplete(true)}
            className={`btn vaccine-checker-choice ${influenzaPrimingComplete === true ? 'btn-primary' : 'btn-outline'}`}
          >
            {language === 'ar' ? t('step2YesAr') : t('step2Yes')}
          </button>
          <button
            type="button"
            onClick={() => setInfluenzaPrimingComplete(false)}
            className={`btn vaccine-checker-choice ${influenzaPrimingComplete === false ? 'btn-primary' : 'btn-outline'}`}
          >
            {language === 'ar' ? t('step2NoAr') : t('step2No')}
          </button>
        </div>
      )}

      {error && <p className="vaccine-checker-error">{error}</p>}

      <button
        type="button"
        onClick={continueHandler}
        disabled={!isValid}
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
