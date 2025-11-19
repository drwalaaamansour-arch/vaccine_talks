import Header from '@/components/Header';

export default function HCPMeningococcal() {
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
                Meningococcal
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/men.jpeg"
                  alt="Meningococcal"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem'}}>
                Overview and Clinical Presentation
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Neisseria meningitidis is a Gram-negative diplococcus recognized for its ability to colonize the mucosal surfaces of the nasopharynx. Transmission occurs primarily via direct contact with large-droplet respiratory tract secretions, either from patients or asymptomatic carriers. While many individuals may carry the bacteria without consequences, in certain cases, it invades the bloodstream or central nervous system, leading to severe, frequently life-threatening disease. Clinically, meningococcal disease most commonly manifests as: <strong>Meningitis</strong> (inflammation of the membranes covering the brain and spinal cord, accounting for about 50% of cases), <strong>Bacteremia</strong> (presence of bacteria in the bloodstream, seen in approximately 30% of cases), and <strong>Bacteremic pneumonia</strong> (infection of the lungs with concurrent blood involvement, representing about 15% of cases). The disease can progress rapidly, often within hours, and may initially be mistaken for less severe illnesses. Symptoms of meningitis include sudden onset of fever, headache, stiff neck, nausea, vomiting, photophobia, and altered mental status. Bacteremia can present with fever and signs of septic shock, including hypotension and multi-organ dysfunction.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Classification: Serogroups and Their Global Relevance
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                N. meningitidis is classified into twelve serogroups based on the polysaccharide capsule. However, the vast majority of invasive disease—such as meningitis and sepsis—is attributed to serogroups A, B, C, W, X, and Y. The prevalence and relative importance of each serogroup fluctuate according to geographic region, age group, and time.
              </p>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Serogroup A</strong>: Historically responsible for devastating outbreaks, especially in the "meningitis belt" of sub-Saharan Africa. Rare in the United States due to successful vaccination campaigns.</li>
                <li><strong>Serogroup B</strong>: The leading cause among infants and young children in several high-income countries, including the United States. Between 2011 and 2020, serogroup B accounted for about 60% of cases among U.S. children under 5.</li>
                <li><strong>Serogroups C, W, Y</strong>: Most common among adolescents and older age groups in the United States; responsible for nearly two-thirds of cases in people aged 11 years and older (2011–2020).</li>
                <li><strong>Other serogroups</strong>: X and D are less common, though may be regionally significant.</li>
              </ul>

              <h3 style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem', width: '100%', alignSelf: 'center'}}>
                Epidemiology, Surveillance, and Vaccination Strategies in Egypt
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Meningococcal meningitis has long been endemic in Egypt. Large outbreaks occurred in the 1970s and late 1980s, prompting the Egyptian Ministry of Health and Population (MOHP) to implement a national, school-based vaccination program in 1992 utilizing MenAC polysaccharide vaccines.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Surveillance efforts, initiated in 1998, have provided insight into trends, serogroup prevalence, and outcomes. Key findings include:<br />
                <strong>Incidence in 2017</strong>: Estimated at 13.68 cases per 100,000 population; death rate 0.08 per 100,000.<br />
                <strong>Most common pathogen</strong>: N. meningitidis led confirmed bacterial meningitis (28.9% of cases, 1997–2006), followed by S. pneumoniae and H. influenzae.<br />
                <strong>CFR</strong>: Ranged from 13.4% (Mobarak) to 23% (Youssef in children under 6).<br />
                <strong>Age distribution</strong>: Highest burden among young children; average age in one study was 1.5 years.<br />
                <strong>Seasonality</strong>: Peaks in colder seasons, especially late autumn and winter.<br />
                <strong>Decline in N. meningitidis</strong>: Share of bacterial meningitis due to N. meningitidis fell from up to 72.5% (1988–1995) to 18.9%–38.2% (1997–2006).
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Serogroup Distribution and Evolution
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Early reports found MenA responsible for 95% of cases; after MenAC vaccine introduction, MenB (51–54.5%) and MenA (31.8–35%) became dominant, with smaller contributions from MenW (4–4.5%), MenY (2–2.3%), and MenD (2%). This shift mirrors the impact of MenAC vaccination.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Data from isolates (1998–2004): 51% MenB, 35% MenA, 4% MenW, 2% MenY, 2% MenD, 8% untypeable. Several sequence types and clonal complexes were identified; ST2174 and ST7 were most prevalent. The ST2174 clone may be endemic to Egypt, supporting ongoing molecular monitoring.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Antibiotic Resistance
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Resistance to sulphonamides was first documented in the 1960s. By the early 2000s, high resistance to trimethoprim/sulfamethoxazole (~86%) and intermediate resistance to ampicillin and penicillin were reported in 40–71% of isolates, varying by serogroup.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: 600, color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Impact of Vaccination and Policy
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                School-based MenAC polysaccharide vaccination since 1992 significantly reduced outbreak frequency and altered serogroup patterns. Incidence in 2004 fell to 0.1 per 100,000. Egypt also recommends MenACWY polysaccharide vaccination for travelers to high-risk areas.
              </p>

              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem'}}>
                References: 
                <a href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/meningococcal-meningitis" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> WHO – Meningococcal meningitis</a> | 
                <a href="https://www.cdc.gov/meningococcal/index.html" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> CDC – Meningococcal Disease</a> | 
                <a href="https://www.ijidonline.com/article/S1201-9712(20)32473-5/pdf" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}> IJID 2020 – Egypt epidemiology</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Buttons */}
      <section className="about-section" style={{padding: '0.5rem 0', height: '5cm'}}>
        <div className="about-elegant-card" style={{padding: '0.75rem 1.5rem', minHeight: 'auto', height: '100%'}}>
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual" style={{padding: '0', margin: '0'}}>
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%', padding: '0', margin: '0'}}>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0', marginBottom: '0', flexWrap: 'wrap'}}>
                <a
                  href="/faq/meningococcal-acwy"
                  style={{
                    display: 'block',
                    flex: '1',
                    minWidth: '280px',
                    maxWidth: '350px',
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
                  For FAQs press here (ACWY)
                </a>
                <a
                  href="/faq/meningococcal-b"
                  style={{
                    display: 'block',
                    flex: '1',
                    minWidth: '280px',
                    maxWidth: '350px',
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
                  For FAQs press here (B)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Bexsero */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Bexsero – Product Information</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/Bexsero.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Bexsero PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Bexsero.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Menactra */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Menactra – Product Information</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/Menactra.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Menactra PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Menactra.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: Nimenrix */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>Nimenrix – Product Information</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/nimenrix.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="Nimenrix PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/nimenrix.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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

      {/* PDF: MenQuadfi */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>MenQuadfi – Product Information</h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe src="/Menquadfi.pdf" width="100%" height="800px" style={{border: 'none', borderRadius: '8px'}} title="MenQuadfi PDF" />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/Menquadfi.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
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



