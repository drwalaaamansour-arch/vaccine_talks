import Header from '@/components/Header';

export default function Rabies() {
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
              <h2 className="about-lang-title">السعار (داء الكلب)</h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/dog.jpeg" 
                  alt="عضة كلب" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <div className="about-lang-intro">
                <p>
                  مرض فيروسي قاتل ينتقل من الحيوانات إلى الإنسان، ويصيب الجهاز العصبي المركزي. ينتقل الفيروس عادة من خلال عضة أو خدش من حيوان مصاب.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">🦠</span>
                  <p>
                    يسببه فيروس "Rabies lyssavirus" الذي يهاجم الجهاز العصبي المركزي ويؤدي إلى التهاب حاد في الدماغ.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>طرق الانتقال:</strong> عضة أو خدش من حيوان مصاب (الكلاب، القطط، الخفافيش، الثعالب، القوارض).
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    <strong>التطعيم الوقائي:</strong> يُعطى للأشخاص المعرضين للخطر (الأطباء البيطريين، عمال المزارع، المسافرين للمناطق عالية الخطورة).
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🚨</span>
                    <p>
                      <strong>التطعيم بعد التعرض:</strong> يُعطى فوراً بعد العضة أو الخدش لمنع تطور المرض. الجرعة الأولى تُعطى في أقرب وقت ممكن وقد نحتاج إلى أجسام مضادة.
                    </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    <strong>جدول التطعيم بعد التعرض:</strong> الجرعة الأولى فوراً، الثانية في اليوم الثالث، الثالثة في اليوم السابع، الرابعة في اليوم الرابع عشر، والخامسة في الأشخاص ذوي المناعة الضعيفة.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🏥</span>
                  <p>
                    <strong>موانع التطعيم:</strong> لا توجد موانع مطلقة، لكن يجب إخبار الطبيب عن أي حساسية سابقة أو مشاكل صحية.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚡</span>
                  <p>
                    <strong>الأهمية:</strong> السعار مرض قاتل بنسبة 100% تقريباً إذا لم يتم التطعيم فوراً بعد التعرض. التطعيم هو الطريقة الوحيدة للوقاية من المرض.
                  </p>
                </div>
              </div>
            </div>
            <div className="lang-divider"></div>
            <div className="about-lang">
              <h2 className="about-lang-title">Rabies (Lyssavirus)</h2>
              <div className="about-lang-intro">
                <p>
                  A deadly viral disease transmitted from animals to humans, affecting the central nervous system. The virus is usually transmitted through a bite or scratch from an infected animal.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-emoji">🦠</span>
                  <p>
                    Caused by "Rabies lyssavirus" which attacks the central nervous system and leads to acute inflammation of the brain.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚠️</span>
                  <p>
                    <strong>Transmission:</strong> Bite or scratch from an infected animal (dogs, cats, bats, foxes, rodents).
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">💉</span>
                  <p>
                    <strong>Preventive vaccination:</strong> Given to people at risk (veterinarians, farm workers, travelers to high-risk areas).
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🚨</span>
                  <p>
                    <strong>Post-exposure vaccination:</strong> Given immediately after a bite or scratch to prevent disease development. First dose given as soon as possible, followed by 3-4 additional doses.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📅</span>
                  <p>
                    <strong>Post-exposure vaccination schedule:</strong> First dose immediately, second on day 3, third on day 7, fourth on day 14, and fifth in case of immunocompromised person.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">🏥</span>
                  <p>
                    <strong>Contraindications:</strong> No absolute contraindications, but inform the doctor about any previous allergies or health problems.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚡</span>
                  <p>
                    <strong>Importance:</strong> Rabies is almost 100% fatal if vaccination is not given immediately after exposure. Vaccination is the only way to prevent the disease.
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
