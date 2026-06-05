import Header from '@/components/Header';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'من نحن | About us — Vaccine Talks',
  description:
    'تعرف على Vaccine Talks — منصة مصرية موثوقة عن التطعيمات للعائلات والعاملين بالمجال الطبي.',
  descriptionEn:
    'Learn about Vaccine Talks — a trusted Egyptian platform about vaccines for families and health professionals.',
  path: '/about',
  keywords: ['Vaccine Talks', 'من نحن', 'التطعيمات في مصر'],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section" aria-labelledby="about-page-heading">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <h1 id="about-page-heading" className="about-page-heading">
            <span>About us</span>
            <span className="about-page-heading-sep" aria-hidden>
              {' '}
              /{' '}
            </span>
            <span lang="ar">من نحن</span>
          </h1>

          <div className="home-about-disclosure-panel about-page-panel">
            <div className="about-bilingual">
              <div className="about-lang arabic">
                <h2 className="about-lang-title">
                  <span dir="ltr" className="home-about-brand-ltr">
                    Vaccine Talks
                  </span>{' '}
                  <span className="edition-badge">(النسخة المصرية)</span>
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
                      Vaccine Talks مش تابع لأي شركة أو جهة، هدفه التوعية فقط — وبصبغة مصرية خالصة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lang-divider"></div>

              <div className="about-lang">
                <h2 className="about-lang-title">
                  Vaccine Talks <span className="edition-badge">(Egyptian Edition)</span>
                </h2>
                <p className="about-lang-intro">
                  A trusted Egyptian platform that speaks to everyone — in a simple, clear, and friendly way.
                </p>

                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-emoji">👨‍👩‍👧</span>
                    <p>
                      If you&apos;re a parent or not working in the medical field, you&apos;ll find everything you need to know about the vaccines currently available in Egypt — explained in plain, everyday Egyptian Arabic, so the information feels familiar and easy to understand.
                    </p>
                  </div>

                  <div className="feature-item">
                    <span className="feature-emoji">🩺</span>
                    <p>
                      If you&apos;re a student, doctor, pharmacist, or simply passionate about vaccines, you&apos;ll find scientific materials that strengthen your knowledge: official vaccine leaflets, real-life questions you may face in your work, and updates on Egypt&apos;s efforts to prevent and eliminate infectious diseases — all organized clearly and presented in English.
                    </p>
                  </div>

                  <div className="feature-item">
                    <span className="feature-emoji">⚖️</span>
                    <p>
                      Vaccine Talks is not affiliated with any company or organization. It&apos;s a purely educational platform — with a proudly Egyptian spirit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
