import type { ReactNode } from 'react';
import Link from 'next/link';
import CancerConsensusButton from '@/components/hcp-cancer-vaccination/CancerConsensusButton';
import CancerVaccinationPdfs from '@/components/hcp-cancer-vaccination/CancerVaccinationPdfs';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  CancerContentBlock,
  CancerVaccinationCopy,
  CancerVaccinationLocale,
} from '@/data/cancer-vaccination-copy';

function Ul({ items, arabic }: { items: string[]; arabic?: boolean }) {
  return (
    <ul dir={arabic ? 'rtl' : undefined}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({
  id,
  title,
  icon,
  children,
  variant,
  arabic,
}: {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  variant?: 'takeaway';
  arabic?: boolean;
}) {
  const headClass = arabic ? ' hcp-cancer-section-head--right' : '';

  return (
    <section
      id={id}
      dir={arabic ? 'rtl' : undefined}
      lang={arabic ? 'ar' : undefined}
      className={`hcp-cancer-section${variant === 'takeaway' ? ' hcp-cancer-takeaway-section' : ''}`}
    >
      <div className={`hcp-cancer-section-head${headClass}`}>
        <span className="hcp-cancer-section-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="hcp-cancer-section-title" dir={arabic ? 'rtl' : undefined}>
          {title}
        </h2>
      </div>
      <div className="hcp-cancer-section-body">{children}</div>
    </section>
  );
}

function Sub({ title, muted, arabic }: { title: string; muted?: boolean; arabic?: boolean }) {
  return (
    <h3
      className={muted ? 'hcp-cancer-sub hcp-cancer-sub--muted' : 'hcp-cancer-sub'}
      dir={arabic ? 'rtl' : undefined}
    >
      {title}
    </h3>
  );
}

function ContentBlocks({
  blocks,
  arabic,
}: {
  blocks: CancerContentBlock[];
  arabic?: boolean;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={`${block.type}-${index}`} dir={arabic ? 'rtl' : undefined}>
                {block.text}
              </p>
            );
          case 'sub':
            return <Sub key={`${block.type}-${index}`} title={block.title} muted={block.muted} arabic={arabic} />;
          case 'ul':
            return <Ul key={`${block.type}-${index}`} items={block.items} arabic={arabic} />;
          case 'chips':
            return (
              <ul key={`${block.type}-${index}`} className="hcp-cancer-chips" dir={arabic ? 'rtl' : undefined}>
                {block.items.map((item) => (
                  <li key={item} className="hcp-cancer-chip">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'vaccinePair':
            return (
              <div key={`${block.type}-${index}`} className="hcp-cancer-vaccine-pair">
                <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--ok">
                  <p className="hcp-cancer-vaccine-card-label">{block.recommendedLabel}</p>
                  <p>{block.recommended}</p>
                </div>
                <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--no">
                  <p className="hcp-cancer-vaccine-card-label">{block.notRecommendedLabel}</p>
                  <p>{block.notRecommended}</p>
                </div>
              </div>
            );
          case 'alert':
            return (
              <div key={`${block.type}-${index}`} className="hcp-cancer-alert" dir={arabic ? 'rtl' : undefined}>
                <strong>{block.title}</strong>
                {block.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {block.items ? <Ul items={block.items} arabic={arabic} /> : null}
              </div>
            );
          case 'link':
            return (
              <p key={`${block.type}-${index}`} dir={arabic ? 'rtl' : undefined}>
                {block.before}{' '}
                <Link href={block.href} className="hcp-cancer-inline-link">
                  {block.linkText}
                </Link>
                {block.after ? ` ${block.after}` : null}
              </p>
            );
          case 'postGrid':
            return (
              <div key={`${block.type}-${index}`} className="hcp-cancer-post-grid">
                {block.cards.map((card) => (
                  <div key={card.title} className="hcp-cancer-post-card" dir={arabic ? 'rtl' : undefined}>
                    <h5>{card.title}</h5>
                    <ContentBlocks blocks={card.blocks} arabic={arabic} />
                  </div>
                ))}
              </div>
            );
          case 'takeawayList':
            return (
              <ul key={`${block.type}-${index}`} className="hcp-cancer-takeaway-list" dir={arabic ? 'rtl' : undefined}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export function CancerVaccinationBody({
  copy,
  locale,
}: {
  copy: CancerVaccinationCopy;
  locale: CancerVaccinationLocale;
}) {
  const arabic = locale === 'ar';
  const sections = copy.sections.map((section) => (
    <Section
      key={section.id}
      id={section.id}
      title={section.title}
      icon={section.icon}
      variant={section.variant}
      arabic={arabic}
    >
      <ContentBlocks blocks={section.blocks} arabic={arabic} />
    </Section>
  ));

  const body = (
    <>
      {sections}
      <CancerConsensusButton arabic={arabic} />
      <CancerVaccinationPdfs arabic={arabic} />
      <Section id={copy.referencesId} title={copy.referencesTitle} icon="📚" arabic={arabic}>
        <ul className="hcp-cancer-ref-list" dir={arabic ? 'rtl' : undefined}>
          {copy.references.map((ref) => (
            <li key={ref.href}>
              {ref.citation}{' '}
              <a href={ref.href} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
                {ref.href}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
