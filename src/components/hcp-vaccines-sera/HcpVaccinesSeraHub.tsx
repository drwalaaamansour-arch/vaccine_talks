'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  HCP_VACCINES_SERA,
  HCP_VACCINES_SERA_COUNT,
  HCP_VACCINES_SERA_HERO,
  HCP_VACCINES_SERA_INTRO,
} from '@/data/hcp-vaccines-sera-hub';
import { ARTICLE_META } from '@/lib/article-meta';

const VACCINES_IMAGE = '/vaccines.jpg';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesQuery(
  item: { title: string; subtitle: string; excerpt: string; keywords: string },
  query: string,
) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.title.toLowerCase().includes(q) ||
    item.subtitle.toLowerCase().includes(q) ||
    item.excerpt.toLowerCase().includes(q) ||
    item.keywords.includes(q)
  );
}

export default function HcpVaccinesSeraHub() {
  const meta = ARTICLE_META.hcpVaccinesSera;
  const [query, setQuery] = useState('');

  const visibleProducts = useMemo(
    () => HCP_VACCINES_SERA.filter((item) => matchesQuery(item, query)),
    [query],
  );

  return (
    <div className="min-h-screen hcp-vs-hub-page" dir="ltr" lang="en">
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
              ← Back to HCP Resources
            </Link>

            <header className="vax-hub-hero hcp-vs-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{HCP_VACCINES_SERA_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{HCP_VACCINES_SERA_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {HCP_VACCINES_SERA_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{HCP_VACCINES_SERA_HERO.lead}</p>
              <div className="hub-hero-meta" style={{ marginTop: '0.85rem' }}>
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="hcp-vs-welcome">
              <div className="hcp-vs-welcome-visual">
                <Image
                  src={VACCINES_IMAGE}
                  alt="Vaccines and sera in Egypt"
                  width={520}
                  height={360}
                  className="hcp-vs-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-vs-welcome-copy">
                {HCP_VACCINES_SERA_INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-vs-welcome-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-vs-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{HCP_VACCINES_SERA_COUNT}</span>
                <span className="vax-hub-stat-label">Products</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">A–Z</span>
                <span className="vax-hub-stat-label">Alphabetical order</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap" dir="ltr">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="Search products… e.g. hepatitis, anti-snake, MMR"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search vaccines and sera"
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
                {visibleProducts.length > 0
                  ? `Showing ${visibleProducts.length} product${visibleProducts.length === 1 ? '' : 's'}`
                  : 'No matches — try another keyword'}
              </p>
            ) : null}

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">Vaccines & sera (A–Z)</h2>
              <p className="hcp-res-sections-subtitle">
                {HCP_VACCINES_SERA_COUNT} products listed alphabetically — open any topic with the button below.
              </p>
            </div>

            {visibleProducts.length === 0 ? (
              <p className="hcp-res-empty">No products match your search.</p>
            ) : (
              <section className="hcp-vs-alpha-panel" aria-label="Vaccines and sera A to Z">
                <div className="hcp-vs-items-grid">
                  {visibleProducts.map((item) => (
                    <article key={item.href} className="hcp-res-item">
                      <div className="hcp-res-item-top hcp-vs-item-top">
                        <span className="hcp-vs-item-emoji" aria-hidden>
                          {item.emoji}
                        </span>
                        <div className="hcp-res-item-copy">
                          <h3 className="hcp-res-item-title">{item.title}</h3>
                          <p className="hcp-res-item-tag">{item.subtitle}</p>
                          <p className="hcp-res-item-desc">{item.excerpt}</p>
                        </div>
                      </div>
                      <Link href={item.href} className="hcp-res-btn">
                        Open {item.title}
                        <span className="hcp-res-btn-arrow" aria-hidden>
                          →
                        </span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
