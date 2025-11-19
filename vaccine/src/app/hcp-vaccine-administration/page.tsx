import Header from '@/components/Header';

export default function HCPVaccineAdministration() {
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
            <div className="about-lang" style={{alignItems: 'flex-start', direction: 'ltr', textAlign: 'left'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Vaccine administration
              </h2>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'center', width: '100%', alignSelf: 'center'}}>Oral Route</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Rotavirus, adenovirus, cholera vaccine, and oral typhoid vaccines are the only vaccines administered orally. Oral typhoid capsules should be administered as directed by the manufacturer. The capsules should not be opened or mixed with any other substance. Rotavirus vaccines are licensed for infants. There are 2 brands of rotavirus vaccine, and they have different types of applicators. Providers should consult package inserts for details.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'center', width: '100%', alignSelf: 'center'}}>Intranasal Route</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Live attenuated influenza vaccine is approved for healthy nonpregnant persons aged 2-49 years and is the only vaccine administered by the intranasal route. The administration device is a nasal sprayer with a dose-divider clip that allows introduction of one 0.1-mL spray into each naris. The tip should be inserted slightly into the naris before administration. Even if the person coughs or sneezes immediately after administration or the dose is expelled any other way, the vaccine dose need not be repeated.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'center', width: '100%', alignSelf: 'center'}}>Injectable Route</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Routes of administration are recommended by the manufacturer for each immunobiologic. With the exceptions of bacille Calmette-Guérin (BCG) vaccine and smallpox vaccine [ACAM2000] (both administered by the percutaneous route), injectable vaccines are administered by the intramuscular or subcutaneous route. The smallpox/monkeypox vaccine (Jynneos) is primarily administered by the subcutaneous route but in some circumstances is administered by the intradermal route. Deviation from the recommended route of administration might reduce vaccine efficacy or increase the risk for local adverse reactions.
              </p>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                The method of administration of injectable vaccines is determined, in part, by the inclusion of adjuvants in some vaccines. An adjuvant is a vaccine component distinct from the antigen that enhances the immune response to the antigen, but might also increase risk of adverse reactions. To decrease risk of local adverse events, non-live vaccines containing an adjuvant should be injected into a muscle. Administering a vaccine containing an adjuvant either subcutaneously or intradermally can cause local irritation, induration, skin discoloration, inflammation, and granuloma formation.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Intramuscular Injections</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Injectable immunobiologics should be administered where local, neural, vascular, or tissue injury is unlikely. Use of longer needles has been associated with less redness or swelling than occurs with shorter needles because of injection into deeper muscle mass. Appropriate needle length depends on age and body mass. Injection technique is the most important parameter to ensure efficient intramuscular vaccine delivery.
              </p>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                For all intramuscular injections, the needle should be long enough to reach the muscle mass and prevent vaccine from seeping into subcutaneous tissue, but not so long as to involve underlying nerves, blood vessels, or bone. Intramuscular injections are administered at a 90-degree angle to the skin, preferably into the anterolateral aspect of the thigh or the deltoid muscle of the upper arm, depending on the age of the patient.
              </p>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                The needle gauge for intramuscular injection is 22-25 gauge. A decision on needle length and site of injection must be made for each person on the basis of the size of the muscle, the thickness of adipose tissue at the injection site, the volume of the material to be administered, injection technique, and the depth below the muscle surface into which the material is to be injected. Some experts allow intramuscular injection with a ⅝-inch needle but ONLY if the skin is stretched flat. If the subcutaneous and muscle tissue are bunched to minimize the chance of striking bone, a 1-inch needle or larger is required to ensure intramuscular administration.
              </p>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Aspiration before injection of vaccines or toxoids (i.e., pulling back on the syringe plunger after needle insertion but before injection) is not necessary because no large blood vessels are present at the recommended injection sites, and a process that includes aspiration might be more painful for infants.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Infants (Aged &lt;12 Months)</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                For the majority of infants, the anterolateral aspect of the thigh is the recommended site for injection because it provides comparatively larger muscle mass than the deltoid. In certain circumstances (e.g., physical obstruction to other sites and no reasonable indication to defer doses), the gluteal muscle can be used. If the gluteal muscle must be used, care should be taken to define the anatomic landmarks. For the majority of infants, a 1-inch needle is sufficient to penetrate the thigh muscle.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Toddlers (Aged 12 Months-2 Years)</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                For toddlers, the anterolateral thigh muscle is preferred, and when this site is used, the needle should be at least 1 inch long. The deltoid muscle can be used if the muscle mass is adequate. If 2 vaccines are to be administered in a single limb, they should be spaced an inch apart.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Children (Aged 3-10 Years)</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                The deltoid muscle is preferred for children aged 3-10 years; the needle length for deltoid site injections can range from ⅝ to 1 inch on the basis of technique. The anterolateral thigh can also be used. In this case the needle length should be 1 inch to 1.25 inches. Knowledge of body mass can be useful for estimating the appropriate needle length.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Young Adolescents (Aged 11-18 Years)</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                The deltoid muscle is preferred for adolescents 11-18 years of age. The anterolateral thigh can also be used. For injection into the anterolateral thigh, most adolescents will require a 1-1.5-inch needle to ensure intramuscular administration.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Adults (Aged ≥19 Years)</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                For adults, the deltoid muscle is recommended for routine intramuscular vaccinations. The anterolateral thigh also can be used. When injecting into the deltoid muscle, for adults a measurement of body mass/weight is allowable prior to vaccination, understanding that resources to measure body mass/weight are not available in all clinical settings. For men and women who weigh &lt;130 lbs (&lt;60 kg), a ⅝-inch needle is sufficient to ensure intramuscular injection in the deltoid muscle if the injection is made at a 90-degree angle and the tissue is not bunched. For men and women who weigh 130-152 lbs (60-70 kg), a 1-inch needle is sufficient. For women who weigh 152-200 lbs (70-90 kg) and men who weigh 152-260 lbs (70-118 kg), a 1- to 1.5-inch needle is recommended. For women who weigh &gt;200 lbs (&gt;90 kg) or men who weigh &gt;260 lbs (&gt;118 kg), a 1.5-inch needle is recommended. For injection into the anterolateral thigh muscle, a 1.5-inch needle should be used, although a 1-inch needle may be used if the skin is stretched tightly and subcutaneous tissues are not bunched.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Subcutaneous Injections</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Subcutaneous injections are administered at a 45-degree angle, usually into the thigh for infants aged &lt;12 months and in the upper-outer triceps area of persons aged ≥12 months. Subcutaneous injections may be administered into the upper-outer triceps area of an infant if necessary. A ⅝-inch, 23- to 25-gauge needle should be inserted into the subcutaneous tissue.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Multiple Injections</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                If multiple vaccines are administered at a single visit, administer each preparation at a different anatomic site. For infants and younger children, if more than 2 vaccines are injected in a single limb, the thigh is the preferred site because of the greater muscle mass; the injections should be sufficiently separated (separate anatomic sites [i.e., ≥1 inch] if possible) so that any local reactions can be differentiated. For older children and adults, the deltoid muscle can be used for more than one intramuscular injection. If a vaccine and an immune globulin preparation are administered simultaneously (e.g., Td/Tdap and tetanus immune globulin [TIG], hepatitis B and hepatitis B immunoglobulin [HBIG]), separate limbs should be used for each injection.
              </p>
              
              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.5rem'}}>
                Source: https://www.cdc.gov/vaccines/hcp/imz-best-practices/vaccine-administration.html
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF: Multidose */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Multiple Injections
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/multi%20dose.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Multidose PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/multi%20dose.pdf"
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
        </div>
      </section>

      {/* PDF: IM SC */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                IM-SC
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/im%20sc.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="IM SC PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/im%20sc.pdf"
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
        </div>
      </section>

      {/* PDF: Admin Vaccines */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Administrating Vaccines
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/admin%20vaccines.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Admin Vaccines PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a
                    href="/admin%20vaccines.pdf"
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

