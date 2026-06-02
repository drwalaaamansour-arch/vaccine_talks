import Link from 'next/link';
import Header from '@/components/Header';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import NonHcpQuestionsAccordion from '@/components/NonHcpQuestionsAccordion';
import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';
import type { ArticleMeta } from '@/lib/article-meta';

type NonHcpCommonQuestionsSubpageProps = {
  meta: ArticleMeta;
  titleAr: string;
  titleEn: string;
  questions: NonHcpQuestion[];
};

export default function NonHcpCommonQuestionsSubpage({
  meta,
  titleAr,
  titleEn,
  questions,
}: NonHcpCommonQuestionsSubpageProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">
          (Egyptian Edition)
        </p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section style={{ padding: '0.5rem 1rem 0' }}>
        <p style={{ margin: '0 0 0.75rem', textAlign: 'right', direction: 'rtl' }}>
          <Link
            href="/non-hcp/common-questions"
            style={{
              color: '#40606D',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif",
            }}
          >
            ← العودة إلى الأسئلة الشائعة
          </Link>
        </p>
        <p style={{ margin: '0 0 0.75rem', textAlign: 'left', direction: 'ltr' }}>
          <Link
            href="/non-hcp/common-questions"
            style={{
              color: '#40606D',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            ← Back to Common Questions
          </Link>
        </p>
      </section>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div
              className="about-lang arabic"
              style={{ alignItems: 'flex-start', direction: 'rtl', textAlign: 'right', width: '100%' }}
            >
              <h2
                className="about-lang-title"
                style={{
                  textAlign: 'center',
                  fontSize: '1.75rem',
                  margin: '0 0 1rem',
                  direction: 'rtl',
                  fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif",
                  width: '100%',
                }}
              >
                {titleAr}
              </h2>
              <ArticleMetaDate {...meta} locale="ar" compact />
              <NonHcpQuestionsAccordion questions={questions} locale="ar" />
            </div>

            <div className="lang-divider"></div>

            <div
              className="about-lang"
              style={{ alignItems: 'flex-start', direction: 'ltr', textAlign: 'left', width: '100%' }}
            >
              <h2
                className="about-lang-title"
                style={{
                  textAlign: 'center',
                  fontSize: '1.75rem',
                  margin: '0 0 1rem',
                  direction: 'ltr',
                  width: '100%',
                }}
              >
                {titleEn}
              </h2>
              <ArticleMetaDate {...meta} locale="en" compact />
              <NonHcpQuestionsAccordion questions={questions} locale="en" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I&apos;m always looking for new and exciting opportunities. Let&apos;s connect.
              </p>
            </div>
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Disclaimer
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p>
            <p className="copyright-text">Content is original and may not be copied without permission.</p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">Copyright & Content Policy</a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
