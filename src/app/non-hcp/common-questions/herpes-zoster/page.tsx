import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { herpesZosterQuestions } from '@/data/non-hcp-herpes-zoster-questions';

export default function HerpesZosterQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHerpesZoster}
      titleAr="تطعيم الحزام الناري (Herpes Zoster)"
      titleEn="Herpes Zoster (Shingles)"
      questions={herpesZosterQuestions}
    />
  );
}
