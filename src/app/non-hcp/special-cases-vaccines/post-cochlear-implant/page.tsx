'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';

export default function PostCochlearImplantPage() {
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

      <section className="about-section">
        <div className="about-elegant-card cochlear-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual cochlear-page-bilingual">
            <div className="about-lang arabic cochlear-inner">
              <p className="cochlear-back">
                <Link href="/non-hcp/special-cases-vaccines">← العودة لتطعيمات الحالات الخاصة</Link>
              </p>

              <div className="cochlear-title-row">
                <span className="cochlear-icon" aria-hidden>
                  🦻
                </span>
                <h2 className="about-lang-title cochlear-main-title">تطعيمات زراعة القوقعة</h2>
                <p className="cochlear-subtitle-en" dir="ltr">
                  Cochlear implant vaccinations
                </p>
                <ArticleMetaDate {...ARTICLE_META.nonHcpCochlear} locale="ar" compact />
              </div>

              <div className="bubble-container">
              <div className="cochlear-lead">
                <p>
                  الأطفال (وأحيانًا الكبار) اللي عندهم زراعة قوقعة سمعية بيكونوا أكثر عرضة لالتهاب السحايا أو الحمى
                  الشوكية، وعلشان كده التطعيمات هنا مش اختيار… دي جزء أساسي من الحماية.
                </p>
              </div>

              <div className="cochlear-callout">
                <p>
                  <strong>التهاب السحايا</strong> هو التهاب خطير جدًا بيصيب الأغشية اللي بتغطي المخ والحبل الشوكي،
                  وغالبًا بيكون سببه بكتيريا قوية ممكن تسبب مضاعفات شديدة.
                </p>
              </div>

              <h3 className="bubble-section-heading">ليه الأطفال بزراعة القوقعة معرضين أكثر؟</h3>
              <div className="answer-bubble">
                <p>
                  لأن وجود الزراعة داخل الأذن الداخلية ممكن يزوّد فرصة دخول بعض البكتيريا اللي تسبب:
                </p>
                <ul>
                  <li>التهاب السحايا الرئوي (Pneumococcal)</li>
                  <li>التهاب السحايا بالمكورات السحائية (Meningococcal)</li>
                  <li>أو بكتيريا الهيموفيلس (Hib)</li>
                </ul>
              </div>

              <h3 className="bubble-section-heading">أهم التطعيمات المطلوبة</h3>

              <div className="cochlear-vax-card">
                <h4>١- تطعيم المكورات الرئوية والالتهاب الرئوي (PCV / PPSV)</h4>
                <div className="answer-bubble cochlear-nested">
                  <p>
                    ده من أهم التطعيمات للأطفال بزراعة القوقعة لأنه بيحمي من التهاب السحايا الرئوي.
                  </p>
                  <ul>
                    <li>
                      الأطفال أقل من سنتين: بياخدوا التطعيم ضمن جدول الأطفال العادي PCV10 أو PCV13 أو PCV15.
                    </li>
                    <li>
                      الأطفال الأكبر اللي ما خدوش التطعيم قبل كده وهم صغيرين: الدكتور بيعمل لهم جدول جديد مناسب
                      لسنهم.
                    </li>
                    <li>الأطفال أكبر من سنتين ممكن يحتاجوا تطعيم إضافي اسمه PPSV23.</li>
                  </ul>
                </div>
              </div>

              <div className="cochlear-vax-card">
                <h4>٢- تطعيم الهيموفيلس إنفلونزا نوع ب (Hib)</h4>
                <div className="answer-bubble cochlear-nested">
                  <p>ده تطعيم مهم جدًا للأطفال الصغيرين لأنه بيحمي من التهاب سحائي شديد.</p>
                  <ul>
                    <li>الأطفال أقل من 5 سنوات: بياخدوه ضمن جدول التطعيمات العادي.</li>
                    <li>
                      حتى لو الطفل أصيب قبل كده بالمرض، الطبيب ممكن يقرر إذا كان يحتاج جرعات إضافية أو لا حسب
                      السن.
                    </li>
                    <li>ولو اللي هيركب سماعة مأخدتش التطعيم ده طول عمره يبقى يتطعّم بغض النظر عن سنه.</li>
                  </ul>
                </div>
              </div>

              <div className="cochlear-vax-card">
                <h4>٣- تطعيم الالتهاب السحائي البكتيري (Meningococcal)</h4>
                <div className="answer-bubble cochlear-nested">
                  <p>ده تطعيم بيحمي من نوع خطير جدًا من التهاب السحايا.</p>
                  <p>موجود تطعيمات تغطي مجموعات مختلفة، زي ACWY ومجموعة B.</p>
                  <ul>
                    <li>الطبيب هو اللي بيحدد الجرعة والنوع حسب السن والحالة.</li>
                  </ul>
                </div>
              </div>

              <div className="cochlear-preop">
                <h3 className="bubble-section-heading cochlear-preop-heading">مهم جدًا قبل عملية زراعة القوقعة</h3>
                <ul>
                  <li>لازم يكون اللي هيزرع قوقعة واخد كل التطعيمات دي قبل العملية.</li>
                  <li>والأفضل يكون في فترة أمان (حوالي أسبوعين) بين آخر تطعيم والعملية.</li>
                  <li>لكن لو حصل وفي أي تطعيم ناقص، الطبيب بيظبطه بعد الجراحة.</li>
                </ul>
              </div>

              <h3 className="bubble-section-heading">هل الأطفال ضعاف أو فاقدي السمع ليهم جدول تطعيم مختلف؟</h3>
              <div className="cochlear-compare">
                <span>لا</span>
                <span aria-hidden>❌</span>
              </div>
            </div>
            </div>

            <div className="cochlear-vaccine-bridge">
              <p className="cochlear-bridge-intro-ar" dir="rtl">
                لو عاوزين تعرفوا اكتر عن التطعيمات دي، دوسوا على اللينكات:
              </p>
              <p className="cochlear-bridge-intro-en" dir="ltr">
                To read more about these vaccines, use the links below.
              </p>
              <div className="cochlear-more-links-grid cochlear-bridge-grid">
                <Link href="/pcv" className="start-button cochlear-more-link-btn cochlear-bridge-btn">
                  <span className="cochlear-bridge-btn-ar" dir="rtl">
                    المكورات الرئوية (PCV / PPSV)
                  </span>
                  <span className="cochlear-bridge-btn-en" dir="ltr">
                    Pneumococcal (PCV / PPSV)
                  </span>
                </Link>
                <Link href="/hib" className="start-button cochlear-more-link-btn cochlear-bridge-btn">
                  <span className="cochlear-bridge-btn-ar" dir="rtl">
                    الهيموفيلس إنفلونزا ب (Hib)
                  </span>
                  <span className="cochlear-bridge-btn-en" dir="ltr">
                    Haemophilus influenzae type b (Hib)
                  </span>
                </Link>
                <Link href="/meningitis" className="start-button cochlear-more-link-btn cochlear-bridge-btn">
                  <span className="cochlear-bridge-btn-ar" dir="rtl">
                    الالتهاب السحائي (المكورات السحائية)
                  </span>
                  <span className="cochlear-bridge-btn-en" dir="ltr">
                    Meningitis (meningococcal disease)
                  </span>
                </Link>
              </div>
            </div>

            <div className="about-lang cochlear-inner cochlear-inner--en">
              <p className="cochlear-back cochlear-back--en">
                <Link href="/non-hcp/special-cases-vaccines">← Back to special-case vaccinations</Link>
              </p>

              <div className="cochlear-title-row">
                <span className="cochlear-icon" aria-hidden>
                  🦻
                </span>
                <h2 className="about-lang-title cochlear-main-title" dir="ltr">
                  Cochlear implant vaccinations
                </h2>
                <p className="cochlear-subtitle-ar" lang="ar" dir="rtl">
                  تطعيمات زراعة القوقعة
                </p>
                <ArticleMetaDate {...ARTICLE_META.nonHcpCochlear} locale="en" compact />
              </div>

              <div className="bubble-container">
                <div className="cochlear-lead">
                  <p dir="ltr">
                    Children (and sometimes adults) with a cochlear implant are at higher risk of meningitis
                    (infection of the brain and spinal cord lining). That is why these vaccines are not optional —
                    they are a core part of protection.
                  </p>
                </div>

                <div className="cochlear-callout">
                  <p dir="ltr">
                    <strong>Meningitis</strong> is a very serious infection of the membranes that cover the brain
                    and spinal cord. It is often caused by aggressive bacteria that can lead to severe
                    complications.
                  </p>
                </div>

                <h3 className="bubble-section-heading" dir="ltr">
                  Why are children with cochlear implants at higher risk?
                </h3>
                <div className="answer-bubble">
                  <p dir="ltr">
                    The implant in the inner ear can increase the chance that certain bacteria may cause:
                  </p>
                  <ul dir="ltr">
                    <li>Pneumococcal meningitis</li>
                    <li>Meningococcal meningitis</li>
                    <li>Haemophilus influenzae type b (Hib) disease</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading" dir="ltr">
                  Key vaccines
                </h3>

                <div className="cochlear-vax-card">
                  <h4 dir="ltr">1 — Pneumococcal vaccines (PCV / PPSV)</h4>
                  <div className="answer-bubble cochlear-nested">
                    <p dir="ltr">
                      These are among the most important vaccines for children with cochlear implants because they
                      help protect against pneumococcal meningitis.
                    </p>
                    <ul dir="ltr">
                      <li>
                        Children under 2 years: receive PCV on the routine schedule (for example PCV10, PCV13, or
                        PCV15, depending on what is used locally).
                      </li>
                      <li>
                        Older children who missed doses when they were younger: the doctor will plan a catch-up
                        schedule that fits their age.
                      </li>
                      <li>Children older than 2 years may also need an extra dose called PPSV23.</li>
                    </ul>
                  </div>
                </div>

                <div className="cochlear-vax-card">
                  <h4 dir="ltr">2 — Haemophilus influenzae type b (Hib)</h4>
                  <div className="answer-bubble cochlear-nested">
                    <p dir="ltr">
                      This vaccine is very important for young children because it protects against severe Hib
                      disease, including meningitis.
                    </p>
                    <ul dir="ltr">
                      <li>Children under 5 years: usually receive Hib as part of the routine schedule.</li>
                      <li>
                        Even if a child had Hib disease before, the doctor may decide whether extra doses are needed,
                        depending on age.
                      </li>
                      <li>
                        If someone preparing for a cochlear implant has never received Hib vaccine, they should be
                        vaccinated regardless of age.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="cochlear-vax-card">
                  <h4 dir="ltr">3 — Meningococcal vaccines</h4>
                  <div className="answer-bubble cochlear-nested">
                    <p dir="ltr">These vaccines protect against a very serious type of bacterial meningitis.</p>
                    <p dir="ltr">
                      There are vaccines that cover different groups, such as MenACWY and MenB. Your doctor chooses
                      the type and number of doses based on age and medical situation.
                    </p>
                    <ul dir="ltr">
                      <li>The doctor decides the dose and product based on age and condition.</li>
                    </ul>
                  </div>
                </div>

                <div className="cochlear-preop">
                  <h3 className="bubble-section-heading cochlear-preop-heading" dir="ltr">
                    Very important before cochlear implant surgery
                  </h3>
                  <ul dir="ltr">
                    <li>The person having the implant should receive all of these vaccines before surgery when possible.</li>
                    <li>
                      Ideally, leave a safety window (about two weeks) between the last vaccine dose and the
                      operation.
                    </li>
                    <li>If any doses are missing, the doctor will plan how to complete them after surgery.</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading" dir="ltr">
                  Do children who are deaf or hard of hearing follow a different schedule?
                </h3>
                <div className="cochlear-compare">
                  <span dir="ltr">No</span>
                  <span aria-hidden>❌</span>
                </div>
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
        .cochlear-elegant {
          overflow: visible;
        }
        .cochlear-inner {
          width: 100%;
          direction: rtl;
          text-align: right;
          align-items: stretch !important;
          line-height: 1.9;
          padding: 0.25rem 0.35rem 0.5rem;
        }
        .cochlear-inner--en {
          direction: ltr;
          text-align: left;
        }
        .cochlear-back--en {
          text-align: left;
        }
        .cochlear-subtitle-ar {
          margin: 0;
          color: #6b8a96;
          font-size: 1.02rem;
          font-style: italic;
        }
        .cochlear-back {
          margin: 0 0 1rem;
        }
        .cochlear-back a {
          color: #40606d;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .cochlear-back a:hover {
          text-decoration: underline;
        }
        .cochlear-title-row {
          text-align: center;
          margin-bottom: 1.35rem;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(64, 96, 109, 0.12);
        }
        .cochlear-icon {
          display: block;
          font-size: 2.35rem;
          margin-bottom: 0.35rem;
          filter: drop-shadow(0 2px 6px rgba(64, 96, 109, 0.2));
        }
        .cochlear-main-title {
          margin: 0 0 0.35rem !important;
          font-size: clamp(1.55rem, 4vw, 2rem) !important;
          color: #355a63 !important;
          letter-spacing: -0.02em;
        }
        .cochlear-subtitle-en {
          margin: 0;
          color: #6b8a96;
          font-size: 1.02rem;
          font-style: italic;
        }
        .cochlear-lead {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(245, 239, 230, 0.92) 45%,
            rgba(230, 242, 245, 0.55) 100%
          );
          border: 1px solid rgba(139, 115, 85, 0.22);
          border-radius: 18px;
          padding: 1.2rem 1.35rem;
          margin-bottom: 1.15rem;
          box-shadow:
            0 10px 32px rgba(64, 96, 109, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.8) inset;
        }
        .cochlear-lead p {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #355a63;
        }
        .cochlear-callout {
          border-inline-start: 4px solid #40606d;
          padding: 1rem 1.15rem;
          background: rgba(64, 96, 109, 0.07);
          border-radius: 0 14px 14px 0;
          margin-bottom: 1.35rem;
          box-shadow: 0 4px 14px rgba(64, 96, 109, 0.06);
        }
        .cochlear-callout p {
          margin: 0;
        }
        .cochlear-callout strong {
          color: #355a63;
        }
        .cochlear-vax-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(64, 96, 109, 0.12);
          border-radius: 18px;
          padding: 1.15rem 1.25rem 1.05rem;
          margin-bottom: 1.15rem;
          box-shadow: 0 6px 22px rgba(139, 115, 85, 0.09);
        }
        .cochlear-vax-card h4 {
          margin: 0 0 0.75rem;
          font-size: 1.12rem;
          font-weight: 800;
          color: #355a63;
          line-height: 1.45;
        }
        .cochlear-nested {
          margin-bottom: 0 !important;
        }
        .cochlear-preop {
          background: linear-gradient(135deg, rgba(64, 96, 109, 0.11) 0%, rgba(139, 115, 85, 0.09) 100%);
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-radius: 18px;
          padding: 1.2rem 1.3rem 1.1rem;
          margin: 1.35rem 0 1.25rem;
          box-shadow: 0 6px 20px rgba(64, 96, 109, 0.07);
        }
        .cochlear-preop-heading {
          margin-top: 0 !important;
          margin-bottom: 0.75rem !important;
          color: #355a63 !important;
        }
        .cochlear-preop ul {
          margin: 0;
          padding-inline-start: 1.25rem;
        }
        .cochlear-preop li {
          margin-bottom: 0.5rem;
        }
        .cochlear-preop li:last-child {
          margin-bottom: 0;
        }
        .cochlear-compare {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.95rem 1rem;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(245, 239, 230, 0.9) 0%, rgba(255, 255, 255, 0.75) 100%);
          border: 1px solid rgba(139, 115, 85, 0.2);
          font-weight: 800;
          font-size: 1.2rem;
          color: #355a63;
          margin-bottom: 0.65rem;
        }
        .cochlear-vaccine-bridge {
          max-width: 52rem;
          width: 100%;
          margin: 0 auto;
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
        .cochlear-bridge-intro-ar {
          text-align: center;
          margin: 0 0 0.45rem;
          font-weight: 700;
          font-size: 1.05rem;
          color: #355a63;
          line-height: 1.65;
        }
        .cochlear-bridge-intro-en {
          text-align: center;
          margin: 0 0 1.1rem;
          font-weight: 600;
          font-size: 0.98rem;
          color: #40606d;
          line-height: 1.55;
        }
        .cochlear-bridge-grid {
          max-width: 56rem;
        }
        .cochlear-bridge-btn {
          display: inline-flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
        }
        .cochlear-bridge-btn-ar {
          font-weight: 700;
          line-height: 1.35;
        }
        .cochlear-bridge-btn-en {
          font-size: 0.86rem;
          font-weight: 500;
          opacity: 0.92;
          line-height: 1.35;
        }
        .cochlear-more-links-grid {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0.7rem;
          max-width: 32rem;
          margin: 0 auto;
        }
        .cochlear-more-link-btn {
          text-align: center;
          font-size: 0.98rem !important;
          line-height: 1.45 !important;
          padding: 0.85rem 1rem !important;
          min-height: auto !important;
        }
        @media (min-width: 700px) {
          .cochlear-more-links-grid {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: none;
            gap: 0.75rem;
          }
          .cochlear-more-link-btn {
            flex: 1 1 200px;
            max-width: 300px;
          }
        }
        .bubble-container .answer-bubble {
          background: rgba(64, 96, 109, 0.08);
          border: 1px solid rgba(64, 96, 109, 0.2);
          border-radius: 14px;
          padding: 0.85rem 1rem;
          margin: 0 0 0.8rem 0;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
        }
        .bubble-container .answer-bubble > p {
          margin: 0 0 0.65rem 0;
          padding: 0;
          background: none;
          border: none;
          box-shadow: none;
        }
        .bubble-container .answer-bubble > p:last-child {
          margin-bottom: 0;
        }
        .bubble-container .answer-bubble > ul {
          margin: 0 0 0.65rem 0;
          padding-inline-start: 1.25rem;
        }
        .bubble-container .answer-bubble > ul:last-child {
          margin-bottom: 0;
        }
        .bubble-container h3.bubble-section-heading {
          margin: 1.35rem 0 0.55rem 0;
          font-size: 1.28rem;
          font-weight: 800;
          line-height: 1.4;
          padding: 0;
          background: none;
          border: none;
          box-shadow: none;
          color: #40606d;
        }
        .bubble-container h3.bubble-section-heading:first-of-type {
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
