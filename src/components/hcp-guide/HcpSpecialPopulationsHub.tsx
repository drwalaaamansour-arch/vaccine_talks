'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicDisclaimer from '@/components/hcp-guide/HcpGuideArabicDisclaimer';
import { HCP_SPECIAL_POPULATIONS_HUB_COPY } from '@/data/hcp-special-populations-hub';
import { ARTICLE_META } from '@/lib/article-meta';

export default function HcpSpecialPopulationsHub() {
  const meta = ARTICLE_META.hcpSpecialPopulationsHub;
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const isArabic = locale === 'ar';
  const copy = isArabic ? HCP_SPECIAL_POPULATIONS_HUB_COPY.ar : HCP_SPECIAL_POPULATIONS_HUB_COPY.en;

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`min-h-screen hcp-cancer-page hcp-guide-page hcp-sp-hub-page${isArabic ? ' hcp-sp-hub-page--ar' : ''}`}
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
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
            <div className="hcp-guide-lang-tabs-wrap hcp-sp-hub-lang-tabs">
              <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
            </div>

            <header
              className={`hcp-cancer-hero hcp-guide-hero hcp-sp-hub-hero${isArabic ? ' hcp-guide-hero--ar' : ''}`}
            >
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                🏥
              </span>
              <span className="hcp-cancer-hero-tag">{copy.tag}</span>
              <h1 className="hcp-cancer-hero-title">{copy.title}</h1>
              {copy.intro.map((line) => (
                <p key={line} className="hcp-cancer-hero-lead">
                  {line}
                </p>
              ))}
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale={isArabic ? 'ar' : 'en'} align="center" compact />
              </div>
            </header>

            <div className="hcp-sp-hub-grid hcp-sp-hub-grid--flat">
              {copy.items.map((item) => (
                <Link key={item.href} href={item.href} className="hcp-sp-hub-card">
                  {item.emoji ? (
                    <span className="hcp-sp-hub-card-emoji" aria-hidden>
                      {item.emoji}
                    </span>
                  ) : null}
                  <span className="hcp-sp-hub-card-label">
                    {isArabic ? item.labelAr : item.labelEn}
                  </span>
                  <span className="hcp-sp-hub-card-cta">{copy.openGuide}</span>
                </Link>
              ))}
            </div>

            {isArabic ? <HcpGuideArabicDisclaimer className="hcp-sp-hub-ar-disclaimer" /> : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
