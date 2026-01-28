import Header from '@/components/Header';

export default function FAQHib() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Hib</h2>
      </section>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is Haemophilus influenzae?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Haemophilus influenzae is a bacteria that has encapsulated (typeable) or unencapsulated (nontypeable) strains. Encapsulated strains express one of six antigenically capsular polysaccharides (types a, b, c, d, e, or f). Historically, type b (Hib) was the most common type to cause invasive disease, particularly in young children. H. influenzae colonizes the upper respiratory tract of humans and is transmitted person-to-person by inhalation of respiratory droplets or by direct contact with respiratory tract secretions.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Encapsulated H. influenzae nontype b strains, particularly type a, can cause invasive disease similar to Hib disease. Nontypeable strains also can cause invasive disease but more commonly cause mucosal infections such as otitis media, conjunctivitis, and sinusitis. Vaccines are only available for H. influenzae type b; Hib vaccines do not protect against disease caused by any other H. influenzae strains.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are risk factors for invasive Hib disease?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>People with certain immunocompromising conditions are considered at increased risk for invasive Hib disease. These conditions include functional or anatomic asplenia, HIV infection, immunoglobulin (antibody) deficiency including immunoglobulin G2 subclass deficiency, early component complement deficiency, use of a complement inhibitor (such as eculizumab [Soliris], ravulizumab [Ultomiris], or similar), receipt of a hematopoietic stem cell transplant, or receipt of chemotherapy or radiation therapy for treatment of cancer.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What's the difference between Hib and influenza?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Haemophilus influenzae type b is a polysaccharide-encapsulated bacteria that causes a variety of invasive diseases, such as meningitis, epiglottitis, and pneumonia. Influenza is a virus that causes the disease influenza.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Historical note: Haemophilus influenzae was first isolated in 1889 from the sputum of a patient who died of (viral) influenza disease, and the isolated organism (then called the Pfeiffer bacillus) was incorrectly assumed to have caused the patient's illness. Haemophilus influenzae received its name in 1920, to acknowledge its historical association with influenza illness. The viral cause of influenza was not discovered until 1933.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the Hib vaccine schedule for children who are behind?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The catch-up schedule will help determine the number of additional doses needed and the minimum intervals between doses. However, if a healthy child receives a single dose of Hib vaccine at age 15 months or older, he or she does not need any further doses regardless of the number of doses received before age 15 months. Some high-risk children between the age of 15 months and 59 months will be recommended for two doses of Hib vaccine based on previous history of incomplete vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a healthy infant received Hib at 5 and 15 months, more doses needed?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. If a healthy child receives a dose of Hib vaccine at 15 months of age or older, he or she does not need any further doses regardless of the number of doses received before 15 months of age.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Booster at 12–15 months still needed two months later?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the child received a primary series (2 or 3 doses, depending upon the product) of Hib vaccine in the first year of life, then the final (booster) dose of the series may be given as early as 12 months, provided at least 2 months have passed since the last dose. An unvaccinated 12–14‑month‑old child should receive one dose as a primary series, and a booster dose 2 months later. Unvaccinated healthy children 15–59 months of age need only a single dose of any licensed conjugate Hib vaccine. Some high‑risk children 15–59 months of age are recommended for two doses of Hib vaccine based on previous history of incomplete vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 4‑year‑old had dose #3 at 6 months. Need dose #4?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. All children less than 5 years old need at least one dose of Hib vaccine on or after the first birthday. The last dose should be separated from the previous dose by at least 8 weeks.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Unvaccinated 7‑year‑old—give Hib?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP does not recommend routine Hib vaccination of healthy children 60 months of age or older, even if they have no prior history of Hib vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Hib dose given at 2 weeks—what now?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Hib vaccine should not be given earlier than 6 weeks of age. A dose given before 6 weeks should NOT be counted. Start a full series of 3 or 4 doses (product dependent) beginning at age 2 months. No special testing is recommended.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which adults should receive Hib vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Hib vaccine is not routinely recommended for healthy adults ≥ 19 years. One dose is recommended for individuals with anatomic or functional asplenia or sickle cell disease, or those undergoing elective splenectomy if not previously vaccinated (ideally ≥ 14 days before surgery). Recipients of hematopoietic stem cell transplant should receive a 3‑dose series 6–12 months post‑transplant, regardless of history (≥ 4 weeks between doses). Hib vaccine is not recommended for adults with HIV infection.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When to vaccinate around splenectomy?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For planned splenectomy, give pneumococcal, meningococcal, and Hib vaccines at least 2 weeks before surgery if possible. If not given before, administer as soon as clinically stable after surgery.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Vaccines before splenectomy—do doses count if given &lt; 14 days prior?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>PCV, Hib, MenACWY, and MenB should be given ≥ 14 days before splenectomy if possible. Doses given within 14 days before surgery can still be counted as valid. If not given before, administer when clinically stable after surgery. If PCV20/PCV21 is given, PPSV23 is not needed; if PCV15 is used, give PPSV23 ≥ 8 weeks later (age ≥ 2 years).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should adults with hypogammaglobulinemia receive Hib?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For adults, Hib vaccine is recommended for asplenia (all ages). Immunoglobulin deficiency and early complement deficiency apply to children 12–59 months. Age and clinical context determine recommendations.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should children who recover from invasive Hib be vaccinated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Children &lt; 24 months who develop invasive Hib disease should be considered susceptible and vaccinated starting in the convalescent phase, completing the age‑appropriate series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How should Hib vaccines be administered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All Hib‑containing vaccines are administered intramuscularly.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should close contacts of invasive Hib receive prophylaxis?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>CDC guidance (2014 ACIP) recommends rifampin chemoprophylaxis for certain household and childcare settings to prevent secondary cases. See MMWR: <a href="https://www.cdc.gov/mmwr/PDF/rr/rr6301.pdf" target="_blank" rel="noopener noreferrer" style={{direction: 'ltr'}}>rr6301.pdf</a> for detailed criteria and recommendations. There are no chemoprophylaxis guidelines for non‑type b H. influenzae at this time.</p>
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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


