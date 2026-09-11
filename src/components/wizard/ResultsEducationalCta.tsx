import Link from 'next/link';

type ResultsEducationalCtaProps = {
  t: (key: string) => string;
};

function EducationalIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export function ResultsEducationalCta({ t }: ResultsEducationalCtaProps) {
  return (
    <aside
      className="vaccine-checker-results-edu-cta vaccine-checker-no-print"
      aria-labelledby="vaccine-checker-edu-cta-heading"
    >
      <div className="vaccine-checker-results-edu-cta-inner">
        <span className="vaccine-checker-results-edu-cta-icon" aria-hidden>
          <EducationalIcon />
        </span>
        <h2 id="vaccine-checker-edu-cta-heading" className="vaccine-checker-results-edu-cta-heading">
          {t('resultsLearnMoreHeading')}
        </h2>
        <p className="vaccine-checker-results-edu-cta-text">{t('resultsLearnMoreText')}</p>
        <Link href="/vaccinations" className="vaccine-checker-results-edu-cta-link">
          {t('resultsLearnMoreButton')}
        </Link>
      </div>
    </aside>
  );
}
