import HcpGuideRelatedLinks from '@/components/hcp-guide/HcpGuideRelatedLinks';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpProductPdfEmbed from '@/components/hcp-vaccine-product/HcpProductPdfEmbed';
import HcpVaccineProductLayout from '@/components/hcp-vaccine-product/HcpVaccineProductLayout';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'symptoms', label: 'Symptoms & complications' },
  { id: 'transmission', label: 'Transmission' },
  { id: 'incubation', label: 'Incubation period' },
  { id: 'shedding', label: 'Shedding' },
  { id: 'chronic-liver', label: 'Chronic liver disease' },
  { id: 'egypt', label: 'Egypt seroprevalence' },
  { id: 'resources', label: 'FAQ & documents' },
  { id: 'references', label: 'References' },
  { id: 'inserts', label: 'Product inserts (PDF)' },
] as const;

export default function HcpHepatitisAArticle() {
  return (
    <HcpVaccineProductLayout
      metaKey="hcpHepatitisA"
      title="Hepatitis A"
      emoji="🟡"
      lead="Hepatitis A virus (HAV) — clinical overview, transmission, and targeted vaccination considerations for Egypt."
      imageSrc="/hepatitis%20a.png"
      imageAlt="Hepatitis A"
      toc={[...TOC]}
    >
      <HcpGuideSection id="overview" title="Overview" icon="📋">
        <p>
          Hepatitis A is a liver disease common in many parts of the world and caused by hepatitis A virus
          (HAV), a picornavirus that causes acute inflammation of the liver. It is not related to the common
          viruses that cause hepatitis B or C.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="symptoms" title="Symptoms and Complications" icon="🩺">
        <p>
          Illness caused by HAV infection cannot be distinguished from other types of acute viral hepatitis,
          but it typically has an abrupt onset that can include fever, malaise, anorexia, nausea, abdominal
          discomfort, dark urine, and jaundice.
        </p>
        <p>
          The likelihood of having symptoms with HAV infection is related to age. In children younger than age
          6 years, 70% of infections are asymptomatic. When illness does occur in young children, it is
          typically not accompanied by jaundice. In older children and adults, infection typically is
          symptomatic, with jaundice occurring in more than 70% of patients.
        </p>
        <p>
          Hepatitis A signs and symptoms usually resolve in 2–3 months, although 10% to 15% of symptomatic
          people have prolonged illness (usually referred to as relapsing hepatitis A) lasting up to 6 months
          and should be considered infectious during that time.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="transmission" title="Transmission" icon="🔄">
        <p>
          Person-to-person spread through the fecal-oral route is the primary means of HAV transmission. Peak
          infectivity in infected people occurs during the two-week period before the onset of jaundice when
          the concentration of virus in the stool is highest and most people are no longer infectious one week
          after jaundice onset. Before routine vaccination of children was recommended, children were a key
          source of infection because most infected children had no symptoms and could shed virus in stool for
          weeks or months. Transmission currently occurs primarily among susceptible adults.
        </p>
        <p>
          Common-source outbreaks and sporadic cases can occur from exposure to fecally contaminated food or
          water. Uncooked HAV-contaminated foods have been recognized as a source of outbreaks. Cooked foods
          also can transmit HAV.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="incubation" title="Incubation Period" icon="⏱️">
        <p>
          HAV can produce either asymptomatic or symptomatic infection in humans after an average incubation
          period of 28 days (range: 15–50 days).
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="shedding" title="Shedding" icon="🧪">
        <p>
          In infected people, HAV replicates in the liver, is excreted in bile, and is shed in stool. Peak
          infectivity occurs during the 2-week period before onset of jaundice or elevation of liver enzymes,
          when concentration of virus in stool is highest. Concentration of virus in stool declines after
          jaundice appears, with most people no longer infectious about a week after jaundice appears. Children
          can shed HAV for longer periods than adults, up to 10 weeks or longer after onset of clinical illness.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="chronic-liver" title="Risk in Chronic Liver Disease" icon="⚠️">
        <p>
          People with chronic liver disease are not at increased risk for acquiring HAV infection. However, they
          are at an increased risk for life-threatening, fulminant (severe and sudden) hepatitis if they become
          infected with hepatitis A. People considered to have chronic liver disease include those with
          hepatitis B or C infection, cirrhosis, fatty liver disease, alcoholic liver disease, and autoimmune
          hepatitis.
        </p>
      </HcpGuideSection>

      <HcpGuideSection
        id="egypt"
        title="Seroprevalence of Hepatitis A Virus Antibodies Among Egyptian Children"
        icon="🇪🇬"
      >
        <h3 className="hcp-vax-product-subhead">Background</h3>
        <p>
          Hepatitis A virus (HAV) is the most common cause of acute viral hepatitis worldwide, with prevalence
          closely tied to sanitation and socioeconomic status. In Egypt, improvements in hygiene have shifted the
          pattern of HAV infection, affecting strategies for vaccination.
        </p>

        <h3 className="hcp-vax-product-subhead">Key Findings from a Cairo Study</h3>
        <ul>
          <li>The study analyzed 296 children (2.5–18 years) in Cairo, Egypt, across all social classes.</li>
          <li>The overall seropositivity for HAV antibodies was 61.4%.</li>
          <li>
            Seropositivity increased with age and decreased with higher social class:
            <ul>
              <li>Low social class: 87.5% seropositive</li>
              <li>High social class: 43.0% seropositive</li>
            </ul>
          </li>
          <li>No significant difference in seropositivity between boys and girls.</li>
          <li>Older children were more likely to be immune, reflecting increased exposure over time.</li>
          <li>
            High social class children were more likely to remain susceptible into adolescence, increasing their
            risk for symptomatic infection if exposed later in life.
          </li>
        </ul>

        <h3 className="hcp-vax-product-subhead">Implications for Vaccination Policy in Egypt</h3>
        <ul>
          <li>
            Routine national hepatitis A vaccination may not be necessary at this time, since more than half the
            population acquires immunity naturally at a young age.
          </li>
          <li>
            Targeted vaccination is recommended for children of high social class at preschool age, without
            requiring pre-testing for HAV antibodies.
          </li>
          <li>
            Vaccination may be considered for middle social class children at preschool age and for high social
            class adolescents (9–18 years) after testing for HAV antibodies.
          </li>
          <li>
            For children in low social class, early natural immunity is common, so vaccination is not currently
            needed.
          </li>
        </ul>

        <h3 className="hcp-vax-product-subhead">Further Recommendations</h3>
        <ul>
          <li>
            Population-based studies across different regions are essential for refining vaccination strategies
            and ensuring cost-effective use of resources.
          </li>
          <li>
            Monitoring sanitation and socioeconomic shifts is critical, as improved living standards may
            paradoxically increase susceptibility in older children and adults.
          </li>
        </ul>

        <h3 className="hcp-vax-product-subhead">Conclusion</h3>
        <p>
          Vaccination remains the best way to prevent hepatitis A, especially in groups with lower rates of
          natural immunity. In Egypt, targeted vaccination for high-risk (especially high social class) children
          is more appropriate than a universal program at present, but continued surveillance is important.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="resources" title="FAQ & Documents" icon="📚">
        <HcpGuideRelatedLinks
          links={[
            { href: '/faq/hepatitis-a', label: 'Hepatitis A — Frequently Asked Questions' },
            { href: '/doc/hepatitis-a', label: 'Hepatitis A — Clinical documents' },
          ]}
        />
      </HcpGuideSection>

      <HcpGuideSection id="references" title="References" icon="🔗">
        <ul className="hcp-vax-product-refs">
          <li>
            <a
              href="https://www.cdc.gov/hepatitis-a/vaccination/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC Hepatitis A Vaccination Information
            </a>
          </li>
          <li>
            <a
              href="https://www.emro.who.int/emhj-volume-14-2008/volume-14-issue-5/seroprevalence-of-hepatitis-a-virus-antibodies-among-a-sample-of-egyptian-children.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHO EMRO — Seroprevalence Study Among Egyptian Children
            </a>
          </li>
          <li>
            <a
              href="https://www.immunize.org/ask-experts/topic/hepa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Immunize.org Hepatitis A Expert Q&A
            </a>
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="inserts" title="Product Inserts (PDF)" icon="📄">
        <HcpProductPdfEmbed productName="Havrix" src="/Havrix.pdf" />
        <HcpProductPdfEmbed productName="Avaxim" src="/Avaxim.pdf" />
        <HcpProductPdfEmbed productName="Healive" src="/healive.pdf" />
      </HcpGuideSection>
    </HcpVaccineProductLayout>
  );
}
