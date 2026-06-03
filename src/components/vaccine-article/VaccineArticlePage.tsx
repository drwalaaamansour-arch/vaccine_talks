import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import CdcArabicPdfSection from '@/components/CdcArabicPdfSection';
import VaccineRichText from '@/components/vaccine-article/VaccineRichText';
import { ARTICLE_META } from '@/lib/article-meta';
import type { VaccineArticle, VaccineTextBlock } from '@/components/vaccine-article/types';

function renderTextBlock(block: VaccineTextBlock, className: string) {
  const parts = Array.isArray(block) ? block : [block];

  return parts.map((part, index) => (
    <p key={`${part.slice(0, 24)}-${index}`} className={className}>
      <VaccineRichText text={part} />
    </p>
  ));
}

function featureKey(feature: { ar: string; emoji?: string }, index: number) {
  return `${feature.emoji ?? 'item'}-${index}-${feature.ar.slice(0, 24)}`;
}

export default function VaccineArticlePage({ article }: { article: VaccineArticle }) {
  const meta = ARTICLE_META[article.metaKey];
  const heroClass =
    article.heroAccent === 'polio' ? 'vax-article-hero vax-article-hero--polio' : 'vax-article-hero vax-article-hero--default';
  const showIntroSection = Boolean(article.image || article.introAr || article.introEn);

  return (
    <div className="min-h-screen vax-article-page" dir="rtl">
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
            <header className={heroClass}>
              <div className="vax-article-hero-glow" aria-hidden />
              <span className="vax-article-hero-emoji" aria-hidden>
                {article.emoji}
              </span>
              <span className="vax-article-hero-tag">
                {article.tagAr} · {article.tagEn}
              </span>
              <h2 className="vax-article-hero-title">{article.titleAr}</h2>
              <p className="vax-article-hero-subtitle hub-en" lang="en">
                {article.titleEn}
              </p>
              {renderTextBlock(article.heroLeadAr, 'vax-article-hero-lead')}
              {renderTextBlock(article.heroLeadEn, 'vax-article-hero-lead-en hub-en')}
              <div className="vax-article-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="ar" align="center" compact />
              </div>
            </header>

            {showIntroSection ? (
              <div className={`vax-article-intro${article.image ? '' : ' vax-article-intro--text-only'}`}>
                {article.image ? (
                  <div className="vax-article-intro-visual">
                    <img src={article.image.src} alt={article.image.alt} className="vax-article-img" />
                  </div>
                ) : null}
                {article.introAr || article.introEn ? (
                  <div className="vax-article-intro-copy">
                    {article.introAr ? (
                      <p className="vax-article-intro-ar">
                        <VaccineRichText text={article.introAr} />
                      </p>
                    ) : null}
                    {article.introEn ? (
                      <p className="vax-article-intro-en hub-en" lang="en">
                        <VaccineRichText text={article.introEn} />
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            {article.schedules && article.schedules.length > 0 ? (
              <div className="vax-article-schedules">
                {article.schedules.map((schedule) => (
                  <section
                    key={schedule.titleAr}
                    className={`vax-article-schedule vax-article-schedule--${schedule.variant}`}
                  >
                    <header className="vax-article-schedule-head">
                      <span className="vax-article-schedule-icon" aria-hidden>
                        {schedule.icon}
                      </span>
                      <div>
                        <h3 className="vax-article-schedule-title">{schedule.titleAr}</h3>
                        <p className="vax-article-schedule-subtitle hub-en" lang="en">
                          {schedule.titleEn}
                        </p>
                      </div>
                    </header>
                    <p className="vax-article-schedule-note">
                      <VaccineRichText text={schedule.noteAr} />
                    </p>
                    <p className="vax-article-schedule-note-en hub-en" lang="en">
                      <VaccineRichText text={schedule.noteEn} />
                    </p>
                    <ul className="vax-article-chips">
                      {schedule.chips.map((chip) => (
                        <li key={chip.ar} className="vax-article-chip">
                          <span className="vax-article-chip-ar">{chip.ar}</span>
                          <span className="vax-article-chip-en hub-en" lang="en">
                            {chip.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : null}

            {article.features.length > 0 ? (
              <div className="vax-article-highlights">
                {article.features.map((feature, index) => (
                  <article
                    key={featureKey(feature, index)}
                    className={`vax-article-highlight${feature.ar.length > 180 || feature.en.length > 180 ? ' vax-article-highlight--wide' : ''}`}
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
                      <p className="vax-article-highlight-ar">
                        <VaccineRichText text={feature.ar} />
                      </p>
                      <p className="vax-article-highlight-en hub-en" lang="en">
                        <VaccineRichText text={feature.en} />
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {article.summary ? (
              <div className="vax-article-summary">
                <h3 className="vax-article-summary-title">{article.summary.titleAr}</h3>
                <p className="vax-article-summary-en hub-en" lang="en">
                  {article.summary.titleEn}
                </p>
                <p className="vax-article-summary-ar">
                  <VaccineRichText text={article.summary.ar} />
                </p>
                <p className="vax-article-summary-en hub-en" lang="en">
                  <VaccineRichText text={article.summary.en} />
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
                    dir="rtl"
                  >
                    {link.labelAr ?? 'للأسئلة الشائعة اضغط هنا'}
                  </Link>
                ))}
              </div>
            ) : null}

            {article.afterContent}
          </div>
        </div>
      </section>

      {article.cdcPdfs?.map((pdf) => (
        <CdcArabicPdfSection
          key={pdf.fileName}
          fileName={pdf.fileName}
          titleAr={pdf.titleAr}
          titleEn={pdf.titleEn}
          introAr={pdf.introAr}
        />
      ))}

      <SiteFooter />
    </div>
  );
}
