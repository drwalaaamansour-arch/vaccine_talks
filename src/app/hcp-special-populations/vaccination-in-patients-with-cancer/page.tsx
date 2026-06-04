import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import CancerVaccinationArticle from '@/components/hcp-cancer-vaccination/CancerVaccinationArticle';
import { ARTICLE_META } from '@/lib/article-meta';

export default function VaccinationInPatientsWithCancerPage() {
  const meta = ARTICLE_META.hcpVaccinationInPatientsWithCancer;

  return (
    <div className="min-h-screen hcp-cancer-page" dir="ltr" lang="en">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">(Egyptian Edition)</p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card vax-article-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-cancer-inner">
            <Link href="/hcp-special-populations" className="hcp-cancer-back">
              ← Special Populations
            </Link>

            <header className="hcp-cancer-hero">
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                🎗️
              </span>
              <span className="hcp-cancer-hero-tag">HCP · Oncology &amp; immunosuppression</span>
              <h1 className="hcp-cancer-hero-title">Vaccination in Patients with Cancer</h1>
              <p className="hcp-cancer-hero-lead">
                Patients with cancer are at increased risk of vaccine-preventable infections due to both the
                underlying malignancy and the immunosuppressive effects of cancer treatment. Chemotherapy,
                radiotherapy, immunotherapy, biologic agents, and other immunosuppressive therapies can impair immune
                function, reduce vaccine responses, and increase susceptibility to severe infections.
              </p>
              <p className="hcp-cancer-hero-lead hcp-cancer-hero-lead--secondary">
                Vaccination is an important component of comprehensive cancer care. Whenever possible, vaccines should
                be administered <strong>before</strong> treatment begins to maximize protection.
              </p>
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <CancerVaccinationArticle />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
