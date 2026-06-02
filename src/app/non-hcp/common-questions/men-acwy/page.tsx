import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { menAcwyQuestions } from '@/data/non-hcp-men-acwy-questions';

export default function MenAcwyQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqMenAcwy}
      titleAr="تطعيم MenACWY (الحمى الشوكية ACWY)"
      titleEn="MenACWY (Meningococcal ACWY)"
      questions={menAcwyQuestions}
    />
  );
}
