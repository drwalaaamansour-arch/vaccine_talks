import CommonQuestionsHubPage from '@/components/non-hcp-common-questions/CommonQuestionsHubPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'أسئلة شائعة عن التطعيمات في مصر',
  description:
    'أسئلة وأجوبة واضحة عن التطعيمات في مصر — إنفلونزا، HPV، MMR، الكبد، المكورات، وغيرها للعائلات.',
  descriptionEn: 'Clear vaccine FAQs for families in Egypt — flu, HPV, MMR, hepatitis, pneumococcal, and more.',
  path: '/non-hcp/common-questions',
  keywords: ['أسئلة شائعة', 'التطعيمات في مصر', 'لقاحات مصر'],
});

export default function CommonQuestionsPage() {
  return <CommonQuestionsHubPage />;
}
