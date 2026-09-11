'use client';

import { useMemo, useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import {
  getEligibleAdditionalVaccineCategories,
  getNextStepAfterAdditionalVaccines,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  mergeSelectedAdditionalVaccineRecords,
} from '@/lib/vaccine-checker/wizard-history';
import {
  type AdditionalVaccineCategory,
  type WizardStepProps,
} from '@/types/wizard-types';

const additionalVaccineCategoryLabels: Record<
  AdditionalVaccineCategory,
  { nameAr: string; nameEn: string }
> = {
  rotavirus: { nameAr: 'روتا', nameEn: 'Rotavirus' },
  pneumococcal: { nameAr: 'المكورات الرئوية (PCV)', nameEn: 'Pneumococcal (PCV)' },
  meningococcalACWY: { nameAr: 'السحائي ACWY', nameEn: 'Meningococcal ACWY' },
  meningococcalB: { nameAr: 'السحائي B', nameEn: 'Meningococcal B' },
  varicella: { nameAr: 'الجديري المائي', nameEn: 'Varicella' },
  hepatitisA: { nameAr: 'التهاب الكبد A', nameEn: 'Hepatitis A' },
  influenza: { nameAr: 'الإنفلونزا', nameEn: 'Influenza' },
  hpv: { nameAr: 'فيروس الورم الحليمي البشري (HPV)', nameEn: 'HPV' },
};

type AdditionalHistoryPhase = 'yesNo' | 'selection';

function resolveInitialPhase(state: WizardStepProps['state']): AdditionalHistoryPhase {
  if (state.additionalVaccinesHistoryAnswer === 'yes') {
    return 'selection';
  }

  if (state.additionalVaccines.length > 0) {
    return 'selection';
  }

  return 'yesNo';
}

export function AdditionalVaccinesStep({
  t,
  language,
  state,
  setState,
}: WizardStepProps) {
  const eligibleCategories = useMemo(
    () => getEligibleAdditionalVaccineCategories(state),
    [state]
  );

  const [phase, setPhase] = useState<AdditionalHistoryPhase>(() => resolveInitialPhase(state));
  const [selectedCategories, setSelectedCategories] = useState<AdditionalVaccineCategory[]>(() =>
    state.additionalVaccines
      .map((record) => record.category)
      .filter((category) => eligibleCategories.includes(category))
  );

  const handleYes = () => {
    setPhase('selection');
    setState((current) => ({
      ...current,
      additionalVaccinesHistoryAnswer: 'yes',
    }));
  };

  const handleNo = () => {
    setState((current) => ({
      ...current,
      additionalVaccinesHistoryAnswer: 'no',
      additionalVaccines: [],
      currentStep: getNextStepAfterAdditionalVaccines({ ...current, additionalVaccines: [] }),
    }));
  };

  const handleCategoryToggle = (key: AdditionalVaccineCategory) => {
    setSelectedCategories((current) =>
      current.includes(key) ? current.filter((category) => category !== key) : [...current, key]
    );
  };

  const continueHandler = () => {
    if (selectedCategories.length === 0) return;

    setState((current) => {
      const additionalVaccines = mergeSelectedAdditionalVaccineRecords(
        current.additionalVaccines,
        selectedCategories
      );
      const nextState = {
        ...current,
        additionalVaccinesHistoryAnswer: 'yes' as const,
        additionalVaccines,
      };

      return {
        ...nextState,
        currentStep: getNextStepAfterAdditionalVaccines(nextState),
      };
    });
  };

  if (eligibleCategories.length === 0) {
    return null;
  }

  if (phase === 'yesNo') {
    return (
      <WizardStepLayout
        language={language}
        currentStep={state.currentStep}
        t={t}
        title={t('step4Title')}
      >
        <div className="vaccine-checker-choice-row vaccine-checker-choice-row--stack">
          <button type="button" onClick={handleYes} className="btn btn-outline vaccine-checker-choice">
            {language === 'ar' ? t('step4YesAr') : t('step4Yes')}
          </button>
          <button type="button" onClick={handleNo} className="btn btn-outline vaccine-checker-choice">
            {language === 'ar' ? t('step4NoAr') : t('step4No')}
          </button>
        </div>
      </WizardStepLayout>
    );
  }

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('additionalVaccinesTitle')}
      subtitle={language === 'ar' ? t('step4LabelAr') : undefined}
    >
      <div className="vaccine-checker-list">
        {eligibleCategories.map((key) => {
          const category = additionalVaccineCategoryLabels[key];
          const selected = selectedCategories.includes(key);

          return (
            <button
              key={key}
              type="button"
              onClick={() => handleCategoryToggle(key)}
              className={`vaccine-checker-list-item ${selected ? 'vaccine-checker-list-item--selected' : ''}`}
              aria-pressed={selected}
            >
              <span>{language === 'ar' ? category.nameAr : category.nameEn}</span>
              <span className="vaccine-checker-list-mark">{selected ? '✓' : ''}</span>
            </button>
          );
        })}
      </div>

      {selectedCategories.length === 0 && (
        <p className="vaccine-checker-help">
          {language === 'ar'
            ? 'حدد تطعيم واحد على الأقل، أو ارجع واختر لا'
            : 'Select at least one vaccine, or go back and choose No'}
        </p>
      )}

      <div className="vaccine-checker-actions">
        <button
          type="button"
          onClick={continueHandler}
          disabled={selectedCategories.length === 0}
          className="start-button vaccine-checker-primary-action"
        >
          {t('continue')}
        </button>
        <button type="button" onClick={() => setPhase('yesNo')} className="vaccine-checker-link-button">
          {language === 'ar' ? t('step4NoAr') : t('step4No')}
        </button>
      </div>
    </WizardStepLayout>
  );
}
