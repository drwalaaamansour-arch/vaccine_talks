import Header from '@/components/Header';

export default function FAQInfluenza() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Influenza</h2>
      </section>

      {/* Influenza FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What medical conditions increase the risk of severe illness from influenza?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>While even healthy children and adults get severe influenza or die from influenza and its complications, the risk of severe influenza is higher for children younger than 5 years, adults 50 years and older, pregnant people. Medical conditions that increase a person’s risk include chronic pulmonary (including asthma), cardiovascular (excluding isolated hypertension), renal, hepatic, neurologic, hematologic, or metabolic disorders (including diabetes mellitus); immunocompromising conditions due to any cause (including medications or HIV); extreme obesity (BMI ≥ 40 in adults); and chronic use of aspirin- or salicylate-containing medications in children through age 18 (due to risk of Reye syndrome after influenza infection).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Who is recommended to be vaccinated against influenza?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends annual vaccination for all people ages 6 months and older who do not have a contraindication to influenza vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which influenza vaccines are available during the 2025–26 season?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Multiple manufacturers are producing inactivated, recombinant, and live attenuated influenza vaccines. All 2025–26 vaccines are trivalent (two influenza A and one influenza B antigens).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the vaccine viruses for the 2025–26 season?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All vaccines are trivalent. B/Yamagata antigens are no longer included because B/Yamagata viruses have not been detected globally since March 2020. The 2025–26 vaccines include a new A(H3N2) component. Egg-based vaccines include: an A/Victoria/4897/2022 (H1N1)pdm09-like virus; an A/Croatia/10136RV/2023 (H3N2)-like virus; and a B/Austria/1359417/2021 (B/Victoria lineage)-like virus.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When should vaccination start?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Ideally in September and October for most people needing one dose. Continue vaccinating as long as influenza viruses circulate and unexpired vaccine is available. Avoid July–August for most groups because of waning immunity, except consider for people in the third trimester of pregnancy. Children {'<'} 9 years needing two doses should start as soon as possible to complete by end of October.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Revaccinate high‑risk or older patients later in the season?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. CDC/ACIP do not recommend revaccination later in the season once fully vaccinated.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How late can we vaccinate?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Influenza peaks December–March (often Jan–Feb). Continue vaccinating through spring if viruses are circulating and vaccine is unexpired. Vaccinate travelers through June if they missed earlier vaccination. Give second doses to children who missed them—most injectables expire June 30.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Coadministration with other vaccines (including COVID‑19)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Coadministration is acceptable. Given limited data on simultaneous use of multiple non‑aluminum adjuvanted vaccines, consider a nonadjuvanted influenza vaccine if another non‑aluminum adjuvanted vaccine is due at the same visit. Do not delay influenza vaccination if a specific product is unavailable.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Coadministration with RSV vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Influenza and RSV vaccines may be given at the same visit.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Dose in June, when to vaccinate for next season?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Separate by at least 4 weeks between doses if vaccinating again for the next season.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Vaccinate after an influenza illness?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Because multiple types/subtypes can circulate, unvaccinated people should be vaccinated even after an earlier influenza illness.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long does immunity last?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Protection wanes but generally persists for at least 5–6 months; magnitude and waning speed vary by strain and age.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>“I got the flu from the shot.” How to counsel?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Injectable vaccines cannot cause influenza; live nasal vaccine cannot replicate at body temperature. Fewer than 1% may have mild, self‑limited systemic symptoms. Other explanations include infection before immunity develops (1–2 weeks), misattribution of other viruses as “flu,” and imperfect vaccine effectiveness (typically ~40%–60% when well‑matched). Vaccination reduces illness, hospitalization, deaths, and severity; it also lowers stroke and acute cardiac event risk among people with heart disease.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which children {'<'} 9 years need two doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Children 6 months–8 years need a second dose ≥ 4 weeks after the first if: first‑time vaccination; have not received ≥ 2 doses before July 1 of the current year; or vaccination history is unknown. If a child turns 9 during the season but was recommended to receive two doses, still give dose 2.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can the two pediatric doses be different products?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. The two doses may be the same or different products.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Could any 9‑year‑old need two doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes, if they turn 9 during the season, received one dose before turning 9, and have no/unknown prior doses before July 1 of the current season year.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Giving IIV with DTaP and/or PCV—OK?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. A small increased risk of febrile seizure was seen within 24 hours when IIV was given with PCV13 or DTaP, but ACIP recommends giving vaccines at the same visit if indicated. Data with PCV15/PCV20 are limited; do not delay vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Influenza vaccine during pregnancy?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Vaccination reduces maternal influenza, preterm labor, and infant influenza/hospitalizations in the first 6 months of life.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why vaccinate in pregnancy when infants {'<'} 6 months aren't vaccinated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Pregnancy increases risk of severe influenza due to physiologic changes. Vaccination any trimester protects the mother and transfers maternal antibodies to protect the infant until vaccination at 6 months is possible.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Revaccinate if vaccinated early, then become pregnant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Only one dose per season is recommended, except certain first‑time pediatric recipients.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Diabetes controlled by diet—vaccinate?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. People with metabolic disease, including diabetes, should receive annual influenza vaccination with an age‑appropriate IIV or RIV.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Multiple sclerosis—safe to vaccinate?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. MS is not a contraindication to influenza vaccines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>HIV and influenza vaccine—effect on titer?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Transient increases in HIV replication have been observed in some studies after IIV, but without clinical deterioration. Annual influenza vaccination with age‑appropriate injectable vaccine is beneficial for people with HIV.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Cancer treatment—safe to vaccinate?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. All cancer patients should receive age‑appropriate IIV or RIV; do not give live attenuated influenza vaccine (LAIV). Cancer patients and survivors are at higher risk for complications.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Post bone marrow transplant—when to start?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Give IIV or RIV beginning ≥ 6 months after transplant and annually thereafter; may consider a dose at 4 months with consideration of a second dose. Children {'<'} 9 years receiving influenza vaccine for the first time need two doses.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Contraindications and precautions for IIV and RIV</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Egg‑based IIV: contraindications—severe allergic reaction to any influenza vaccine or vaccine component (except egg). Precautions—moderate/severe acute illness; GBS within 6 weeks after a prior dose. ccIIV: contraindications—severe allergic reaction to prior ccIIV or component; precautions as above and severe reaction to another influenza vaccine. RIV: contraindications—severe allergic reaction to prior RIV or component; similar precautions.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>ACIP guidance on egg allergy</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Everyone ≥ 6 months with egg allergy and no other contraindication should receive influenza vaccine. Any egg‑based or non‑egg‑based influenza vaccine appropriate for age/health status can be used. Administer in settings prepared to manage acute reactions.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Feather allergy a contraindication to egg‑based vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Simultaneous PCV/DTaP and IIV for young children?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Although one study showed a small increased risk of febrile seizures within 24 hours, ACIP recommends administering at the same visit if indicated; do not deviate from schedule. Data with PCV15/PCV20 are not yet available.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Separate vaccines and allergy shots by 24 hours?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Not necessary. ACIP has no required separation; take the opportunity to vaccinate.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>History of Guillain‑Barré syndrome (GBS) at age 5—now 35, vaccinate?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Remote history of GBS unrelated to prior influenza vaccine is not a contraindication or precaution. GBS within 6 weeks after a prior influenza dose is a precaution.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Preferred anatomic site and needle for IIV/RIV</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>IIV: anterolateral thigh for infants/young children; deltoid for older children, adolescents, and adults (anterolateral thigh acceptable). Ensure IM injection into muscle. Influenza season is a good time to review IM technique.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Split an influenza vaccine dose into two days?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Not acceptable. Doses should never be split. If a half dose is given and the error is caught the same day, administer the remaining half that day; otherwise, repeat the full age‑appropriate dose as soon as possible.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">I'm always looking for new and exciting opportunities. Let's connect.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
            <div className="footer-section"><a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright"><p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p><p className="copyright-text">Content is original and may not be copied without permission.</p></div>
          <div className="footer-policy"><a href="/copy" className="policy-link">Copyright & Content Policy</a><span className="separator">|</span><a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a></div>
        </div>
      </footer>
    </div>
  );
}


