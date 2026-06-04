import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const RabirsPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpRabies",
  "title": "Rabies (HCP)",
  "lead": "Rabies is a deadly viral disease affecting the central nervous system of mammals, including humans. It is almost always fatal once symptoms appear, yet entirely preventable with timely vaccination and proper wound care. ",
  "emoji": "🐕",
  "imageSrc": "/rabies%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Rabies is a deadly viral disease affecting the central nervous system of mammals, including humans. It is almost always fatal once symptoms appear, yet entirely preventable with timely vaccination and proper wound care. As a vaccine‑preventable disease, elimination is feasible with coordinated efforts."
        }
      ]
    },
    {
      "id": "global-epidemiology",
      "title": "Global Epidemiology",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Present on every continent except Antarctica, rabies causes an estimated 59,000 deaths annually—mostly in Asia and Africa. About 40% of victims are children &lt;15 years. Economic costs (~US$8.6B/year) include medical care, lost income, and livestock losses. Underreporting is common; rabies is a neglected tropical disease receiving limited funding relative to its burden."
        }
      ]
    },
    {
      "id": "transmission-and-reservoirs",
      "title": "Transmission and Reservoirs",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Transmission is primarily via bites/scratches from infected animals; virus is present in saliva. Dogs cause up to 99% of human cases globally. Other reservoirs include bats, cats, foxes, raccoons, and regional wildlife. Rare routes (organ transplant, lab aerosols) occur. Human‑to‑human transmission is exceedingly rare."
        }
      ]
    },
    {
      "id": "symptoms-and-clinical-forms",
      "title": "Symptoms and Clinical Forms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Incubation is typically 1–3 months (range days to years). Early nonspecific symptoms: fever, headache, malaise. Progressive features: anxiety, agitation, confusion, hallucinations. Two clinical forms: Furious rabies: hyperactivity, hydrophobia, aerophobia, agitation with lucid intervals (most common). Paralytic rabies: ~20%; ascending paralysis from bite site to coma and death. After symptom onset, rabies is almost invariably fatal—prevention and early care are critical."
        }
      ]
    },
    {
      "id": "prevention-and-control",
      "title": "Prevention and Control",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Mass dog vaccination to interrupt transmission.",
            "Post‑exposure prophylaxis (PEP): immediate wound washing (≥15 minutes with soap/water), vaccine, and rabies immunoglobulin when indicated.",
            "Public awareness on bite avoidance and prompt care seeking.",
            "Surveillance and reporting to target interventions and track progress."
          ]
        },
        {
          "type": "p",
          "text": "The WHO‑led Zero by 30 initiative targets elimination of dog‑mediated human rabies by 2030 via a One Health approach."
        }
      ]
    },
    {
      "id": "rabies-in-egypt",
      "title": "Rabies in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt reports sporadic human cases annually, mainly from dog exposures; cats and livestock can also transmit. Children and rural communities are disproportionately affected. Recent progress includes mass dog vaccination, improved surveillance, and integration of rabies prevention in primary care; challenges remain with stray populations, coverage gaps, and awareness."
        }
      ]
    },
    {
      "id": "egypt-s-strategic-framework-7-pillars",
      "title": "Egypt's Strategic Framework (7 Pillars)",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Leadership & coordination",
            "Surveillance of human and animal rabies",
            "Dog vaccination scale-up",
            "Access to PEP (vaccine and immunoglobulin)",
            "Community engagement",
            "Research & innovation",
            "Digital transformation for reporting and tracking"
          ]
        }
      ]
    },
    {
      "id": "recent-updates-2025-prophylaxis-protocols",
      "title": "Recent Updates (2025): Prophylaxis Protocols",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Wound care: wash thoroughly with soap/water ≥15 minutes.",
            "Rabies vaccine: IM on days 0, 3, 7, 14 after exposure.",
            "Rabies immunoglobulin: infiltrate around wounds for Category III exposures ASAP.",
            "Special populations: children, pregnant women, and immunocompromised should receive PEP as indicated (5‑dose schedule for immunocompromised).",
            "PrEP: for high‑risk groups (veterinarians, lab staff, travelers to endemic regions)."
          ]
        },
        {
          "type": "p",
          "text": "Ongoing provider training and public campaigns ensure correct adherence to protocols nationwide."
        }
      ]
    }
  ],
  "faqHref": "/faq/rabies",
  "docHref": "/doc/rabies",
  "references": [
    {
      "href": "https://www.fao.org/egypt/news/detail/-World-Rabies-Day-2021-Celebration---Egypt-presents-the-Strategic-Framework-for-Elimination-Rabies-by-2030/en",
      "label": "FAO Egypt – Strategic Framework"
    },
    {
      "href": "https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html#:~:text=One%20injection%20each%20on%20days,fifth%20dose%20on%20day%2028.",
      "label": "CDC – PEP"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/rabies",
      "label": "WHO – Rabies Fact Sheet"
    }
  ],
  "pdfs": [
    {
      "productName": "Rabies",
      "src": "/Rabies.pdf"
    },
    {
      "productName": "Verorab",
      "src": "/verorab.pdf"
    },
    {
      "productName": "Abhayrab",
      "src": "/Abhayrab.pdf"
    },
    {
      "productName": "Rabies Immunoglobulin (Berirab)",
      "src": "/rabies%20immuno%20berirab.pdf"
    }
  ]
};
