import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const HpvPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHpv",
  "title": "HPV",
  "lead": "Human papillomavirus (HPV) is the name of a group of 200 known viruses. They do not cause concerns in most people, but infection with some high‑risk types is common and can cause genital warts or cancer. In 90% of people",
  "emoji": "💗",
  "imageSrc": "/hpv.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Human papillomavirus (HPV) is the name of a group of 200 known viruses. They do not cause concerns in most people, but infection with some high‑risk types is common and can cause genital warts or cancer. In 90% of people the body controls the infection by itself. Persistent HPV infection with high‑risk HPV types is the cause of cervical cancer and is associated with cancers of the vulva, vagina, mouth/throat, penis and anus. In 2019, HPV caused an estimated 620,000 cancer cases in women and 70,000 in men. Prophylactic vaccination against HPV can prevent these cancers. HPV screening and treatment of pre‑cancer lesions is also effective for preventing cervical cancer."
        }
      ]
    },
    {
      "id": "symptoms",
      "title": "Symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Most people will not have any symptoms. The immune system usually clears HPV within a year or two with no lasting effects. Some HPV infections cause small rough lumps (genital warts) on the vagina, penis, anus, and rarely the throat; they may be painful, itchy, bleed, or cause swollen glands. Persistent infection can cause cervical cell changes leading to precancers and, if untreated, cervical cancer—typically developing over 15–20 years. Early cell changes and precancers mostly have no symptoms. Possible cervical cancer symptoms include intermenstrual or post‑coital bleeding and foul‑smelling vaginal discharge; these symptoms are nonspecific and warrant clinical evaluation."
        }
      ]
    },
    {
      "id": "health-consequences-of-hpv",
      "title": "Health Consequences of HPV",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Anogenital warts: Nearly all cases are caused by low‑risk types 6 and 11 (~90% of cases).",
            "Recurrent respiratory papillomatosis (RRP): Types 6/11 can also cause recurrent growths in the respiratory tract.",
            "Cancers: Persistent infection with oncogenic HPV types can lead to precancers and cancers of the cervix, vulva, vagina, penis, anus, and oropharynx (tonsils and base of tongue). Progression from infection to cancer can span years to decades."
          ]
        }
      ]
    },
    {
      "id": "treatment-and-management",
      "title": "Treatment and Management",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "There is currently no treatment for HPV infection itself. Management targets HPV‑associated lesions (genital warts, RRP, pre‑cancerous or cancerous changes). Approaches vary by diagnosis, size, and location; complete eradication of HPV‑containing cells is not always guaranteed, and it is unclear whether treating visible lesions reduces transmission."
        }
      ]
    },
    {
      "id": "prevention",
      "title": "Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Vaccination is the best way to prevent HPV infection and related cancers. HPV vaccines should be given to girls aged 9–14 years before sexual activity. Dosing may be 1 or 2 doses; people with reduced immunity should receive 2 or 3 doses.",
            "Screening detects cervical precancers that can be treated before cancer develops. Women should be screened every 5–10 years starting at age 30; women living with HIV every 3 years starting at age 25.",
            "Risk reduction: condom use, voluntary medical male circumcision, and avoiding tobacco reduce persistent HPV risk.",
            "After a positive HPV test, clinicians assess the cervix for changes/precancers and treat to prevent progression."
          ]
        }
      ]
    },
    {
      "id": "hpv-and-cervical-cancer-in-egypt",
      "title": "HPV and Cervical Cancer in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Historically, cervical cancer screening uptake in Egypt was low (fewer than 1 in 10 women screened within five years as of 2021), partly due to a perception that cervical cancer was rare. This view has shifted with new evidence and advocacy."
        },
        {
          "type": "p",
          "text": "In 2021, Dr. Mohamed Elazab founded the Egyptian Society for Colposcopy and Cervical Pathology to improve awareness and prevention through: training clinicians, public education, and providing free screening for economically disadvantaged women. A landmark study by the society found 14% HPV positivity among 1,000 asymptomatic women, supporting expanded screening and prevention."
        },
        {
          "type": "p",
          "text": "In August 2023, Egypt launched a government‑backed campaign (National Campaign: \"Journey of a Thousand Kilometres\") to raise awareness and screening rates. A parallel Rotary‑funded effort (~US$2M) targets Greater Cairo to screen 10,000 women and includes intensive education, workforce training, and HPV vaccination for 30,000 girls aged 9–15."
        },
        {
          "type": "p",
          "text": "As part of the \"100 Million Healthy Lives\" initiative (June 2025), a nationwide screening program has reached over 3 million adults across 18 governorates, using mobile clinics and referral pathways for abnormal results. HPV vaccine has been available in Egypt since 2009 (private sector), but is not yet included in the national schedule."
        }
      ]
    }
  ],
  "faqHref": "/faq/hpv",
  "docHref": "/doc/hpv",
  "references": [
    {
      "href": "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/human-papillomavirus",
      "label": "WHO – HPV"
    },
    {
      "href": "https://www.cdc.gov/hpv/index.html",
      "label": "CDC – HPV"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/human-papilloma-virus-and-cancer",
      "label": "WHO – HPV and Cancer"
    }
  ],
  "pdfs": [
    {
      "productName": "Gardasil – Product Information",
      "src": "/Gardasil.pdf"
    },
    {
      "productName": "Cervarix – Product Information",
      "src": "/Cervarix%20.pdf"
    },
    {
      "productName": "Human Papilloma Bivalent Vaccine",
      "src": "/Hpv%202.pdf"
    }
  ]
};
