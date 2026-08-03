'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicDisclaimer from '@/components/hcp-guide/HcpGuideArabicDisclaimer';
import {
  HCP_VACCINES_SERA_HUB_COPY,
  HCP_VACCINES_SERA_SORTED,
  type HcpVaccinesSeraHubItem,
} from '@/data/hcp-vaccines-sera-hub';

const VACCINES_IMAGE = '/vaccines.jpg';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesQuery(item: HcpVaccinesSeraHubItem, query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.titleEn.toLowerCase().includes(q) ||
    item.titleAr.includes(q) ||
    item.subtitleEn.toLowerCase().includes(q) ||
    item.subtitleAr.includes(q) ||
    item.excerptEn.toLowerCase().includes(q) ||
    item.excerptAr.includes(q) ||
    item.keywords.includes(q)
  );
}

export default function HcpVaccinesSeraHub() {
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const [query, setQuery] = useState('');
  const isArabic = locale === 'ar';
  const copy = isArabic ? HCP_VACCINES_SERA_HUB_COPY.ar : HCP_VACCINES_SERA_HUB_COPY.en;

  const visibleProducts = useMemo(
    () => HCP_VACCINES_SERA_SORTED.filter((item) => matchesQuery(item, query)),
    [query],
  );

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`min-h-screen hcp-vs-hub-page${isArabic ? ' hcp-vs-hub-page--ar' : ''}`}
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
        <div className="about-elegant-card hcp-vs-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-vs-hub-inner">
            <Link href="/hcp-resources" className="hcp-vs-back">
              {copy.back}
            </Link>

            <div className="hcp-guide-lang-tabs-wrap hcp-vs-hub-lang-tabs">
              <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
            </div>

            <header
              className={`vax-hub-hero hcp-vs-hub-hero${isArabic ? ' hcp-guide-hero--ar' : ''}`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{copy.hero.tag}</span>
              <h1 className="vax-hub-hero-title">{copy.hero.title}</h1>
              <p
                className="vax-hub-hero-subtitle hub-en"
                lang={isArabic ? 'ar' : 'en'}
                style={{ fontStyle: 'normal', opacity: 0.95 }}
              >
                {copy.hero.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{copy.hero.lead}</p>
            </header>

            <div className="hcp-vs-welcome">
              <div className="hcp-vs-welcome-visual">
                <Image
                  src={VACCINES_IMAGE}
                  alt={isArabic ? 'اللقاحات والأمصال في مصر' : 'Vaccines and sera in Egypt'}
                  width={520}
                  height={360}
                  className="hcp-vs-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-vs-welcome-copy">
                {copy.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-vs-welcome-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-vs-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{HCP_VACCINES_SERA_SORTED.length}</span>
                <span className="vax-hub-stat-label">{copy.stats.products}</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">A–Z</span>
                <span className="vax-hub-stat-label">{copy.stats.alphabetical}</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap" dir="ltr">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder={copy.search.placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={copy.search.ariaLabel}
                dir="ltr"
              />
              {query ? (
                <button
                  type="button"
                  className="vax-hub-search-clear"
                  onClick={() => setQuery('')}
                  aria-label={copy.search.clearAriaLabel}
                >
                  ✕
                </button>
              ) : null}
            </div>

            {query ? (
              <p className="vax-hub-search-meta" dir={isArabic ? 'rtl' : 'ltr'}>
                {visibleProducts.length > 0
                  ? copy.search.showing(visibleProducts.length)
                  : copy.search.noMatches}
              </p>
            ) : null}

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">{copy.sectionTitle}</h2>
              <p className="hcp-res-sections-subtitle">
                {copy.sectionSubtitle(HCP_VACCINES_SERA_SORTED.length)}
              </p>
            </div>

            {visibleProducts.length === 0 ? (
              <p className="hcp-res-empty">{copy.search.empty}</p>
            ) : (
              <section className="hcp-vs-alpha-panel" aria-label={copy.gridAriaLabel}>
                <div className="hcp-vs-items-grid">
                  {visibleProducts.map((item) => (
                    <article key={item.href} className="hcp-res-item">
                      <div className="hcp-res-item-top hcp-vs-item-top">
                        <span className="hcp-vs-item-emoji" aria-hidden>
                          {item.emoji}
                        </span>
                        <div className="hcp-res-item-copy">
                          <h3 className="hcp-res-item-title">
                            {isArabic ? item.titleAr : item.titleEn}
                          </h3>
                          <p className="hcp-res-item-tag">
                            {isArabic ? item.subtitleAr : item.subtitleEn}
                          </p>
                          <p className="hcp-res-item-desc">
                            {isArabic ? item.excerptAr : item.excerptEn}
                          </p>
                        </div>
                      </div>
                      <Link href={item.href} className="hcp-res-btn">
                        {copy.openProduct(isArabic ? item.titleAr : item.titleEn)}
                        <span className="hcp-res-btn-arrow" aria-hidden>
                          {isArabic ? '←' : '→'}
                        </span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {isArabic ? <HcpGuideArabicDisclaimer className="hcp-vs-hub-ar-disclaimer" /> : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
