import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';
import type { HcpGuideMetaKey, HcpGuideTocItem } from '@/components/hcp-guide/types';

type HcpGuidePageLayoutProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead?: string;
  emoji?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
  heroClassName?: string;
  toc?: HcpGuideTocItem[];
  children: ReactNode;
};

export default function HcpGuidePageLayout({
  metaKey,
  title,
  lead,
  emoji = '💉',
  tag = 'HCP · Special populations',
  backHref = '/hcp-special-populations',
  backLabel = '← Special Populations',
  heroClassName = '',
  toc,
  children,
}: HcpGuidePageLayoutProps) {
  const meta = ARTICLE_META[metaKey];

  return (
    <div className="min-h-screen hcp-cancer-page hcp-guide-page" dir="ltr" lang="en">
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
            <Link href={backHref} className="hcp-cancer-back hcp-guide-back">
              {backLabel}
            </Link>

            <header className={`hcp-cancer-hero hcp-guide-hero ${heroClassName}`.trim()}>
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                {emoji}
              </span>
              <span className="hcp-cancer-hero-tag">{tag}</span>
              <h1 className="hcp-cancer-hero-title">{title}</h1>
              {lead ? <p className="hcp-cancer-hero-lead">{lead}</p> : null}
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            {toc && toc.length > 0 ? (
              <div className="hcp-cancer-body hcp-guide-body">
                <nav className="hcp-cancer-nav hcp-guide-nav" aria-label="On this page">
                  <p className="hcp-cancer-nav-label">On this page</p>
                  <div className="hcp-cancer-nav-panel">
                    <ul className="hcp-cancer-nav-scroll">
                      {toc.map((item, index) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`}>
                            <span className="hcp-cancer-nav-num">{index + 1}</span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className="hcp-cancer-main hcp-guide-main">{children}</div>
              </div>
            ) : (
              <div className="hcp-guide-main hcp-guide-main--full">{children}</div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
