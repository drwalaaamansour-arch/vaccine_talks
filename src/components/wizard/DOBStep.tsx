'use client';

import { useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { VaccineCheckerDateInput } from '@/components/wizard/VaccineCheckerDateInput';
import { formatEnglishAge } from '@/translations/format-english-age';
import { applyDobStepSubmission } from '@/lib/vaccine-checker/wizard-dob-update';
import {
  buildDateParts,
  calculateAgeFromDate,
  dateInputFromStored,
  emptyDateInput,
  isCompleteDateInput,
  parseDateInput,
  parseDateParts,
  type DateInputParts,
  type WizardStepProps,
} from '@/types/wizard-types';

export function DOBStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const [dob, setDOB] = useState<DateInputParts>(
    state.dateOfBirth ? dateInputFromStored(state.dateOfBirth) : emptyDateInput()
  );
  const [error, setError] = useState<string | null>(null);

  const parsedDob = parseDateInput(dob);
  const age =
    parsedDob && isCompleteDateInput(dob) ? calculateAgeFromDate(parseDateParts(parsedDob)) : null;

  const updateField = (field: keyof DateInputParts, value: string) => {
    setDOB((current) => ({
      ...current,
      [field]: value,
    }));
    setError(null);
  };

  const handleSubmit = () => {
    if (!parsedDob || !isCompleteDateInput(dob)) return;

    const dobDate = parseDateParts(parsedDob);
    if (dobDate > new Date()) {
      setError(t('dobFutureError'));
      return;
    }

    const calculatedAge = calculateAgeFromDate(dobDate);
    if (!calculatedAge) return;

    setError(null);
    setState((current) =>
      applyDobStepSubmission(current, buildDateParts(parsedDob), calculatedAge)
    );
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('step1Title')}
      subtitle={t('step1Label')}
    >
      <VaccineCheckerDateInput
        idPrefix="dob"
        language={language}
        labels={{
          day: language === 'ar' ? 'اليوم' : 'Day',
          month: language === 'ar' ? 'الشهر' : 'Month',
          year: language === 'ar' ? 'السنة' : 'Year',
        }}
        value={dob}
        onChange={updateField}
      />

      {error && <p className="vaccine-checker-error">{error}</p>}

      {age && (
        <p className="vaccine-checker-age">
          {language === 'ar'
            ? t('ageFormatAr')
                .replace('{years}', String(age.years))
                .replace('{months}', String(age.months))
                .replace('{days}', String(age.days))
            : `Age: ${formatEnglishAge(age)}`}
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isCompleteDateInput(dob)}
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
