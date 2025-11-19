import Header from '@/components/Header';

export default function HerpesZoster() {
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
              <h2 className="about-lang-title">الحزام الناري (الهربس النطاقي)</h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/shingles.jpg" 
                  alt="الحزام الناري" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <div className="about-lang-intro">
                <p>
                  مرض يسببه فيروس الحماق النطاقي (نفس الفيروس المسبب للجديري المائي)، ويظهر كطفح جلدي مؤلم على شكل حزام في منطقة واحدة من الجسم.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    تطعيم لحماية كبار السن فوق سن ٥٠ سنه من الحزام الناري.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🦠</span>
                  <p>
                    المرض ده بيكون ناتج عن نشاط لفيروس الجديري الكامن بالجسم بعد اصابة قديمة أو حتى تطعيم.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    التطعيم جرعتين بينهم شهرين لسته شهور.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    ممكن يتاخد من سن ١٨ سنه لو في مشكله في المناعة لان الافراد دي بتكون عرضه أكتر من غيرهم للإصابة بالمرض.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    يقلل من خطر الإصابة بالحزام الناري بنسبة 97% ويقلل من شدة الألم إذا حدثت الإصابة.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>موانع التطعيم:</strong> الحساسية من أي مكون في التطعيم، ارتفاع درجة الحرارة.
                  </p>
                </div>
              </div>
            </div>
            <div className="lang-divider"></div>
            <div className="about-lang">
              <h2 className="about-lang-title">Herpes Zoster (Shingles)</h2>
              <div className="about-lang-intro">
                <p>
                  A disease caused by the varicella-zoster virus (the same virus that causes chickenpox), which appears as a painful rash in a band-like pattern on one side of the body.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    A vaccine to protect elderly people over 50 years of age from shingles.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🦠</span>
                  <p>
                    This disease is caused by reactivation of the latent chickenpox virus in the body after a previous infection or even vaccination.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    The vaccine consists of two doses given 2-6 months apart.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    Can be given from age 18 if there is an immune system problem, as these individuals are more susceptible to the disease than others.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🛡️</span>
                  <p>
                    Reduces the risk of shingles by 97% and reduces PHN if infection occurs.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>Contraindications:</strong> Allergy to any component of the vaccine, high fever.
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
