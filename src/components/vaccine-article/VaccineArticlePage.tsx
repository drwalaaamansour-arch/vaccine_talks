'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import CdcArabicPdfSection from '@/components/CdcArabicPdfSection';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import VaccineRichText from '@/components/vaccine-article/VaccineRichText';
import { ARTICLE_META } from '@/lib/article-meta';
import type { VaccineArticle, VaccineFeature, VaccineTextBlock } from '@/components/vaccine-article/types';

function renderTextBlock(block: VaccineTextBlock, className: string) {
  const parts = Array.isArray(block) ? block : [block];

  return parts.map((part, index) => (
    <p key={`${part.slice(0, 24)}-${index}`} className={className}>
      <VaccineRichText text={part} />
    </p>
  ));
}

function featureKey(feature: VaccineFeature, index: number) {
  return `${feature.emoji ?? 'item'}-${index}-${feature.ar.slice(0, 24)}`;
}

function VaccineArticleBody({
  article,
  locale,
}: {
  article: VaccineArticle;
  locale: HcpGuideLocale;
}) {
  const isArabic = locale === 'ar';
  const showIntroSection = Boolean(article.image || article.introAr || article.introEn);

  return (
    <>
      {showIntroSection ? (
        <div className={`vax-article-intro${article.image ? '' : ' vax-article-intro--text-only'}`}>
          {article.image ? (
            <div className="vax-article-intro-visual">
              <img src={article.image.src} alt={article.image.alt} className="vax-article-img" />
            </div>
          ) : null}
          {isArabic && article.introAr ? (
            <div className="vax-article-intro-copy">
              <p className="vax-article-intro-text">
                <VaccineRichText text={article.introAr} />
              </p>
            </div>
          ) : null}
          {!isArabic && article.introEn ? (
            <div className="vax-article-intro-copy">
              <p className="vax-article-intro-text">
                <VaccineRichText text={article.introEn} />
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {article.schedules && article.schedules.length > 0 ? (
        <div className="vax-article-schedules">
          {article.schedules.map((schedule) => (
            <section
              key={isArabic ? schedule.titleAr : schedule.titleEn}
              className={`vax-article-schedule vax-article-schedule--${schedule.variant}`}
            >
              <header className="vax-article-schedule-head">
                <span className="vax-article-schedule-icon" aria-hidden>
                  {schedule.icon}
                </span>
                <div>
                  <h3 className="vax-article-schedule-title">
                    {isArabic ? schedule.titleAr : schedule.titleEn}
                  </h3>
                </div>
              </header>
              <p className="vax-article-schedule-note">
                <VaccineRichText text={isArabic ? schedule.noteAr : schedule.noteEn} />
              </p>
              <ul className="vax-article-chips">
                {schedule.chips.map((chip) => (
                  <li key={isArabic ? chip.ar : chip.en} className="vax-article-chip">
                    <span className="vax-article-chip-label">{isArabic ? chip.ar : chip.en}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}

      {article.features.length > 0 ? (
        <div className="vax-article-highlights">
          {article.features.map((feature, index) => {
            const text = isArabic ? feature.ar : feature.en;

            return (
              <article
                key={featureKey(feature, index)}
                className={`vax-article-highlight${text.length > 180 ? ' vax-article-highlight--wide' : ''}`}
              >
                {feature.emoji ? (
                  <span className="vax-article-highlight-emoji" aria-hidden>
                    {feature.emoji}
                  </span>
                ) : (
                  <span className="vax-article-highlight-emoji" aria-hidden>
                    📌
                  </span>
                )}
                <div>
                  <p className="vax-article-highlight-text">
                    <VaccineRichText text={text} />
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      ) : null}

      {article.summary ? (
        <div className="vax-article-summary">
          <h3 className="vax-article-summary-title">
            {isArabic ? article.summary.titleAr : article.summary.titleEn}
          </h3>
          <p className="vax-article-summary-text">
            <VaccineRichText text={isArabic ? article.summary.ar : article.summary.en} />
          </p>
        </div>
      ) : null}

      {article.faqLinks && article.faqLinks.length > 0 ? (
        <div className="vax-article-faq-links">
          {article.faqLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="vax-article-faq-btn"
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              {isArabic
                ? (link.labelAr ?? 'للأسئلة الشائعة اضغط هنا')
                : (link.labelEn ?? 'For common questions, click here')}
            </Link>
          ))}
        </div>
      ) : null}

      {article.afterContent}
    </>
  );
}

export default function VaccineArticlePage({ article }: { article: VaccineArticle }) {
  const meta = ARTICLE_META[article.metaKey];
  const [locale, setLocale] = useState<HcpGuideLocale>('ar');
  const isArabic = locale === 'ar';
  const heroClass =
    article.heroAccent === 'polio'
      ? 'vax-article-hero vax-article-hero--polio'
      : 'vax-article-hero vax-article-hero--default';

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`min-h-screen vax-article-page${isArabic ? ' vax-article-page--ar' : ' vax-article-page--en'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
    >
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
        <div className="about-elegant-card vax-article-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-article-inner">
            <div className="hcp-guide-lang-tabs-wrap vax-article-lang-tabs">
              <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
            </div>

            <header
              className={`${heroClass}${isArabic ? ' vax-article-hero--ar' : ' vax-article-hero--en'}`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <div className="vax-article-hero-glow" aria-hidden />
              <span className="vax-article-hero-emoji" aria-hidden>
                {article.emoji}
              </span>
              <span className="vax-article-hero-tag">
                {isArabic ? article.tagAr : article.tagEn}
              </span>
              <h2 className="vax-article-hero-title">
                {isArabic ? article.titleAr : article.titleEn}
              </h2>
              {renderTextBlock(
                isArabic ? article.heroLeadAr : article.heroLeadEn,
                'vax-article-hero-lead',
              )}
              <div className="vax-article-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale={isArabic ? 'ar' : 'en'} align="center" compact />
              </div>
            </header>

            <VaccineArticleBody article={article} locale={locale} />
          </div>
        </div>
      </section>

      {isArabic
        ? article.cdcPdfs?.map((pdf) => (
            <CdcArabicPdfSection
              key={pdf.fileName}
              fileName={pdf.fileName}
              titleAr={pdf.titleAr}
              titleEn={pdf.titleEn}
              introAr={pdf.introAr}
              arabicOnly
            />
          ))
        : null}

      <SiteFooter />
    </div>
  );
}
