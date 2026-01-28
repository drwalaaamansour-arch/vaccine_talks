import Header from '@/components/Header';

export default function HCPPneumococcal() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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

      {/* Content Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Pneumococcal
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/pneumo.png"
                  alt="Pneumococcal"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>

              <p className="about-lang-intro">
                Pneumococcal disease, caused by the bacterium <strong>Streptococcus pneumoniae</strong>, remains a significant cause of morbidity and mortality worldwide. With over <strong>100</strong> distinct serotypes identified, this bacterium commonly inhabits the human respiratory tract, yet only a select few serotypes are responsible for most invasive disease.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Understanding Pneumococcal Disease
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <em>S. pneumoniae</em> is a Gram‑positive bacterium that can asymptomatically colonize the nasopharynx in <strong>5%–90%</strong> of healthy individuals, depending on age, geography, and environment. Transmission is primarily via airborne droplets, so close‑contact settings facilitate spread.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Serotypes and Disease Manifestation
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The polysaccharide capsule underpins serotyping (&gt;100 serotypes). Although most serotypes can cause disease, surveillance shows a minority account for the majority of invasive pneumococcal disease (IPD). Distribution varies by region, age, and vaccination status. <strong>IPD</strong> occurs when bacteria invade sterile sites. Major syndromes: <strong>Bacteremia</strong>: bloodstream infection leading to sepsis and possible multi‑organ dysfunction. <strong>Meningitis</strong>: infection of meninges with headache, fever, neck stiffness, altered consciousness. These are medical emergencies with high mortality and long‑term sequelae among the elderly, infants, and persons with comorbidities.
              </p>

              <h3 style={{textAlign: 'center', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>
                Pneumococcal Vaccines
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'center'}}>
                Vaccines target serotypes most likely to cause severe disease. Two main types:
              </p>
              <h4 style={{textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#40606D', marginTop: '0.75rem', direction: 'ltr'}}>Polysaccharide Vaccines</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>PPSV23</strong> contains purified polysaccharides from 23 serotypes. It elicits a T‑cell–independent response that lacks immunologic memory, is less effective in young children and elderly, and does not reduce nasopharyngeal carriage—limiting indirect (community) impact.
              </p>
              <h4 style={{textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#40606D', marginTop: '0.75rem', direction: 'ltr'}}>Conjugate Vaccines</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>PCV13, PCV15, PCV20</strong> link polysaccharides to a carrier protein, engaging T‑helper cells to generate stronger, longer‑lasting immunity with memory and reduced carriage (herd protection).
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>PCV10 (Synflorix)</strong> protects against ten serotypes. Large studies show prevention of invasive disease, bacterial pneumonia, and acute otitis media in children, with strong antibody responses. Boosters enhance effectiveness, especially in ages 2–5 years.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Serotype Coverage and Regional Considerations (Serotype 4)
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In U.S. surveillance (ABCs; Alaska; Navajo Nation), some western adult populations have ≥30% IPD due to serotype <strong>4</strong>. Serotype 4 is included in PCV13/15/20 and PPSV23, but absent from adult <strong>PCV21 (Capvaxive)</strong>. ACIP schedules for at‑risk adults in these areas maintain serotype‑4 coverage (e.g., PCV20 alone or PCV15 followed by PPSV23).
              </p>

              <h3 style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>
                Community‑Acquired Pneumonia in Egypt: Epidemiology and Practice
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                CAP remains a major concern in Egypt; <em>S. pneumoniae</em> is consistently among leading pathogens alongside <em>H. influenzae</em> and <em>M. pneumoniae</em>. Only <strong>5–10%</strong> of CAP patients seek clinic care, suggesting underdiagnosis/underreporting.
              </p>
              <h4 style={{textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#40606D', marginTop: '0.75rem', direction: 'ltr'}}>Clinical Features and Microbiology</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Elderly patients often present atypically (confusion, falls). Empiric antibiotics are commonly started prior to pathogen identification.
              </p>
              <h4 style={{textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#40606D', marginTop: '0.75rem', direction: 'ltr'}}>Burden and Outcomes</h4>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Average hospital stay ≈ <strong>7 days</strong>; longer in elderly/comorbidities.</li>
                <li>Mortality <strong>&lt; 10%</strong> in high‑risk groups.</li>
                <li>Antimicrobial misuse (inappropriate/delayed) prolongs stay and may worsen outcomes.</li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Current Adult Vaccination Recommendations (Egypt experts)
              </h3>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Influenza vaccine</strong>: annually for high‑risk adults.</li>
                <li><strong>Pneumococcal vaccines</strong>: PCV13, PPSV23, and PCV20 as indicated by age/risk.</li>
                <li><strong>COVID‑19 vaccine</strong>: not mandatory; recommended for vulnerable populations.</li>
                <li><strong>RSV vaccine</strong>: increasingly prioritized for adult respiratory disease prevention.</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Despite recommendations, pneumococcal vaccine uptake is ~<strong>1%</strong> nationally. A complete pneumococcal regimen offers long‑term protection (single administration), whereas influenza requires annual revaccination.
              </p>

              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem'}}>
                References: 
                <a href="http://www.immunize.org/ask-experts/topic/pneumococcal/" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Immunize.org – Pneumococcal</a> | 
                <a href="https://www.tandfonline.com/doi/full/10.1080/14760584.2024.2348608#d1e471" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Expert Rev Vaccines 2024 – Egypt CAP</a> | 
                <a href="https://www.ema.europa.eu/en/medicines/human/EPAR/synflorix" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>EMA – Synflorix (PCV10)</a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/pneumococcal"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '720px',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#40606D',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  For FAQs press here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Synflorix (PCV10) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Synflorix
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/synflorix.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Synflorix PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/synflorix.pdf"
                    download
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Download PDF / تحميل PDF
                  </a>
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Prevenar */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Prevenar
              </h2>
              <div style={{width: '100%,', marginTop: '2rem'}}>
                <iframe
                  src="/prevenar.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Prevenar PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/prevenar.pdf"
                    download
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Download PDF / تحميل PDF
                  </a>
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Pneumocil */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Pneumocil
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/pneumocil.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Pneumocil PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/pneumocil.pdf"
                    download
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Download PDF / تحميل PDF
                  </a>
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Pneumo 23 (PPSV23) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Pneumo 23 (PPSV23)
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Pneumo%2023.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Pneumo 23 PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/Pneumo%2023.pdf"
                    download
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Download PDF / تحميل PDF
                  </a>
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
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
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footeropyright">
            <p className="copyright-text">
              © 2025 Vaccine Talk – All rights reserved.
            </p>
            <p className="copyright-text">
              Content is original and may not be copied without permission.
            </p>
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



