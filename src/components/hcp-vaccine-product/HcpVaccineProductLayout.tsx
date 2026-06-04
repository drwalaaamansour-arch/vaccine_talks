import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import { ARTICLE_META } from '@/lib/article-meta';
import type { HcpGuideMetaKey, HcpGuideTocItem } from '@/components/hcp-guide/types';

type HcpVaccineProductLayoutProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead: string;
  emoji?: string;
  imageSrc?: string;
  imageAlt?: string;
  toc: HcpGuideTocItem[];
  children: ReactNode;
};

export default function HcpVaccineProductLayout({
  metaKey,
  title,
  lead,
  emoji = '💉',
  imageSrc,
  imageAlt,
  toc,
  children,
}: HcpVaccineProductLayoutProps) {
  const meta = ARTICLE_META[metaKey];

  return (
    <div className="min-h-screen hcp-cancer-page hcp-guide-page hcp-vax-product-page" dir="ltr" lang="en">
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
        <div className="about-elegant-card vax-article-elegant hcp-vax-product-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="hcp-cancer-inner hcp-guide-inner">
            <Link href="/hcp-vaccines-sera" className="hcp-cancer-back hcp-guide-back">
              ← Vaccines and Sera in Egypt
            </Link>

            <header className="hcp-cancer-hero hcp-guide-hero hcp-vax-product-hero">
              <div className="hcp-cancer-hero-glow" aria-hidden />
              <span className="hcp-cancer-hero-emoji" aria-hidden>
                {emoji}
              </span>
              <span className="hcp-cancer-hero-tag">HCP · Vaccines & sera · Egypt</span>
              <h1 className="hcp-cancer-hero-title">{title}</h1>
              <p className="hcp-cancer-hero-lead">{lead}</p>
              <div className="hcp-cancer-hero-meta hub-hero-meta">
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            {imageSrc ? (
              <div className="hcp-vax-product-visual">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  width={600}
                  height={400}
                  className="hcp-vax-product-img"
                  priority
                />
              </div>
            ) : null}

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
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
