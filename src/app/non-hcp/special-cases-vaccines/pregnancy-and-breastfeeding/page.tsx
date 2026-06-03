'use client';

import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScChipList,
  ScNestedVaxBlock,
  ScProse,
  ScProseFoot,
  ScSpotlight,
  ScVaxCloud,
  ScYesBox,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
} from '@/components/special-cases';

const PREGNANCY_AR_PDF = encodeURI('/التطعيمات اثناء الحمل.pdf');
const PREGNANCY_AR_PDF_EMBED = `${PREGNANCY_AR_PDF}#view=FitH&toolbar=1`;

type Locale = 'ar' | 'en';

type PregnancyCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  leadSecond: string;
  benefitsIntro: string;
  benefits: string[];
  fluTitle: string;
  fluP1: string;
  fluComplicationsLabel: string;
  fluComplications: string[];
  fluP2: string;
  fluHighlight: string;
  tdapTitle: string;
  tdapP1: string;
  tdapP2: string;
  tdapImportantLabel: string;
  tdapImportant: string[];
  rsvTitle: string;
  rsvP1: string;
  rsvSymptoms: string[];
  rsvSevereLabel: string;
  rsvSevere: string[];
  rsvP2: string;
  rsvP3: string;
  liveTitle: string;
  liveNo: string;
  liveP1: string;
  liveExamplesLabel: string;
  liveExamples: string[];
  accidentalTitle: string;
  accidentalP1: string;
  accidentalReassurance: string[];
  accidentalPinNote: string;
  summaryTitle: string;
  summaryP1: string;
  summarySubLabel: string;
  summaryVax: string[];
  summaryP2: string;
  summaryClosing: string;
  pdfTitleAr: string;
  pdfTitleEn: string;
  pdfDownloadLabel: string;
};

const COPY: Record<Locale, PregnancyCopy> = {
  ar: {
    back: 'العودة لتطعيمات الحالات الخاصة ←',
    tag: 'حماية الأم والطفل',
    title: 'التطعيمات أثناء الحمل.. حماية ليكي ولطفلك',
    altTitle: 'Vaccinations during pregnancy — protection for you and your baby',
    lead:
      'فترة الحمل من أهم الفترات اللي الأم بتحاول فيها تحافظ على صحتها وصحة البيبي، وواحدة من أهم طرق الحماية هي التطعيمات المناسبة أثناء الحمل.',
    leadSecond:
      'وده مهم خصوصًا لأن مناعة الحامل بتتغير أثناء الحمل، فممكن تكون أكثر عرضة لبعض العدوى ومضاعفاتها.',
    benefitsIntro: 'بعض التطعيمات آمنة جدًا ومهمة للحامل، لأنها:',
    benefits: [
      'بتحمي الأم من أمراض خطيرة',
      'وبتنقل أجسام مضادة للبيبي عن طريق المشيمة فتوفر له حماية مهمة جدًا في أول شهور من حياته',
    ],
    fluTitle: 'تطعيم الإنفلونزا',
    fluP1:
      'أثناء الحمل، المناعة بتضعف بشكل طبيعي لحماية الجنين، وده ممكن يخلي الحامل أكثر عرضة للإصابة بالإنفلونزا ومضاعفاتها.',
    fluComplicationsLabel: 'والإنفلونزا أثناء الحمل ممكن تسبب:',
    fluComplications: ['التهاب رئوي', 'صعوبة تنفس', 'دخول المستشفى', 'وأحيانًا مضاعفات خطيرة للحامل والجنين'],
    fluP2: 'علشان كده، تطعيم الإنفلونزا مهم جدًا أثناء الحمل.',
    fluHighlight:
      'وفايدته مش للأم بس — الأجسام المضادة اللي جسم الأم بيكونها بعد التطعيم بتوصل للبيبي وتحميه في أول شهور بعد الولادة، وهي فترة بيكون فيها لسه صغير على التطعيم.',
    tdapTitle: 'تطعيم السعال الديكي اللي موجود في (Tdap)',
    tdapP1: 'السعال الديكي مرض خطير جدًا على الرضع، وخصوصًا في أول شهور الحياة.',
    tdapP2: 'علشان كده يُنصح إن الحامل تاخد تطعيم Tdap، ويُفضل بين الأسبوع 27 و36 من كل حمل.',
    tdapImportantLabel: 'مهم جدًا:',
    tdapImportant: [
      'حتى لو الأم أخدته قبل كده، لازم يتكرر مع كل حمل علشان مستوى الحماية يوصل للبيبي بشكل كافي.',
      'ولو الأم ماخدتوش أثناء الحمل، يُفضّل أخذه بعد الولادة مباشرة لو ماخدتوش قبل كده.',
    ],
    rsvTitle: 'تطعيم RSV',
    rsvP1: 'فيروس RSV من أشهر الفيروسات اللي تسبب:',
    rsvSymptoms: ['كحة', 'برد', 'والتهاب بالشعب الهوائية عند الأطفال'],
    rsvSevereLabel: 'وفي بعض الرضع ممكن يسبب:',
    rsvSevere: ['التهاب رئوي شديد', 'صعوبة تنفس', 'أو دخول المستشفى'],
    rsvP2:
      'لما الحامل تاخد تطعيم RSV أثناء الحمل، الأجسام المضادة بتنتقل للبيبي وتساعد تحميه من الحالات الشديدة خلال أول 6 شهور من عمره.',
    rsvP3: 'ويُفضّل أخذه بداية من الأسبوع 28 من الحمل للحصول على أفضل حماية للطفل.',
    liveTitle: 'هل كل التطعيمات تنفع أثناء الحمل؟',
    liveNo: 'لا',
    liveP1:
      'في تطعيمات معينة لا يُنصح بها أثناء الحمل لأنها "تطعيمات حية" — يعني تحتوي على نسخة ضعيفة من الفيروس.',
    liveExamplesLabel: 'ومنها:',
    liveExamples: [
      'تطعيم الحصبة والنكاف والحصبة الألمانية (MMR)',
      'تطعيم الجديري المائي',
      'تطعيم الدرن BCG',
      'التطعيم الفموي للتيفود',
      'الحمى الصفراء (إلا في ظروف خاصة جدًا)',
    ],
    accidentalTitle: 'طيب لو الحامل أخدت تطعيم حي بالغلط؟',
    accidentalP1:
      'دي نقطة مهمة جدًا بتسبب خوف لكثير من الأمهات. رغم إن التطعيمات الحية غير موصى بها أثناء الحمل، الدراسات والمتابعة لسنوات طويلة طمنتنا إن:',
    accidentalReassurance: [
      'مفيش دليل إن تطعيم MMR سبب تشوهات خلقية',
      'ومفيش حالات مؤكدة لمتلازمة الحصبة الألمانية الخلقية بسبب التطعيم',
      'وكمان مفيش حالات ثبت فيها حدوث متلازمة الجديري الخلقي بسبب تطعيم الجديري أثناء الحمل',
    ],
    accidentalPinNote:
      'يعني لو حصل التطعيم بالخطأ قبل اكتشاف الحمل أو أثناءه: ده في حد ذاته مش سبب لإنهاء الحمل — لكن لازم متابعة الطبيب وشرح الوضع بهدوء للأم.',
    summaryTitle: 'الخلاصة',
    summaryP1: 'بعض التطعيمات أثناء الحمل مهمة جدًا وبتحمي الأم والبيبي قبل وبعد الولادة.',
    summarySubLabel: 'وأهمها:',
    summaryVax: ['الإنفلونزا', 'Tdap', 'RSV'],
    summaryP2:
      'أما التطعيمات الحية فغالبًا يتم تأجيلها لما بعد الولادة، لكن لو اتاخدت بالخطأ فده لا يعني بالضرورة وجود خطر على الجنين.',
    summaryClosing:
      'وأفضل خطوة دائمًا هي متابعة الطبيب وتنظيم التطعيمات قبل الحمل وأثناءه للحصول على أفضل حماية ممكنة ليكي ولطفلك.',
    pdfTitleAr: 'التطعيمات أثناء الحمل — PDF',
    pdfTitleEn: 'Vaccinations during pregnancy — PDF',
    pdfDownloadLabel: 'Download PDF / تحميل PDF',
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Protecting mother & baby',
    title: 'Vaccinations during pregnancy — protection for you and your baby',
    altTitle: 'التطعيمات أثناء الحمل.. حماية ليكي ولطفلك',
    lead:
      "Pregnancy is one of the most important times when a mother works to protect her own health and her baby's. One of the best ways to do that is getting the right vaccines during pregnancy.",
    leadSecond:
      'This matters especially because immunity changes during pregnancy, so you may be more vulnerable to some infections and their complications.',
    benefitsIntro: 'Some vaccines are very safe and important during pregnancy because they:',
    benefits: [
      'Protect the mother from serious illness',
      'Pass antibodies to the baby through the placenta, giving important protection in the first months of life',
    ],
    fluTitle: 'Influenza (flu) vaccine',
    fluP1:
      'During pregnancy, the immune system naturally weakens to protect the baby, which can make flu and its complications more likely.',
    fluComplicationsLabel: 'Flu during pregnancy can cause:',
    fluComplications: [
      'Pneumonia',
      'Difficulty breathing',
      'Hospital admission',
      'Sometimes serious complications for the mother and baby',
    ],
    fluP2: 'That is why the flu vaccine is very important during pregnancy.',
    fluHighlight:
      'The benefit is not only for the mother — antibodies made after vaccination cross to the baby and help protect them in the first months after birth, when they are still too young for their own vaccines.',
    tdapTitle: 'Whooping cough vaccine (Tdap)',
    tdapP1:
      'Whooping cough (pertussis) is very dangerous for infants, especially in the first months of life.',
    tdapP2:
      'Pregnant women are advised to receive Tdap, ideally between weeks 27 and 36 of each pregnancy.',
    tdapImportantLabel: 'Very important:',
    tdapImportant: [
      'Even if you received it before, it should be repeated with each pregnancy so enough protection reaches the baby.',
      'If it was not given during pregnancy, it is best to receive it right after delivery if you have not had it previously.',
    ],
    rsvTitle: 'RSV vaccine',
    rsvP1: 'RSV is one of the most common viruses that cause:',
    rsvSymptoms: ['Cough', 'Cold symptoms', 'Bronchiolitis in children'],
    rsvSevereLabel: 'In some infants it can cause:',
    rsvSevere: ['Severe pneumonia', 'Difficulty breathing', 'Hospital admission'],
    rsvP2:
      'When a pregnant woman receives the RSV vaccine, antibodies cross to the baby and help protect against severe disease in the first 6 months of life.',
    rsvP3: 'It is preferably given from week 28 of pregnancy for the best protection for the child.',
    liveTitle: 'Can every vaccine be given during pregnancy?',
    liveNo: 'No',
    liveP1:
      'Certain vaccines are not recommended during pregnancy because they are "live" vaccines — they contain a weakened form of the virus.',
    liveExamplesLabel: 'These include:',
    liveExamples: [
      'Measles–mumps–rubella (MMR)',
      'Varicella (chickenpox)',
      'BCG (tuberculosis)',
      'Oral typhoid vaccine',
      'Yellow fever (except in very special circumstances)',
    ],
    accidentalTitle: 'What if a live vaccine was given by mistake?',
    accidentalP1:
      'This is a very important concern for many mothers. Although live vaccines are not recommended in pregnancy, years of studies and follow-up have reassured us that:',
    accidentalReassurance: [
      'There is no evidence that MMR vaccine causes birth defects',
      'There are no confirmed cases of congenital rubella syndrome caused by the vaccine',
      'There are no confirmed cases of congenital varicella syndrome from varicella vaccine during pregnancy',
    ],
    accidentalPinNote:
      'So if vaccination happened by mistake before or during pregnancy, that alone is not a reason to end the pregnancy — but follow-up with your doctor and calm discussion with the mother are essential.',
    summaryTitle: 'Summary',
    summaryP1:
      'Some vaccines during pregnancy are very important and protect both the mother and the baby before and after birth.',
    summarySubLabel: 'The most important are:',
    summaryVax: ['Influenza (flu)', 'Tdap', 'RSV'],
    summaryP2:
      'Live vaccines are usually deferred until after delivery, but if one was given by mistake that does not necessarily mean harm to the baby.',
    summaryClosing:
      'The best step is always to follow up with your doctor and plan vaccinations before and during pregnancy for the best possible protection for you and your child.',
    pdfTitleAr: 'التطعيمات أثناء الحمل — PDF',
    pdfTitleEn: 'Vaccinations during pregnancy — PDF',
    pdfDownloadLabel: 'Download PDF / تحميل PDF',
  },
};

function PregnancyArticle({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpPregnancy}
    >
      <ScProseFoot>{c.leadSecond}</ScProseFoot>

      <ScCard variant="rose" icon="✓" title={c.benefitsIntro}>
        <ScCheckList items={c.benefits} />
      </ScCard>

      <ScCard variant="sky" icon="🌡️" title={c.fluTitle}>
        <ScProse>
          <p>{c.fluP1}</p>
          <p>{c.fluComplicationsLabel}</p>
        </ScProse>
        <ScChipList items={c.fluComplications} />
        <ScProseFoot>{c.fluP2}</ScProseFoot>
      </ScCard>

      <ScSpotlight icon="🌡️" title={c.fluTitle}>
        <p>{c.fluHighlight}</p>
      </ScSpotlight>

      <ScCard variant="mint" icon="💉" title={c.tdapTitle}>
        <ScProse>
          <p>{c.tdapP1}</p>
          <p>{c.tdapP2}</p>
        </ScProse>
        <ScNestedVaxBlock title={c.tdapImportantLabel} bullets={c.tdapImportant} />
      </ScCard>

      <ScCard variant="slate" icon="🫁" title={c.rsvTitle}>
        <ScProse>
          <p>{c.rsvP1}</p>
        </ScProse>
        <ScChipList items={c.rsvSymptoms} />
        <ScProseFoot>{c.rsvSevereLabel}</ScProseFoot>
        <ScChipList items={c.rsvSevere} />
        <ScProse>
          <p>{c.rsvP2}</p>
          <p>{c.rsvP3}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="amber" icon="⚠️" title={c.liveTitle}>
        <ScYesBox label={c.liveNo} text={c.liveP1} />
        <ScProseFoot>{c.liveExamplesLabel}</ScProseFoot>
        <ScChipList items={c.liveExamples} />
      </ScCard>

      <ScCard variant="gold" icon="💛" title={c.accidentalTitle}>
        <ScProseFoot>{c.accidentalP1}</ScProseFoot>
        <ScCheckList items={c.accidentalReassurance} />
        <ScCallout>{c.accidentalPinNote}</ScCallout>
      </ScCard>

      <section className="bmt-summary">
        <h4>{c.summaryTitle}</h4>
        <p>{c.summaryP1}</p>
        <p>{c.summarySubLabel}</p>
        <ScVaxCloud items={c.summaryVax} />
        <p>{c.summaryP2}</p>
        <p>{c.summaryClosing}</p>
      </section>
    </SpecialCaseArticleChrome>
  );
}

function PregnancyPdfSection() {
  const c = COPY.ar;

  return (
    <section className="bmt-card bmt-card--slate" style={{ width: '100%', marginTop: '0.5rem' }}>
      <h3 className="bmt-section-title" dir="rtl" style={{ textAlign: 'center', marginBottom: '0.35rem' }}>
        {c.pdfTitleAr}
      </h3>
      <p
        className="bmt-prose-foot"
        dir="ltr"
        style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}
      >
        {c.pdfTitleEn}
      </p>
      <iframe
        src={PREGNANCY_AR_PDF_EMBED}
        width="100%"
        height="800"
        style={{ border: 'none', borderRadius: '8px', display: 'block', background: '#fff' }}
        title="التطعيمات أثناء الحمل PDF"
      />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a
          href={PREGNANCY_AR_PDF}
          download
          className="start-button"
          style={{ display: 'inline-block', padding: '0.75rem 2rem' }}
        >
          {c.pdfDownloadLabel}
        </a>
      </div>
    </section>
  );
}

export default function PregnancyBreastfeedingPage() {
  return (
    <SpecialCasePageLayout>
      <PregnancyArticle locale="ar" />
      <SpecialCaseLangDivider />
      <PregnancyArticle locale="en" />
      <PregnancyPdfSection />
    </SpecialCasePageLayout>
  );
}
