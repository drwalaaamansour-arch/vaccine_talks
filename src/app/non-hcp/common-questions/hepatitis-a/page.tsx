import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { hepatitisAQuestions } from '@/data/non-hcp-hepatitis-a-questions';

export default function HepatitisAQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHepA}
      titleAr="التهاب الكبد الوبائي A (فيروس الكبد A)"
      titleEn="Hepatitis A (HAV)"
      questions={hepatitisAQuestions}
    />
  );
}
