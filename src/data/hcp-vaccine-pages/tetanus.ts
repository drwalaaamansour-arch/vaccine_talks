import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const TetanusPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpTetanus",
  "title": "Tetanus",
  "lead": "Tetanus is an acute infectious disease caused by Clostridium tetani. Despite being vaccine‑preventable, it remains a public‑health problem where immunization is low and unclean birth practices persist.",
  "emoji": "🔧",
  "imageSrc": "/tet.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Tetanus is an acute infectious disease caused by Clostridium tetani. Despite being vaccine‑preventable, it remains a public‑health problem where immunization is low and unclean birth practices persist."
        }
      ]
    },
    {
      "id": "transmission-and-epidemiology",
      "title": "Transmission and Epidemiology",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Infection occurs when spores contaminate cuts or wounds. Spores are ubiquitous (soil, ash, feces, rusty surfaces). No person‑to‑person transmission. Highest risk in inadequately immunized pregnant women and newborns. Incubation usually within 14 days (range 3–21). In 2018, ~25,000 newborn deaths from neonatal tetanus (97% reduction since 1988) due to TTCV expansion. In 2023, 84% of infants received 3 DTP doses globally."
        }
      ]
    },
    {
      "id": "pathogenesis-and-risk-factors",
      "title": "Pathogenesis and Risk Factors",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "C. tetani spores resist heat and many antiseptics, surviving for years. Neonatal tetanus follows non‑sterile cord care (contaminated instruments/substances). Risk rises with unclean deliveries. Adolescent/adult males may be at risk due to waning immunity and fewer boosters (e.g., circumcision without vaccination review)."
        }
      ]
    },
    {
      "id": "clinical-features-symptoms-and-diagnosis",
      "title": "Clinical Features: Symptoms and Diagnosis",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Diagnosis is clinical; labs are not required. Typical features: Jaw cramping / inability to open mouth (lockjaw) Muscle spasms (back, abdomen, limbs); painful spasms precipitated by stimuli Dysphagia; seizures; headache, fever, sweating Autonomic signs: BP fluctuations, tachycardia"
        },
        {
          "type": "p",
          "text": "Neonatal tetanus: inability to suck/breastfeed and excessive crying, then rigidity/spasms. WHO case: loss of sucking/crying between days 3–28 plus rigidity or spasms. Non‑neonatal tetanus: sustained facial spasm (risus sardonicus) or painful contractions, sometimes without a clear wound history."
        }
      ]
    },
    {
      "id": "treatment-and-prevention",
      "title": "Treatment and Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Hospital care in a low‑stimulus setting",
            "Immediate TIG (human tetanus immune globulin)",
            "Aggressive wound care",
            "Drugs for spasm control",
            "Antibiotics",
            "Tetanus vaccination"
          ]
        },
        {
          "type": "p",
          "text": "Recovery does not confer immunity; immunize even after illness."
        },
        {
          "type": "p",
          "text": "WHO recommends six TTCV doses (three primary + three boosters) for lifelong protection: Primary series: start at 6 weeks; ≥4‑week intervals Boosters: at 12–23 months, 4–7 years, and 9–15 years (≥4 years between boosters)"
        },
        {
          "type": "p",
          "text": "Formulations: DT, DTaP, Td, Tdap. Prevent neonatal tetanus by immunizing women of reproductive age (during or outside pregnancy), clean delivery/cord care, and safe surgical/dental wound care. Countries with high coverage have very low incidence."
        }
      ]
    },
    {
      "id": "global-and-national-response",
      "title": "Global and National Response",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The MNTE goal (WHA 1989) targets &lt;1 case per 1,000 live births per district. The MNTE Initiative (UNICEF/WHO/UNFPA, 1999) accelerated progress; as of Jul 2023, 11 countries have not yet achieved elimination."
        },
        {
          "type": "ul",
          "items": [
            "Strengthen routine immunization for pregnant women and children",
            "Clean delivery and cord care",
            "Reliable neonatal tetanus surveillance",
            "School‑based booster programs"
          ]
        }
      ]
    },
    {
      "id": "tetanus-immunity-in-egypt",
      "title": "Tetanus Immunity in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Survey (n=709; age 2 months–105 years; five regions) using ELISA anti‑tetanus IgG: 31.7% susceptible (IgG &lt; 0.15 IU/ml) 15.7% partially protected (0.15–1.0 IU/ml) 52.6% protected (≥1.0 IU/ml) Protection was 68.3% in ages 2 months–50 years, but susceptibility increased with age (up to 90.3% in older groups). More males were unprotected than females. Findings support monitoring and timely boosters to maintain long‑lasting protection."
        }
      ]
    }
  ],
  "references": [
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/tetanus",
      "label": "WHO – Tetanus"
    },
    {
      "href": "https://pubmed.ncbi.nlm.nih.gov/12237476/",
      "label": "Tetanus immunity survey in Egypt"
    }
  ],
  "pdfs": [
    {
      "productName": "Tet 1500",
      "src": "/Tet%201500.pdf"
    },
    {
      "productName": "Tet 30000",
      "src": "/Tet%2030000.pdf"
    },
    {
      "productName": "Toxoid",
      "src": "/Toxoid.pdf"
    }
  ]
};
