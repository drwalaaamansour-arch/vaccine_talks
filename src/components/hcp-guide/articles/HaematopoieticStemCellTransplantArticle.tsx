import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

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

const HSCT_TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'immunocompromised', label: 'Why immunocompromised' },
  { id: 'gvhd', label: 'GVHD considerations' },
  { id: 'general-principles', label: 'General principles' },
  { id: 'inactivated', label: 'Inactivated vaccines' },
  { id: 'live', label: 'Live vaccines' },
  { id: 'not-recommended', label: 'Not recommended' },
  { id: 'travel', label: 'Travel vaccines' },
  { id: 'serology', label: 'Serological testing' },
  { id: 'donor', label: 'Donor vaccination' },
  { id: 'key-points', label: 'Key clinical points' },
  { id: 'references', label: 'References' },
  { id: 'resources', label: 'PDFs & resources' },
] as const;

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

export default function HaematopoieticStemCellTransplantArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpHematopoieticTransplants"
      title="Haematopoietic stem cell transplant recipients"
      emoji="🩺"
      lead="Revaccination guidance for autologous and allogeneic HSCT recipients — inactivated schedules, live vaccine timing, serology, and travel vaccines."
      toc={[...HSCT_TOC]}
    >
      <div
        className="hcp-guide-hsct"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
        }}
      >
        <div id="overview">
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
        </div>

        <div id="immunocompromised">
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
        </div>

        <div id="gvhd">
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
        </div>

        <div id="general-principles">
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
        </div>

        <div id="inactivated">
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
        </div>

        <div id="live">
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
        </div>

        <div id="not-recommended">
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
        </div>

        <div id="travel">
              <ContentBubble title="Travel and Exposure-Based Vaccines">
                <TravelExposureVaccines />
              </ContentBubble>
        </div>

        <div id="serology">
              <ContentBubble title="Serological Testing After Vaccination">
                <Sub title="Serological Testing Recommended" titleStyle={subTitleFeatured}>
                  <SerologyRecommended />
                </Sub>
                <Sub title="Serological Testing Not Routinely Recommended" titleStyle={subTitleFeatured}>
                  <SerologyNotRecommended />
                </Sub>
              </ContentBubble>
        </div>

        <div id="donor">
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
        </div>

        <div id="key-points">
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
        </div>

        <HcpGuideReferences
          id="references"
          references={[
            {
              citation:
                'CDC — Best Practices Guidance: Vaccination of persons who have altered immunocompetence.',
              href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
            },
            {
              citation:
                'Australian Immunisation Handbook — Table: Recommendations for vaccination after haematopoietic stem cell transplant in children and adults.',
              href: 'https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-after-haematopoietic-stem-cell-transplant-in-children-and-adults',
            },
          ]}
        />

        <PediatricOncologyConsensusCta />

        <div id="resources">
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
          <HcpGuidePdfEmbed src={HSCT_VACCINATION_PDF} title="HSCT vaccination" />
          <HcpGuidePdfEmbed
            src={AU_HSCT_TABLE_PDF}
            title="Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook"
          />
        </div>
      </div>
    </HcpGuidePageLayout>
  );
}
