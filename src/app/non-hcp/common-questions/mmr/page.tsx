import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { mmrQuestions } from '@/data/non-hcp-mmr-questions';

export default function MmrQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqMmr}
      titleAr="الثلاثي الفيروسي (MMR)"
      titleEn="MMR (Measles, Mumps, Rubella)"
      questions={mmrQuestions}
    />
  );
}
