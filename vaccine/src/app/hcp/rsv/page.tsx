import Header from '@/components/Header';

export default function HCPRSV() {
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
                RSV (HCP)
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/rsv%20v.png"
                  alt="RSV"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Respiratory Syncytial Virus (RSV) is a common, highly contagious virus of the respiratory tract. While it can infect all ages, greatest risk is in infants, young children, older adults, and people with weakened immunity.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Overview</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                RSV primarily infects the nose, throat and lungs and is a leading cause of respiratory illness in young children globally. Most are infected by age two; disease is often mild but can be severe in vulnerable groups.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Symptoms</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Runny nose, cough, sneezing, fever, wheezing, decreased appetite</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In infants/young children RSV can cause bronchiolitis and pneumonia. Severe signs include dyspnea, tachypnea, cyanosis and dehydration.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Transmission and Seasonality</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Spreads via respiratory droplets and contaminated surfaces (tables, toys, doorknobs). Season peaks in colder months (late autumn–early spring) in temperate climates.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>High‑risk groups</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Infants (especially &lt;6 months), premature babies</li>
                <li>Children with chronic lung/heart disease</li>
                <li>Adults ≥65 years</li>
                <li>Immunocompromised people</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Complications and Outcomes</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Bronchiolitis, pneumonia</li>
                <li>Exacerbation of asthma/COPD</li>
                <li>Hospitalization in infants and the elderly</li>
                <li>Rarely fatal in very young children and older adults with comorbidities</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Prevention</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Hand hygiene; clean/disinfect frequently touched surfaces</li>
                <li>Avoid close contact with sick persons; limit crowds for high‑risk infants in RSV season</li>
                <li>Respiratory etiquette (cover coughs/sneezes)</li>
              </ul>

              <h4 style={{textAlign:'left', fontSize:'1.05rem', fontWeight:700, color:'#40606D', marginTop:'0.75rem', direction: 'ltr'}}>Immunization</h4>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Monoclonal antibodies for high‑risk infants/children to give seasonal passive protection</li>
                <li>Newly approved vaccines for older adults and for pregnant women (to protect newborns via transplacental antibodies); roll‑out is expanding globally and expected in Egypt</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Global Burden and Challenges</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                RSV drives millions of hospitalizations and thousands of deaths annually, especially among young children in LMICs.<br />
                Key challenges: limited access to immunization, low awareness, clinical overlap with other viruses, and seasonal surges straining health systems.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>WHO Response</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Support R&amp;D for vaccines/therapeutics</li>
                <li>Strengthen global surveillance and guidance for IPC and clinical care</li>
                <li>Advocate equitable access to prevention and treatment</li>
              </ul>

              <h3 style={{textAlign:'center', fontSize:'1.8rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>RSV in Egypt</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                2007–2008 Cairo University Pediatric Hospital study (infants with pneumonia/bronchopneumonia): RSV detected in <strong>85%</strong> (58/68) via RT‑PCR; subtypes A 21%, B 36%, co‑infection A+B 43%. Highest rate at 2–3 months. Fever, wheeze, tachypnea, cyanosis common; CXR consolidation associated with RSV.<br />
                Conclusion: major cause of severe LRTI; RT‑PCR of NPA is effective; continued surveillance needed.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                National outpatient survey (Oct 2022; 98 clinics; n=530 children): Influenza 25.3%, RSV 20.9%, co‑infection 2.8%. RSV cases were younger (mean 4.3y vs 7.2y for influenza). Dyspnea more frequent with RSV (62.2% vs 49.3%), especially in &lt;2 years (86.7% vs 53.1%).<br />
                Conclusion: marked resurgence in 2022–2023; RSV linked to more severe symptoms in younger children; broadened viral surveillance is needed.
              </p>

              <p className="about-lang-intro" style={{fontSize:'0.9rem', fontStyle:'italic', marginTop:'1rem'}}>
                References: 
                <a href="https://www.cdc.gov/rsv/about/index.html" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>CDC – RSV</a> | 
                <a href="https://www.who.int/news-room/fact-sheets/detail/respiratory-syncytial-virus-(rsv)" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>WHO – RSV fact sheet</a> | 
                <a href="https://pubmed.ncbi.nlm.nih.gov/37277781/" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Egypt national outpatient survey 2022</a> | 
                <a href="https://applications.emro.who.int/imemrf/Egypt_J_Med_Microbiol/Egypt_J_Med_Microbiol_2010_19_3_55_62.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Egypt J Med Microbiol 2010</a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/rsv"
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

      {/* PDF: Synagis */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Synagis
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <div style={{transform: 'rotate(180deg)'}}>
                  <iframe
                    src="/Synagis.pdf"
                    width="100%"
                    height="800px"
                    style={{border: 'none', borderRadius: '8px'}}
                    title="Synagis PDF"
                  />
                </div>
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/Synagis.pdf"
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

      {/* PDF: Abrysvo */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Abrysvo
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/abrysvo.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Abrysvo PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/abrysvo.pdf"
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



