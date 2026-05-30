import type { ReactNode } from 'react';
import Header from '@/components/Header';
import ArticlePageTitle from '@/components/ArticlePageTitle';
import { ARTICLE_META } from '@/lib/article-meta';

const prose: React.CSSProperties = {
  direction: 'ltr',
  textAlign: 'left',
  lineHeight: 1.75,
  fontSize: '1rem',
  color: 'rgba(45, 42, 38, 0.92)',
};

const p = (mb = '0.95rem'): React.CSSProperties => ({ marginBottom: mb });

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

  return (
    <div
      style={{
        borderLeft: border,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
        padding: '1.35rem 1.25rem 1.4rem 1.45rem',
        borderRadius: '0 14px 14px 0',
        boxShadow: '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
      }}
    >
      <h4
        style={{
          color: titleColor,
          fontSize: '1.12rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: '0 0 0.9rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${accent === 'sage' ? 'rgba(64, 96, 109, 0.18)' : 'rgba(139, 115, 85, 0.2)'}`,
          lineHeight: 1.35,
        }}
      >
        {title}
      </h4>
      <div style={prose}>{children}</div>
    </div>
  );
}

export default function GeneralPrinciplesPage() {
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
            <div className="about-lang hcp-content-column">
              <ArticlePageTitle
                {...ARTICLE_META.hcpAlteredImmunocompetenceGeneral}
                titleStyle={{ fontSize: '2rem' }}
               locale="en">
                General Principles
              </ArticlePageTitle>

              <div
                className="about-lang-intro"
                style={{
                  direction: 'ltr',
                  textAlign: 'left',
                  maxWidth: '100%',
                  marginBottom: 0,
                  lineHeight: 1.75,
                }}
              >
                <p style={{ marginBottom: '1.1rem' }}>
                  Altered immunocompetence, a term often used synonymously with immunosuppression, immunodeficiency,
                  and immunocompromise, can be classified as primary or secondary.
                </p>

                <p style={{ marginBottom: '0.65rem' }}>
                  <strong>Primary immunodeficiencies</strong> generally are inherited and include conditions defined by
                  an inherent absence or quantitative deficiency of cellular, humoral, or both components that provide
                  immunity. Examples include congenital immunodeficiency diseases such as:
                </p>
                <ul style={{ margin: '0 0 1.1rem 1.25rem', paddingInlineStart: '0.25rem' }}>
                  <li style={{ marginBottom: '0.35rem' }}>X-linked agammaglobulinemia</li>
                  <li style={{ marginBottom: '0.35rem' }}>SCID</li>
                  <li style={{ marginBottom: '0.35rem' }}>Chronic granulomatous disease</li>
                </ul>

                <p style={{ marginBottom: '0.65rem' }}>
                  <strong>Secondary immunodeficiency</strong> is acquired and is defined by loss or qualitative deficiency
                  in cellular or humoral immune components that occurs as a result of a disease process or its therapy.
                  Examples of secondary immunodeficiency include:
                </p>
                <ul style={{ margin: '0 0 1.1rem 1.25rem', paddingInlineStart: '0.25rem' }}>
                  <li style={{ marginBottom: '0.35rem' }}>HIV infection</li>
                  <li style={{ marginBottom: '0.35rem' }}>Hematopoietic malignancies</li>
                  <li style={{ marginBottom: '0.35rem' }}>Treatment with radiation</li>
                  <li style={{ marginBottom: '0.35rem' }}>Treatment with immunosuppressive drugs</li>
                </ul>
                <p style={{ marginBottom: '1.1rem' }}>
                  The degree to which immunosuppressive drugs cause clinically significant immunodeficiency generally is
                  dose related and varies by drug.
                </p>

                <p style={{ marginBottom: '1.1rem' }}>
                  Primary and secondary immunodeficiencies might include a combination of deficits in both cellular and
                  humoral immunity.
                </p>

                <p style={{ marginBottom: '1.1rem' }}>
                  Certain conditions like asplenia and chronic renal disease also can cause altered immunocompetence.
                </p>

                <p style={{ marginBottom: 0 }}>
                  Determination of altered immunocompetence is important to the vaccine provider because incidence or
                  severity of some vaccine-preventable diseases is higher in persons with altered immunocompetence.
                </p>
              </div>

              <h3
                className="about-lang-title"
                style={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  alignSelf: 'center',
                  marginTop: '2.25rem',
                  marginBottom: '1.25rem',
                  lineHeight: 1.35,
                  fontWeight: 600,
                  color: '#40606D',
                }}
              >
                Vaccine safety and effectiveness in altered immunocompetence patients.
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
                  <ContentChunk title="Non-live Vaccines: Safety" accent="sage">
                    <p style={p()}>
                      All non-live vaccines can be administered safely to persons with altered immunocompetence,
                      whether the vaccine is a killed whole-organism or a recombinant, subunit, split-virus, toxoid,
                      polysaccharide, or polysaccharide protein-conjugate vaccine.
                    </p>
                  </ContentChunk>

                  <ContentChunk title="Non-live Vaccines: Effectiveness" accent="sage">
                    <p style={p()}>
                      Except for inactivated influenza vaccine, vaccination during chemotherapy or radiation therapy
                      should be avoided if possible because antibody response might be suboptimal. Patients vaccinated
                      within a 14-day period before starting immunosuppressive therapy or while receiving immunosuppressive
                      therapy should be considered unimmunized and should be revaccinated at least 3 months after therapy
                      is discontinued if immune competence has been restored.
                    </p>
                    <p style={p()}>
                      Patients who have quantitative B-cell deficiencies and are receiving immunoglobulin therapy should
                      not receive either non-live or live vaccines while receiving the immunoglobulin therapy because of
                      concerns about effectiveness of the vaccines.
                    </p>
                    <p style={p()}>
                      Patients on chemotherapy with anti-B cell antibodies (e.g., rituximab) should wait at least 6
                      months after therapy before being vaccinated with non-live vaccines. Some experts recommended
                      longer than 6 months for some anti-B cell antibodies.
                    </p>
                    <p style={p('0')}>
                      For other forms of altered immunocompetence, if non-live vaccines are indicated, the usual
                      schedules are recommended. However, the effectiveness of such vaccinations might be suboptimal.
                    </p>
                  </ContentChunk>
                </div>

                <ContentChunk title="Live, Attenuated Viral and Bacterial Vaccines: Effectiveness" accent="slate">
                  <p style={p('0')}>
                    The same rationale regarding effectiveness that exists with non-live vaccines also exists with live
                    vaccines.
                  </p>
                </ContentChunk>

                <ContentChunk title="Live, Attenuated Viral and Bacterial Vaccines: Safety" accent="slate">
                    <p style={p()}>
                      Severe complications have followed vaccination with certain live, attenuated viral and live,
                      attenuated bacterial vaccines among persons with altered immunocompetence.
                    </p>
                    <p style={p()}>
                      Persons with most forms of altered immunocompetence should not receive live vaccines (MMR,
                      varicella, MMRV, LAIV, yellow fever, Ty21a oral typhoid, BCG, smallpox, and rotavirus). However,
                      exceptions exist, and are discussed in this section. Patients with any defect in phagocytic
                      function (e.g., chronic granulomatous disease, leukocyte adhesion deficiency, myeloperoxidase
                      deficiency, Chediak-Higashi syndrome) should NOT receive live bacterial vaccines.
                    </p>
                    <p style={p()}>
                      Patients with a specific type of defect in phagocytic function—chronic granulomatous disease—should
                      receive recommended live attenuated viral vaccines in addition to non-live vaccines but should NOT
                      receive live bacterial vaccines.
                    </p>
                    <p style={p()}>
                      Patients with defects in phagocytic function that are undefined or known to be accompanied by
                      defects in T-cell and natural killer cell function (e.g., leukocyte adhesion deficiency,
                      myeloperoxidase deficiency, Chediak-Higashi syndrome) should NOT receive live attenuated viral or
                      bacterial vaccines. These conditions include specific deficits in T-cell and natural killer cell
                      function, reducing the response to live viral vaccine antigens to an extent not seen in chronic
                      granulomatous disease.
                    </p>
                    <p style={p()}>
                      Children with deficiencies in complement should receive recommended live, attenuated viral and
                      live, attenuated bacterial vaccines.
                    </p>
                    <p style={p()}>
                      Children with asplenia should not receive LAIV, but can receive recommended live, attenuated viral
                      and live, attenuated bacterial vaccines.
                    </p>
                    <p style={p()}>
                      Persons with severe cell-mediated immunodeficiency should not receive live, attenuated viral or
                      bacterial vaccines.
                    </p>
                    <p style={p()}>
                      Patients with defects of the interferon-gamma/interleukin-12 axis should not receive live bacterial
                      vaccines. Patients with deficiencies of interferon-gamma or interferon-alpha should not receive live
                      viral or live bacterial vaccine. These defects involve a deficiency in cytokine production which
                      affects the immune response to a wide scope of antigens, both bacterial and viral.
                    </p>
                    <p style={p()}>
                      Two factors support vaccination of HIV-exposed or HIV-infected infants with rotavirus vaccines: 1)
                      the HIV diagnosis might not be established in infants born to HIV-infected mothers before the age of
                      the first rotavirus vaccine dose (only 1.5%-3% of HIV-exposed infants in the United States will be
                      determined to be HIV-infected), and 2) the vaccine strains of rotavirus are considerably
                      attenuated.
                    </p>
                    <p style={p()}>
                      Patients taking exogenous interferon as therapy should not receive live bacterial or live viral
                      vaccines.
                    </p>
                    <p style={p()}>
                      Children with HIV infection are at increased risk for complications from varicella and herpes zoster
                      infection compared with immunocompetent children. Limited data among HIV-infected children younger
                      than 8 years (specifically, those individuals with CDC class N, A, or B with age-specific CD4+
                      T-lymphocyte percentages of ≥15%) indicate that single-component varicella vaccine is immunogenic,
                      effective, and safe. Data on use of varicella vaccine in HIV-infected adolescents and adults are
                      lacking. However, on the basis of expert opinion, the safety of varicella vaccine in HIV-infected
                      persons older than 8 years with comparable levels of immune function (CD4+ T-lymphocyte count
                      greater than 200 cells/mm<sup>3</sup>) is likely to be similar to that of children aged younger
                      than 8 years. Varicella vaccine should be considered for persons who meet these criteria. Eligible
                      HIV-infected persons 12 months of age or older should receive 2 doses of single-component varicella
                      vaccine with a 3-month interval between doses. MMRV vaccine should not be administered to any
                      HIV-infected person.
                    </p>
                    <p style={p()}>
                      Persons with HIV infection are at increased risk for severe complications if infected with
                      measles. No severe or unusual adverse events have been reported after measles vaccination among
                      HIV-infected persons who did not have evidence of severe immunosuppression. Two doses of MMR vaccine
                      are recommended for all HIV-infected individuals aged ≥12 months who do not have evidence of current
                      severe immunosuppression (i.e., individuals aged ≤5 years must have CD4+ T lymphocyte [CD4+]
                      percentages ≥15% for ≥6 months, and individuals aged &gt;5 years must have CD4+ percentages ≥15%
                      and CD4+ ≥200 lymphocytes/mm<sup>3</sup> for ≥6 months) and do not have current evidence of measles,
                      rubella, and mumps immunity. In cases when only CD4+ cell counts or only CD4+ percentages are
                      available for those &gt;5 years, the assessment of severe immunosuppression can be based on the
                      CD4+ values (count or percentage) that are available. In cases when CD4+ percentages are not
                      available for those aged ≤5 years, the assessment of severe immunosuppression can be based on
                      age-specific CD4+ counts at the time CD4+ counts were measured; i.e., absence of severe
                      immunosuppression is defined as ≥6 months above age-specific CD4+ count criteria: CD4+ count &gt;750
                      lymphocytes/mm<sup>3</sup> while aged ≤12 months and CD4+ count ≥500 lymphocytes/mm<sup>3</sup>{' '}
                      while aged 1 through 5 years. Similarly, repeat doses of MMR vaccination are recommended for
                      individuals with perinatal HIV infection who were vaccinated prior to establishment of effective
                      combination antiretroviral therapy (cART). They should receive 2 appropriately spaced doses of MMR
                      vaccine once effective cART has been established (individuals aged ≤5 years must have CD4+
                      percentages ≥15% for ≥6 months; individuals aged &gt;5 years must have CD4+ percentages ≥15% and
                      CD4+ ≥200 lymphocytes/mm<sup>3</sup> for ≥6 months) unless they have other acceptable current
                      evidence of measles, rubella, and mumps immunity.
                    </p>
                    <p style={p()}>
                      HIV-infected persons who are receiving regular doses of IGIV are unlikely to respond to varicella
                      vaccine or MMR vaccine because of the continued presence of passively acquired antibody. However,
                      because of the potential benefit, MMR and varicella vaccines should be considered approximately 14
                      days before the next scheduled dose of IGIV (if not otherwise contraindicated), although an optimal
                      immune response might not occur depending on the presence of neutralizing antibodies against the
                      vaccine virus. Vaccination should be repeated (if not otherwise contraindicated) after the
                      recommended interval. In most cases, this is after the therapy has been discontinued.
                    </p>
                    <p style={p()}>
                      Patients with leukemia, lymphoma, or other malignancies whose disease is in remission, who have
                      restored immunocompetence, and whose chemotherapy has been discontinued for at least 3 months can
                      receive live-virus vaccines. Persons with impaired humoral immunity (e.g., hypogammaglobulinemia or
                      dysgammaglobulinemia) may be vaccinated with varicella vaccine. However, most persons with these
                      disorders also receive periodic doses of IGIV. Appropriate spacing should be maintained between
                      administration of IGIV and varicella vaccine in an attempt to prevent an inadequate response to
                      vaccination caused by the presence of neutralizing antibodies from the IGIV.
                    </p>
                    <p style={p('0')}>
                      Zoster incidence is higher in persons with altered immunocompetence. Adults with most types of
                      altered immunocompetence are expected to maintain residual immunity to varicella-zoster virus
                      because of chronic latent infection that protects against primary varicella but provides incomplete
                      protection against zoster. Zoster vaccine is not recommended in persons with primary or acquired
                      immunodeficiency (e.g., lymphoma, leukemia, tumors involving bone marrow, and patients receiving
                      chemotherapy) and some HIV infected patients. Zoster vaccine may be administered to certain persons
                      age 50 or older with altered immunocompetence, such as persons receiving low dosages of
                      immunosuppressive medications, those with isolated B-cell deficiencies (i.e., impaired humoral
                      immunity), or those with HIV infection who have CD4+ T-lymphocyte counts &gt;200 cells/mm
                      <sup>3</sup>.
                    </p>
                </ContentChunk>
              </div>

              <aside
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.35rem',
                  borderTop: '1px solid rgba(64, 96, 109, 0.2)',
                  direction: 'ltr',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#40606D',
                  }}
                >
                  Reference
                </p>
                <p style={{ margin: 0, lineHeight: 1.65, fontSize: '0.95rem', color: 'rgba(45, 42, 38, 0.88)' }}>
                  <a
                    href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#40606D', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    CDC: Altered immunocompetence — Immunization best practices for health care providers
                  </a>
                  <span style={{ color: 'rgba(45, 42, 38, 0.55)' }}> (cdc.gov)</span>
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
