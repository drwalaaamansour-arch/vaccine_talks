import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const COCHLEAR_PDF = `/${encodeURIComponent('cochlear.pdf')}`;

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'causes', label: 'Leading causes' },
  { id: 'hearing-loss', label: 'Hearing loss (general)' },
  { id: 'pneumococcal', label: 'Pneumococcal' },
  { id: 'hib', label: 'Hib' },
  { id: 'meningococcal', label: 'Meningococcal' },
  { id: 'key-points', label: 'Key points' },
] as const;

export default function CochlearImplantsArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpCochlearImplants"
      title="Cochlear implants and vaccination"
      emoji="🦻"
      lead="CDC guidance on preventing meningitis in cochlear implant users — timing, vaccine types, and age-specific recommendations."
      toc={[...TOC]}
    >
      <HcpGuideSection id="overview" title="Overview" icon="📋">
        <p>
          Meningitis is an inflammation of the lining of the brain and spinal cord. People with cochlear
          implants are at increased risk for certain types of bacterial meningitis. Vaccines can help prevent
          this serious infection. The CDC provides specific recommendations for people with cochlear implants to
          ensure optimal protection.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="causes" title="Leading causes of bacterial meningitis" icon="🦠">
        <ul>
          <li>Haemophilus influenzae</li>
          <li>Neisseria meningitidis (meningococcal meningitis)</li>
          <li>Streptococcus pneumoniae (pneumococcal meningitis)</li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="hearing-loss" title="General vaccination for hearing loss" icon="👂">
        <p>
          The CDC does not have special vaccination recommendations for people with hearing loss. Schedules
          are the same as for those without hearing loss, based on age and health conditions.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="pneumococcal" title="Pneumococcal vaccination" icon="💉">
        <ul>
          <li>
            <strong>Children younger than 2 years with cochlear implants:</strong> Should receive PCV13 or
            PCV15 as per the Childhood Immunization Schedule.
          </li>
          <li>
            <strong>Older children who missed infant vaccinations:</strong> May need PCV13 or PCV15.
          </li>
          <li>
            <strong>Children 2 years or older:</strong> Should also receive PPSV23.
          </li>
          <li>
            <strong>Timing:</strong> All recommended pneumococcal shots should be given at least 2 weeks before
            cochlear implant surgery. No extra shots if already up to date.
          </li>
          <li>
            <strong>Adults with cochlear implants:</strong> If never vaccinated, receive one shot of PCV15 or
            PCV20; if PCV15 is used, follow with PPSV23. Give shots at least 2 weeks before surgery.
          </li>
          <li>
            <strong>History of pneumococcal meningitis:</strong> Follow CDC pneumococcal vaccination guidance.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="hib" title="Haemophilus influenzae type b (Hib)" icon="🛡️">
        <ul>
          <li>
            <strong>Children younger than 5 years:</strong> Receive Hib vaccines per the Childhood Immunization
            Schedule.
          </li>
          <li>
            <strong>Timing:</strong> Hib vaccinations should be up to date at least 2 weeks before surgery.
          </li>
          <li>
            <strong>Children with past Hib meningitis:</strong> May need additional shots depending on current
            age if meningitis occurred before age 2; not needed if at age 2 or older.
          </li>
          <li>
            <strong>Older children and adults:</strong> CDC does not recommend Hib vaccination specifically for
            cochlear implants in these groups — data do not support increased risk.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="meningococcal" title="Meningococcal vaccination" icon="💉">
        <ul>
          <li>
            <strong>Preteens and teens:</strong> Should receive MenACWY per the Preteen/Teen Immunization
            Schedule; teens may also receive MenB.
          </li>
          <li>
            <strong>Younger children and adults:</strong> CDC does not recommend meningococcal vaccination
            specifically for cochlear implants in these groups.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="key-points" title="Key points" icon="⭐" variant="takeaway">
        <ul>
          <li>Vaccination is crucial for people with cochlear implants to prevent meningitis.</li>
          <li>Recommended vaccines include pneumococcal, Hib (young children), and meningococcal (preteens/teens).</li>
          <li>Administer vaccines at least two weeks before cochlear implant surgery when possible.</li>
          <li>
            No additional vaccines are needed for hearing loss alone unless indicated by age or health status.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuidePdfEmbed src={COCHLEAR_PDF} title="Cochlear implants — reference PDF" />

      <HcpGuideReferences
        references={[
          {
            citation: 'CDC — Cochlear Implants and Vaccine Recommendations (For Everyone).',
            href: 'https://www.cdc.gov/pneumococcal/vaccines/cochlear-implants.html',
          },
          {
            citation: 'CDC — Vaccines for People with Cochlear Implants (Health Care Providers).',
            href: 'https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/cochlear-implants.html',
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
