import Header from '@/components/Header';

export default function HepatitisAB() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
      <section className="about-section">
        <div className="about-elegant-card">
          {/* Decorative Corner Elements */}
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          {/* Content */}
          <div className="about-bilingual">
            <div className="about-lang arabic">
              <h2 className="about-lang-title">التطعيم المشترك لكبدي أ+ب</h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/liver.jpg" 
                  alt="التطعيم المشترك لكبدي أ+ب" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <div className="about-lang-intro">
                <p>
                  تطعيم مشترك للوقاية من التهاب الكبد الوبائي أ والتهاب الكبد الوبائي ب في حقنة واحدة، مما يوفر حماية شاملة ضد كلا النوعين من التهاب الكبد.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    التطعيم متوفر للبالغين من سن 16 سنة فما فوق.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    الجرعة عبارة عن 3 حقن: الأولى، وبعد شهر، وبعد 6 أشهر من الجرعة الأولى.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    يوفر حماية طويلة الأمد ضد كلا النوعين من التهاب الكبد.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>موانع التطعيم:</strong> ارتفاع درجة الحرارة، الحساسية من أي مكون في التطعيم.
                  </p>
                </div>
              </div>
            </div>
            <div className="lang-divider"></div>
            <div className="about-lang">
              <h2 className="about-lang-title">Combined Hepatitis A+B Vaccine</h2>
              <div className="about-lang-intro">
                <p>
                  A combined vaccine for the prevention of hepatitis A and hepatitis B in a single injection, providing comprehensive protection against both types of hepatitis.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    The vaccine is available for adults aged 16 years and above.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    The dose consists of 3 injections: first dose, after 1 month, and after 6 months from the first dose.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    Provides long-term protection against both types of hepatitis.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>Contraindications:</strong> High fever, allergy to any component of the vaccine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
