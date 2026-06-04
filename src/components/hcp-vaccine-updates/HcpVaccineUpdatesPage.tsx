'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import VaccineUpdatesSections from '@/components/hcp-vaccine-updates/VaccineUpdatesSections';
import {
  HCP_VACCINE_UPDATE_INDEX,
  HCP_VACCINE_UPDATES_COUNT,
  HCP_VACCINE_UPDATES_HERO,
  HCP_VACCINE_UPDATES_INTRO,
} from '@/data/hcp-vaccine-updates-hub';
import { ARTICLE_META } from '@/lib/article-meta';

const UPDATES_IMAGE = '/updates.jpg';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesQuery(
  item: { title: string; summary: string; keywords: string; badge: string },
  query: string,
) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.title.toLowerCase().includes(q) ||
    item.summary.toLowerCase().includes(q) ||
    item.keywords.includes(q) ||
    item.badge.toLowerCase().includes(q)
  );
}

export default function HcpVaccineUpdatesPage() {
  const meta = ARTICLE_META.hcpVaccineUpdates;
  const [query, setQuery] = useState('');

  const visibleIndex = useMemo(
    () => HCP_VACCINE_UPDATE_INDEX.filter((item) => matchesQuery(item, query)),
    [query],
  );

  const visibleIds = visibleIndex.map((item) => item.id);

  return (
    <div className="min-h-screen hcp-vu-hub-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card hcp-vu-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-vu-hub-inner">
            <Link href="/hcp-resources" className="hcp-vu-back">
              ← Back to HCP Resources
            </Link>

            <header className="vax-hub-hero hcp-vu-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{HCP_VACCINE_UPDATES_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{HCP_VACCINE_UPDATES_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {HCP_VACCINE_UPDATES_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{HCP_VACCINE_UPDATES_HERO.lead}</p>
              <div className="hub-hero-meta" style={{ marginTop: '0.85rem' }}>
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="hcp-vu-welcome">
              <div className="hcp-vu-welcome-visual">
                <Image
                  src={UPDATES_IMAGE}
                  alt="Global vaccine updates"
                  width={520}
                  height={360}
                  className="hcp-vu-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-vu-welcome-copy">
                {HCP_VACCINE_UPDATES_INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-vu-welcome-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-vu-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{HCP_VACCINE_UPDATES_COUNT}</span>
                <span className="vax-hub-stat-label">Updates</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">↓</span>
                <span className="vax-hub-stat-label">Newest first</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap" dir="ltr">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="Search updates… e.g. RSV, autism, meningococcal"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search vaccine updates"
                dir="ltr"
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
                {visibleIndex.length > 0
                  ? `Showing ${visibleIndex.length} update${visibleIndex.length === 1 ? '' : 's'}`
                  : 'No matches — try another keyword'}
              </p>
            ) : null}

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">Latest updates</h2>
              <p className="hcp-res-sections-subtitle">
                Jump to an update below — cards link to the full article on this page.
              </p>
            </div>

            {visibleIndex.length === 0 ? (
              <p className="hcp-res-empty">No updates match your search.</p>
            ) : (
              <div className="hcp-vu-index-panel">
                <div className="hcp-vu-index-grid">
                  {visibleIndex.map((item) => (
                    <article key={item.id} className="hcp-res-item hcp-vu-index-card">
                      <div className="hcp-res-item-top hcp-vu-index-top">
                        <span className="hcp-vu-index-emoji" aria-hidden>
                          {item.emoji}
                        </span>
                        <div className="hcp-res-item-copy">
                          <div className="hcp-vu-index-meta">
                            <time className="hcp-vu-index-date">{item.date}</time>
                            <span className="hcp-vu-index-badge">{item.badge}</span>
                          </div>
                          <h3 className="hcp-res-item-title">{item.title}</h3>
                          <p className="hcp-res-item-desc">{item.summary}</p>
                        </div>
                      </div>
                      <a href={`#${item.id}`} className="hcp-res-btn">
                        Read update
                        <span className="hcp-res-btn-arrow" aria-hidden>
                          →
                        </span>
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {visibleIds.length > 0 ? <VaccineUpdatesSections visibleIds={visibleIds} /> : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
