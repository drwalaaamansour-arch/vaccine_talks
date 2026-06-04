'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';
import type { ArticleMeta } from '@/lib/article-meta';

type Locale = 'ar' | 'en';

export type NonHcpCommonQuestionsTopicProps = {
  meta: ArticleMeta;
  titleAr: string;
  titleEn: string;
  emoji?: string;
  leadAr?: string;
  leadEn?: string;
  questions: NonHcpQuestion[];
};

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function getQuestionText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') return item.questionEn ?? item.question;
  return item.question;
}

function getAnswerText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') return item.answerEn ?? item.answer;
  return item.answer;
}

function getSectionText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') return item.sectionEn ?? item.section;
  return item.section;
}

function matchesQuestion(item: NonHcpQuestion, query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  const haystack = [
    item.question,
    item.answer,
    item.questionEn ?? '',
    item.answerEn ?? '',
    item.section ?? '',
    item.sectionEn ?? '',
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

export default function NonHcpCommonQuestionsTopicPage({
  meta,
  titleAr,
  titleEn,
  emoji = '❓',
  leadAr = 'إجابات بسيطة وواضحة — بالعربي والإنجليزي.',
  leadEn = 'Clear answers in Arabic and English.',
  questions,
}: NonHcpCommonQuestionsTopicProps) {
  const [locale, setLocale] = useState<Locale>('ar');
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const visibleItems = useMemo(
    () =>
      questions
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => matchesQuestion(item, query)),
    [questions, query],
  );

  const isArabic = locale === 'ar';

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
      visibleItems.forEach(({ index }) => next.add(`q-${index}`));
      return next;
    });
  }

  function collapseAll() {
    setOpenIds(new Set());
  }

  return (
    <div className="min-h-screen ncq-topic-page vax-hub-page" dir="rtl" lang="ar">
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

      <section className="about-section ncq-topic-section">
        <div className="about-elegant-card vax-hub-elegant ncq-topic-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner ncq-topic-inner">
            <Link href="/non-hcp/common-questions" className="ncq-hub-back">
              ← العودة إلى الأسئلة الشائعة
            </Link>

            <header className="vax-hub-hero ncq-topic-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">أسئلة شائعة · Common questions</span>
              <h2 className="vax-hub-hero-title">
                <span className="ncq-topic-hero-emoji" aria-hidden>
                  {emoji}
                </span>{' '}
                {titleAr}
              </h2>
              <p className="vax-hub-hero-subtitle hub-en" lang="en">
                {titleEn}
              </p>
              <p className="vax-hub-hero-lead">{leadAr}</p>
              <p className="ncq-topic-hero-lead-alt hub-en" lang="en">
                {leadEn}
              </p>
              <div className="hub-hero-meta">
                <ArticleMetaDate {...meta} locale="ar" align="center" compact />
              </div>
            </header>

            <div className="ncq-topic-lang-tabs" role="tablist" aria-label="Language">
              <button
                type="button"
                role="tab"
                aria-selected={locale === 'ar'}
                className={`ncq-topic-lang-btn${locale === 'ar' ? ' ncq-topic-lang-btn--active' : ''}`}
                onClick={() => setLocale('ar')}
              >
                العربية
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={locale === 'en'}
                className={`ncq-topic-lang-btn${locale === 'en' ? ' ncq-topic-lang-btn--active' : ''}`}
                onClick={() => setLocale('en')}
              >
                English
              </button>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two ncq-topic-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{questions.length}</span>
                <span className="vax-hub-stat-label">سؤال · Questions</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{visibleItems.length}</span>
                <span className="vax-hub-stat-label">معروض · Showing</span>
              </div>
            </div>

            <div className="vax-hub-search-wrap">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="دور في الأسئلة… Search Q&A…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search questions"
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
                {visibleItems.length > 0
                  ? `عرض ${visibleItems.length} من ${questions.length} · Showing ${visibleItems.length} of ${questions.length}`
                  : 'مفيش نتائج · No matches — جرّب كلمة تانية'}
              </p>
            ) : null}

            <div className="ncq-topic-toolbar">
              <div className="ncq-topic-toolbar-actions">
                <button type="button" className="ncq-topic-tool-btn" onClick={expandAllVisible}>
                  فتح الكل · Expand all
                </button>
                <button type="button" className="ncq-topic-tool-btn" onClick={collapseAll}>
                  إغلاق الكل · Collapse all
                </button>
              </div>
            </div>

            <div className="ncq-topic-accordion-panel">
              {visibleItems.length === 0 ? (
                <p className="ncq-topic-empty">مفيش نتائج — جرّب كلمة تانية · No matches.</p>
              ) : (
                <div className="ncq-topic-accordion" role="list">
                  {visibleItems.map(({ item, index }, visibleIndex) => {
                    const section = getSectionText(item, locale);
                    const prevSection =
                      visibleIndex > 0
                        ? getSectionText(visibleItems[visibleIndex - 1].item, locale)
                        : undefined;
                    const showSection = Boolean(section && section !== prevSection);
                    const id = `q-${index}`;
                    const isOpen = openIds.has(id);
                    const panelId = `ncq-answer-${index}`;
                    const buttonId = `ncq-question-${index}`;

                    return (
                      <div key={id} role="listitem">
                        {showSection ? (
                          <h3
                            className={`ncq-topic-section-title${isArabic ? '' : ' ncq-topic-text-en'}`}
                            lang={isArabic ? 'ar' : 'en'}
                          >
                            {section}
                          </h3>
                        ) : null}
                        <article className="ncq-topic-item">
                          <h4 className="ncq-topic-item-heading">
                            <button
                              id={buttonId}
                              type="button"
                              className="ncq-topic-question-btn"
                              aria-expanded={isOpen}
                              aria-controls={panelId}
                              onClick={() => toggle(id)}
                            >
                              <span className="ncq-topic-q-num">Q{visibleIndex + 1}</span>
                              <span
                                className={`ncq-topic-question${isArabic ? '' : ' ncq-topic-text-en'}`}
                                lang={isArabic ? 'ar' : 'en'}
                              >
                                {getQuestionText(item, locale)}
                              </span>
                              <span
                                className={`ncq-topic-chevron${isOpen ? ' ncq-topic-chevron--open' : ''}`}
                                aria-hidden
                              >
                                ▾
                              </span>
                            </button>
                          </h4>
                          {isOpen ? (
                            <div
                              id={panelId}
                              className="ncq-topic-answer-wrap"
                              role="region"
                              aria-labelledby={buttonId}
                            >
                              <p
                                className={`ncq-topic-answer${isArabic ? '' : ' ncq-topic-text-en'}`}
                                lang={isArabic ? 'ar' : 'en'}
                              >
                                {getAnswerText(item, locale)}
                              </p>
                            </div>
                          ) : null}
                        </article>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
