import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { menBQuestions } from '@/data/non-hcp-men-b-questions';

export default function MenBQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqMenB}
      titleAr="تطعيم MenB (الحمى الشوكية النمط B)"
      titleEn="MenB (Meningococcal B)"
      questions={menBQuestions}
    />
  );
}
