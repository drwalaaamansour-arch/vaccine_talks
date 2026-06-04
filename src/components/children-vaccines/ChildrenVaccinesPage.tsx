'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  CHILDREN_VACCINE_AGE_COUNT,
  CHILDREN_VACCINE_AGES,
  CHILDREN_VACCINES_HERO,
} from '@/data/children-vaccines-hub';
import { ARTICLE_META } from '@/lib/article-meta';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesAge(item: (typeof CHILDREN_VACCINE_AGES)[number], query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.ar.includes(query.trim()) ||
    item.en.toLowerCase().includes(q) ||
    item.keywords.includes(q)
  );
}

export default function ChildrenVaccinesPage() {
  const meta = ARTICLE_META.childrenVaccines;
  const [query, setQuery] = useState('');

  const filteredAges = useMemo(
    () => CHILDREN_VACCINE_AGES.filter((item) => matchesAge(item, query)),
    [query],
  );

  return (
    <div className="min-h-screen children-vax-page vax-hub-page" dir="rtl">
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

      <section className="about-section children-vax-section">
        <div className="about-elegant-card vax-hub-elegant children-vax-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner children-vax-inner">
            <Link href="/non-hcp" className="children-vax-back">
              ← العودة لغير العاملين بالمجال الطبي
            </Link>

            <header className="vax-hub-hero children-vax-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{CHILDREN_VACCINES_HERO.tag}</span>
              <h2 className="vax-hub-hero-title">{CHILDREN_VACCINES_HERO.titleAr}</h2>
              <p className="vax-hub-hero-subtitle hub-en" lang="en">
                {CHILDREN_VACCINES_HERO.titleEn}
              </p>
              <p className="vax-hub-hero-lead">{CHILDREN_VACCINES_HERO.leadAr}</p>
              <p className="children-vax-hero-lead-en hub-en" lang="en">
                {CHILDREN_VACCINES_HERO.leadEn}
              </p>
              <div className="hub-hero-meta">
                <ArticleMetaDate {...meta} locale="ar" align="center" compact />
              </div>
            </header>

            <div className="vax-hub-stats vax-hub-stats--two children-vax-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{CHILDREN_VACCINE_AGE_COUNT}</span>
                <span className="vax-hub-stat-label">مراحل عمرية · Age milestones</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">🇪🇬</span>
                <span className="vax-hub-stat-label">جدول مصر · Egypt schedule</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="دور على العمر… Search by age…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search children vaccine ages"
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
                {filteredAges.length > 0
                  ? `عرض ${filteredAges.length} نتيجة · Showing ${filteredAges.length} result${filteredAges.length === 1 ? '' : 's'}`
                  : 'مفيش نتائج · No matches — جرّب كلمة تانية'}
              </p>
            ) : null}

            {filteredAges.length === 0 ? (
              <p className="children-vax-empty">مفيش نتائج — جرّب عمر تاني أو امسح البحث.</p>
            ) : (
              <div className="children-vax-age-grid">
                {filteredAges.map((item) => (
                  <Link key={item.href} href={item.href} className="vax-hub-tile vax-hub-tile--photo">
                    <div className="vax-hub-tile-photo-wrap">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        width={400}
                        height={300}
                        className="vax-hub-tile-photo"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                      />
                    </div>
                    <div className="vax-hub-tile-body">
                      <span className="vax-hub-tile-ar">{item.ar}</span>
                      <span className="vax-hub-tile-en hub-en" lang="en">
                        {item.en}
                      </span>
                    </div>
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
