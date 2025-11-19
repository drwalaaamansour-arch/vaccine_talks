import Header from '@/components/Header';

export default function HCPRota() {
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
                Rota
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/rota%20v.jpeg"
                  alt="Rota"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Rotavirus causes gastroenteritis with common symptoms like watery diarrhea and vomiting, especially in children. There is no specific medicine to treat rotavirus infection; clinicians treat symptoms. <strong>Rotavirus vaccine</strong> is the best protection for children.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Rotavirus structure</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Triple‑layered, non‑enveloped, icosahedral virion with <strong>11 dsRNA segments</strong>. Inner core (VP1 RNA‑dependent RNA polymerase, VP3 capping enzyme, enclosed by VP2), intermediate capsid (VP6 trimers), and outer layer (VP7 + spike protein VP4). VP4 is cleaved to <strong>VP8*</strong> and <strong>VP5*</strong> to mediate attachment/entry.
              </p>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Inner core</strong>: VP1, VP3 within VP2 around the 11 dsRNA segments.</li>
                <li><strong>Intermediate capsid</strong>: 260 trimers of VP6.</li>
                <li><strong>Outer coat</strong>: VP7 glycoprotein and VP4 spikes (cleaved to VP8*/VP5*).</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Transmission</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}><strong>Fecal–oral</strong> route.</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Environmental stability</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Persists for hours on hands and days on dry surfaces (toys, clothes, furniture), facilitating outbreaks in childcare settings.</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Impact by age</h3>
              <h4 style={{textAlign:'left', fontSize:'1.05rem', fontWeight:700, color:'#40606D', marginTop:'0.5rem', direction: 'ltr'}}>Infants and young children</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Highest burden &lt;5 years; severe diarrhea/vomiting → dehydration, hospitalization, and risk of death without prompt care.</p>
              <h4 style={{textAlign:'left', fontSize:'1.05rem', fontWeight:700, color:'#40606D', marginTop:'0.5rem', direction: 'ltr'}}>Adults and older children</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Usually mild or asymptomatic due to prior immunity; institutional outbreaks can affect elderly with more severe symptoms.</p>
              <h4 style={{textAlign:'left', fontSize:'1.05rem', fontWeight:700, color:'#40606D', marginTop:'0.5rem', direction: 'ltr'}}>Asymptomatic infections</h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Adults may shed virus without symptoms, contributing to transmission.</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Vaccines and prevention</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>RotaTeq (2006)</strong>: five reassortant human–bovine strains; <strong>3 doses</strong>.</li>
                <li><strong>Rotarix (2008)</strong>: attenuated human strain; <strong>2 doses</strong>.</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Both are <strong>oral</strong> vaccines. Widespread use reduces hospitalizations and deaths; herd effects protect unvaccinated children.</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Global impact</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Before immunization, rotavirus caused &gt;500,000 deaths/year (mostly in LMICs). Similar infection rates in rich/poor countries showed hygiene alone is insufficient; vaccination is essential.</p>

              <h3 style={{textAlign:'center', fontSize:'1.8rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>Rotavirus in Egypt</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Benha J Appl Sci (2018): dominant strains G1P4, G1P8, G3P8 across seasons.<br />
                Zoonoses Review (2023): in children, G1 most frequent, then G2, G3, G4, G8, G9, G12; mixed infections noted.<br />
                Egyptian Pharm J (Apr 2024): rotavirus remains a leading cause of pediatric diarrhea; diverse genotypes detected by RT‑PCR; surveillance needed to guide vaccination strategies.</p>

              <p className="about-lang-intro" style={{fontSize:'0.9rem', fontStyle:'italic', marginTop:'1rem'}}>
                References: 
                <a href="https://www.cdc.gov/rotavirus/vaccines/index.html" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>CDC – Rotavirus vaccines</a> | 
                <a href="https://www.who.int/publications/i/item/WHO-WER9628" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>WHO WER 96(28)</a> | 
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7224034/" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Egypt genotype studies</a> | 
                <a href="https://virologyj.biomedcentral.com/articles/10.1186/s12985-024-02495-8" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Virology Journal 2024</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Button */}
      <section className="about-section" style={{padding: '0', height: '5cm', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="about-elegant-card" style={{padding: '0.5rem 1.5rem', minHeight: 'auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual" style={{padding: '0', margin: '0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%', padding: '0', margin: '0', justifyContent: 'center'}}>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0', marginBottom: '0'}}>
                <a
                  href="/faq/rotavirus"
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

      {/* PDF: Rotarix */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Rotarix
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Rotarix%20.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Rotarix PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/Rotarix%20.pdf"
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

      {/* PDF: RotaTeq */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                RotaTeq
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Rotateq.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="RotaTeq PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/Rotateq.pdf"
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



