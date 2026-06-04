import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideSubNav from '@/components/hcp-guide/HcpGuideSubNav';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'recommended-vaccines', label: 'Recommended vaccines' },
  { id: 'influenza-note', label: 'Influenza' },
  { id: 'pdf', label: 'Reference PDF' },
] as const;

const ASPLENIA_VACCINE_LINKS = [
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/pneumococcal',
    label: 'Pneumococcal',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/meningococcal',
    label: 'Meningococcal',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/hib',
    label: 'Hib',
    emoji: '💉',
  },
];

export default function AnatomicOrFunctionalAspleniaArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAsplenia"
      title="Anatomic or functional asplenia"
      emoji="🛡️"
      lead="Vaccination for persons with anatomical or functional asplenia — encapsulated bacteria, timing before splenectomy, and lifelong infection risk."
      backHref="/hcp-special-populations/altered-immunocompetence"
      backLabel="← Altered immunocompetence"
      toc={[...TOC]}
    >
      <HcpGuideSection id="overview" title="Overview" icon="📋">
        <p>
          Asplenia, whether anatomical or functional, significantly increases susceptibility to infections from
          encapsulated bacteria. Without proper splenic function, the body struggles to clear these pathogens, making
          prompt vaccination and preventive measures essential.
        </p>
        <p>
          Persons with anatomic asplenia (e.g., surgical removal or congenital absence of the spleen) or functional
          asplenia (as occurs in persons with sickle cell disease) are at increased risk for infection by encapsulated
          bacteria, especially S. pneumoniae (pneumococcus), N. meningitidis (meningococcus), and Hib. Pneumococcal,
          meningococcal, and Hib vaccinations should be administered at least 14 days before elective splenectomy, if
          possible. If the vaccinations are not administered before surgery, they should be administered after the procedure
          as soon as the patient&apos;s condition is stable.
        </p>
        <p>
          The risk of infection after splenectomy is lifelong. However, the immediate post-splenectomy years pose the
          greatest risk, with nearly 30% of infections occurring within the first year, and 50% within the first 2 years
          after splenectomy.
        </p>
        <p>
          Patients with non-surgical asplenia or hyposplenia should receive the recommended vaccinations as soon as the
          impaired splenic function is recognised, according to the age-appropriate schedule.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="recommended-vaccines" title="The recommended vaccines" icon="💉">
        <HcpGuideSubNav title="Vaccine-specific guidance" links={ASPLENIA_VACCINE_LINKS} />
      </HcpGuideSection>

      <HcpGuideSection id="influenza-note" title="Influenza" icon="🌡️" variant="takeaway">
        <p>
          <em>N.B.: flu vaccine is recommended annually</em>
        </p>
      </HcpGuideSection>

      <HcpGuidePdfEmbed src="/spleen.pdf" title="Anatomic or functional asplenia — PDF" />

      <HcpGuideReferences
        references={[
          {
            citation: 'Australian Immunisation Handbook — People with asplenia and hyposplenia.',
            href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-are-immunocompromised/people-with-asplenia-and-hyposplenia',
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
