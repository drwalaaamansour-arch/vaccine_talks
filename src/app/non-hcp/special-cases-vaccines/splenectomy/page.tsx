'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';

const SPLEEN_PDF = '/spleen.pdf';
const SPLEEN_PDF_EMBED = `${SPLEEN_PDF}#view=FitH&toolbar=1`;

export default function SplenectomyPage() {
  return (
    <div className="min-h-screen spleen-page">
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

      <section className="about-section">
        <div className="about-elegant-card spleen-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual spleen-page-bilingual">
            <div className="about-lang arabic spleen-inner" dir="rtl">
              <p className="spleen-back">
                <Link href="/non-hcp/special-cases-vaccines">العودة لتطعيمات الحالات الخاصة ←</Link>
              </p>

              <div className="spleen-title-row">
                <span className="spleen-icon" aria-hidden>
                  🩺
                </span>
                <h2 className="about-lang-title spleen-hero-title">
                  غياب أو ضعف الطحال
                </h2>
                <p className="spleen-subtitle-secondary">(تطعيمات استئصال الطحال)</p>
                <ArticleMetaDate {...ARTICLE_META.nonHcpSplenectomy} locale="ar" compact />
              </div>

              <div className="bubble-container spleen-bubble-wrap spleen-bubble-wrap--ar" dir="rtl">
                <div className="spleen-lead">
                  <p>
                    الطحال جزء مهم من جهاز المناعة، ودوره إنه بيساعد الجسم إنه يحارب بعض أنواع البكتيريا
                    الخطيرة.
                  </p>
                  <p className="spleen-lead-second">
                    ولما الطحال يكون متشال بعملية جراحية، أو ما بيشتغلش بكفاءة بسبب أمراض معينة زي الأنيميا
                    المنجلية، الجسم بيكون أكثر عرضة للإصابة بعدوى شديدة.
                  </p>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading">
                  <span className="spleen-section-emoji" aria-hidden>
                    🦠
                  </span>
                  أكتر أنواع البكتيريا اللي ممكن تسبب مشاكل في الحالات دي
                </h3>
                <ul className="spleen-bacteria-list">
                  <li>
                    <span className="spleen-bacteria-label">البكتيريا المسببة للالتهاب الرئوي</span>
                    <span className="spleen-bacteria-scientific" dir="ltr">
                      Streptococcus pneumoniae
                    </span>
                  </li>
                  <li>
                    <span className="spleen-bacteria-label">البكتيريا المسببة للالتهاب السحائي</span>
                    <span className="spleen-bacteria-scientific" dir="ltr">
                      Neisseria meningitidis
                    </span>
                  </li>
                  <li>
                    <span className="spleen-bacteria-label">بكتيريا المستدمة النزلية</span>
                    <span className="spleen-bacteria-scientific" dir="ltr">
                      Haemophilus influenzae
                    </span>
                  </li>
                </ul>

                <div className="spleen-callout">
                  <p>
                    علشان كده التطعيمات مهمة جدًا للأشخاص اللي عندهم غياب أو ضعف في وظيفة الطحال 💉
                  </p>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading">
                  <span className="spleen-section-emoji" aria-hidden>
                    ✔️
                  </span>
                  أهم التطعيمات المطلوبة
                </h3>
                <ul className="spleen-vax-checklist">
                  <li>تطعيم الالتهاب الرئوي</li>
                  <li>تطعيم الالتهاب السحائي</li>
                  <li>تطعيم الإنفلونزا البكتيرية</li>
                  <li>تطعيم الإنفلونزا الموسمية كل سنة</li>
                </ul>

                <h3 className="bubble-section-heading spleen-section-heading">
                  <span className="spleen-section-emoji" aria-hidden>
                    🏥
                  </span>
                  قبل وبعد عملية استئصال الطحال
                </h3>
                <div className="answer-bubble">
                  <p>
                    لو الشخص هيعمل عملية استئصال للطحال، يُفضّل ياخد التطعيمات قبل العملية بحوالي أسبوعين لو
                    أمكن.
                  </p>
                  <p>
                    ولو ما أخدهاش قبل العملية، ياخدها بعد الجراحة أول ما حالته تستقر.
                  </p>
                  <div className="spleen-important-box">
                    <p className="spleen-important-label">مهم تعرفي:</p>
                    <p>
                      خطر العدوى بيستمر طول العمر بعد استئصال الطحال، لكن بيكون أعلى بشكل خاص في أول سنتين
                      بعد العملية.
                    </p>
                  </div>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading">
                  ضعف وظيفة الطحال بدون جراحة
                </h3>
                <div className="answer-bubble">
                  <p>
                    أما الأشخاص اللي عندهم ضعف في وظيفة الطحال بدون جراحة، المفروض يبدأوا التطعيمات
                    المطلوبة بمجرد اكتشاف الحالة، حسب السن والتوصيات المناسبة.
                  </p>
                </div>

                <div className="spleen-conclusion">
                  <p>
                    الوقاية بالتطعيمات في الحالات دي مش اختيار… دي خطوة مهمة للحماية من عدوى ممكن تكون خطيرة
                    جدًا.
                  </p>
                </div>
              </div>
            </div>

            <div className="spleen-vaccine-bridge">
                <p className="spleen-bridge-intro-ar" dir="rtl">
                  لو عاوزين تعرفوا اكتر عن التطعيمات دي، دوسوا على اللينكات:
                </p>
                <p className="spleen-bridge-intro-en" dir="ltr">
                  To read more about these vaccines, use the links below.
                </p>
                <div className="spleen-more-links-grid">
                  <Link href="/pcv" className="start-button spleen-more-link-btn spleen-bridge-btn">
                    <span className="spleen-bridge-btn-ar" dir="rtl">
                      المكورات الرئوية (PCV / PPSV)
                    </span>
                    <span className="spleen-bridge-btn-en" dir="ltr">
                      Pneumococcal (PCV / PPSV)
                    </span>
                  </Link>
                  <Link href="/hib" className="start-button spleen-more-link-btn spleen-bridge-btn">
                    <span className="spleen-bridge-btn-ar" dir="rtl">
                      الهيموفيلس إنفلونزا ب (Hib)
                    </span>
                    <span className="spleen-bridge-btn-en" dir="ltr">
                      Haemophilus influenzae type b (Hib)
                    </span>
                  </Link>
                  <Link href="/meningitis" className="start-button spleen-more-link-btn spleen-bridge-btn">
                    <span className="spleen-bridge-btn-ar" dir="rtl">
                      الالتهاب السحائي (المكورات السحائية)
                    </span>
                    <span className="spleen-bridge-btn-en" dir="ltr">
                      Meningitis (meningococcal disease)
                    </span>
                  </Link>
                  <Link href="/influenza" className="start-button spleen-more-link-btn spleen-bridge-btn">
                    <span className="spleen-bridge-btn-ar" dir="rtl">
                      الإنفلونزا الموسمية
                    </span>
                    <span className="spleen-bridge-btn-en" dir="ltr">
                      Influenza (seasonal flu)
                    </span>
                  </Link>
                </div>
            </div>

            <div className="spleen-lang-divider" aria-hidden />

            <div className="about-lang spleen-inner spleen-inner--en" lang="en" dir="ltr">
              <p className="spleen-back spleen-back--en">
                <Link href="/non-hcp/special-cases-vaccines">← Back to special-case vaccinations</Link>
              </p>

              <div className="spleen-title-row spleen-title-row--en">
                <span className="spleen-icon" aria-hidden>
                  🩺
                </span>
                <h2 className="about-lang-title spleen-hero-title spleen-hero-title--en" dir="ltr">
                  Anatomic or Functional Asplenia
                </h2>
                <p className="spleen-subtitle-secondary spleen-subtitle-secondary--en">
                  Splenectomy vaccinations
                </p>
                <p className="spleen-subtitle-ar" lang="ar" dir="rtl">
                  غياب أو ضعف الطحال
                </p>
                <ArticleMetaDate {...ARTICLE_META.nonHcpSplenectomy} locale="en" compact />
              </div>

              <div className="bubble-container spleen-bubble-wrap spleen-bubble-wrap--en" dir="ltr">
                <div className="spleen-lead">
                  <p>
                    The spleen is an important part of the immune system. It helps the body fight certain
                    serious bacteria.
                  </p>
                  <p className="spleen-lead-second">
                    When the spleen is removed by surgery, or does not work well because of conditions such as
                    sickle cell disease, the body is more likely to develop severe infections.
                  </p>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading spleen-section-heading--en" dir="ltr">
                  <span className="spleen-section-emoji" aria-hidden>
                    🦠
                  </span>
                  Bacteria that most often cause problems in these situations
                </h3>
                <ul className="spleen-bacteria-list spleen-bacteria-list--en">
                  <li>
                    <span className="spleen-bacteria-label">Pneumonia bacteria</span>
                    <span className="spleen-bacteria-scientific">Streptococcus pneumoniae</span>
                  </li>
                  <li>
                    <span className="spleen-bacteria-label">Meningitis bacteria</span>
                    <span className="spleen-bacteria-scientific">Neisseria meningitidis</span>
                  </li>
                  <li>
                    <span className="spleen-bacteria-label">Haemophilus influenzae</span>
                    <span className="spleen-bacteria-scientific">Haemophilus influenzae</span>
                  </li>
                </ul>

                <div className="spleen-callout">
                  <p>
                    That is why vaccines are very important for people who have absent or poor spleen function 💉
                  </p>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading spleen-section-heading--en" dir="ltr">
                  Key vaccines
                </h3>
                <ul className="spleen-vax-checklist spleen-vax-checklist--en">
                  <li>Pneumococcal (pneumonia) vaccination</li>
                  <li>Meningococcal (meningitis) vaccination</li>
                  <li>Haemophilus influenzae type b (Hib) vaccination</li>
                  <li>Seasonal influenza vaccine every year</li>
                </ul>

                <h3 className="bubble-section-heading spleen-section-heading spleen-section-heading--en" dir="ltr">
                  <span className="spleen-section-emoji" aria-hidden>
                    🏥
                  </span>
                  Before and after splenectomy
                </h3>
                <div className="answer-bubble">
                  <p>
                    If someone is having the spleen removed, it is best to receive the vaccines about two weeks
                    before surgery when possible.
                  </p>
                  <p>
                    If they were not given before surgery, they should be given once the person has recovered
                    after the operation.
                  </p>
                  <div className="spleen-important-box">
                    <p className="spleen-important-label">Important to know:</p>
                    <p>
                      The risk of infection continues for life after splenectomy, but it is especially high in
                      the first two years after surgery.
                    </p>
                  </div>
                </div>

                <h3 className="bubble-section-heading spleen-section-heading spleen-section-heading--en" dir="ltr">
                  Poor spleen function without surgery
                </h3>
                <div className="answer-bubble">
                  <p>
                    People with poor spleen function who have not had surgery should start the recommended
                    vaccines as soon as the condition is diagnosed, according to age and appropriate guidelines.
                  </p>
                </div>

                <div className="spleen-conclusion">
                  <p>
                    Prevention with vaccines in these situations is not optional — it is an important step to
                    protect against infections that can be very serious.
                  </p>
                </div>
              </div>
            </div>

            <div className="spleen-pdf-section">
                <h3 className="spleen-pdf-title" dir="rtl">
                  تطعيمات الطحال — PDF
                </h3>
                <p className="spleen-pdf-title-en" dir="ltr">
                  Splenectomy vaccinations — PDF
                </p>
                <iframe
                  src={SPLEEN_PDF_EMBED}
                  width="100%"
                  height="800px"
                  className="spleen-pdf-frame"
                  title="تطعيمات الطحال PDF"
                />
                <div className="spleen-pdf-download">
                  <a href={SPLEEN_PDF} download className="spleen-pdf-download-btn">
                    Download PDF / تحميل PDF
                  </a>
                </div>
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
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=100064747760120"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/walaa-adel-895009369"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@VaccineTalk"
                  className="social-link"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3"
                  className="social-link"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
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
            <a href="/copy" className="policy-link">
              Copyright & Content Policy
            </a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">
              حقوق النشر والاستخدام
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .spleen-elegant {
          overflow: visible;
          padding: clamp(2rem, 3vw, 2.5rem) clamp(0.85rem, 2vw, 1.35rem) !important;
        }
        .spleen-page-bilingual.about-bilingual {
          flex-direction: column;
          align-items: stretch;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          direction: ltr;
          width: 100%;
          max-width: min(1180px, 100%);
          margin-inline: auto;
        }
        .spleen-inner {
          width: 100%;
          max-width: min(1180px, 100%);
          margin-inline: auto;
          direction: rtl;
          text-align: right;
          align-items: stretch !important;
          align-self: stretch;
          line-height: 1.9;
          padding: 0.25rem 0 0.5rem;
        }
        .spleen-lang-divider {
          width: 100%;
          max-width: min(1180px, 100%);
          margin: 0.25rem auto;
          height: 2px;
          border: none;
          background: linear-gradient(
            to right,
            transparent,
            rgba(64, 96, 109, 0.35) 15%,
            rgba(139, 115, 85, 0.35) 50%,
            rgba(64, 96, 109, 0.35) 85%,
            transparent
          );
        }
        .spleen-subtitle-ar {
          margin: 0.35rem 0 0;
          color: #6b8a96;
          font-size: 1rem;
          font-style: italic;
          font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
        }
        .spleen-page-bilingual .about-lang {
          width: 100%;
          min-height: 0;
          height: auto;
          justify-content: flex-start;
          align-items: stretch !important;
        }
        .spleen-back {
          margin: 0 0 1rem;
        }
        .spleen-back a {
          color: #40606d;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .spleen-back a:hover {
          text-decoration: underline;
        }
        .spleen-title-row {
          direction: rtl;
          text-align: center;
          margin-bottom: 1.35rem;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(64, 96, 109, 0.18);
        }
        .spleen-icon {
          display: block;
          font-size: 2.5rem;
          margin-bottom: 0.35rem;
          filter: drop-shadow(0 2px 8px rgba(64, 96, 109, 0.22));
        }
        .spleen-hero-title {
          margin: 0 0 0.25rem !important;
          font-size: clamp(1.35rem, 3.8vw, 1.85rem) !important;
          color: #355a63 !important;
          line-height: 1.45 !important;
        }
        .spleen-subtitle-secondary {
          margin: 0 0 0.35rem;
          font-size: 1.08rem;
          font-weight: 700;
          color: #5c4d3d;
        }
        .spleen-bubble-wrap {
          margin-top: 0.25rem;
        }
        .spleen-bubble-wrap--ar {
          direction: rtl;
          text-align: right;
        }
        .spleen-lead {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(230, 242, 245, 0.75) 50%,
            rgba(245, 239, 230, 0.55) 100%
          );
          border: 1px solid rgba(64, 96, 109, 0.2);
          border-radius: 18px;
          padding: 1.25rem 1.4rem;
          margin-bottom: 1.2rem;
          box-shadow: 0 10px 32px rgba(64, 96, 109, 0.08);
        }
        .spleen-lead p {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #355a63;
        }
        .spleen-lead-second {
          margin-top: 0.85rem !important;
          font-weight: 500 !important;
        }
        .spleen-section-heading {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
          direction: rtl;
          text-align: right;
          color: #355a63 !important;
        }
        .spleen-section-emoji {
          font-size: 1.35rem;
          line-height: 1;
        }
        .spleen-bubble-wrap--ar :global(h3.bubble-section-heading) {
          direction: rtl;
          text-align: right;
        }
        .spleen-bacteria-list {
          list-style: none;
          margin: 0 0 1.25rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .spleen-bacteria-list li {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.85rem 1rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-inline-start: 4px solid #40606d;
          box-shadow: 0 4px 14px rgba(64, 96, 109, 0.06);
        }
        .spleen-bacteria-list li::before {
          content: '🔹';
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .spleen-bacteria-label {
          font-weight: 700;
          color: #355a63;
        }
        .spleen-bacteria-scientific {
          font-size: 0.92rem;
          color: #5a4a3a;
          font-style: italic;
        }
        .spleen-callout {
          margin-bottom: 1.35rem;
          padding: 1rem 1.15rem;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(64, 96, 109, 0.12) 0%, rgba(245, 239, 230, 0.9) 100%);
          border: 1px solid rgba(64, 96, 109, 0.18);
        }
        .spleen-callout p {
          margin: 0;
          font-weight: 700;
          color: #355a63;
          font-size: 1.05rem;
        }
        .spleen-vax-checklist {
          list-style: none;
          margin: 0 0 1.35rem;
          padding: 0;
          display: grid;
          gap: 0.5rem;
        }
        .spleen-vax-checklist li {
          margin: 0;
          padding: 0.55rem 0.85rem 0.55rem 2rem;
          position: relative;
          border-radius: 12px;
          background: rgba(64, 96, 109, 0.08);
          font-weight: 600;
          color: #4a3f3a;
        }
        .spleen-vax-checklist li::before {
          content: '✔️';
          position: absolute;
          inset-inline-start: 0.65rem;
          top: 0.55rem;
        }
        .spleen-bubble-wrap--ar :global(.answer-bubble) {
          direction: rtl;
          text-align: right;
        }
        .spleen-bubble-wrap--ar :global(.answer-bubble ul) {
          padding-inline-start: 1.25rem;
          padding-inline-end: 0;
        }
        .spleen-important-box {
          margin-top: 0.9rem;
          padding: 0.9rem 1rem;
          border-radius: 14px;
          background: rgba(139, 115, 85, 0.1);
          border: 1px solid rgba(139, 115, 85, 0.22);
        }
        .spleen-important-label {
          margin: 0 0 0.45rem !important;
          font-weight: 800 !important;
          color: #6b4a3d !important;
        }
        .spleen-important-box p:last-child {
          margin: 0;
        }
        .spleen-conclusion {
          margin-top: 1.25rem;
          padding: 1.35rem 1.4rem;
          border-radius: 20px;
          text-align: center;
          background: linear-gradient(
            160deg,
            rgba(64, 96, 109, 0.14) 0%,
            rgba(245, 239, 230, 0.92) 100%
          );
          border: 1px solid rgba(64, 96, 109, 0.18);
          box-shadow: 0 8px 28px rgba(64, 96, 109, 0.1);
        }
        .spleen-conclusion p {
          margin: 0;
          font-weight: 800;
          font-size: 1.08rem;
          color: #355a63;
          line-height: 1.65;
        }
        .spleen-vaccine-bridge {
          max-width: min(1180px, 100%);
          width: 100%;
          margin: clamp(1.5rem, 3vw, 2rem) auto 0;
          padding: 1.35rem 1.25rem 1.5rem;
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-radius: 18px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.94) 0%,
            rgba(245, 239, 230, 0.65) 100%
          );
          box-shadow: 0 8px 28px rgba(64, 96, 109, 0.08);
        }
        .spleen-bridge-intro-ar {
          text-align: center;
          margin: 0 0 0.45rem;
          font-weight: 700;
          font-size: 1.05rem;
          color: #355a63;
          line-height: 1.65;
        }
        .spleen-bridge-intro-en {
          text-align: center;
          margin: 0 0 1.1rem;
          font-weight: 600;
          font-size: 0.98rem;
          color: #40606d;
          line-height: 1.55;
        }
        .spleen-bridge-btn {
          display: inline-flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
        }
        .spleen-bridge-btn-ar {
          font-weight: 700;
          line-height: 1.35;
        }
        .spleen-bridge-btn-en {
          font-size: 0.86rem;
          font-weight: 500;
          opacity: 0.92;
          line-height: 1.35;
        }
        .spleen-more-links-grid {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0.7rem;
          max-width: 32rem;
          margin: 0 auto;
        }
        .spleen-more-link-btn {
          text-align: center;
          font-size: 0.98rem !important;
          line-height: 1.45 !important;
          padding: 0.85rem 1rem !important;
          min-height: auto !important;
        }
        @media (min-width: 700px) {
          .spleen-more-links-grid {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: none;
            gap: 0.75rem;
          }
          .spleen-more-link-btn {
            flex: 1 1 200px;
            max-width: 300px;
          }
        }
        .spleen-pdf-section {
          width: 100%;
          max-width: min(1180px, 100%);
          margin: clamp(1.75rem, 3vw, 2.5rem) auto 0.5rem;
          padding: 1.35rem 1.25rem 1.5rem;
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-radius: 18px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.94) 0%,
            rgba(230, 242, 245, 0.45) 100%
          );
          box-shadow: 0 8px 28px rgba(64, 96, 109, 0.08);
        }
        .spleen-pdf-title {
          margin: 0 0 0.35rem;
          text-align: center;
          font-size: 1.35rem;
          font-weight: 800;
          color: #355a63;
          font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
        }
        .spleen-pdf-title-en {
          margin: 0 0 1rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
          color: #40606d;
          font-style: italic;
        }
        .spleen-pdf-frame {
          border: none;
          border-radius: 8px;
          display: block;
          background: #fff;
        }
        .spleen-pdf-download {
          margin-top: 1rem;
          text-align: center;
        }
        .spleen-pdf-download-btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #40606d;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
        }
        .spleen-pdf-download-btn:hover {
          background: #355a63;
        }
        @media (max-width: 768px) {
          .spleen-elegant {
            padding: 2rem 0.65rem !important;
          }
          .spleen-pdf-section {
            padding: 1rem 0.5rem 1.15rem;
          }
        }
        /* English section — LTR (must follow shared rules above) */
        .spleen-inner.spleen-inner--en {
          direction: ltr !important;
          text-align: left !important;
        }
        .spleen-page-bilingual .spleen-inner--en.about-lang {
          align-items: stretch !important;
        }
        .spleen-back.spleen-back--en {
          text-align: left;
        }
        .spleen-title-row.spleen-title-row--en {
          direction: ltr;
          text-align: center;
        }
        .spleen-hero-title.spleen-hero-title--en {
          text-align: center;
        }
        .spleen-subtitle-secondary.spleen-subtitle-secondary--en {
          font-style: normal;
        }
        .spleen-bubble-wrap.spleen-bubble-wrap--en {
          direction: ltr !important;
          text-align: left !important;
        }
        .spleen-bubble-wrap--en :global(h3.bubble-section-heading),
        .spleen-section-heading.spleen-section-heading--en {
          direction: ltr !important;
          text-align: left !important;
          justify-content: flex-start;
        }
        .spleen-bubble-wrap--en :global(.answer-bubble) {
          direction: ltr !important;
          text-align: left !important;
        }
        .spleen-bubble-wrap--en :global(.answer-bubble ul) {
          padding-left: 1.25rem;
          padding-right: 0;
        }
        .spleen-inner--en .spleen-lead,
        .spleen-inner--en .spleen-callout,
        .spleen-inner--en .spleen-conclusion,
        .spleen-inner--en .spleen-important-box {
          direction: ltr;
          text-align: left;
        }
        .spleen-bacteria-list--en li {
          border-left: 4px solid #40606d;
          border-inline-start: none;
        }
        .spleen-vax-checklist--en li {
          padding: 0.55rem 0.85rem;
        }
        .spleen-vax-checklist--en li::before {
          content: none;
        }
      `}</style>
    </div>
  );
}
