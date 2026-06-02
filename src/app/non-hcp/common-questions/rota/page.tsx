import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { rotaQuestions } from '@/data/non-hcp-rota-questions';

export default function RotaQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqRota}
      titleAr="تطعيم الروتا (Rotavirus)"
      titleEn="Rotavirus (Rota)"
      questions={rotaQuestions}
    />
  );
}
