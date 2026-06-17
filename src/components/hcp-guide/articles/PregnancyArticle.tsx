import type { ReactNode } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'flu', label: 'Flu vaccine' },
  { id: 'tdap', label: 'Tdap vaccine' },
  { id: 'rsv', label: 'RSV vaccine' },
  { id: 'live-contraindicated', label: 'Live vaccines' },
  { id: 'mmr', label: 'MMR vaccine' },
  { id: 'varicella', label: 'Varicella vaccine' },
  { id: 'conclusion', label: 'Conclusion' },
] as const;

const prose: React.CSSProperties = {
  direction: 'ltr',
  textAlign: 'left',
  lineHeight: 1.75,
  fontSize: '1rem',
  color: 'rgba(45, 42, 38, 0.92)',
};

const p = (mb = '0.95rem'): React.CSSProperties => ({ marginBottom: mb });

const listStyle: React.CSSProperties = {
  margin: '0 0 0.95rem 1.25rem',
  paddingInlineStart: '0.25rem',
};

const listItemStyle: React.CSSProperties = { marginBottom: '0.35rem' };

const PREGNANCY_PDF = '/pregnancy.pdf';
const MATERNAL_IMMUNIZATION_SCHEDULE_PDF = '/maternal-immunization-schedule.pdf';
const ABRYSVO_PREGNANCY_PDF = encodeURI('/abrysvo during pregnancy.pdf');
const TDAP_PREGNANCY_PDF = encodeURI('/dtap during pregnancy.pdf');

function ContentChunk({
  title,
  accent,
  children,
}: {
  title: string;
  accent: 'sage' | 'slate';
  children: ReactNode;
}) {
  const border =
    accent === 'sage'
      ? '4px solid rgba(64, 96, 109, 0.55)'
      : '4px solid rgba(139, 115, 85, 0.45)';
  const titleColor = accent === 'sage' ? '#40606D' : '#5c4d3d';
  const underline =
    accent === 'sage' ? 'rgba(64, 96, 109, 0.18)' : 'rgba(139, 115, 85, 0.2)';

  return (
    <div className="hcp-content-chunk-group" style={{ width: '100%' }}>
      <h4
        style={{
          color: titleColor,
          fontSize: '1.45rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: '0 0 0.65rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${underline}`,
          lineHeight: 1.35,
        }}
      >
        {title}
      </h4>
      <div
        className="hcp-content-chunk-bubble"
        style={{
          borderLeft: border,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
          padding: '1.25rem 1.25rem 1.3rem 1.45rem',
          borderRadius: '0 14px 14px 0',
          boxShadow:
            '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
        }}
      >
        <div style={prose}>{children}</div>
      </div>
    </div>
  );
}

export default function PregnancyArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpPregnancy"
      title="Pregnancy"
      emoji="🤰"
      lead="Vaccines before, during, and after pregnancy to protect mothers and their babies from serious vaccine-preventable diseases."
      toc={[...TOC]}
    >
      <div className="hcp-guide-hsct" style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', width: '100%' }}>
        <div id="overview">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.35rem',
                  width: '100%',
                }}
              >
                <ContentChunk title="Overview" accent="sage">
                  <p style={p()}>
                    Certain vaccines are safe and recommended for women before, during, and after
                    pregnancy to help keep them and their babies healthy. The antibodies mothers
                    develop in response to these vaccines not only protect them, but also cross the
                    placenta and help protect their babies from serious diseases early in life.
                    Vaccinating during pregnancy also helps protect a mother from getting a serious
                    disease and then giving it to her newborn.
                  </p>
                </ContentChunk>

                <ContentChunk title="Flu vaccine" accent="slate">
                  <p style={p()}>
                    During pregnancy, your immune system (the body&apos;s natural defence) is weakened
                    to protect the pregnancy. This can mean you&apos;re less able to fight off infections
                    such as flu.
                  </p>
                  <p style={p()}>
                    Pregnant women are more likely to get flu complications (such as pneumonia) than
                    women who are not pregnant, and are more likely to be admitted to hospital. CDC
                    recommends getting vaccinated by the end of October. Getting the flu vaccine
                    during pregnancy is one of the best ways to protect yourself and your baby for
                    several months after birth from flu-related complications.
                  </p>
                </ContentChunk>

                <ContentChunk title="Tdap vaccine" accent="sage">
                  <p style={p()}>
                    Pregnant women are also encouraged to get the Tdap vaccine at any time during
                    pregnancy, but optimally between 27 and 36 weeks of each pregnancy, to protect
                    yourself and your baby from pertussis, also known as whooping cough. This vaccine
                    is recommended during every pregnancy, regardless of how long it has been since
                    you previously received the Tdap vaccine.
                  </p>
                  <p style={p('0')}>
                    If you did not get a Tdap vaccine during your pregnancy and have never gotten it,
                    CDC recommends that you get the vaccine immediately after giving birth.
                  </p>
                </ContentChunk>

                <ContentChunk title="Respiratory syncytial virus (RSV) vaccine" accent="slate">
                  <p style={p()}>
                    Respiratory syncytial virus (RSV) is a common virus that causes coughs and colds.
                    RSV usually gets better by itself, but it can be serious for babies.
                  </p>
                  <p style={p()}>
                    RSV can cause serious lung infections (including pneumonia and bronchiolitis),
                    which can make it difficult for babies to breathe and feed. These illnesses may
                    need to be treated in hospital.
                  </p>
                  <p style={p()}>
                    When you have the RSV vaccine in pregnancy, the protection from the vaccine is
                    passed to your baby. This means your baby is less likely to get severe RSV for
                    the first 6 months after they&apos;re born.
                  </p>
                  <p style={p('0')}>
                    You should be offered the RSV vaccine around the time of your 28-week antenatal
                    appointment. Getting vaccinated as soon as possible from 28 weeks will provide
                    the best protection for your baby. But it can be given later if needed, including
                    up until you go into labour.
                  </p>
                </ContentChunk>

                <ContentChunk title="Vaccines not usually advised in pregnancy (live vaccines)" accent="sage">
                  <p style={p()}>
                    If a vaccine uses a live version of the virus, such as the MMR vaccine, you&apos;ll
                    usually be advised to wait until after your baby is born before you get
                    vaccinated. Live vaccines include:
                  </p>
                  <ul style={listStyle}>
                    <li style={listItemStyle}>BCG (vaccination against tuberculosis)</li>
                    <li style={listItemStyle}>MMR (measles, mumps and rubella)</li>
                    <li style={listItemStyle}>oral typhoid</li>
                    <li style={listItemStyle}>yellow fever</li>
                  </ul>
                </ContentChunk>

                <ContentChunk title="Measles-mumps-rubella (MMR) vaccine" accent="slate">
                  <p style={p()}>
                    Wild-type rubella infection might result in spontaneous abortion, stillbirth,
                    and, of most concern, congenital rubella syndrome (CRS), with its hallmark
                    characteristics of sensorineural deafness, congenital heart defects, microcephaly,
                    learning difficulties, and eye and bone defects. Measles infection in pregnancy
                    might result in substantial maternal morbidity, an increased abortion rate,
                    prematurity, stillbirth, and possibly congenital malformations. The data for mumps
                    infection are not consistent, with some studies showing a possible increased rate
                    of spontaneous abortion.
                  </p>
                  <p style={p()}>
                    There have been no reports of congenital malformations attributable to the MMR
                    vaccine virus. The Centers for Disease Control and Prevention (CDC) estimated the
                    theoretical risk to the fetus of CRS following vaccination with the rubella
                    vaccine to be 0% to 1.6%.
                  </p>
                  <p style={p('0')}>
                    In 1971, the CDC established the Vaccine in Pregnancy registry of women who had
                    received rubella vaccines within 3 months before or after conception. By 1989
                    there were data on 1221 inadvertently vaccinated pregnant women. There was no
                    evidence of an increase in fetal abnormalities or cases of CRS in the enrolled
                    women or the 321 rubella-susceptible women; therefore, enrolment in the registry
                    ended.
                  </p>
                </ContentChunk>

                <ContentChunk title="Varicella vaccine" accent="sage">
                  <p style={p()}>
                    Varicella virus infection during pregnancy is associated with a risk of congenital
                    varicella syndrome, characterized by low birth weight, skin scarring,
                    ophthalmologic defects, limb hypoplasia of bone and muscle, neuropathic bladder,
                    and gastrointestinal and neurologic abnormalities.
                  </p>
                  <p style={p('0')}>
                    There are no reports of congenital varicella syndrome after exposure to varicella
                    vaccine during pregnancy. A registry was established by the manufacturer in
                    collaboration with the CDC to monitor maternal and fetal outcomes of women who
                    were inadvertently immunized with varicella vaccine in the 3 months before
                    conception or at any time during pregnancy. Among the 737 women with pregnancy
                    outcomes available, there were no patterns of defects and no infants were born
                    with features consistent with congenital varicella syndrome among any of the
                    women enrolled or among the seronegative women.
                  </p>
                </ContentChunk>

                <ContentChunk title="Conclusion" accent="slate">
                  <p style={p('0')}>
                    Exposure to either live or inactive vaccines during pregnancy has not been
                    associated with an increased risk of adverse pregnancy outcomes, and no child to
                    date has been born with CRS or varicella syndrome following rubella or varicella
                    vaccination of the mother anytime during pregnancy. However, despite this
                    evidence-based information, these vaccines remain contraindicated during
                    pregnancy, and the Public Health Agency of Canada and the ACIP continue to
                    recommend that women avoid becoming pregnant for approximately 1 month following
                    vaccination. They do state that if pregnant women are exposed to these vaccines or
                    if pregnancy occurs soon after vaccination, the women should be counseled
                    regarding the theoretical risks to the fetus and vaccination should not be a
                    reason to consider termination of pregnancy.
                  </p>
                </ContentChunk>
              </div>
        </div>
      </div>

      <HcpGuideReferences
        references={[
          {
            citation: 'NHS — Vaccinations in pregnancy.',
            href: 'https://www.nhs.uk/pregnancy/keeping-well/vaccinations/',
          },
          {
            citation: 'CDC — Vaccine safety: Vaccines during and after pregnancy.',
            href: 'https://www.cdc.gov/vaccine-safety/about/pregnancy.html',
          },
          {
            citation: 'PMC3093587 — Vaccination during pregnancy (PubMed Central).',
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3093587/',
          },
        ]}
      />

      <HcpGuidePdfEmbed title="Maternal immunization schedule — PDF" src={MATERNAL_IMMUNIZATION_SCHEDULE_PDF} />
      <HcpGuidePdfEmbed title="Pregnancy — PDF" src={PREGNANCY_PDF} />
      <HcpGuidePdfEmbed title="Abrysvo during pregnancy — PDF" src={ABRYSVO_PREGNANCY_PDF} />
      <HcpGuidePdfEmbed title="Tdap during pregnancy — PDF" src={TDAP_PREGNANCY_PDF} />
    </HcpGuidePageLayout>
  );
}
