import Header from '@/components/Header';

export default function FAQHepatitisB() {
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

      {/* Simple centered title */}
      <section style={{padding:'0.5rem 1rem 0'}}>
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Hepatitis B</h2>
      </section>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the signs and symptoms of hepatitis B?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>About 30%–50% people who are 5 years of age or older with acute (recently acquired) hepatitis B have initial signs or symptoms when infected with hepatitis B virus (HBV). Children younger than age 5 years and newly infected immunosuppressed adults rarely show any symptoms. When present, signs and symptoms of hepatitis B might include nausea, lack of appetite, tiredness, muscle, joint, or abdominal pain, fever, diarrhea or vomiting, headache, dark urine, clay-colored stools, and yellowing of the skin and whites of the eyes (jaundice). People who have such signs or symptoms generally feel quite ill and might need to be hospitalized. People with chronic (life-long) HBV infection might have no symptoms, have no evidence of liver disease, or have a range of disease from chronic hepatitis to cirrhosis or hepatocellular carcinoma, a type of liver cancer.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long does it take to show signs of illness after HBV infection?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If signs or symptoms of illness occur, they begin an average of 90 days (range: 60–150 days) after exposure to HBV.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How is hepatitis B virus (HBV) transmitted?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Persons with chronic HBV infection (those with persistent hepatitis B surface antigen [HBsAg] in the serum for at least 6 months) serve as the main reservoir for HBV transmission. HBV is transmitted through percutaneous (through the skin), mucosal, or non-intact skin exposure to infectious blood or body fluids. HBV is concentrated most highly in blood, and percutaneous exposure is an efficient mode of transmission. Semen and vaginal secretions are infectious, and HBV also can be detected in saliva, tears, and bile. Cerebrospinal fluid, synovial fluid, pleural fluid, peritoneal fluid, pericardial fluid, and amniotic fluid are also considered potentially infectious. Urine, feces, vomitus, nasopharyngeal washings, sputum, and sweat are not efficient vehicles of transmission unless they contain blood because they contain low quantities of infectious HBV. Hepatitis B surface antigen (HBsAg) found in breast milk is also unlikely to lead to transmission, so HBV infection is not a contraindication to breastfeeding.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the risk for transmitting HBV by oral sex?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There are no specific data on transmission of bloodborne viruses through oral-genital sex. Saliva has not been associated with HBV transmission unless biting has taken place. HBV is not spread by kissing, hugging, sneezing, coughing, food or water, sharing eating utensils or drinking glasses, or casual contact.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If acute hepatitis B resolves, can a person get HBV again?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Generally speaking, no. A person with laboratory evidence of resolved hepatitis B infection is considered immune. Vaccination of such individuals is not harmful but is not necessary.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How stable is HBV in the environment? What cleaners are effective?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>HBV is stable in the environment and remains viable for 7 or more days on environmental surfaces at room temperature. HBV can be transmitted despite the absence of visible blood. Any high level disinfectant that is tuberculocidal will inactivate HBV.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the various serologic tests for hepatitis B?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <strong>HBsAg</strong>: Hepatitis B surface antigen is a marker of infectivity. Its presence indicates either acute or chronic HBV infection.<br />
                <strong>anti-HBs</strong>: Antibody to hepatitis B surface antigen is a marker of immunity (from infection, vaccination, or passively acquired). Avoid the abbreviation HBsAb due to confusion with HBsAg.<br />
                <strong>anti-HBc (total)</strong>: Antibody to hepatitis B core antigen is a nonspecific marker of acute, chronic, or resolved infection; not a marker of vaccine-induced immunity.<br />
                <strong>IgM anti-HBc</strong>: Indicates recent infection with HBV (&lt; 6 months) and acute infection.<br />
                <strong>HBeAg</strong>: Marker of high infectivity; correlates with high replication; used in management of chronic infection.<br />
                <strong>Anti-HBe</strong>: May be present in infected or immune persons; in chronic infection suggests lower viral titer and infectivity.<br />
                <strong>HBV-DNA</strong>: Measure of viral load reflecting replication; correlates with infectivity; used to assess and monitor treatment of chronic HBV.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Who should be tested for anti-HBs after vaccination?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Not needed after routine vaccination of infants, children, or adults. Testing is recommended for: infants born to HBsAg-positive or unknown-status mothers (test anti-HBs and HBsAg at age 9–12 months); HCP and public safety workers at risk for exposure; hemodialysis patients, people living with HIV, and other immunocompromised people; and sex partners of HBsAg-positive people. Testing should be done 1–2 months after the final dose (or at 9–12 months for infants).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Isolated anti-HBc positive—should the person be vaccinated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Some isolated anti-HBc positives are false positives—if confirmed, vaccinate if indicated. If true positive, vaccination is not required (prior infection). In infants, isolated anti-HBc may reflect passive maternal antibody; anti-HBc testing in infants is not recommended.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Interpreting a common serology scenario</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For HBsAg nonreactive, anti-HBc reactive, IgM anti-HBc nonreactive, and borderline anti-HBs: repeat full panel and quantify anti-HBs. If anti-HBs &gt;= 10 mIU/mL, immune—no action. If anti-HBs &lt; 10 mIU/mL, give 1 HepB dose and retest in 1–2 months; if still &lt; 10, complete the series and retest 1–2 months after last dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If the HepB series is interrupted, restart?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Do not restart—continue the series from where it stopped regardless of interval length.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Pediatric dose given to an adult—what to do?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If caught the same day, give the remaining half dose. If discovered later, do not count the dose; recall and give a full age-appropriate adult dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long is hepatitis B vaccine protective?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Immunologic memory persists for at least 30 years and protects against clinical illness and chronic infection even if anti-HBs declines below detectable levels.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Counseling an HBV-positive patient regarding partner protection</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Use condoms until postvaccination anti-HBs confirms protection. Partner should complete HepB series (2 or 3 doses depending on brand) and test 1–2 months after the last dose; anti-HBs &gt;= 10 mIU/mL indicates protection.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Missed doses in adolescence—restart?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No restart is needed regardless of how long since prior doses; continue the series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Test and vaccinate on the same day—order?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Draw blood first, then vaccinate. Transient HBsAg positivity can occur shortly after vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Blood donation or HBsAg testing after HepB dose—wait time?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Wait at least 4 weeks. Transient HBsAg positivity has been detected up to 18 days after vaccination (up to 52 days among hemodialysis patients).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should pregnant people be vaccinated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. At-risk pregnant people should be vaccinated and counseled on HBV prevention.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>HepB for infants &lt; 2000 g—what schedule?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Preterm infants &lt; 2000 g born to HBsAg-positive or unknown-status mothers: give HBIG + HepB within 12 hours of birth; do not count the birth dose; give 3 additional doses starting at age 1 month; test HBsAg and anti-HBs at 9–12 months (or 1–2 months after final dose if delayed). If HBsAg-negative mother, give first dose at discharge or age 1 month.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Using Twinrix then single-antigen vaccines—how to complete?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If 1 Twinrix dose was given: complete with 2 adult HepA + 2 adult HepB doses. If 2 Twinrix doses were given: complete with 1 adult HepA + 1 adult HepB. A Twinrix dose counts as a standard adult HepB dose but not a full adult HepA dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Screening in pregnancy—what test?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Use HBsAg to screen for transmissible infection; add HBV DNA for HBsAg-positive mothers to guide antiviral therapy. Manage infants of HBsAg-positive or unknown-status mothers with HBIG + HepB within 12 hours.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Adults: who should be vaccinated and screened?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>CDC recommends HepB vaccination for all adults &lt; 60 years if not previously vaccinated; offer to ≥ 60 years and vaccinate routinely if at risk. All adults ≥ 18 years should be screened at least once with the triple panel (anti-HBs, total anti-HBc, HBsAg) regardless of vaccination history; periodic testing for ongoing risk.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Adults with diabetes—HepB recommendations</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Vaccinate all people ≤ 59 years. For ≥ 60 years, vaccinate based on clinical judgment. Outbreaks have occurred in assisted blood glucose monitoring settings.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Adult vaccination site and needle</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Use deltoid for IM injection; anterolateral thigh is acceptable. Do not use gluteus.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is post‑vaccination testing needed for adults?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Only for those whose management depends on immune status: HCP/public safety workers at risk; hemodialysis and other immunocompromised persons; sex partners of HBsAg‑positive people. Test 1–2 months after last dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Hemodialysis patients—testing frequency and boosters</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Test anti-HBs 1–2 months after vaccination and annually thereafter. If anti-HBs &lt; 10 mIU/mL, give a booster. No maximum number of boosters; test no more than annually.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Off‑schedule adolescents or adults—minimal intervals</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>3‑dose series minimums: ≥ 4 weeks between doses #1–#2, ≥ 8 weeks between #2–#3, and ≥ 16 weeks between #1–#3. Do not restart for long intervals.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>HCP who are anti‑HBs negative after series—management</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Option 1: give one dose and retest; if still negative, complete series and retest. Option 2: repeat full series and retest 1–2 months after last dose. If persistently negative and HBsAg/anti‑HBc negative, manage as vaccine non‑responder and counsel regarding HBIG after exposures.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Routine boosters for HCP?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Immunocompetent HCP with documented adequate anti‑HBs after a complete series are protected long‑term; no routine boosters or periodic testing needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              
              {/* Social Links */}
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

            {/* Disclaimer Button */}
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
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


