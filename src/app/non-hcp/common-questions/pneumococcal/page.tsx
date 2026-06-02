import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { pneumococcalQuestions } from '@/data/non-hcp-pneumococcal-questions';

export default function PneumococcalQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqPneumococcal}
      titleAr="تطعيم المكورات الرئوية"
      titleEn="Pneumococcal (PCV / PPSV)"
      questions={pneumococcalQuestions}
    />
  );
}
