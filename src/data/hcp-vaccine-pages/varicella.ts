import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const VaricellaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpVaricella",
  "title": "Varicella",
  "lead": "Chickenpox (varicella) is very contagious. It typically causes an itchy, blister‑like rash plus fever and malaise. Most people who get chickenpox once develop lifelong immunity; reinfection is uncommon but can occur.",
  "emoji": "🔴",
  "imageSrc": "/varicella%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Chickenpox (varicella) is very contagious. It typically causes an itchy, blister‑like rash plus fever and malaise. Most people who get chickenpox once develop lifelong immunity; reinfection is uncommon but can occur."
        }
      ]
    },
    {
      "id": "signs-and-symptoms",
      "title": "Signs and symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "A classic rash progresses from macules → papules → fluid‑filled vesicles that crust into scabs. Often begins on chest/back/face, then generalizes. Up to ~500 vesicles may occur; most lesions crust within ~1 week. Breakthrough varicella after vaccination is usually milder."
        }
      ]
    },
    {
      "id": "who-is-at-risk",
      "title": "Who is at risk?",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Anyone unvaccinated and without prior disease. Severe disease/complications are more likely in pregnant people, infants, adolescents, adults, and the immunocompromised."
        }
      ]
    },
    {
      "id": "how-it-spreads",
      "title": "How it spreads",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Varicella‑zoster virus (VZV) spreads readily by respiratory droplets/aerosols and direct contact with lesions. Up to 90% of susceptible close contacts become infected. A person is contagious from 1–2 days before rash until all lesions have crusted. Vaccinated cases without crusting are contagious until no new lesions for 24 hours."
        }
      ]
    },
    {
      "id": "prevention",
      "title": "Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The two‑dose varicella vaccine is the best protection. All children, adolescents, and adults without evidence of immunity should receive 2 doses. CDC strongly discourages \"chickenpox parties\"; disease can be severe or fatal, and severity is unpredictable."
        }
      ]
    },
    {
      "id": "varicella-in-egypt",
      "title": "Varicella in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt has high seroprevalence (immunity from prior infection) despite the absence of a routine national program. In tropical climates, acquisition can occur later in childhood, increasing adult susceptibility compared with temperate regions."
        },
        {
          "type": "p",
          "text": "Post‑COVID studies (e.g., Mansoura Medical Journal) report higher incidence and unusual presentations: older age at infection, second attacks, more severe disease, genital pruritus/pustular lesions, and dysuria."
        }
      ]
    },
    {
      "id": "implications-and-recommendations",
      "title": "Implications and recommendations",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Consider routine varicella vaccination given rising incidence and severity.",
            "Targeted vaccination for women of reproductive age (especially primigravidas) and other susceptible adults per local sero‑epidemiology."
          ]
        }
      ]
    }
  ],
  "faqHref": "/faq/varicella",
  "docHref": "/doc/varicella",
  "references": [],
  "pdfs": [
    {
      "productName": "Varivax",
      "src": "/Varivax.pdf"
    },
    {
      "productName": "Varilirix",
      "src": "/Varilirix.pdf"
    },
    {
      "productName": "Barycela",
      "src": "/Barycela.pdf"
    }
  ]
};
