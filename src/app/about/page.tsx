import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import AboutPageContent from '@/components/about/AboutPageContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'من نحن | About us — Vaccine Talks',
  description:
    'تعرف على Vaccine Talks — منصة مصرية مستقلة عن التطعيمات للعائلات والعاملين بالمجال الطبي.',
  descriptionEn:
    "Learn about Vaccine Talks — Egypt's independent, evidence-based vaccine education platform for families and health professionals.",
  path: '/about',
  keywords: ['Vaccine Talks', 'من نحن', 'التطعيمات في مصر', 'vaccine education Egypt'],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen about-page">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talks
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">(Egyptian Edition)</p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section" aria-labelledby="about-page-heading">
        <div className="about-elegant-card about-page-elegant">
          <div className="card-corner card-corner-tl" />
          <div className="card-corner card-corner-tr" />
          <div className="card-corner card-corner-bl" />
          <div className="card-corner card-corner-br" />

          <AboutPageContent />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
