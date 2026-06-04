import Link from 'next/link';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const PDF_ADULTS = `/pneumo/${encodeURIComponent('Administering Pneumococcal Vaccines to Adults.pdf')}`;
const PDF_CHILDREN = `/pneumo/${encodeURIComponent('Administering Pneumococcal Vaccines to Children and Teens.pdf')}`;
const PDF_TIMING = `/pneumo/${encodeURIComponent('Pneumococcal Vaccine Timing for Adults.pdf')}`;
const PDF_50YR = `/pneumo/${encodeURIComponent('pneumo 50yr.pdf')}`;

export default function AspleniaPneumococcalArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAspleniaPneumococcal"
      title="Pneumococcal"
      emoji="💉"
      lead="PCV and PPSV23 recommendations for asplenia and other immunocompromising conditions."
      backHref="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
      backLabel="← Anatomic or functional asplenia"
    >
      <HcpGuideSection id="types" title="Vaccine types" icon="📋">
        <p>Two types of vaccine against invasive pneumococcal disease are available: PCV and PPSV23.</p>
        <p>
          All infants should be given a primary series of either PCV15, PCV13, or PCV20 at ages 2, 4, and 6 months, with a
          booster at age 12 to 15 months. Otherwise healthy children who fall behind should be given catch-up vaccination
          through age 59 months; if they have certain underlying medical conditions they should be given catch-up
          vaccination through age 71 months.
        </p>
        <p>PPSV23 is licensed for use in persons aged &gt;=2 years.</p>
        <p>
          The conditions that increase the risk of pneumococcal disease and are indications for additional pneumococcal
          vaccine doses beyond the routine schedule are broken down into two categories: non-immunocompromising (non-IC) and
          immunocompromising (IC). Recommendations differ slightly under certain circumstances by IC or non-IC category.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="non-ic" title="Non-IC conditions" icon="📌">
        <ul>
          <li>Cerebrospinal fluid (CSF) leak</li>
          <li>
            Chronic heart disease (especially cyanotic congenital heart disease and heart failure, congestive heart failure
            and cardiomyopathies, excluding hypertension)
          </li>
          <li>Chronic kidney disease (except as specified in the IC list below)</li>
          <li>Chronic liver disease</li>
          <li>
            Chronic lung disease (including moderate persistent or severe persistent asthma, chronic obstructive pulmonary
            disease, emphysema)
          </li>
          <li>Diabetes mellitus</li>
          <li>Cochlear implant</li>
          <li>Alcoholism or cigarette smoking</li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="ic" title="Immunocompromising (IC) conditions" icon="🛡️">
        <ul>
          <li>Kidney disease and on maintenance dialysis</li>
          <li>Kidney disease with nephrotic syndrome</li>
          <li>Asplenia or splenic dysfunction</li>
          <li>
            Congenital or acquired immunodeficiency, including B-(humoral) or T-lymphocyte deficiency; complement
            deficiencies, particularly C1, C2, C3, and C4 deficiency; and phagocytic disorders (excluding chronic
            granulomatous disease)
          </li>
          <li>
            Diseases or conditions treated with immunosuppressive drugs or radiation therapy, including Hodgkin disease,
            leukemias, lymphomas, malignant neoplasms, and solid organ transplant
          </li>
          <li>HIV infection</li>
          <li>Sickle cell disease or other hemoglobinopathies</li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="schedules" title="Catch-up and adult schedules" icon="📅">
        <p>
          Children with IC or non-IC conditions who completed a PCV series before age 6 years with PCV13 or PCV15 (but who have
          not received PCV20 or pneumococcal polysaccharide vaccine [PPSV23]) should receive additional pneumococcal
          vaccination with a single dose of PCV20 at least 8 weeks after the most recent PCV dose. If PCV20 is not available,
          a non-IC or IC child in this circumstance may, alternatively, receive a single dose of PPSV23 at least 8 weeks
          after the most recent PCV dose. An IC child given PPSV23 in this circumstance would also be due for a dose of
          either PCV20 or a second dose of PPSV23 at least 5 years after the first PPSV23.
        </p>
        <p>
          All people age 19 through 49 with medical conditions who have no history of pneumococcal vaccination or an unknown
          pneumococcal vaccination history should receive either a single dose of PCV20 or PCV21 alone or a dose of PCV13 or
          PCV15 followed by a dose of PPSV23 at least 1 year later. If using the PCV15 + PPSV23 series, clinicians can
          consider giving the dose of PPSV23 a minimum of 8 weeks later for more rapid protection against the serotypes unique
          to PPSV23 to people with immunocompromising condition, cochlear implant, or cerebrospinal fluid (CSF) leak.
        </p>
        <p>
          <em>
            N.B. Doses of the 7-valent PCV (the original Prevnar, PCV7) do not count toward PCV vaccination when determining
            the current pneumococcal vaccination needs of a child or teen with a qualifying non-IC or IC condition.
          </em>
        </p>
        <p>
          <em>
            N.B. The patient should be vaccinated at least 2 weeks before the splenectomy, if feasible. If not, vaccinate as
            soon as possible. Depending upon products available, he has three options:
          </em>
        </p>
        <ul>
          <li>One dose of PCV20 or PCV21 alone, or</li>
          <li>One dose of PCV13 or PCV15 followed by a dose of PPSV23</li>
        </ul>
        <p>
          CDC recommends that if using the PCV15 and PPSV23 series, a minimum interval of 8 weeks can be considered for
          adults with an immunocompromising condition (including splenectomy), cochlear implant, or cerebrospinal fluid leak.
        </p>
        <p>
          ACIP has made a series of changes in its recommendations for pneumococcal vaccination of adults since 2022 in
          response to the licensure of new pneumococcal conjugate vaccines (PCVs). In January 2022, CDC published
          recommendations for PCV15 (Vaxneuvance, Merck) and PCV20 (Prevnar 20, Pfizer) as pneumococcal vaccination options
          for all adults age 65 and older and for adults age 19 through 64 with certain medical conditions or other risk
          factors for pneumococcal disease. ACIP stopped recommending PCV13 (Prevnar 13, Pfizer) for adults; however, CDC
          clinical guidance allows for its use in rare circumstances if only PCV13 is accessible and the patient would
          otherwise be unvaccinated. When PCV15 is used routinely, it should be used in series with 23-valent pneumococcal
          polysaccharide vaccine (PPSV23, Pneumovax, Merck) given one year later.
        </p>
        <p>
          In June 2024, ACIP recommended PCV21 (Capvaxive, Merck) as an option in all situations where PCV is recommended
          for adults. As with PCV20, PPSV23 is not recommended following PCV21.
        </p>
        <p>
          In October 2024, ACIP recommended that routine immunization of all adults with a PCV begin at age 50 years, rather
          than age 65 years. This change was made to address the substantial amount of preventable invasive pneumococcal
          disease (IPD) among adults age 50 through 64.
        </p>
        <p>
          To learn more about disease, vaccine and inserts{' '}
          <Link href="/hcp/pneumococcal" className="hcp-cancer-inline-link">
            press here
          </Link>
          .
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="pdf-resources" title="PDF resources" icon="📄">
        <ul>
          <li>
            <a href={PDF_ADULTS} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
              Administering Pneumococcal Vaccines to Adults (PDF)
            </a>
          </li>
          <li>
            <a href={PDF_CHILDREN} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
              Administering Pneumococcal Vaccines to Children and Teens (PDF)
            </a>
          </li>
          <li>
            <a href={PDF_TIMING} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
              Pneumococcal Vaccine Timing for Adults (PDF)
            </a>
          </li>
          <li>
            <a href={PDF_50YR} target="_blank" rel="noopener noreferrer" className="hcp-cancer-inline-link">
              Expanded Recommendations for Use of Pneumococcal Conjugate Vaccines Among Adults Aged ≥50 Years (PDF)
            </a>
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideReferences
        references={[
          {
            citation: 'Immunize.org — Ask the Experts: Pneumococcal.',
            href: 'https://www.immunize.org/ask-experts/topic/pneumococcal/',
          },
          {
            citation: 'CDC — Altered immunocompetence: immunization best practices.',
            href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
