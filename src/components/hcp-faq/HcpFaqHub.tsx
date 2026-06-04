'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  HCP_FAQ_COUNT,
  HCP_FAQ_HERO,
  HCP_FAQ_INTRO,
  HCP_FAQ_NOTE,
  HCP_FAQ_TOPICS,
} from '@/data/hcp-faq-hub';
import { ARTICLE_META } from '@/lib/article-meta';

const FAQ_IMAGE = '/question-mark.jpg';

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

export default function HcpFaqHub() {
  const meta = ARTICLE_META.hcpFaq;
  const [query, setQuery] = useState('');

  const visibleTopics = useMemo(
    () => HCP_FAQ_TOPICS.filter((item) => matchesQuery(item, query)),
    [query],
  );

  return (
    <div className="min-h-screen hcp-faq-hub-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card hcp-faq-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-faq-hub-inner">
            <Link href="/hcp-resources" className="hcp-faq-back">
              ← Back to HCP Resources
            </Link>

            <header className="vax-hub-hero hcp-faq-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{HCP_FAQ_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{HCP_FAQ_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {HCP_FAQ_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{HCP_FAQ_HERO.lead}</p>
              <div className="hub-hero-meta" style={{ marginTop: '0.85rem' }}>
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="hcp-faq-welcome">
              <div className="hcp-faq-welcome-visual">
                <Image
                  src={FAQ_IMAGE}
                  alt="Frequently asked questions"
                  width={520}
                  height={360}
                  className="hcp-faq-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-faq-welcome-copy">
                <p className="hcp-faq-note">
                  <strong>Note:</strong> {HCP_FAQ_NOTE}
                </p>
                {HCP_FAQ_INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-faq-welcome-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-faq-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{HCP_FAQ_COUNT}</span>
                <span className="vax-hub-stat-label">FAQ topics</span>
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
                placeholder="Search FAQs… e.g. MMR, scheduling, meningococcal"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search HCP FAQs"
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
                {visibleTopics.length > 0
                  ? `Showing ${visibleTopics.length} topic${visibleTopics.length === 1 ? '' : 's'}`
                  : 'No matches — try another keyword'}
              </p>
            ) : null}

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">FAQ topics (A–Z)</h2>
              <p className="hcp-res-sections-subtitle">
                {HCP_FAQ_COUNT} topics — open any FAQ with the button below.
              </p>
            </div>

            {visibleTopics.length === 0 ? (
              <p className="hcp-res-empty">No FAQ topics match your search.</p>
            ) : (
              <section className="hcp-faq-alpha-panel" aria-label="FAQ topics A to Z">
                <div className="hcp-faq-topics-list">
                  {visibleTopics.map((item) => (
                    <article key={item.href} className="hcp-res-item">
                      <div className="hcp-res-item-top hcp-faq-item-top">
                        <span className="hcp-faq-item-emoji" aria-hidden>
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
