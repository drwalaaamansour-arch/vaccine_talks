'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  NON_HCP_COMMON_QUESTION_TOPIC_COUNT,
  NON_HCP_COMMON_QUESTION_TOPICS,
  NON_HCP_COMMON_QUESTIONS_HERO,
} from '@/data/non-hcp-common-questions-hub';
import { ARTICLE_META } from '@/lib/article-meta';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesTopic(item: (typeof NON_HCP_COMMON_QUESTION_TOPICS)[number], query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.ar.includes(query.trim()) ||
    item.en.toLowerCase().includes(q) ||
    item.keywords.includes(q)
  );
}

export default function CommonQuestionsHubPage() {
  const meta = ARTICLE_META.nonHcpCommonQuestions;
  const [query, setQuery] = useState('');

  const filteredTopics = useMemo(
    () => NON_HCP_COMMON_QUESTION_TOPICS.filter((item) => matchesTopic(item, query)),
    [query],
  );

  return (
    <div className="min-h-screen ncq-hub-page vax-hub-page" dir="rtl">
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

      <section className="about-section ncq-hub-section">
        <div className="about-elegant-card vax-hub-elegant ncq-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner ncq-hub-inner">
            <Link href="/non-hcp" className="ncq-hub-back">
              ← العودة لغير العاملين بالمجال الطبي
            </Link>

            <header className="vax-hub-hero ncq-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{NON_HCP_COMMON_QUESTIONS_HERO.tag}</span>
              <h2 className="vax-hub-hero-title">{NON_HCP_COMMON_QUESTIONS_HERO.titleAr}</h2>
              <p className="vax-hub-hero-subtitle hub-en" lang="en">
                {NON_HCP_COMMON_QUESTIONS_HERO.titleEn}
              </p>
              <p className="vax-hub-hero-lead">{NON_HCP_COMMON_QUESTIONS_HERO.leadAr}</p>
              <p className="ncq-hub-hero-lead-en hub-en" lang="en">
                {NON_HCP_COMMON_QUESTIONS_HERO.leadEn}
              </p>
              <div className="hub-hero-meta">
                <ArticleMetaDate {...meta} locale="ar" align="center" compact />
              </div>
            </header>

            <div className="vax-hub-stats vax-hub-stats--two ncq-hub-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{NON_HCP_COMMON_QUESTION_TOPIC_COUNT}</span>
                <span className="vax-hub-stat-label">موضوع · Topics</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">❓</span>
                <span className="vax-hub-stat-label">أسئلة وأجوبة · Q&amp;A</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="دور على موضوع… Search a topic…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search common question topics"
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
                {filteredTopics.length > 0
                  ? `عرض ${filteredTopics.length} نتيجة · Showing ${filteredTopics.length} result${filteredTopics.length === 1 ? '' : 's'}`
                  : 'مفيش نتائج · No matches — جرّب كلمة تانية'}
              </p>
            ) : null}

            {filteredTopics.length === 0 ? (
              <p className="ncq-hub-empty">مفيش نتائج — جرّب موضوع تاني أو امسح البحث.</p>
            ) : (
              <div className="vax-hub-grid ncq-hub-grid">
                {filteredTopics.map((item) => (
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
