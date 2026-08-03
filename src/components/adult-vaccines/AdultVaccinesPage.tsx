'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import {
  ADULT_VACCINE_COUNT,
  ADULT_VACCINES,
  ADULT_VACCINES_HERO,
} from '@/data/adult-vaccines-hub';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesVaccine(item: (typeof ADULT_VACCINES)[number], query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.ar.includes(query.trim()) ||
    item.en.toLowerCase().includes(q) ||
    item.keywords.includes(q)
  );
}

export default function AdultVaccinesPage() {
  const [query, setQuery] = useState('');

  const filteredVaccines = useMemo(
    () => ADULT_VACCINES.filter((item) => matchesVaccine(item, query)),
    [query],
  );

  return (
    <div className="min-h-screen adult-vax-page vax-hub-page" dir="rtl">
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

      <section className="about-section adult-vax-section">
        <div className="about-elegant-card vax-hub-elegant adult-vax-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner adult-vax-inner">
            <Link href="/non-hcp" className="adult-vax-back">
              ← العودة لغير العاملين بالمجال الطبي
            </Link>

            <header className="vax-hub-hero adult-vax-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{ADULT_VACCINES_HERO.tag}</span>
              <h2 className="vax-hub-hero-title">{ADULT_VACCINES_HERO.titleAr}</h2>
              <p className="vax-hub-hero-subtitle hub-en" lang="en">
                {ADULT_VACCINES_HERO.titleEn}
              </p>
              <p className="vax-hub-hero-lead">{ADULT_VACCINES_HERO.leadAr}</p>
              <p className="adult-vax-hero-lead-en hub-en" lang="en">
                {ADULT_VACCINES_HERO.leadEn}
              </p>
            </header>

            <div className="vax-hub-stats vax-hub-stats--two adult-vax-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{ADULT_VACCINE_COUNT}</span>
                <span className="vax-hub-stat-label">لقاح للكبار · Adult vaccines</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">🇪🇬</span>
                <span className="vax-hub-stat-label">معلومات مصر · Egypt info</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="دور على لقاح… Search a vaccine…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search adult vaccines"
                dir="rtl"
              />
              {query ? (
                <button
                  type="button"
                  className="vax-hub-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>

            {query ? (
              <p className="vax-hub-search-meta">
                {filteredVaccines.length > 0
                  ? `عرض ${filteredVaccines.length} نتيجة · Showing ${filteredVaccines.length} result${filteredVaccines.length === 1 ? '' : 's'}`
                  : 'مفيش نتائج · No matches — جرّب كلمة تانية'}
              </p>
            ) : null}

            {filteredVaccines.length === 0 ? (
              <p className="adult-vax-empty">مفيش نتائج — جرّب اسم لقاح تاني أو امسح البحث.</p>
            ) : (
              <div className="vax-hub-grid adult-vax-grid">
                {filteredVaccines.map((item) => (
                  <Link key={item.href} href={item.href} className="vax-hub-tile">
                    <span className="vax-hub-tile-emoji" aria-hidden>
                      {item.emoji}
                    </span>
                    <span className="vax-hub-tile-ar">{item.ar}</span>
                    <span className="vax-hub-tile-en hub-en" lang="en">
                      {item.en}
                    </span>
                    <span className="vax-hub-tile-arrow" aria-hidden>
                      ←
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
