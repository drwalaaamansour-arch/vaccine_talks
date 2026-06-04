import Link from 'next/link';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const PDF_ACWY = `/acwy/${encodeURIComponent('Meningococcal ACWY Vaccine Recommendations by Age and Risk Factor.pdf')}`;
const PDF_MENB = `/acwy/${encodeURIComponent('men b vaccine recom.pdf')}`;

export default function AspleniaMeningococcalArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAspleniaMeningococcal"
      title="Meningococcal"
      emoji="💉"
      lead="MenACWY, MPSV4, and MenB recommendations for asplenia, sickle cell disease, HIV, and complement deficiency."
      backHref="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
      backLabel="← Anatomic or functional asplenia"
    >
      <HcpGuideSection id="guidance" title="Vaccination guidance" icon="📋">
        <p>
          Three types of meningococcal vaccines: meningococcal conjugate (MenACWY), meningococcal polysaccharide
          (MPSV4), and serogroup B meningococcal (MenB) vaccines.
        </p>
        <p>
          Persons with <strong>functional or anatomic asplenia</strong> (including sickle cell disease), <strong>HIV</strong>{' '}
          infection and <strong>persistent complement component deficiency</strong> (including persons taking eculizumab
          [Soliris]) are at increased risk for meningococcal disease and should receive MenACWY vaccine.
        </p>
        <p>
          Persons with <strong>functional or anatomic asplenia</strong> (including sickle cell disease) and{' '}
          <strong>persistent complement component deficiency</strong> (including persons taking eculizumab [Soliris])
          should receive MenB vaccine.
        </p>
        <p>
          For children 2 months through 23 months of age, an age-appropriate series of meningococcal conjugate vaccine
          should be administered. If MenACWY-D (Menactra) is administered to a child with <strong>asplenia</strong> or{' '}
          <strong>HIV</strong>, it should be after 2 years of age and at least 4 weeks after the completion of all PCV13
          doses.
        </p>
        <p>
          A 2-dose primary series of either MenACWY should be administered to persons 2 years of age or older with{' '}
          <strong>asplenia</strong> or <strong>complement deficiency</strong>. Following the primary series of vaccine, a
          3-year interval to the next dose is recommended for persons who received their previous dose at younger than 7
          years. A 5-year interval is recommended for persons who received their previous dose at age 7 years or older.
        </p>
        <p>
          Although MPSV4 is licensed, persons with <strong>asplenia</strong> or <strong>complement deficiency</strong>{' '}
          should be vaccinated with MenACWY-CRM or MenACWY-D rather than MPSV4.
        </p>
        <p>
          Meningococcal serogroup B vaccines are licensed for persons 10-25 years of age (in Egypt from 2 months of age)
          and are recommended for persons 10 years of age or older (in Egypt from 2 months of age) for persons with
          high-risk conditions like <strong>functional or anatomic asplenia</strong> or{' '}
          <strong>persistent complement component deficiency</strong>.
        </p>
        <p>
          To learn more about disease, vaccine and inserts{' '}
          <Link href="/hcp/meningococcal" className="hcp-cancer-inline-link">
            press here
          </Link>
          .
        </p>
      </HcpGuideSection>

      <HcpGuidePdfEmbed
        src={PDF_ACWY}
        title="Meningococcal ACWY Vaccine Recommendations by Age and Risk Factor"
      />
      <HcpGuidePdfEmbed src={PDF_MENB} title="Meningococcal B Vaccine Recommendations by Age and Risk Factor" />

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
