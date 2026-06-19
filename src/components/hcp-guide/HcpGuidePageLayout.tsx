'use client';

import { useCallback, useState, type ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { HcpGuideBilingualOptions, HcpGuideMetaKey, HcpGuideTocItem } from '@/components/hcp-guide/types';

type HcpGuidePageLayoutProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead?: string;
  emoji?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
  heroClassName?: string;
  pageClassName?: string;
  heroBelowTitle?: ReactNode;
  arHeroBelowTitle?: ReactNode;
  /** Enable EN/العربية tabs with RTL layout on the Arabic tab. */
  bilingual?: HcpGuideBilingualOptions | true;
  languageTabs?: ReactNode;
  articleLocale?: HcpGuideLocale;
  toc?: HcpGuideTocItem[];
  children: ReactNode;
  belowMain?: ReactNode;
};

function normalizeBilingualOptions(
  bilingual?: HcpGuideBilingualOptions | true,
): HcpGuideBilingualOptions | null {
  if (!bilingual) return null;
  if (bilingual === true) return {};
  return bilingual;
}

export default function HcpGuidePageLayout({
  metaKey,
  title,
  lead,
  emoji = '💉',
  tag = 'HCP · Special populations',
  backHref = '/hcp-special-populations',
  backLabel = '← Special Populations',
  heroClassName = '',
  pageClassName = '',
  heroBelowTitle,
  arHeroBelowTitle,
  bilingual,
  languageTabs,
  articleLocale = 'en',
  toc,
  children,
  belowMain,
}: HcpGuidePageLayoutProps) {
  const meta = ARTICLE_META[metaKey];
  const bilingualOptions = normalizeBilingualOptions(bilingual);
  const isControlled = languageTabs != null;
  const [internalLocale, setInternalLocale] = useState<HcpGuideLocale>('en');

  const locale: HcpGuideLocale = isControlled ? articleLocale : bilingualOptions ? internalLocale : articleLocale;
  const isArabic = locale === 'ar';

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setInternalLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const activeLanguageTabs =
    languageTabs ??
    (bilingualOptions ? <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} /> : null);

  const displayTitle = isArabic ? (bilingualOptions?.arTitle ?? title) : title;
  const displayLead = isArabic ? (bilingualOptions?.arLead ?? lead) : lead;
  const displayToc = isArabic ? (bilingualOptions?.arToc ?? toc) : toc;

  const mirrorEnglish = isArabic && bilingualOptions != null && bilingualOptions.arabicChildren == null;
  const mainClassSuffix = `${isArabic ? ' hcp-guide-main--ar' : ''}${mirrorEnglish ? ' hcp-guide-main--mirror-en' : ''}`;

  const mainContent =
    isArabic && bilingualOptions
      ? (bilingualOptions.arabicChildren ?? (
          <HcpGuideArabicPanel contentOnly showTranslationDisclaimer={false}>
            {children}
          </HcpGuideArabicPanel>
        ))
      : children;

  return (
    <div
      className={`min-h-screen hcp-cancer-page hcp-guide-page ${pageClassName}`.trim()}
      dir="ltr"
      lang="en"
    >
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">(Egyptian Edition)</p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card vax-article-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-cancer-inner hcp-guide-inner">
            <Link href={backHref} className="hcp-cancer-back hcp-guide-back">
              {backLabel}
            </Link>

            {activeLanguageTabs ? (
              <div className="hcp-guide-lang-tabs-wrap">{activeLanguageTabs}</div>
            ) : null}

            <header
              className={`hcp-cancer-hero hcp-guide-hero ${heroClassName}${isArabic ? ' hcp-guide-hero--ar' : ''}`.trim()}
              dir={isArabic ? 'rtl' : 'ltr'}
              lang={locale}
            >
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                {emoji}
              </span>
              <span className="hcp-cancer-hero-tag">{tag}</span>
              <h1 className="hcp-cancer-hero-title" dir={isArabic ? 'rtl' : undefined}>
                {displayTitle}
              </h1>
              {heroBelowTitle || arHeroBelowTitle ? (
                <div className="hcp-guide-hero-search">
                  {isArabic ? (arHeroBelowTitle ?? heroBelowTitle) : heroBelowTitle}
                </div>
              ) : null}
              {displayLead ? (
                <p className="hcp-cancer-hero-lead" dir={isArabic ? 'rtl' : undefined}>
                  {displayLead}
                </p>
              ) : null}
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale={isArabic ? 'ar' : 'en'} align="center" compact />
              </div>
            </header>

            {displayToc && displayToc.length > 0 ? (
              <div
                className={`hcp-cancer-body hcp-guide-body${isArabic ? ' hcp-guide-body--ar' : ''}`.trim()}
              >
                <nav
                  className="hcp-cancer-nav hcp-guide-nav"
                  aria-label={isArabic ? 'في هذه الصفحة' : 'On this page'}
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  <p className="hcp-cancer-nav-label">{isArabic ? 'في هذه الصفحة' : 'On this page'}</p>
                  <div className="hcp-cancer-nav-panel">
                    <ul className="hcp-cancer-nav-scroll">
                      {displayToc.map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            dir={isArabic ? 'rtl' : undefined}
                            lang={isArabic ? 'ar' : undefined}
                          >
                            <span className="hcp-cancer-nav-num">{index + 1}</span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className={`hcp-cancer-main hcp-guide-main${mainClassSuffix}`}>{mainContent}</div>
              </div>
            ) : (
              <div className={`hcp-guide-main hcp-guide-main--full${mainClassSuffix}`}>{mainContent}</div>
            )}

            {belowMain}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
