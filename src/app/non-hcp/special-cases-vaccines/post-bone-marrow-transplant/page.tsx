'use client';

import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScChipList,
  ScProse,
  ScProseFoot,
  ScReasonsGrid,
  ScSpotlight,
  ScSummary,
  ScTimeline,
  ScTipsGrid,
  ScTravelList,
  ScTypeGrid,
  ScVaxCloud,
  ScYesBox,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
  SpecialCaseVaccineBridge,
  type SpecialCaseLocale,
  type VaccineLink,
} from '@/components/special-cases';

const VACCINE_LINKS: VaccineLink[] = [
  { href: '/pcv', ar: 'المكورات الرئوية (Pneumococcal)', en: 'Pneumococcal (PCV / PPSV)' },
  { href: '/influenza', ar: 'الإنفلونزا الموسمية', en: 'Influenza (seasonal flu)' },
  { href: '/hib', ar: 'الهيموفيلس إنفلونزا ب (Hib)', en: 'Haemophilus influenzae type b (Hib)' },
  { href: '/tetanus', ar: 'الدفتيريا والتيتانوس والسعال الديكي', en: 'Diphtheria, tetanus & pertussis' },
  { href: '/polio', ar: 'شلل الأطفال', en: 'Polio' },
  { href: '/hepatitis-b', ar: 'التهاب الكبد B', en: 'Hepatitis B' },
  { href: '/hepatitis-a', ar: 'التهاب الكبد A', en: 'Hepatitis A' },
  { href: '/meningitis', ar: 'المكورات السحائية', en: 'Meningococcal disease' },
  { href: '/hpv', ar: 'فيروس الورم الحليمي البشري (HPV)', en: 'Human papillomavirus (HPV)' },
  { href: '/herpes-zoster', ar: 'الحزام الناري (Shingles)', en: 'Shingles (herpes zoster)' },
];

type Locale = SpecialCaseLocale;

type BmtCopy = {
  back: string;
  title: string;
  altTitle: string;
  tag: string;
  lead: string;
  whyTitle: string;
  whyP1: string;
  whyP2: string;
  whatTitle: string;
  whatP1: string;
  whatP2: string;
  types: { badge: string; text: string }[];
  whatP3: string;
  weakTitle: string;
  reasons: string[];
  weakCallout: string;
  whenTitle: string;
  whenIntro: string;
  timeline: { badge: string; text: string }[];
  vaxTitle: string;
  vaccines: string[];
  fluTitle: string;
  fluP1: string;
  fluP2: string;
  liveTitle: string;
  liveP1: string;
  liveExamples: string[];
  liveP2: string;
  liveConditions: string[];
  revaxTitle: string;
  revaxYes: string;
  revaxText: string;
  travelTitle: string;
  travelP1: string;
  travelVax: string[];
  travelP2: string;
  tipsTitle: string;
  tips: string[];
  summaryTitle: string;
  summary: string;
};

const COPY: Record<Locale, BmtCopy> = {
  ar: {
    back: '← العودة لتطعيمات الحالات الخاصة',
    title: 'التطعيمات بعد زراعة الخلايا الجذعية (زرع النخاع)',
    altTitle: 'Vaccinations after bone marrow / stem cell transplant',
    tag: 'رحلة التعافي والحماية',
    lead: 'بعد زراعة الخلايا الجذعية، جهاز المناعة بيكون ضعيف لفترة — وإعادة التطعيم جزء أساسي من رحلة التعافي، مش خطوة اختيارية.',
    whyTitle: 'ليه التطعيمات مهمة بعد زراعة الخلايا الجذعية؟',
    whyP1:
      'بعد زراعة الخلايا الجذعية أو زراعة النخاع، جهاز المناعة بيكون ضعيف لفترة من الوقت، وبيفقد جزء كبير من الحماية اللي كان اكتسبها من التطعيمات اللي أخدها قبل كده أو من الأمراض اللي أصيب بيها في الماضي.',
    whyP2:
      'عشان كده، معظم الأشخاص اللي خضعوا لزراعة الخلايا الجذعية بيحتاجوا ياخدوا تطعيمات تاني بعد الزراعة، حتى لو كانوا أخدوها قبل كده.',
    whatTitle: 'إيه هي زراعة الخلايا الجذعية؟',
    whatP1:
      'زراعة الخلايا الجذعية هي إجراء طبي بيتم فيه استبدال أو إعادة بناء نخاع العظم المسؤول عن إنتاج خلايا الدم.',
    whatP2: 'الخلايا الجذعية ممكن تكون:',
    types: [
      { badge: 'ذاتية', text: 'من المريض نفسه (زراعة ذاتية)' },
      { badge: 'من متبرع', text: 'من متبرع (زراعة من متبرع)' },
    ],
    whatP3: 'وفي الحالتين، جهاز المناعة بيحتاج وقت طويل علشان يرجع يشتغل بكفاءة.',
    weakTitle: 'ليه المناعة بتضعف بعد الزراعة؟',
    reasons: [
      'العلاج الكيماوي أو الإشعاعي اللي بيتم قبل الزراعة.',
      'الأدوية اللي بتُستخدم لتقليل رفض الجسم للخلايا المزروعة.',
      'مرض "مهاجمة الخلايا المزروعة للجسم" (GVHD) اللي ممكن يحصل بعد الزراعة من متبرع.',
    ],
    weakCallout:
      'عشان كده بيكون الشخص أكثر عرضة للإصابة بالعدوى والأمراض اللي يمكن الوقاية منها بالتطعيمات.',
    whenTitle: 'إمتى أبدأ التطعيمات بعد الزراعة؟',
    whenIntro: 'الطبيب المعالج هو اللي بيحدد التوقيت المناسب، لكن بشكل عام:',
    timeline: [
      { badge: '3–6 شهور', text: 'يبدأ إعطاء بعض التطعيمات غير الحية تدريجيًا.' },
      { badge: '6 شهور', text: 'معظم التطعيمات الأساسية ممكن تبدأ في هذه المرحلة إذا كانت حالة المريض مستقرة.' },
      {
        badge: '24 شهرًا',
        text: 'قد يُسمح ببعض التطعيمات الحية، ولكن فقط في ظروف معينة وبعد تقييم الطبيب.',
      },
    ],
    vaxTitle: 'ما هي التطعيمات التي قد يحتاجها المريض بعد الزراعة؟',
    vaccines: [
      'تطعيم المكورات الرئوية (Pneumococcal vaccine)',
      'تطعيم الإنفلونزا السنوي',
      'تطعيم الهيموفيلس إنفلونزا نوع ب (Hib)',
      'تطعيم الدفتيريا والتيتانوس والسعال الديكي',
      'تطعيم شلل الأطفال',
      'تطعيم التهاب الكبد B',
      'تطعيم التهاب الكبد A (في بعض الحالات)',
      'تطعيم المكورات السحائية',
      'تطعيم فيروس الورم الحليمي البشري (HPV) للفئات العمرية المناسبة',
      'تطعيم الحزام الناري (Shingles vaccine) لبعض المرضى',
    ],
    fluTitle: 'تطعيم الإنفلونزا مهم جدًا',
    fluP1: 'يُنصح بالحصول على تطعيم الإنفلونزا كل سنة بعد زراعة الخلايا الجذعية.',
    fluP2:
      'لأن الإنفلونزا قد تسبب مضاعفات خطيرة عند الأشخاص الذين لا يزال جهازهم المناعي في مرحلة التعافي.',
    liveTitle: 'هل يمكن إعطاء التطعيمات الحية؟',
    liveP1: 'بعض التطعيمات تحتوي على فيروس حي مُضعف، مثل:',
    liveExamples: [
      'تطعيم الحصبة والنكاف والحصبة الألمانية (MMR)',
      'تطعيم الجديري المائي (Varicella)',
    ],
    liveP2: 'هذه التطعيمات لا تُعطى عادةً إلا إذا:',
    liveConditions: [
      'مرّ على الزراعة سنتان على الأقل.',
      'لم يعد المريض يتناول أدوية مثبطة للمناعة.',
      'لا يعاني من GVHD.',
      'أكد الطبيب أن جهاز المناعة تعافى بشكل كافٍ.',
    ],
    revaxTitle: 'هل أحتاج لإعادة التطعيم حتى لو أخذته قبل الزراعة؟',
    revaxYes: 'نعم',
    revaxText:
      'زراعة الخلايا الجذعية قد تؤدي إلى فقدان الحماية التي اكتسبها الجسم من التطعيمات السابقة، لذلك غالبًا ما يحتاج المريض إلى إعادة جدول التطعيمات من جديد وفقًا لخطة يحددها الطبيب.',
    travelTitle: 'ماذا لو كنت أخطط للسفر؟',
    travelP1: 'بعض الرحلات قد تتطلب تطعيمات إضافية مثل:',
    travelVax: ['التهاب الكبد A', 'الحمى الصفراء', 'التيفويد', 'داء الكلب'],
    travelP2:
      'إذا كنت تخطط للسفر، استشر طبيبك قبل فترة كافية للتأكد من أن التطعيمات مناسبة لحالتك الصحية.',
    tipsTitle: 'نصائح مهمة',
    tips: [
      'احتفظ بسجل التطعيمات الخاص بك.',
      'التزم بالمواعيد التي يحددها فريق الزراعة.',
      'لا تتلقى أي تطعيم دون استشارة الطبيب المعالج.',
      'أخبر طبيبك إذا كنت تتناول أدوية مثبطة للمناعة.',
      'احرص على حصول أفراد الأسرة والمخالطين المقربين على التطعيمات الموصى بها للمساعدة في حمايتك من العدوى.',
    ],
    summaryTitle: 'الخلاصة',
    summary:
      'بعد زراعة الخلايا الجذعية، يفقد الجسم جزءًا كبيرًا من مناعته السابقة، لذلك تعتبر إعادة التطعيم جزءًا أساسيًا من رحلة التعافي. الالتزام بجدول التطعيمات الذي يحدده الطبيب يساعد على الحماية من العديد من الأمراض الخطيرة ويمنح جهاز المناعة فرصة أفضل لاستعادة قوته.',
  },
  en: {
    back: '← Back to special-case vaccinations',
    title: 'Vaccinations After Stem Cell Transplant (Bone Marrow Transplant)',
    altTitle: 'التطعيمات بعد زراعة الخلايا الجذعية (زرع النخاع)',
    tag: 'Recovery & protection journey',
    lead: 'After a stem cell transplant, the immune system is weakened for a period — re-vaccination is an essential part of recovery, not an optional step.',
    whyTitle: 'Why are vaccinations important after stem cell transplant?',
    whyP1:
      'After a stem cell or bone marrow transplant, the immune system is weakened for a period of time and loses much of the protection it had gained from previous vaccinations or from illnesses in the past.',
    whyP2:
      'For this reason, most people who have undergone a stem cell transplant need to receive vaccines again after the transplant, even if they had them before.',
    whatTitle: 'What is a stem cell transplant?',
    whatP1:
      'A stem cell transplant is a medical procedure in which the bone marrow responsible for producing blood cells is replaced or rebuilt.',
    whatP2: 'The stem cells may be:',
    types: [
      { badge: 'Autologous', text: 'From the patient themselves (autologous transplant)' },
      { badge: 'Donor', text: 'From a donor (allogeneic transplant)' },
    ],
    whatP3: 'In both cases, the immune system needs a long time to return to full function.',
    weakTitle: 'Why does immunity weaken after transplant?',
    reasons: [
      'Chemotherapy or radiation given before the transplant.',
      "Medicines used to reduce the body's rejection of the transplanted cells.",
      'Graft-versus-host disease (GVHD), which may occur after a donor transplant.',
    ],
    weakCallout:
      'For this reason, the person is more susceptible to infections and diseases that can be prevented with vaccines.',
    whenTitle: 'When should I start vaccinations after transplant?',
    whenIntro: 'The treating doctor determines the appropriate timing, but in general:',
    timeline: [
      { badge: '3–6 months', text: 'Some inactivated vaccines may begin gradually.' },
      {
        badge: '6 months',
        text: "Most core vaccines may start at this stage if the patient's condition is stable.",
      },
      {
        badge: '24 months',
        text: 'Some live vaccines may be allowed, but only under certain conditions and after physician assessment.',
      },
    ],
    vaxTitle: 'What vaccines might the patient need after transplant?',
    vaccines: [
      'Pneumococcal vaccine',
      'Annual influenza vaccine',
      'Haemophilus influenzae type b (Hib) vaccine',
      'Diphtheria, tetanus, and pertussis vaccine',
      'Polio vaccine',
      'Hepatitis B vaccine',
      'Hepatitis A vaccine (in some cases)',
      'Meningococcal vaccine',
      'Human papillomavirus (HPV) vaccine for appropriate age groups',
      'Shingles (herpes zoster) vaccine for some patients',
    ],
    fluTitle: 'Influenza vaccination is very important',
    fluP1: 'Annual influenza vaccination is recommended after stem cell transplant.',
    fluP2:
      'Influenza can cause serious complications in people whose immune systems are still recovering.',
    liveTitle: 'Can live vaccines be given?',
    liveP1: 'Some vaccines contain weakened live virus, such as:',
    liveExamples: ['Measles, mumps, and rubella (MMR) vaccine', 'Varicella (chickenpox) vaccine'],
    liveP2: 'These vaccines are usually only given if:',
    liveConditions: [
      'At least two years have passed since the transplant.',
      'The patient is no longer taking immunosuppressive medicines.',
      'There is no active GVHD.',
      'The doctor confirms the immune system has recovered sufficiently.',
    ],
    revaxTitle: 'Do I need re-vaccination even if I had vaccines before transplant?',
    revaxYes: 'Yes',
    revaxText:
      'A stem cell transplant may cause loss of protection gained from previous vaccinations, so patients often need to restart the vaccination schedule according to a plan set by their doctor.',
    travelTitle: 'What if I am planning to travel?',
    travelP1: 'Some trips may require additional vaccines such as:',
    travelVax: ['Hepatitis A', 'Yellow fever', 'Typhoid', 'Rabies'],
    travelP2:
      'If you are planning to travel, consult your doctor well in advance to make sure the vaccines are appropriate for your health condition.',
    tipsTitle: 'Important tips',
    tips: [
      'Keep your personal vaccination record.',
      'Follow the schedule set by your transplant team.',
      'Do not receive any vaccine without consulting your treating doctor.',
      'Tell your doctor if you are taking immunosuppressive medicines.',
      'Make sure household members and close contacts receive recommended vaccines to help protect you from infection.',
    ],
    summaryTitle: 'Summary',
    summary:
      'After a stem cell transplant, the body loses much of its previous immunity, so re-vaccination is an essential part of recovery. Following the vaccination schedule set by your doctor helps protect against many serious diseases and gives the immune system a better chance to regain its strength.',
  },
};

function BmtArticle({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpBoneMarrowTransplant}
    >
      <ScCard variant="teal" icon="💉" title={c.whyTitle}>
        <ScProse>
          <p>{c.whyP1}</p>
          <p>{c.whyP2}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="rose" icon="🧬" title={c.whatTitle}>
        <ScProse>
          <p>{c.whatP1}</p>
          <p>{c.whatP2}</p>
        </ScProse>
        <ScTypeGrid types={c.types.map((type, i) => ({ ...type, donor: i === 1 }))} />
        <ScProseFoot>{c.whatP3}</ScProseFoot>
      </ScCard>

      <ScCard variant="slate" icon="🛡️" title={c.weakTitle}>
        <ScReasonsGrid reasons={c.reasons} locale={locale} />
        <ScCallout>{c.weakCallout}</ScCallout>
      </ScCard>

      <ScCard variant="gold" icon="📅" title={c.whenTitle}>
        <ScTimeline intro={c.whenIntro} steps={c.timeline} locale={locale} />
      </ScCard>

      <ScCard variant="mint" icon="✔️" title={c.vaxTitle}>
        <ScVaxCloud items={c.vaccines} />
      </ScCard>

      <ScSpotlight icon="🌡️" title={c.fluTitle}>
        <p>{c.fluP1}</p>
        <p>{c.fluP2}</p>
      </ScSpotlight>

      <ScCard variant="amber" icon="⚠️" title={c.liveTitle}>
        <ScProse>
          <p>{c.liveP1}</p>
        </ScProse>
        <ScChipList items={c.liveExamples} />
        <ScProse>
          <p>{c.liveP2}</p>
        </ScProse>
        <ScCheckList items={c.liveConditions} />
      </ScCard>

      <ScCard variant="yes" icon="🔄" title={c.revaxTitle}>
        <ScYesBox label={c.revaxYes} text={c.revaxText} />
      </ScCard>

      <ScCard variant="sky" icon="✈️" title={c.travelTitle}>
        <ScProse>
          <p>{c.travelP1}</p>
        </ScProse>
        <ScTravelList items={c.travelVax} />
        <ScProseFoot>{c.travelP2}</ScProseFoot>
      </ScCard>

      <ScCard variant="tips" icon="💡" title={c.tipsTitle}>
        <ScTipsGrid tips={c.tips} />
      </ScCard>

      <ScSummary title={c.summaryTitle}>{c.summary}</ScSummary>
    </SpecialCaseArticleChrome>
  );
}

export default function PostBoneMarrowTransplantPage() {
  return (
    <SpecialCasePageLayout>
      <BmtArticle locale="ar" />
      <SpecialCaseVaccineBridge links={VACCINE_LINKS} />
      <SpecialCaseLangDivider />
      <BmtArticle locale="en" />
    </SpecialCasePageLayout>
  );
}
