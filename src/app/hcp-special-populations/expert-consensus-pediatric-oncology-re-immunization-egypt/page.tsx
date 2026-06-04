import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';

const POLICY_CARDS = [
  {
    title: 'Standard timing',
    text: 'Administer vaccines six months post-treatment; begin at 12 months for BMT patients without antibody level assessment.',
  },
  {
    title: 'After full primary series',
    text: 'Children diagnosed after completing general vaccination need a booster shot.',
  },
  {
    title: 'Before series complete',
    text: 'Those diagnosed before completion require a full re-vaccination schedule.',
  },
  {
    title: 'Bone marrow transplant',
    text: 'BMT patients need a complete revaccination schedule.',
  },
] as const;

const SECTIONS = [
  {
    id: 'background',
    icon: '📖',
    title: 'Background',
    paragraphs: [
      'The increasing population of immunocompromised individuals, particularly pediatric cancer patients and bone marrow transplant (BMT) recipients, face an increased risk of vaccine-preventable diseases. Evolving dynamics in immunosuppression, propelled by cancer therapy advancements, underscore the necessity for tailored revaccination strategies.',
      'Revaccinating pediatric oncology patients presents challenges owing to compromised immune systems from cancer and treatments. Although revaccination is a vital intervention to address this immunity gap, its execution is complex, considering factors such as optimal timing, vaccine selection, compliance, and the patients\' overall health status.',
    ],
  },
  {
    id: 'egypt',
    icon: '🇪🇬',
    title: 'Context in Egypt',
    paragraphs: [
      'In Egypt, despite significant advancements in the survival of childhood cancer patients, their revaccination is frequently overlooked. This neglect stems from a substantial caseload, insufficient awareness among oncologists and parents, and the absence of a unified global or national vaccination schedule for this subgroup.',
    ],
  },
  {
    id: 'consensus',
    icon: '🤝',
    title: 'Consensus overview',
    paragraphs: [
      'The consensus outlines standardized revaccination guidelines for childhood cancer survivors, developed by collaborating specialists in pediatric oncology, infectious diseases, and immunization.',
    ],
  },
] as const;

export default function ExpertConsensusPediatricOncologyReimmunizationEgyptPage() {
  const meta = ARTICLE_META.hcpPediatricOncologyReimmunizationEgypt;

  return (
    <div className="min-h-screen hcp-cancer-page hcp-consensus-page" dir="ltr" lang="en">
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
            <Link
              href="/hcp-special-populations/vaccination-in-patients-with-cancer"
              className="hcp-cancer-back"
            >
              ← Vaccination in Patients with Cancer
            </Link>

            <header className="hcp-cancer-hero hcp-consensus-hero">
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                👧
              </span>
              <span className="hcp-cancer-hero-tag">Expert consensus · Pediatric oncology · Egypt</span>
              <h1 className="hcp-cancer-hero-title">
                Re-immunization strategies for pediatric oncology patients in Egypt
              </h1>
              <p className="hcp-cancer-hero-lead">
                Standardized revaccination guidance for childhood cancer survivors, developed by specialists in
                pediatric oncology, infectious diseases, and immunization — with practical policy points for
                clinical use.
              </p>
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="hcp-consensus-main">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="hcp-cancer-section">
                  <div className="hcp-cancer-section-head">
                    <span className="hcp-cancer-section-icon" aria-hidden>
                      {section.icon}
                    </span>
                    <h2 className="hcp-cancer-section-title">{section.title}</h2>
                  </div>
                  <div className="hcp-cancer-section-body">
                    {section.paragraphs.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section id="policy" className="hcp-cancer-section hcp-consensus-policy-section">
                <div className="hcp-cancer-section-head">
                  <span className="hcp-cancer-section-icon" aria-hidden>
                    💉
                  </span>
                  <h2 className="hcp-cancer-section-title">Revaccination policy — at a glance</h2>
                </div>
                <div className="hcp-cancer-section-body">
                  <div className="hcp-consensus-policy-grid">
                    {POLICY_CARDS.map((card) => (
                      <article key={card.title} className="hcp-consensus-policy-card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section id="conclusion" className="hcp-cancer-section hcp-cancer-takeaway-section">
                <div className="hcp-cancer-section-head">
                  <span className="hcp-cancer-section-icon" aria-hidden>
                    📌
                  </span>
                  <h2 className="hcp-cancer-section-title">Conclusion</h2>
                </div>
                <div className="hcp-cancer-section-body">
                  <p className="hcp-consensus-conclusion">
                    Revaccination is not only safe but also imperative. These guidelines serve as a crucial resource
                    for healthcare professionals, offering a nuanced approach to revaccination within pediatric
                    oncology.
                  </p>
                </div>
              </section>

              <section id="eposter" className="hcp-cancer-pdfs">
                <h2 className="hcp-cancer-pdfs-heading">Expert consensus ePoster (PDF)</h2>
                <article className="hcp-cancer-pdf-block">
                  <iframe
                    src="/ePoster_V8.pdf"
                    className="hcp-cancer-pdf-frame"
                    title="Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt (ePoster)"
                  />
                  <div className="hcp-cancer-pdf-actions">
                    <a href="/ePoster_V8.pdf" download className="hcp-cancer-pdf-download">
                      Download PDF / تحميل PDF
                    </a>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
