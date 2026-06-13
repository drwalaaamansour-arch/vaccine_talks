'use client';

import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScProse,
  ScSpotlight,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
  type SpecialCaseLocale,
} from '@/components/special-cases';

type ImmunoMedCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  faqTitle: string;
  question: string;
  answer: string;
  whyTitle: string;
  whyIntro: string;
  whyItems: string[];
  cortTitle: string;
  cortNo: string;
  cortTopical: string;
  cortSystemic: string;
  safeTitle: string;
  safeNonLive: string;
  safeLive: string;
  timingTitle: string;
  timingBefore: string;
  timingDuring: string;
  stopTitle: string;
  stopP1: string;
  stopP2: string;
  messageTitle: string;
  messageItems: string[];
  closing: string;
};

const COPY: Record<SpecialCaseLocale, ImmunoMedCopy> = {
  ar: {
    back: 'العودة لتطعيمات الحالات الخاصة ←',
    tag: 'تطعيم مع أدوية المناعة',
    title: 'التطعيمات مع الأدوية المثبطة للمناعة',
    altTitle: 'Vaccinations with immunosuppressive medications',
    lead:
      'ناس كتير بتحتاج تطعيم وهي في نفس الوقت بتاخد كورتيزون أو أدوية بتأثر على المناعة لعلاج أمراض مختلفة زي أمراض الروماتيزم، الصدفية، أمراض الجهاز الهضمي المناعية، أو بعد زراعة الأعضاء.',
    faqTitle: 'السؤال اللي بيتكرر دايمًا',
    question: '«ينفع أتطعم وأنا باخد العلاج ده؟»',
    answer: 'الإجابة غالبًا: آه، لكن نوع التطعيم وجرعة العلاج بيفرقوا.',
    whyTitle: 'ليه الموضوع مهم؟',
    whyIntro: 'بعض الأدوية بتضعف جهاز المناعة بشكل مؤقت أو مستمر، وده ممكن يخلي الجسم:',
    whyItems: [
      'أكثر عرضة للإصابة بالعدوى.',
      'يستجيب للتطعيم بشكل أقل من الطبيعي.',
      'يحتاج توقيت معين قبل أو أثناء أو بعد العلاج للحصول على أفضل حماية.',
    ],
    cortTitle: 'هل كل أنواع الكورتيزون بتأثر على التطعيمات؟',
    cortNo: 'لا.',
    cortTopical:
      'الكورتيزون الموضعي على الجلد، أو البخاخات، أو قطرات العين والأنف غالبًا لا تمنع التطعيمات.',
    cortSystemic:
      'أما الكورتيزون بجرعات عالية أو لفترات طويلة فقد يؤثر على المناعة، وهنا قد يحتاج الطبيب لتحديد أفضل وقت للتطعيم.',
    safeTitle: 'هل التطعيمات آمنة أثناء تناول أدوية المناعة؟',
    safeNonLive: 'معظم التطعيمات غير الحية تعتبر آمنة حتى مع وجود ضعف في المناعة.',
    safeLive:
      'لكن بعض التطعيمات الحية قد لا تكون مناسبة أثناء استخدام بعض أدوية المناعة القوية، ولذلك يجب استشارة الطبيب قبل الحصول عليها.',
    timingTitle: 'أفضل وقت للتطعيم',
    timingBefore:
      'إذا كان هناك وقت كافٍ قبل بدء العلاج، فمن الأفضل الحصول على التطعيمات المطلوبة قبل بدء أدوية تثبيط المناعة.',
    timingDuring:
      'أما إذا كان العلاج قد بدأ بالفعل، فغالبًا يمكن إعطاء العديد من التطعيمات، لكن قد يحتاج الأمر إلى اختيار التوقيت الأنسب للحصول على أفضل استجابة مناعية.',
    stopTitle: 'هل أوقف العلاج عشان أتطعم؟',
    stopP1: 'في أغلب الحالات لا يتم إيقاف العلاج من تلقاء نفسك.',
    stopP2:
      'قرار تأجيل أو تعديل العلاج يجب أن يكون بالتنسيق مع الطبيب المعالج، لأن إيقاف الدواء قد يكون أخطر من تأجيل التطعيم أو إعطائه في وقت مختلف.',
    messageTitle: 'أهم رسالة',
    messageItems: [
      'لا تفترض أنك لا تستطيع أخذ التطعيمات.',
      'كثير من المرضى يكونون أكثر احتياجًا للتطعيمات بسبب زيادة خطر الإصابة بالعدوى.',
      'لكن اختيار نوع التطعيم والتوقيت المناسب يحتاج إلى تقييم الحالة والعلاج المستخدم.',
    ],
    closing:
      'لو بتاخد أي دواء للمناعة ومحتار إذا كان ينفع تتطعم أو لأ، اسأل طبيبك أو استشر متخصص تطعيمات قبل اتخاذ القرار.',
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Vaccines on immunosuppressive medicines',
    title: 'Vaccinations with Immunosuppressive Medications',
    altTitle: 'التطعيمات مع الأدوية المثبطة للمناعة',
    lead:
      'Many people need vaccines while also taking corticosteroids or medicines that affect the immune system to treat different conditions — such as rheumatic diseases, psoriasis, immune-mediated digestive diseases, or after organ transplant.',
    faqTitle: 'The question we hear again and again',
    question: '"Can I get vaccinated while I\'m on this treatment?"',
    answer: 'The answer is usually yes — but the type of vaccine and your treatment dose matter.',
    whyTitle: 'Why does this matter?',
    whyIntro:
      'Some medicines weaken the immune system temporarily or long term, which may mean the body:',
    whyItems: [
      'Is more likely to get infections.',
      'Responds less well to vaccines than usual.',
      'Needs specific timing before, during, or after treatment for the best protection.',
    ],
    cortTitle: 'Do all types of corticosteroids affect vaccines?',
    cortNo: 'No.',
    cortTopical:
      'Topical skin corticosteroids, inhalers, and eye or nose drops usually do not block vaccination.',
    cortSystemic:
      'High-dose or long-term systemic corticosteroids may affect immunity; your doctor may need to choose the best time to vaccinate.',
    safeTitle: 'Are vaccines safe while taking immune medicines?',
    safeNonLive:
      'Most inactivated (non-live) vaccines are considered safe even when immunity is reduced.',
    safeLive:
      'Some live vaccines may not be suitable while on certain strong immunosuppressive drugs — always check with your doctor first.',
    timingTitle: 'Best time to vaccinate',
    timingBefore:
      'If there is enough time before starting treatment, it is best to receive needed vaccines before immunosuppressive therapy begins.',
    timingDuring:
      'If treatment has already started, many vaccines can still be given — but timing may need to be chosen for the best immune response.',
    stopTitle: 'Should I stop my medicine to get vaccinated?',
    stopP1: 'In most cases, treatment is not stopped on your own.',
    stopP2:
      'Decisions to delay or change therapy must be coordinated with your treating physician, because stopping the drug can be more dangerous than delaying or giving a vaccine at a different time.',
    messageTitle: 'Most important message',
    messageItems: [
      'Do not assume you cannot get vaccinated.',
      'Many patients actually need vaccines more because infection risk is higher.',
      'Vaccine type and timing need individual assessment of your condition and treatment.',
    ],
    closing:
      'If you take any immune medicine and are unsure whether you can vaccinate, ask your doctor or a vaccination specialist before deciding.',
  },
};

function ImmunosuppressiveMedicationsArticle({ locale }: { locale: SpecialCaseLocale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpImmunosuppressiveMedications}
    >
      <ScSpotlight icon="💬" title={c.faqTitle}>
        <p className="bmt-faq-question">{c.question}</p>
        <ScCallout>{c.answer}</ScCallout>
      </ScSpotlight>

      <ScCard variant="teal" icon="🛡️" title={c.whyTitle}>
        <ScProse>
          <p>{c.whyIntro}</p>
        </ScProse>
        <ScCheckList items={c.whyItems} />
      </ScCard>

      <ScCard variant="mint" icon="💊" title={c.cortTitle}>
        <ScProse>
          <p>
            <strong>{c.cortNo}</strong> {c.cortTopical}
          </p>
          <p>{c.cortSystemic}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="sky" icon="✅" title={c.safeTitle}>
        <ScProse>
          <p>{c.safeNonLive}</p>
          <p>{c.safeLive}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="gold" icon="📅" title={c.timingTitle}>
        <ScProse>
          <p>{c.timingBefore}</p>
          <p>{c.timingDuring}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="rose" icon="⚠️" title={c.stopTitle}>
        <ScProse>
          <p>{c.stopP1}</p>
          <p>{c.stopP2}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="slate" icon="⭐" title={c.messageTitle}>
        <ScCheckList items={c.messageItems} />
      </ScCard>

      <ScCallout>{c.closing}</ScCallout>
    </SpecialCaseArticleChrome>
  );
}

export default function ImmunosuppressiveMedicationsPage() {
  return (
    <SpecialCasePageLayout>
      <ImmunosuppressiveMedicationsArticle locale="ar" />
      <SpecialCaseLangDivider />
      <ImmunosuppressiveMedicationsArticle locale="en" />
    </SpecialCasePageLayout>
  );
}
