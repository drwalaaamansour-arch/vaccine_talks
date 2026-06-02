import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { hpvQuestions } from '@/data/non-hcp-hpv-questions';

export default function HpvQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqHpv}
      titleAr="فيروس الورم الحليمي البشري (HPV)"
      titleEn="Human Papillomavirus (HPV)"
      questions={hpvQuestions}
    />
  );
}
