'use client';

import Link from 'next/link';
import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScChipList,
  ScProse,
  ScProseFoot,
  ScSummary,
  ScTypeGrid,
  ScYesBox,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
  type SpecialCaseLocale,
} from '@/components/special-cases';

const GUIDELINES_HREF = '/non-hcp/preterm/vaccine-specific-guidelines';

type PretermCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  whatTitle: string;
  whatIntro: string;
  categories: { badge: string; text: string; donor?: boolean }[];
  whatFoot: string;
  scheduleTitle: string;
  scheduleYes: string;
  scheduleText: string;
  weightTitle: string;
  weightIntro: string;
  weightExceptions: string[];
  safetyTitle: string;
  safetyIntro: string;
  sideEffects: string[];
  safetyFoot: string;
  problemsTitle: string;
  problemsIntro: string;
  problemsList: string[];
  problemsFoot: string;
  sidsTitle: string;
  sidsText: string;
  nicuTitle: string;
  nicuText: string;
  chronicTitle: string;
  chronicIntro: string;
  chronicList: string[];
  chronicFoot: string;
  cocoonTitle: string;
  cocoonIntro: string;
  cocoonList: string[];
  cocoonFoot: string;
  summaryTitle: string;
  summaryIntro: string;
  summaryList: string[];
  guidelinesEmoji: string;
  guidelinesAr: string;
  guidelinesEn: string;
};

const COPY: Record<SpecialCaseLocale, PretermCopy> = {
  ar: {
    back: '← العودة لتطعيمات الحالات الخاصة',
    tag: 'حماية الخُدّج',
    title: 'تطعيمات الأطفال المبتسرين (الخُدّج).. مهمة وآمنة جدًا',
    altTitle: 'Preterm Infant Vaccinations: Very Important and Very Safe',
    lead: 'لما الطفل يتولد قبل معاده، طبيعي جدًا إن الأهل يقلقوا على صحته وتغذيته ونموه… ومن أكتر الأسئلة اللي بتتكرر: "هل ياخد التطعيمات عادي؟" "ولا نستنى شوية علشان وزنه صغير أو لأنه اتولد بدري؟" والحقيقة إن الأطفال المبتسرين أو الخُدّج بيكونوا محتاجين الحماية من الأمراض أكتر من غيرهم، لأن مناعتهم لسه أضعف وجسمهم أكثر عرضة للعدوى والمضاعفات.',
    whatTitle: 'يعني إيه طفل مبتسر أو خديج؟',
    whatIntro: 'منظمة الصحة العالمية بتعتبر أي طفل اتولد قبل الأسبوع 37 من الحمل طفل مبتسر. وده بيتقسم لدرجات:',
    categories: [
      { badge: 'شديد جدًا', text: 'قبل 28 أسبوع' },
      { badge: 'شديد', text: 'من 28 لأقل من 32 أسبوع', donor: true },
      { badge: 'متوسط/متأخر', text: 'من 32 لأقل من 37 أسبوع' },
    ],
    whatFoot: 'وفي مصر، نسبة الولادة المبكرة تعتبر مرتفعة نسبيًا، علشان كده مهم جدًا نفهم تطعيمات الأطفال دول بشكل صح.',
    scheduleTitle: 'هل الطفل المبتسر ياخد التطعيمات في ميعادها؟',
    scheduleYes: 'أيوه ✅',
    scheduleText:
      'في أغلب الحالات، الطفل المبتسر بياخد التطعيمات حسب عمره الحقيقي من يوم الولادة، مش حسب العمر المعدل. يعني لو الطفل عنده شهر من تاريخ الولادة، ياخد تطعيمات الشهر حتى لو كان مولود بدري. وده مهم جدًا علشان نحميه بدري من الأمراض الخطيرة، خصوصًا إن مناعته أضعف من الأطفال المولودين في ميعادهم الطبيعي.',
    weightTitle: 'هل الوزن الصغير يمنع التطعيم؟',
    weightIntro:
      'في معظم التطعيمات: لا ❌ حتى لو وزن الطفل قليل، أغلب التطعيمات بتكون آمنة وفعالة. لكن فيه استثناء مهم خاص بتطعيم الالتهاب الكبدي B:',
    weightExceptions: [
      'لو وزن الطفل أقل من 2 كيلو والأم سليمة من فيروس B، ممكن الطبيب يقرر تأجيل جرعة الولادة لشهر أو لحد الخروج من الحضّانة.',
      'أما لو الأم مصابة بالفيروس أو حالتها غير معروفة، الطفل لازم ياخد التطعيم وحقنة الأجسام المضادة بعد الولادة مباشرة مهما كان وزنه.',
    ],
    safetyTitle: 'هل التطعيمات آمنة للأطفال المبتسرين؟',
    safetyIntro: 'أيوه، والدراسات أثبتت إن التطعيمات آمنة جدًا للأطفال الخُدّج، وفوائدها أكبر بكتير من أي أعراض جانبية بسيطة ممكن تحصل. الأعراض العادية ممكن تشمل:',
    sideEffects: ['سخونية بسيطة', 'تهيج أو عياط', 'احمرار أو تورم مكان الحقنة'],
    safetyFoot: 'ودي أعراض طبيعية ومؤقتة. للمبتسرين وغير المبتسرين.',
    problemsTitle: 'هل ممكن يحصل مشاكل بعد التطعيم؟',
    problemsIntro:
      'بعض الأطفال المبتسرين جدًا، خصوصًا اللي عندهم مشاكل تنفس أو لسه في الحضّانة، ممكن يحصل لهم:',
    problemsList: ['توقف بسيط ومؤقت في التنفس', 'بطء بسيط في ضربات القلب'],
    problemsFoot:
      'علشان كده الأطفال دول بيحتاجوا متابعة بعد التطعيم لمدة يومين أو ثلاثة داخل المستشفى، خصوصًا بعد أول جرعات. لكن المهم نعرف إن ده مؤقت، ومايمنعش التطعيم.',
    sidsTitle: 'هل التطعيمات تسبب الوفاة المفاجئة؟',
    sidsText: 'لا ❌ مفيش دليل علمي يثبت إن التطعيمات بتزود خطر الوفاة المفاجئة عند الرضع.',
    nicuTitle: 'لو الطفل لسه في الحضّانة؟',
    nicuText:
      'وجود الطفل في الحضّانة مش معناه تأجيل التطعيم تلقائيًا. أما لو حالته غير مستقرة أو عنده مشاكل تنفس شديدة، الطبيب ممكن يأجل التطعيم مؤقتًا لحد ما حالته تتحسن. لو حالته مستقرة، يقدر ياخد التطعيمات عادي حتى داخل الحضّانة. بس ناخد بالنا إن الروتا وشلل الأطفال النقط تطعيمات حية وبالتالي ممكن تتنقل بين الأطفال في الحضانة، فالافضل لحماية الجميع يتاخدوا بعد ما يخرجوا منها.',
    chronicTitle: 'الأطفال اللي عندهم أمراض مزمنة',
    chronicIntro: 'بعض الأطفال المبتسرين بيكون عندهم:',
    chronicList: ['مشاكل رئة مزمنة', 'أمراض قلب', 'ضعف مناعة', 'مشاكل صحية أخرى'],
    chronicFoot:
      'ودول أحيانًا بيحتاجوا متابعة خاصة أو تطعيمات إضافية حسب الحالة، علشان نوفر لهم أفضل حماية ممكنة.',
    cocoonTitle: 'حماية الطفل مش بتطعيمه هو لوحده',
    cocoonIntro: 'مهم جدًا كمان إن الناس اللي حوالين الطفل ده يكونوا متطعمين، خصوصًا:',
    cocoonList: ['الأم والأب', 'الإخوات', 'أي شخص بيقضي وقت طويل مع الطفل'],
    cocoonFoot: 'لأن الطفل المبتسر بيتأثر بالعدوى أسرع من غيره.',
    summaryTitle: 'الخلاصة',
    summaryIntro: 'الطفل المبتسر محتاج التطعيمات أكتر، مش أقل. وفي أغلب الحالات:',
    summaryList: ['التطعيمات بتتاخد حسب العمر الحقيقي', 'آمنة وفعالة', 'وتحمي الطفل من أمراض خطيرة جدًا'],
    guidelinesEmoji: '📘',
    guidelinesAr: 'إرشادات خاصة بالتطعيمات للأطفال المبتسرين',
    guidelinesEn: 'Vaccine-Specific Guidelines for Preterm Infants',
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Protecting preterm babies',
    title: 'Preterm Infant Vaccinations: Very Important and Very Safe',
    altTitle: 'تطعيمات الأطفال المبتسرين (الخُدّج).. مهمة وآمنة جدًا',
    lead: 'When a baby is born early, it is completely natural for families to worry about health, feeding, and growth. One of the most common questions is: "Can my baby receive vaccines normally?" and "Should we wait because the baby is small or born early?" The truth is that preterm babies need protection from infections even more than others, because their immunity is still weaker and they are more vulnerable to infections and complications.',
    whatTitle: 'What is a preterm infant?',
    whatIntro: 'The World Health Organization defines any baby born before 37 weeks of pregnancy as preterm. Preterm birth is categorized as:',
    categories: [
      { badge: 'Extremely preterm', text: 'Before 28 weeks' },
      { badge: 'Very preterm', text: '28 to less than 32 weeks', donor: true },
      { badge: 'Moderate–late', text: '32 to less than 37 weeks' },
    ],
    whatFoot:
      'In Egypt, preterm birth rates are relatively high, so understanding vaccination for these babies is very important.',
    scheduleTitle: 'Should preterm babies receive vaccines on schedule?',
    scheduleYes: 'Yes ✅',
    scheduleText:
      'In most cases, preterm infants should receive vaccines according to their chronological age from birth, not corrected age. So if the baby is one month old from date of birth, the one-month vaccines are given even if the baby was born early. This is essential for early protection from serious diseases, especially because preterm babies have weaker immunity than full-term babies.',
    weightTitle: 'Does low weight prevent vaccination?',
    weightIntro:
      'For most vaccines: No ❌ Even with low birth weight, most vaccines are safe and effective. There is one important exception for hepatitis B vaccine:',
    weightExceptions: [
      'If the baby weighs less than 2 kg and the mother is negative for hepatitis B, the birth dose may be delayed until 1 month of age or hospital discharge, based on clinical decision.',
      'If the mother is infected or her status is unknown, the baby must receive hepatitis B vaccine and hepatitis B immunoglobulin immediately after birth regardless of weight.',
    ],
    safetyTitle: 'Are vaccines safe for preterm infants?',
    safetyIntro:
      'Yes. Studies show that vaccines are very safe in preterm infants, and benefits are much greater than mild side effects. Common expected side effects include:',
    sideEffects: ['Mild fever', 'Irritability or crying', 'Redness or swelling at injection site'],
    safetyFoot: 'These are normal and temporary, in both preterm and full-term babies.',
    problemsTitle: 'Can problems happen after vaccination?',
    problemsIntro:
      'In some very preterm infants, especially those with respiratory issues or those still in NICU, there can be:',
    problemsList: ['Brief temporary apnea episodes', 'Mild temporary slowing of heart rate'],
    problemsFoot:
      'That is why some infants need monitoring in hospital for 48 to 72 hours after vaccination, especially after early doses. These events are usually temporary and do not mean vaccines should be avoided.',
    sidsTitle: 'Do vaccines increase sudden infant death risk?',
    sidsText: 'No ❌ There is no scientific evidence that vaccines increase the risk of sudden infant death.',
    nicuTitle: 'If the baby is still in NICU?',
    nicuText:
      'Being in NICU does not automatically mean delaying vaccines. If the infant is unstable or has severe respiratory compromise, the doctor may delay temporarily until stable. If clinically stable, routine vaccines can be given even in NICU. However, oral live vaccines (such as rotavirus and oral polio drops) may transmit in NICU settings, so they are often better given after discharge for overall protection.',
    chronicTitle: 'Preterm infants with chronic conditions',
    chronicIntro: 'Some preterm infants may have:',
    chronicList: ['Chronic lung disease', 'Heart disease', 'Immunodeficiency', 'Other medical conditions'],
    chronicFoot:
      'These infants may require closer follow-up or additional vaccines depending on condition, to ensure best possible protection.',
    cocoonTitle: 'Protecting the baby is not only about vaccinating the baby',
    cocoonIntro: 'People around the infant should also be vaccinated, especially:',
    cocoonList: ['Mother and father', 'Siblings', 'Anyone spending long periods with the baby'],
    cocoonFoot: 'Because preterm infants are affected by infections faster and more severely.',
    summaryTitle: 'Summary',
    summaryIntro: 'Preterm babies usually need vaccines more, not less. In most cases:',
    summaryList: [
      'Vaccines are given by chronological age',
      'Vaccines are safe and effective',
      'Vaccines protect against very serious diseases',
    ],
    guidelinesEmoji: '📘',
    guidelinesAr: 'إرشادات خاصة بالتطعيمات للأطفال المبتسرين',
    guidelinesEn: 'Vaccine-Specific Guidelines for Preterm Infants',
  },
};

function PretermArticle({ locale }: { locale: SpecialCaseLocale }) {
  const c = COPY[locale];
  const isAr = locale === 'ar';

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpPreterm}
    >
      <ScCard variant="teal" icon="👶" title={c.whatTitle}>
        <ScProse>
          <p>{c.whatIntro}</p>
        </ScProse>
        <ScTypeGrid types={c.categories} />
        <ScProseFoot>{c.whatFoot}</ScProseFoot>
      </ScCard>

      <ScCard variant="gold" icon="📅" title={c.scheduleTitle}>
        <ScYesBox label={c.scheduleYes} text={c.scheduleText} />
      </ScCard>

      <ScCard variant="amber" icon="⚖️" title={c.weightTitle}>
        <ScProse>
          <p>{c.weightIntro}</p>
        </ScProse>
        <ScCheckList items={c.weightExceptions} />
      </ScCard>

      <ScCard variant="mint" icon="✅" title={c.safetyTitle}>
        <ScProse>
          <p>{c.safetyIntro}</p>
        </ScProse>
        <ScChipList items={c.sideEffects} />
        <ScProseFoot>{c.safetyFoot}</ScProseFoot>
      </ScCard>

      <ScCard variant="slate" icon="🏥" title={c.problemsTitle}>
        <ScProse>
          <p>{c.problemsIntro}</p>
        </ScProse>
        <ScChipList items={c.problemsList} />
        <ScProseFoot>{c.problemsFoot}</ScProseFoot>
      </ScCard>

      <ScCard variant="rose" icon="🛡️" title={c.sidsTitle}>
        <ScProse>
          <p>{c.sidsText}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="sky" icon="🍼" title={c.nicuTitle}>
        <ScProse>
          <p>{c.nicuText}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="teal" icon="💙" title={c.chronicTitle}>
        <ScProse>
          <p>{c.chronicIntro}</p>
        </ScProse>
        <ScChipList items={c.chronicList} />
        <ScProseFoot>{c.chronicFoot}</ScProseFoot>
      </ScCard>

      <ScCard variant="mint" icon="👨‍👩‍👧" title={c.cocoonTitle}>
        <ScProse>
          <p>{c.cocoonIntro}</p>
        </ScProse>
        <ScChipList items={c.cocoonList} />
        <ScCallout>{c.cocoonFoot}</ScCallout>
      </ScCard>

      <ScSummary title={c.summaryTitle}>{c.summaryIntro}</ScSummary>
      <ScCheckList items={c.summaryList} />

      {isAr ? (
        <div className="bmt-preterm-guidelines">
          <Link
            href={GUIDELINES_HREF}
            className="start-button bmt-more-link-btn bmt-bridge-btn bmt-preterm-guidelines-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bmt-bridge-btn-ar" dir="rtl">
              {c.guidelinesEmoji}{' '}
              {c.guidelinesAr}
            </span>
            <span className="bmt-bridge-btn-en" dir="ltr">
              {c.guidelinesEn}
            </span>
          </Link>
        </div>
      ) : null}
    </SpecialCaseArticleChrome>
  );
}

export default function PretermInfantsSpecialCasesPage() {
  return (
    <SpecialCasePageLayout>
      <PretermArticle locale="ar" />
      <SpecialCaseLangDivider />
      <PretermArticle locale="en" />
    </SpecialCasePageLayout>
  );
}
