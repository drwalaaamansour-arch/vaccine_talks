'use client';

import Link from 'next/link';
import Header from '@/components/Header';

const PREGNANCY_AR_PDF = encodeURI('/التطعيمات اثناء الحمل.pdf');
const PREGNANCY_AR_PDF_EMBED = `${PREGNANCY_AR_PDF}#view=FitH&toolbar=1`;

export default function PregnancyBreastfeedingPage() {
  return (
    <div className="min-h-screen pregnancy-page">
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
        <div className="about-elegant-card pregnancy-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual pregnancy-page-bilingual">
            <div className="about-lang arabic pregnancy-inner" dir="rtl">
              <p className="pregnancy-back">
                <Link href="/non-hcp/special-cases-vaccines">العودة لتطعيمات الحالات الخاصة ←</Link>
              </p>

              <div className="pregnancy-title-row">
                <span className="pregnancy-icon" aria-hidden>
                  🤰
                </span>
                <h2 className="about-lang-title pregnancy-hero-title">
                  التطعيمات أثناء الحمل.. حماية ليكي ولطفلك
                </h2>
              </div>

              <div className="bubble-container pregnancy-bubble-wrap pregnancy-bubble-wrap--ar" dir="rtl">
                <div className="pregnancy-lead">
                  <p>
                    فترة الحمل من أهم الفترات اللي الأم بتحاول فيها تحافظ على صحتها وصحة البيبي، وواحدة من
                    أهم طرق الحماية هي التطعيمات المناسبة أثناء الحمل.
                  </p>
                  <p className="pregnancy-lead-second">
                    وده مهم خصوصًا لأن مناعة الحامل بتتغير أثناء الحمل، فممكن تكون أكثر عرضة لبعض العدوى
                    ومضاعفاتها.
                  </p>
                </div>

                <div className="pregnancy-benefits-card">
                  <p className="pregnancy-benefits-intro">بعض التطعيمات آمنة جدًا ومهمة للحامل، لأنها:</p>
                  <ul className="pregnancy-check-list">
                    <li>بتحمي الأم من أمراض خطيرة</li>
                    <li>
                      وبتنقل أجسام مضادة للبيبي عن طريق المشيمة فتوفر له حماية مهمة جدًا في أول شهور من
                      حياته
                    </li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    🌡️
                  </span>
                  تطعيم الإنفلونزا
                </h3>
                <div className="answer-bubble">
                  <p>
                    أثناء الحمل، المناعة بتضعف بشكل طبيعي لحماية الجنين، وده ممكن يخلي الحامل أكثر عرضة
                    للإصابة بالإنفلونزا ومضاعفاتها.
                  </p>
                  <p className="pregnancy-sub-label">والإنفلونزا أثناء الحمل ممكن تسبب:</p>
                  <ul>
                    <li>التهاب رئوي</li>
                    <li>صعوبة تنفس</li>
                    <li>دخول المستشفى</li>
                    <li>وأحيانًا مضاعفات خطيرة للحامل والجنين</li>
                  </ul>
                  <p>علشان كده، تطعيم الإنفلونزا مهم جدًا أثناء الحمل.</p>
                  <div className="pregnancy-highlight">
                    <p>
                      وفايدته مش للأم بس — الأجسام المضادة اللي جسم الأم بيكونها بعد التطعيم بتوصل للبيبي
                      وتحميه في أول شهور بعد الولادة، وهي فترة بيكون فيها لسه صغير على التطعيم.
                    </p>
                  </div>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    💉
                  </span>
                  تطعيم السعال الديكي اللي موجود في (Tdap)
                </h3>
                <div className="answer-bubble">
                  <p>
                    السعال الديكي مرض خطير جدًا على الرضع، وخصوصًا في أول شهور الحياة.
                  </p>
                  <p>علشان كده يُنصح إن الحامل تاخد تطعيم Tdap، ويُفضل بين الأسبوع 27 و36 من كل حمل.</p>
                  <div className="pregnancy-important-box">
                    <p className="pregnancy-important-label">مهم جدًا:</p>
                    <ul>
                      <li>
                        حتى لو الأم أخدته قبل كده، لازم يتكرر مع كل حمل علشان مستوى الحماية يوصل للبيبي
                        بشكل كافي.
                      </li>
                      <li>
                        ولو الأم ماخدتوش أثناء الحمل، يُفضّل أخذه بعد الولادة مباشرة لو ماخدتوش قبل كده.
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    🫁
                  </span>
                  تطعيم RSV
                </h3>
                <div className="answer-bubble">
                  <p>فيروس RSV من أشهر الفيروسات اللي تسبب:</p>
                  <ul>
                    <li>كحة</li>
                    <li>برد</li>
                    <li>والتهاب بالشعب الهوائية عند الأطفال</li>
                  </ul>
                  <p className="pregnancy-sub-label">وفي بعض الرضع ممكن يسبب:</p>
                  <ul>
                    <li>التهاب رئوي شديد</li>
                    <li>صعوبة تنفس</li>
                    <li>أو دخول المستشفى</li>
                  </ul>
                  <p>
                    لما الحامل تاخد تطعيم RSV أثناء الحمل، الأجسام المضادة بتنتقل للبيبي وتساعد تحميه من
                    الحالات الشديدة خلال أول 6 شهور من عمره.
                  </p>
                  <p>
                    ويُفضّل أخذه بداية من الأسبوع 28 من الحمل للحصول على أفضل حماية للطفل.
                  </p>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--warn">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    ⚠️
                  </span>
                  هل كل التطعيمات تنفع أثناء الحمل؟
                </h3>
                <div className="pregnancy-no-badge" aria-label="لا">
                  <span>لا</span>
                  <span aria-hidden>❌</span>
                </div>
                <div className="answer-bubble pregnancy-warn-bubble">
                  <p>
                    في تطعيمات معينة لا يُنصح بها أثناء الحمل لأنها &quot;تطعيمات حية&quot; — يعني تحتوي على
                    نسخة ضعيفة من الفيروس.
                  </p>
                  <p className="pregnancy-sub-label">ومنها:</p>
                  <ul>
                    <li>تطعيم الحصبة والنكاف والحصبة الألمانية (MMR)</li>
                    <li>تطعيم الجديري المائي</li>
                    <li>تطعيم الدرن BCG</li>
                    <li>التطعيم الفموي للتيفود</li>
                    <li>الحمى الصفراء (إلا في ظروف خاصة جدًا)</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    💛
                  </span>
                  طيب لو الحامل أخدت تطعيم حي بالغلط؟
                </h3>
                <div className="answer-bubble pregnancy-reassure-bubble">
                  <p>
                    دي نقطة مهمة جدًا بتسبب خوف لكثير من الأمهات. رغم إن التطعيمات الحية غير موصى بها أثناء
                    الحمل، الدراسات والمتابعة لسنوات طويلة طمنتنا إن:
                  </p>
                  <ul>
                    <li>مفيش دليل إن تطعيم MMR سبب تشوهات خلقية</li>
                    <li>ومفيش حالات مؤكدة لمتلازمة الحصبة الألمانية الخلقية بسبب التطعيم</li>
                    <li>
                      وكمان مفيش حالات ثبت فيها حدوث متلازمة الجديري الخلقي بسبب تطعيم الجديري أثناء الحمل
                    </li>
                  </ul>
                  <div className="pregnancy-pin-note">
                    <span className="pregnancy-pin" aria-hidden>
                      📌
                    </span>
                    <p>
                      يعني لو حصل التطعيم بالخطأ قبل اكتشاف الحمل أو أثناءه: ده في حد ذاته مش سبب لإنهاء
                      الحمل — لكن لازم متابعة الطبيب وشرح الوضع بهدوء للأم.
                    </p>
                  </div>
                </div>

                <div className="pregnancy-conclusion">
                  <h3 className="pregnancy-conclusion-title">الخلاصة</h3>
                  <p>بعض التطعيمات أثناء الحمل مهمة جدًا وبتحمي الأم والبيبي قبل وبعد الولادة.</p>
                  <p className="pregnancy-sub-label">وأهمها:</p>
                  <ul className="pregnancy-conclusion-vax">
                    <li>الإنفلونزا</li>
                    <li>Tdap</li>
                    <li>RSV</li>
                  </ul>
                  <p>
                    أما التطعيمات الحية فغالبًا يتم تأجيلها لما بعد الولادة، لكن لو اتاخدت بالخطأ فده لا
                    يعني بالضرورة وجود خطر على الجنين.
                  </p>
                  <p className="pregnancy-conclusion-closing">
                    وأفضل خطوة دائمًا هي متابعة الطبيب وتنظيم التطعيمات قبل الحمل وأثناءه للحصول على أفضل
                    حماية ممكنة ليكي ولطفلك.
                  </p>
                </div>
              </div>
            </div>

            <div className="pregnancy-lang-divider" aria-hidden />

            <div className="about-lang pregnancy-inner pregnancy-inner--en" dir="ltr">
              <p className="pregnancy-back pregnancy-back--en">
                <Link href="/non-hcp/special-cases-vaccines">← Back to special-case vaccinations</Link>
              </p>

              <div className="pregnancy-title-row pregnancy-title-row--en">
                <span className="pregnancy-icon" aria-hidden>
                  🤰
                </span>
                <h2 className="about-lang-title pregnancy-hero-title pregnancy-hero-title--en" dir="ltr">
                  Vaccinations during pregnancy — protection for you and your baby
                </h2>
                <p className="pregnancy-subtitle-ar" lang="ar" dir="rtl">
                  التطعيمات أثناء الحمل.. حماية ليكي ولطفلك
                </p>
              </div>

              <div className="bubble-container pregnancy-bubble-wrap pregnancy-bubble-wrap--en" dir="ltr">
                <div className="pregnancy-lead">
                  <p>
                    Pregnancy is one of the most important times when a mother works to protect her own health
                    and her baby&apos;s. One of the best ways to do that is getting the right vaccines during
                    pregnancy.
                  </p>
                  <p className="pregnancy-lead-second">
                    This matters especially because immunity changes during pregnancy, so you may be more
                    vulnerable to some infections and their complications.
                  </p>
                </div>

                <div className="pregnancy-benefits-card">
                  <p className="pregnancy-benefits-intro">
                    Some vaccines are very safe and important during pregnancy because they:
                  </p>
                  <ul className="pregnancy-check-list pregnancy-check-list--en">
                    <li>Protect the mother from serious illness</li>
                    <li>
                      Pass antibodies to the baby through the placenta, giving important protection in the
                      first months of life
                    </li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--en">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    🌡️
                  </span>
                  Influenza (flu) vaccine
                </h3>
                <div className="answer-bubble">
                  <p>
                    During pregnancy, the immune system naturally weakens to protect the baby, which can make
                    flu and its complications more likely.
                  </p>
                  <p className="pregnancy-sub-label">Flu during pregnancy can cause:</p>
                  <ul>
                    <li>Pneumonia</li>
                    <li>Difficulty breathing</li>
                    <li>Hospital admission</li>
                    <li>Sometimes serious complications for the mother and baby</li>
                  </ul>
                  <p>That is why the flu vaccine is very important during pregnancy.</p>
                  <div className="pregnancy-highlight">
                    <p>
                      The benefit is not only for the mother — antibodies made after vaccination cross to the
                      baby and help protect them in the first months after birth, when they are still too
                      young for their own vaccines.
                    </p>
                  </div>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--en">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    💉
                  </span>
                  Whooping cough vaccine (Tdap)
                </h3>
                <div className="answer-bubble">
                  <p>
                    Whooping cough (pertussis) is very dangerous for infants, especially in the first months
                    of life.
                  </p>
                  <p>
                    Pregnant women are advised to receive Tdap, ideally between weeks 27 and 36 of each
                    pregnancy.
                  </p>
                  <div className="pregnancy-important-box">
                    <p className="pregnancy-important-label">Very important:</p>
                    <ul>
                      <li>
                        Even if you received it before, it should be repeated with each pregnancy so enough
                        protection reaches the baby.
                      </li>
                      <li>
                        If it was not given during pregnancy, it is best to receive it right after delivery
                        if you have not had it previously.
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--en">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    🫁
                  </span>
                  RSV vaccine
                </h3>
                <div className="answer-bubble">
                  <p>RSV is one of the most common viruses that cause:</p>
                  <ul>
                    <li>Cough</li>
                    <li>Cold symptoms</li>
                    <li>Bronchiolitis in children</li>
                  </ul>
                  <p className="pregnancy-sub-label">In some infants it can cause:</p>
                  <ul>
                    <li>Severe pneumonia</li>
                    <li>Difficulty breathing</li>
                    <li>Hospital admission</li>
                  </ul>
                  <p>
                    When a pregnant woman receives the RSV vaccine, antibodies cross to the baby and help
                    protect against severe disease in the first 6 months of life.
                  </p>
                  <p>
                    It is preferably given from week 28 of pregnancy for the best protection for the child.
                  </p>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--en pregnancy-section-heading--warn">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    ⚠️
                  </span>
                  Can every vaccine be given during pregnancy?
                </h3>
                <div className="pregnancy-no-badge" aria-label="No">
                  <span>No</span>
                  <span aria-hidden>❌</span>
                </div>
                <div className="answer-bubble pregnancy-warn-bubble">
                  <p>
                    Certain vaccines are not recommended during pregnancy because they are &quot;live&quot;
                    vaccines — they contain a weakened form of the virus.
                  </p>
                  <p className="pregnancy-sub-label">These include:</p>
                  <ul>
                    <li>Measles–mumps–rubella (MMR)</li>
                    <li>Varicella (chickenpox)</li>
                    <li>BCG (tuberculosis)</li>
                    <li>Oral typhoid vaccine</li>
                    <li>Yellow fever (except in very special circumstances)</li>
                  </ul>
                </div>

                <h3 className="bubble-section-heading pregnancy-section-heading pregnancy-section-heading--en">
                  <span className="pregnancy-section-emoji" aria-hidden>
                    💛
                  </span>
                  What if a live vaccine was given by mistake?
                </h3>
                <div className="answer-bubble pregnancy-reassure-bubble">
                  <p>
                    This is a very important concern for many mothers. Although live vaccines are not
                    recommended in pregnancy, years of studies and follow-up have reassured us that:
                  </p>
                  <ul>
                    <li>There is no evidence that MMR vaccine causes birth defects</li>
                    <li>
                      There are no confirmed cases of congenital rubella syndrome caused by the vaccine
                    </li>
                    <li>
                      There are no confirmed cases of congenital varicella syndrome from varicella vaccine
                      during pregnancy
                    </li>
                  </ul>
                  <div className="pregnancy-pin-note pregnancy-pin-note--en">
                    <span className="pregnancy-pin" aria-hidden>
                      📌
                    </span>
                    <p>
                      So if vaccination happened by mistake before or during pregnancy, that alone is not a
                      reason to end the pregnancy — but follow-up with your doctor and calm discussion with
                      the mother are essential.
                    </p>
                  </div>
                </div>

                <div className="pregnancy-conclusion">
                  <h3 className="pregnancy-conclusion-title">Summary</h3>
                  <p>
                    Some vaccines during pregnancy are very important and protect both the mother and the baby
                    before and after birth.
                  </p>
                  <p className="pregnancy-sub-label">The most important are:</p>
                  <ul className="pregnancy-conclusion-vax">
                    <li>Influenza (flu)</li>
                    <li>Tdap</li>
                    <li>RSV</li>
                  </ul>
                  <p>
                    Live vaccines are usually deferred until after delivery, but if one was given by mistake
                    that does not necessarily mean harm to the baby.
                  </p>
                  <p className="pregnancy-conclusion-closing">
                    The best step is always to follow up with your doctor and plan vaccinations before and
                    during pregnancy for the best possible protection for you and your child.
                  </p>
                </div>
              </div>
            </div>

            <div className="pregnancy-pdf-section">
              <h3 className="pregnancy-pdf-title" dir="rtl">
                التطعيمات أثناء الحمل — PDF
              </h3>
              <p className="pregnancy-pdf-title-en" dir="ltr">
                Vaccinations during pregnancy — PDF
              </p>
              <iframe
                src={PREGNANCY_AR_PDF_EMBED}
                width="100%"
                height="800px"
                className="pregnancy-pdf-frame"
                title="التطعيمات أثناء الحمل PDF"
              />
              <div className="pregnancy-pdf-download">
                <a href={PREGNANCY_AR_PDF} download className="pregnancy-pdf-download-btn">
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
        .pregnancy-elegant {
          overflow: visible;
        }
        .pregnancy-page-bilingual.about-bilingual {
          flex-direction: column;
          align-items: stretch;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          direction: ltr;
        }
        .pregnancy-lang-divider {
          width: 100%;
          max-width: 52rem;
          margin: 0.25rem auto;
          height: 2px;
          border: none;
          background: linear-gradient(
            to right,
            transparent,
            rgba(64, 96, 109, 0.35) 15%,
            rgba(180, 120, 130, 0.35) 50%,
            rgba(64, 96, 109, 0.35) 85%,
            transparent
          );
        }
        .pregnancy-page-bilingual .about-lang {
          width: 100%;
          min-height: 0;
          height: auto;
          justify-content: flex-start;
        }
        .pregnancy-inner {
          width: 100%;
          max-width: 52rem;
          margin-inline: auto;
          direction: rtl;
          text-align: right;
          align-items: stretch !important;
          align-self: stretch;
          line-height: 1.9;
          padding: 0.25rem 0.35rem 0.5rem;
        }
        .pregnancy-page-bilingual .pregnancy-inner.about-lang {
          align-items: stretch !important;
        }
        .pregnancy-back {
          margin: 0 0 1rem;
        }
        .pregnancy-back a {
          color: #40606d;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .pregnancy-back a:hover {
          text-decoration: underline;
        }
        .pregnancy-title-row {
          direction: rtl;
          text-align: center;
          margin-bottom: 1.35rem;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(180, 120, 130, 0.18);
        }
        .pregnancy-icon {
          display: block;
          font-size: 2.5rem;
          margin-bottom: 0.35rem;
          filter: drop-shadow(0 2px 8px rgba(180, 100, 120, 0.25));
        }
        .pregnancy-hero-title {
          margin: 0 0 0.4rem !important;
          font-size: clamp(1.35rem, 3.8vw, 1.85rem) !important;
          color: #6b4a52 !important;
          letter-spacing: -0.01em;
          line-height: 1.45 !important;
        }
        .pregnancy-subtitle-ar {
          margin: 0.35rem 0 0;
          color: #6b8a96;
          font-size: 1rem;
          font-style: italic;
          font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
        }
        .pregnancy-bubble-wrap {
          margin-top: 0.25rem;
        }
        .pregnancy-bubble-wrap--ar {
          direction: rtl;
          text-align: right;
        }
        .pregnancy-bubble-wrap--ar :global(h3.bubble-section-heading) {
          direction: rtl;
          text-align: right;
          justify-content: flex-start;
        }
        .pregnancy-bubble-wrap--ar :global(.answer-bubble) {
          direction: rtl;
          text-align: right;
        }
        .pregnancy-bubble-wrap--ar :global(.answer-bubble ul) {
          padding-inline-start: 1.25rem;
          padding-inline-end: 0;
        }
        .pregnancy-inner--en {
          direction: ltr;
          text-align: left;
        }
        .pregnancy-back--en {
          text-align: left;
        }
        .pregnancy-title-row--en {
          direction: ltr;
        }
        .pregnancy-hero-title--en {
          color: #355a63 !important;
        }
        .pregnancy-bubble-wrap--en {
          direction: ltr;
          text-align: left;
        }
        .pregnancy-bubble-wrap--en :global(h3.bubble-section-heading) {
          direction: ltr;
          text-align: left;
          justify-content: flex-start;
        }
        .pregnancy-bubble-wrap--en :global(.answer-bubble) {
          direction: ltr;
          text-align: left;
        }
        .pregnancy-bubble-wrap--en :global(.answer-bubble ul) {
          padding-inline-start: 1.25rem;
          padding-inline-end: 0;
        }
        .pregnancy-section-heading--en {
          direction: ltr;
          text-align: left;
          color: #355a63 !important;
        }
        .pregnancy-check-list--en li::before {
          inset-inline-start: auto;
          left: -1.15rem;
        }
        .pregnancy-check-list--en {
          padding-inline-start: 0;
          padding-left: 1.2rem;
        }
        .pregnancy-pin-note--en {
          direction: ltr;
        }
        .pregnancy-inner--en .pregnancy-lead,
        .pregnancy-inner--en .pregnancy-benefits-card,
        .pregnancy-inner--en .pregnancy-conclusion,
        .pregnancy-inner--en .pregnancy-important-box,
        .pregnancy-inner--en .pregnancy-highlight,
        .pregnancy-inner--en .pregnancy-pin-note {
          direction: ltr;
          text-align: left;
        }
        .pregnancy-inner.arabic .pregnancy-lead,
        .pregnancy-inner.arabic .pregnancy-benefits-card,
        .pregnancy-inner.arabic .pregnancy-conclusion,
        .pregnancy-inner.arabic .pregnancy-important-box,
        .pregnancy-inner.arabic .pregnancy-highlight,
        .pregnancy-inner.arabic .pregnancy-pin-note {
          direction: rtl;
          text-align: right;
        }
        .pregnancy-lead {
          background: linear-gradient(
            145deg,
            rgba(255, 252, 250, 0.98) 0%,
            rgba(252, 238, 242, 0.9) 40%,
            rgba(230, 242, 245, 0.5) 100%
          );
          border: 1px solid rgba(180, 130, 140, 0.22);
          border-radius: 18px;
          padding: 1.25rem 1.4rem;
          margin-bottom: 1.2rem;
          box-shadow:
            0 10px 32px rgba(107, 74, 82, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.85) inset;
        }
        .pregnancy-lead p {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #5c4549;
        }
        .pregnancy-lead-second {
          margin-top: 0.85rem !important;
          font-weight: 500 !important;
        }
        .pregnancy-benefits-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-radius: 18px;
          padding: 1.15rem 1.3rem 1.05rem;
          margin-bottom: 1.35rem;
          box-shadow: 0 6px 22px rgba(64, 96, 109, 0.07);
        }
        .pregnancy-benefits-intro {
          margin: 0 0 0.65rem;
          font-weight: 700;
          color: #355a63;
        }
        .pregnancy-check-list {
          margin: 0;
          padding-inline-start: 1.2rem;
          list-style: none;
        }
        .pregnancy-check-list li {
          position: relative;
          margin-bottom: 0.55rem;
          padding-inline-start: 0.15rem;
          color: #4a3f3a;
        }
        .pregnancy-check-list li::before {
          content: '✓';
          position: absolute;
          inset-inline-start: -1.15rem;
          color: #40606d;
          font-weight: 800;
        }
        .pregnancy-check-list li:last-child {
          margin-bottom: 0;
        }
        .pregnancy-bubble-wrap--ar .pregnancy-section-heading {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 0.45rem;
          flex-wrap: wrap;
          direction: rtl;
          text-align: right;
          color: #6b4a52 !important;
        }
        .pregnancy-bubble-wrap--en .pregnancy-section-heading {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 0.45rem;
          flex-wrap: wrap;
        }
        .pregnancy-section-heading--warn {
          color: #8b5a3c !important;
        }
        .pregnancy-section-emoji {
          font-size: 1.35rem;
          line-height: 1;
        }
        .pregnancy-sub-label {
          font-weight: 700;
          color: #355a63;
          margin-top: 0.15rem !important;
        }
        .pregnancy-highlight {
          margin-top: 0.85rem;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(64, 96, 109, 0.1) 0%, rgba(245, 239, 230, 0.85) 100%);
          border-inline-start: 3px solid #40606d;
        }
        .pregnancy-highlight p {
          margin: 0;
          font-weight: 600;
          color: #355a63;
        }
        .pregnancy-important-box {
          margin-top: 0.9rem;
          padding: 0.9rem 1rem;
          border-radius: 14px;
          background: rgba(139, 115, 85, 0.1);
          border: 1px solid rgba(139, 115, 85, 0.22);
        }
        .pregnancy-important-label {
          margin: 0 0 0.5rem !important;
          font-weight: 800 !important;
          color: #6b4a3d !important;
        }
        .pregnancy-important-box ul {
          margin: 0;
          padding-inline-start: 1.2rem;
        }
        .pregnancy-important-box li {
          margin-bottom: 0.45rem;
        }
        .pregnancy-important-box li:last-child {
          margin-bottom: 0;
        }
        .pregnancy-no-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(252, 235, 230, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
          border: 1px solid rgba(180, 100, 90, 0.25);
          font-weight: 800;
          font-size: 1.15rem;
          color: #8b4a42;
          margin: 0 0 0.65rem;
        }
        .pregnancy-warn-bubble {
          border-color: rgba(180, 100, 90, 0.25) !important;
          background: rgba(252, 242, 238, 0.65) !important;
        }
        .pregnancy-reassure-bubble {
          border-color: rgba(180, 150, 80, 0.28) !important;
          background: rgba(255, 250, 235, 0.75) !important;
        }
        .pregnancy-pin-note {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.5rem;
          direction: rtl;
          margin-top: 0.9rem;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px dashed rgba(64, 96, 109, 0.25);
        }
        .pregnancy-pin {
          flex-shrink: 0;
          font-size: 1.2rem;
        }
        .pregnancy-pin-note p {
          margin: 0 !important;
          font-weight: 600;
          color: #355a63;
        }
        .pregnancy-conclusion {
          margin-top: 1.5rem;
          padding: 1.35rem 1.4rem 1.25rem;
          border-radius: 20px;
          background: linear-gradient(
            160deg,
            rgba(64, 96, 109, 0.12) 0%,
            rgba(252, 238, 242, 0.55) 50%,
            rgba(245, 239, 230, 0.9) 100%
          );
          border: 1px solid rgba(64, 96, 109, 0.16);
          box-shadow: 0 8px 28px rgba(107, 74, 82, 0.1);
        }
        .pregnancy-conclusion-title {
          margin: 0 0 0.85rem;
          text-align: center;
          font-size: 1.35rem;
          font-weight: 800;
          color: #355a63;
        }
        .pregnancy-conclusion p {
          margin: 0 0 0.65rem;
          color: #4a3f3a;
        }
        .pregnancy-conclusion-vax {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          list-style: none;
          margin: 0 0 0.85rem !important;
          padding: 0 !important;
        }
        .pregnancy-conclusion-vax li {
          margin: 0;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: #40606d;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .pregnancy-conclusion-closing {
          margin-top: 0.85rem !important;
          margin-bottom: 0 !important;
          font-weight: 700;
          color: #6b4a52 !important;
          text-align: center;
        }
        .pregnancy-pdf-section {
          width: 100%;
          max-width: 100%;
          margin: clamp(1.75rem, 3vw, 2.5rem) 0 0.5rem;
          padding: 1.35rem 1.25rem 1.5rem;
          border: 1px solid rgba(64, 96, 109, 0.14);
          border-radius: 18px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.94) 0%,
            rgba(252, 238, 242, 0.55) 100%
          );
          box-shadow: 0 8px 28px rgba(64, 96, 109, 0.08);
          box-sizing: border-box;
        }
        .pregnancy-pdf-title {
          margin: 0 0 0.35rem;
          text-align: center;
          font-size: 1.35rem;
          font-weight: 800;
          color: #6b4a52;
          font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
        }
        .pregnancy-pdf-title-en {
          margin: 0 0 1rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
          color: #40606d;
          font-style: italic;
        }
        .pregnancy-pdf-frame {
          width: 100%;
          height: 800px;
          border: none;
          border-radius: 8px;
          display: block;
          background: #fff;
        }
        @media (max-width: 768px) {
          .pregnancy-pdf-section {
            padding: 1rem 0.75rem 1.15rem;
          }
        }
        .pregnancy-pdf-download {
          margin-top: 1rem;
          text-align: center;
        }
        .pregnancy-pdf-download-btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #40606d;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
        }
        .pregnancy-pdf-download-btn:hover {
          background: #355a63;
        }
      `}</style>
    </div>
  );
}
