import type { ReactNode } from 'react';
import Link from 'next/link';
import CancerConsensusButton from '@/components/hcp-cancer-vaccination/CancerConsensusButton';
import CancerVaccinationPdfs from '@/components/hcp-cancer-vaccination/CancerVaccinationPdfs';

const TOC = [
  { id: 'overview', label: 'Key factors', icon: '📋' },
  { id: 'impact', label: 'Impact on immunity', icon: '🛡️' },
  { id: 'general-principles', label: 'General principles', icon: '⏱️' },
  { id: 'during-chemotherapy', label: 'During chemotherapy', icon: '💊' },
  { id: 'influenza', label: 'Influenza', icon: '🤧' },
  { id: 'pneumococcal', label: 'Pneumococcal', icon: '🫁' },
  { id: 'hepatitis-b', label: 'Hepatitis B', icon: '🩺' },
  { id: 'dtap', label: 'DTP', icon: '💉' },
  { id: 'hpv', label: 'HPV', icon: '🦠' },
  { id: 'meningococcal', label: 'Meningococcal', icon: '🧠' },
  { id: 'hepatitis-a', label: 'Hepatitis A', icon: '🌍' },
  { id: 'rzv', label: 'Shingles (RZV)', icon: '⚡' },
  { id: 'biologic', label: 'Biologic therapies', icon: '🧬' },
  { id: 'live-vaccines', label: 'Live vaccines', icon: '⚠️' },
  { id: 'asplenia', label: 'Asplenia', icon: '⚕️' },
  { id: 'after-therapy', label: 'After therapy', icon: '✅' },
  { id: 'take-home', label: 'Take-home messages', icon: '📌' },
  { id: 'related-resources', label: 'Expert consensus', icon: '🔗' },
  { id: 'handbook-pdfs', label: 'Handbook PDFs', icon: '📄' },
  { id: 'references', label: 'References', icon: '📚' },
] as const;

const REFERENCES = [
  {
    citation:
      'Australian Government Department of Health. Table. Recommendations for vaccination in people who have received chemotherapy | The Australian Immunisation Handbook.',
    href: 'https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-in-people-who-have-received-chemotherapy',
  },
  {
    citation:
      'Rubin LG, Levin MJ, Ljungman P, et al. 2013 IDSA clinical practice guideline for vaccination of the immunocompromised host. Clin Infect Dis. (PMC4685676).',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4685676/',
  },
  {
    citation: 'Centers for Disease Control and Prevention. Altered Immunocompetence | Vaccines & Immunizations.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
  {
    citation: 'ASCO. Vaccination of Adults With Cancer: ASCO Guideline. J Clin Oncol.',
    href: 'https://ascopubs.org/doi/10.1200/JCO.24.00032',
  },
] as const;

function Ul({ items }: { items: string[] }) {
  return (
    <ul>
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
}: {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  variant?: 'default' | 'takeaway';
}) {
  return (
    <section
      id={id}
      className={`hcp-cancer-section${variant === 'takeaway' ? ' hcp-cancer-takeaway-section' : ''}`}
    >
      <div className="hcp-cancer-section-head">
        <span className="hcp-cancer-section-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="hcp-cancer-section-title">{title}</h2>
      </div>
      <div className="hcp-cancer-section-body">{children}</div>
    </section>
  );
}

function Sub({ title, muted }: { title: string; muted?: boolean }) {
  return <h3 className={muted ? 'hcp-cancer-sub hcp-cancer-sub--muted' : 'hcp-cancer-sub'}>{title}</h3>;
}

export default function CancerVaccinationArticle() {
  return (
    <div className="hcp-cancer-body">
      <nav className="hcp-cancer-nav" aria-label="On this page">
        <p className="hcp-cancer-nav-label">On this page</p>
        <div className="hcp-cancer-nav-panel">
          <ul className="hcp-cancer-nav-scroll">
            {TOC.map((item, index) => (
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

      <div className="hcp-cancer-main">
        <Section id="overview" title="Overview — key factors" icon="📋">
          <p>The optimal vaccination strategy depends on several factors, including:</p>
          <ul className="hcp-cancer-chips">
            {[
              'Type and stage of malignancy',
              'Age of the patient',
              'Vaccination history',
              'Treatment modality',
              'Degree of immunosuppression',
              'Asplenia or stem cell transplantation',
            ].map((factor) => (
              <li key={factor} className="hcp-cancer-chip">
                {factor}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="impact" title="Impact of Cancer and Cancer Therapy on Immunity" icon="🛡️">
          <p>
            People with cancer, particularly those with hematological malignancies or advanced disease, often
            experience significant immune dysfunction as a result of both their disease and treatment.
          </p>
          <Sub title="Immunosuppression may result from:" muted />
          <Ul
            items={[
              'Chemotherapy',
              'Radiotherapy',
              'Corticosteroids',
              'Biologic therapies',
              'Anti-B-cell therapies (e.g., rituximab)',
              'Immune-modulating agents',
              'Cancer immunotherapy',
              'Functional or anatomical asplenia',
            ]}
          />
          <p>
            Patients receiving chemotherapy or radiation therapy for leukemia, lymphoma, multiple myeloma, or solid
            tumors should generally be considered immunocompromised.
          </p>
        </Section>

        <Section id="general-principles" title="General Principles of Vaccination" icon="⏱️">
          <Sub title="Vaccination Before Cancer Treatment" />
          <p>Whenever feasible, all indicated vaccines should be administered before:</p>
          <Ul items={['Chemotherapy', 'Radiotherapy', 'Immunosuppressive therapy', 'Elective splenectomy']} />
          <Sub title="Timing of Vaccination" />
          <Sub title="Inactivated Vaccines" muted />
          <Ul
            items={[
              'Ideally administered at least 2 weeks before immunosuppressive therapy.',
              'May be administered during chemotherapy if necessary.',
              'Vaccination during treatment is safe but may result in reduced immune responses.',
            ]}
          />
          <Sub title="Live Attenuated Vaccines" muted />
          <Ul
            items={[
              'Should be administered at least 4 weeks before immunosuppressive therapy.',
              'Are generally contraindicated during active treatment and significant immunosuppression.',
              'May be considered at least 3–12 months after completion of chemotherapy if immune recovery has occurred.',
            ]}
          />
        </Section>

        <Section id="during-chemotherapy" title="Vaccination During Chemotherapy" icon="💊">
          <p>
            Vaccination during chemotherapy may be necessary in some situations, particularly when delaying vaccination
            would leave the patient vulnerable to infection.
          </p>
          <p>
            Although vaccine responses may be suboptimal, inactivated vaccines remain safe and may provide meaningful
            protection.
          </p>
          <Sub title="Severe Neutropenia" />
          <p>
            Patients with severe neutropenia (absolute neutrophil count &lt;0.5 × 10⁹/L) should generally defer
            vaccination until recovery to avoid confusion with treatment-related febrile episodes.
          </p>
        </Section>

        <Section id="influenza" title="Influenza Vaccination" icon="🤧">
          <Sub title="Why Influenza Vaccination Is Important" />
          <p>Influenza can cause significant morbidity and mortality in cancer patients, including:</p>
          <Ul items={['Secondary bacterial pneumonia', 'Respiratory failure', 'Hospitalization', 'Death']} />
          <p>Annual influenza vaccination is recommended for all cancer patients aged 6 months and older.</p>
          <Sub title="Vaccine Type" />
          <div className="hcp-cancer-vaccine-pair">
            <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--ok">
              <p className="hcp-cancer-vaccine-card-label">Recommended</p>
              <p>Inactivated influenza vaccine (IIV)</p>
            </div>
            <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--no">
              <p className="hcp-cancer-vaccine-card-label">Not recommended</p>
              <p>Live attenuated influenza vaccine (LAIV)</p>
            </div>
          </div>
          <Sub title="Timing" />
          <p>Optimal timing includes:</p>
          <Ul
            items={[
              'At least 2 weeks before chemotherapy',
              'Between chemotherapy cycles',
              'Approximately 2 weeks after chemotherapy',
              'Avoiding periods of expected nadir white blood cell counts',
            ]}
          />
          <p>
            Because influenza is seasonal, vaccination should not be unnecessarily delayed when protection is needed.
          </p>
          <Sub title="Household Contacts" />
          <p>
            Family members and close contacts should also receive annual influenza vaccination to reduce the risk of
            transmission.
          </p>
          <div className="hcp-cancer-alert">
            <strong>IMPORTANT — Cancer Immunotherapy</strong>
            <p>Patients receiving immune checkpoint inhibitors such as:</p>
            <Ul
              items={[
                'Ipilimumab (CTLA-4 inhibitor)',
                'Nivolumab (PD-1 inhibitor)',
                'Pembrolizumab (PD-1 inhibitor)',
              ]}
            />
            <p>
              may have an increased risk of immune-related adverse events following influenza vaccination. The timing of
              vaccination should be discussed with the treating oncologist.
            </p>
          </div>
        </Section>

        <Section id="pneumococcal" title="Pneumococcal Vaccination" icon="🫁">
          <p>Patients with:</p>
          <Ul
            items={[
              'Multiple myeloma',
              'Chronic lymphocytic leukemia',
              'Lymphoma',
              'Lung cancer',
              'Generalized malignancies',
            ]}
          />
          <p>
            are at increased risk of invasive pneumococcal disease. Vaccination should ideally be administered before
            treatment begins.
          </p>
          <Sub title="Recommended Strategy" />
          <p>
            Current recommendations favor the use of pneumococcal conjugate vaccines because they induce superior immune
            responses compared with polysaccharide vaccines.
          </p>
          <p>Depending on age and local recommendations, vaccination may include:</p>
          <Ul items={['PCV13, PCV15 or PCV20', 'Followed by PPSV23 if indicated']} />
          <p>
            Patients with hematological malignancies, functional asplenia, or other high-risk conditions may require
            individualized schedules.
          </p>
        </Section>

        <Section id="hepatitis-b" title="Hepatitis B Vaccination" icon="🩺">
          <p>
            Hepatitis B virus (HBV) reactivation is a recognized complication of chemotherapy and immunosuppressive
            therapy, particularly among patients receiving anti-CD20 therapies such as rituximab.
          </p>
          <Sub title="Recommendations" />
          <Ul
            items={[
              'Assess HBV status at the time of cancer diagnosis.',
              'Vaccinate susceptible individuals whenever possible.',
              'Monitor patients at risk for HBV reactivation.',
              'Consider post-vaccination serologic testing in selected high-risk individuals.',
            ]}
          />
        </Section>

        <Section id="dtap" title="Diphtheria, Tetanus, and Pertussis Vaccination" icon="💉">
          <p>
            Immunity to tetanus, diphtheria, and pertussis may decline following cancer treatment. A booster dose of Tdap
            should be considered following completion of therapy according to age-appropriate recommendations.
          </p>
        </Section>

        <Section id="hpv" title="Human Papillomavirus (HPV) Vaccination" icon="🦠">
          <p>HPV vaccination is recommended according to routine age-based schedules.</p>
          <Sub title="Recommendations" />
          <Ul items={['Immunocompromised individuals should receive a 3-dose schedule']} />
          <p>
            Immunosuppression is not a contraindication to HPV vaccination, although vaccine responses may be reduced.
          </p>
        </Section>

        <Section id="meningococcal" title="Meningococcal Vaccination" icon="🧠">
          <p>Meningococcal vaccination is recommended for:</p>
          <Ul
            items={[
              'Adolescents',
              'Individuals with complement deficiencies',
              'Patients with anatomic or functional asplenia',
              'Other high-risk groups',
            ]}
          />
          <p>
            Patients with splenic dysfunction due to malignancy or splenic irradiation should follow recommendations for
            individuals with asplenia.
          </p>
        </Section>

        <Section id="hepatitis-a" title="Hepatitis A Vaccination" icon="🌍">
          <p>Hepatitis A vaccination is recommended for cancer patients with:</p>
          <Ul
            items={[
              'Travel to endemic regions',
              'Occupational exposure',
              'Household exposure',
              'Other recognized risk factors',
            ]}
          />
        </Section>

        <Section id="rzv" title="Recombinant Zoster Vaccine (RZV)" icon="⚡">
          <p>All immunocompromised adults with cancer aged 18 years and older are recommended to receive:</p>
          <Ul items={['Two doses of recombinant zoster vaccine (Shingrix)']} />
          <p>The vaccine is non-live and can be safely administered to immunocompromised patients.</p>
        </Section>

        <Section id="biologic" title="Vaccination in Patients Receiving Biologic and Targeted Therapies" icon="🧬">
          <p>Patients receiving:</p>
          <Ul
            items={[
              'Anti-B-cell therapies (e.g., rituximab)',
              'TNF inhibitors',
              'Immune modulators',
              'Cytokine inhibitors',
            ]}
          />
          <p>may have impaired vaccine responses.</p>
          <Sub title="Recommendations" />
          <Ul
            items={[
              'Administer vaccines at least 2 weeks before therapy whenever possible.',
              'Delay live vaccines for at least 3–12 months after treatment.',
              'Delay both live and non-live vaccines for at least 6 months after anti-B-cell therapies, recognizing that longer intervals may sometimes be necessary.',
            ]}
          />
        </Section>

        <Section id="live-vaccines" title="Live Vaccines in Cancer Patients" icon="⚠️">
          <p>Live vaccines are generally contraindicated in patients with:</p>
          <Ul
            items={[
              'Active malignancy',
              'Ongoing chemotherapy',
              'Significant immunosuppression',
              'Poorly controlled disease',
            ]}
          />
          <Sub title="Examples include:" muted />
          <Ul items={['MMR vaccine', 'Varicella vaccine', 'Live attenuated influenza vaccine', 'Oral typhoid vaccine']} />
          <Sub title="After Completion of Therapy" />
          <p>Live vaccines may be considered when:</p>
          <Ul
            items={[
              'At least 3–12 months have elapsed since chemotherapy',
              'The underlying malignancy is in remission',
              'Immune recovery has occurred',
              'The patient is no longer significantly immunocompromised',
            ]}
          />
        </Section>

        <Section id="asplenia" title="Special Considerations in Patients with Asplenia" icon="⚕️">
          <p>
            Patients with anatomical or functional asplenia are at increased risk of overwhelming infection caused by
            encapsulated bacteria.
          </p>
          <Sub title="Recommended Vaccines" />
          <Ul items={['Pneumococcal vaccines', 'Meningococcal vaccines (MenACWY and MenB)', 'Hib vaccine']} />
          <p>
            Whenever possible, vaccination should occur at least 2 weeks before elective splenectomy. Patients with
            persistent asplenia may require booster doses according to risk-based recommendations.
          </p>
          <p>
            For more, please visit:{' '}
            <Link
              href="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
              className="hcp-cancer-inline-link"
            >
              Anatomic or Functional Asplenia
            </Link>
          </p>
        </Section>

        <Section id="after-therapy" title="Vaccination After Completion of Cancer Therapy" icon="✅">
          <p>
            Patients who completed their primary vaccination schedule before cancer diagnosis generally retain some
            immune memory and can receive most recommended vaccines after recovery without routine pre-vaccination
            antibody testing.
          </p>
          <p>
            For patients who are clinically well and in remission for at least 6 months after completion of therapy, the
            following booster vaccinations may be considered.
          </p>
          <div className="hcp-cancer-post-grid">
            <div className="hcp-cancer-post-card">
              <h5>Diphtheria, Tetanus, Pertussis and Polio</h5>
              <p>
                <strong>Children younger than 10 years</strong>
              </p>
              <Ul items={['One dose of DTaP-IPV']} />
              <p>
                <strong>Individuals aged 10 years and older</strong>
              </p>
              <Ul items={['One dose of Tdap or Td', 'One dose of IPV']} />
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Measles, Mumps and Rubella (MMR)</h5>
              <Ul items={['One dose of MMR vaccine']} />
              <p>
                Serologic testing for measles and rubella immunity should be performed 6–8 weeks after vaccination.
                Individuals who fail to seroconvert may require an additional dose.
              </p>
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Hepatitis B</h5>
              <Ul items={['One booster dose of hepatitis B vaccine']} />
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Pneumococcal Vaccines</h5>
              <p>For individuals who have not completed a recommended pneumococcal series:</p>
              <Ul items={['One dose of PCV13, PCV15 or PCV20', 'Followed by two doses of PPSV23 according to recommended intervals']} />
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Haemophilus influenzae Type b (Hib)</h5>
              <Ul
                items={[
                  'One dose for children younger than 5 years',
                  'One dose for individuals with anatomic or functional asplenia',
                ]}
              />
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Meningococcal Vaccines</h5>
              <Ul items={['One dose of MenACWY', 'One dose of MenB']} />
              <p>Individuals with asplenia should receive MenACWY booster doses every 5 years if the risk remains.</p>
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Human Papillomavirus (HPV)</h5>
              <p>For previously unvaccinated individuals:</p>
              <Ul
                items={[
                  'Age <26 years and no longer immunocompromised: vaccination according to routine recommendations',
                  'Immunocompromised individuals or those initiating vaccination at ≥26 years: 3-dose schedule (0, 2, and 6 months)',
                ]}
              />
            </div>
            <div className="hcp-cancer-post-card">
              <h5>Varicella Vaccine</h5>
              <p>Seronegative individuals may receive:</p>
              <Ul items={['Two doses of varicella vaccine']} />
              <p>
                Vaccination should occur at least 6 months after completion of chemotherapy and only when adequate immune
                recovery has been achieved.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="take-home"
          title="Key Take-Home Messages for Healthcare Professionals"
          icon="📌"
          variant="takeaway"
        >
          <ul className="hcp-cancer-takeaway-list">
            {[
              'Vaccination should be planned as early as possible, preferably before cancer treatment begins.',
              'Inactivated vaccines are safe during chemotherapy but may be less immunogenic.',
              'Annual influenza vaccination is recommended for virtually all patients with cancer.',
              'Pneumococcal vaccination is strongly recommended because of the increased risk of invasive disease.',
              'Recombinant zoster vaccine should be considered in immunocompromised adults with cancer.',
              'Live vaccines are generally contraindicated during active treatment and significant immunosuppression.',
              'Anti-B-cell therapies can impair vaccine responses for prolonged periods.',
              'Household contacts should be appropriately vaccinated to help protect immunocompromised patients.',
              "Vaccination recommendations should be individualized according to the patient's malignancy, treatment regimen, immune status, and risk factors.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <CancerConsensusButton />

        <CancerVaccinationPdfs />

        <Section id="references" title="References" icon="📚">
          <ul className="hcp-cancer-ref-list">
            {REFERENCES.map((ref) => (
              <li key={ref.href}>
                {ref.citation}{' '}
                <a href={ref.href} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
                  {ref.href}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
