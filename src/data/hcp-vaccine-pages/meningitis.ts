import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const MeningitisPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpMeningitis",
  "title": "Meningitis (HCP)",
  "lead": "Content coming soon...",
  "emoji": "🧠",
  "imageSrc": "/meningitis.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Content coming soon..."
        }
      ]
    }
  ],
  "references": [],
  "pdfs": [],
  ar: buildVaccineArBundle({
    title: 'التهاب السحايا (HCP)',
    lead: 'المحتوى قريباً...',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'المحتوى قريباً...',
          },
        ],
      },
    ],
  }),
};
