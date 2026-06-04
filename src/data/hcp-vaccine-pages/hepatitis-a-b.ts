import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const HepatitisABPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHepatitisAB",
  "title": "Hepatitis A&B",
  "lead": "Hepatitis A+B vaccine contains paediatric dose of Hepatitis A and adult dose of Hepatitis B.",
  "emoji": "🔵",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Hepatitis A+B vaccine contains paediatric dose of Hepatitis A and adult dose of Hepatitis B."
        }
      ]
    },
    {
      "id": "minimum-intervals-for-the-3-dose-twinrix-series",
      "title": "Minimum Intervals for the 3‑Dose Twinrix Series",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "The standard Twinrix (HepA‑HepB) series consists of three intramuscular doses at 0, 1, and 6 months. Minimum intervals:"
        },
        {
          "type": "ul",
          "items": [
            "Between Dose 1 and Dose 2: at least 4 weeks (28 days)",
            "Between Dose 2 and Dose 3: at least 5 months (~20 weeks)"
          ]
        },
        {
          "type": "p",
          "text": "These intervals ensure optimal immune response to both hepatitis A and B."
        }
      ]
    },
    {
      "id": "accelerated-alternative-twinrix-schedule-for-rapid-prote",
      "title": "Accelerated (Alternative) Twinrix Schedule for Rapid Protection",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "For rapid protection (e.g., imminent travel), an accelerated 4‑dose schedule may be used: First dose: Day 0 Second dose: Day 7 Third dose: Day 21–30 Fourth (booster) dose: ≥12 months after the first dose This regimen provides earlier protection when the routine schedule cannot be completed before exposure."
        }
      ]
    },
    {
      "id": "completing-the-series-with-single-antigen-vaccines",
      "title": "Completing the Series with Single‑Antigen Vaccines",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "If Twinrix is started but completion with single‑antigen vaccines is needed: If 1 dose of Twinrix was given: Complete with 2 adult doses of Hepatitis A (HepA) Complete with 2 adult doses of Hepatitis B (HepB) If 2 doses of Twinrix were given: Complete with 1 adult dose of HepA Complete with 1 adult dose of HepB"
        },
        {
          "type": "ul",
          "items": [
            "Each Twinrix dose contains an adult dose of HepB and a paediatric dose of HepA.",
            "A Twinrix dose can substitute for any dose in the HepB series, but not for a full adult dose in the HepA series.",
            "Any combination of 3 doses of adult HepB or 3 doses of Twinrix constitutes a complete HepB series.",
            "1 Twinrix dose + 2 adult HepA doses = complete HepA series.",
            "2 Twinrix doses + 1 adult HepA dose = complete HepA series."
          ]
        },
        {
          "type": "p",
          "text": "Reference: Immunize.org – HepA‑HepB (Twinrix) guidance"
        }
      ]
    }
  ],
  "faqHref": "/faq/hepa-hepb",
  "references": [],
  "pdfs": [
    {
      "productName": "Twinrix – Product Information",
      "src": "/Twinrix%20.pdf"
    }
  ]
};
