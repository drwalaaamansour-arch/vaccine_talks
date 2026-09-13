'use client';

import { useMemo, useState } from 'react';
import { BrandName } from '@/components/wizard/BrandName';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { parseDateParts, type WizardStepProps } from '@/types/wizard-types';
import {
  getActiveVaccineIndexForState,
  normalizeProductId,
} from '@/lib/vaccine-checker/input-adapter';
import { getNextStepAfterProductSelection, getReferenceDate } from '@/lib/vaccine-checker/wizard-flow';
import { getEligibleProductOptions } from '@/lib/vaccine-checker/product-options';
import { getVaccineHistoryStepLabel } from '@/translations/vaccine-history-labels';

export function ProductSelectionStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const today = getReferenceDate();
  const currentIndex = getActiveVaccineIndexForState(state, today);
  const currentVaccine = state.additionalVaccines[currentIndex];
  const category = currentVaccine?.category ?? 'rotavirus';

  const options = useMemo(() => {
    if (!state.dateOfBirth || !currentVaccine) {
      return [];
    }

    return getEligibleProductOptions(
      category,
      parseDateParts(state.dateOfBirth),
      currentVaccine
    );
  }, [category, currentVaccine, state.dateOfBirth]);

  const selectionContextKey = `${currentIndex}:${category}:${options.map((option) => option.value).join(',')}`;
  const [selectionState, setSelectionState] = useState<{
    key: string;
    value: string | null;
  }>({
    key: selectionContextKey,
    value: currentVaccine?.product ?? null,
  });

  const selectedProduct = useMemo(() => {
    const saved = currentVaccine?.product;
    const savedSelection =
      saved && options.some((option) => option.value === saved) ? saved : null;

    if (selectionState.key !== selectionContextKey) {
      return savedSelection;
    }

    if (
      selectionState.value &&
      options.some((option) => option.value === selectionState.value)
    ) {
      return selectionState.value;
    }

    return savedSelection;
  }, [currentVaccine?.product, options, selectionContextKey, selectionState]);

  const selectProduct = (product: string) => {
    setSelectionState({ key: selectionContextKey, value: product });
  };

  const continueHandler = () => {
    if (!selectedProduct || !currentVaccine) return;

    setState((current) => {
      const vaccines = [...current.additionalVaccines];
      vaccines[currentIndex] = {
        ...vaccines[currentIndex],
        product: normalizeProductId(selectedProduct),
      };

      return {
        ...current,
        additionalVaccines: vaccines,
        currentStep: getNextStepAfterProductSelection(
          { ...current, additionalVaccines: vaccines },
          currentIndex,
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
      title={getVaccineHistoryStepLabel('product', category, t)}
    >
      <div className="vaccine-checker-choice-row vaccine-checker-choice-row--stack">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => selectProduct(option.value)}
            className={`btn vaccine-checker-choice ${selectedProduct === option.value ? 'btn-primary' : 'btn-outline'}`}
          >
            {['dontKnow', 'other'].includes(option.value) ? (
              language === 'ar' ? option.labelAr : option.labelEn
            ) : (
              <BrandName label={option.labelEn} />
            )}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={continueHandler}
        disabled={!selectedProduct}
        className="start-button vaccine-checker-primary-action"
      >
        {t('continue')}
      </button>
    </WizardStepLayout>
  );
}
