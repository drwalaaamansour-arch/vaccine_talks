'use client';

import { useCallback, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import { ARTICLE_META } from '@/lib/article-meta';
import { HCP_VACCINE_UI } from '@/data/hcp-vaccine-ui-copy';
import type { HcpGuideMetaKey, HcpGuideTocItem } from '@/components/hcp-guide/types';

type HcpVaccineProductLayoutProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead: string;
  emoji?: string;
  imageSrc?: string;
  imageAlt?: string;
  toc: HcpGuideTocItem[];
  arTitle?: string;
  arLead?: string;
  arToc?: HcpGuideTocItem[];
  arabicChildren?: ReactNode;
  children: ReactNode;
};

export default function HcpVaccineProductLayout({
  metaKey,
  title,
  lead,
  emoji = '💉',
  imageSrc,
  imageAlt,
  toc,
  arTitle,
  arLead,
  arToc,
  arabicChildren,
  children,
}: HcpVaccineProductLayoutProps) {
  const meta = ARTICLE_META[metaKey];
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const isArabic = locale === 'ar';
  const hasBilingual = Boolean(arTitle || arLead || arToc || arabicChildren);

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const ui = isArabic ? HCP_VACCINE_UI.ar : HCP_VACCINE_UI.en;
  const displayTitle = isArabic ? (arTitle ?? title) : title;
  const displayLead = isArabic ? (arLead ?? lead) : lead;
  const displayToc = isArabic ? (arToc ?? toc) : toc;

  const mirrorEnglish = isArabic && arabicChildren == null;
  const mainClassSuffix = `${isArabic ? ' hcp-guide-main--ar' : ''}${mirrorEnglish ? ' hcp-guide-main--mirror-en' : ''}`;

  const mainContent =
    isArabic && hasBilingual
      ? (arabicChildren ?? (
          <HcpGuideArabicPanel contentOnly showTranslationDisclaimer={false}>
            {children}
          </HcpGuideArabicPanel>
        ))
      : children;

  return (
    <div className="min-h-screen hcp-cancer-page hcp-guide-page hcp-vax-product-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card vax-article-elegant hcp-vax-product-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-cancer-inner hcp-guide-inner">
            <Link href="/hcp-vaccines-sera" className="hcp-cancer-back hcp-guide-back">
              {ui.back}
            </Link>

            {hasBilingual ? (
              <div className="hcp-guide-lang-tabs-wrap">
                <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
              </div>
            ) : null}

            <header
              className={`hcp-cancer-hero hcp-guide-hero hcp-vax-product-hero${isArabic ? ' hcp-guide-hero--ar' : ''}`}
              dir={isArabic ? 'rtl' : 'ltr'}
              lang={isArabic ? 'ar' : 'en'}
            >
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                {emoji}
              </span>
              <span className="hcp-cancer-hero-tag">{ui.tag}</span>
              <h1 className="hcp-cancer-hero-title" dir={isArabic ? 'rtl' : undefined}>
                {displayTitle}
              </h1>
              <p className="hcp-cancer-hero-lead" dir={isArabic ? 'rtl' : undefined}>
                {displayLead}
              </p>
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale={isArabic ? 'ar' : 'en'} align="center" compact />
              </div>
            </header>

            {imageSrc ? (
              <div className="hcp-vax-product-visual">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? displayTitle}
                  width={600}
                  height={400}
                  className="hcp-vax-product-img"
                  priority
                />
              </div>
            ) : null}

            <div className={`hcp-cancer-body hcp-guide-body${isArabic ? ' hcp-guide-body--ar' : ''}`}>
              <nav
                className="hcp-cancer-nav hcp-guide-nav"
                aria-label={ui.onThisPage}
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                <p className="hcp-cancer-nav-label">{ui.onThisPage}</p>
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
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
