'use client';

import {
  getPreviousWizardStep,
  type Language,
} from '@/types/wizard-types';
import { WizardShell } from '@/components/WizardShell';
import { VaccineCheckerPageShell } from '@/components/wizard/VaccineCheckerPageShell';
import { IntroStep } from '@/components/wizard/IntroStep';
import { DOBStep } from '@/components/wizard/DOBStep';
import { MedicalConditionStep } from '@/components/wizard/MedicalConditionStep';
import { RoutineVaccinesStep } from '@/components/wizard/RoutineVaccinesStep';
import { MMRDateStep } from '@/components/wizard/MMRDateStep';
import { AdditionalVaccinesStep } from '@/components/wizard/AdditionalVaccinesStep';
import { ProductSelectionStep } from '@/components/wizard/ProductSelectionStep';
import { DoseCountStep } from '@/components/wizard/DoseCountStep';
import { LastDoseDateStep } from '@/components/wizard/LastDoseDateStep';
import { ReviewStep } from '@/components/wizard/ReviewStep';
import { ResultsStep } from '@/components/wizard/ResultsStep';

type VaccineCheckerProps = {
  initialLanguage?: Language;
};

function renderStep(context: Parameters<Parameters<typeof WizardShell>[0]['children']>[0]) {
  const stepProps = { ...context };

  switch (context.state.currentStep) {
    case 'intro':
      return <IntroStep {...stepProps} />;
    case 'dob':
      return <DOBStep {...stepProps} />;
    case 'medicalCondition':
      return <MedicalConditionStep {...stepProps} />;
    case 'routineVaccines':
      return <RoutineVaccinesStep {...stepProps} />;
    case 'mmrDate':
      return <MMRDateStep {...stepProps} />;
    case 'additionalVaccines':
      return <AdditionalVaccinesStep {...stepProps} />;
    case 'productSelection':
      return <ProductSelectionStep {...stepProps} />;
    case 'doseCount':
      return <DoseCountStep {...stepProps} />;
    case 'lastDoseDate':
      return <LastDoseDateStep {...stepProps} />;
    case 'review':
      return <ReviewStep {...stepProps} />;
    case 'results':
      return <ResultsStep {...stepProps} />;
    default:
      return <IntroStep {...stepProps} />;
  }
}

export default function VaccineChecker({ initialLanguage = 'en' }: VaccineCheckerProps) {
  return (
    <WizardShell initialLanguage={initialLanguage}>
      {(context) => {
        const previousStep = getPreviousWizardStep(context.state);

        return (
          <VaccineCheckerPageShell
            language={context.language}
            currentStep={context.state.currentStep}
            wizardState={context.state}
            t={context.t}
            showBack={previousStep !== null}
            onBack={previousStep ? () => context.goToStep(previousStep) : undefined}
          >
            {renderStep(context)}
          </VaccineCheckerPageShell>
        );
      }}
    </WizardShell>
  );
}
