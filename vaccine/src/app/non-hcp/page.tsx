import Header from '@/components/Header';

export default function NonHCP() {
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

      {/* Main Content Section */}
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
                غير العاملين بالمجال الطبي
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="/family.png" 
                  alt="عائلة" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: '0 8px 24px rgba(139, 115, 85, 0.2)' }}
                />
              </div>
              
              <div className="about-lang-intro">
                <p>
                  هنا بنقدّم لكِم معلومة بسيطة، موثوقة، ومباشرة علشان تحموا أسرتكم وتطمنوا على صحة أولادكم سواء كنتِ أم جديدة لسه بتتابعي جدول تطعيمات طفلك، أو أب حابب يفهم أكتر عن أهمية اللقاحات، أو حتى بتسألوا عن تطعيمات الكبار والحوامل، إحنا هنا علشان نسهّل عليكم المشوار​:
                </p>
              </div>

              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">👶</span>
                  <p>
                    هنساعدكم تعرفوا إيه هي التطعيمات الأساسية للأطفال؟ وامتى بياخدوها؟ وهل في تطعيمات إضافية ممكن تحميهم أكتر؟
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">👨‍👩‍👧‍👦</span>
                  <p>
                    الكبار كمان ليهم تطعيمات مهمة، خصوصًا مع تقدم العمر، أو لو في حمل، أمراض مزمنة، أو سفر.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">📢</span>
                  <p>
                    وكمان هتعرفوا أحدث التطعيمات المتوفرة في مصر، وأخبار الحملات المجانية، والتنبيهات اللي تهم كل أسرة.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    احنا بنؤمن إن الوقاية دايمًا أسهل من العلاج، وإن المعلومة الصح هي أول خطوة للأمان.
                  </p>
                </div>
              </div>

              <div className="about-lang-intro" style={{ marginTop: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
                <p>
                  تابعونا هنا واحموا كل اللي بتحبوهم.
                </p>
              </div>
            </div>

            {/* English Content */}
            <div className="about-lang">
              <h2 className="about-lang-title">
                For Non-Healthcare Professionals
              </h2>
              
              <div className="about-lang-intro">
                <p>
                  Here we provide you with simple, reliable, and direct information to protect your family and ensure your children's health. Whether you're a new mother following your child's vaccination schedule, a father wanting to understand more about the importance of vaccines, or even asking about adult and pregnancy vaccinations, we're here to make your journey easier:
                </p>
              </div>

              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">👶</span>
                  <p>
                    We'll help you understand what are the essential vaccines for children? When do they take them? And are there additional vaccines that can protect them more?
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">👨‍👩‍👧‍👦</span>
                  <p>
                    Adults also have important vaccines, especially with advancing age, or if there's pregnancy, chronic diseases, or travel.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">📢</span>
                  <p>
                    You'll also learn about the latest vaccines available in Egypt, news about free campaigns, and alerts that matter to every family.
                  </p>
                </div>

                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    We believe that prevention is always easier than treatment, and that correct information is the first step to safety.
                  </p>
                </div>
              </div>

              <div className="about-lang-intro" style={{ marginTop: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
                <p>
                  Follow us here and protect everyone you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          {/* Decorative Corner Elements */}
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          {/* Content */}
          <div className="buttons-container">
            <h2 className="buttons-title">اختر ما تحتاجه</h2>
            <h2 className="buttons-title english">Choose What You Need</h2>
            
            <div className="buttons-grid">
              <a href="/children-vaccines" className="section-button">
                <span className="button-emoji">👶</span>
                <span className="button-text">تطعيمات الأطفال</span>
                <span className="button-text-en">Children Vaccines</span>
              </a>
              
              <a href="/adult-vaccines" className="section-button">
                <span className="button-emoji">👨‍👩‍👧‍👦</span>
                <span className="button-text">تطعيمات الكبار</span>
                <span className="button-text-en">Adult Vaccines</span>
              </a>
              
              <a href="/vaccinations" className="section-button">
                <span className="button-emoji">💉</span>
                <span className="button-text">التطعيمات</span>
                <span className="button-text-en">Vaccinations</span>
              </a>
              
              <a href="/important-info" className="section-button">
                <span className="button-emoji">📋</span>
                <span className="button-text">معلومات تهمك</span>
                <span className="button-text-en">Important Information</span>
              </a>
              
              <a href="/whats-new" className="section-button">
                <span className="button-emoji">🆕</span>
                <span className="button-text">ما الجديد</span>
                <span className="button-text-en">What's New</span>
              </a>
              
              <a href="/non-hcp/common-questions" className="section-button">
                <span className="button-emoji">❓</span>
                <span className="button-text">أسئلة شائعة</span>
                <span className="button-text-en">FAQ</span>
              </a>
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