import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import {
  HCP_VACCINATION_BASICS_GROUPS,
  HCP_VACCINATION_BASICS_HERO,
  HCP_VACCINATION_BASICS_INTRO,
  HCP_VACCINATION_BASICS_TOPICS,
} from '@/data/hcp-vaccination-basics-hub';

const BASICS_IMAGE = '/back-basics-simplifying-business-procedures-600nw-2363218041.jpg.webp';

export default function HcpVaccinationBasicsHub() {
  const topicCount = HCP_VACCINATION_BASICS_GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="min-h-screen hcp-vb-hub-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card hcp-vb-hub-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-vb-hub-inner">
            <Link href="/hcp-resources" className="hcp-vb-back">
              ← Back to HCP Resources
            </Link>

            <header className="vax-hub-hero hcp-vb-hub-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{HCP_VACCINATION_BASICS_HERO.tag}</span>
              <h1 className="vax-hub-hero-title">{HCP_VACCINATION_BASICS_HERO.title}</h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {HCP_VACCINATION_BASICS_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{HCP_VACCINATION_BASICS_HERO.lead}</p>
            </header>

            <div className="hcp-vb-welcome">
              <div className="hcp-vb-welcome-visual">
                <Image
                  src={BASICS_IMAGE}
                  alt="Vaccination basics"
                  width={520}
                  height={360}
                  className="hcp-vb-welcome-img"
                  priority
                />
              </div>
              <div className="hcp-vb-welcome-copy">
                {HCP_VACCINATION_BASICS_INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="hcp-vb-welcome-text">
                    {paragraph}
                  </p>
                ))}
                <div className="hcp-vb-topic-pills" aria-label="Topics covered">
                  {HCP_VACCINATION_BASICS_TOPICS.map((topic) => (
                    <span key={topic} className="hcp-vb-topic-pill">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="vax-hub-stats vax-hub-stats--two hcp-vb-stats">
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{HCP_VACCINATION_BASICS_GROUPS.length}</span>
                <span className="vax-hub-stat-label">Topic groups</span>
              </div>
              <div className="vax-hub-stat">
                <span className="vax-hub-stat-num">{topicCount}</span>
                <span className="vax-hub-stat-label">Guides to explore</span>
              </div>
            </div>

            <div className="hcp-res-sections-head">
              <h2 className="hcp-res-sections-title">Explore vaccination basics</h2>
              <p className="hcp-res-sections-subtitle">
                Six guides in three sections — use the button on each topic to open the full article.
              </p>
            </div>

            <div className="hcp-res-categories">
              {HCP_VACCINATION_BASICS_GROUPS.map((group, groupIndex) => (
                <section
                  key={group.id}
                  className={`hcp-res-group hcp-res-group--${group.accent}`}
                  aria-labelledby={`hcp-vb-group-${group.id}`}
                >
                  <header className="hcp-res-group-head" id={`hcp-vb-group-${group.id}`}>
                    <span className="hcp-res-group-icon" aria-hidden>
                      {group.icon}
                    </span>
                    <div className="hcp-res-group-titles">
                      <span className="hcp-res-group-label">Section {groupIndex + 1}</span>
                      <h2 className="hcp-res-group-title">{group.title}</h2>
                      <p className="hcp-res-group-subtitle">{group.subtitle}</p>
                    </div>
                  </header>

                  <div className="hcp-res-items">
                    {group.items.map((item) => (
                      <article key={item.href} className="hcp-res-item">
                        <div className="hcp-res-item-top hcp-vb-item-top">
                          <span className="hcp-vb-item-emoji" aria-hidden>
                            {item.emoji}
                          </span>
                          <div className="hcp-res-item-copy">
                            <h3 className="hcp-res-item-title">{item.title}</h3>
                            <p className="hcp-res-item-tag">{item.subtitle}</p>
                            <p className="hcp-res-item-desc">{item.excerpt}</p>
                          </div>
                        </div>
                        <Link href={item.href} className="hcp-res-btn">
                          Open {item.title}
                          <span className="hcp-res-btn-arrow" aria-hidden>
                            →
                          </span>
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
