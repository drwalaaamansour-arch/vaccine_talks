import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const DtPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpDt",
  "title": "DT containing vaccines",
  "lead": "This section provides healthcare professionals with resources and references related to diphtheria and tetanus (DT) containing vaccines used in Egypt. More detailed product information will be added here.",
  "emoji": "📋",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "This section provides healthcare professionals with resources and references related to diphtheria and tetanus (DT) containing vaccines used in Egypt. More detailed product information will be added here."
        }
      ]
    }
  ],
  "faqHref": "/faq/dt",
  "references": [],
  "pdfs": [
    {
      "productName": "Dt ped",
      "src": "/dt/Dt%20ped.pdf"
    },
    {
      "productName": "Td bio",
      "src": "/dt/Td%20bio.pdf"
    },
    {
      "productName": "BETd",
      "src": "/dt/BETd.pdf"
    },
    {
      "productName": "DPT SII",
      "src": "/dt/DPT%20SII.pdf"
    },
    {
      "productName": "Penta serum",
      "src": "/dt/Penta%20serum.pdf"
    },
    {
      "productName": "pentabio",
      "src": "/dt/pentabio.pdf"
    },
    {
      "productName": "East five",
      "src": "/dt/East%20five.pdf"
    },
    {
      "productName": "ComBEFive",
      "src": "/dt/ComBEFive.pdf"
    },
    {
      "productName": "Hexaxim",
      "src": "/dt/Hexaxim.pdf"
    },
    {
      "productName": "Product Monograph Adacel-polio",
      "src": "/Product%20Monograph%20Adacel-polio.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'لقاحات تحتوي على DT',
    lead: 'يوفر هذا القسم للعاملين في الرعاية الصحية موارد ومراجع متعلقة بلقاحات الدفتيريا والتيتانوس (DT) المستخدمة في مصر. ستُضاف معلومات أكثر تفصيلاً عن المنتجات هنا.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يوفر هذا القسم للعاملين في الرعاية الصحية موارد ومراجع متعلقة بلقاحات الدفتيريا والتيتانوس (DT) المستخدمة في مصر. ستُضاف معلومات أكثر تفصيلاً عن المنتجات هنا.',
          },
        ],
      },
    ],
  }),
};
