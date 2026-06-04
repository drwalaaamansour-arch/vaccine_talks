import Link from 'next/link';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

export default function AspleniaHibArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAspleniaHib"
      title="Hib"
      emoji="💉"
      lead="Haemophilus influenzae type b (Hib) vaccination in asplenia and other high-risk conditions."
      backHref="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
      backLabel="← Anatomic or functional asplenia"
    >
      <HcpGuideSection id="guidance" title="Vaccination guidance" icon="📋">
        <p>
          Hib conjugate vaccines are available in single or combined antigen preparations. Hib vaccine is recommended
          routinely for all children through age 59 months.
        </p>
        <p>
          Children 12 through 59 months who are at high risk for invasive Hib disease (i.e., recipients of{' '}
          <strong>chemotherapy</strong> or <strong>radiation</strong> for malignant neoplasms, or those with functional or
          anatomic <strong>asplenia</strong>, <strong>HIV</strong> infection,{' '}
          <strong>immunoglobulin deficiency, or early complement component deficiency</strong>) and who are unvaccinated or
          received only one dose of Hib vaccine before 12 months of age should receive 2 additional doses of Hib vaccine;
          those who received 2 or more doses of Hib before 12 months of age should receive one additional dose.
        </p>
        <p>
          A child younger than 5 years of age receiving <strong>chemotherapy</strong> or <strong>radiation</strong> therapy
          should have Hib doses repeated if the doses were received during therapy or within 14 days of starting therapy;
          repeat doses should be started at least 3 months after completion of therapy.
        </p>
        <p>
          Recipients of <strong>hematopoietic cell transplants</strong> should be revaccinated with 3 doses of Hib vaccine,
          starting 6-12 months after successful transplant, regardless of vaccination history or age.
        </p>
        <p>
          Children 5-18 years of age with <strong>HIV</strong> who are unimmunized should receive a dose of Hib vaccine; Hib
          vaccination is not recommended in <strong>HIV</strong>-infected adults.
        </p>
        <p>
          Unimmunized asplenic patients older than 59 months of age or adults should receive a dose of Hib vaccine. Anyone 15
          months of age or older who is undergoing a splenectomy and is unimmunized should receive a dose of Hib vaccine.
        </p>
        <p>
          To learn more about disease, vaccine and inserts{' '}
          <Link href="/hcp/hib" className="hcp-cancer-inline-link">
            press here
          </Link>
          .
        </p>
      </HcpGuideSection>

      <HcpGuideReferences
        references={[
          {
            citation: 'CDC — Altered immunocompetence: immunization best practices.',
            href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
