import Header from '@/components/Header';

export default function CochlearImplants() {
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

      {/* Content Section - same template as other special population pages */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center', color: '#40606D'}}>
                Cochlear Implants and Vaccination Recommendations
              </h2>
              <h3 style={{textAlign: 'center', fontSize: '1.35rem', fontWeight: 600, color: '#40606D', marginBottom: '0.5rem', direction: 'ltr'}}>
                Summary of CDC Guidance on Preventing Meningitis in Cochlear Implant Users
              </h3>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Overview</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0}}>
                  Meningitis is an inflammation of the lining of the brain and spinal cord. People with cochlear implants are at increased risk for certain types of bacterial meningitis. Vaccines can help prevent this serious infection. The CDC provides specific recommendations for people with cochlear implants to ensure optimal protection.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Leading Causes of Bacterial Meningitis</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li>Haemophilus influenzae</li>
                  <li>Neisseria meningitidis (causes meningococcal meningitis)</li>
                  <li>Streptococcus pneumoniae (causes pneumococcal meningitis)</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>General Vaccination Recommendations for People with Hearing Loss</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0}}>
                  The CDC does not have special vaccination recommendations for people with hearing loss. Vaccination schedules for people with hearing loss are the same as for those without, based on age and health conditions.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Pneumococcal Vaccination Recommendations</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Children younger than 2 years with cochlear implants:</strong> Should receive PCV13 or PCV15 as per the Childhood Immunization Schedule.</li>
                  <li><strong>Older children who missed infant vaccinations:</strong> May need PCV13 or PCV15.</li>
                  <li><strong>Children 2 years or older:</strong> Should also receive PPSV23.</li>
                  <li><strong>Timing:</strong> All recommended pneumococcal shots should be given at least 2 weeks before cochlear implant surgery for maximum protection. No extra shots are needed if already up to date.</li>
                  <li><strong>Adults with cochlear implants:</strong> If never vaccinated, should receive one shot of PCV15 or PCV20. If PCV15 is used, follow with PPSV23. Shots should be given at least 2 weeks before surgery. No extra shots if already up to date.</li>
                  <li><strong>People with a history of pneumococcal meningitis:</strong> Should follow CDC&apos;s pneumococcal vaccination guidance.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Haemophilus influenzae type b (Hib) Vaccination Recommendations</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Children younger than 5 years:</strong> Should receive Hib vaccines according to the Childhood Immunization Schedule.</li>
                  <li><strong>Timing:</strong> Hib vaccinations should be up to date at least 2 weeks before cochlear implant surgery. No extra shots if already up to date.</li>
                  <li><strong>Children with past Hib meningitis:</strong> Those who had Hib meningitis before age 2 may need additional shots depending on current age. Those who had Hib meningitis at age 2 or older do not need more shots.</li>
                  <li><strong>Older children and adults:</strong> CDC does not recommend Hib vaccination specifically for older children or adults with cochlear implants, as data do not support increased risk.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Meningococcal Vaccination Recommendations</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Preteens and teens:</strong> Should receive MenACWY vaccine as per the Preteen/Teen Immunization Schedule. Teens may also receive MenB vaccine.</li>
                  <li><strong>Younger children and adults:</strong> CDC does not recommend meningococcal vaccination specifically for these groups with cochlear implants, as data do not indicate increased risk.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(64, 96, 109, 0.08)', border: '2px solid rgba(64, 96, 109, 0.25)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.1)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Key Points</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li>Vaccination is crucial for people with cochlear implants to prevent meningitis.</li>
                  <li>Recommended vaccines include pneumococcal, Hib (for young children), and meningococcal (for preteens and teens).</li>
                  <li>Vaccines should be administered at least two weeks before cochlear implant surgery for best protection.</li>
                  <li>No additional vaccines are needed for people with hearing loss unless recommended for their age group or health status.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box', fontSize: '0.875rem'}}>
                <h4 style={{textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>References</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.9, fontSize: '0.875rem'}}>
                  <li>
                    Centers for Disease Control and Prevention. Cochlear Implants and Vaccine Recommendations (For Everyone).{' '}
                    <a href="https://www.cdc.gov/pneumococcal/vaccines/cochlear-implants.html" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', fontWeight: 600, textDecoration: 'underline'}}>https://www.cdc.gov/pneumococcal/vaccines/cochlear-implants.html</a>
                  </li>
                  <li>
                    Centers for Disease Control and Prevention. Vaccines for People with Cochlear Implants (Health Care Providers).{' '}
                    <a href="https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/cochlear-implants.html" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', fontWeight: 600, textDecoration: 'underline'}}>https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/cochlear-implants.html</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Cochlear */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', color: '#40606D'}}>
                Cochlear
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/cochlear.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Cochlear PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/cochlear.pdf"
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
                <a href="https://www.linkedin.com/in/walaa-adel-895009369" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                <a href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg></a>
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
