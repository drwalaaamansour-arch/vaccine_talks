import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const DiphtheriaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpDiphtheria",
  "title": "Diphtheria",
  "lead": "Product information for Diphtheria in Egypt.",
  "emoji": "🦠",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Product information for Diphtheria in Egypt."
        }
      ]
    }
  ],
  "references": [],
  "pdfs": [
    {
      "productName": "Diphtheria",
      "src": "/Diphtheria%20.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الدفتيريا',
    lead: 'معلومات المنتج الخاصة بالدفتيريا في مصر.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'معلومات المنتج الخاصة بالدفتيريا في مصر.',
          },
        ],
      },
    ],
  }),
};
