import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_HEPATITIS_B_PAGE: FaqPageConfig = {
  "metaKey": "faqHepatitisB",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "Hepatitis B",
    "subtitle": "FAQ",
    "emoji": "🟠",
    "lead": "Birth dose, series completion, and high-risk hepatitis B vaccination.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": [
    {
      "id": "q-1",
      "question": "What are the signs and symptoms of hepatitis B?",
      "paragraphs": [
        "About 30%–50% people who are 5 years of age or older with acute (recently acquired) hepatitis B have initial signs or symptoms when infected with hepatitis B virus (HBV). Children younger than age 5 years and newly infected immunosuppressed adults rarely show any symptoms. When present, signs and symptoms of hepatitis B might include nausea, lack of appetite, tiredness, muscle, joint, or abdominal pain, fever, diarrhea or vomiting, headache, dark urine, clay-colored stools, and yellowing of the skin and whites of the eyes (jaundice). People who have such signs or symptoms generally feel quite ill and might need to be hospitalized. People with chronic (life-long) HBV infection might have no symptoms, have no evidence of liver disease, or have a range of disease from chronic hepatitis to cirrhosis or hepatocellular carcinoma, a type of liver cancer."
      ]
    },
    {
      "id": "q-2",
      "question": "How long does it take to show signs of illness after HBV infection?",
      "paragraphs": [
        "If signs or symptoms of illness occur, they begin an average of 90 days (range: 60–150 days) after exposure to HBV."
      ]
    },
    {
      "id": "q-3",
      "question": "How is hepatitis B virus (HBV) transmitted?",
      "paragraphs": [
        "Persons with chronic HBV infection (those with persistent hepatitis B surface antigen [HBsAg] in the serum for at least 6 months) serve as the main reservoir for HBV transmission. HBV is transmitted through percutaneous (through the skin), mucosal, or non-intact skin exposure to infectious blood or body fluids. HBV is concentrated most highly in blood, and percutaneous exposure is an efficient mode of transmission. Semen and vaginal secretions are infectious, and HBV also can be detected in saliva, tears, and bile. Cerebrospinal fluid, synovial fluid, pleural fluid, peritoneal fluid, pericardial fluid, and amniotic fluid are also considered potentially infectious. Urine, feces, vomitus, nasopharyngeal washings, sputum, and sweat are not efficient vehicles of transmission unless they contain blood because they contain low quantities of infectious HBV. Hepatitis B surface antigen (HBsAg) found in breast milk is also unlikely to lead to transmission, so HBV infection is not a contraindication to breastfeeding."
      ]
    },
    {
      "id": "q-4",
      "question": "What is the risk for transmitting HBV by oral sex?",
      "paragraphs": [
        "There are no specific data on transmission of bloodborne viruses through oral-genital sex. Saliva has not been associated with HBV transmission unless biting has taken place. HBV is not spread by kissing, hugging, sneezing, coughing, food or water, sharing eating utensils or drinking glasses, or casual contact."
      ]
    },
    {
      "id": "q-5",
      "question": "If acute hepatitis B resolves, can a person get HBV again?",
      "paragraphs": [
        "Generally speaking, no. A person with laboratory evidence of resolved hepatitis B infection is considered immune. Vaccination of such individuals is not harmful but is not necessary."
      ]
    },
    {
      "id": "q-6",
      "question": "How stable is HBV in the environment? What cleaners are effective?",
      "paragraphs": [
        "HBV is stable in the environment and remains viable for 7 or more days on environmental surfaces at room temperature. HBV can be transmitted despite the absence of visible blood. Any high level disinfectant that is tuberculocidal will inactivate HBV."
      ]
    },
    {
      "id": "q-7",
      "question": "What are the various serologic tests for hepatitis B?",
      "paragraphs": [
        "**HBsAg**: Hepatitis B surface antigen is a marker of infectivity. Its presence indicates either acute or chronic HBV infection.",
        "**anti-HBs**: Antibody to hepatitis B surface antigen is a marker of immunity (from infection, vaccination, or passively acquired). Avoid the abbreviation HBsAb due to confusion with HBsAg.",
        "**anti-HBc (total)**: Antibody to hepatitis B core antigen is a nonspecific marker of acute, chronic, or resolved infection; not a marker of vaccine-induced immunity.",
        "**IgM anti-HBc**: Indicates recent infection with HBV (&lt; 6 months) and acute infection.",
        "**HBeAg**: Marker of high infectivity; correlates with high replication; used in management of chronic infection.",
        "**Anti-HBe**: May be present in infected or immune persons; in chronic infection suggests lower viral titer and infectivity.",
        "**HBV-DNA**: Measure of viral load reflecting replication; correlates with infectivity; used to assess and monitor treatment of chronic HBV."
      ]
    },
    {
      "id": "q-8",
      "question": "Who should be tested for anti-HBs after vaccination?",
      "paragraphs": [
        "Not needed after routine vaccination of infants, children, or adults. Testing is recommended for: infants born to HBsAg-positive or unknown-status mothers (test anti-HBs and HBsAg at age 9–12 months); HCP and public safety workers at risk for exposure; hemodialysis patients, people living with HIV, and other immunocompromised people; and sex partners of HBsAg-positive people. Testing should be done 1–2 months after the final dose (or at 9–12 months for infants)."
      ]
    },
    {
      "id": "q-9",
      "question": "Isolated anti-HBc positive—should the person be vaccinated?",
      "paragraphs": [
        "Some isolated anti-HBc positives are false positives—if confirmed, vaccinate if indicated. If true positive, vaccination is not required (prior infection). In infants, isolated anti-HBc may reflect passive maternal antibody; anti-HBc testing in infants is not recommended."
      ]
    },
    {
      "id": "q-10",
      "question": "Interpreting a common serology scenario",
      "paragraphs": [
        "For HBsAg nonreactive, anti-HBc reactive, IgM anti-HBc nonreactive, and borderline anti-HBs: repeat full panel and quantify anti-HBs. If anti-HBs &gt;= 10 mIU/mL, immune—no action. If anti-HBs &lt; 10 mIU/mL, give 1 HepB dose and retest in 1–2 months; if still &lt; 10, complete the series and retest 1–2 months after last dose."
      ]
    },
    {
      "id": "q-11",
      "question": "If the HepB series is interrupted, restart?",
      "paragraphs": [
        "No. Do not restart—continue the series from where it stopped regardless of interval length."
      ]
    },
    {
      "id": "q-12",
      "question": "Pediatric dose given to an adult—what to do?",
      "paragraphs": [
        "If caught the same day, give the remaining half dose. If discovered later, do not count the dose; recall and give a full age-appropriate adult dose."
      ]
    },
    {
      "id": "q-13",
      "question": "How long is hepatitis B vaccine protective?",
      "paragraphs": [
        "Immunologic memory persists for at least 30 years and protects against clinical illness and chronic infection even if anti-HBs declines below detectable levels."
      ]
    },
    {
      "id": "q-14",
      "question": "Counseling an HBV-positive patient regarding partner protection",
      "paragraphs": [
        "Use condoms until postvaccination anti-HBs confirms protection. Partner should complete HepB series (2 or 3 doses depending on brand) and test 1–2 months after the last dose; anti-HBs &gt;= 10 mIU/mL indicates protection."
      ]
    },
    {
      "id": "q-15",
      "question": "Missed doses in adolescence—restart?",
      "paragraphs": [
        "No restart is needed regardless of how long since prior doses; continue the series."
      ]
    },
    {
      "id": "q-16",
      "question": "Test and vaccinate on the same day—order?",
      "paragraphs": [
        "Draw blood first, then vaccinate. Transient HBsAg positivity can occur shortly after vaccination."
      ]
    },
    {
      "id": "q-17",
      "question": "Blood donation or HBsAg testing after HepB dose—wait time?",
      "paragraphs": [
        "Wait at least 4 weeks. Transient HBsAg positivity has been detected up to 18 days after vaccination (up to 52 days among hemodialysis patients)."
      ]
    },
    {
      "id": "q-18",
      "question": "Should pregnant people be vaccinated?",
      "paragraphs": [
        "Yes. At-risk pregnant people should be vaccinated and counseled on HBV prevention."
      ]
    },
    {
      "id": "q-19",
      "question": "HepB for infants &lt; 2000 g—what schedule?",
      "paragraphs": [
        "Preterm infants &lt; 2000 g born to HBsAg-positive or unknown-status mothers: give HBIG + HepB within 12 hours of birth; do not count the birth dose; give 3 additional doses starting at age 1 month; test HBsAg and anti-HBs at 9–12 months (or 1–2 months after final dose if delayed). If HBsAg-negative mother, give first dose at discharge or age 1 month."
      ]
    },
    {
      "id": "q-20",
      "question": "Using Twinrix then single-antigen vaccines—how to complete?",
      "paragraphs": [
        "If 1 Twinrix dose was given: complete with 2 adult HepA + 2 adult HepB doses. If 2 Twinrix doses were given: complete with 1 adult HepA + 1 adult HepB. A Twinrix dose counts as a standard adult HepB dose but not a full adult HepA dose."
      ]
    },
    {
      "id": "q-21",
      "question": "Screening in pregnancy—what test?",
      "paragraphs": [
        "Use HBsAg to screen for transmissible infection; add HBV DNA for HBsAg-positive mothers to guide antiviral therapy. Manage infants of HBsAg-positive or unknown-status mothers with HBIG + HepB within 12 hours."
      ]
    },
    {
      "id": "q-22",
      "question": "Adults: who should be vaccinated and screened?",
      "paragraphs": [
        "CDC recommends HepB vaccination for all adults &lt; 60 years if not previously vaccinated; offer to ≥ 60 years and vaccinate routinely if at risk. All adults ≥ 18 years should be screened at least once with the triple panel (anti-HBs, total anti-HBc, HBsAg) regardless of vaccination history; periodic testing for ongoing risk."
      ]
    },
    {
      "id": "q-23",
      "question": "Adults with diabetes—HepB recommendations",
      "paragraphs": [
        "Vaccinate all people ≤ 59 years. For ≥ 60 years, vaccinate based on clinical judgment. Outbreaks have occurred in assisted blood glucose monitoring settings."
      ]
    },
    {
      "id": "q-24",
      "question": "Adult vaccination site and needle",
      "paragraphs": [
        "Use deltoid for IM injection; anterolateral thigh is acceptable. Do not use gluteus."
      ]
    },
    {
      "id": "q-25",
      "question": "Is post‑vaccination testing needed for adults?",
      "paragraphs": [
        "Only for those whose management depends on immune status: HCP/public safety workers at risk; hemodialysis and other immunocompromised persons; sex partners of HBsAg‑positive people. Test 1–2 months after last dose."
      ]
    },
    {
      "id": "q-26",
      "question": "Hemodialysis patients—testing frequency and boosters",
      "paragraphs": [
        "Test anti-HBs 1–2 months after vaccination and annually thereafter. If anti-HBs &lt; 10 mIU/mL, give a booster. No maximum number of boosters; test no more than annually."
      ]
    },
    {
      "id": "q-27",
      "question": "Off‑schedule adolescents or adults—minimal intervals",
      "paragraphs": [
        "3‑dose series minimums: ≥ 4 weeks between doses #1–#2, ≥ 8 weeks between #2–#3, and ≥ 16 weeks between #1–#3. Do not restart for long intervals."
      ]
    },
    {
      "id": "q-28",
      "question": "HCP who are anti‑HBs negative after series—management",
      "paragraphs": [
        "Option 1: give one dose and retest; if still negative, complete series and retest. Option 2: repeat full series and retest 1–2 months after last dose. If persistently negative and HBsAg/anti‑HBc negative, manage as vaccine non‑responder and counsel regarding HBIG after exposures."
      ]
    },
    {
      "id": "q-29",
      "question": "Routine boosters for HCP?",
      "paragraphs": [
        "No. Immunocompetent HCP with documented adequate anti‑HBs after a complete series are protected long‑term; no routine boosters or periodic testing needed."
      ]
    }
  ]
};
