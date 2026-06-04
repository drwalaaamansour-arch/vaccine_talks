import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  HCP_SPECIAL_POPULATIONS_GROUPS,
  HCP_SPECIAL_POPULATIONS_INTRO,
} from '@/data/hcp-special-populations-hub';
import { ARTICLE_META } from '@/lib/article-meta';

export default function HcpSpecialPopulationsHub() {
  const meta = ARTICLE_META.hcpSpecialPopulationsHub;

  return (
    <div className="min-h-screen hcp-cancer-page hcp-guide-page hcp-sp-hub-page" dir="ltr" lang="en">
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

          <div className="hcp-cancer-inner hcp-guide-inner">
            <header className="hcp-cancer-hero hcp-guide-hero hcp-sp-hub-hero">
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                🏥
              </span>
              <span className="hcp-cancer-hero-tag">HCP · Special populations</span>
              <h1 className="hcp-cancer-hero-title">Special Populations</h1>
              {HCP_SPECIAL_POPULATIONS_INTRO.map((line) => (
                <p key={line} className="hcp-cancer-hero-lead">
                  {line}
                </p>
              ))}
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="hcp-sp-hub-groups">
              {HCP_SPECIAL_POPULATIONS_GROUPS.map((group) => (
                <section key={group.title} className="hcp-sp-hub-group">
                  <h2 className="hcp-sp-hub-group-title">{group.title}</h2>
                  <div className="hcp-sp-hub-grid">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="hcp-sp-hub-card">
                        {item.emoji ? (
                          <span className="hcp-sp-hub-card-emoji" aria-hidden>
                            {item.emoji}
                          </span>
                        ) : null}
                        <span className="hcp-sp-hub-card-label">{item.label}</span>
                        <span className="hcp-sp-hub-card-cta">Open guide →</span>
                      </Link>
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
