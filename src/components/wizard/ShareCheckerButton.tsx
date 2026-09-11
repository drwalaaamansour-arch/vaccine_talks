'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  buildVaccineCheckerShareUrl,
  shareVaccineChecker,
} from '@/lib/vaccine-checker/share-checker';
import { resolveSiteUiLanguage } from '@/lib/site-ui-messages';
import { createTranslator, translateKey } from '@/translations/translate';
import { type Language, type TranslateFn } from '@/types/wizard-types';

type ShareCheckerButtonProps = {
  t?: TranslateFn;
  bilingualLabel?: boolean;
  appearance?: 'default' | 'link';
  className?: string;
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

export function ShareCheckerButton({
  t: externalT,
  bilingualLabel = false,
  appearance = 'default',
  className,
}: ShareCheckerButtonProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    setLanguage(resolveSiteUiLanguage(document.documentElement.lang));
  }, []);

  const t = useMemo(
    () => externalT ?? createTranslator(language),
    [externalT, language]
  );

  const label = t('shareChecker');
  const ariaLabel = bilingualLabel
    ? `${translateKey('en', 'shareChecker')} / ${translateKey('ar', 'shareChecker')}`
    : label;

  const handleShareChecker = async () => {
    setFeedback(null);
    const checkerUrl = buildVaccineCheckerShareUrl(window.location.origin);
    const outcome = await shareVaccineChecker({
      title: document.title,
      text: t('shareCheckerText'),
      url: checkerUrl,
    });

    if (outcome === 'copied') {
      setFeedback(t('shareCheckerCopied'));
    }
  };

  const rootClassName = [
    appearance === 'link' ? 'home-vaccine-checker-share-control' : 'vaccine-checker-share-checker',
    'vaccine-checker-no-print',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClassName =
    appearance === 'link'
      ? 'home-vaccine-checker-share-link'
      : 'btn btn-outline vaccine-checker-share-checker-button';

  const visibleLabel =
    appearance === 'link'
      ? language === 'ar'
        ? translateKey('ar', 'shareChecker')
        : translateKey('en', 'shareChecker')
      : label;

  return (
    <div className={rootClassName}>
      <button
        type="button"
        onClick={() => void handleShareChecker()}
        className={buttonClassName}
        aria-label={ariaLabel}
      >
        <ShareIcon />
        {bilingualLabel ? (
          <>
            <span lang="en">{translateKey('en', 'shareChecker')}</span>
            <span className="vaccine-checker-cta-action-sep" aria-hidden>
              {' '}
              /{' '}
            </span>
            <span lang="ar" dir="rtl">
              {translateKey('ar', 'shareChecker')}
            </span>
          </>
        ) : (
          <span lang={language === 'ar' ? 'ar' : 'en'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {visibleLabel}
          </span>
        )}
      </button>
      {feedback && (
        <p
          className={
            appearance === 'link'
              ? 'home-vaccine-checker-share-feedback'
              : 'vaccine-checker-share-checker-feedback'
          }
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
