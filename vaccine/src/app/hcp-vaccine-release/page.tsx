import Header from '@/components/Header';

export default function HCPVaccineRelease() {
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
                Vaccine release
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img
                  src="/release.png"
                  alt="Vaccine Release"
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent' }}
                />
              </div>
              
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Most vaccines have been in use for decades, with millions of people receiving them safely every year. As with all medicines, every vaccine must go through extensive and rigorous testing to ensure it is safe before it can be introduced in a country's vaccine program.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Each vaccine under development must first undergo screenings and evaluations to determine which antigen should be used to invoke an immune response. This preclinical phase is done without testing on humans. An experimental vaccine is first tested in animals to evaluate its safety and potential to prevent disease. If the vaccine triggers an immune response, it is then tested in human clinical trials in three phases.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left', direction: 'ltr'}}>Phase 1</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The vaccine is given to a small number of volunteers to assess its safety, confirm it generates an immune response, and determine the right dosage. Generally in this phase vaccines are tested in young, healthy adult volunteers.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left', direction: 'ltr'}}>Phase 2</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The vaccine is then given to several hundred volunteers to further assess its safety and ability to generate an immune response. Participants in this phase have the same characteristics (such as age, sex) as the people for whom the vaccine is intended. There are usually multiple trials in this phase to evaluate various age groups and different formulations of the vaccine. A group that did not get the vaccine is usually included in phase as a comparator group to determine whether the changes in the vaccinated group are attributed to the vaccine, or have happened by chance.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left', direction: 'ltr'}}>Phase 3</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The vaccine is next given thousands of volunteers – and compared to a similar group of people who didn't get the vaccine, but received a comparator product – to determine if the vaccine is effective against the disease it is designed to protect against and to study its safety in a much larger group of people. Most of the time phase three trials are conducted across multiple countries and multiple sites within a country to assure the findings of the vaccine performance apply to many different populations. During phase two and phase three trials, the volunteers and the scientists conducting the study are shielded from knowing which volunteers had received the vaccine being tested or the comparator product. This is called "blinding" and is necessary to assure that neither the volunteers nor the scientists are influenced in their assessment of safety or effectiveness by knowing who got which product. After the trial is over and all the results are finalized, the volunteers and the trial scientists are informed who received the vaccine and who received the comparator. When the results of all these clinical trials are available, a series of steps is required, including reviews of efficacy and safety for regulatory and public health policy approvals. Officials in each country closely review the study data and decide whether to authorize the vaccine for use. A vaccine must be proven to be safe and effective across a broad population before it will be approved and introduced into a national immunization programme. The bar for vaccine safety and efficacy is extremely high, recognizing that vaccines are given to people who are otherwise healthy and specifically free from the illness. Further monitoring takes place in an ongoing way after the vaccine is introduced. There are systems to monitor the safety and effectiveness of all vaccines. This enables scientists to keep track of vaccine impact and safety even as they are used in a large number of people, over a long time frame. These data are used to adjust the policies for vaccine use to optimize their impact, and they also allow the vaccine to be safely tracked throughout its use. Once a vaccine is in use, it must be continuously monitored to make sure it continues to be safe.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left', direction: 'ltr'}}>How is a vaccine approved for production?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Once a vaccine has reached pre-approval stage following clinical trials, it is assessed by the relevant regulatory body for compliance with quality, safety and efficacy criteria. Following regulatory approval, manufacturers can submit a vaccine to WHO for prequalification (PQ), an assessment process that ensures quality, safety and efficacy and helps the UN and other international procurement organizations determine the programmatic suitability of a vaccine.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                During global health emergencies, the WHO Emergency Use Listing Procedure (EUL) may be used to allow emergency use of the vaccine. The EUL exists because, in a pandemic situation, products that could benefit the lives of people all over the world may be prevented from coming to market with sufficient speed. The EUL is a fast-tracked but rigorous process, designed to bring impactful products to all those in need, as quickly as possible, on a time-limited basis and based on a risk-versus-benefit evaluation. The WHO PQ/EUL recommendation may be used by UN agencies such as UNICEF and the Pan American Health Organization Revolving Fund for procurement decisions in low- and middle-income countries. Gavi also relies on WHO EUL/PQ to specify which vaccines its funds may be used to purchase.
              </p>
              
              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.5rem'}}>
                Source: https://www.who.int/news-room/feature-stories/detail/manufacturing-safety-and-quality-control
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

