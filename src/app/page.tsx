import Header from '@/components/Header';

export default function Home() {
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

      {/* About Section - Elegant Card */}
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
                Vaccine Talk <span className="edition-badge">(النسخة المصرية)</span>
              </h2>
              <p className="about-lang-intro">
                موقع مصري بيخاطب كل فئات المجتمع، بأسلوب بسيط وواضح.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">👨‍👩‍👧</span>
                  <p>
                    لو أم أو أب أو من غير العاملين بالمجال الطبي، هتلاقي كل المعلومات الخاصة بالتطعيمات الموجودة حاليًا في مصر، بأسلوب سهل، وبالعامية المصرية علشان تكون المعلومة قريبة منك.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">🩺</span>
                  <p>
                    ولو أنت طالب، طبيب، صيدلي أو مهتم بالمجال الطبي، هتلاقي هنا كل المواد العلمية اللي ممكن تعزّز بيها معلوماتك: من نشرات التطعيمات المعتمدة، لحد الأسئلة اللي ممكن تواجهها في شغلك، وكمان آخر التطورات وجهود الدولة للوقاية من الأمراض والحد من انتشارها، وكل ده بطريقة منظمة وباللغة الإنجليزية.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">⚖️</span>
                  <p>
                    Vaccine Talk مش تابع لأي شركة أو جهة، هدفه التوعية فقط — وبصبغة مصرية خالصة.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="lang-divider"></div>

            {/* English Content */}
            <div className="about-lang">
              <h2 className="about-lang-title">
                Vaccine Talk <span className="edition-badge">(Egyptian Edition)</span>
              </h2>
              <p className="about-lang-intro">
                A trusted Egyptian platform that speaks to everyone — in a simple, clear, and friendly way.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">👨‍👩‍👧</span>
                  <p>
                    If you're a parent or not working in the medical field, you'll find everything you need to know about the vaccines currently available in Egypt — explained in plain, everyday Egyptian Arabic, so the information feels familiar and easy to understand.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">🩺</span>
                  <p>
                    If you're a student, doctor, pharmacist, or simply passionate about vaccines, you'll find scientific materials that strengthen your knowledge: official vaccine leaflets, real-life questions you may face in your work, and updates on Egypt's efforts to prevent and eliminate infectious diseases — all organized clearly and presented in English.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">⚖️</span>
                  <p>
                    Vaccine Talk is not affiliated with any company or organization. It's a purely educational platform — with a proudly Egyptian spirit.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* New Section - Image Cards */}
      <section className="about-section">
        <div className="about-elegant-card">
          {/* Decorative Corner Elements */}
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          {/* Content */}
          <div className="about-bilingual">
            {/* Arabic Side - Non-HCP */}
            <div className="about-lang arabic">
              <div className="image-wrapper">
                <img 
                  src="/nondoctors.png" 
                  alt="غير العاملين بالمجال الطبي" 
                  className="section-image"
                />
              </div>
              <a href="/non-hcp" className="start-button">Non-HCP (غير العاملين بالمجال الطبي)</a>
            </div>

            {/* Vertical Divider */}
            <div className="lang-divider"></div>

            {/* English Side - HCP */}
            <div className="about-lang">
              <div className="image-wrapper">
                <img 
                  src="/doctors.png" 
                  alt="Healthcare Professionals" 
                  className="section-image"
                />
              </div>
              <a href="/hcp-resources" className="start-button">HCP Resources (العاملين بالمجال الطبي)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - Single Window */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', marginBottom: '2rem'}}>
                Latest News / آخر الأخبار
              </h2>
              
              <div className="news-window">
                <div className="news-window-content">
                  <div className="news-entry">
                    <div className="news-entry-header">
                      <span className="news-date">February 10–13, 2026</span>
                      <span className="news-category">Campaign</span>
                    </div>
                    <h3 className="news-entry-title" style={{direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>حملة تطعيم ضد شلل الأطفال</h3>
                    <p className="news-entry-text" style={{direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>حملة تطعيم ضد شلل الأطفال من يوم ١٠-١٣ فبراير. الحملة مجانية وتستهدف الأطفال من عمر يوم حتى ٥ سنوات. الحملة محدودة وفي بعض المناطق بمحافظة القاهرة.</p>
                    <a href="/polio" className="news-entry-link" style={{direction: 'rtl', textAlign: 'right'}}>لمعرفة معلومات أكتر عن التطعيم اضغط هنا ←</a>
                  </div>

                  <div className="news-entry">
                    <div className="news-entry-header">
                      <span className="news-date">January 8, 2026</span>
                      <span className="news-category">Updates</span>
                    </div>
                    <h3 className="news-entry-title">New GSK Pentavalent Meningococcal Vaccine Endorsed by ACIP</h3>
                    <p className="news-entry-text">CDC's Advisory Committee on Immunization Practices (ACIP) endorsed a new GSK pentavalent meningococcal vaccine (MenACWY-CRM/MenB-4C, Penmenvy) for use in people aged ≥10 years when both MenACWY and MenB are indicated. The recommendation highlights implementation efficiency, equity, and real-world feasibility. Serious adverse events were rare and occurred at similar frequencies in pentavalent and control groups. Using pentavalent vaccine as an alternative to concomitant administration was the most cost-saving option.</p>
                    <a href="/hcp-vaccine-updates" className="news-entry-link">Read More →</a>
                  </div>
                  
                  <div className="news-entry">
                    <div className="news-entry-header">
                      <span className="news-date">December 2025</span>
                      <span className="news-category">Updates</span>
                    </div>
                    <h3 className="news-entry-title" style={{direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>أعلنت شركة فايزر مصر عن طرح لقاح للوقاية من الإصابة بالفيروس المخلوي التنفسي (RSV)</h3>
                    <p className="news-entry-text" style={{direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>أعلنت شركة فايزر مصر عن طرح لقاح للوقاية من الإصابة بالفيروس المخلوي التنفسي (RSV). هذا اللقاح يمثل تطورًا مهمًا في مجال الوقاية من الأمراض التنفسية في مصر.</p>
                    <a href="/rsv" className="news-entry-link" style={{direction: 'rtl', textAlign: 'right'}}>اقرأ المزيد ←</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newly Added Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2rem', alignSelf: 'center', marginBottom: '2rem', color: '#40606D'}}>
                Newly Added / أضيف حديثا
              </h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '900px', margin: '0 auto'}}>
                <a 
                  href="/hcp-special-populations/immunoglobulin-blood-products" 
                  className="newly-added-card"
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'rgba(64, 96, 109, 0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    border: '2px solid rgba(64, 96, 109, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#40606D', marginBottom: '0.5rem', direction: 'ltr'}}>
                    People who have recently received normal human immunoglobulin and other blood products
                  </h3>
                  <p style={{color: '#5a4a3a', lineHeight: '1.6', direction: 'ltr', textAlign: 'left'}}>
                    Information about vaccination considerations for people who have recently received normal human immunoglobulin and other blood products, including spacing requirements and recommendations for live and non-live vaccines.
                  </p>
                </a>

                <a 
                  href="/hcp-special-populations/anaesthesia-surgery" 
                  className="newly-added-card"
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'rgba(64, 96, 109, 0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    border: '2px solid rgba(64, 96, 109, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#40606D', marginBottom: '0.5rem', direction: 'ltr'}}>
                    Before or after anaesthesia or surgery
                  </h3>
                  <p style={{color: '#5a4a3a', lineHeight: '1.6', direction: 'ltr', textAlign: 'left'}}>
                    Guidance on vaccination timing in relation to surgery and anaesthesia, including recommendations for elective procedures and considerations for post-operative vaccination.
                  </p>
                </a>

                <a 
                  href="/hcp-special-populations/cochlear-implants" 
                  className="newly-added-card"
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'rgba(64, 96, 109, 0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    border: '2px solid rgba(64, 96, 109, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#40606D', marginBottom: '0.5rem', direction: 'ltr'}}>
                    Cochlear Implants and Vaccination Recommendations
                  </h3>
                  <p style={{color: '#5a4a3a', lineHeight: '1.6', direction: 'ltr', textAlign: 'left'}}>
                    CDC guidance on pneumococcal, Hib, and meningococcal vaccination for people with cochlear implants to prevent bacterial meningitis.
                  </p>
                </a>

                <div 
                  className="newly-added-card"
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'rgba(64, 96, 109, 0.05)',
                    borderRadius: '12px',
                    border: '2px solid rgba(64, 96, 109, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div>
                      <a href="/rsv" style={{textDecoration: 'none'}}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#40606D', marginBottom: '0.5rem', direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>
                          RSV (الفيروس التنفسي المخلوي)
                        </h3>
                        <p style={{color: '#5a4a3a', lineHeight: '1.6', direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif"}}>
                          معلومات جديدة عن تطعيم RSV لحماية الرضع من الإصابة بالفيروس المخلوي التنفسي.
                        </p>
                      </a>
                    </div>
                    <div style={{borderTop: '1px solid rgba(64, 96, 109, 0.2)', paddingTop: '1rem'}}>
                      <a href="/hcp/rsv" style={{textDecoration: 'none'}}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#40606D', marginBottom: '0.5rem', direction: 'ltr'}}>
                          RSV (Respiratory Syncytial Virus)
                        </h3>
                        <p style={{color: '#5a4a3a', lineHeight: '1.6', direction: 'ltr', textAlign: 'left'}}>
                          New information about RSV vaccination to protect infants from respiratory syncytial virus infection.
                        </p>
                      </a>
                    </div>
                  </div>
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
                <a href="https://www.linkedin.com/in/walaa-adel-895009369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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