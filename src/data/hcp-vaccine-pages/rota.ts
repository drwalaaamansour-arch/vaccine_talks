import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const RotaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpRota",
  "title": "Rota",
  "lead": "Rotavirus causes gastroenteritis with common symptoms like watery diarrhea and vomiting, especially in children. There is no specific medicine to treat rotavirus infection; clinicians treat symptoms. Rotavirus vaccine is",
  "emoji": "🌀",
  "imageSrc": "/rota%20v.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Rotavirus causes gastroenteritis with common symptoms like watery diarrhea and vomiting, especially in children. There is no specific medicine to treat rotavirus infection; clinicians treat symptoms. Rotavirus vaccine is the best protection for children."
        }
      ]
    },
    {
      "id": "rotavirus-structure",
      "title": "Rotavirus structure",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Triple‑layered, non‑enveloped, icosahedral virion with 11 dsRNA segments. Inner core (VP1 RNA‑dependent RNA polymerase, VP3 capping enzyme, enclosed by VP2), intermediate capsid (VP6 trimers), and outer layer (VP7 + spike protein VP4). VP4 is cleaved to VP8* and VP5* to mediate attachment/entry."
        },
        {
          "type": "ul",
          "items": [
            "Inner core: VP1, VP3 within VP2 around the 11 dsRNA segments.",
            "Intermediate capsid: 260 trimers of VP6.",
            "Outer coat: VP7 glycoprotein and VP4 spikes (cleaved to VP8*/VP5*)."
          ]
        }
      ]
    },
    {
      "id": "transmission",
      "title": "Transmission",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Fecal–oral route."
        }
      ]
    },
    {
      "id": "environmental-stability",
      "title": "Environmental stability",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Persists for hours on hands and days on dry surfaces (toys, clothes, furniture), facilitating outbreaks in childcare settings."
        }
      ]
    },
    {
      "id": "impact-by-age",
      "title": "Impact by age",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Highest burden &lt;5 years; severe diarrhea/vomiting → dehydration, hospitalization, and risk of death without prompt care."
        },
        {
          "type": "p",
          "text": "Usually mild or asymptomatic due to prior immunity; institutional outbreaks can affect elderly with more severe symptoms."
        },
        {
          "type": "p",
          "text": "Adults may shed virus without symptoms, contributing to transmission."
        }
      ]
    },
    {
      "id": "vaccines-and-prevention",
      "title": "Vaccines and prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "RotaTeq (2006): five reassortant human–bovine strains; 3 doses.",
            "Rotarix (2008): attenuated human strain; 2 doses."
          ]
        },
        {
          "type": "p",
          "text": "Both are oral vaccines. Widespread use reduces hospitalizations and deaths; herd effects protect unvaccinated children."
        }
      ]
    },
    {
      "id": "global-impact",
      "title": "Global impact",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Before immunization, rotavirus caused &gt;500,000 deaths/year (mostly in LMICs). Similar infection rates in rich/poor countries showed hygiene alone is insufficient; vaccination is essential."
        }
      ]
    },
    {
      "id": "rotavirus-in-egypt",
      "title": "Rotavirus in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Benha J Appl Sci (2018): dominant strains G1P4, G1P8, G3P8 across seasons. Zoonoses Review (2023): in children, G1 most frequent, then G2, G3, G4, G8, G9, G12; mixed infections noted. Egyptian Pharm J (Apr 2024): rotavirus remains a leading cause of pediatric diarrhea; diverse genotypes detected by RT‑PCR; surveillance needed to guide vaccination strategies."
        }
      ]
    }
  ],
  "faqHref": "/faq/rotavirus",
  "docHref": "/doc/rotavirus",
  "references": [
    {
      "href": "https://www.cdc.gov/rotavirus/vaccines/index.html",
      "label": "CDC – Rotavirus vaccines"
    },
    {
      "href": "https://www.who.int/publications/i/item/WHO-WER9628",
      "label": "WHO WER 96(28)"
    },
    {
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7224034/",
      "label": "Egypt genotype studies"
    },
    {
      "href": "https://virologyj.biomedcentral.com/articles/10.1186/s12985-024-02495-8",
      "label": "Virology Journal 2024"
    }
  ],
  "pdfs": [
    {
      "productName": "Rotarix",
      "src": "/Rotarix%20.pdf"
    },
    {
      "productName": "RotaTeq",
      "src": "/Rotateq.pdf"
    }
  ]
};
