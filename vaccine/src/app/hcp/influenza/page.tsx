import Header from '@/components/Header';

export default function HCPInfluenza() {
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
                Influenza
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/influenza.png"
                  alt="Influenza"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Influenza remains a significant public health concern year after year, affecting millions worldwide and leading to substantial morbidity and mortality, particularly among vulnerable populations. Each year, the formulation of influenza vaccines is updated as new viral strains emerge and epidemiological landscapes shift. The 2024-25 influenza season introduces several important changes and recommendations aimed at providing optimal protection against circulating influenza viruses.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Vaccine Composition for 2025-2026</h3>
              <p className="about-lang-intro">
                A key update from 2025-26 influenza season is that all available vaccines are trivalent. This means they contain antigens from three different influenza virus strains: two influenza A strains and one influenza B strain. In recent years, some quadrivalent vaccines included two B strains, one from each of the Victoria and Yamagata lineages. However, for 2025-26, the B/Yamagata lineage is no longer included, as B/Yamagata viruses have not been detected globally since March 2020. Thus, the composition in 2024-25 focuses on the following: Influenza A(H1N1)pdm09-like virus, Influenza A(H3N2)-like virus, Influenza B Victoria lineage-like virus.
              </p>
              <p className="about-lang-intro">
                The specific strains recommended for egg-based influenza vaccines for the 2025-26 season are as follows: an A/Victoria/4897/2022 (H1N1)pdm09-like virus; an A/Croatia/10136RV/2023 (H3N2)-like virus; and (Updated) a B/Austria/1359417/2021 (B/Victoria lineage)-like virus.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Timing and Administration of Influenza Vaccination</h3>
              <p className="about-lang-intro">
                For most people who require only a single dose of influenza vaccine, the best time to receive the vaccine is during September and October. This timing is crucial to ensure that immunity is at its peak during the typical months of high influenza activity. Nevertheless, vaccination should continue beyond October for those who have not yet received it, as long as influenza viruses are actively circulating and vaccines have not expired. Providers are encouraged to continue offering influenza vaccines throughout the entire influenza season. Even if a person has already had an influenza illness earlier in the season, vaccination is still recommended, as multiple strains and subtypes can circulate in the same season.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Revaccination</h3>
              <p className="about-lang-intro">
                Protection from the influenza vaccine does wane over time, with the degree and speed of waning varying by viral strain and individual recipient (e.g., by age). However, studies indicate that protection generally persists for at least five to six months post-vaccination. Based on current evidence, the Centers for Disease Control and Prevention (CDC) and the Advisory Committee on Immunization Practices (ACIP) do not recommend revaccination later in the season for those who have already received the full seasonal vaccine, regardless of when it was administered.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Rationale for Annual Vaccination</h3>
              <p className="about-lang-intro">
                Annual influenza vaccination is necessary due to several factors: Antigenic Drift: Influenza viruses mutate frequently, requiring updated vaccines each season to match the most prevalent strains. Waning Immunity: Immunity from the vaccine diminishes over time, making yearly vaccination essential for continued protection. Multiple Strains: More than one type or subtype of influenza virus can circulate in any given season; the vaccine is formulated to protect against the most likely strains.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Populations at Increased Risk</h3>
              <p className="about-lang-intro">
                While healthy children and adults can experience severe influenza or its complications, certain groups are at notably higher risk for adverse outcomes. Vaccine recommendations place special emphasis on protecting the following populations: Children younger than 5 years (especially those under 2), Adults aged 50 years and older, Pregnant people, Alaska Natives and American Indians, Residents of nursing homes or long-term care facilities.
              </p>
              <p className="about-lang-intro">
                Medical Conditions That Increase Risk: Chronic pulmonary diseases (including asthma), Cardiovascular diseases (excluding isolated hypertension), Renal, hepatic, neurologic, hematologic, or metabolic disorders (including diabetes mellitus), Immunocompromising conditions (due to any cause, such as medications or HIV infection), Extreme obesity (BMI of 40 or higher in adults), Chronic use of aspirin- or salicylate-containing medications in children through age 18 (due to risk of Reye syndrome).
              </p>
              
              <h3 style={{fontSize: '1.8rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'center', alignSelf: 'center', width: '100%'}}>Seasonal Influenza in Egypt - Community-Based Study (2017–2020)</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                A large community-based study conducted in five rural villages in northern Egypt followed over 2,300 individuals across three years (2017–2020) to better understand the burden of seasonal influenza.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>Key Findings:</strong> Infection rates varied each year, ranging from 4% to 28%. Antibodies against influenza A viruses (H1N1 and H3N2) were common, even though most participants had never received the flu vaccine. 42% showed immunity to H1N1, 65% had antibodies to H3N2. These results highlight the natural spread of flu viruses in rural Egyptian communities and the under-recognized burden of seasonal influenza.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>Why it matters:</strong> This study shows that seasonal influenza is widespread in Egypt, even without vaccination. It supports the importance of introducing or strengthening flu vaccination programs, especially for vulnerable groups.
              </p>
              
              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.5rem'}}>
                Sources: https://onlinelibrary.wiley.com/doi/full/10.1111/irv.12974, https://www.immunize.org/ask-experts/topic/influenza/, https://iris.who.int/bitstream/handle/10665/354264/WER9719-eng-fre.pdf?sequence=1
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/influenza"
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

      {/* Vaxigrip PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                Vaxigrip
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/Vaxigrip%20.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Vaxigrip PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/Vaxigrip%20.pdf" 
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

      {/* Influvac PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                Influvac
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/Influvac.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Influvac PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/Influvac.pdf" 
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

      {/* GCFLU PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                GCFLU
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/GCFlu%20.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="GCFLU PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/GCFlu%20.pdf" 
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




