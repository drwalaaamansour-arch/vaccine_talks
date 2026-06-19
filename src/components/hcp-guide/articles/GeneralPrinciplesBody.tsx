import type { CSSProperties, ReactNode } from 'react';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  GeneralPrinciplesBlock,
  GeneralPrinciplesChunk,
  GeneralPrinciplesCopy,
  GeneralPrinciplesParagraph,
} from '@/data/general-principles-copy';
import { GENERAL_PRINCIPLES_SECTION_IDS } from '@/data/general-principles-copy';

function styles(arabic: boolean) {
  const dir = arabic ? ('rtl' as const) : ('ltr' as const);
  const align = arabic ? ('right' as const) : ('left' as const);
  const borderSide = arabic ? 'borderRight' : 'borderLeft';
  const radius = arabic ? '14px 0 0 14px' : '0 14px 14px 0';
  const padding = arabic ? '1.35rem 1.45rem 1.4rem 1.25rem' : '1.35rem 1.25rem 1.4rem 1.45rem';

  const prose: CSSProperties = {
    direction: dir,
    textAlign: align,
    lineHeight: 1.75,
    fontSize: '1rem',
    color: 'rgba(45, 42, 38, 0.92)',
  };

  const listStyle: CSSProperties = {
    margin: '0 0 1.1rem 0',
    marginInlineStart: arabic ? 0 : '1.25rem',
    marginInlineEnd: arabic ? '1.25rem' : 0,
    paddingInlineStart: '0.25rem',
  };

  const listItemStyle: CSSProperties = { marginBottom: '0.35rem' };

  const chunkBorderSage = '4px solid rgba(64, 96, 109, 0.55)';
  const chunkBorderSlate = '4px solid rgba(139, 115, 85, 0.45)';

  const chunkBubble = (accent: 'sage' | 'slate'): CSSProperties => ({
    [borderSide]: accent === 'sage' ? chunkBorderSage : chunkBorderSlate,
    background: arabic
      ? 'linear-gradient(270deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)'
      : 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
    padding,
    borderRadius: radius,
    boxShadow: '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
  });

  const chunkTitle = (accent: 'sage' | 'slate'): CSSProperties => ({
    color: accent === 'sage' ? '#40606D' : '#5c4d3d',
    fontSize: '1.12rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
    margin: '0 0 0.9rem',
    paddingBottom: '0.5rem',
    borderBottom:
      accent === 'sage'
        ? '2px solid rgba(64, 96, 109, 0.18)'
        : '2px solid rgba(139, 115, 85, 0.2)',
    lineHeight: 1.35,
    direction: dir,
    textAlign: align,
  });

  const sectionHeading: CSSProperties = {
    textAlign: 'center',
    fontSize: '1.5rem',
    alignSelf: 'center',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    lineHeight: 1.35,
    fontWeight: 600,
    color: '#40606D',
    direction: dir,
  };

  const p = (mb: string | number = '0.95rem'): CSSProperties => ({
    marginBottom: mb,
    direction: dir,
    textAlign: align,
  });

  return { dir, align, prose, listStyle, listItemStyle, chunkBubble, chunkTitle, sectionHeading, p };
}

function renderParagraphContent(content: GeneralPrinciplesParagraph): ReactNode {
  if (typeof content === 'string') return content;

  return content.parts.map((part, index) => {
    if (part.bold) return <strong key={index}>{part.text}</strong>;
    if (part.sup) return <sup key={index}>{part.text}</sup>;
    return part.text;
  });
}

function renderBlocks(
  blocks: GeneralPrinciplesBlock[],
  s: ReturnType<typeof styles>,
) {
  return blocks.map((block, index) => {
    if (block.type === 'ul') {
      return (
        <ul key={`ul-${index}`} style={s.listStyle}>
          {block.items.map((item) => (
            <li key={item} style={s.listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`p-${index}`} style={s.p(block.mb ?? (index === blocks.length - 1 ? 0 : '1.1rem'))}>
        {renderParagraphContent(block.content)}
      </p>
    );
  });
}

function ContentChunk({
  chunk,
  s,
}: {
  chunk: GeneralPrinciplesChunk;
  s: ReturnType<typeof styles>;
}) {
  return (
    <div style={s.chunkBubble(chunk.accent)}>
      <h4 style={s.chunkTitle(chunk.accent)}>{chunk.title}</h4>
      <div style={s.prose}>
        {chunk.paragraphs.map((paragraph, index) => (
          <p
            key={`chunk-p-${index}`}
            style={s.p(index === chunk.paragraphs.length - 1 ? 0 : '0.95rem')}
          >
            {renderParagraphContent(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}

export function GeneralPrinciplesBody({
  copy,
  arabic,
}: {
  copy: GeneralPrinciplesCopy;
  arabic?: boolean;
}) {
  const s = styles(Boolean(arabic));
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const referencesId = arabic
    ? GENERAL_PRINCIPLES_SECTION_IDS.ar.references
    : GENERAL_PRINCIPLES_SECTION_IDS.en.references;

  const body = (
    <>
      <div
        className="hcp-guide-hsct"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', width: '100%' }}
      >
        <div id={copy.classification.id}>
          <div className="about-lang-intro" style={{ ...s.prose, maxWidth: '100%', marginBottom: 0 }}>
            {renderBlocks(copy.classification.blocks, s)}
          </div>
        </div>

        <div id={copy.vaccineSafety.id}>
          <h3 className="about-lang-title" style={s.sectionHeading}>
            {copy.vaccineSafety.sectionTitle}
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.35rem',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '1.25rem',
                alignItems: 'stretch',
              }}
            >
              {copy.vaccineSafety.gridChunks.map((chunk) => (
                <ContentChunk key={chunk.title} chunk={chunk} s={s} />
              ))}
            </div>

            {copy.vaccineSafety.fullWidthChunks.map((chunk) => (
              <ContentChunk key={chunk.title} chunk={chunk} s={s} />
            ))}
          </div>
        </div>
      </div>

      <HcpGuideReferences
        id={referencesId}
        references={copy.references}
        title={copy.referencesTitle}
        {...sectionProps}
      />
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
