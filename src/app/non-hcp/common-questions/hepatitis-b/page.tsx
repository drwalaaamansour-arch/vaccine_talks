import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { hepatitisBQuestions } from '@/data/non-hcp-hepatitis-b-questions';

export default function HepatitisBQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHepB}
      titleAr="التهاب الكبد الوبائي B (فيروس الكبد B)"
      titleEn="Hepatitis B (HBV)"
      questions={hepatitisBQuestions}
    />
  );
}
