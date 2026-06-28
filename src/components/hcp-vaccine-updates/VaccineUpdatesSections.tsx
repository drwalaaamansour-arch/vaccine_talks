import Link from 'next/link';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpVaccineUpdatesMultiPdf from '@/components/hcp-vaccine-updates/HcpVaccineUpdatesMultiPdf';
import VaccineUpdateShell from '@/components/hcp-vaccine-updates/VaccineUpdateShell';

const IBD_PDF =
  '/The%20impact%20of%20a%20pneumococcal%20vaccination%20on%20disease%20activity%20in%20children%20and%20adolescents%20with%20inflammatory%20bowel%20disease%20%20a%202-year%20prospective%20study.pdf';

export default function VaccineUpdatesSections({ visibleIds }: { visibleIds: string[] }) {
  const show = (id: string) => visibleIds.includes(id);

  return (
    <div className="hcp-vu-updates-list">
      {show('pcv21-mflusiva-jun-2026') ? (
        <VaccineUpdateShell
          id="pcv21-mflusiva-jun-2026"
          date="June 17, 2026"
          badge="FDA Update"
          title="FDA expands indication for 21-valent pneumococcal conjugate vaccine (PCV21, Capvaxive, Merck) to include children at increased risk."
        >
          <h3>PCV-21</h3>
          <p>
            On June 17, FDA expanded the indicated age range for PCV-21 (Capvaxive, Merck) to include children
            and adolescents age 2 through 17 years who have completed a primary pediatric PCV series and have one
            or more chronic medical conditions that put them at increased risk for invasive pneumococcal disease
            (IPD). This is the same population of children for whom a dose of pneumococcal polysaccharide vaccine
            (PPSV23, Pneumovax23, Merck) is currently recommended. A primary series in infants and young children
            is currently recommended to be completed with PCV15 (Vaxneuvance, Merck), or PCV20 (Prevnar20, Pfizer).
          </p>
          <p>
            PCV21 is routinely recommended for adults age 50 and older and for those at increased risk age 18
            through 49. PCV21 is not currently recommended for primary pneumococcal vaccination of young children
            because, although it includes serotypes more likely to affect adults that are not included in PCV15 or
            PCV20, it does not include some of the serotypes most likely to cause serious disease in young children.
          </p>

          <HcpVaccineUpdatesMultiPdf
            pdfs={[
              {
                label: 'FDA approval letter (June 17, 2026)',
                src: '/june-17-2026-approval-letter-capvaxive.pdf',
                title: 'FDA approval letter for Capvaxive (PCV21)',
              },
              {
                label: 'Package insert',
                src: '/capvaxive-package-insert.pdf',
                title: 'Capvaxive (PCV21) package insert',
              },
            ]}
          />

          <div className="hcp-vu-report-cite">
            <p>
              <strong>Source:</strong>{' '}
              <a href="https://www.immunize.org/" target="_blank" rel="noopener noreferrer">
                Immunize.org
              </a>
              .
            </p>
          </div>
        </VaccineUpdateShell>
      ) : null}

      {show('acog-maternal-2026') ? (
        <VaccineUpdateShell
          id="acog-maternal-2026"
          date="June 10, 2026"
          badge="Guidelines"
          title="ACOG releases 2026 Maternal Immunization Schedule, endorsed by 13 medical, nursing, and pharmacy organizations"
        >
          <p>
            On June 10, the American College of Obstetricians and Gynecologists (ACOG) released its 2026 Maternal
            Immunization Schedule. ACOG&apos;s maternal immunization schedule provides evidence-based vaccine
            recommendations to protect U.S.-based pregnant, postpartum, and lactating patients and their infants
            from vaccine-preventable illnesses.
          </p>
          <p>
            The new ACOG guidance continues to recommend routine vaccination during pregnancy with four vaccines
            (influenza, COVID-19, Tdap, RSV). Vaccination during pregnancy confers protection during the pregnancy,
            as well as to the newborn in the early months of life. RSV vaccination is licensed and recommended for
            one pregnancy only; in subsequent pregnancies, infants should receive an RSV preventive antibody product.
          </p>
          <p>
            ACOG recommends seven additional vaccines (pneumococcal, meningococcal, HepA, HepB, HPV, MMR, varicella)
            when indicated based on patient-specific circumstances. The recommended timing of these additional
            vaccines varies because some are contraindicated or not recommended during pregnancy.
          </p>
          <p>
            All immunizations recommended on the ACOG schedule are also listed on the 2025 CDC schedule last updated
            July 2, 2025, which is currently in effect and published on the CDC website. A difference is that CDC
            currently recommends COVID-19 vaccination after shared clinical decision-making, while ACOG routinely
            recommends COVID-19 vaccination during pregnancy.
          </p>
          <h3>Endorsing organizations</h3>
          <p>ACOG&apos;s 2026 Maternal Immunization Schedule was endorsed by 13 medical, nursing, and pharmacy organizations, including:</p>
          <ul>
            <li>American Academy of Family Physicians (AAFP)</li>
            <li>American Academy of Pediatrics (AAP)</li>
            <li>American Academy of Physician Associates (AAPA)</li>
            <li>American College of Nurse-Midwives (ACNM)</li>
            <li>Association of Physician Associates in Obstetrics and Gynecology (APAOG)</li>
            <li>American Pharmacists Association (APhA)</li>
            <li>Association of Women&apos;s Health, Obstetric and Neonatal Nurses (AWHONN)</li>
            <li>Council of Medical Specialty Societies (CMSS)</li>
            <li>Infectious Diseases Society of America (IDSA)</li>
            <li>Infectious Diseases Society for Obstetrics and Gynecology (IDSOG)</li>
            <li>National Medical Association (NMA)</li>
            <li>National Association of Nurse Practitioners in Women&apos;s Health (NPWH)</li>
            <li>Society for Maternal-Fetal Medicine (SMFM)</li>
          </ul>
          <HcpGuidePdfEmbed
            src="/maternal-immunization-schedule.pdf"
            title="ACOG 2026 Maternal Immunization Schedule (PDF)"
          />
          <Link
            href="/hcp-special-populations/pregnancy-breastfeeding"
            className="hcp-guide-related-link"
          >
            To read more about vaccination during pregnancy, press here
          </Link>
        </VaccineUpdateShell>
      ) : null}

      {show('autism-evidence') ? (
        <VaccineUpdateShell
          id="autism-evidence"
          date="April 2026"
          badge="Evidence Update"
          title="Immunize.org and the Autism Science Foundation updated their Evidence Shows Vaccines Unrelated to Autism resource"
        >
          <p>
            Extensive scientific research and reviews by global medical authorities confirm that vaccines are
            unrelated to the development of autism. Multiple large-scale studies have refuted links between
            autism and the MMR vaccine, thimerosal-containing vaccines, or the total number of vaccines
            administered to children.
          </p>

          <h3>Scientific Consensus on MMR and Autism</h3>
          <p>
            Independent groups of experts, including the National Academy of Medicine, have reviewed the
            evidence and concluded that the MMR vaccine does not cause autism.
          </p>
          <ul>
            <li>
              <strong>Study Scale:</strong> Research includes massive population studies, such as a Danish
              cohort of over 650,000 children, which found no increased risk for autism following vaccination.
            </li>
            <li>
              <strong>High-Risk Groups:</strong> Studies specifically looking at children with older siblings
              who have autism (a higher-risk group) found no association between the MMR vaccine and the
              development of ASD.
            </li>
            <li>
              <strong>Retracted Research:</strong> The original 1998 claim of a link between MMR and autism was
              found to be based on falsified data and &quot;dishonest and irresponsible research&quot;. The study
              was fully retracted, and the doctor&apos;s medical license was revoked.
            </li>
          </ul>

          <h3>Thimerosal and Immune System Capacity</h3>
          <p>
            Concerns regarding vaccine ingredients or &quot;overwhelming&quot; a baby&apos;s immune system are not
            supported by clinical evidence.
          </p>
          <ul>
            <li>
              <strong>Thimerosal:</strong> This mercury-based preservative (ethylmercury) is cleared from the
              body quickly and is not linked to autism. Even after its removal from most childhood vaccines in
              2001, autism rates continued to rise, further proving no correlation.
            </li>
            <li>
              <strong>Antigens:</strong> A baby&apos;s immune system encounters significantly more antigens daily
              from common bacteria and viruses than those found in the entire childhood vaccination schedule.
            </li>
          </ul>

          <h3>Known Risk Factors for Autism</h3>
          <p>
            While the exact causes of autism are still being studied, current research emphasizes genetic and
            environmental factors rather than vaccines.
          </p>
          <ul>
            <li>
              <strong>Genetics:</strong> Over 100 genes associated with brain development have been identified as
              risk factors. Brain differences in children with ASD can be detected as early as six months of age,
              often before vaccines are administered.
            </li>
            <li>
              <strong>Environmental Factors:</strong> Factors linked to increased ASD risk include maternal
              infections with fever during pregnancy, high levels of air pollution, and certain medications like
              valproic acid.
            </li>
            <li>
              <strong>Prevalence:</strong> The rising number of autism diagnoses is largely attributed to increased
              awareness, better diagnostic practices, and expanded access to services.
            </li>
          </ul>

          <HcpVaccineUpdatesMultiPdf
            pdfs={[
              { label: 'Autism', src: '/Autism%20.pdf', title: 'Autism evidence PDF' },
              { label: 'MMR and autism', src: '/Mmr%20and%20autism%20.pdf', title: 'MMR and autism evidence PDF' },
            ]}
          />
        </VaccineUpdateShell>
      ) : null}

      {show('pcv13-ibd') ? (
        <VaccineUpdateShell
          id="pcv13-ibd"
          date="March 30, 2026"
          badge="Study"
          title="The Impact of a Pneumococcal Vaccination on Disease Activity in Children and Adolescents with Inflammatory Bowel Disease: A 2-Year Prospective Study"
        >
          <p>
            In its March 30 issue, <em>Expert Review of Vaccines</em> published this prospective study, designed
            to evaluate whether PCV13 administration was associated with flare ups in pediatric inflammatory bowel
            disease (IBD) patients. The study concluded that a single dose of PCV13 does not increase inflammatory
            bowel disease activity in pediatric IBD patients during the 24 months following vaccination.
          </p>
          <p>
            Infectious diseases are known triggers for inflammatory bowel disease (IBD) exacerbations. Although
            vaccines can prevent many such infections, hesitancy persists among pediatric IBD patients and their
            caregivers due to concerns about vaccine-induced disease flare-ups. The aim of the study was to evaluate
            the impact of the 13-valent pneumococcal conjugate vaccine (PCV13) on disease activity in children and
            adolescents with IBD over a 24-month period post-vaccination.
          </p>
          <p>
            This prospective, multicenter cohort study included IBD patients aged 4–18 years. Participants were
            assigned to a vaccinated group (single PCV13 dose) or an unvaccinated control group. Disease activity
            was monitored using PUCAI/PCDAI scores, and exacerbation rates were recorded at 6, 12, 18, and 24
            months.
          </p>
          <p>
            A total of 279 patients (52.3% male; median age, 167 months) were enrolled, of whom 93 (33.3%) received
            PCV13. The control group showed higher, but not statistically significant, disease activity at any time
            point and exacerbation rates.
          </p>
          <p>
            <strong>Conclusion:</strong> A single dose of PCV13 does not increase disease activity in pediatric IBD
            patients during the 24 months following vaccination.
          </p>
          <HcpGuidePdfEmbed
            src={IBD_PDF}
            title="Pneumococcal vaccination in pediatric IBD study PDF"
          />
        </VaccineUpdateShell>
      ) : null}

      {show('arexvy-fda') ? (
        <VaccineUpdateShell
          id="arexvy-fda"
          date="March 13, 2026"
          badge="FDA Update"
          title="FDA expands license for GSK's RSV vaccine (Arexvy) to include high-risk adults age 18 to 49 years"
        >
          <p>
            On March 13, FDA expanded the indicated age range for Arexvy (RSV vaccine, GSK). This approval expands
            the indication to include adults age 18 through 49 years who are at increased risk for lower respiratory
            tract disease (LRTD) due to RSV. Arexvy should not be used during pregnancy. Arexvy&apos;s license
            continues to include adults age 60 years or older and adults age 50 through 59 years with high-risk
            conditions for severe RSV disease.
          </p>
          <p>
            Due to the stay of ACIP activities, it is not known when CDC recommendations for use of this product
            will be considered.
          </p>
          <p>
            Three RSV vaccines are now licensed for all adults age 60 years or older AND adults age 18 through 59
            years with high-risk conditions for severe RSV disease:
          </p>
          <ul>
            <li>Arexvy (RSVpreF3, GSK)</li>
            <li>Abrysvo (RSVpreF, Pfizer)</li>
            <li>mResvia (mRNA RSV, Moderna)</li>
          </ul>
          <HcpGuidePdfEmbed
            src="/march-12-2026-approval-letter-arexvy.pdf"
            title="FDA approval letter for Arexvy"
          />
        </VaccineUpdateShell>
      ) : null}

      {show('aafp-2026') ? (
        <VaccineUpdateShell
          id="aafp-2026"
          date="March 1, 2026"
          badge="Guidelines"
          title="American Academy of Family Physicians releases its 2026 recommended schedules for children and adolescents and for adults"
        >
          <p>
            On March 1, American Academy of Family Physicians (AAFP) released its 2026 immunization schedules. The
            AAFP&apos;s guidance aligns with the AAP&apos;s 2026 childhood schedule and carries forward the 2025 adult
            schedule with targeted updates. Both schedules provide clear, practical, evidence-based recommendations.
          </p>
          <HcpVaccineUpdatesMultiPdf
            heading="AAFP immunization schedules (PDF)"
            pdfs={[
              {
                label: 'Birth through 18 years',
                src: '/adolescent-aafp-imm-schedule%20birth%20to%2018.pdf',
                title: 'AAFP immunization schedule birth through 18 years',
              },
              {
                label: 'Adult',
                src: '/adult-aafp-imm-schedule.pdf',
                title: 'AAFP adult immunization schedule',
              },
            ]}
          />
        </VaccineUpdateShell>
      ) : null}

      {show('pentavalent-menacwy') ? (
        <VaccineUpdateShell
          id="pentavalent-menacwy"
          date="January 8, 2026"
          badge="New Recommendation"
          title="GSK Pentavalent Meningococcal Vaccine Endorsed by ACIP"
        >
          <p>
            CDC&apos;s Advisory Committee on Immunization Practices (ACIP) endorsed a new GSK pentavalent
            meningococcal vaccine (MenACWY-CRM/MenB-4C, Penmenvy) for use in people aged ≥10 years when both MenACWY
            and MenB are indicated.
          </p>
          <p>
            <strong>Safety Profile:</strong> The paper is refreshingly transparent about the science, noting:{' '}
            <em>
              &quot;Serious adverse events possibly related to vaccination were rare and occurred at similar
              frequencies in pentavalent and control groups.&quot;
            </em>
          </p>
          <p>
            <strong>Health System Impact:</strong>{' '}
            <em>
              &quot;Using pentavalent vaccine as an alternative to concomitant administration of MenACWY and MenB was
              the most cost-saving of the policy questions considered.&quot;
            </em>
          </p>
          <p>
            <strong>Clinical Significance:</strong> For clinicians, researchers, and immunization program managers,
            this recommendation is less about novelty — and more about implementation efficiency, equity, and
            real-world feasibility.
          </p>
          <div className="hcp-vu-report-cite">
            <p>
              <strong>Full Report:</strong>
            </p>
            <p>
              <strong>
                Use of the GSK MenACWY-CRM/MenB-4C Pentavalent Meningococcal Vaccine Among Persons Aged ≥10 Years —
                ACIP Recommendations, United States, 2025
              </strong>
            </p>
            <p className="hcp-vu-report-source">
              Morbidity and Mortality Weekly Report, Vol. 75, No. 1 (Jan 8, 2026)
            </p>
          </div>
          <HcpGuidePdfEmbed
            src="/updates/%20acwyb%20mmwr.pdf"
            title="MMWR Pentavalent Meningococcal Vaccine PDF"
          />
          <p className="hcp-vu-disclaimer-ar" dir="rtl" lang="ar">
            المصدر: Morbidity and Mortality Weekly Report (MMWR)
            <br />
            لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض
            تجارية
          </p>
        </VaccineUpdateShell>
      ) : null}
    </div>
  );
}
