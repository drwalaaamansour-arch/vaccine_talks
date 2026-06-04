import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const PneumococcalPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpPneumococcal",
  "title": "Pneumococcal",
  "lead": "Pneumococcal disease, caused by the bacterium Streptococcus pneumoniae, remains a significant cause of morbidity and mortality worldwide. With over 100 distinct serotypes identified, this bacterium commonly inhabits the ",
  "emoji": "🦠",
  "imageSrc": "/pneumo.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Pneumococcal disease, caused by the bacterium Streptococcus pneumoniae, remains a significant cause of morbidity and mortality worldwide. With over 100 distinct serotypes identified, this bacterium commonly inhabits the human respiratory tract, yet only a select few serotypes are responsible for most invasive disease."
        }
      ]
    },
    {
      "id": "understanding-pneumococcal-disease",
      "title": "Understanding Pneumococcal Disease",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "S. pneumoniae is a Gram‑positive bacterium that can asymptomatically colonize the nasopharynx in 5%–90% of healthy individuals, depending on age, geography, and environment. Transmission is primarily via airborne droplets, so close‑contact settings facilitate spread."
        }
      ]
    },
    {
      "id": "serotypes-and-disease-manifestation",
      "title": "Serotypes and Disease Manifestation",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The polysaccharide capsule underpins serotyping (&gt;100 serotypes). Although most serotypes can cause disease, surveillance shows a minority account for the majority of invasive pneumococcal disease (IPD). Distribution varies by region, age, and vaccination status. IPD occurs when bacteria invade sterile sites. Major syndromes: Bacteremia: bloodstream infection leading to sepsis and possible multi‑organ dysfunction. Meningitis: infection of meninges with headache, fever, neck stiffness, altered consciousness. These are medical emergencies with high mortality and long‑term sequelae among the elderly, infants, and persons with comorbidities."
        }
      ]
    },
    {
      "id": "pneumococcal-vaccines",
      "title": "Pneumococcal Vaccines",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Vaccines target serotypes most likely to cause severe disease. Two main types:"
        },
        {
          "type": "p",
          "text": "PPSV23 contains purified polysaccharides from 23 serotypes. It elicits a T‑cell–independent response that lacks immunologic memory, is less effective in young children and elderly, and does not reduce nasopharyngeal carriage—limiting indirect (community) impact."
        },
        {
          "type": "p",
          "text": "PCV13, PCV15, PCV20 link polysaccharides to a carrier protein, engaging T‑helper cells to generate stronger, longer‑lasting immunity with memory and reduced carriage (herd protection)."
        },
        {
          "type": "p",
          "text": "PCV10 (Synflorix) protects against ten serotypes. Large studies show prevention of invasive disease, bacterial pneumonia, and acute otitis media in children, with strong antibody responses. Boosters enhance effectiveness, especially in ages 2–5 years."
        }
      ]
    },
    {
      "id": "serotype-coverage-and-regional-considerations-serotype-4",
      "title": "Serotype Coverage and Regional Considerations (Serotype 4)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "In U.S. surveillance (ABCs; Alaska; Navajo Nation), some western adult populations have ≥30% IPD due to serotype 4. Serotype 4 is included in PCV13/15/20 and PPSV23, but absent from adult PCV21 (Capvaxive). ACIP schedules for at‑risk adults in these areas maintain serotype‑4 coverage (e.g., PCV20 alone or PCV15 followed by PPSV23)."
        }
      ]
    },
    {
      "id": "community-acquired-pneumonia-in-egypt-epidemiology-and-p",
      "title": "Community‑Acquired Pneumonia in Egypt: Epidemiology and Practice",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "CAP remains a major concern in Egypt; S. pneumoniae is consistently among leading pathogens alongside H. influenzae and M. pneumoniae. Only 5–10% of CAP patients seek clinic care, suggesting underdiagnosis/underreporting."
        },
        {
          "type": "p",
          "text": "Elderly patients often present atypically (confusion, falls). Empiric antibiotics are commonly started prior to pathogen identification."
        },
        {
          "type": "ul",
          "items": [
            "Average hospital stay ≈ 7 days; longer in elderly/comorbidities.",
            "Mortality &lt; 10% in high‑risk groups.",
            "Antimicrobial misuse (inappropriate/delayed) prolongs stay and may worsen outcomes."
          ]
        }
      ]
    },
    {
      "id": "current-adult-vaccination-recommendations-egypt-experts",
      "title": "Current Adult Vaccination Recommendations (Egypt experts)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Influenza vaccine: annually for high‑risk adults.",
            "Pneumococcal vaccines: PCV13, PPSV23, and PCV20 as indicated by age/risk.",
            "COVID‑19 vaccine: not mandatory; recommended for vulnerable populations.",
            "RSV vaccine: increasingly prioritized for adult respiratory disease prevention."
          ]
        },
        {
          "type": "p",
          "text": "Despite recommendations, pneumococcal vaccine uptake is ~1% nationally. A complete pneumococcal regimen offers long‑term protection (single administration), whereas influenza requires annual revaccination."
        }
      ]
    }
  ],
  "faqHref": "/faq/pneumococcal",
  "docHref": "/doc/pneumococcal",
  "references": [
    {
      "href": "http://www.immunize.org/ask-experts/topic/pneumococcal/",
      "label": "Immunize.org – Pneumococcal"
    },
    {
      "href": "https://www.tandfonline.com/doi/full/10.1080/14760584.2024.2348608#d1e471",
      "label": "Expert Rev Vaccines 2024 – Egypt CAP"
    },
    {
      "href": "https://www.ema.europa.eu/en/medicines/human/EPAR/synflorix",
      "label": "EMA – Synflorix (PCV10)"
    }
  ],
  "pdfs": [
    {
      "productName": "Synflorix",
      "src": "/synflorix.pdf"
    },
    {
      "productName": "Prevenar",
      "src": "/prevenar.pdf"
    },
    {
      "productName": "Pneumocil",
      "src": "/pneumocil.pdf"
    },
    {
      "productName": "Pneumo 23 (PPSV23)",
      "src": "/Pneumo%2023.pdf"
    },
    {
      "productName": "Vaxneuvance",
      "src": "/Vaxnuvance%20.pdf"
    },
    {
      "productName": "PCV 20 EMA Label",
      "src": "/PCV%2020%20EMA%20Label.pdf"
    },
    {
      "productName": "Weuphoria",
      "src": "/weuphoria.pdf"
    }
  ]
};
