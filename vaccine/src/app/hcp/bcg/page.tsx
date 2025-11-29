import Header from '@/components/Header';

export default function HCPBCG() {
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
                BCG
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/bcg.jpg" 
                  alt="BCG" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Bacille Calmette-Guérin (BCG) is a vaccine primarily used to prevent tuberculosis (TB), a disease that continues to be a major public health concern worldwide. Since its development, the BCG vaccine has played a crucial role in reducing the incidence of severe TB forms, particularly in children. However, its use, efficacy, and policy implementation differ considerably across countries, reflecting varying epidemiological patterns and healthcare priorities.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>General Overview</h3>
              <p className="about-lang-intro">
                The BCG vaccine is derived from a live attenuated strain of Mycobacterium bovis, closely related to Mycobacterium tuberculosis, the causative agent of TB. It is administered to generate immunity, especially against severe forms of TB like TB meningitis and miliary TB in infants and children. BCG does not confer full protection against pulmonary TB in adults, and its effectiveness varies depending on geographical and individual factors. Global Usage: The BCG vaccine is part of routine immunization programs in many countries, particularly those with high TB incidence. Route of Administration: It is usually given as a single intradermal injection soon after birth. Effectiveness: BCG is most effective at preventing severe, life-threatening TB in children, but its protection against adult pulmonary TB is variable.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Contraindications</h3>
              <p className="about-lang-intro">
                BCG vaccine is a live vaccine and is therefore contraindicated in individuals with compromised immune systems, such as those with HIV infection or those preparing for organ transplantation. Pregnant women should also not receive BCG, although no direct harm to the fetus has been observed—further research is needed to ensure its safety in pregnancy.
              </p>
              
              <h3 style={{fontSize: '1.8rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'center', alignSelf: 'center', width: '100%'}}>BCG Vaccination Policy and Impact in Egypt</h3>
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Policy Implementation:</h3>
              <p className="about-lang-intro">
                Egypt, like many countries with significant TB burden, has adopted BCG vaccination as a central pillar of its TB control strategy. The World Health Organization (WHO) recommends a multifaceted approach that includes routine BCG vaccination at birth, vigilant case detection, and the administration of directly observed therapy short-course (DOTS) for TB treatment. The Egyptian Ministry of Health and Population has consistently applied the WHO control policy for more than 30 years. Vaccination Program: BCG is administered to all newborns, aligning with WHO recommendations and reflecting Egypt's ongoing efforts to reduce TB incidence, particularly severe TB in children.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Controversies and Challenges</h3>
              <p className="about-lang-intro">
                Despite its long-standing application, the BCG vaccine's limited efficacy against adult pulmonary TB has sparked debate over its continued compulsory use, especially as Egypt sees changes in TB epidemiology. Some suggest revisiting its mandate in regions with declining TB rates, but overall, the evidence continues to support its use as part of a comprehensive TB control policy.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Trends in TB Control in Egypt (1992–2011)</h3>
              <p className="about-lang-intro">
                A comprehensive review of Egypt's TB control efforts over two decades provides valuable insight: Incidence Reduction: The incidence rate of all TB forms (pulmonary and extrapulmonary) decreased by 50%, from 34 to 17 cases per 100,000 people. Prevalence Reduction: Prevalence dropped by 60.6%, from 71 to 28 cases per 100,000 people. Case Detection and Treatment Success: Both rates improved over the period, although improvements plateaued in the last six years of analysis, suggesting the need for renewed public health focus.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Assessing Immune Response to BCG in Egyptian Infants</h3>
              <p className="about-lang-intro">
                Recent research has examined how well the BCG vaccine induces an immune response in Egyptian children. In one study, 25 healthy infants aged 14-24 months (15 boys and 10 girls), who received BCG at birth, underwent both clinical and laboratory assessments.
              </p>
              <p className="about-lang-intro">
                <strong>Study Findings:</strong> BCG Scar Formation: 76% of infants developed a visible BCG scar after vaccination. Tuberculin Skin Test: 28% showed a positive result, indicating exposure to TB antigens. Immune Response: The vaccine induced a significant increase in interferon-gamma (IFN-γ) production, a critical immune marker. After stimulation with purified protein derivative (PPD), median IFN-γ levels were 0.13 ng/ml, compared to 0.08 ng/ml at baseline (p = 0.001). Stimulation with phytohemagglutinin (PHA) yielded median IFN-γ levels of 1 ng/ml. Non-responders: 20% (5 infants) failed to show an adequate IFN-γ response to PPD, and these infants also had lower responses to PHA (z = -2.18, p = 0.03). Correlation with Tuberculin Testing: Infants with a positive tuberculin skin test had significantly higher IFN-γ responses after PPD stimulation than those with negative tests (z = -2.09, p = 0.036). Scar and Immunity: The presence or absence of a BCG scar did not correlate with immune function parameters.
              </p>
              <p className="about-lang-intro">
                <strong>Conclusions from the Study:</strong> The current BCG vaccination protocol in Egypt appears to elicit a satisfactory immune response in most infants. Notably, the absence of a BCG scar does not necessarily indicate failed immunization—an important consideration for clinicians and public health officials. However, the study's small sample size underscores the need for larger, long-term studies to better evaluate the vaccine's clinical effectiveness.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Recommendations and Future Directions in Egypt</h3>
              <p className="about-lang-intro">
                Based on the documented progress and ongoing challenges, the following key recommendations emerge: Continue the implementation of the WHO TB control policy, including universal BCG vaccination at birth in Egypt, given its role in reducing severe childhood TB. Enhance TB surveillance and reporting to identify emerging trends and inform policy adjustments, particularly as case detection and treatment success rates plateau. Conduct larger, longitudinal studies to fully assess the clinical protection afforded by BCG and the potential need for booster or alternative strategies. Educate healthcare providers and families about the significance of BCG vaccination and clarify misconceptions regarding scar formation and immunity.
              </p>
              
              <div style={{
                marginTop: '2rem', 
                marginBottom: '1rem', 
                padding: '0 clamp(1rem, 4vw, 2rem)', 
                textAlign: 'center', 
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}>
                <p className="about-lang-intro" style={{
                  fontSize: '0.9rem', 
                  fontStyle: 'italic', 
                  textAlign: 'center', 
                  margin: '0 auto', 
                  maxWidth: '800px',
                  padding: '0 1rem',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  Sources: https://www.cdc.gov/tb/hcp/vaccines/index.html, https://www.researchgate.net/publication/260804408_Trend_of_application_of_World_Health_Organization_control_strategy_of_tuberculosis_in_Egypt, https://ejpai.journals.ekb.eg/article_199575.html
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                BCG
              </h2>
              <div style={{width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '600px'}}>
                <div style={{transform: 'rotate(270deg)', transformOrigin: 'center', width: '600px', height: '800px'}}>
                  <iframe 
                    src="/Bcg%20serum.pdf" 
                    width="800px" 
                    height="600px" 
                    style={{border: 'none', borderRadius: '8px'}}
                    title="BCG Vaccine PDF"
                  />
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
              </div>
              <div style={{marginTop: '1rem', textAlign: 'center', width: '100%'}}>
                <a 
                  href="/Bcg%20serum.pdf" 
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

