'use client';

import { useState } from 'react';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { type WizardStepProps } from '@/types/wizard-types';

export function IntroStep({
  t,
  language,
  setLanguage,
  state,
  goToStep,
}: WizardStepProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange = (lang: typeof language) => {
    setSelectedLanguage(lang);
    setLanguage(lang);
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <div className="vaccine-checker-intro">
        <div className="vaccine-checker-language-options">
          <button
            type="button"
            onClick={() => handleLanguageChange('en')}
            className={`vaccine-checker-lang-option ${selectedLanguage === 'en' ? 'vaccine-checker-lang-option--selected' : ''}`}
            aria-pressed={selectedLanguage === 'en'}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => handleLanguageChange('ar')}
            className={`vaccine-checker-lang-option ${selectedLanguage === 'ar' ? 'vaccine-checker-lang-option--selected' : ''}`}
            aria-pressed={selectedLanguage === 'ar'}
          >
            العربية
          </button>
        </div>
      </div>

      <p className="vaccine-checker-disclaimer">{t('disclaimer')}</p>

      <button type="button" onClick={() => goToStep('dob')} className="start-button vaccine-checker-start-button">
        {t('startButton')}
      </button>
    </WizardStepLayout>
  );
}
