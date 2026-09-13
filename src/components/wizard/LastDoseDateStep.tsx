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
import { addYears } from '@/lib/vaccine-checker/date-utils';
import { applyDoseDatesToRecord, getDoseDateFromRecord } from '@/lib/vaccine-checker/dose-date-storage';
import { getNextStepAfterAdditionalVaccineHistory, getReferenceDate } from '@/lib/vaccine-checker/wizard-flow';
import { getWizardRequiredDoseDateCount } from '@/lib/vaccine-checker/teen-history-simplification';
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
  const today = getReferenceDate();
  const currentIndex = getActiveVaccineIndex(
    state.additionalVaccines,
    today,
    state.dateOfBirth
  );
  const currentVaccine = state.additionalVaccines[currentIndex];
  const category = currentVaccine?.category ?? 'rotavirus';
  const numberOfDoses = currentVaccine?.numberOfDoses ?? 1;
  const dob = state.dateOfBirth ? parseDateParts(state.dateOfBirth) : null;
  const requiredDateFields =
    currentVaccine && dob
      ? getWizardRequiredDoseDateCount(currentVaccine, dob, today)
      : numberOfDoses;
  const doseInputContextKey = `${currentIndex}:${category}:${requiredDateFields}`;

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
  const [firstDoseDateUnknown, setFirstDoseDateUnknown] = useState(
    currentVaccine?.firstDoseDateUnknown ?? false
  );
  const [secondDoseDateUnknown, setSecondDoseDateUnknown] = useState(
    currentVaccine?.secondDoseDateUnknown ?? false
  );
  const [error, setError] = useState<string | null>(null);
  const hpvEarliestFirstDose = dob && category === 'hpv' ? addYears(dob, 9) : null;

  useEffect(() => {
    if (!currentVaccine) return;

    setDoseInputs(
      buildInitialDoseInputs(numberOfDoses, (doseNumber) =>
        getDoseDateFromRecord(currentVaccine, doseNumber)
      )
    );
    setInfluenzaPrimingComplete(currentVaccine.influenzaPrimingComplete ?? null);
    setFirstDoseDateUnknown(currentVaccine.firstDoseDateUnknown ?? false);
    setSecondDoseDateUnknown(currentVaccine.secondDoseDateUnknown ?? false);
    setError(null);
  }, [currentVaccine, doseInputContextKey, numberOfDoses]);

  const needsInfluenzaPriming =
    currentVaccine &&
    categoryRequiresInfluenzaPrimingQuestion(
      currentVaccine.category,
      currentVaccine.numberOfDoses,
      dob,
      today
    );

  const dateLabels = {
    day: language === 'ar' ? 'اليوم' : 'Day',
    month: language === 'ar' ? 'الشهر' : 'Month',
    year: language === 'ar' ? 'السنة' : 'Year',
  };

  const activeDoseInputs = doseInputs.slice(0, requiredDateFields);
  const parsedDates = activeDoseInputs.map((input) => parseDateInput(input));
  const heading = getDoseDatesHeading(category, requiredDateFields, language, t);
  const allowUnknownFirstDose = category === 'hpv' && numberOfDoses >= 1;
  const allowUnknownSecondDose =
    category === 'hpv' && numberOfDoses >= 2 && !firstDoseDateUnknown;

  const isValid = useMemo(() => {
    if (!currentVaccine) return false;
    if (needsInfluenzaPriming && influenzaPrimingComplete === null) return false;
    if (allowUnknownFirstDose && firstDoseDateUnknown) return true;
    if (allowUnknownSecondDose && secondDoseDateUnknown) {
      const firstInput = activeDoseInputs[0];
      const firstParsed = parsedDates[0];
      if (!firstParsed || !isCompleteDateInput(firstInput)) {
        return false;
      }
      return true;
    }

    const validateToday = new Date();
    let previousDate: Date | null = null;

    for (let index = 0; index < requiredDateFields; index++) {
      const input = activeDoseInputs[index];
      const parsed = parsedDates[index];
      if (!parsed || !isCompleteDateInput(input)) {
        return false;
      }

      const doseDate = parseDateParts(parsed);
      if (doseDate > validateToday) return false;
      if (dob && doseDate < dob) return false;
      if (
        category === 'hpv' &&
        index === 0 &&
        hpvEarliestFirstDose &&
        doseDate < hpvEarliestFirstDose
      ) {
        return false;
      }
      if (previousDate && doseDate < previousDate) return false;
      previousDate = doseDate;
    }

    return true;
  }, [
    activeDoseInputs,
    allowUnknownFirstDose,
    allowUnknownSecondDose,
    category,
    currentVaccine,
    dob,
    firstDoseDateUnknown,
    hpvEarliestFirstDose,
    influenzaPrimingComplete,
    needsInfluenzaPriming,
    parsedDates,
    requiredDateFields,
    secondDoseDateUnknown,
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
    if (doseIndex === 0) {
      setFirstDoseDateUnknown(false);
    }
    if (doseIndex === 1) {
      setSecondDoseDateUnknown(false);
    }
    setError(null);
  };

  const continueHandler = () => {
    if (!currentVaccine || !isValid) return;

    if (allowUnknownFirstDose && firstDoseDateUnknown) {
      setState((current) => {
        const vaccines = [...current.additionalVaccines];
        vaccines[currentIndex] = {
          ...vaccines[currentIndex],
          firstDoseDateUnknown: true,
          dose1Date: null,
          dose2Date: null,
          dose3Date: null,
          dose4Date: null,
          doseDates: [],
          firstDoseDate: null,
          lastDoseDate: null,
        };

        return {
          ...current,
          additionalVaccines: vaccines,
          currentStep: getNextStepAfterAdditionalVaccineHistory(
            { ...current, additionalVaccines: vaccines },
            today
          ),
        };
      });
      return;
    }

    if (allowUnknownSecondDose && secondDoseDateUnknown) {
      const firstParsed = parsedDates[0];
      if (!firstParsed || !isCompleteDateInput(activeDoseInputs[0])) {
        return;
      }
      const firstDoseDate = parseDateParts(firstParsed);
      if (hpvEarliestFirstDose && firstDoseDate < hpvEarliestFirstDose) {
        setError(language === 'ar' ? t('hpvFirstDoseBeforeAge9Ar') : t('hpvFirstDoseBeforeAge9'));
        return;
      }

      setState((current) => {
        const vaccines = [...current.additionalVaccines];
        const doseDates = [buildDateParts(firstParsed)];

        vaccines[currentIndex] = applyDoseDatesToRecord(
          {
            ...vaccines[currentIndex],
            firstDoseDateUnknown: false,
            secondDoseDateUnknown: true,
            influenzaPrimingComplete: needsInfluenzaPriming
              ? influenzaPrimingComplete ?? undefined
              : vaccines[currentIndex].influenzaPrimingComplete,
          },
          doseDates
        );

        return {
          ...current,
          additionalVaccines: vaccines,
          currentStep: getNextStepAfterAdditionalVaccineHistory(
            { ...current, additionalVaccines: vaccines },
            today
          ),
        };
      });
      return;
    }

    const validateToday = new Date();
    let previousDate: Date | null = null;

    for (let index = 0; index < requiredDateFields; index++) {
      const parsed = parsedDates[index];
      if (!parsed || !isCompleteDateInput(activeDoseInputs[index])) {
        return;
      }

      const doseDate = parseDateParts(parsed);
      if (doseDate > validateToday) {
        setError(t('doseDateFutureError'));
        return;
      }
      if (dob && doseDate < dob) {
        setError(t('doseDateBeforeDOBError'));
        return;
      }
      if (
        category === 'hpv' &&
        index === 0 &&
        hpvEarliestFirstDose &&
        doseDate < hpvEarliestFirstDose
      ) {
        setError(language === 'ar' ? t('hpvFirstDoseBeforeAge9Ar') : t('hpvFirstDoseBeforeAge9'));
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
        .slice(0, requiredDateFields)
        .map((parsed, index) =>
          parsed && isCompleteDateInput(activeDoseInputs[index]) ? buildDateParts(parsed) : null
        )
        .filter((value): value is NonNullable<typeof value> => value !== null);

      vaccines[currentIndex] = applyDoseDatesToRecord(
        {
          ...vaccines[currentIndex],
          firstDoseDateUnknown: false,
          secondDoseDateUnknown: false,
          influenzaPrimingComplete: needsInfluenzaPriming
            ? influenzaPrimingComplete ?? undefined
            : vaccines[currentIndex].influenzaPrimingComplete,
        },
        doseDates
      );

      return {
        ...current,
        additionalVaccines: vaccines,
        currentStep: getNextStepAfterAdditionalVaccineHistory(
          {
            ...current,
            additionalVaccines: vaccines,
          },
          today
        ),
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

      {allowUnknownFirstDose && (
        <button
          type="button"
          onClick={() => {
            setFirstDoseDateUnknown(true);
            setSecondDoseDateUnknown(false);
            setError(null);
          }}
          className={`btn vaccine-checker-choice ${firstDoseDateUnknown ? 'btn-primary' : 'btn-outline'}`}
        >
          {language === 'ar' ? t('doseDateUnknownAr') : t('doseDateUnknown')}
        </button>
      )}

      {allowUnknownSecondDose && (
        <button
          type="button"
          onClick={() => {
            setSecondDoseDateUnknown(true);
            setError(null);
          }}
          className={`btn vaccine-checker-choice ${secondDoseDateUnknown ? 'btn-primary' : 'btn-outline'}`}
        >
          {language === 'ar' ? t('hpvSecondDoseDateUnknownAr') : t('hpvSecondDoseDateUnknown')}
        </button>
      )}

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
