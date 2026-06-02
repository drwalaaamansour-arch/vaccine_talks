import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { hepatitisABQuestions } from '@/data/non-hcp-hepatitis-ab-questions';

export default function HepatitisABQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHepAb}
      titleAr="التطعيم المشترك لكبد A+B"
      titleEn="Hepatitis A+B (Combined)"
      questions={hepatitisABQuestions}
    />
  );
}
