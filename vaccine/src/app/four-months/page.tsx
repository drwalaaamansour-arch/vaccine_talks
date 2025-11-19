import Header from '@/components/Header';

export default function FourMonths() {
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

      {/* Four Months Vaccines Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          {/* Decorative Corner Elements */}
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          {/* Content */}
          <div className="about-bilingual">
            {/* Arabic Content */}
            <div className="about-lang arabic">
              <h2 className="about-lang-title">
                أربع شهور
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/4%20month%20old%20baby.jpeg" 
                  alt="أربع شهور" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <div className="about-lang-intro">
                <p>
                  التطعيمات المطلوبة في عمر الأربع شهور، مقسمة إلى إجبارية وإضافية.
                </p>
              </div>

              <div className="vaccination-section-title">
                <span className="feature-emoji">📋</span>
                <p><strong>الإجبارية:</strong></p>
              </div>
              <div className="vaccination-section-buttons">
                <a href="/pertussis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">السعال الديكي</span>
                  <span className="button-text-en">Whooping Cough</span>
                </a>
                
                <a href="/polio" className="vaccination-button">
                  <span className="button-emoji">💧</span>
                  <span className="button-text">شلل نقط</span>
                  <span className="button-text-en">Polio Drops</span>
                </a>
                
                <a href="/tetanus" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">تيتانوس</span>
                  <span className="button-text-en">Tetanus</span>
                </a>
                
                <a href="/polio" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">شلل حقن</span>
                  <span className="button-text-en">Polio Injection</span>
                </a>
                
                <a href="/hepatitis-b" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">كبدي (ب)</span>
                  <span className="button-text-en">Hepatitis B</span>
                </a>
                
                <a href="/diphtheria" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">دفتيريا</span>
                  <span className="button-text-en">Diphtheria</span>
                </a>
                
                <a href="/hib" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">انفلونزا بكتيري</span>
                  <span className="button-text-en">HIB</span>
                </a>
              </div>

              <div className="vaccination-section-title">
                <span className="feature-emoji">📋</span>
                <p><strong>الإضافية:</strong></p>
              </div>
              <div className="vaccination-section-buttons">
                <a href="/rotavirus" className="vaccination-button">
                  <span className="button-emoji">💧</span>
                  <span className="button-text">روتا</span>
                  <span className="button-text-en">Rota</span>
                </a>
                
                <a href="/pcv" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">مكورات</span>
                  <span className="button-text-en">PCV</span>
                </a>
                
                <a href="/meningitis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">شوكية (ب)</span>
                  <span className="button-text-en">Meningitis B</span>
                </a>
                
                <a href="/meningitis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">شوكية رباعي</span>
                  <span className="button-text-en">Quadrivalent Meningitis</span>
                </a>
              </div>
            </div>

            {/* English Content */}
            <div className="about-lang">
              <h2 className="about-lang-title">
                Four Months
              </h2>
              
              <div className="about-lang-intro">
                <p>
                  Required vaccines at four months of age, divided into mandatory and additional.
                </p>
              </div>

              <div className="vaccination-section-title">
                <span className="feature-emoji">📋</span>
                <p><strong>Mandatory:</strong></p>
              </div>
              <div className="vaccination-section-buttons">
                <a href="/pertussis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Whooping Cough</span>
                  <span className="button-text-en">Whooping Cough</span>
                </a>
                
                <a href="/polio" className="vaccination-button">
                  <span className="button-emoji">💧</span>
                  <span className="button-text">Polio Drops</span>
                  <span className="button-text-en">Polio Drops</span>
                </a>
                
                <a href="/tetanus" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Tetanus</span>
                  <span className="button-text-en">Tetanus</span>
                </a>
                
                <a href="/polio" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Polio Injection</span>
                  <span className="button-text-en">Polio Injection</span>
                </a>
                
                <a href="/hepatitis-b" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Hepatitis B</span>
                  <span className="button-text-en">Hepatitis B</span>
                </a>
                
                <a href="/diphtheria" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Diphtheria</span>
                  <span className="button-text-en">Diphtheria</span>
                </a>
                
                <a href="/hib" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">HIB</span>
                  <span className="button-text-en">HIB</span>
                </a>
              </div>

              <div className="vaccination-section-title">
                <span className="feature-emoji">📋</span>
                <p><strong>Additional:</strong></p>
              </div>
              <div className="vaccination-section-buttons">
                <a href="/rotavirus" className="vaccination-button">
                  <span className="button-emoji">💧</span>
                  <span className="button-text">Rota</span>
                  <span className="button-text-en">Rota</span>
                </a>
                
                <a href="/pcv" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">PCV</span>
                  <span className="button-text-en">PCV</span>
                </a>
                
                <a href="/meningitis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Meningitis B</span>
                  <span className="button-text-en">Meningitis B</span>
                </a>
                
                <a href="/meningitis" className="vaccination-button">
                  <span className="button-emoji">💉</span>
                  <span className="button-text">Quadrivalent Meningitis</span>
                  <span className="button-text-en">Quadrivalent Meningitis</span>
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
