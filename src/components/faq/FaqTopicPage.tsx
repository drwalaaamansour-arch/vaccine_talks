'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import FaqAnswerText from '@/components/faq/FaqAnswerText';
import type { FaqQaItem } from '@/data/faq-types';
import type { ArticleMeta } from '@/lib/article-meta';

export type FaqTopicMeta = {
  tag: string;
  title: string;
  subtitle: string;
  emoji: string;
  lead: string;
  backHref: string;
  backLabel: string;
};

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesItem(item: FaqQaItem, query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  const haystack = [item.question, ...item.paragraphs].join(' ').toLowerCase();
  return haystack.includes(q);
}

function renderInlineQuestion(text: string) {
  return text;
}

type FaqTopicPageProps = {
  meta: ArticleMeta;
  topic: FaqTopicMeta;
  note: string;
  items: FaqQaItem[];
};

export default function FaqTopicPage({ meta, topic, note, items }: FaqTopicPageProps) {
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const visibleItems = useMemo(
    () => items.filter((item) => matchesItem(item, query)),
    [items, query],
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function expandAllVisible() {
    setOpenIds((prev) => {
      const next = new Set(prev);
      visibleItems.forEach((item) => next.add(item.id));
      return next;
    });
  }

  function collapseAll() {
    setOpenIds(new Set());
  }

  return (
    <div className="min-h-screen faq-topic-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card faq-topic-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="faq-topic-inner">
            <Link href={topic.backHref} className="faq-topic-back">
              {topic.backLabel}
            </Link>

            <header className="vax-hub-hero faq-topic-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{topic.tag}</span>
              <h1 className="vax-hub-hero-title">
                <span className="faq-topic-hero-emoji" aria-hidden>
                  {topic.emoji}
                </span>{' '}
                {topic.title}
              </h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {topic.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{topic.lead}</p>
              <div className="hub-hero-meta" style={{ marginTop: '0.85rem' }}>
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="faq-topic-intro">
              <p className="faq-topic-note">{note}</p>
              <p className="faq-topic-welcome-text">
                {items.length > 0
                  ? `${items.length} questions — use search or expand items below. Content is in English (LTR).`
                  : 'Content coming soon. Check back for updates.'}
              </p>
            </div>

            {items.length > 0 ? (
              <>
            <div className="vax-hub-search faq-topic-search">
              <label htmlFor="faq-topic-search" className="vax-hub-search-label">
                Search this topic
              </label>
              <input
                id="faq-topic-search"
                type="search"
                className="vax-hub-search-input"
                placeholder="Search questions and answers…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              {query ? (
                <p className="vax-hub-search-hint">
                  Showing {visibleItems.length} of {items.length} questions
                </p>
              ) : null}
            </div>

            <div className="faq-topic-toolbar">
              <span className="faq-topic-count">
                {visibleItems.length} question{visibleItems.length === 1 ? '' : 's'}
              </span>
              <div className="faq-topic-toolbar-actions">
                <button type="button" className="faq-topic-tool-btn" onClick={expandAllVisible}>
                  Expand all
                </button>
                <button type="button" className="faq-topic-tool-btn" onClick={collapseAll}>
                  Collapse all
                </button>
              </div>
            </div>

            <div className="faq-topic-accordion-panel">
              {visibleItems.length === 0 ? (
                <p className="faq-topic-empty">No questions match your search. Try different keywords.</p>
              ) : (
                <div className="faq-topic-accordion" role="list">
                  {visibleItems.map((item, index) => {
                    const isOpen = openIds.has(item.id);
                    const panelId = `faq-answer-${item.id}`;
                    const buttonId = `faq-question-${item.id}`;
                    return (
                      <article key={item.id} className="faq-topic-item" role="listitem">
                        <h2 className="faq-topic-item-heading">
                          <button
                            id={buttonId}
                            type="button"
                            className="faq-topic-question-btn"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggle(item.id)}
                          >
                            <span className="faq-topic-q-num">Q{index + 1}</span>
                            <span className="faq-topic-question">{renderInlineQuestion(item.question)}</span>
                            <span className={`faq-topic-chevron${isOpen ? ' faq-topic-chevron--open' : ''}`} aria-hidden>
                              ▾
                            </span>
                          </button>
                        </h2>
                        {isOpen ? (
                          <div id={panelId} className="faq-topic-answer-wrap" role="region" aria-labelledby={buttonId}>
                            <FaqAnswerText paragraphs={item.paragraphs} />
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
