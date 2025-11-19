import Header from '@/components/Header';

export default function HCPTetanus() {
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
                Tetanus
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/tet.jpeg"
                  alt="Tetanus"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Tetanus is an acute infectious disease caused by <strong>Clostridium tetani</strong>. Despite being vaccine‑preventable, it remains a public‑health problem where immunization is low and unclean birth practices persist.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Transmission and Epidemiology</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Infection occurs when spores contaminate <strong>cuts or wounds</strong>. Spores are ubiquitous (soil, ash, feces, rusty surfaces). <strong>No person‑to‑person transmission</strong>. Highest risk in inadequately immunized pregnant women and newborns. Incubation usually within 14 days (range 3–21). In 2018, ~<strong>25,000</strong> newborn deaths from neonatal tetanus (97% reduction since 1988) due to TTCV expansion. In 2023, <strong>84%</strong> of infants received 3 DTP doses globally.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Pathogenesis and Risk Factors</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                C. tetani spores resist heat and many antiseptics, surviving for years. Neonatal tetanus follows <strong>non‑sterile cord care</strong> (contaminated instruments/substances). Risk rises with unclean deliveries. Adolescent/adult males may be at risk due to waning immunity and fewer boosters (e.g., circumcision without vaccination review).
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Clinical Features: Symptoms and Diagnosis</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Diagnosis is clinical; labs are not required. Typical features:<br />
                Jaw cramping / inability to open mouth (<em>lockjaw</em>)<br />
                Muscle spasms (back, abdomen, limbs); painful spasms precipitated by stimuli<br />
                Dysphagia; seizures; headache, fever, sweating<br />
                Autonomic signs: BP fluctuations, tachycardia
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>Neonatal tetanus</strong>: inability to suck/breastfeed and excessive crying, then rigidity/spasms. WHO case: loss of sucking/crying between days 3–28 plus rigidity or spasms. Non‑neonatal tetanus: sustained facial spasm (risus sardonicus) or painful contractions, sometimes without a clear wound history.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Treatment and Prevention</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Hospital care in a low‑stimulus setting</li>
                <li>Immediate <strong>TIG</strong> (human tetanus immune globulin)</li>
                <li>Aggressive wound care</li>
                <li>Drugs for spasm control</li>
                <li>Antibiotics</li>
                <li><strong>Tetanus vaccination</strong></li>
              </ul>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Recovery <strong>does not confer immunity</strong>; immunize even after illness.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                WHO recommends <strong>six TTCV doses</strong> (three primary + three boosters) for lifelong protection:<br />
                Primary series: start at 6 weeks; ≥4‑week intervals<br />
                Boosters: at 12–23 months, 4–7 years, and 9–15 years (≥4 years between boosters)
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Formulations: DT, DTaP, Td, Tdap. Prevent neonatal tetanus by immunizing women of reproductive age (during or outside pregnancy), clean delivery/cord care, and safe surgical/dental wound care. Countries with high coverage have very low incidence.</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Global and National Response</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The MNTE goal (WHA 1989) targets &lt;1 case per 1,000 live births per district.<br />
                The <strong>MNTE Initiative</strong> (UNICEF/WHO/UNFPA, 1999) accelerated progress; as of Jul 2023, <strong>11 countries</strong> have not yet achieved elimination.
              </p>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Strengthen routine immunization for pregnant women and children</li>
                <li>Clean delivery and cord care</li>
                <li>Reliable neonatal tetanus surveillance</li>
                <li>School‑based booster programs</li>
              </ul>

              <h3 style={{textAlign:'center', fontSize:'1.8rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr', width: '100%', alignSelf: 'center'}}>Tetanus Immunity in Egypt</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Survey (n=709; age 2 months–105 years; five regions) using ELISA anti‑tetanus IgG:<br />
                <strong>31.7%</strong> susceptible (IgG &lt; 0.15 IU/ml)<br />
                <strong>15.7%</strong> partially protected (0.15–1.0 IU/ml)<br />
                <strong>52.6%</strong> protected (≥1.0 IU/ml)<br />
                Protection was 68.3% in ages 2 months–50 years, but susceptibility increased with age (up to 90.3% in older groups). More males were unprotected than females. Findings support monitoring and timely boosters to maintain long‑lasting protection.
              </p>

              <p className="about-lang-intro" style={{fontSize:'0.9rem', fontStyle:'italic', marginTop:'1rem'}}>
                References: <a href="https://www.who.int/news-room/fact-sheets/detail/tetanus" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>WHO – Tetanus</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/12237476/" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>Tetanus immunity survey in Egypt</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Tet 1500 */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Tet 1500
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Tet%201500.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Tet 1500 PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Tet%201500.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Tet 30000 */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Tet 30000
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Tet%2030000.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Tet 30000 PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Tet%2030000.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Toxoid */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Toxoid
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/Toxoid.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Toxoid PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Toxoid.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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



