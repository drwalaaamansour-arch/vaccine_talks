'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function HCPMMR() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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
                MMR
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/mmr%20copy.jpeg"
                  alt="MMR"
                  className="section-image"
                  onClick={() => setIsImageModalOpen(true)}
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    height: 'auto', 
                    borderRadius: '16px', 
                    boxShadow: 'none', 
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div
                  onClick={() => setIsImageModalOpen(false)}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    cursor: 'pointer',
                    padding: '2rem'
                  }}
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: 'relative',
                      maxWidth: '90vw',
                      maxHeight: '90vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <button
                      onClick={() => setIsImageModalOpen(false)}
                      style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '0',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        fontWeight: 'bold',
                        zIndex: 10000
                      }}
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <img
                      src="/mmr%20copy.jpeg"
                      alt="MMR - Enlarged"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '90vh',
                        borderRadius: '8px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              )}

              <p className="about-lang-intro">
                The MMR vaccine is a combination vaccine that immunizes against three viral diseases:<br />
                <strong>Measles</strong>: Highly contagious; causes fever, cough, rash; complications include pneumonia, encephalitis, and death.<br />
                <strong>Mumps</strong>: Classically parotitis; can lead to meningitis, hearing loss, and orchitis/oophoritis.<br />
                <strong>Rubella (German measles)</strong>: Mild in children but dangerous in pregnancy (congenital rubella syndrome).
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Effectiveness of the MMR Vaccine
              </h3>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Over <strong>95%</strong> develop immunity to measles and rubella after the first dose.</li>
                <li>The <strong>second dose</strong> increases immunity and covers non‑responders to dose one.</li>
                <li>Widespread vaccination has drastically reduced incidence and outbreaks.</li>
              </ul>

              <h3 style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>
                Inclusion of MMR Vaccine in Egypt's National Immunization Schedule
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Egypt introduced MMR into the Expanded Program on Immunization (EPI) in <strong>2000</strong>. The vaccine is provided free of charge in public facilities with robust cold‑chain and monitoring. High coverage has been key to control and elimination.
              </p>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>First dose</strong>: typically at <strong>12 months</strong> of age.</li>
                <li><strong>Second dose</strong>: before school entry (around <strong>18 months – 6 years</strong>).</li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                WHO Confirmation of Disease Elimination and International Certification
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In <strong>2025</strong>, WHO confirmed Egypt remains free of endemic measles and rubella transmission, reaffirming elimination status after review by the WHO Regional Verification Commission. This reflects sustained high coverage, strong surveillance, and laboratory confirmation.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', direction: 'ltr'}}>
                Role of the Ministry of Health and Key Official Statements
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Deputy PM and Minister of Health Khaled Abdel Ghaffar highlighted the role of vaccination, surveillance, and awareness in achieving elimination, aligning with Egypt's Vision 2030 and the UN SDGs. WHO experts praised Egypt's rapid response and strong programme; the Commission unanimously endorsed Egypt's measles/rubella‑free status following field evaluations across governorates.<br />
                Amr Qandil, Deputy Health Minister, noted the evaluations confirmed the strength of national systems in maintaining elimination through strict preventive measures. Since 1984, the expanded immunisation programme has substantially reduced child mortality and eradicated diseases such as polio, malaria, and hepatitis B among children under five.
              </p>

              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem'}}>
                References: 
                <a href="https://sis.gov.eg/Story/207233/WHO-confirms-Egypt-free-of-measles%2C-rubella-for-second-year?lang=en-us#:~:text=WHO%20experts%20praised%20Egypt%27s%20immunisation,measles%20and%20rubella%2Dfree%20status." target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> SIS – WHO confirms Egypt free of measles/rubella</a> | 
                <a href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccines-quality/measles-mumps-and-rubella-(mmr)" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> WHO – MMR</a> | 
                <a href="https://www.immunize.org/ask-experts/topic/mmr/" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> Immunize.org – MMR</a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/mmr"
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

      {/* PDF: Priorix */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Priorix
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Priorix.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Priorix PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/Priorix.pdf"
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

      {/* PDF: MMR (SII) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                MMR (SII)
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/mmr%20sii.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="MMR SII PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/mmr%20sii.pdf"
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

      {/* PDF: MMR (Merck) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                MMR (Merck)
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/mmr%20merk.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="MMR Merck PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/mmr%20merk.pdf"
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
          <div className="footer-copyright">
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



