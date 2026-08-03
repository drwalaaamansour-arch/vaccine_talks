'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import {
  PUBLIC_VACCINATIONS,
  PUBLIC_VACCINATIONS_HUB_COPY,
} from '@/data/public-vaccinations-hub';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

export default function PublicVaccinationsHub() {
  const [locale, setLocale] = useState<HcpGuideLocale>('ar');
  const [query, setQuery] = useState('');
  const isArabic = locale === 'ar';
  const copy = isArabic ? PUBLIC_VACCINATIONS_HUB_COPY.ar : PUBLIC_VACCINATIONS_HUB_COPY.en;

  const filteredVaccines = useMemo(() => {
    const q = normalizeSearch(query);
    if (!q) return PUBLIC_VACCINATIONS;

    return PUBLIC_VACCINATIONS.filter(
      (vax) =>
        vax.ar.includes(query.trim()) ||
        vax.en.toLowerCase().includes(q) ||
        vax.keywords.includes(q),
    );
  }, [query]);

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`min-h-screen vax-hub-page${isArabic ? ' vax-hub-page--ar' : ' vax-hub-page--en'}`}
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
        <div className="about-elegant-card vax-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner">
            <div className="hcp-guide-lang-tabs-wrap vax-hub-lang-tabs">
              <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
            </div>

            <header
              className={`vax-hub-hero${isArabic ? ' vax-hub-hero--ar' : ' vax-hub-hero--en'}`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{copy.tag}</span>
              <h2 className="vax-hub-hero-title">{copy.title}</h2>
              <p className="vax-hub-hero-lead">{copy.lead}</p>
            </header>

            <div className="vax-hub-search-wrap" dir="ltr">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder={copy.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={copy.searchAriaLabel}
                dir={isArabic ? 'rtl' : 'ltr'}
              />
              {query && (
                <button
                  type="button"
                  className="vax-hub-search-clear"
                  onClick={() => setQuery('')}
                  aria-label={copy.searchClearAriaLabel}
                >
                  ✕
                </button>
              )}
            </div>

            {query && (
              <p className="vax-hub-search-meta" dir={isArabic ? 'rtl' : 'ltr'}>
                {filteredVaccines.length > 0
                  ? copy.searchShowing(filteredVaccines.length)
                  : copy.searchNoMatches}
              </p>
            )}

            <div className="vax-hub-grid">
              {filteredVaccines.map((vax) => (
                <Link key={vax.href} href={vax.href} className="vax-hub-tile">
                  <span className="vax-hub-tile-emoji" aria-hidden>
                    {vax.emoji}
                  </span>
                  <span className="vax-hub-tile-label">
                    {isArabic ? vax.ar : vax.en}
                  </span>
                  <span className="vax-hub-tile-arrow" aria-hidden>
                    {isArabic ? '←' : '→'}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
