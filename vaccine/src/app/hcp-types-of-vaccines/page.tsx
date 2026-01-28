import Header from '@/components/Header';

export default function HCPTypesOfVaccines() {
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
                Types of vaccines
              </h2>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Ever since the first vaccine was developed in 1796 to treat smallpox, several different methods have been created to develop successful vaccines. Today, those methods, known as vaccine technologies, are more advanced and use the latest technology to help protect the world from preventable diseases. Depending on the pathogen (a bacteria or virus) that is being targeted, different vaccine technologies are used to generate an effective vaccine. Just like there are multiple ways to develop a vaccine, they can also take on multiple forms—from needle injections and nasal sprays to oral doses, a more recent innovation.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Live, attenuated vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                These vaccines contain a version of the living virus or bacteria that has been weakened so that it does not cause serious disease in people with healthy immune systems.<br />
                <strong>Benefits:</strong> Because these types of vaccines contain a live pathogen, the immune system reacts very well to them and it will typically remember the pathogen for a very long time. Additional doses, or booster shots, are not always needed.<br />
                <strong>Examples:</strong> Measles, mumps, and rubella (MMR) vaccine, varicella (chickenpox) vaccine.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Inactivated vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Inactivated vaccines take a live pathogen and inactivate or kill it. When the vaccine is then introduced to a human through a shot, for example, the inactivated pathogen is strong enough to create an immune response, however, is incapable of causing disease. Multiple doses are often needed in order to build up immunity and offer full protection.<br />
                <strong>Benefits:</strong> Inactivated vaccines can be mass-produced and are relatively inexpensive to make.<br />
                <strong>Examples:</strong> Inactivated polio vaccine, influenza vaccine.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Subunit vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Subunit vaccines are made from a piece of a pathogen, not the whole organism, so they do not contain any live pathogens. Some important subunit vaccines are polysaccharide vaccines, conjugate vaccines, and protein-based vaccines.<br />
                <strong>Polysaccharide</strong> vaccines target an immune response to pathogenic bacteria that are encased in a layer of sugar. This means they help you make protective responses against the surface of the bacteria, allowing your body to kill the bacteria. These do not work, and therefore are not used, in children under 2 years old.<br />
                <strong>Conjugate</strong> vaccines are the same in that they have a polysaccharide component, but that sugar is stuck to a protein so your immune system will respond to the sugar on the bacteria better. They also help your body remember the bacteria better, so if you get infected in the future, the immune response will be better. Importantly, these vaccines do work in children under 2 years old.<br />
                <strong>Protein-based</strong> vaccines allow you to make a protective response against a protein on the surface of a virus, against a protein on the surface of a bacteria, or against a secreted toxin. In this case, the immune response is against the protein components of the bacteria or virus, not the sugar coat. Certain proteins on the surface of bacteria or viruses help the pathogen cause disease, so inducing an immune response against them can help the body fight against the infection or the toxic effects of the toxin.<br />
                <strong>Recombinant</strong> vaccines use another organism to make the vaccine antigen.<br />
                <strong>Benefits:</strong> Subunit vaccines only contain pieces of a pathogen, not the whole organism, so they cannot make you sick or cause infection. This makes them suitable for people who should not receive "live" vaccines, such as young children, older people, and immunocompromised people.<br />
                <strong>Examples:</strong> Haemophilus influenzae type B (conjugate), pneumococcal vaccine (polysaccharide or conjugate), shingles vaccine (recombinant protein), hepatitis B (recombinant protein), MenACWY (conjugate).
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Toxoid vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Toxoid vaccines use inactivated toxins to target the toxic activity created by the bacteria, rather than targeting the bacteria itself. "The goal of toxoid vaccines is to give people a way to neutralize those toxins with antibodies through vaccination,"<br />
                <strong>Benefits:</strong> Toxoid vaccines are especially good at preventing certain toxin-mediated diseases such as tetanus and diphtheria. Booster shots are typically recommended every 10 years or so.<br />
                <strong>Examples:</strong> Tetanus vaccine, diphtheria vaccine.
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Viral vector vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                Viral vector vaccines use a harmless virus to deliver to the hosts cells the genetic code of the antigen you want the immune system to fight. "They are basically a gene delivery system," In doing so, information about the antigen is delivered, which triggers the body's immune response.<br />
                <strong>Benefits:</strong> Viral vector vaccines usually trigger a strong immune response. Typically, only one dose of the shot is needed to develop immunity. Boosters may be needed to maintain immunity.<br />
                <strong>Examples:</strong> Ebola vaccine, COVID-19 vaccine (AstraZeneca and Johnson & Johnson).
              </p>
              
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#40606D', textAlign: 'left'}}>Messenger RNA (mRNA) vaccines</h3>
              <p className="about-lang-intro" style={{textAlign: 'left', direction: 'ltr'}}>
                One of the newest and most exciting areas in vaccine technology is the use of mRNA vaccines. Unlike conventional vaccines—which can take many months or even years to cultivate—mRNA vaccines can be developed quickly using the pathogen's genetic code. "mRNA is likely to be at least one of the waves of the future for vaccines," When an mRNA vaccine is delivered, the RNA material teaches our body how to make a specific type of protein that is unique to the virus, but does not make the person sick. The protein triggers an immune response, which includes the generation of antibodies that recognize the protein. That way, if a person is ever exposed to that virus in the future, the body would like have the tools (antibodies) to fight against it.<br />
                <strong>Benefits:</strong> "It is a very powerful technique to be able to create a lot of a vaccine fast. The benefit is that the technology is very adaptable. We can potentially go in and change the mRNA in the formulation to target a new antigen and can make a lot of high-quality vaccine material relatively quickly."<br />
                <strong>Examples:</strong> Pfizer-BioNTech COVID-19 vaccine.
              </p>
              <p className="about-lang-intro" style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.5rem'}}>
                Source: https://www.pfizer.com/news/articles/understanding_six_types_of_vaccine_technologies
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

