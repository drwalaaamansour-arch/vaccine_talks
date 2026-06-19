import type { CSSProperties } from 'react';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideRelatedLinks from '@/components/hcp-guide/HcpGuideRelatedLinks';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { PretermBlock, PretermCopy, PretermListItem, PretermSection } from '@/data/preterm-infants-copy';
import { PRETERM_SECTION_IDS } from '@/data/preterm-infants-copy';

function styles(arabic: boolean) {
  const dir = arabic ? ('rtl' as const) : ('ltr' as const);
  const align = arabic ? ('right' as const) : ('left' as const);

  const boxStyle: CSSProperties = {
    padding: '1.5rem 2rem',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.75)',
    border: '2px solid rgba(64, 96, 109, 0.15)',
    boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)',
    width: '100%',
    boxSizing: 'border-box',
    direction: dir,
    textAlign: align,
  };

  const keyBoxStyle: CSSProperties = {
    ...boxStyle,
    background: 'rgba(64, 96, 109, 0.08)',
    border: '2px solid rgba(64, 96, 109, 0.25)',
  };

  const h4Style: CSSProperties = {
    textAlign: align,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#40606D',
    marginTop: 0,
    marginBottom: '0.75rem',
    direction: dir,
  };

  const h5Style: CSSProperties = {
    textAlign: align,
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#40606D',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    direction: dir,
  };

  const para = (mb: string | number = '0.75rem'): CSSProperties => ({
    direction: dir,
    textAlign: align,
    marginBottom: mb,
    lineHeight: 1.8,
  });

  const list: CSSProperties = {
    direction: dir,
    textAlign: align,
    marginInlineStart: arabic ? 0 : '1.5rem',
    marginInlineEnd: arabic ? '1.5rem' : 0,
    marginBottom: '0.75rem',
    lineHeight: 1.8,
  };

  return { boxStyle, keyBoxStyle, h4Style, h5Style, para, list, dir, align };
}

function renderListItem(item: PretermListItem) {
  if (typeof item === 'string') {
    return item;
  }

  return (
    <>
      <strong>{item.label}</strong> {item.text}
    </>
  );
}

function SectionBlocks({
  blocks,
  s,
}: {
  blocks: PretermBlock[];
  s: ReturnType<typeof styles>;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p
                key={`p-${index}`}
                className="about-lang-intro"
                style={s.para(index === blocks.length - 1 && block.type === 'p' ? 0 : undefined)}
              >
                {block.text}
              </p>
            );
          case 'h5':
            return (
              <h5 key={`h5-${index}`} style={s.h5Style}>
                {block.text}
              </h5>
            );
          case 'ul':
            return (
              <ul key={`ul-${index}`} style={{ ...s.list, marginBottom: index === blocks.length - 1 ? 0 : s.list.marginBottom }}>
                {block.items.map((item) => (
                  <li key={typeof item === 'string' ? item : item.label}>{renderListItem(item)}</li>
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

function PretermSectionView({
  section,
  s,
}: {
  section: PretermSection;
  s: ReturnType<typeof styles>;
}) {
  const box = section.variant === 'key' ? s.keyBoxStyle : s.boxStyle;

  return (
    <div id={section.id} style={box}>
      <h4 style={s.h4Style}>{section.title}</h4>
      <SectionBlocks blocks={section.blocks} s={s} />
    </div>
  );
}

export function PretermInfantsBody({ copy, arabic }: { copy: PretermCopy; arabic?: boolean }) {
  const s = styles(Boolean(arabic));
  const referencesId = arabic ? PRETERM_SECTION_IDS.ar.references : PRETERM_SECTION_IDS.en.references;
  const relatedLinksId = arabic ? PRETERM_SECTION_IDS.ar.relatedLinks : PRETERM_SECTION_IDS.en.relatedLinks;
  const sectionProps = arabic ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const } : {};

  const body = (
    <>
      <div
        className="hcp-guide-hsct"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}
      >
        {copy.sections.map((section) => (
          <PretermSectionView key={section.id} section={section} s={s} />
        ))}
      </div>

      <div id={referencesId}>
        <HcpGuideReferences references={copy.references} title={copy.referencesTitle} {...sectionProps} />
      </div>

      <div id={relatedLinksId}>
        {copy.relatedLinksTitle ? (
          <h4
            style={{
              ...s.h4Style,
              marginTop: '0.5rem',
              marginBottom: '0.85rem',
              textAlign: 'center',
            }}
            dir={s.dir}
          >
            {copy.relatedLinksTitle}
          </h4>
        ) : null}
        <HcpGuideRelatedLinks links={copy.relatedLinks} />
      </div>
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
