'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import {
  HCP_RESOURCE_GROUPS,
  HCP_RESOURCES_HERO,
  HCP_RESOURCES_TOPICS,
} from '@/data/hcp-resources-hub';

const HCW_IMAGE = '/male%20Healthcare%20workers.jpg';

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

export default function HcpResourcesHub() {
  const [query, setQuery] = useState('');

  const visibleGroups = useMemo(() => {
    return HCP_RESOURCE_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter((item) => matchesQuery(item, query)),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  const filteredCount = visibleGroups.reduce((n, g) => n + g.items.length, 0);
  const totalCount = HCP_RESOURCES_TOPICS.length;

  return (
    <div className="min-h-screen hcp-res-hub-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card hcp-res-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-res-hub-inner">
            <header className="vax-hub-hero hcp-res-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{HCP_RESOURCES_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{HCP_RESOURCES_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {HCP_RESOURCES_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{HCP_RESOURCES_HERO.lead}</p>
            </header>

            <div className="hcp-res-welcome">
              <div className="hcp-res-welcome-visual">
                <Image
                  src={HCW_IMAGE}
                  alt="Healthcare workers"
                  width={520}
                  height={360}
                  className="hcp-res-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-res-welcome-copy">
                <p className="hcp-res-welcome-quote">
                  <span className="hcp-res-welcome-mark" aria-hidden>
                    “
                  </span>
                  Vaccines are powerful guardians — protecting healthcare workers and every patient you
                  serve.
                  <span className="hcp-res-welcome-mark" aria-hidden>
                    ”
                  </span>
                </p>
                <div className="hcp-res-topic-pills" aria-label="Topics covered">
                  {HCP_RESOURCES_TOPICS.map((topic) => (
                    <span key={topic} className="hcp-res-topic-pill">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-res-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">6</span>
                <span className="vax-hub-stat-label">Resource sections</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{totalCount}</span>
                <span className="vax-hub-stat-label">Topic areas</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap" dir="ltr">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="Search resources… e.g. special populations, FAQ, documents"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search HCP resources"
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
                {filteredCount > 0
                  ? `Showing ${filteredCount} result${filteredCount === 1 ? '' : 's'}`
                  : 'No matches — try another keyword'}
              </p>
            ) : null}

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">Choose a resource section</h2>
              <p className="hcp-res-sections-subtitle">
                Six dedicated areas — open any section with the button below each topic.
              </p>
            </div>

            {filteredCount === 0 ? (
              <p className="hcp-res-empty">No resources match your search.</p>
            ) : (
              <div className="hcp-res-categories">
                {visibleGroups.map((group, groupIndex) => (
                  <section
                    key={group.id}
                    className={`hcp-res-group hcp-res-group--${group.accent}`}
                    aria-labelledby={`hcp-res-group-${group.id}`}
                  >
                    <header className="hcp-res-group-head" id={`hcp-res-group-${group.id}`}>
                      <span className="hcp-res-group-icon" aria-hidden>
                        {group.icon}
                      </span>
                      <div className="hcp-res-group-titles">
                        <span className="hcp-res-group-label">Section {groupIndex + 1}</span>
                        <h2 className="hcp-res-group-title">{group.title}</h2>
                        <p className="hcp-res-group-subtitle">{group.subtitle}</p>
                      </div>
                    </header>

                    <div className="hcp-res-items">
                      {group.items.map((item) => (
                        <article key={item.href} className="hcp-res-item">
                          <div className="hcp-res-item-top">
                            <div className="hcp-res-item-thumb">
                              <Image
                                src={item.image}
                                alt=""
                                width={160}
                                height={100}
                                className="hcp-res-item-img"
                                aria-hidden
                              />
                              <span className="hcp-res-item-emoji" aria-hidden>
                                {item.emoji}
                              </span>
                            </div>
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
