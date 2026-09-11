'use client';

import { useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { VaccineCheckerDateInput } from '@/components/wizard/VaccineCheckerDateInput';
import {
  getMmrDateCollectionContext,
  getMmrDateHelpKey,
  getMmrDateTitleKey,
  validateMmrDateInputParts,
} from '@/lib/vaccine-checker/mmr-date-validation';
import {
  getNextStepAfterMmrDate,
  getReferenceDate,
  shouldCollectMmrDose1Date,
  shouldCollectMmrDose2Date,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  buildDateParts,
  dateInputFromStored,
  emptyDateInput,
  parseDateParts,
  type DateInputParts,
  type WizardStepProps,
} from '@/types/wizard-types';

export function MMRDateStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const asOfDate = getReferenceDate();
  const collectionContext = getMmrDateCollectionContext(state, asOfDate);
  const collectDose1 = shouldCollectMmrDose1Date(state, asOfDate);
  const collectDose2 = shouldCollectMmrDose2Date(state, asOfDate);

  const [mmrDate, setMMRDate] = useState<DateInputParts>(
    state.mmrDate ? dateInputFromStored(state.mmrDate) : emptyDateInput()
  );
  const [mmrDose2Date, setMmrDose2Date] = useState<DateInputParts>(
    state.mmrDose2Date ? dateInputFromStored(state.mmrDose2Date) : emptyDateInput()
  );
  const [error, setError] = useState<string | null>(null);

  const dob = state.dateOfBirth ? parseDateParts(state.dateOfBirth) : null;

  const dose1Validation = useMemo(
    () => validateMmrDateInputParts(mmrDate, dob, asOfDate, collectionContext, t),
    [mmrDate, dob, asOfDate, collectionContext, t]
  );

  const dose2Validation = useMemo(
    () => validateMmrDateInputParts(mmrDose2Date, dob, asOfDate, collectionContext, t),
    [mmrDose2Date, dob, asOfDate, collectionContext, t]
  );

  const isValid =
    (!collectDose1 || dose1Validation.valid) && (!collectDose2 || dose2Validation.valid);

  const title = t(getMmrDateTitleKey(collectionContext, language));
  const help = t(getMmrDateHelpKey(collectionContext));

  const updateDose1Field = (field: keyof DateInputParts, value: string) => {
    setMMRDate((current) => ({ ...current, [field]: value }));
    setError(null);
  };

  const updateDose2Field = (field: keyof DateInputParts, value: string) => {
    setMmrDose2Date((current) => ({ ...current, [field]: value }));
    setError(null);
  };

  const continueHandler = () => {
    if (collectDose1) {
      const result = validateMmrDateInputParts(mmrDate, dob, asOfDate, collectionContext, t);
      if (!result.valid) {
        setError(result.error);
        return;
      }
    }

    if (collectDose2) {
      const result = validateMmrDateInputParts(mmrDose2Date, dob, asOfDate, collectionContext, t);
      if (!result.valid) {
        setError(result.error);
        return;
      }
    }

    setError(null);
    setState((current) => ({
      ...current,
      mmrDate:
        collectDose1 && dose1Validation.parsed
          ? buildDateParts(dose1Validation.parsed)
          : current.mmrDate,
      mmrDose2Date:
        collectDose2 && dose2Validation.parsed
          ? buildDateParts(dose2Validation.parsed)
          : current.mmrDose2Date,
      currentStep: getNextStepAfterMmrDate(current),
    }));
  };

  const dateLabels = {
    day: language === 'ar' ? 'اليوم' : 'Day',
    month: language === 'ar' ? 'الشهر' : 'Month',
    year: language === 'ar' ? 'السنة' : 'Year',
  };

  const activeDateInput = collectDose2 ? mmrDose2Date : mmrDate;
  const updateActiveField = collectDose2 ? updateDose2Field : updateDose1Field;
  const inputIdPrefix = collectDose2 ? 'mmr-dose2' : 'mmr-dose1';

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={title}
      subtitle={help}
    >
      {(collectDose1 || collectDose2) && (
        <div className="vaccine-checker-field-group">
          <p className="vaccine-checker-field-label">{title}</p>
          <p className="vaccine-checker-review-value">{help}</p>
          <VaccineCheckerDateInput
            idPrefix={inputIdPrefix}
            language={language}
            labels={dateLabels}
            value={activeDateInput}
            onChange={updateActiveField}
          />
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
