import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { varicellaQuestions } from '@/data/non-hcp-varicella-questions';

export default function VaricellaQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqVaricella}
      titleAr="تطعيم الجديري المائي (Varicella)"
      titleEn="Varicella (Chickenpox)"
      questions={varicellaQuestions}
    />
  );
}
