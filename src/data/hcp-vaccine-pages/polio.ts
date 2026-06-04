import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const PolioPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpPolio",
  "title": "Polio",
  "lead": "Poliomyelitis (polio) is a highly contagious viral disease that historically threatened global health, especially children under five. Through decades of eradication efforts, cases have plummeted worldwide. Egypt transit",
  "emoji": "🦵",
  "imageSrc": "/polio%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Poliomyelitis (polio) is a highly contagious viral disease that historically threatened global health, especially children under five. Through decades of eradication efforts, cases have plummeted worldwide. Egypt transitioned from polio‑endemic for millennia to polio‑free status."
        }
      ]
    },
    {
      "id": "symptoms-transmission-and-prevention",
      "title": "Symptoms, Transmission, and Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Polio mainly affects children 1–5 years. Symptoms include fever, fatigue, headache, vomiting, and limb pain. The most severe consequence is paralysis, which may occur rapidly (hours), be permanent, and can be fatal. Transmission is fecal‑oral via contaminated food/water and poor hygiene. In unimmunized children, intestinal replication may progress to neuroinvasion and paralysis. Infection above age five is rare; hence immunization programs target young children."
        }
      ]
    },
    {
      "id": "global-decline-in-polio-cases",
      "title": "Global Decline in Polio Cases",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Since the Global Polio Eradication Initiative (GPEI) launched in 1988, global cases have fallen by &gt;99.99% through mass vaccination and international coordination. Of the three wild poliovirus (WPV) serotypes, only WPV1 has circulated since 2012; WPV2 was declared eradicated in 2015 and WPV3 in 2019. Sporadic WPV1 detections (e.g., Afghanistan/Pakistan; importations to Malawi/Mozambique during 2021–2022 linked to Pakistan) underscore ongoing vigilance."
        }
      ]
    },
    {
      "id": "vaccines-and-the-role-of-opv-ipv",
      "title": "Vaccines and the Role of OPV/IPV",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The dramatic decline is largely due to oral poliovirus vaccine (OPV), a live‑attenuated vaccine used in routine programs and campaigns; it induces strong mucosal and herd immunity. Rarely, vaccine‑derived polioviruses (VDPVs) may emerge where coverage is low: cVDPV: circulating vaccine‑derived strains causing outbreaks among under‑immunized groups. iVDPV: prolonged excretion in persons with primary immunodeficiencies."
        },
        {
          "type": "p",
          "text": "Jan 2020–Apr 2022: 1,856 cVDPV cases in 33 countries; a VDPV2 paralysis case occurred in New York (July 2022) in an unvaccinated adult. To address VDPV2 risk, the world switched from tOPV to bOPV (types 1,3) in 2016; mOPV2 and nOPV2 (WHO EUL Nov 2020) are used for outbreak response. By Mar 2023, ~600 million nOPV2 doses had been deployed across 28 countries."
        }
      ]
    },
    {
      "id": "polio-in-egypt",
      "title": "Polio in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Polio has been depicted in ancient Egyptian inscriptions for ~3,000 years. With the injectable vaccine and OPV, Egypt scaled routine immunization and mass campaigns, achieving polio‑free certification in 2006 (last case 2004) by WHO/UNICEF through comprehensive coverage of children &lt;5 years."
        }
      ]
    },
    {
      "id": "vaccine-types-in-egypt",
      "title": "Vaccine Types in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "OPV: oral drops; excellent herd protection; used where risk persists.",
            "IPV: injectable; strengthens individual systemic immunity; preferred in polio‑free settings."
          ]
        }
      ]
    },
    {
      "id": "egypt-routine-schedule-mohp",
      "title": "Egypt Routine Schedule (MoHP)",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Seven routine OPV doses: At birth, 2 months, 4 months, 6 months, 9 months, 12 months, 18 months."
        },
        {
          "type": "p",
          "text": "IPV is given alongside OPV at 2, 4, and 6 months to broaden protection. All children aged 1–5 years are included in national campaigns regardless of prior status. Vaccination is provided free of charge at MoHP health offices/units with monitored cold‑chain."
        }
      ]
    },
    {
      "id": "maintaining-polio-free-status",
      "title": "Maintaining Polio‑Free Status",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt sustains polio‑free status through high coverage, acute flaccid paralysis surveillance, and environmental (sewage) sampling with laboratory confirmation, in partnership with WHO and UNICEF. Continued vaccination and monitoring are essential to prevent importations and protect future generations."
        }
      ]
    }
  ],
  "references": [
    {
      "href": "https://www.immunize.org/ask-experts/topic/polio/",
      "label": "Immunize.org – Polio"
    },
    {
      "href": "https://www.unicef.org/egypt/polio-egypt",
      "label": "UNICEF – Polio in Egypt"
    }
  ],
  "pdfs": [
    {
      "productName": "IPV Belthoven",
      "src": "/ipv%20belthoven.pdf"
    },
    {
      "productName": "OPV GSK",
      "src": "/Opv%20gsk.pdf"
    },
    {
      "productName": "OPV Bio",
      "src": "/Opv%20bio.pdf"
    },
    {
      "productName": "OPV",
      "src": "/Opv.pdf"
    },
    {
      "productName": "OPV Sanofi",
      "src": "/Opv%20sanofi.pdf"
    },
    {
      "productName": "Imovax (IPV)",
      "src": "/imovax.pdf"
    }
  ]
};
