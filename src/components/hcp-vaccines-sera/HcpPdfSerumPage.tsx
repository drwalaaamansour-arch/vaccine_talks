'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicDisclaimer from '@/components/hcp-guide/HcpGuideArabicDisclaimer';
import { HCP_VACCINE_UI } from '@/data/hcp-vaccine-ui-copy';
import { ARTICLE_META } from '@/lib/article-meta';

const HcpPdfSerumViewer = dynamic(() => import('@/components/hcp-vaccines-sera/HcpPdfSerumViewer'), {
  ssr: false,
  loading: () => (
    <>
      <div className="hcp-pdf-serum-viewer">
        <div className="hcp-pdf-serum-iframe hcp-pdf-serum-iframe--placeholder" aria-hidden />
      </div>
      <div className="hcp-pdf-serum-actions">
        <span className="hcp-pdf-serum-download hcp-pdf-serum-download--placeholder">…</span>
      </div>
    </>
  ),
});

type MetaKey = keyof typeof ARTICLE_META;

export type HcpPdfSerumPageProps = {
  metaKey: MetaKey;
  titleEn: string;
  titleAr: string;
  leadEn: string;
  leadAr: string;
  emoji: string;
  pdfSrc: string;
  pdfFileName: string;
  iframeTitleEn: string;
  iframeTitleAr: string;
  rotatePdf?: boolean;
};

const COPY = {
  en: {
    download: 'Download PDF',
    source:
      'Source: Egyptian Drug Authority / Ministry of Health. This site is not directly affiliated with these companies; content is for awareness only and may not be used for commercial purposes.',
  },
  ar: {
    download: 'تحميل PDF',
    source:
      'المصدر: الهيئة المصرية للدواء / وزارة الصحة. لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية.',
  },
} as const;

export default function HcpPdfSerumPage({
  metaKey,
  titleEn,
  titleAr,
  leadEn,
  leadAr,
  emoji,
  pdfSrc,
  pdfFileName,
  iframeTitleEn,
  iframeTitleAr,
  rotatePdf = false,
}: HcpPdfSerumPageProps) {
  const meta = ARTICLE_META[metaKey];
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const isArabic = locale === 'ar';
  const ui = isArabic ? HCP_VACCINE_UI.ar : HCP_VACCINE_UI.en;
  const copy = isArabic ? COPY.ar : COPY.en;
  const title = isArabic ? titleAr : titleEn;
  const lead = isArabic ? leadAr : leadEn;

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen hcp-cancer-page hcp-guide-page hcp-pdf-serum-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card vax-article-elegant hcp-vax-product-elegant hcp-pdf-serum-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-cancer-inner hcp-guide-inner">
            <Link href="/hcp-vaccines-sera" className="hcp-cancer-back hcp-guide-back">
              {ui.back}
            </Link>

            <div className="hcp-guide-lang-tabs-wrap">
              <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
            </div>

            <header
              className={`hcp-cancer-hero hcp-guide-hero hcp-vax-product-hero${isArabic ? ' hcp-guide-hero--ar' : ''}`}
              dir={isArabic ? 'rtl' : 'ltr'}
              lang={isArabic ? 'ar' : 'en'}
            >
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                {emoji}
              </span>
              <span className="hcp-cancer-hero-tag">{ui.tag}</span>
              <h1 className="hcp-cancer-hero-title" dir={isArabic ? 'rtl' : undefined}>
                {title}
              </h1>
              <p className="hcp-cancer-hero-lead" dir={isArabic ? 'rtl' : undefined}>
                {lead}
              </p>
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale={isArabic ? 'ar' : 'en'} align="center" compact />
              </div>
            </header>

            <HcpPdfSerumViewer
              pdfSrc={pdfSrc}
              pdfFileName={pdfFileName}
              iframeTitle={isArabic ? iframeTitleAr : iframeTitleEn}
              downloadLabel={copy.download}
              rotatePdf={rotatePdf}
            />

            <p className="hcp-pdf-serum-source" dir={isArabic ? 'rtl' : 'ltr'}>
              {copy.source}
            </p>

            {isArabic ? <HcpGuideArabicDisclaimer className="hcp-pdf-serum-ar-disclaimer" /> : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
