import type { CSSProperties } from 'react';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { PregnancyBlock, PregnancyCopy, PregnancySection } from '@/data/pregnancy-breastfeeding-copy';

const PREGNANCY_PDF = '/pregnancy.pdf';
const MATERNAL_IMMUNIZATION_SCHEDULE_PDF = '/maternal-immunization-schedule.pdf';
const ABRYSVO_PREGNANCY_PDF = encodeURI('/abrysvo during pregnancy.pdf');
const TDAP_PREGNANCY_PDF = encodeURI('/dtap during pregnancy.pdf');

function styles(arabic: boolean) {
  const dir = arabic ? ('rtl' as const) : ('ltr' as const);
  const align = arabic ? ('right' as const) : ('left' as const);
  const borderSide = arabic ? 'borderRight' : 'borderLeft';
  const radius = arabic ? '14px 0 0 14px' : '0 14px 14px 0';
  const padding = arabic ? '1.25rem 1.45rem 1.3rem 1.25rem' : '1.25rem 1.25rem 1.3rem 1.45rem';

  const prose: CSSProperties = {
    direction: dir,
    textAlign: align,
    lineHeight: 1.75,
    fontSize: '1rem',
    color: 'rgba(45, 42, 38, 0.92)',
  };

  const listStyle: CSSProperties = {
    direction: dir,
    textAlign: align,
    margin: '0 0 0.95rem 0',
    marginInlineStart: arabic ? 0 : '1.25rem',
    marginInlineEnd: arabic ? '1.25rem' : 0,
    paddingInlineStart: '0.25rem',
  };

  const listItemStyle: CSSProperties = { marginBottom: '0.35rem' };

  const chunkTitleSage: CSSProperties = {
    color: '#40606D',
    fontSize: '1.45rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
    margin: '0 0 0.65rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid rgba(64, 96, 109, 0.18)',
    lineHeight: 1.35,
    direction: dir,
    textAlign: align,
  };

  const chunkTitleSlate: CSSProperties = {
    ...chunkTitleSage,
    color: '#5c4d3d',
    borderBottom: '2px solid rgba(139, 115, 85, 0.2)',
  };

  const bubbleSage: CSSProperties = {
    [borderSide]: '4px solid rgba(64, 96, 109, 0.55)',
    background: arabic
      ? 'linear-gradient(270deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)'
      : 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
    padding,
    borderRadius: radius,
    boxShadow: '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
    direction: dir,
    textAlign: align,
  };

  const bubbleSlate: CSSProperties = {
    ...bubbleSage,
    [borderSide]: '4px solid rgba(139, 115, 85, 0.45)',
  };

  const p = (mb: string | number = '0.95rem'): CSSProperties => ({
    marginBottom: mb,
    direction: dir,
    textAlign: align,
  });

  return {
    dir,
    align,
    prose,
    listStyle,
    listItemStyle,
    chunkTitleSage,
    chunkTitleSlate,
    bubbleSage,
    bubbleSlate,
    p,
  };
}

function SectionBlocks({
  blocks,
  s,
}: {
  blocks: PregnancyBlock[];
  s: ReturnType<typeof styles>;
}) {
  return (
    <div style={s.prose}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={`p-${index}`} style={s.p(block.mb ?? '0.95rem')}>
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={`ul-${index}`} style={s.listStyle}>
                {block.items.map((item) => (
                  <li key={item} style={s.listItemStyle}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function ContentChunk({
  section,
  s,
}: {
  section: PregnancySection;
  s: ReturnType<typeof styles>;
}) {
  const titleStyle = section.accent === 'sage' ? s.chunkTitleSage : s.chunkTitleSlate;
  const bubbleStyle = section.accent === 'sage' ? s.bubbleSage : s.bubbleSlate;

  return (
    <div id={section.id} className="hcp-content-chunk-group" style={{ width: '100%' }}>
      <h4 style={titleStyle} dir={s.dir} lang={s.dir === 'rtl' ? 'ar' : undefined}>
        {section.title}
      </h4>
      <div className="hcp-content-chunk-bubble" style={bubbleStyle}>
        <SectionBlocks blocks={section.blocks} s={s} />
      </div>
    </div>
  );
}

export function PregnancyBreastfeedingBody({ copy, arabic }: { copy: PregnancyCopy; arabic?: boolean }) {
  const s = styles(Boolean(arabic));
  const sectionProps = arabic ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const } : {};

  const body = (
    <>
      <div
        className="hcp-guide-hsct"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', width: '100%' }}
      >
        {copy.sections.map((section) => (
          <ContentChunk key={section.id} section={section} s={s} />
        ))}
      </div>

      <HcpGuideReferences references={copy.references} title={copy.referencesTitle} {...sectionProps} />

      <HcpGuidePdfEmbed title={copy.pdfTitles.maternalSchedule} src={MATERNAL_IMMUNIZATION_SCHEDULE_PDF} />
      <HcpGuidePdfEmbed title={copy.pdfTitles.pregnancy} src={PREGNANCY_PDF} />
      <HcpGuidePdfEmbed title={copy.pdfTitles.abrysvo} src={ABRYSVO_PREGNANCY_PDF} />
      <HcpGuidePdfEmbed title={copy.pdfTitles.tdap} src={TDAP_PREGNANCY_PDF} />
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
