'use client';

import { useState } from 'react';
import { printResults, shareResultsText } from '@/lib/vaccine-checker/result-share-actions';
import { shouldShowResultsActionButtons } from '@/lib/vaccine-checker/result-share';
import { type WizardStepId } from '@/types/wizard-types';

type ResultsActionsProps = {
  currentStep: WizardStepId;
  shareTitle: string;
  shareText: string;
  t: (key: string) => string;
};

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 16V4" />
      <path d="m8 8 4-4 4 4" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v8H6z" />
    </svg>
  );
}

export function ResultsActions({
  currentStep,
  shareTitle,
  shareText,
  t,
}: ResultsActionsProps) {
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  if (!shouldShowResultsActionButtons(currentStep)) {
    return null;
  }

  const handleShare = async () => {
    setShareFeedback(null);
    const outcome = await shareResultsText({
      title: shareTitle,
      text: shareText,
    });

    if (outcome === 'copied') {
      setShareFeedback(t('shareResultCopied'));
    }
  };

  const handlePrint = () => {
    printResults();
  };

  const shareLabel = t('shareResult');
  const printLabel = t('printResult');

  return (
    <div className="vaccine-checker-results-actions vaccine-checker-no-print">
      <button
        type="button"
        onClick={handleShare}
        className="btn btn-outline vaccine-checker-results-action"
        aria-label={shareLabel}
      >
        <ShareIcon />
        <span>{shareLabel}</span>
      </button>
      <button
        type="button"
        onClick={handlePrint}
        className="btn btn-outline vaccine-checker-results-action"
        aria-label={printLabel}
      >
        <PrintIcon />
        <span>{printLabel}</span>
      </button>
      {shareFeedback && (
        <p className="vaccine-checker-share-feedback" role="status" aria-live="polite">
          {shareFeedback}
        </p>
      )}
    </div>
  );
}
