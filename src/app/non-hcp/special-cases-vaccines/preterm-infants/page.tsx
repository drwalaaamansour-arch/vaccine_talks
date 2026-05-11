 'use client';

import Image from 'next/image';
import Header from '@/components/Header';

const PRETERM_IMAGE_SRC = '/preterm image.jpeg';
const PRETERM_IMAGE_WIDTH = 225;
const PRETERM_IMAGE_HEIGHT = 225;

export default function PretermInfantsSpecialCasesPage() {
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
          <p>"Everything you need to know about</p>
          <p>vaccines in Egypt"</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div style={{ marginBottom: '1.25rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image
              src={PRETERM_IMAGE_SRC}
              alt="تطعيمات الأطفال المبتسرين — Preterm infant vaccinations"
              width={PRETERM_IMAGE_WIDTH}
              height={PRETERM_IMAGE_HEIGHT}
              sizes="(max-width: 480px) min(100vw - 3rem, 225px), 225px"
              style={{
                width: 'min(100%, 225px)',
                height: 'auto',
                maxWidth: '100%',
              }}
              priority
            />
          </div>

          <div className="about-bilingual">
            <div className="about-lang arabic" style={{ alignItems: 'flex-start' }}>
              <h2
                className="about-lang-title"
                style={{ direction: 'rtl', textAlign: 'center', width: '100%', alignSelf: 'center', marginBottom: '1rem' }}
              >
                تطعيمات الأطفال المبتسرين (الخُدّج)..
                <br />
                مهمة وآمنة جدًا
              </h2>
              <div className="about-lang-intro bubble-container" style={{ direction: 'rtl', textAlign: 'right', width: '100%', lineHeight: 1.9 }}>
                <div className="answer-bubble">
                  <p>
                    لما الطفل يتولد قبل معاده، طبيعي جدًا إن الأهل يقلقوا على صحته وتغذيته ونموه… ومن أكتر الأسئلة اللي بتتكرر: "هل ياخد التطعيمات عادي؟" "ولا نستنى شوية علشان وزنه صغير أو لأنه اتولد بدري؟"
                    <br />
                    <br />
                    والحقيقة إن الأطفال المبتسرين أو الخُدّج بيكونوا محتاجين الحماية من الأمراض أكتر من غيرهم، لأن مناعتهم لسه أضعف وجسمهم أكثر عرضة للعدوى والمضاعفات.
                  </p>
                </div>

                <h3 className="bubble-section-heading">يعني إيه طفل مبتسر أو خديج؟</h3>
                <div className="answer-bubble">
                  <p>منظمة الصحة العالمية بتعتبر أي طفل اتولد قبل الأسبوع 37 من الحمل طفل مبتسر.</p>
                  <p>وده بيتقسم لدرجات:</p>
                  <ul>
                    <li>مبتسر شديد جدًا: قبل 28 أسبوع</li>
                    <li>مبتسر شديد: من 28 لأقل من 32 أسبوع</li>
                    <li>مبتسر متوسط أو متأخر: من 32 لأقل من 37 أسبوع</li>
                  </ul>
                  <p>وفي مصر، نسبة الولادة المبكرة تعتبر مرتفعة نسبيًا، علشان كده مهم جدًا نفهم تطعيمات الأطفال دول بشكل صح.</p>
                </div>

                <h3 className="bubble-section-heading">هل الطفل المبتسر ياخد التطعيمات في ميعادها؟</h3>
                <div className="answer-bubble">
                  <p>
                    أيوه ✅<br />في أغلب الحالات، الطفل المبتسر بياخد التطعيمات حسب عمره الحقيقي من يوم الولادة، مش حسب العمر المعدل.<br />يعني لو الطفل عنده شهر من تاريخ الولادة، ياخد تطعيمات الشهر حتى لو كان مولود بدري.<br />وده مهم جدًا علشان نحميه بدري من الأمراض الخطيرة، خصوصًا إن مناعته أضعف من الأطفال المولودين في ميعادهم الطبيعي.
                  </p>
                </div>

                <h3 className="bubble-section-heading">هل الوزن الصغير يمنع التطعيم؟</h3>
                <div className="answer-bubble">
                  <p>
                    في معظم التطعيمات: لا ❌<br />حتى لو وزن الطفل قليل، أغلب التطعيمات بتكون آمنة وفعالة.<br />لكن فيه استثناء مهم خاص بتطعيم الالتهاب الكبدي B:
                  </p>
                  <ul>
                    <li>لو وزن الطفل أقل من 2 كيلو والأم سليمة من فيروس B، ممكن الطبيب يقرر تأجيل جرعة الولادة لشهر أو لحد الخروج من الحضّانة.</li>
                    <li>أما لو الأم مصابة بالفيروس أو حالتها غير معروفة، الطفل لازم ياخد التطعيم وحقنة الأجسام المضادة بعد الولادة مباشرة مهما كان وزنه.</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading">هل التطعيمات آمنة للأطفال المبتسرين؟</h3>
                <div className="answer-bubble">
                  <p>أيوه، والدراسات أثبتت إن التطعيمات آمنة جدًا للأطفال الخُدّج، وفوائدها أكبر بكتير من أي أعراض جانبية بسيطة ممكن تحصل.</p>
                  <p>الأعراض العادية ممكن تشمل:</p>
                  <ul>
                    <li>سخونية بسيطة</li>
                    <li>تهيج أو عياط</li>
                    <li>احمرار أو تورم مكان الحقنة</li>
                  </ul>
                  <p>ودي أعراض طبيعية ومؤقتة. للمبتسرين وغير المبتسرين.</p>
                </div>

                <h3 className="bubble-section-heading">هل ممكن يحصل مشاكل بعد التطعيم؟</h3>
                <div className="answer-bubble">
                  <p>بعض الأطفال المبتسرين جدًا، خصوصًا اللي عندهم مشاكل تنفس أو لسه في الحضّانة، ممكن يحصل لهم:</p>
                  <ul>
                    <li>توقف بسيط ومؤقت في التنفس</li>
                    <li>بطء بسيط في ضربات القلب</li>
                  </ul>
                  <p>
                    علشان كده الأطفال دول بيحتاجوا متابعة بعد التطعيم لمدة يومين أو ثلاثة داخل المستشفى، خصوصًا بعد أول جرعات.<br />لكن المهم نعرف إن ده مؤقت، ومايمنعش التطعيم.
                  </p>
                </div>

                <h3 className="bubble-section-heading">هل التطعيمات تسبب الوفاة المفاجئة؟</h3>
                <div className="answer-bubble">
                  <p>
                    لا ❌<br />مفيش دليل علمي يثبت إن التطعيمات بتزود خطر الوفاة المفاجئة عند الرضع.
                  </p>
                </div>

                <h3 className="bubble-section-heading">لو الطفل لسه في الحضّانة؟</h3>
                <div className="answer-bubble">
                  <p>
                    وجود الطفل في الحضّانة مش معناه تأجيل التطعيم تلقائيًا.<br />أما لو حالته غير مستقرة أو عنده مشاكل تنفس شديدة، الطبيب ممكن يأجل التطعيم مؤقتًا لحد ما حالته تتحسن.<br />لو حالته مستقرة، يقدر ياخد التطعيمات عادي حتى داخل الحضّانة. بس ناخد بالنا إن الروتا وشلل الأطفال النقط تطعيمات حية وبالتالي ممكن تتنقل بين الأطفال في الحضانة، فالافضل لحماية الجميع يتاخدوا بعد ما يخرجوا منها.
                  </p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">الأطفال اللي عندهم أمراض مزمنة</p>
                  <p>بعض الأطفال المبتسرين بيكون عندهم:</p>
                  <ul>
                    <li>مشاكل رئة مزمنة</li>
                    <li>أمراض قلب</li>
                    <li>ضعف مناعة</li>
                    <li>مشاكل صحية أخرى</li>
                  </ul>
                  <p>ودول أحيانًا بيحتاجوا متابعة خاصة أو تطعيمات إضافية حسب الحالة، علشان نوفر لهم أفضل حماية ممكنة.</p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">حماية الطفل مش بتطعيمه هو لوحده</p>
                  <p>مهم جدًا كمان إن الناس اللي حوالين الطفل ده يكونوا متطعمين، خصوصًا:</p>
                  <ul>
                    <li>الأم والأب</li>
                    <li>الإخوات</li>
                    <li>أي شخص بيقضي وقت طويل مع الطفل</li>
                  </ul>
                  <p>لأن الطفل المبتسر بيتأثر بالعدوى أسرع من غيره.</p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">الخلاصة</p>
                  <p>
                    الطفل المبتسر محتاج التطعيمات أكتر، مش أقل.<br />وفي أغلب الحالات:
                  </p>
                  <ul>
                    <li>التطعيمات بتتاخد حسب العمر الحقيقي</li>
                    <li>آمنة وفعالة</li>
                    <li>وتحمي الطفل من أمراض خطيرة جدًا</li>
                  </ul>
                </div>
              </div>

              <div className="buttons-container" style={{ marginTop: '1rem', width: '100%' }}>
                <div className="buttons-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                  <a
                    href="/non-hcp/preterm/vaccine-specific-guidelines"
                    className="section-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="button-emoji">📘</span>
                    <span className="button-text">إرشادات خاصة بالتطعيمات للأطفال المبتسرين</span>
                    <span className="button-text-en">Vaccine-Specific Guidelines for Preterm Infants</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lang-divider"></div>

            <div className="about-lang" style={{ alignItems: 'flex-start' }}>
              <h2
                className="about-lang-title"
                style={{ direction: 'ltr', textAlign: 'center', width: '100%', alignSelf: 'center', marginBottom: '1rem' }}
              >
                Preterm Infant Vaccinations:
                <br />
                Very Important and Very Safe
              </h2>
              <div className="about-lang-intro bubble-container" style={{ direction: 'ltr', textAlign: 'left', width: '100%', lineHeight: 1.8 }}>
                <div className="answer-bubble">
                  <p>
                    When a baby is born early, it is completely natural for families to worry about health, feeding, and growth. One of the most common questions is: "Can my baby receive vaccines normally?" and "Should we wait because the baby is small or born early?"
                    <br />
                    <br />
                    The truth is that preterm babies need protection from infections even more than others, because their immunity is still weaker and they are more vulnerable to infections and complications.
                  </p>
                </div>

                <h3 className="bubble-section-heading">What is a preterm infant?</h3>
                <div className="answer-bubble">
                  <p>The World Health Organization defines any baby born before 37 weeks of pregnancy as preterm.</p>
                  <p>Preterm birth is categorized as:</p>
                  <ul>
                    <li>Extremely preterm: before 28 weeks</li>
                    <li>Very preterm: 28 to less than 32 weeks</li>
                    <li>Moderate to late preterm: 32 to less than 37 weeks</li>
                  </ul>
                  <p>In Egypt, preterm birth rates are relatively high, so understanding vaccination for these babies is very important.</p>
                </div>

                <h3 className="bubble-section-heading">Should preterm babies receive vaccines on schedule?</h3>
                <div className="answer-bubble">
                  <p>
                    Yes ✅<br />In most cases, preterm infants should receive vaccines according to their chronological age from birth, not corrected age.<br />So if the baby is one month old from date of birth, the one-month vaccines are given even if the baby was born early.<br />This is essential for early protection from serious diseases, especially because preterm babies have weaker immunity than full-term babies.
                  </p>
                </div>

                <h3 className="bubble-section-heading">Does low weight prevent vaccination?</h3>
                <div className="answer-bubble">
                  <p>
                    For most vaccines: No ❌<br />Even with low birth weight, most vaccines are safe and effective.<br />There is one important exception for hepatitis B vaccine:
                  </p>
                  <ul>
                    <li>If the baby weighs less than 2 kg and the mother is negative for hepatitis B, the birth dose may be delayed until 1 month of age or hospital discharge, based on clinical decision.</li>
                    <li>If the mother is infected or her status is unknown, the baby must receive hepatitis B vaccine and hepatitis B immunoglobulin immediately after birth regardless of weight.</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading">Are vaccines safe for preterm infants?</h3>
                <div className="answer-bubble">
                  <p>Yes. Studies show that vaccines are very safe in preterm infants, and benefits are much greater than mild side effects.</p>
                  <p>Common expected side effects include:</p>
                  <ul>
                    <li>Mild fever</li>
                    <li>Irritability or crying</li>
                    <li>Redness or swelling at injection site</li>
                  </ul>
                  <p>These are normal and temporary, in both preterm and full-term babies.</p>
                </div>

                <h3 className="bubble-section-heading">Can problems happen after vaccination?</h3>
                <div className="answer-bubble">
                  <p>In some very preterm infants, especially those with respiratory issues or those still in NICU, there can be:</p>
                  <ul>
                    <li>Brief temporary apnea episodes</li>
                    <li>Mild temporary slowing of heart rate</li>
                  </ul>
                  <p>
                    That is why some infants need monitoring in hospital for 48 to 72 hours after vaccination, especially after early doses.<br />These events are usually temporary and do not mean vaccines should be avoided.
                  </p>
                </div>

                <h3 className="bubble-section-heading">Do vaccines increase sudden infant death risk?</h3>
                <div className="answer-bubble">
                  <p>
                    No ❌<br />There is no scientific evidence that vaccines increase the risk of sudden infant death.
                  </p>
                </div>

                <h3 className="bubble-section-heading">If the baby is still in NICU?</h3>
                <div className="answer-bubble">
                  <p>
                    Being in NICU does not automatically mean delaying vaccines.<br />If the infant is unstable or has severe respiratory compromise, the doctor may delay temporarily until stable.<br />If clinically stable, routine vaccines can be given even in NICU. However, oral live vaccines (such as rotavirus and oral polio drops) may transmit in NICU settings, so they are often better given after discharge for overall protection.
                  </p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">Preterm infants with chronic conditions</p>
                  <p>Some preterm infants may have:</p>
                  <ul>
                    <li>Chronic lung disease</li>
                    <li>Heart disease</li>
                    <li>Immunodeficiency</li>
                    <li>Other medical conditions</li>
                  </ul>
                  <p>These infants may require closer follow-up or additional vaccines depending on condition, to ensure best possible protection.</p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">Protecting the baby is not only about vaccinating the baby</p>
                  <p>People around the infant should also be vaccinated, especially:</p>
                  <ul>
                    <li>Mother and father</li>
                    <li>Siblings</li>
                    <li>Anyone spending long periods with the baby</li>
                  </ul>
                  <p>Because preterm infants are affected by infections faster and more severely.</p>
                </div>

                <div className="answer-bubble">
                  <p className="bubble-subheading-centered">Summary</p>
                  <p>
                    Preterm babies usually need vaccines more, not less.<br />In most cases:
                  </p>
                  <ul>
                    <li>Vaccines are given by chronological age</li>
                    <li>Vaccines are safe and effective</li>
                    <li>Vaccines protect against very serious diseases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/walaa-adel-895009369" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
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
        .bubble-container .answer-bubble > p.bubble-subheading-centered {
          text-align: center;
          font-size: 1.32rem;
          font-weight: 800;
          line-height: 1.4;
          margin: 0 0 0.75rem 0;
          width: 100%;
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
        }
        .bubble-container h3.bubble-section-heading:first-of-type {
          margin-top: 0.75rem;
        }
      `}</style>
    </div>
  );
}
