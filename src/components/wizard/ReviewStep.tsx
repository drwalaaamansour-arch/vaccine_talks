'use client';

import { useEffect } from 'react';
import { BrandName } from '@/components/wizard/BrandName';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { getProductDisplayLabel } from '@/lib/vaccine-checker/result-presentation';
import { getRoutineHistorySummary, shouldShowMmrDateStep } from '@/lib/vaccine-checker/wizard-flow';
import { isVaccineRecordComplete } from '@/lib/vaccine-checker/input-adapter';
import { getAllDoseDatesFromRecord } from '@/lib/vaccine-checker/dose-date-storage';
import { formatEnglishAge } from '@/translations/format-english-age';
import { formatRoutineVisitList } from '@/translations/routine-visit-labels';
import { getVaccineCategoryLabel } from '@/translations/vaccine-category-labels';
import { type WizardStepProps } from '@/types/wizard-types';

export function ReviewStep({
  t,
  language,
  state,
  goToStep,
  restart,
}: WizardStepProps) {
  const calcAge = state.calculatedAge
    ? language === 'ar'
      ? `${state.calculatedAge.years} سنة، ${state.calculatedAge.months} أشهر، ${state.calculatedAge.days} أيام`
      : formatEnglishAge(state.calculatedAge)
    : language === 'ar'
      ? 'غير متوفر'
      : 'Not available';

  const routineSummary = getRoutineHistorySummary(state);
  const receivedVisitLabels = formatRoutineVisitList(
    routineSummary.receivedVisits,
    language,
    t
  );
  const notReceivedVisitLabels = formatRoutineVisitList(
    routineSummary.notReceivedVisits,
    language,
    t
  );

  const mmrDateParts: string[] = [];
  if (state.mmrDate) {
    mmrDateParts.push(`${state.mmrDate.day}/${state.mmrDate.month}/${state.mmrDate.year}`);
  }
  if (state.mmrDose2Date) {
    mmrDateParts.push(`${state.mmrDose2Date.day}/${state.mmrDose2Date.month}/${state.mmrDose2Date.year}`);
  }
  const mmrDateText =
    mmrDateParts.length > 0
      ? mmrDateParts.join(', ')
      : language === 'ar'
        ? 'لم يتم الإدخال'
        : 'Not entered';
  const showMmrSection = mmrDateParts.length > 0;

  useEffect(() => {
    if (shouldShowMmrDateStep(state)) {
      goToStep('mmrDate');
    }
  }, [goToStep, state]);

  const proceedToResults = () => {
    if (shouldShowMmrDateStep(state)) {
      goToStep('mmrDate');
      return;
    }
    goToStep('results');
  };

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={t('reviewTitle')}
    >
      <div className="vaccine-checker-review">
        <section className="vaccine-checker-review-section">
          <p className="vaccine-checker-review-label">{t('childDOB')}</p>
          <p className="vaccine-checker-review-value">
            {state.dateOfBirth
              ? `${state.dateOfBirth.day}/${state.dateOfBirth.month}/${state.dateOfBirth.year}`
              : language === 'ar'
                ? 'لم يتم الإدخال'
                : 'Not entered'}
          </p>
          <p className="vaccine-checker-review-meta">{calcAge}</p>
        </section>

        <section className="vaccine-checker-review-section">
          <p className="vaccine-checker-review-label">{t('routineVaccinesStatus')}</p>
          {routineSummary.allReachedReceived ? (
            <p className="vaccine-checker-review-value">{t('reviewRoutineAllReceived')}</p>
          ) : (
            <>
              {routineSummary.receivedVisits.length > 0 && (
                <p className="vaccine-checker-review-meta">
                  {t('reviewRoutineVisitsReceived')} {receivedVisitLabels}
                </p>
              )}
              {routineSummary.notReceivedVisits.length > 0 && (
                <p className="vaccine-checker-review-meta">
                  {t('reviewRoutineVisitsNotReceived')} {notReceivedVisitLabels}
                </p>
              )}
            </>
          )}
        </section>

        {showMmrSection && (
        <section className="vaccine-checker-review-section">
          <p className="vaccine-checker-review-label">{t('mmrDates')}</p>
          <p className="vaccine-checker-review-value">{mmrDateText}</p>
        </section>
        )}

        <section className="vaccine-checker-review-section">
          <p className="vaccine-checker-review-label">{t('additionalVaccines')}</p>
          {state.additionalVaccinesHistoryAnswer === 'no' || state.additionalVaccines.length === 0 ? (
            <p className="vaccine-checker-review-meta">
              {language === 'ar' ? 'لا يوجد' : 'None'}
            </p>
          ) : (
            state.additionalVaccines
              .filter((vaccine) => isVaccineRecordComplete(vaccine))
              .map((vaccine, index) => {
                const doseDates = getAllDoseDatesFromRecord(vaccine);

                return (
                  <div key={`${vaccine.category}-${index}`} className="vaccine-checker-review-item">
                    <p className="vaccine-checker-review-value">
                      {getVaccineCategoryLabel(vaccine.category, language)}
                    </p>
                    <p className="vaccine-checker-review-meta">
                      {t('products')}:{' '}
                      {vaccine.product ? (
                        <BrandName label={getProductDisplayLabel(vaccine.product) ?? vaccine.product} />
                      ) : (
                        language === 'ar' ? 'غير محدد' : 'Not specified'
                      )}
                    </p>
                    <p className="vaccine-checker-review-meta">
                      {t('doses')}: {vaccine.numberOfDoses}
                    </p>
                    {doseDates.map((doseDate, doseIndex) => (
                      <p key={`${vaccine.category}-dose-${doseIndex}`} className="vaccine-checker-review-meta">
                        {t(`doseLabel_dose${doseIndex + 1}`)}:{' '}
                        {`${doseDate.day}/${doseDate.month}/${doseDate.year}`}
                      </p>
                    ))}
                  </div>
                );
              })
          )}
        </section>
      </div>

      <div className="vaccine-checker-review-actions">
        <button type="button" onClick={() => goToStep('dob')} className="btn btn-outline vaccine-checker-choice">
          {t('edit')}
        </button>
        <button type="button" onClick={restart} className="btn btn-outline vaccine-checker-choice">
          {language === 'ar' ? t('checkAnotherAr') : t('checkAnother')}
        </button>
      </div>

      <button type="button" onClick={proceedToResults} className="start-button vaccine-checker-primary-action">
        {t('next')}
      </button>
    </WizardStepLayout>
  );
}
