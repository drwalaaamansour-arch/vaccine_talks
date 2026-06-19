import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  HsctClinicalNote,
  HsctScheduleCard,
  HsctSimpleSection,
  HsctVaccinationCopy,
  HsctVaccinationLocale,
} from '@/data/hsct-vaccination-copy';
import { HSCT_SECTION_IDS } from '@/data/hsct-vaccination-copy';

const HSCT_VACCINATION_PDF = '/hsct%20vaccination.pdf';
const AU_HSCT_TABLE_PDF = `/${encodeURIComponent(
  'Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook.pdf',
)}`;

function styles(arabic: boolean) {
  const dir = arabic ? ('rtl' as const) : ('ltr' as const);
  const align = arabic ? ('right' as const) : ('left' as const);
  const borderSide = arabic ? 'borderRight' : 'borderLeft';
  const radius = arabic ? '14px 0 0 14px' : '0 14px 14px 0';
  const padding = arabic ? '1.25rem 1.45rem 1.3rem 1.25rem' : '1.25rem 1.25rem 1.3rem 1.45rem';
  const noteBorder = arabic ? 'borderRight' : 'borderLeft';

  const box: CSSProperties = {
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

  const keyBox: CSSProperties = {
    ...box,
    background: 'rgba(64, 96, 109, 0.08)',
    border: '2px solid rgba(64, 96, 109, 0.25)',
  };

  const h4: CSSProperties = {
    textAlign: align,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#40606D',
    marginTop: 0,
    marginBottom: '0.75rem',
    direction: dir,
  };

  const h5: CSSProperties = {
    textAlign: align,
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#40606D',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    direction: dir,
  };

  const subTitleFeatured: CSSProperties = {
    textAlign: 'center',
    fontSize: '1.4rem',
    width: '100%',
    marginTop: '0.25rem',
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

  const chunkTitle: CSSProperties = {
    ...h4,
    fontSize: '1.45rem',
    fontWeight: 700,
    paddingBottom: '0.5rem',
    borderBottom: '2px solid rgba(64, 96, 109, 0.18)',
  };

  const bubbleInner: CSSProperties = {
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

  const innerBubble: CSSProperties = {
    [borderSide]: '3px solid rgba(64, 96, 109, 0.4)',
    background: 'rgba(255, 255, 255, 0.55)',
    padding: arabic ? '1.1rem 1.3rem 1.15rem 1.1rem' : '1.1rem 1.1rem 1.15rem 1.3rem',
    borderRadius: arabic ? '12px 0 0 12px' : '0 12px 12px 0',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
    marginTop: '0.35rem',
    direction: dir,
    textAlign: align,
  };

  const scheduleCard: CSSProperties = {
    border: '2px solid rgba(64, 96, 109, 0.22)',
    borderRadius: '16px',
    padding: '1.15rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 12px rgba(64, 96, 109, 0.06)',
    direction: dir,
    textAlign: align,
  };

  const scheduleLabel: CSSProperties = {
    margin: '0 0 0.35rem',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: arabic ? 'normal' : '0.1em',
    textTransform: arabic ? 'none' : 'uppercase',
    color: 'rgba(64, 96, 109, 0.72)',
    direction: dir,
    textAlign: align,
  };

  const scheduleVaccine: CSSProperties = {
    margin: '0 0 0.85rem',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#40606D',
    direction: dir,
    textAlign: align,
  };

  const timingBadge: CSSProperties = {
    display: 'inline-block',
    marginBottom: '0.85rem',
    padding: '0.35rem 0.75rem',
    borderRadius: '999px',
    background: 'rgba(64, 96, 109, 0.1)',
    border: '1px solid rgba(64, 96, 109, 0.2)',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#40606D',
    direction: dir,
  };

  const stepList: CSSProperties = {
    ...list,
    marginBottom: 0,
    paddingInlineStart: '1.25rem',
  };

  const subheadingInCard: CSSProperties = {
    margin: '0 0 0.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#40606D',
    direction: dir,
    textAlign: align,
  };

  const introCallout: CSSProperties = {
    padding: '0.9rem 1rem',
    borderRadius: '12px',
    background: 'rgba(64, 96, 109, 0.07)',
    border: '1px solid rgba(64, 96, 109, 0.15)',
    direction: dir,
    textAlign: align,
  };

  const clinicalNoteWrap: CSSProperties = {
    marginTop: '1rem',
    padding: '0.85rem 1rem',
    borderRadius: '12px',
    background: 'rgba(139, 115, 85, 0.1)',
    [noteBorder]: '4px solid rgba(139, 115, 85, 0.55)',
    direction: dir,
    textAlign: align,
  };

  return {
    box,
    keyBox,
    h4,
    h5,
    subTitleFeatured,
    para,
    list,
    chunkTitle,
    bubbleInner,
    innerBubble,
    scheduleCard,
    scheduleLabel,
    scheduleVaccine,
    timingBadge,
    stepList,
    subheadingInCard,
    introCallout,
    clinicalNoteWrap,
    dir,
    align,
  };
}

function ClinicalNote({
  note,
  s,
}: {
  note: HsctClinicalNote;
  s: ReturnType<typeof styles>;
}) {
  return (
    <div style={s.clinicalNoteWrap}>
      <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#5c4d3d', marginBottom: '0.35rem' }}>
        {note.title}
      </p>
      <p className="about-lang-intro" style={s.para(0)}>
        {note.text}
      </p>
    </div>
  );
}

function ScheduleCardView({
  card,
  s,
}: {
  card: HsctScheduleCard;
  s: ReturnType<typeof styles>;
}) {
  return (
    <div className="hcp-guide-schedule-card" style={s.scheduleCard}>
      <p style={s.scheduleLabel}>{card.label}</p>
      <p style={s.scheduleVaccine}>{card.vaccine}</p>
      {card.timingBadge ? <span style={s.timingBadge}>{card.timingBadge}</span> : null}
      {card.intro ? (
        <p className="about-lang-intro" style={{ ...s.para('0.65rem'), fontSize: '0.95rem' }}>
          {card.intro}
        </p>
      ) : null}
      {card.seriesTitle ? (
        <p style={{ ...s.subheadingInCard, margin: '0 0 0.5rem', fontSize: '0.95rem' }}>{card.seriesTitle}</p>
      ) : null}
      {card.steps ? (
        <ol style={s.stepList}>
          {card.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {card.followedByTitle ? <p style={s.subheadingInCard}>{card.followedByTitle}</p> : null}
      {card.followedBySteps ? (
        <ol style={s.stepList}>
          {card.followedBySteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {card.includesTitle ? <p style={s.subheadingInCard}>{card.includesTitle}</p> : null}
      {card.includesItems ? (
        <ul style={s.stepList}>
          {card.includesItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ContentBubble({ title, children, s }: { title: string; children: ReactNode; s: ReturnType<typeof styles> }) {
  return (
    <div className="hcp-content-chunk-group" style={{ width: '100%' }}>
      <h4 style={s.chunkTitle} dir={s.dir} lang={s.dir === 'rtl' ? 'ar' : undefined}>
        {title}
      </h4>
      <div className="hcp-content-chunk-bubble" style={s.bubbleInner}>
        {children}
      </div>
    </div>
  );
}

function SimpleSectionBlock({
  section,
  s,
}: {
  section: HsctSimpleSection;
  s: ReturnType<typeof styles>;
}) {
  return (
    <>
      {section.paragraphs?.map((text, index) => (
        <p key={text.slice(0, 40)} className="about-lang-intro" style={s.para(index === (section.paragraphs?.length ?? 0) - 1 && !section.bullets?.length ? 0 : undefined)}>
          {text}
        </p>
      ))}
      {section.bullets ? (
        <ul style={s.list}>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function Sub({
  title,
  children,
  s,
  featured,
}: {
  title: string;
  children: ReactNode;
  s: ReturnType<typeof styles>;
  featured?: boolean;
}) {
  return (
    <>
      <h5 style={{ ...s.h5, ...(featured ? s.subTitleFeatured : {}) }}>{title}</h5>
      {children}
    </>
  );
}

function PediatricOncologyConsensusCta({
  copy,
  arabic,
}: {
  copy: HsctVaccinationCopy['pediatricConsensusCta'];
  arabic: boolean;
}) {
  return (
    <Link
      href="/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt"
      className="hcp-consensus-cta"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.65rem',
        width: '100%',
        padding: '2.25rem 1.75rem',
        borderRadius: '22px',
        textDecoration: 'none',
        textAlign: 'center',
        background: 'linear-gradient(145deg, #2f4a56 0%, #40606D 42%, #5d8a9a 100%)',
        color: '#fff',
        boxShadow: '0 14px 40px rgba(64, 96, 109, 0.38), inset 0 1px 0 rgba(255,255,255,0.15)',
        border: '2px solid rgba(255, 255, 255, 0.22)',
        boxSizing: 'border-box',
        direction: arabic ? 'rtl' : 'ltr',
      }}
    >
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: arabic ? 'normal' : '0.14em',
          textTransform: arabic ? 'none' : 'uppercase',
          opacity: 0.92,
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.14)',
          border: '1px solid rgba(255, 255, 255, 0.28)',
        }}
      >
        {copy.badge}
      </span>
      <span style={{ fontSize: '2.25rem', lineHeight: 1, marginTop: '0.15rem' }} aria-hidden>
        {copy.emoji}
      </span>
      <span style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, maxWidth: '34rem' }}>{copy.title}</span>
      <span style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.55, opacity: 0.94, maxWidth: '36rem' }}>
        {copy.lead}
      </span>
      <span
        style={{
          marginTop: '0.65rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: arabic ? 'normal' : '0.06em',
          textTransform: arabic ? 'none' : 'uppercase',
          lineHeight: 1.45,
          opacity: 0.88,
          maxWidth: '38rem',
        }}
      >
        {copy.kicker}
      </span>
      <span
        style={{
          marginTop: '0.85rem',
          fontSize: '1.05rem',
          fontWeight: 800,
          padding: '0.7rem 1.5rem',
          borderRadius: '999px',
          background: '#fff',
          color: '#40606D',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
        }}
      >
        {copy.action}
      </span>
    </Link>
  );
}

export function HaematopoieticStemCellTransplantBody({
  copy,
  locale,
}: {
  copy: HsctVaccinationCopy;
  locale: HsctVaccinationLocale;
}) {
  const arabic = locale === 'ar';
  const ids = arabic ? HSCT_SECTION_IDS.ar : HSCT_SECTION_IDS.en;
  const s = styles(arabic);
  const sectionProps = arabic ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const } : {};

  const body = (
    <div
      className="hcp-guide-hsct"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}
    >
      <div id={ids.overview}>
        <ContentBubble title={copy.overview.title} s={s}>
          <SimpleSectionBlock section={copy.overview} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.immunocompromised}>
        <ContentBubble title={copy.immunocompromised.title} s={s}>
          <SimpleSectionBlock section={copy.immunocompromised} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.gvhd}>
        <ContentBubble title={copy.gvhd.title} s={s}>
          <SimpleSectionBlock section={copy.gvhd} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.generalPrinciples}>
        <ContentBubble title={copy.generalPrinciples.title} s={s}>
          <SimpleSectionBlock section={copy.generalPrinciples} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.inactivated}>
        <ContentBubble title={copy.inactivated.title} s={s}>
          <Sub title={copy.inactivated.pneumococcal.title} s={s} featured>
            <div className="hcp-content-chunk-bubble" style={s.innerBubble}>
              <div style={s.introCallout}>
                {copy.inactivated.pneumococcal.intro.map((text) => (
                  <p key={text} className="about-lang-intro" style={{ ...s.para('0.55rem'), fontWeight: 600, color: '#40606D' }}>
                    {text}
                  </p>
                ))}
              </div>
              <div className="hcp-guide-schedule-grid">
                {copy.inactivated.pneumococcal.cards.map((card) => (
                  <ScheduleCardView key={card.vaccine + card.label} card={card} s={s} />
                ))}
              </div>
              <ClinicalNote note={copy.inactivated.pneumococcal.note} s={s} />
            </div>
          </Sub>

          <Sub title={copy.inactivated.hib.title} s={s} featured>
            <ul style={{ ...s.list, marginBottom: 0 }}>
              {copy.inactivated.hib.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Sub>

          <Sub title={copy.inactivated.dtap.title} s={s} featured>
            <div className="hcp-content-chunk-bubble" style={s.innerBubble}>
              <div className="hcp-guide-schedule-grid">
                {copy.inactivated.dtap.cards.map((card) => (
                  <ScheduleCardView key={card.vaccine + card.label} card={card} s={s} />
                ))}
              </div>
              <ClinicalNote note={copy.inactivated.dtap.note} s={s} />
            </div>
          </Sub>

          <Sub title={copy.inactivated.influenza.title} s={s} featured>
            <ul style={{ ...s.list, marginBottom: 0 }}>
              {copy.inactivated.influenza.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Sub>

          <Sub title={copy.inactivated.hepatitisB.title} s={s} featured>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.inactivated.hepatitisB.text}
            </p>
          </Sub>

          <Sub title={copy.inactivated.hepatitisA.title} s={s} featured>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.inactivated.hepatitisA.text}
            </p>
          </Sub>

          <Sub title={copy.inactivated.ipv.title} s={s} featured>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.inactivated.ipv.text}
            </p>
          </Sub>

          <Sub title={copy.inactivated.meningococcal.title} s={s} featured>
            <div className="hcp-content-chunk-bubble" style={s.innerBubble}>
              <div style={s.introCallout}>
                <p style={s.subheadingInCard}>{copy.inactivated.meningococcal.introTitle}</p>
                <ul style={{ ...s.stepList, marginBottom: 0 }}>
                  {copy.inactivated.meningococcal.introBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="hcp-guide-schedule-grid" style={{ marginTop: '1rem' }}>
                {copy.inactivated.meningococcal.cards.map((card) => (
                  <ScheduleCardView key={card.vaccine + card.label} card={card} s={s} />
                ))}
              </div>
            </div>
          </Sub>

          <Sub title={copy.inactivated.hpv.title} s={s} featured>
            <p className="about-lang-intro" style={s.para()}>{copy.inactivated.hpv.intro}</p>
            <ul style={{ ...s.list, marginBottom: 0 }}>
              {copy.inactivated.hpv.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Sub>

          <Sub title={copy.inactivated.rzv.title} s={s} featured>
            <p className="about-lang-intro" style={s.para()}>{copy.inactivated.rzv.intro}</p>
            <ul style={s.list}>
              {copy.inactivated.rzv.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.inactivated.rzv.text}
            </p>
          </Sub>
        </ContentBubble>
      </div>

      <div id={ids.live}>
        <ContentBubble title={copy.live.title} s={s}>
          {copy.live.paragraphs.map((text, index) => (
            <p key={text.slice(0, 40)} className="about-lang-intro" style={s.para(index === copy.live.paragraphs.length - 1 && !copy.live.eligibilityCriteria.length ? 0 : undefined)}>
              {text}
            </p>
          ))}
          <ul style={s.list}>
            {copy.live.eligibilityCriteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Sub title={copy.live.mmr.title} s={s} featured>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.live.mmr.text}
            </p>
          </Sub>
          <Sub title={copy.live.varicella.title} s={s} featured>
            <p className="about-lang-intro" style={s.para(0)}>
              {copy.live.varicella.text}
            </p>
          </Sub>
        </ContentBubble>
      </div>

      <div id={ids.notRecommended}>
        <ContentBubble title={copy.notRecommended.title} s={s}>
          <SimpleSectionBlock section={copy.notRecommended} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.travel}>
        <ContentBubble title={copy.travel.title} s={s}>
          <div style={s.introCallout}>
            <p className="about-lang-intro" style={s.para()}>{copy.travel.intro}</p>
            <p style={s.subheadingInCard}>{copy.travel.includesTitle}</p>
            <ul style={{ ...s.stepList, marginBottom: 0 }}>
              {copy.travel.vaccines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ClinicalNote note={copy.travel.yellowFeverNote} s={s} />
          <ClinicalNote note={copy.travel.specialistNote} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.serology}>
        <ContentBubble title={copy.serology.title} s={s}>
          <Sub title={copy.serology.recommended.title} s={s} featured>
            <div className="hcp-content-chunk-bubble" style={s.innerBubble}>
              <div style={s.introCallout}>
                <p style={s.subheadingInCard}>{copy.serology.recommended.introTitle}</p>
                <ul style={{ ...s.stepList, marginBottom: 0 }}>
                  {copy.serology.recommended.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ClinicalNote note={copy.serology.recommended.note} s={s} />
            </div>
          </Sub>
          <Sub title={copy.serology.notRecommended.title} s={s} featured>
            <div className="hcp-content-chunk-bubble" style={s.innerBubble}>
              <div style={s.introCallout}>
                <p style={s.subheadingInCard}>{copy.serology.notRecommended.introTitle}</p>
                <ul style={{ ...s.stepList, marginBottom: 0 }}>
                  {copy.serology.notRecommended.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Sub>
        </ContentBubble>
      </div>

      <div id={ids.donor}>
        <ContentBubble title={copy.donor.title} s={s}>
          <SimpleSectionBlock section={copy.donor} s={s} />
        </ContentBubble>
      </div>

      <div id={ids.keyPoints}>
        <div style={s.keyBox}>
          <h4 style={s.h4}>{copy.keyPoints.title}</h4>
          <ul style={{ ...s.list, marginBottom: 0 }}>
            {copy.keyPoints.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <HcpGuideReferences id={ids.references} references={copy.references} title={copy.referencesTitle} {...sectionProps} />

      <PediatricOncologyConsensusCta copy={copy.pediatricConsensusCta} arabic={arabic} />

      <div id={ids.resources}>
        <img
          src="/Untitled%20design.png"
          alt={copy.infographicAlt}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(64, 96, 109, 0.15)',
          }}
        />
        <HcpGuidePdfEmbed src={HSCT_VACCINATION_PDF} title={copy.pdfTitles.hsctVaccination} />
        <HcpGuidePdfEmbed src={AU_HSCT_TABLE_PDF} title={copy.pdfTitles.australianTable} />
      </div>
    </div>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
