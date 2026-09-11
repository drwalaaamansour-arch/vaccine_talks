'use client';

import Header from '@/components/Header';
import { getWizardProgressPosition, isWizardProgressStep } from '@/lib/vaccine-checker/wizard-progress';
import {
  type Language,
  type TranslateFn,
  type WizardState,
  type WizardStepId,
} from '@/types/wizard-types';

type VaccineCheckerPageShellProps = {
  language: Language;
  currentStep: WizardStepId;
  wizardState: WizardState;
  t: TranslateFn;
  showBack: boolean;
  onBack?: () => void;
  children: React.ReactNode;
};

function WizardProgress({
  currentStep,
  language,
  wizardState,
}: {
  currentStep: WizardStepId;
  language: Language;
  wizardState: WizardState;
}) {
  if (!isWizardProgressStep(currentStep)) {
    return null;
  }

  const position = getWizardProgressPosition(wizardState);
  if (!position) {
    return null;
  }

  const progress = (position.current / position.total) * 100;

  return (
    <div className="vaccine-checker-progress">
      <div className="vaccine-checker-progress-track">
        <div className="vaccine-checker-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="vaccine-checker-progress-label">
        {language === 'ar'
          ? `الخطوة ${position.current} من ${position.total}`
          : `Step ${position.current} of ${position.total}`}
      </p>
    </div>
  );
}

export function VaccineCheckerPageShell({
  language,
  currentStep,
  wizardState,
  t,
  showBack,
  onBack,
  children,
}: VaccineCheckerPageShellProps) {
  return (
    <div
      className={`min-h-screen vaccine-checker-route${currentStep === 'results' ? ' vaccine-checker-route--results' : ''}`}
    >
      <Header />

      <main
        className="vaccine-checker-page"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        lang={language === 'ar' ? 'ar' : 'en'}
      >
        <section className="about-section vaccine-checker-section" aria-label={t('title')}>
          <div className="vaccine-checker-container">
            <WizardProgress
              currentStep={currentStep}
              language={language}
              wizardState={wizardState}
            />

            {showBack && onBack && (
              <button type="button" onClick={onBack} className="vaccine-checker-back">
                {t('prev')}
              </button>
            )}

            <div
              className={`about-elegant-card vaccine-checker-card${currentStep === 'intro' ? ' vaccine-checker-card--intro' : ''}${currentStep === 'results' ? ' vaccine-checker-card--results' : ''}`}
            >
              <div className="card-corner card-corner-tl" />
              <div className="card-corner card-corner-tr" />
              <div className="card-corner card-corner-bl" />
              <div className="card-corner card-corner-br" />

              <div className="vaccine-checker-card-content">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
