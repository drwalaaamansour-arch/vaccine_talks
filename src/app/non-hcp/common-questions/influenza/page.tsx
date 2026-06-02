import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { influenzaQuestions } from '@/data/non-hcp-influenza-questions';

export default function InfluenzaQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqInfluenza}
      titleAr="الإنفلونزا الفيروسية"
      titleEn="Influenza (Flu)"
      questions={influenzaQuestions}
    />
  );
}
