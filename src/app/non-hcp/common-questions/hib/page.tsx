import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { hibQuestions } from '@/data/non-hcp-hib-questions';

export default function HibQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHib}
      titleAr="الإنفلونزا البكتيري (HIB)"
      titleEn="Haemophilus Influenzae Type B (HIB)"
      questions={hibQuestions}
    />
  );
}
