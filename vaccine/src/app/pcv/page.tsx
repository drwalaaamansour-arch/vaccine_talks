import Header from '@/components/Header';

export default function PCV() {
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
                <h2 className="about-lang-title">المكورات الرئوية</h2>
                
                <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                  <img 
                    src="/pcv.jpeg" 
                    alt="المكورات الرئوية" 
                    className="section-image"
                    style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                  />
                </div>
                
                <div className="about-lang-intro">
                  <p>
                    مش بس للوقاية من الإلتهاب الرئوي، لكن كمان من تسمم الدم، إلتهاب الأذن الوسطى، وإلتهاب السحايا اللي بتسببه بكتيريا "Streptococcus pneumoniae".
                  </p>
                </div>
                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-emoji">🦠</span>
                    <p>
                      في فصايل كتير من البكتيريا دي، وفي مصر في نوعين من التطعيم :
                      نوع بيقي من ١٠ فصايل وده مينفعش بعد سن ٥ سنين والنوع الثاني بيقي من ١٣ فصيلة وده ينفع لأي سن حتى الكبار.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">💉</span>
                    <p>
                      التطعيم ممكن يتاخد بداية من ستة أسابيع.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">📅</span>
                    <p>
                      عدد الجرعات بيكون حسب سن متلقي التطعيم والجرعات في النوعين للأطفال زي بعض لحد سن السنتين؛
                      فلو كان عمر الطفل اقل من ستة شهور، هياخد تلات جرعات قبل السنة، والجرعة المنشطة في السنة التانية من العمر.
                      ⁠ولو كان عمره من سبعة شهور لسنة، هياخد جرعتين بينهم شهرين، والتالتة المنشطة في السنة التانية من العمر.
                      ولو كان عمره من سنه لسنتين يبقي جرعتين بينهم شهرين.
                      لو سنه وقت اول جرعه سنتين او أكبر وهياخد تطعيم المكورات ١٣ يبقى جرعه واحده ولو كان النوع التاني (المكورات ١٠) و لحد سن خمس سنوات هيبقي جرعتين بينهم شهرين.
                      ممكن الكبار ياخدوه علشان يحميهم من الأمراض دي وبتكون جرعة واحدة بس.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">⚠️</span>
                    <p>
                      <strong>موانع التطعيم:</strong> ارتفاع درجة الحرارة.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lang-divider"></div>
              <div className="about-lang">
                <h2 className="about-lang-title">Pneumococcal Conjugate Vaccine (PCV)</h2>
                <div className="about-lang-intro">
                  <p>
                    Not only for the prevention of pneumonia, but also from bacteremia, otitis media, and meningitis caused by "Streptococcus pneumoniae" bacteria.
                  </p>
                </div>
                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-emoji">🦠</span>
                    <p>
                      There are many strains of this bacteria, and in Egypt there are two types of vaccines:
                      One type contains 10 strains and cannot be given after 5 years of age, and the second type contains 13 strains and can be given at any age, even for adults.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">💉</span>
                    <p>
                      The vaccine can be given starting from 6 weeks of age.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">📅</span>
                    <p>
                      The number of doses depends on the age of the recipient, and the doses for both types are the same for children up to 2 years of age;
                      If the child is less than 6 months old, they will receive three doses before the first year, and a booster dose in the second year of life.
                      If they are between 7 months and 1 year old, they will receive two doses with a 2-month interval, and the third booster dose in the second year of life.
                      If they are between 1 and 2 years old, they will receive two doses with a 2-month interval.
                      If they are 2 years old or older at the time of the first dose and receive the 13-valent pneumococcal vaccine, it will be one dose, but if it's the other type (10-valent) and up to 5 years of age, it will be two doses with a 2-month interval.
                      Adults can receive it to protect them from these diseases and it will be only one dose.
                    </p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-emoji">⚠️</span>
                    <p>
                      <strong>Contraindications:</strong> High fever.
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
