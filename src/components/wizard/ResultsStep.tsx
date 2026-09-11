'use client';

import { useMemo } from 'react';
import { BrandName } from '@/components/wizard/BrandName';
import { ResultsActions } from '@/components/wizard/ResultsActions';
import { ResultsEducationalCta } from '@/components/wizard/ResultsEducationalCta';
import { WizardStepLayout } from '@/components/wizard/WizardStepLayout';
import { toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { formatEnglishAge } from '@/translations/format-english-age';
import { type WizardStepProps } from '@/types/wizard-types';
import {
  buildResultsShareText,
  type ResultsShareSection,
} from '@/lib/vaccine-checker/result-share';
import { formatShareDate } from '@/lib/vaccine-checker/result-share-format';
import {
  calculateVaccineRecommendations,
  getStatusTranslationKey,
  wizardStateToCheckerInput,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import {
  dedupeNeedsReviewItems,
  filterImportantNotesForDisplay,
  filterRecommendationsForResultsDisplay,
  getCardExplanation,
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  getDisplayCardNoteKeys,
  getDisplayCardNoteParams,
  getProductDisplayLabel,
  getRecommendationCategoryLabel,
  isRoutineBcgPrerequisite,
  isRoutineHexRecommendation,
  shouldHideDoseLabelForTimingDisplay,
  shouldShowDoseLabelOnCard,
  shouldShowStatusOnCard,
  type ResultsSectionKind,
} from '@/lib/vaccine-checker/result-presentation';
import { VACCINE_RESULT_CARD_CLASS } from '@/components/wizard/vaccine-result-card-styles';

function formatDate(isoDate: string | undefined, language: 'en' | 'ar'): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  if (language === 'ar') {
    return `${day}/${month}/${year}`;
  }
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
}

function formatTimingDisplayLine(
  line: { key: string; params: Record<string, string> },
  language: 'en' | 'ar',
  t: (key: string, params?: Record<string, string>) => string
): string {
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(line.params)) {
    if (key === 'doseLabelKey') {
      params.doseLabel = t(value);
      continue;
    }

    if (key === 'date' || key.endsWith('Date')) {
      params[key] = formatDate(value, language);
      continue;
    }

    params[key] = value;
  }

  return t(line.key, params);
}

function formatConditionalNextDoseNote(
  item: VaccineRecommendation,
  language: 'en' | 'ar',
  t: (key: string, params?: Record<string, string>) => string
): string {
  const labelKey = getConditionalNextDoseTranslationKey(item);
  const params = getConditionalNextDoseTranslationParams(
    item,
    (isoDate) => formatDate(isoDate, language),
    (doseLabelKey) => t(doseLabelKey)
  );

  return t(labelKey, params);
}

function RecommendationCard({
  item,
  t,
  language,
  section,
  referenceDate,
  checkerInput,
}: {
  item: VaccineRecommendation;
  t: (key: string, params?: Record<string, string>) => string;
  language: 'en' | 'ar';
  section: ResultsSectionKind;
  referenceDate: Date;
  checkerInput: NonNullable<ReturnType<typeof wizardStateToCheckerInput>>;
}) {
  const categoryLabel = getRecommendationCategoryLabel(item, language, t);
  const productLabel = getProductDisplayLabel(item.product);
  const doseLabel = t(item.doseLabelKey);
  const statusLabel = t(getStatusTranslationKey(item.status));
  const showStatus = shouldShowStatusOnCard(section, item.status);
  const timingLines = item.conditionalNextDose
    ? []
    : getTimingDisplayLines(item, referenceDate);
  const timingLineKeys = timingLines.map((line) => line.key);
  const showDoseLabel =
    shouldShowDoseLabelOnCard(section, item.doseLabelKey) &&
    !shouldHideDoseLabelForTimingDisplay(item, timingLineKeys);
  const explanation = getCardExplanation(item, t, checkerInput);
  const isNeedsReview = section === 'needsReview';
  const cardNotes = getDisplayCardNoteKeys(item, checkerInput);
  const showInlineNotes = !isNeedsReview && cardNotes.length > 0;

  return (
    <article className={VACCINE_RESULT_CARD_CLASS}>
      <p className="vaccine-checker-review-label">{categoryLabel}</p>
      {productLabel && (
        <p className="vaccine-checker-review-meta">
          <BrandName label={productLabel} />
        </p>
      )}
      {showDoseLabel && <p className="vaccine-checker-review-value">{doseLabel}</p>}
      {showStatus && <p className="vaccine-checker-help">{statusLabel}</p>}
      {timingLines.map((line, index) => (
        <p key={`${line.key}-${index}`} className="vaccine-checker-help">
          {formatTimingDisplayLine(line, language, t)}
        </p>
      ))}
      {item.conditionalNextDose && (
        <p className="vaccine-checker-help">{formatConditionalNextDoseNote(item, language, t)}</p>
      )}
      {isNeedsReview && explanation && <p className="vaccine-checker-help">{explanation}</p>}
      {showInlineNotes &&
        cardNotes.map((noteKey) => (
          <p key={noteKey} className="vaccine-checker-help">
            {t(
              noteKey,
              getDisplayCardNoteParams(noteKey, item, checkerInput, (isoDate) =>
                formatDate(isoDate, language)
              )
            )}
          </p>
        ))}
      {item.historicalRecommendedDate && (
        <p className="vaccine-checker-help">
          {t('note_hexRoutineBoosterHistoricalDate', {
            date: formatDate(item.historicalRecommendedDate, language),
          })}
        </p>
      )}
      {section === 'ageLimitPassed' && item.reasonKey && (
        <p className="vaccine-checker-help">{t(item.reasonKey)}</p>
      )}
      {item.latestDate && item.status === 'age-limit-passed' && section !== 'ageLimitPassed' && (
        <p className="vaccine-checker-help">
          {t('resultLatestDate')}: {formatDate(item.latestDate, language)}
        </p>
      )}
    </article>
  );
}

function ResultsSection({
  title,
  items,
  section,
  t,
  language,
  referenceDate,
  checkerInput,
}: {
  title: string;
  items: VaccineRecommendation[];
  section: ResultsSectionKind;
  t: (key: string, params?: Record<string, string>) => string;
  language: 'en' | 'ar';
  referenceDate: Date;
  checkerInput: NonNullable<ReturnType<typeof wizardStateToCheckerInput>>;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="vaccine-checker-results-section">
      <h2 className="vaccine-checker-results-heading">{title}</h2>
      {items.map((item) => (
        <RecommendationCard
          key={item.id}
          item={item}
          t={t}
          language={language}
          section={section}
          referenceDate={referenceDate}
          checkerInput={checkerInput}
        />
      ))}
    </section>
  );
}

export function ResultsStep({
  t,
  language,
  state,
  restart,
}: WizardStepProps) {
  const isMedicalStop = state.medicalCondition.showStopMessage;

  const checkerInput = useMemo(() => wizardStateToCheckerInput(state), [state]);

  const results = useMemo(() => {
    if (!checkerInput) return null;
    return calculateVaccineRecommendations(checkerInput);
  }, [checkerInput]);

  const referenceDate = checkerInput?.referenceDate ?? new Date();

  const needsReviewItems = useMemo(
    () =>
      filterRecommendationsForResultsDisplay(
        dedupeNeedsReviewItems(results?.needsReview ?? []).filter(
          (item) => !isRoutineBcgPrerequisite(item)
        )
      ),
    [results?.needsReview]
  );

  const displayedDueNow = useMemo(
    () => filterRecommendationsForResultsDisplay(results?.dueNow ?? []),
    [results?.dueNow]
  );
  const displayedEligibleNow = useMemo(
    () => filterRecommendationsForResultsDisplay(results?.eligibleNow ?? []),
    [results?.eligibleNow]
  );
  const displayedUpcoming = useMemo(
    () => filterRecommendationsForResultsDisplay(results?.upcoming ?? []),
    [results?.upcoming]
  );
  const displayedCompleted = useMemo(
    () => filterRecommendationsForResultsDisplay(results?.completed ?? []),
    [results?.completed]
  );
  const displayedAgeLimitPassed = useMemo(
    () => filterRecommendationsForResultsDisplay(results?.ageLimitPassed ?? []),
    [results?.ageLimitPassed]
  );

  const routineBcgPrerequisite = useMemo(
    () => (results?.needsReview ?? []).find((item) => isRoutineBcgPrerequisite(item)) ?? null,
    [results?.needsReview]
  );

  const importantNotes = useMemo(() => {
    if (!results) {
      return [];
    }

    const allRecommendations = [
      ...displayedDueNow,
      ...displayedEligibleNow,
      ...displayedUpcoming,
      ...displayedAgeLimitPassed,
      ...displayedCompleted,
      ...needsReviewItems,
    ];

    return filterImportantNotesForDisplay(
      results.importantNotes,
      allRecommendations,
      checkerInput
    ).filter((noteKey) => t(noteKey).length > 0);
  }, [
    checkerInput,
    displayedAgeLimitPassed,
    displayedCompleted,
    displayedDueNow,
    displayedEligibleNow,
    displayedUpcoming,
    needsReviewItems,
    results,
    t,
  ]);

  const childDobFormatted = useMemo(() => {
    if (!state.dateOfBirth) return '';
    const { day, month, year } = state.dateOfBirth;
    return language === 'ar' ? `${day}/${month}/${year}` : `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
  }, [language, state.dateOfBirth]);

  const childAgeFormatted = useMemo(() => {
    if (!state.calculatedAge) return '';
    if (language === 'ar') {
      return `${state.calculatedAge.years} سنة، ${state.calculatedAge.months} أشهر، ${state.calculatedAge.days} أيام`;
    }
    return formatEnglishAge(state.calculatedAge);
  }, [language, state.calculatedAge]);

  const calculationDateFormatted = useMemo(
    () => formatShareDate(toIsoDate(referenceDate), language),
    [language, referenceDate]
  );

  const shareSections = useMemo((): ResultsShareSection[] => {
    return [
      { titleKey: 'dueNow', section: 'dueNow', items: displayedDueNow },
      { titleKey: 'eligibleNow', section: 'eligibleNow', items: displayedEligibleNow },
      { titleKey: 'upcoming', section: 'upcoming', items: displayedUpcoming },
      { titleKey: 'completed', section: 'completed', items: displayedCompleted },
      { titleKey: 'needsReview', section: 'needsReview', items: needsReviewItems },
      { titleKey: 'ageLimitPassed', section: 'ageLimitPassed', items: displayedAgeLimitPassed },
    ];
  }, [
    displayedAgeLimitPassed,
    displayedCompleted,
    displayedDueNow,
    displayedEligibleNow,
    displayedUpcoming,
    needsReviewItems,
  ]);

  const shareExtraNotes = useMemo(() => {
    const notes: string[] = [];
    if (routineBcgPrerequisite) {
      notes.push(`${t('routineCatchUpBcgLabel')}: ${t('note_bcgTuberculinRequired')}`);
    }
    if (results?.routineCatchUpAssessment?.opv.showHealthOfficeNote) {
      notes.push(`${t('routineCatchUpOpvLabel')}: ${t('note_opvHealthOfficeReferral')}`);
    }
    return notes;
  }, [results?.routineCatchUpAssessment?.opv.showHealthOfficeNote, routineBcgPrerequisite, t]);

  const shareText = useMemo(() => {
    if (!checkerInput) return '';
    return buildResultsShareText(
      {
        language,
        referenceDate,
        childDobFormatted,
        childAgeFormatted,
        calculationDateFormatted,
        sections: shareSections,
        importantNoteKeys: importantNotes,
        extraNotes: shareExtraNotes,
      },
      checkerInput,
      t
    );
  }, [
    calculationDateFormatted,
    checkerInput,
    childAgeFormatted,
    childDobFormatted,
    importantNotes,
    language,
    referenceDate,
    shareExtraNotes,
    shareSections,
    t,
  ]);

  return (
    <WizardStepLayout
      language={language}
      currentStep={state.currentStep}
      t={t}
      title={isMedicalStop ? (language === 'ar' ? 'معلومة مهمة' : 'Important information') : t('resultsTitle')}
    >
      {isMedicalStop ? (
        <div className="vaccine-checker-stop-message">
          <p>{language === 'ar' ? t('step2StopMessageAr') : t('step2StopMessage')}</p>
          <button type="button" onClick={restart} className="start-button vaccine-checker-primary-action">
            {language === 'ar' ? t('step2RestartAr') : t('step2Restart')}
          </button>
        </div>
      ) : (
        <>
          <div id="vaccine-checker-print-area" className="vaccine-checker-print-area">
            <div className="vaccine-checker-results-meta">
              <p className="vaccine-checker-results-meta-brand">{t('resultsPrintHeading')}</p>
              {childDobFormatted && (
                <p className="vaccine-checker-results-meta-line">
                  <span className="vaccine-checker-review-label">{t('childDOB')}</span>
                  {' '}
                  {childDobFormatted}
                </p>
              )}
              {childAgeFormatted && (
                <p className="vaccine-checker-results-meta-line">
                  <span className="vaccine-checker-review-label">{t('calculatedAge')}</span>
                  {' '}
                  {childAgeFormatted}
                </p>
              )}
              <p className="vaccine-checker-results-meta-line">
                <span className="vaccine-checker-review-label">{t('calculationDateLabel')}</span>
                {' '}
                {calculationDateFormatted}
              </p>
            </div>

            <div className="vaccine-checker-results-grid">
            {routineBcgPrerequisite && (
              <section className="vaccine-checker-results-section">
                <h2 className="vaccine-checker-results-heading">
                  {t('resultsRoutineBcgPrerequisiteTitle')}
                </h2>
                <article className={VACCINE_RESULT_CARD_CLASS}>
                  <p className="vaccine-checker-review-label">{t('routineCatchUpBcgLabel')}</p>
                  <p className="vaccine-checker-help">{t('note_bcgTuberculinRequired')}</p>
                </article>
              </section>
            )}

            {results?.routineCatchUpAssessment?.opv.showHealthOfficeNote && (
              <section className="vaccine-checker-results-section">
                <h2 className="vaccine-checker-results-heading">{t('resultsRoutineOpvTitle')}</h2>
                <article className={VACCINE_RESULT_CARD_CLASS}>
                  <p className="vaccine-checker-review-label">{t('routineCatchUpOpvLabel')}</p>
                  <p className="vaccine-checker-help">{t('note_opvHealthOfficeReferral')}</p>
                </article>
              </section>
            )}

            {checkerInput && (
              <>
                <ResultsSection
                  title={t('dueNow')}
                  items={displayedDueNow}
                  section="dueNow"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />

                <ResultsSection
                  title={t('eligibleNow')}
                  items={displayedEligibleNow}
                  section="eligibleNow"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />

                <ResultsSection
                  title={t('upcoming')}
                  items={displayedUpcoming}
                  section="upcoming"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />

                <ResultsSection
                  title={t('completed')}
                  items={displayedCompleted}
                  section="completed"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />

                <ResultsSection
                  title={t('needsReview')}
                  items={needsReviewItems}
                  section="needsReview"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />

                <ResultsSection
                  title={t('ageLimitPassed')}
                  items={displayedAgeLimitPassed}
                  section="ageLimitPassed"
                  t={t}
                  language={language}
                  referenceDate={referenceDate}
                  checkerInput={checkerInput}
                />
              </>
            )}

            {importantNotes.length > 0 && (
              <section className="vaccine-checker-results-section">
                <h2 className="vaccine-checker-results-heading">{t('importantNotes')}</h2>
                <div className={VACCINE_RESULT_CARD_CLASS}>
                  {importantNotes.map((noteKey) => (
                    <p key={noteKey} className="vaccine-checker-results-copy">
                      {t(noteKey)}
                    </p>
                  ))}
                </div>
              </section>
            )}
            </div>

            <ResultsEducationalCta t={t} />

            <div className="vaccine-checker-disclaimer-box vaccine-checker-print-disclaimer">
              <p>{language === 'ar' ? t('fullDisclaimerAr') : t('fullDisclaimer')}</p>
            </div>
          </div>

          <div className="vaccine-checker-results-footer vaccine-checker-no-print">
            {checkerInput && (
              <ResultsActions
                currentStep={state.currentStep}
                shareTitle={t('shareResultTitle')}
                shareText={shareText}
                t={t}
              />
            )}

            <button type="button" onClick={restart} className="start-button vaccine-checker-primary-action">
              {language === 'ar' ? t('checkAnotherAr') : t('checkAnother')}
            </button>
          </div>
        </>
      )}
    </WizardStepLayout>
  );
}
