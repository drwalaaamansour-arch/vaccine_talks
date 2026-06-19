'use client';

export type HcpGuideLocale = 'en' | 'ar';

export default function HcpGuideLanguageTabs({
  locale,
  onChange,
}: {
  locale: HcpGuideLocale;
  onChange: (locale: HcpGuideLocale) => void;
}) {
  return (
    <div className="hcp-guide-lang-tabs" role="tablist" aria-label="Article language">
      <button
        type="button"
        role="tab"
        id="hcp-guide-lang-tab-en"
        aria-selected={locale === 'en'}
        aria-controls="hcp-guide-lang-panel-en"
        className={`hcp-guide-lang-tab${locale === 'en' ? ' hcp-guide-lang-tab--active' : ''}`}
        onClick={() => onChange('en')}
      >
        English
      </button>
      <button
        type="button"
        role="tab"
        id="hcp-guide-lang-tab-ar"
        aria-selected={locale === 'ar'}
        aria-controls="hcp-guide-lang-panel-ar"
        className={`hcp-guide-lang-tab${locale === 'ar' ? ' hcp-guide-lang-tab--active' : ''}`}
        onClick={() => onChange('ar')}
      >
        العربية
      </button>
    </div>
  );
}
