import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import ArticlePageTitle from '@/components/ArticlePageTitle';
import { ARTICLE_META } from '@/lib/article-meta';

const box: CSSProperties = {
  padding: '1.5rem 2rem',
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.75)',
  border: '2px solid rgba(64, 96, 109, 0.15)',
  boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)',
  width: '100%',
  boxSizing: 'border-box',
};

const keyBox: CSSProperties = {
  ...box,
  background: 'rgba(64, 96, 109, 0.08)',
  border: '2px solid rgba(64, 96, 109, 0.25)',
};

const h4: CSSProperties = {
  textAlign: 'left',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#40606D',
  marginTop: 0,
  marginBottom: '0.75rem',
  direction: 'ltr',
};

const h5: CSSProperties = {
  textAlign: 'left',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#40606D',
  marginTop: '1rem',
  marginBottom: '0.5rem',
  direction: 'ltr',
};

const subTitleFeatured: CSSProperties = {
  textAlign: 'center',
  fontSize: '1.4rem',
  width: '100%',
  marginTop: '0.25rem',
};

const para = (mb: string | number = '0.75rem'): CSSProperties => ({
  direction: 'ltr',
  textAlign: 'left',
  marginBottom: mb,
  lineHeight: 1.8,
});

const list: CSSProperties = {
  direction: 'ltr',
  textAlign: 'left',
  marginLeft: '1.5rem',
  marginBottom: '0.75rem',
  lineHeight: 1.8,
};

function Section({ title, children, variant = 'default' }: { title: string; children: ReactNode; variant?: 'default' | 'key' }) {
  return (
    <div style={variant === 'key' ? keyBox : box}>
      <h4 style={h4}>{title}</h4>
      {children}
    </div>
  );
}

function Sub({
  title,
  children,
  titleStyle,
}: {
  title: string;
  children: ReactNode;
  titleStyle?: CSSProperties;
}) {
  return (
    <>
      <h5 style={{ ...h5, ...titleStyle }}>{title}</h5>
      {children}
    </>
  );
}

const chunkTitle: CSSProperties = {
  ...h4,
  fontSize: '1.45rem',
  fontWeight: 700,
  paddingBottom: '0.5rem',
  borderBottom: '2px solid rgba(64, 96, 109, 0.18)',
};

const bubbleInner: CSSProperties = {
  borderLeft: '4px solid rgba(64, 96, 109, 0.55)',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
  padding: '1.25rem 1.25rem 1.3rem 1.45rem',
  borderRadius: '0 14px 14px 0',
  boxShadow: '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
};

const innerBubble: CSSProperties = {
  borderLeft: '3px solid rgba(64, 96, 109, 0.4)',
  background: 'rgba(255, 255, 255, 0.55)',
  padding: '1.1rem 1.1rem 1.15rem 1.3rem',
  borderRadius: '0 12px 12px 0',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
  marginTop: '0.35rem',
};

function ContentBubble({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="hcp-content-chunk-group" style={{ width: '100%' }}>
      <h4 style={chunkTitle}>{title}</h4>
      <div className="hcp-content-chunk-bubble" style={bubbleInner}>
        {children}
      </div>
    </div>
  );
}

const scheduleGrid: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  marginTop: '1.1rem',
};

const scheduleCard: CSSProperties = {
  flex: '1 1 280px',
  border: '2px solid rgba(64, 96, 109, 0.22)',
  borderRadius: '16px',
  padding: '1.15rem 1.25rem',
  background: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 12px rgba(64, 96, 109, 0.06)',
};

const scheduleLabel: CSSProperties = {
  margin: '0 0 0.35rem',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(64, 96, 109, 0.72)',
  direction: 'ltr',
  textAlign: 'left',
};

const scheduleVaccine: CSSProperties = {
  margin: '0 0 0.85rem',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#40606D',
  direction: 'ltr',
  textAlign: 'left',
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
  direction: 'ltr',
};

const stepList: CSSProperties = {
  ...list,
  marginBottom: 0,
  paddingLeft: '1.25rem',
};

const subheadingInCard: CSSProperties = {
  margin: '0 0 0.5rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#40606D',
  direction: 'ltr',
  textAlign: 'left',
};

const introCallout: CSSProperties = {
  padding: '0.9rem 1rem',
  borderRadius: '12px',
  background: 'rgba(64, 96, 109, 0.07)',
  border: '1px solid rgba(64, 96, 109, 0.15)',
};

function ClinicalNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '0.85rem 1rem',
        borderRadius: '12px',
        background: 'rgba(139, 115, 85, 0.1)',
        borderLeft: '4px solid rgba(139, 115, 85, 0.55)',
        direction: 'ltr',
        textAlign: 'left',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#5c4d3d', marginBottom: '0.35rem' }}>{title}</p>
      {children}
    </div>
  );
}

function ScheduleCard({
  label,
  vaccine,
  children,
}: {
  label: string;
  vaccine: string;
  children: ReactNode;
}) {
  return (
    <div style={scheduleCard}>
      <p style={scheduleLabel}>{label}</p>
      <p style={scheduleVaccine}>{vaccine}</p>
      {children}
    </div>
  );
}

function PneumococcalSchedules() {
  return (
    <div className="hcp-content-chunk-bubble" style={innerBubble}>
      <div style={introCallout}>
        <p className="about-lang-intro" style={{ ...para('0.55rem'), fontWeight: 600, color: '#40606D' }}>
          HSCT recipients are at particularly high risk for invasive pneumococcal disease.
        </p>
        <p className="about-lang-intro" style={para(0)}>
          Revaccination is recommended regardless of prior pneumococcal vaccination history.
        </p>
      </div>

      <div style={scheduleGrid}>
        <ScheduleCard label="Preferred Schedule" vaccine="PCV20">
          <span style={timingBadge}>Start 3–6 months after HSCT</span>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#40606D',
              direction: 'ltr',
              textAlign: 'left',
            }}
          >
            Four-dose series
          </p>
          <ol style={stepList}>
            <li>First three doses administered 4 weeks apart</li>
            <li>
              Fourth dose administered 6 months after the third dose or 1 year after HSCT, whichever occurs later
            </li>
          </ol>
        </ScheduleCard>

        <ScheduleCard label="Alternative Schedule" vaccine="PCV15">
          <p className="about-lang-intro" style={{ ...para('0.65rem'), fontSize: '0.95rem' }}>
            Three doses given 4 weeks apart
          </p>
          <p
            style={{
              margin: '0 0 0.45rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#40606D',
              direction: 'ltr',
              textAlign: 'left',
            }}
          >
            Followed by PPSV23
          </p>
          <ol style={stepList}>
            <li>1 year after the final PCV15 dose</li>
            <li>At least 4 weeks after the third PCV15 dose</li>
          </ol>
        </ScheduleCard>
      </div>

      <ClinicalNote title="GVHD note">
        <p className="about-lang-intro" style={para(0)}>
          For patients with GVHD, a fourth dose of PCV15 is recommended instead of PPSV23.
        </p>
      </ClinicalNote>
    </div>
  );
}

function SerologyNotRecommended() {
  return (
    <div className="hcp-content-chunk-bubble" style={innerBubble}>
      <div style={introCallout}>
        <p style={subheadingInCard}>Routine serological testing is not recommended for:</p>
        <ul style={{ ...stepList, marginBottom: 0 }}>
          <li>Diphtheria</li>
          <li>Tetanus</li>
          <li>Pertussis</li>
          <li>Hib</li>
          <li>Influenza</li>
          <li>Pneumococcal vaccines</li>
          <li>Poliomyelitis</li>
          <li>Varicella (post-vaccination)</li>
          <li>COVID-19 vaccines</li>
        </ul>
      </div>
    </div>
  );
}

function SerologyRecommended() {
  return (
    <div className="hcp-content-chunk-bubble" style={innerBubble}>
      <div style={introCallout}>
        <p style={subheadingInCard}>Assessment of vaccine response is recommended:</p>
        <ul style={{ ...stepList, marginBottom: 0 }}>
          <li>Hepatitis B: 4–6 weeks after completion of the vaccine series</li>
          <li>MMR: 4–6 weeks after the second dose</li>
        </ul>
      </div>

      <ClinicalNote title="Clinical use of results">
        <p className="about-lang-intro" style={para(0)}>
          Results may guide the need for additional vaccine doses.
        </p>
      </ClinicalNote>
    </div>
  );
}

function TravelExposureVaccines() {
  return (
    <>
      <div style={introCallout}>
        <p className="about-lang-intro" style={para()}>
          Some vaccines are not routinely indicated but may be required depending on travel plans, occupational exposure,
          or individual risk factors.
        </p>
        <p style={subheadingInCard}>These include:</p>
        <ul style={{ ...stepList, marginBottom: 0 }}>
          <li>Yellow fever vaccine</li>
          <li>Rabies vaccine</li>
          <li>Japanese encephalitis vaccine</li>
          <li>Tick-borne encephalitis vaccine</li>
          <li>Hepatitis A vaccine</li>
          <li>Typhoid vaccine</li>
        </ul>
      </div>

      <ClinicalNote title="Yellow fever revaccination">
        <p className="about-lang-intro" style={para(0)}>
          For individuals who received yellow fever vaccine before HSCT, revaccination may be required after transplantation
          when travel-related risk exists and immune competence has been restored.
        </p>
      </ClinicalNote>

      <ClinicalNote title="Specialist consultation">
        <p className="about-lang-intro" style={para(0)}>
          Specialist consultation is recommended before administering any travel-related vaccine to HSCT recipients.
        </p>
      </ClinicalNote>
    </>
  );
}

function MeningococcalSchedules() {
  return (
    <div className="hcp-content-chunk-bubble" style={innerBubble}>
      <div style={introCallout}>
        <p style={subheadingInCard}>Revaccination is recommended for:</p>
        <ul style={{ ...stepList, marginBottom: 0 }}>
          <li>Adolescents according to routine schedules</li>
          <li>Individuals with specific high-risk conditions</li>
        </ul>
      </div>

      <div style={{ ...scheduleGrid, marginTop: '1rem' }}>
        <ScheduleCard label="Vaccine types" vaccine="MenACWY & MenB">
          <p style={subheadingInCard}>This includes both:</p>
          <ul style={stepList}>
            <li>Meningococcal conjugate vaccines (MenACWY)</li>
            <li>Serogroup B meningococcal vaccines (MenB) when indicated.</li>
          </ul>
        </ScheduleCard>
      </div>
    </div>
  );
}

const HSCT_VACCINATION_PDF = '/hsct%20vaccination.pdf';
const AU_HSCT_TABLE_PDF = `/${encodeURIComponent(
  'Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook.pdf',
)}`;

function PdfEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div style={{ width: '100%', marginBottom: '2.5rem' }}>
      <h3
        style={{
          textAlign: 'left',
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#40606D',
          marginBottom: '1rem',
          direction: 'ltr',
          lineHeight: 1.45,
        }}
      >
        {title}
      </h3>
      <iframe
        src={src}
        width="100%"
        height="800px"
        style={{ border: 'none', borderRadius: '8px' }}
        title={title}
      />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a
          href={src}
          download
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: '#40606D',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
          }}
        >
          Download PDF / تحميل PDF
        </a>
      </div>
    </div>
  );
}

function PediatricOncologyConsensusCta() {
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
        direction: 'ltr',
      }}
    >
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          opacity: 0.92,
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.14)',
          border: '1px solid rgba(255, 255, 255, 0.28)',
        }}
      >
        Notable · Made for Egypt
      </span>
      <span style={{ fontSize: '2.25rem', lineHeight: 1, marginTop: '0.15rem' }} aria-hidden>
        🎗️
      </span>
      <span style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, maxWidth: '34rem' }}>
        Pediatric oncology after HSCT?
      </span>
      <span style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.55, opacity: 0.94, maxWidth: '36rem' }}>
        Read the expert consensus on re-immunization strategies built for pediatric oncology patients in Egypt.
      </span>
      <span
        style={{
          marginTop: '0.65rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          lineHeight: 1.45,
          opacity: 0.88,
          maxWidth: '38rem',
        }}
      >
        Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt
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
        Open the consensus guide →
      </span>
    </Link>
  );
}

function DtapSchedules() {
  return (
    <div className="hcp-content-chunk-bubble" style={innerBubble}>
      <div style={scheduleGrid}>
        <ScheduleCard label="Children &lt;7 Years" vaccine="DTaP">
          <p className="about-lang-intro" style={{ ...para(0), fontSize: '0.95rem' }}>
            Three-dose DTaP series
          </p>
        </ScheduleCard>

        <ScheduleCard label="Individuals ≥7 Years" vaccine="DTaP / Tdap / Td">
          <p style={subheadingInCard}>Acceptable schedules include:</p>
          <ul style={stepList}>
            <li>Three doses of DTaP</li>
            <li>One dose of Tdap followed by two doses of DT</li>
            <li>One dose of Tdap followed by two doses of Td</li>
          </ul>
        </ScheduleCard>
      </div>

      <ClinicalNote title="Preferred schedule">
        <p className="about-lang-intro" style={para(0)}>
          For previously unvaccinated patients older than 6 years, a schedule consisting of one dose of Tdap followed by
          two doses of Td is generally preferred.
        </p>
      </ClinicalNote>
    </div>
  );
}

export default function HaematopoieticStemCellTransplantRecipientsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">
          (Egyptian Edition)
        </p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div
              className="about-lang"
              style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                width: '100%',
              }}
            >
              <p style={{ margin: 0, textAlign: 'left' }}>
                <Link
                  href="/hcp-special-populations"
                  style={{ color: '#40606D', fontWeight: 600, textDecoration: 'none' }}
                >
                  ← Back to Special Populations
                </Link>
              </p>

              <ArticlePageTitle {...ARTICLE_META.hcpHematopoieticTransplants} titleStyle={{ fontSize: '2rem' }} locale="en">
                Haematopoietic stem cell transplant recipients
              </ArticlePageTitle>

              <ContentBubble title="Overview">
                <p className="about-lang-intro" style={para()}>
                  Recipients of haematopoietic stem cell transplants (HSCT) are at increased risk of vaccine-preventable
                  diseases due to prolonged immunosuppression and the loss of pre-existing immunity. Both autologous and
                  allogeneic HSCT recipients may lose protective immunity acquired through previous vaccination or natural
                  infection, making revaccination an essential component of post-transplant care.
                </p>
                <p className="about-lang-intro" style={para()}>
                  HSCT involves the administration of hematopoietic-ablative therapy followed by the infusion of stem cells
                  obtained either from the recipient (autologous transplant) or from a donor (allogeneic transplant). Stem
                  cells may be collected from:
                </p>
                <ul style={list}>
                  <li>Peripheral blood</li>
                  <li>Bone marrow</li>
                  <li>Umbilical cord blood</li>
                </ul>
                <p className="about-lang-intro" style={para(0)}>
                  Although autologous HSCT recipients generally recover immune function more rapidly than allogeneic
                  recipients, both groups require systematic revaccination after transplantation.
                </p>
              </ContentBubble>

              <ContentBubble title="Why Are HSCT Recipients Immunocompromised?">
                <p className="about-lang-intro" style={para()}>
                  Immunosuppression following HSCT results from several factors:
                </p>
                <ul style={list}>
                  <li>Conditioning chemotherapy and/or radiotherapy administered before transplantation</li>
                  <li>Graft-versus-host disease (GVHD) in allogeneic HSCT recipients</li>
                  <li>Immunosuppressive therapies used to prevent or treat GVHD</li>
                  <li>The underlying disease that necessitated transplantation</li>
                </ul>
                <p className="about-lang-intro" style={para(0)}>
                  As immune reconstitution occurs, immunologic memory from previous vaccinations gradually declines.
                  Antibody levels against vaccine-preventable diseases such as tetanus, poliovirus, measles, mumps, rubella,
                  and infections caused by encapsulated bacteria may decrease significantly within 1–4 years after
                  transplantation if revaccination is not performed.
                </p>
              </ContentBubble>

              <ContentBubble title="Special Considerations: Graft-versus-Host Disease (GVHD)">
                <p className="about-lang-intro" style={para()}>
                  Chronic GVHD is associated with persistent immune dysfunction and functional hyposplenism, resulting in
                  increased susceptibility to infections caused by encapsulated organisms, particularly{' '}
                  <em>Streptococcus pneumoniae</em>.
                </p>
                <p className="about-lang-intro" style={para()}>
                  Patients with chronic GVHD who remain on immunosuppressive therapy may also require antibiotic prophylaxis
                  in addition to vaccination.
                </p>
                <p className="about-lang-intro" style={para(0)}>
                  Because immune recovery varies substantially between individuals, recommendations regarding live vaccines
                  depend on the patient&apos;s degree of immune reconstitution and immunosuppressive status.
                </p>
              </ContentBubble>

              <ContentBubble title="General Principles of Vaccination After HSCT">
                <p className="about-lang-intro" style={para()}>
                  Current guidelines generally recommend the same revaccination schedule for both autologous and allogeneic
                  HSCT recipients regardless of:
                </p>
                <ul style={list}>
                  <li>Stem cell source</li>
                  <li>Conditioning regimen</li>
                  <li>Donor type</li>
                </ul>
                <p className="about-lang-intro" style={para()}>
                  Even patients who completed routine vaccinations before transplantation should be considered for
                  revaccination because protective immunity may be lost after HSCT.
                </p>
                <p className="about-lang-intro" style={para(0)}>
                  Most inactivated vaccines are restarted approximately 6 months after transplantation, although certain
                  vaccines may be initiated earlier in selected circumstances.
                </p>
              </ContentBubble>

              <ContentBubble title="Inactivated Vaccines After HSCT">
                <Sub title="Pneumococcal Vaccines" titleStyle={subTitleFeatured}>
                  <PneumococcalSchedules />
                </Sub>

                <Sub
                  title="Haemophilus influenzae Type b (Hib) Vaccine"
                  titleStyle={subTitleFeatured}
                >
                  <ul style={{ ...list, marginBottom: 0 }}>
                    <li>A three-dose Hib series is recommended beginning 6 months after transplantation.</li>
                    <li>Doses should be separated by at least 1 month.</li>
                    <li>This recommendation applies regardless of whether Hib vaccine was received before HSCT.</li>
                  </ul>
                </Sub>

                <Sub title="Diphtheria, Tetanus, and Pertussis Vaccines" titleStyle={subTitleFeatured}>
                  <DtapSchedules />
                </Sub>

                <Sub title="Influenza Vaccine" titleStyle={subTitleFeatured}>
                  <ul style={{ ...list, marginBottom: 0 }}>
                    <li>Annual influenza vaccination is recommended lifelong.</li>
                    <li>Routine administration should begin at least 6 months after HSCT.</li>
                    <li>Vaccination may be considered as early as 4 months after HSCT during influenza circulation.</li>
                    <li>If influenza vaccine is administered at 4 months post-transplant, a second dose should be considered.</li>
                    <li>
                      Children younger than 9 years receiving influenza vaccine for the first time should receive two doses
                      according to standard recommendations.
                    </li>
                    <li>Only inactivated influenza vaccines should be used.</li>
                  </ul>
                </Sub>

                <Sub title="Hepatitis B Vaccine" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para(0)}>
                    Revaccination against hepatitis B is recommended after HSCT. Because vaccine response may be impaired,
                    post-vaccination serologic testing should be performed approximately 4–6 weeks after completion of the
                    vaccine series to assess protection and determine whether additional doses are needed.
                  </p>
                </Sub>

                <Sub title="Hepatitis A Vaccine" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para(0)}>
                    Hepatitis A vaccine should be re-administered according to post-transplant vaccination recommendations and
                    may be particularly important for individuals at increased risk or those planning international travel.
                  </p>
                </Sub>

                <Sub title="Inactivated Polio Vaccine (IPV)" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para(0)}>
                    Revaccination with IPV is recommended because immunity to poliovirus may decline following transplantation.
                  </p>
                </Sub>

                <Sub title="Meningococcal Vaccines" titleStyle={subTitleFeatured}>
                  <MeningococcalSchedules />
                </Sub>

                <Sub title="Human Papillomavirus (HPV) Vaccine" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para()}>HPV vaccination should be administered according to age-based recommendations:</p>
                  <ul style={{ ...list, marginBottom: 0 }}>
                    <li>Routine vaccination for individuals aged 9–26 years</li>
                    <li>Adults aged 27–45 years based on shared clinical decision-making</li>
                  </ul>
                </Sub>

                <Sub title="Recombinant Zoster Vaccine (RZV)" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para()}>RZV may be administered after immune recovery:</p>
                  <ul style={list}>
                    <li>6–12 months after allogeneic HSCT</li>
                    <li>3–12 months after autologous HSCT</li>
                  </ul>
                  <p className="about-lang-intro" style={para(0)}>
                    Ideally, vaccination should be completed approximately 2 months before discontinuation of antiviral
                    prophylaxis when such therapy is being used.
                  </p>
                </Sub>
              </ContentBubble>

              <ContentBubble title="Live Vaccines After HSCT">
                <p className="about-lang-intro" style={para()}>
                  Live vaccines should not be administered routinely during the first 24 months after HSCT.
                </p>
                <p className="about-lang-intro" style={para()}>
                  Live vaccines may be considered only if all of the following conditions are met:
                </p>
                <ul style={list}>
                  <li>At least 24 months have elapsed since transplantation</li>
                  <li>No active GVHD is present</li>
                  <li>The patient is no longer receiving immunosuppressive therapy</li>
                  <li>Adequate immune reconstitution has occurred</li>
                </ul>
                <Sub title="Measles, Mumps, and Rubella (MMR)" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para(0)}>
                    MMR vaccine may be administered under the above conditions. Serologic testing is recommended approximately
                    4–6 weeks after the second dose because antibody levels may guide the need for additional vaccination.
                  </p>
                </Sub>
                <Sub title="Varicella Vaccine" titleStyle={subTitleFeatured}>
                  <p className="about-lang-intro" style={para(0)}>
                    Varicella vaccine may be considered when the same eligibility criteria for live vaccines are met.
                    Post-vaccination varicella serology is not recommended because currently available commercial assays are
                    insufficiently sensitive to detect vaccine-induced immunity.
                  </p>
                </Sub>
              </ContentBubble>

              <ContentBubble title="Vaccines Not Recommended After HSCT">
                <p className="about-lang-intro" style={para()}>
                  The following live vaccines are generally contraindicated after HSCT:
                </p>
                <ul style={list}>
                  <li>Bacillus Calmette–Guérin (BCG)</li>
                  <li>Live attenuated influenza vaccine (LAIV)</li>
                  <li>Oral typhoid vaccine</li>
                  <li>Rotavirus vaccine</li>
                </ul>
                <p className="about-lang-intro" style={para(0)}>
                  These vaccines should not be administered to HSCT recipients.
                </p>
              </ContentBubble>

              <ContentBubble title="Travel and Exposure-Based Vaccines">
                <TravelExposureVaccines />
              </ContentBubble>

              <ContentBubble title="Serological Testing After Vaccination">
                <Sub title="Serological Testing Recommended" titleStyle={subTitleFeatured}>
                  <SerologyRecommended />
                </Sub>
                <Sub title="Serological Testing Not Routinely Recommended" titleStyle={subTitleFeatured}>
                  <SerologyNotRecommended />
                </Sub>
              </ContentBubble>

              <ContentBubble title="Donor Vaccination">
                <p className="about-lang-intro" style={para()}>
                  Vaccination of stem cell donors before stem cell collection has been shown to improve early antibody
                  responses in recipients for certain vaccines, including:
                </p>
                <ul style={list}>
                  <li>Hepatitis B</li>
                  <li>Tetanus</li>
                  <li>Hib</li>
                  <li>Pneumococcal conjugate vaccines</li>
                </ul>
                <p className="about-lang-intro" style={para(0)}>
                  However, practical, logistical, and ethical considerations often limit routine implementation of donor
                  immunization strategies.
                </p>
              </ContentBubble>

              <Section title="Key Clinical Points" variant="key">
                <ul style={{ ...list, marginBottom: 0 }}>
                  <li>Protective immunity is frequently lost after both autologous and allogeneic HSCT.</li>
                  <li>Revaccination is recommended regardless of vaccination history before transplantation.</li>
                  <li>Most inactivated vaccines are restarted approximately 6 months after HSCT.</li>
                  <li>Pneumococcal vaccination is a high priority because of the increased risk of invasive disease.</li>
                  <li>
                    Live vaccines should not be administered until at least 24 months after HSCT and only in immunocompetent
                    patients without GVHD or ongoing immunosuppression.
                  </li>
                  <li>Serologic testing is particularly useful following hepatitis B and MMR vaccination.</li>
                  <li>Lifelong annual influenza vaccination is recommended.</li>
                  <li>Travel-related vaccination should be individualized according to destination and immune status.</li>
                </ul>
              </Section>

              <ContentBubble title="References">
                <ul style={{ ...list, marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.9 }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    Centers for Disease Control and Prevention. Best Practices Guidance — Vaccination of persons who have
                    altered immunocompetence.{' '}
                    <a
                      href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#40606D', fontWeight: 600, textDecoration: 'underline', wordBreak: 'break-word' }}
                    >
                      https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html
                    </a>
                  </li>
                  <li>
                    Australian Government Department of Health and Aged Care. Table. Recommendations for vaccination after
                    haematopoietic stem cell transplant in children and adults.{' '}
                    <a
                      href="https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-after-haematopoietic-stem-cell-transplant-in-children-and-adults"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#40606D', fontWeight: 600, textDecoration: 'underline', wordBreak: 'break-word' }}
                    >
                      https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-after-haematopoietic-stem-cell-transplant-in-children-and-adults
                    </a>
                  </li>
                </ul>
              </ContentBubble>

              <PediatricOncologyConsensusCta />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div
              className="about-lang"
              style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              <div style={{ width: '100%', marginBottom: '2.5rem' }}>
                <img
                  src="/Untitled%20design.png"
                  alt="HSCT vaccination infographic"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(64, 96, 109, 0.15)',
                  }}
                />
              </div>
              <PdfEmbed src={HSCT_VACCINATION_PDF} title="HSCT vaccination" />
              <PdfEmbed
                src={AU_HSCT_TABLE_PDF}
                title="Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I&apos;m always looking for new and exciting opportunities. Let&apos;s connect.
              </p>

              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=100064747760120"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/walaa-adel-895009369"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@VaccineTalk"
                  className="social-link"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3"
                  className="social-link"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p>
            <p className="copyright-text">Content is original and may not be copied without permission.</p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">
              Copyright & Content Policy
            </a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">
              حقوق النشر والاستخدام
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
