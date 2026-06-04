import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const TOC = [
  { id: 'general-principles', label: 'General principles' },
  { id: 'post-vaccination', label: 'Post-vaccination considerations' },
  { id: 'during-procedures', label: 'Vaccination during procedures' },
  { id: 'timing', label: 'Timing recommendations' },
  { id: 'blood-products', label: 'Blood products during surgery' },
] as const;

const REFERENCE_URL =
  'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-before-or-after-anaesthesia-or-surgery';

export default function AnaesthesiaSurgeryArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAnaesthesiaSurgery"
      title="Before or after anaesthesia or surgery"
      emoji="🏥"
      lead="Recent or upcoming surgery is not a contraindication to vaccination — and vaccination is not a contraindication to surgery."
      toc={[...TOC]}
    >
      <HcpGuideSection id="general-principles" title="General principles" icon="✓">
        <p>
          Recent or upcoming surgery is not a contraindication to vaccination. Vaccination is also not a
          contraindication to surgery.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="post-vaccination" title="Post-vaccination considerations" icon="🌡️">
        <p>
          There is no evidence of adverse outcomes related to anaesthesia and surgery in recently vaccinated
          children. However, the systemic effects of recent vaccination, such as fever and malaise, may be
          confused with similar symptoms that may arise in the post-operative period.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="during-procedures" title="Vaccination during procedures" icon="💉">
        <p>
          A person in a special risk group can receive vaccines as per the routine schedule, or electively
          during a procedure, if the appropriate vaccine delivery safety mechanisms are in place.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="timing" title="Timing recommendations" icon="📅">
        <p>
          If elective surgery and anaesthesia are to be postponed after vaccination, some guidelines recommend
          waiting for <strong>1 week</strong> after receiving an inactive vaccine and for <strong>3 weeks</strong>{' '}
          after receiving a live attenuated viral vaccine in children. Defer routine vaccines for{' '}
          <strong>1 week</strong> after surgery.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="blood-products" title="Blood products during surgery" icon="🩸">
        <p>A person who receives any blood products during surgery will need to delay some vaccinations.</p>
      </HcpGuideSection>

      <HcpGuideReferences
        references={[
          {
            citation: 'Australian Immunisation Handbook — Vaccination before or after anaesthesia or surgery.',
            href: REFERENCE_URL,
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
