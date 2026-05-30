import Header from '@/components/Header';
import ArticlePageTitle from '@/components/ArticlePageTitle';
import { ARTICLE_META } from '@/lib/article-meta';

export default function AspleniaPneumococcalPage() {
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
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <ArticlePageTitle {...ARTICLE_META.hcpAspleniaPneumococcal} titleStyle={{ fontSize: '2rem' }} locale="en">
                Pneumococcal
              </ArticlePageTitle>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Two types of vaccine against invasive pneumococcal disease are available: PCV and PPSV23.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                All infants should be given a primary series of either PCV15, PCV13, or PCV20 at ages 2, 4, and 6 months, with a booster at age 12 to 15 months. Otherwise healthy children who fall behind should be given catch-up vaccination through age 59 months; if they have certain underlying medical conditions they should be given catch-up vaccination through age 71 months.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                PPSV23 is licensed for use in persons aged &gt;=2 years.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The conditions that increase the risk of pneumococcal disease and are indications for additional pneumococcal vaccine doses beyond the routine schedule are broken down into two categories: non-immunocompromising (non-IC) and immunocompromising (IC). Recommendations differ slightly under certain circumstances by IC or non-IC category.
              </p>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', fontWeight: 700}}>
                Non-IC conditions include:
              </p>
              <ul style={{direction: 'ltr', textAlign: 'left', width: '100%', paddingLeft: '1.35rem', marginTop: '-0.35rem', marginBottom: '1rem', color: '#374151', lineHeight: 1.65}}>
                <li>Cerebrospinal fluid (CSF) leak</li>
                <li>Chronic heart disease (especially cyanotic congenital heart disease and heart failure, congestive heart failure and cardiomyopathies, excluding hypertension)</li>
                <li>Chronic kidney disease (except as specified in the IC list below)</li>
                <li>Chronic liver disease</li>
                <li>Chronic lung disease (including moderate persistent or severe persistent asthma, chronic obstructive pulmonary disease, emphysema)</li>
                <li>Diabetes mellitus</li>
                <li>Cochlear implant</li>
                <li>Alcoholism or cigarette smoking</li>
              </ul>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', fontWeight: 700}}>
                Immunocompromising (IC) conditions include:
              </p>
              <ul style={{direction: 'ltr', textAlign: 'left', width: '100%', paddingLeft: '1.35rem', marginTop: '-0.35rem', marginBottom: '1rem', color: '#374151', lineHeight: 1.65}}>
                <li>Kidney disease and on maintenance dialysis</li>
                <li>Kidney disease with nephrotic syndrome</li>
                <li>Asplenia or splenic dysfunction</li>
                <li>Congenital or acquired immunodeficiency, including B-(humoral) or T-lymphocyte deficiency; complement deficiencies, particularly C1, C2, C3, and C4 deficiency; and phagocytic disorders (excluding chronic granulomatous disease)</li>
                <li>Diseases or conditions treated with immunosuppressive drugs or radiation therapy, including Hodgkin disease, leukemias, lymphomas, malignant neoplasms, and solid organ transplant</li>
                <li>HIV infection</li>
                <li>Sickle cell disease or other hemoglobinopathies</li>
              </ul>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Children with IC or non-IC conditions who completed a PCV series before age 6 years with PCV13 or PCV15 (but who have not received PCV20 or pneumococcal polysaccharide vaccine [PPSV23]) should receive additional pneumococcal vaccination with a single dose of PCV20 at least 8 weeks after the most recent PCV dose. If PCV20 is not available, a non-IC or IC child in this circumstance may, alternatively, receive a single dose of PPSV23 at least 8 weeks after the most recent PCV dose. An IC child given PPSV23 in this circumstance would also be due for a dose of either PCV20 or a second dose of PPSV23 at least 5 years after the first PPSV23.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                All people age 19 through 49 with medical conditions who have no history of pneumococcal vaccination or an unknown pneumococcal vaccination history should receive either a single dose of PCV20 or PCV21 alone or a dose of PCV13 or PCV15 followed by a dose of PPSV23 at least 1 year later. If using the PCV15 + PPSV23 series, clinicians can consider giving the dose of PPSV23 a minimum of 8 weeks later for more rapid protection against the serotypes unique to PPSV23 to people with immunocompromising condition, cochlear implant, or cerebrospinal fluid (CSF) leak.
              </p>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', fontStyle: 'italic'}}>
                N.B. Doses of the 7-valent PCV (the original Prevnar, PCV7) do not count toward PCV vaccination when determining the current pneumococcal vaccination needs of a child or teen with a qualifying non-IC or IC condition.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', fontStyle: 'italic'}}>
                N.B. The patient should be vaccinated at least 2 weeks before the splenectomy, if feasible. If not, vaccinate as soon as possible. Depending upon products available, he has three options:
              </p>
              <ul style={{direction: 'ltr', textAlign: 'left', width: '100%', paddingLeft: '1.35rem', marginTop: '-0.35rem', marginBottom: '1rem', color: '#374151', lineHeight: 1.65}}>
                <li>One dose of PCV20 or PCV21 alone, or</li>
                <li>One dose of PCV13 or PCV15 followed by a dose of PPSV23</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                CDC recommends that if using the PCV15 and PPSV23 series, a minimum interval of 8 weeks can be considered for adults with an immunocompromising condition (including splenectomy), cochlear implant, or cerebrospinal fluid leak.
              </p>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                ACIP has made a series of changes in its recommendations for pneumococcal vaccination of adults since 2022 in response to the licensure of new pneumococcal conjugate vaccines (PCVs). In January 2022, CDC published recommendations for PCV15 (Vaxneuvance, Merck) and PCV20 (Prevnar 20, Pfizer) as pneumococcal vaccination options for all adults age 65 and older and for adults age 19 through 64 with certain medical conditions or other risk factors for pneumococcal disease. ACIP stopped recommending PCV13 (Prevnar 13, Pfizer) for adults; however, CDC clinical guidance allows for its use in rare circumstances if only PCV13 is accessible and the patient would otherwise be unvaccinated. When PCV15 is used routinely, it should be used in series with 23-valent pneumococcal polysaccharide vaccine (PPSV23, Pneumovax, Merck) given one year later.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In June 2024, ACIP recommended PCV21 (Capvaxive, Merck) as an option in all situations where PCV is recommended for adults. As with PCV20, PPSV23 is not recommended following PCV21.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In October 2024, ACIP recommended that routine immunization of all adults with a PCV begin at age 50 years, rather than age 65 years. This change was made to address the substantial amount of preventable invasive pneumococcal disease (IPD) among adults age 50 through 64.
              </p>

              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 700}}>
                To learn more about disease, vaccine and inserts <a href="/hcp/pneumococcal" style={{textDecoration: 'underline', color: '#40606D'}}>press here</a>.
              </p>
              <h3 style={{textAlign: 'left', fontSize: '1.35rem', fontWeight: 700, color: '#40606D', marginTop: '0.75rem', marginBottom: '0.75rem', width: '100%', direction: 'ltr'}}>
                References
              </h3>
              <ul style={{direction: 'ltr', textAlign: 'left', width: '100%', margin: 0, paddingLeft: '1.35rem', color: '#374151', fontSize: '1rem', lineHeight: 1.6}}>
                <li style={{marginBottom: '0.5rem'}}>
                  <a
                    href="https://www.immunize.org/ask-experts/topic/pneumococcal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    Immunize.org: Ask the Experts - Pneumococcal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    CDC: Best Practices Guidance - Vaccination of persons who have altered immunocompetence
                  </a>
                </li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.35rem', fontWeight: 700, color: '#40606D', marginTop: '2rem', marginBottom: '0.75rem', width: '100%', direction: 'ltr'}}>
                PDF resources
              </h3>
              <ul style={{direction: 'ltr', textAlign: 'left', width: '100%', margin: 0, paddingLeft: '1.35rem', color: '#374151', fontSize: '1rem', lineHeight: 1.6}}>
                <li style={{marginBottom: '0.5rem'}}>
                  <a
                    href={`/pneumo/${encodeURIComponent('Administering Pneumococcal Vaccines to Adults.pdf')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    Administering Pneumococcal Vaccines to Adults (PDF)
                  </a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a
                    href={`/pneumo/${encodeURIComponent('Administering Pneumococcal Vaccines to Children and Teens.pdf')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    Administering Pneumococcal Vaccines to Children and Teens (PDF)
                  </a>
                </li>
                <li style={{marginBottom: '0.5rem'}}>
                  <a
                    href={`/pneumo/${encodeURIComponent('Pneumococcal Vaccine Timing for Adults.pdf')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    Pneumococcal Vaccine Timing for Adults (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href={`/pneumo/${encodeURIComponent('pneumo 50yr.pdf')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#40606D', textDecoration: 'underline'}}
                  >
                    Expanded Recommendations for Use of Pneumococcal Conjugate Vaccines Among Adults Aged ≥50 Years (PDF)
                  </a>
                </li>
              </ul>
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
                <a href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: 'none', display: 'inline-block'}}>Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © 2025 Vaccine Talk - All rights reserved.
            </p>
            <p className="copyright-text">
              Content is original and may not be copied without permission.
            </p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">Copyright &amp; Content Policy</a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
