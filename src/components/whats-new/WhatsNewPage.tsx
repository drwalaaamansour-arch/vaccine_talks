'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ScrollToHashOnMount from '@/components/ScrollToHashOnMount';
import WhatsNewSections from '@/components/whats-new/WhatsNewSections';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';
import {
  WHATS_NEW_COUNT,
  WHATS_NEW_HERO,
  WHATS_NEW_INDEX,
  WHATS_NEW_INTRO,
  WHATS_NEW_UI,
  type WhatsNewIndexItem,
} from '@/data/whats-new-hub';

const WHATS_NEW_IMAGE = '/updates.jpg';

function matchesQuery(item: WhatsNewIndexItem, query: string) {
  const q = query.trim();
  if (!q) return true;
  const qLower = q.toLowerCase();
  return (
    item.title.includes(q) ||
    item.summary.includes(q) ||
    item.badge.includes(q) ||
    item.keywords.includes(q) ||
    item.keywords.includes(qLower)
  );
}

export default function WhatsNewPage() {
  const [query, setQuery] = useState('');

  const visibleIndex = useMemo(
    () => WHATS_NEW_INDEX.filter((item) => matchesQuery(item, query)),
    [query],
  );

  const visibleIds = visibleIndex.map((item) => item.id);

  return (
    <div className="min-h-screen hcp-vu-hub-page whats-new-hub-page" dir="rtl" lang="ar">
      <ScrollToHashOnMount />
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

          <div className="hcp-vu-hub-inner whats-new-hub-inner">
            <Link href="/non-hcp" className="hcp-vu-back">
              {WHATS_NEW_UI.backLink}
            </Link>

            <header className="vax-hub-hero hcp-vu-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{WHATS_NEW_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{WHATS_NEW_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle" lang="ar" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {WHATS_NEW_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{WHATS_NEW_HERO.lead}</p>
              <ArticleMetaDate
                {...ARTICLE_META.whatsNew}
                locale="ar"
                align="center"
                variant="onDark"
              />
            </header>

            <div className="hcp-vu-welcome">
              <div className="hcp-vu-welcome-visual">
                <Image
                  src={WHATS_NEW_IMAGE}
                  alt={WHATS_NEW_UI.imageAlt}
                  width={520}
                  height={360}
                  className="hcp-vu-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-vu-welcome-copy">
                {WHATS_NEW_INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-vu-welcome-text">
                    {paragraph}
                  </p>
                ))}
                <p className="hcp-vu-welcome-text">
                  للتحديثات العالمية التنظيمية والسريرية باللغة الإنجليزية، راجع صفحة{' '}
                  <Link href="/hcp-vaccine-updates">{WHATS_NEW_UI.globalUpdatesLink}</Link> في قسم
                  العاملين بالمجال الطبي.
                </p>
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-vu-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{WHATS_NEW_COUNT}</span>
                <span className="vax-hub-stat-label">{WHATS_NEW_UI.statUpdates}</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">↓</span>
                <span className="vax-hub-stat-label">{WHATS_NEW_UI.statNewestFirst}</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap" dir="rtl">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder={WHATS_NEW_UI.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={WHATS_NEW_UI.searchAria}
                dir="rtl"
              />
              {query ? (
                <button
                  type="button"
                  className="vax-hub-search-clear"
                  onClick={() => setQuery('')}
                  aria-label={WHATS_NEW_UI.clearSearch}
                >
                  ✕
                </button>
              ) : null}
            </div>

            {query ? (
              <p className="vax-hub-search-meta">
                {visibleIndex.length > 0
                  ? WHATS_NEW_UI.showingUpdates(visibleIndex.length)
                  : WHATS_NEW_UI.noMatches}
              </p>
            ) : null}

            {visibleIndex.length > 0 ? (
              <>
                <div className="hcp-res-sections-head whats-new-index-head">
                  <h2 className="hcp-res-sections-title">{WHATS_NEW_UI.allTitle}</h2>
                  <p className="hcp-res-sections-subtitle">{WHATS_NEW_UI.allSubtitle}</p>
                </div>
                <div className="hcp-vu-index-panel whats-new-index-panel">
                  <div className="hcp-vu-index-grid">
                    {visibleIndex.map((item) => (
                      <article key={item.id} className="hcp-res-item hcp-vu-index-card whats-new-index-card">
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
                        <a href={`#${item.id}`} className="hcp-res-btn whats-new-index-btn">
                          {WHATS_NEW_UI.readUpdate}
                          <span className="hcp-res-btn-arrow" aria-hidden>
                            ↓
                          </span>
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              </>
            ) : null}

            {visibleIds.length > 0 ? (
              <div className="whats-new-articles-block">
                <div className="hcp-res-sections-head whats-new-articles-head">
                  <h2 className="hcp-res-sections-title">{WHATS_NEW_UI.latestTitle}</h2>
                  <p className="hcp-res-sections-subtitle">{WHATS_NEW_UI.latestSubtitle}</p>
                </div>
                <WhatsNewSections visibleIds={visibleIds} />
              </div>
            ) : (
              <p className="hcp-res-empty">{WHATS_NEW_UI.emptySearch}</p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
