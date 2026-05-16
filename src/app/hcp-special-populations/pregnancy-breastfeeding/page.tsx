import type { ReactNode } from 'react';
import Header from '@/components/Header';

const prose: React.CSSProperties = {
  direction: 'ltr',
  textAlign: 'left',
  lineHeight: 1.75,
  fontSize: '1rem',
  color: 'rgba(45, 42, 38, 0.92)',
};

const p = (mb = '0.95rem'): React.CSSProperties => ({ marginBottom: mb });

const listStyle: React.CSSProperties = {
  margin: '0 0 0.95rem 1.25rem',
  paddingInlineStart: '0.25rem',
};

const listItemStyle: React.CSSProperties = { marginBottom: '0.35rem' };

const PREGNANCY_PDF = '/pregnancy.pdf';
const ABRYSVO_PREGNANCY_PDF = encodeURI('/abrysvo during pregnancy.pdf');
const TDAP_PREGNANCY_PDF = encodeURI('/dtap during pregnancy.pdf');

const pdfDownloadBtn: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 2rem',
  background: '#40606D',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: 600,
};

function PregnancyPdfEmbed({ title, src }: { title: string; src: string }) {
  return (
    <div style={{ marginTop: '2rem', width: '100%' }}>
      <h3
        style={{
          textAlign: 'center',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#40606D',
          margin: '0 0 1rem',
        }}
      >
        {title}
      </h3>
      <iframe
        src={src}
        width="100%"
        height="800px"
        style={{ border: 'none', borderRadius: '8px', display: 'block' }}
        title={title}
      />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a href={src} download style={pdfDownloadBtn}>
          Download PDF / تحميل PDF
        </a>
      </div>
    </div>
  );
}

function ContentChunk({
  title,
  accent,
  children,
}: {
  title: string;
  accent: 'sage' | 'slate';
  children: ReactNode;
}) {
  const border =
    accent === 'sage'
      ? '4px solid rgba(64, 96, 109, 0.55)'
      : '4px solid rgba(139, 115, 85, 0.45)';
  const titleColor = accent === 'sage' ? '#40606D' : '#5c4d3d';
  const underline =
    accent === 'sage' ? 'rgba(64, 96, 109, 0.18)' : 'rgba(139, 115, 85, 0.2)';

  return (
    <div className="hcp-content-chunk-group" style={{ width: '100%' }}>
      <h4
        style={{
          color: titleColor,
          fontSize: '1.45rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: '0 0 0.65rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${underline}`,
          lineHeight: 1.35,
        }}
      >
        {title}
      </h4>
      <div
        className="hcp-content-chunk-bubble"
        style={{
          borderLeft: border,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
          padding: '1.25rem 1.25rem 1.3rem 1.45rem',
          borderRadius: '0 14px 14px 0',
          boxShadow:
            '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
        }}
      >
        <div style={prose}>{children}</div>
      </div>
    </div>
  );
}

export default function PregnancyBreastfeeding() {
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
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang hcp-content-column">
              <h2
                className="about-lang-title"
                style={{
                  textAlign: 'center',
                  fontSize: '2.5rem',
                  alignSelf: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                Pregnancy
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.35rem',
                  width: '100%',
                }}
              >
                <ContentChunk title="Overview" accent="sage">
                  <p style={p()}>
                    Certain vaccines are safe and recommended for women before, during, and after
                    pregnancy to help keep them and their babies healthy. The antibodies mothers
                    develop in response to these vaccines not only protect them, but also cross the
                    placenta and help protect their babies from serious diseases early in life.
                    Vaccinating during pregnancy also helps protect a mother from getting a serious
                    disease and then giving it to her newborn.
                  </p>
                </ContentChunk>

                <ContentChunk title="Flu vaccine" accent="slate">
                  <p style={p()}>
                    During pregnancy, your immune system (the body&apos;s natural defence) is weakened
                    to protect the pregnancy. This can mean you&apos;re less able to fight off infections
                    such as flu.
                  </p>
                  <p style={p()}>
                    Pregnant women are more likely to get flu complications (such as pneumonia) than
                    women who are not pregnant, and are more likely to be admitted to hospital. CDC
                    recommends getting vaccinated by the end of October. Getting the flu vaccine
                    during pregnancy is one of the best ways to protect yourself and your baby for
                    several months after birth from flu-related complications.
                  </p>
                </ContentChunk>

                <ContentChunk title="Tdap vaccine" accent="sage">
                  <p style={p()}>
                    Pregnant women are also encouraged to get the Tdap vaccine at any time during
                    pregnancy, but optimally between 27 and 36 weeks of each pregnancy, to protect
                    yourself and your baby from pertussis, also known as whooping cough. This vaccine
                    is recommended during every pregnancy, regardless of how long it has been since
                    you previously received the Tdap vaccine.
                  </p>
                  <p style={p('0')}>
                    If you did not get a Tdap vaccine during your pregnancy and have never gotten it,
                    CDC recommends that you get the vaccine immediately after giving birth.
                  </p>
                </ContentChunk>

                <ContentChunk title="Respiratory syncytial virus (RSV) vaccine" accent="slate">
                  <p style={p()}>
                    Respiratory syncytial virus (RSV) is a common virus that causes coughs and colds.
                    RSV usually gets better by itself, but it can be serious for babies.
                  </p>
                  <p style={p()}>
                    RSV can cause serious lung infections (including pneumonia and bronchiolitis),
                    which can make it difficult for babies to breathe and feed. These illnesses may
                    need to be treated in hospital.
                  </p>
                  <p style={p()}>
                    When you have the RSV vaccine in pregnancy, the protection from the vaccine is
                    passed to your baby. This means your baby is less likely to get severe RSV for
                    the first 6 months after they&apos;re born.
                  </p>
                  <p style={p('0')}>
                    You should be offered the RSV vaccine around the time of your 28-week antenatal
                    appointment. Getting vaccinated as soon as possible from 28 weeks will provide
                    the best protection for your baby. But it can be given later if needed, including
                    up until you go into labour.
                  </p>
                </ContentChunk>

                <ContentChunk title="Vaccines not usually advised in pregnancy (live vaccines)" accent="sage">
                  <p style={p()}>
                    If a vaccine uses a live version of the virus, such as the MMR vaccine, you&apos;ll
                    usually be advised to wait until after your baby is born before you get
                    vaccinated. Live vaccines include:
                  </p>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>BCG (vaccination against tuberculosis)</li>
                    <li style={listItemStyle}>MMR (measles, mumps and rubella)</li>
                    <li style={listItemStyle}>oral typhoid</li>
                    <li style={listItemStyle}>yellow fever</li>
                  </ul>
                </ContentChunk>

                <ContentChunk title="Measles-mumps-rubella (MMR) vaccine" accent="slate">
                  <p style={p()}>
                    Wild-type rubella infection might result in spontaneous abortion, stillbirth,
                    and, of most concern, congenital rubella syndrome (CRS), with its hallmark
                    characteristics of sensorineural deafness, congenital heart defects, microcephaly,
                    learning difficulties, and eye and bone defects. Measles infection in pregnancy
                    might result in substantial maternal morbidity, an increased abortion rate,
                    prematurity, stillbirth, and possibly congenital malformations. The data for mumps
                    infection are not consistent, with some studies showing a possible increased rate
                    of spontaneous abortion.
                  </p>
                  <p style={p()}>
                    There have been no reports of congenital malformations attributable to the MMR
                    vaccine virus. The Centers for Disease Control and Prevention (CDC) estimated the
                    theoretical risk to the fetus of CRS following vaccination with the rubella
                    vaccine to be 0% to 1.6%.
                  </p>
                  <p style={p('0')}>
                    In 1971, the CDC established the Vaccine in Pregnancy registry of women who had
                    received rubella vaccines within 3 months before or after conception. By 1989
                    there were data on 1221 inadvertently vaccinated pregnant women. There was no
                    evidence of an increase in fetal abnormalities or cases of CRS in the enrolled
                    women or the 321 rubella-susceptible women; therefore, enrolment in the registry
                    ended.
                  </p>
                </ContentChunk>

                <ContentChunk title="Varicella vaccine" accent="sage">
                  <p style={p()}>
                    Varicella virus infection during pregnancy is associated with a risk of congenital
                    varicella syndrome, characterized by low birth weight, skin scarring,
                    ophthalmologic defects, limb hypoplasia of bone and muscle, neuropathic bladder,
                    and gastrointestinal and neurologic abnormalities.
                  </p>
                  <p style={p('0')}>
                    There are no reports of congenital varicella syndrome after exposure to varicella
                    vaccine during pregnancy. A registry was established by the manufacturer in
                    collaboration with the CDC to monitor maternal and fetal outcomes of women who
                    were inadvertently immunized with varicella vaccine in the 3 months before
                    conception or at any time during pregnancy. Among the 737 women with pregnancy
                    outcomes available, there were no patterns of defects and no infants were born
                    with features consistent with congenital varicella syndrome among any of the
                    women enrolled or among the seronegative women.
                  </p>
                </ContentChunk>

                <ContentChunk title="Conclusion" accent="slate">
                  <p style={p('0')}>
                    Exposure to either live or inactive vaccines during pregnancy has not been
                    associated with an increased risk of adverse pregnancy outcomes, and no child to
                    date has been born with CRS or varicella syndrome following rubella or varicella
                    vaccination of the mother anytime during pregnancy. However, despite this
                    evidence-based information, these vaccines remain contraindicated during
                    pregnancy, and the Public Health Agency of Canada and the ACIP continue to
                    recommend that women avoid becoming pregnant for approximately 1 month following
                    vaccination. They do state that if pregnant women are exposed to these vaccines or
                    if pregnancy occurs soon after vaccination, the women should be counseled
                    regarding the theoretical risks to the fetus and vaccination should not be a
                    reason to consider termination of pregnancy.
                  </p>
                </ContentChunk>
              </div>

              <aside
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.35rem',
                  borderTop: '1px solid rgba(64, 96, 109, 0.2)',
                  direction: 'ltr',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#40606D',
                  }}
                >
                  References
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingInlineStart: '1.25rem',
                    lineHeight: 1.65,
                    fontSize: '0.95rem',
                    color: 'rgba(45, 42, 38, 0.88)',
                  }}
                >
                  <li style={{ marginBottom: '0.65rem' }}>
                    <a
                      href="https://www.nhs.uk/pregnancy/keeping-well/vaccinations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#40606D', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      NHS: Vaccinations in pregnancy
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.65rem' }}>
                    <a
                      href="https://www.cdc.gov/vaccine-safety/about/pregnancy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#40606D', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      CDC: Vaccine safety — Vaccines during and after pregnancy
                    </a>
                  </li>
                  <li style={{ marginBottom: 0 }}>
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3093587/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#40606D', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      PMC3093587 — Vaccination during pregnancy (PubMed Central)
                    </a>
                  </li>
                </ul>
              </aside>

              <PregnancyPdfEmbed title="Pregnancy — PDF" src={PREGNANCY_PDF} />
              <PregnancyPdfEmbed title="Abrysvo during pregnancy — PDF" src={ABRYSVO_PREGNANCY_PDF} />
              <PregnancyPdfEmbed title="Tdap during pregnancy — PDF" src={TDAP_PREGNANCY_PDF} />
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
              Copyright &amp; Content Policy
            </a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">
              حقوق النشر والاستخدام
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
