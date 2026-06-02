import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { rabiesQuestions } from '@/data/non-hcp-rabies-questions';

export default function RabiesQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqRabies}
      titleAr="تطعيم السعار (داء الكلب)"
      titleEn="Rabies"
      questions={rabiesQuestions}
    />
  );
}
