import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { generalQuestions } from '@/data/non-hcp-general-questions';

export default function GeneralQuestionsQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqGeneral}
      titleAr="أسئلة عامة"
      titleEn="General Questions"
      questions={generalQuestions}
    />
  );
}
