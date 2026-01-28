import Header from '@/components/Header';

export default function HCPRabirs() {
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
                Rabies (HCP)
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/rabies%20v.png"
                  alt="Rabies"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>

              <p className="about-lang-intro">
                Rabies is a deadly viral disease affecting the central nervous system of mammals, including humans. It is almost always fatal once symptoms appear, yet entirely preventable with timely vaccination and proper wound care. As a vaccine‑preventable disease, elimination is feasible with coordinated efforts.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Global Epidemiology
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Present on every continent except Antarctica, rabies causes an estimated <strong>59,000</strong> deaths annually—mostly in Asia and Africa. About <strong>40%</strong> of victims are children &lt;15 years. Economic costs (~US$<strong>8.6B</strong>/year) include medical care, lost income, and livestock losses. Underreporting is common; rabies is a neglected tropical disease receiving limited funding relative to its burden.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Transmission and Reservoirs
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Transmission is primarily via bites/scratches from infected animals; virus is present in saliva. <strong>Dogs</strong> cause up to <strong>99%</strong> of human cases globally. Other reservoirs include bats, cats, foxes, raccoons, and regional wildlife. Rare routes (organ transplant, lab aerosols) occur. Human‑to‑human transmission is exceedingly rare.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Symptoms and Clinical Forms
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Incubation is typically 1–3 months (range days to years). Early nonspecific symptoms: fever, headache, malaise. Progressive features: anxiety, agitation, confusion, hallucinations. Two clinical forms:<br />
                <strong>Furious rabies</strong>: hyperactivity, hydrophobia, aerophobia, agitation with lucid intervals (most common).<br />
                <strong>Paralytic rabies</strong>: ~20%; ascending paralysis from bite site to coma and death.<br />
                After symptom onset, rabies is almost invariably fatal—prevention and early care are critical.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Prevention and Control
              </h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Mass dog vaccination</strong> to interrupt transmission.</li>
                <li><strong>Post‑exposure prophylaxis (PEP)</strong>: immediate wound washing (≥15 minutes with soap/water), vaccine, and rabies immunoglobulin when indicated.</li>
                <li><strong>Public awareness</strong> on bite avoidance and prompt care seeking.</li>
                <li><strong>Surveillance and reporting</strong> to target interventions and track progress.</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The WHO‑led <strong>Zero by 30</strong> initiative targets elimination of dog‑mediated human rabies by 2030 via a One Health approach.
              </p>

              <h3 style={{textAlign:'center', fontSize:'1.8rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>
                Rabies in Egypt
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Egypt reports sporadic human cases annually, mainly from dog exposures; cats and livestock can also transmit. Children and rural communities are disproportionately affected. Recent progress includes mass dog vaccination, improved surveillance, and integration of rabies prevention in primary care; challenges remain with stray populations, coverage gaps, and awareness.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Egypt's Strategic Framework (7 Pillars)
              </h3>
              <ol className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Leadership & coordination</strong></li>
                <li><strong>Surveillance</strong> of human and animal rabies</li>
                <li><strong>Dog vaccination</strong> scale‑up</li>
                <li><strong>Access to PEP</strong> (vaccine and immunoglobulin)</li>
                <li><strong>Community engagement</strong></li>
                <li><strong>Research & innovation</strong></li>
                <li><strong>Digital transformation</strong> for reporting and tracking</li>
              </ol>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>
                Recent Updates (2025): Prophylaxis Protocols
              </h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Wound care</strong>: wash thoroughly with soap/water ≥15 minutes.</li>
                <li><strong>Rabies vaccine</strong>: IM on days 0, 3, 7, 14 after exposure.</li>
                <li><strong>Rabies immunoglobulin</strong>: infiltrate around wounds for Category III exposures ASAP.</li>
                <li><strong>Special populations</strong>: children, pregnant women, and immunocompromised should receive PEP as indicated (5‑dose schedule for immunocompromised).</li>
                <li><strong>PrEP</strong>: for high‑risk groups (veterinarians, lab staff, travelers to endemic regions).</li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Ongoing provider training and public campaigns ensure correct adherence to protocols nationwide.</p>

              <p className="about-lang-intro" style={{fontSize:'0.9rem', fontStyle:'italic', marginTop:'1rem'}}>
                References: 
                <a href="https://www.fao.org/egypt/news/detail/-World-Rabies-Day-2021-Celebration---Egypt-presents-the-Strategic-Framework-for-Elimination-Rabies-by-2030/en" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>FAO Egypt – Strategic Framework</a> | 
                <a href="https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html#:~:text=One%20injection%20each%20on%20days,fifth%20dose%20on%20day%2028." target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>CDC – PEP</a> | 
                <a href="https://www.who.int/news-room/fact-sheets/detail/rabies" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>WHO – Rabies Fact Sheet</a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/rabies"
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

      {/* PDF: Rabies (General) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Rabies</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/Rabies.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Rabies PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Rabies.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Verorab */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Verorab</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/verorab.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Verorab PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/verorab.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Abhayrab */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Abhayrab</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/Abhayrab.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Abhayrab PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Abhayrab.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Rabies Immunoglobulin (Berirab) */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Rabies Immunoglobulin (Berirab)</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/rabies%20immuno%20berirab.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Rabies Immuno Berirab PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/rabies%20immuno%20berirab.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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



