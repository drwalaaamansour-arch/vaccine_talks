import Header from '@/components/Header';
import ArticlePageTitle from '@/components/ArticlePageTitle';
import { ARTICLE_META } from '@/lib/article-meta';

export default function ImmunoglobulinBloodProducts() {
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
              <ArticlePageTitle {...ARTICLE_META.hcpImmunoglobulinBloodProducts} locale="en">
                People who have recently received normal human immunoglobulin and other blood products
              </ArticlePageTitle>
              
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1.5rem'}}>
                Immunoglobulins may inhibit the immune response to some vaccines. Delay giving some vaccines for a certain time after receiving blood products.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.5rem', fontWeight:600, color:'#40606D', marginTop:'2rem', marginBottom:'1rem', direction: 'ltr'}}>Normal human immunoglobulin and blood products</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Normal human immunoglobulin may inhibit the immune response to some live parenteral viral vaccines. This is because low levels of antibodies may be present in the blood product that may impair the immune response to the live vaccine. <strong>Exceptions are yellow fever, BCG and zoster vaccines.</strong> People who have received any blood product, including plasma or platelets, should wait <strong>3–11 months</strong> before they receive an MMR (measles-mumps-rubella), MMRV (measles-mumps-rubella-varicella) or varicella vaccine. The length of time depends on the blood product they received. Live Japanese encephalitis vaccine (Imojev) should not be given within <strong>6 weeks</strong> of receiving immunoglobulins or immunoglobulin-containing blood products. It is preferable to wait <strong>3 months</strong>. People who have received a blood transfusion do not need to repeat any of their vaccinations.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.5rem', fontWeight:600, color:'#40606D', marginTop:'2rem', marginBottom:'1rem', direction: 'ltr'}}>People with agammaglobulinaemia</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Live vaccines are <strong>not recommended</strong> for people with agammaglobulinaemia who are receiving monthly normal human immunoglobulin. This is because their immune response may be inhibited. Also, these people will have sufficient circulating antibodies (for example, against measles and varicella) from the normal human immunoglobulin to protect them if they are exposed.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1rem'}}>
                Inactivated vaccines are recommended as per the routine schedule. The response may be suboptimal, but these vaccines are safe to receive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', color: '#40606D', marginBottom: '1rem'}}>
                Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella
              </h2>
              <div style={{width: '100%', marginTop: '1rem'}}>
                <iframe
                  src="/vaccine and blood/Table. Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella, m.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Recommended intervals PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/vaccine and blood/Table. Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella, m.pdf" 
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
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing of vaccines and antibody-containing products Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', color: '#40606D', marginBottom: '1.5rem'}}>
                Spacing of vaccines and antibody-containing products
              </h2>

              <h3 style={{textAlign:'left', fontSize:'1.5rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'1rem', direction: 'ltr'}}>Live vaccines</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Ty21a typhoid, yellow fever, LAIV, and rotavirus vaccines may be administered at any time before, concurrent with, or after administration of any antibody-containing preparation such as immune globulin, hyperimmune globulin, or intravenous immune globulin (IGIV).
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1rem'}}>
                Blood (e.g., whole blood, packed red blood cells, and plasma) and other antibody-containing blood products (e.g., immune globulin, hyperimmune globulin, and IGIV) can inhibit the immune response to measles and rubella vaccines for ≥3 months. The effect of blood and immune globulin preparations on the response to mumps and varicella vaccines is unknown; however, commercial immune globulin preparations contain antibodies to these viruses. Blood products available in the United States are unlikely to contain a substantial amount of antibody to yellow fever virus. The length of time that interference with injectable live-virus vaccine (other than yellow fever) can persist after the antibody-containing product is a function of the amount of antigen-specific antibody contained in the product. Therefore, after an antibody-containing product is received, live vaccines (other than Ty21a typhoid, yellow fever, LAIV, and rotavirus vaccines) should be delayed until the passive antibody has degraded. In circumstances where there is high-risk of vaccine-preventable disease it is acceptable to administer a dose of vaccine prior to completion of this interval. If a dose of injectable live-virus vaccine (other than yellow fever) is administered after an antibody-containing product but at an interval shorter than recommended in this report, the vaccine dose should be repeated. The repeat dose should be administered at the interval indicated for the antibody-containing product, after the invalid dose of vaccine.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1rem'}}>
                Although passively acquired antibodies can interfere with the response to rubella vaccine, the low dose of anti-Rho(D) globulin or any other blood product administered to postpartum women have not been demonstrated to reduce the response to the RA27/3 strain rubella vaccine. Congenital rubella syndrome and congenital varicella are conditions with considerable morbidity and represent a true risk in future pregnancies. Because of the importance of rubella and varicella immunity among women of child-bearing age, the postpartum vaccination of women without evidence of immunity to rubella or varicella with MMR, varicella, or MMRV vaccines should not be delayed because of receipt of anti-Rho(D) globulin or any other blood product during the last trimester of pregnancy or at delivery. Any reduction in immunity caused by anti-Rho(D) globulin or other blood products is outweighed by the opportunity to generate immunity. These women should be vaccinated immediately after giving birth and, if possible, tested ≥3 months later to ensure immunity to rubella and, if appropriate, to measles. Measles and rubella serologies have a low false-positive rate and are therefore acceptable for use in this limited postpartum context.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1rem'}}>
                Interference might occur if administration of an antibody-containing product becomes necessary after administration of MMR or varicella vaccines. Usually, vaccine virus replication and stimulation of immunity occurs 1–2 weeks after vaccination. If the interval between administration of any of these vaccines and subsequent administration of an antibody-containing product is less than 14 days, vaccination should be repeated after the recommended interval unless serologic testing indicates a protective antibody response.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginTop: '1rem'}}>
                A humanized mouse monoclonal antibody product (palivizumab) is available as prophylaxis for serious lower respiratory tract disease from respiratory syncytial virus among infants and young children. This product contains only antibody to respiratory syncytial virus and does not interfere with the immune response to licensed live or non-live vaccines.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.5rem', fontWeight:600, color:'#40606D', marginTop:'2rem', marginBottom:'1rem', direction: 'ltr'}}>Non-live vaccines</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Antibody-containing products interact less with non-live vaccines compared with live vaccines. Therefore, administering non-live vaccines either simultaneously with or at any interval before or after receipt of an antibody-containing product should not substantially impair development of a protective antibody response. The vaccine or toxoid and antibody preparation should be administered at different sites using the standard recommended dose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Section: timing19-24,26-31 */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', color: '#40606D', marginBottom: '1rem'}}>
                Timing and Spacing
              </h2>
              <div style={{width: '100%', marginTop: '1rem'}}>
                <iframe
                  src="/vaccine and blood/timing19-24,26-31.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Timing and Spacing PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a 
                    href="/vaccine and blood/timing19-24,26-31.pdf" 
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
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginBottom:'1rem', direction: 'ltr'}}>References</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '1rem'}}>
                <a 
                  href="https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-have-recently-received-normal-human-immunoglobulin-and-other-blood-products" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#40606D',
                    textDecoration: 'underline',
                    wordBreak: 'break-word'
                  }}
                >
                  https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-have-recently-received-normal-human-immunoglobulin-and-other-blood-products
                </a>
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                <a 
                  href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/timing-spacing-immunobiologics.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#40606D',
                    textDecoration: 'underline',
                    wordBreak: 'break-word'
                  }}
                >
                  https://www.cdc.gov/vaccines/hcp/imz-best-practices/timing-spacing-immunobiologics.html
                </a>
              </p>
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
                <a href="https://www.linkedin.com/in/walaa-adel-895009369" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                <a href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg></a>
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

