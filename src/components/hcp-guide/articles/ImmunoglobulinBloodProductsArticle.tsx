import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const PDF_INTERVALS = `/${encodeURIComponent('vaccine and blood')}/${encodeURIComponent(
  'Table. Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella, m.pdf',
)}`;
const PDF_TIMING = `/${encodeURIComponent('vaccine and blood')}/${encodeURIComponent('timing19-24,26-31.pdf')}`;

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'blood-products', label: 'Blood products' },
  { id: 'agammaglobulinaemia', label: 'Agammaglobulinaemia' },
  { id: 'intervals-pdf', label: 'Recommended intervals' },
  { id: 'spacing', label: 'Spacing vaccines' },
  { id: 'live-vaccines', label: 'Live vaccines' },
  { id: 'non-live', label: 'Non-live vaccines' },
  { id: 'timing-pdf', label: 'Timing & spacing PDF' },
] as const;

export default function ImmunoglobulinBloodProductsArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpImmunoglobulinBloodProducts"
      title="People who have recently received normal human immunoglobulin and other blood products"
      emoji="🩸"
      lead="Immunoglobulins may inhibit the immune response to some vaccines. Delay giving some vaccines for a certain time after receiving blood products."
      toc={[...TOC]}
    >
      <HcpGuideSection id="overview" title="Overview" icon="📋">
        <p>
          Immunoglobulins may inhibit the immune response to some vaccines. Delay giving some vaccines for a certain time
          after receiving blood products.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="blood-products" title="Normal human immunoglobulin and blood products" icon="💉">
        <p>
          Normal human immunoglobulin may inhibit the immune response to some live parenteral viral vaccines. This is
          because low levels of antibodies may be present in the blood product that may impair the immune response to the
          live vaccine. <strong>Exceptions are yellow fever, BCG and zoster vaccines.</strong> People who have received any
          blood product, including plasma or platelets, should wait <strong>3–11 months</strong> before they receive an
          MMR (measles-mumps-rubella), MMRV (measles-mumps-rubella-varicella) or varicella vaccine. The length of time
          depends on the blood product they received. Live Japanese encephalitis vaccine (Imojev) should not be given
          within <strong>6 weeks</strong> of receiving immunoglobulins or immunoglobulin-containing blood products. It is
          preferable to wait <strong>3 months</strong>. People who have received a blood transfusion do not need to repeat
          any of their vaccinations.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="agammaglobulinaemia" title="People with agammaglobulinaemia" icon="🛡️">
        <p>
          Live vaccines are <strong>not recommended</strong> for people with agammaglobulinaemia who are receiving monthly
          normal human immunoglobulin. This is because their immune response may be inhibited. Also, these people will have
          sufficient circulating antibodies (for example, against measles and varicella) from the normal human
          immunoglobulin to protect them if they are exposed.
        </p>
        <p>
          Inactivated vaccines are recommended as per the routine schedule. The response may be suboptimal, but these
          vaccines are safe to receive.
        </p>
      </HcpGuideSection>

      <HcpGuidePdfEmbed
        src={PDF_INTERVALS}
        title="Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella"
      />

      <HcpGuideSection id="spacing" title="Spacing of vaccines and antibody-containing products" icon="📅">
        <p>
          Ty21a typhoid, yellow fever, LAIV, and rotavirus vaccines may be administered at any time before, concurrent
          with, or after administration of any antibody-containing preparation such as immune globulin, hyperimmune
          globulin, or intravenous immune globulin (IGIV).
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="live-vaccines" title="Live vaccines" icon="🦠">
        <p>
          Blood (e.g., whole blood, packed red blood cells, and plasma) and other antibody-containing blood products (e.g.,
          immune globulin, hyperimmune globulin, and IGIV) can inhibit the immune response to measles and rubella vaccines
          for ≥3 months. The effect of blood and immune globulin preparations on the response to mumps and varicella
          vaccines is unknown; however, commercial immune globulin preparations contain antibodies to these viruses. Blood
          products available in the United States are unlikely to contain a substantial amount of antibody to yellow fever
          virus. The length of time that interference with injectable live-virus vaccine (other than yellow fever) can
          persist after the antibody-containing product is a function of the amount of antigen-specific antibody contained
          in the product. Therefore, after an antibody-containing product is received, live vaccines (other than Ty21a
          typhoid, yellow fever, LAIV, and rotavirus vaccines) should be delayed until the passive antibody has degraded.
          In circumstances where there is high-risk of vaccine-preventable disease it is acceptable to administer a dose
          of vaccine prior to completion of this interval. If a dose of injectable live-virus vaccine (other than yellow
          fever) is administered after an antibody-containing product but at an interval shorter than recommended in this
          report, the vaccine dose should be repeated. The repeat dose should be administered at the interval indicated
          for the antibody-containing product, after the invalid dose of vaccine.
        </p>
        <p>
          Although passively acquired antibodies can interfere with the response to rubella vaccine, the low dose of
          anti-Rho(D) globulin or any other blood product administered to postpartum women have not been demonstrated to
          reduce the response to the RA27/3 strain rubella vaccine. Congenital rubella syndrome and congenital varicella
          are conditions with considerable morbidity and represent a true risk in future pregnancies. Because of the
          importance of rubella and varicella immunity among women of child-bearing age, the postpartum vaccination of
          women without evidence of immunity to rubella or varicella with MMR, varicella, or MMRV vaccines should not be
          delayed because of receipt of anti-Rho(D) globulin or any other blood product during the last trimester of
          pregnancy or at delivery. Any reduction in immunity caused by anti-Rho(D) globulin or other blood products is
          outweighed by the opportunity to generate immunity. These women should be vaccinated immediately after giving
          birth and, if possible, tested ≥3 months later to ensure immunity to rubella and, if appropriate, to measles.
          Measles and rubella serologies have a low false-positive rate and are therefore acceptable for use in this
          limited postpartum context.
        </p>
        <p>
          Interference might occur if administration of an antibody-containing product becomes necessary after
          administration of MMR or varicella vaccines. Usually, vaccine virus replication and stimulation of immunity
          occurs 1–2 weeks after vaccination. If the interval between administration of any of these vaccines and
          subsequent administration of an antibody-containing product is less than 14 days, vaccination should be repeated
          after the recommended interval unless serologic testing indicates a protective antibody response.
        </p>
        <p>
          A humanized mouse monoclonal antibody product (palivizumab) is available as prophylaxis for serious lower
          respiratory tract disease from respiratory syncytial virus among infants and young children. This product
          contains only antibody to respiratory syncytial virus and does not interfere with the immune response to
          licensed live or non-live vaccines.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="non-live" title="Non-live vaccines" icon="💉">
        <p>
          Antibody-containing products interact less with non-live vaccines compared with live vaccines. Therefore,
          administering non-live vaccines either simultaneously with or at any interval before or after receipt of an
          antibody-containing product should not substantially impair development of a protective antibody response. The
          vaccine or toxoid and antibody preparation should be administered at different sites using the standard
          recommended dose.
        </p>
      </HcpGuideSection>

      <HcpGuidePdfEmbed src={PDF_TIMING} title="Timing and Spacing" />

      <HcpGuideReferences
        references={[
          {
            citation:
              'Australian Immunisation Handbook — Vaccination for people who have recently received normal human immunoglobulin and other blood products.',
            href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-have-recently-received-normal-human-immunoglobulin-and-other-blood-products',
          },
          {
            citation: 'CDC — Timing and spacing of immunobiologics.',
            href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/timing-spacing-immunobiologics.html',
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
