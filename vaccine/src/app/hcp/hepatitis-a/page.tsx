import Header from '@/components/Header';

export default function HCPHepatitisA() {
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
                Hepatitis A
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/hepatitis%20a.png"
                  alt="Hepatitis A"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Hepatitis A is a liver disease common in many parts of the world and caused by hepatitis A virus (HAV), a picornavirus that causes acute inflammation of the liver. It is not related to the common viruses that cause hepatitis B or C.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem'}}>
                Symptoms and Complications
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Illness caused by HAV infection cannot be distinguished from other types of acute viral hepatitis, but it typically has an abrupt onset that can include fever, malaise, anorexia, nausea, abdominal discomfort, dark urine, and jaundice.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The likelihood of having symptoms with HAV infection is related to age. In children younger than age 6 years, 70% of infections are asymptomatic. When illness does occur in young children, it is typically not accompanied by jaundice. In older children and adults, infection typically is symptomatic, with jaundice occurring in more than 70% of patients.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Hepatitis A signs and symptoms usually resolve in 2-3 months, although 10% to 15% of symptomatic people have prolonged illness (usually referred to as relapsing hepatitis A) lasting up to 6 months and should be considered infectious during that time.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem'}}>
                Transmission
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Person-to-person spread through the fecal-oral route is the primary means of HAV transmission. Peak infectivity in infected people occurs during the two-week period before the onset of jaundice when the concentration of virus in the stool is highest and most people are no longer infectious one week after jaundice onset. Before routine vaccination of children was recommended, children were a key source of infection because most infected children had no symptoms and could shed virus in stool for weeks or months. Transmission currently occurs primarily among susceptible adults.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Common-source outbreaks and sporadic cases can occur from exposure to fecally-contaminated food or water. Uncooked HAV-contaminated foods have been recognized as a source of outbreaks. Cooked foods also can transmit.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem'}}>
                Incubation Period
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                HAV can produce either asymptomatic or symptomatic infection in humans after an average incubation period of 28 days (range: 15–50 days).
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem'}}>
                Shedding
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In infected people, HAV replicates in the liver, is excreted in bile, and is shed in stool. Peak infectivity occurs during the 2-week period before onset of jaundice or elevation of liver enzymes, when concentration of virus in stool is highest. Concentration of virus in stool declines after jaundice appears, with most people no longer infectious about a week after jaundice appears. Children can shed HAV for longer periods than adults, up to 10 weeks or longer after onset of clinical illness.
              </p>

              <h3 style={{textAlign: 'left', fontSize: '1.3rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem'}}>
                Risk in Chronic Liver Disease
              </h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                People with chronic liver disease are not at increased risk for acquiring HAV infection. However, they are at an increased risk for life-threatening, fulminant (severe and sudden) hepatitis if they become infected with hepatitis A. People considered to have chronic liver disease include those with hepatitis B or C infection, cirrhosis, fatty liver disease, alcoholic liver disease, and autoimmune hepatitis.
              </p>

              <h3 style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: '600', color: '#40606D', marginTop: '2rem', marginBottom: '1rem', width: '100%', alignSelf: 'center'}}>
                Seroprevalence of Hepatitis A Virus Antibodies Among Egyptian Children
              </h3>
              
              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Background
              </h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Hepatitis A virus (HAV) is the most common cause of acute viral hepatitis worldwide, with prevalence closely tied to sanitation and socioeconomic status. In Egypt, improvements in hygiene have shifted the pattern of HAV infection, affecting strategies for vaccination.
              </p>

              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Key Findings from a Cairo Study
              </h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                • The study analyzed 296 children (2.5–18 years) in Cairo, Egypt, across all social classes.<br/>
                • The overall seropositivity for HAV antibodies was 61.4%.<br/>
                • Seropositivity increased with age and decreased with higher social class:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Low social class: 87.5% seropositive<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- High social class: 43.0% seropositive<br/>
                • No significant difference in seropositivity between boys and girls.<br/>
                • Older children were more likely to be immune, reflecting increased exposure over time.<br/>
                • High social class children were more likely to remain susceptible into adolescence, increasing their risk for symptomatic infection if exposed later in life.
              </p>

              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Implications for Vaccination Policy in Egypt
              </h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                • Routine national hepatitis A vaccination may not be necessary at this time, since more than half the population acquires immunity naturally at a young age.<br/>
                • Targeted vaccination is recommended for children of high social class at preschool age, without requiring pre-testing for HAV antibodies.<br/>
                • Vaccination may be considered for middle social class children at preschool age and for high social class adolescents (9–18 years) after testing for HAV antibodies.<br/>
                • For children in low social class, early natural immunity is common, so vaccination is not currently needed.
              </p>

              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Further Recommendations
              </h4>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                • Population-based studies across different regions are essential for refining vaccination strategies and ensuring cost-effective use of resources.<br/>
                • Monitoring sanitation and socioeconomic shifts is critical, as improved living standards may paradoxically increase susceptibility in older children and adults.
              </p>

              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                Conclusion
              </h4>
              <p className="about-lang-intro">
                Vaccination remains the best way to prevent hepatitis A, especially in groups with lower rates of natural immunity. In Egypt, targeted vaccination for high-risk (especially high social class) children is more appropriate than a universal program at present, but continued surveillance is important.
              </p>

              <h4 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: '600', color: '#40606D', marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                References
              </h4>
              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
                <a href="https://www.cdc.gov/hepatitis-a/vaccination/index.html" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', textDecoration: 'underline'}}>
                  CDC Hepatitis A Vaccination Information
                </a><br/>
                <a href="https://www.emro.who.int/emhj-volume-14-2008/volume-14-issue-5/seroprevalence-of-hepatitis-a-virus-antibodies-among-a-sample-of-egyptian-children.html" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', textDecoration: 'underline'}}>
                  WHO EMRO - Seroprevalence Study Among Egyptian Children
                </a><br/>
                <a href="https://www.immunize.org/ask-experts/topic/hepa/" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', textDecoration: 'underline'}}>
                  Immunize.org Hepatitis A Expert Q&A
                </a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/hepatitis-a"
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

      {/* Havrix PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                Havrix (Hepatitis A)
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/Havrix.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Havrix PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/Havrix.pdf" 
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

      {/* Avaxim PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                Avaxim (Hepatitis A)
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/Avaxim.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Avaxim PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/Avaxim.pdf" 
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

      {/* Healive PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center'}}>
                Healive (Hepatitis A)
              </h2>
              <div style={{width: '100%', marginTop: '1.5rem'}}>
                <iframe 
                  src="/healive.pdf" 
                  width="100%" 
                  height="800px" 
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Healive PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/healive.pdf" 
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

