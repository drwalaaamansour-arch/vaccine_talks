import NonHcpCommonQuestionsSubpage from '@/components/NonHcpCommonQuestionsSubpage';
import { ARTICLE_META } from '@/lib/article-meta';
import { rsvQuestions } from '@/data/non-hcp-rsv-questions';

export default function RsvQuestionsPage() {
  return (
    <NonHcpCommonQuestionsSubpage
      meta={ARTICLE_META.nonHcpCqRsv}
      titleAr="تطعيم RSV (الفيروس التنفسي المخلوي)"
      titleEn="RSV (Respiratory Syncytial Virus)"
      questions={rsvQuestions}
    />
  );
}
