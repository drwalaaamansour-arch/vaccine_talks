'use client';

import { type Language, type TranslateFn, type WizardStepId } from '@/types/wizard-types';

type WizardStepLayoutProps = {
  language: Language;
  currentStep: WizardStepId;
  t: TranslateFn;
  title?: string;
  subtitle?: string;
  contextLabel?: string;
  children: React.ReactNode;
};

export function WizardStepLayout({
  title,
  subtitle,
  contextLabel,
  children,
}: WizardStepLayoutProps) {
  return (
    <>
      {(contextLabel || title || subtitle) && (
        <header className="vaccine-checker-header">
          {contextLabel && <p className="vaccine-checker-help">{contextLabel}</p>}
          {title && <h1 className="vaccine-checker-title">{title}</h1>}
          {subtitle && <p className="vaccine-checker-subtitle">{subtitle}</p>}
        </header>
      )}

      <div className="vaccine-checker-body">{children}</div>
    </>
  );
}
