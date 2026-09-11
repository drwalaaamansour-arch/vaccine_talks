'use client';

import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { type WizardStepProps } from '@/types/wizard-types';

export function MedicalConditionStep({
  t,
  language,
  state,
  setState,
  goToStep,
}: WizardStepProps) {
  const handleYes = () => {
    setState((current) => ({
      ...current,
      medicalCondition: { hasCondition: true, showStopMessage: true },
      currentStep: 'results',
    }));
  };

  const handleNo = () => {
    setState((current) => ({
      ...current,
      medicalCondition: { hasCondition: false, showStopMessage: false },
      currentStep: 'routineVaccines',
    }));
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('step2Title')}
    >
      <div className="vaccine-checker-choice-row">
        <button type="button" onClick={handleYes} className="btn btn-outline vaccine-checker-choice">
          {language === 'ar' ? t('step2YesAr') : t('step2Yes')}
        </button>
        <button type="button" onClick={handleNo} className="btn btn-outline vaccine-checker-choice">
          {language === 'ar' ? t('step2NoAr') : t('step2No')}
        </button>
      </div>
    </WizardStepLayout>
  );
}
