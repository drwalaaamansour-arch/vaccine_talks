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
  ScTipsGrid,
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
  { href: '/influenza', ar: 'الإنفلونزا الموسمية', en: 'Influenza (seasonal flu)' },
  { href: '/pcv', ar: 'المكورات الرئوية', en: 'Pneumococcal (PCV / PPSV)' },
  { href: '/hepatitis-b', ar: 'التهاب الكبد B', en: 'Hepatitis B' },
  { href: '/tetanus', ar: 'الدفتيريا والتيتانوس والسعال الديكي (Tdap)', en: 'Diphtheria, tetanus & pertussis (Tdap)' },
  { href: '/hpv', ar: 'فيروس الورم الحليمي البشري (HPV)', en: 'Human papillomavirus (HPV)' },
  { href: '/meningitis', ar: 'المكورات السحائية', en: 'Meningococcal disease' },
  { href: '/hepatitis-a', ar: 'التهاب الكبد A', en: 'Hepatitis A' },
  { href: '/herpes-zoster', ar: 'الحزام الناري (Shingrix)', en: 'Shingles (Shingrix)' },
  { href: '/hib', ar: 'الهيموفيلس إنفلونزا ب (Hib)', en: 'Haemophilus influenzae type b (Hib)' },
];

type Locale = SpecialCaseLocale;

type ChemoCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  leadSecond: string;
  introCallout: string;
  planTitle: string;
  planIntro: string;
  planFactors: string[];
  immunityTitle: string;
  immunityIntro: string;
  immunityCauses: string[];
  immunityFoot: string;
  rulesTitle: string;
  beforeTitle: string;
  beforeItems: string[];
  whenTitle: string;
  nonLiveTitle: string;
  nonLiveExamples: string[];
  nonLiveNote: string;
  liveTitle: string;
  liveExamples: string[];
  liveNote: string;
  duringTitle: string;
  duringP1: string;
  duringP2: string;
  duringP3: string;
  fluTitle: string;
  fluWhy: string;
  fluRisks: string[];
  fluTherefore: string;
  fluWhichTitle: string;
  fluYes: string;
  fluNo: string;
  fluWhenTitle: string;
  fluWhen: string[];
  pneumoTitle: string;
  pneumoWho: string[];
  pneumoVax: string;
  hepBTitle: string;
  hepBItems: string[];
  tdapTitle: string;
  tdapText: string;
  hpvTitle: string;
  hpvText: string;
  meningoTitle: string;
  meningoWho: string[];
  meningoVax: string;
  hepATitle: string;
  hepAWho: string[];
  shingrixTitle: string;
  shingrixItems: string[];
  biologicTitle: string;
  biologicExamples: string[];
  biologicNote: string;
  biologicTips: string[];
  liveVaxTitle: string;
  liveWhen: string[];
  liveVaxExamples: string[];
  liveFoot: string;
  spleenTitle: string;
  spleenVax: string[];
  spleenFoot: string;
  afterTitle: string;
  afterP1: string;
  afterP2: string;
  afterBoosters: string[];
  summaryTitle: string;
  summaryTips: string[];
};

const COPY: Record<Locale, ChemoCopy> = {
  ar: {
    back: 'العودة لتطعيمات الحالات الخاصة ←',
    tag: 'حماية مناعية أثناء علاج السرطان',
    title: 'تطعيمات لمرضى السرطان',
    altTitle: 'Vaccinations for people with cancer — during and after chemotherapy',
    lead:
      'مرضى السرطان بيكونوا أكثر عرضة للإصابة بالأمراض المعدية اللي ممكن نمنعها بالتطعيمات، وده بسبب حاجتين:',
    leadSecond:
      'السرطان نفسه ممكن يضعف المناعة، وعلاجات السرطان زي الكيماوي والإشعاعي والعلاج المناعي والعلاجات البيولوجية بتأثر على كفاءة الجهاز المناعي وبتقلل استجابة الجسم للتطعيمات.',
    introCallout:
      'علشان كده التطعيمات تعتبر جزء مهم جدًا من خطة رعاية مريض السرطان، والأفضل دايمًا إنها تتاخد قبل بدء العلاج لو أمكن.',
    planTitle: 'إيه اللي بيحدد خطة التطعيم؟',
    planIntro: 'خطة التطعيم بتختلف من مريض للتاني حسب:',
    planFactors: [
      'نوع السرطان ومرحلته',
      'عمر المريض',
      'التطعيمات اللي أخدها قبل كده',
      'نوع العلاج المستخدم',
      'درجة ضعف المناعة',
      'وجود استئصال للطحال أو زراعة نخاع/خلايا جذعية',
    ],
    immunityTitle: 'إزاي السرطان وعلاجه بيأثروا على المناعة؟',
    immunityIntro: 'ضعف المناعة ممكن يحصل بسبب:',
    immunityCauses: [
      'العلاج الكيماوي',
      'العلاج الإشعاعي',
      'الكورتيزون بجرعات عالية',
      'العلاجات البيولوجية',
      'أدوية زي ريتوكسيماب (Rituximab)',
      'العلاجات المعدلة للمناعة',
      'العلاج المناعي للسرطان',
      'عدم وجود طحال أو ضعف وظيفته',
    ],
    immunityFoot:
      'وعلشان كده أي مريض بيتلقى علاج كيماوي أو إشعاعي لعلاج اللوكيميا أو الليمفوما أو المايلوما المتعددة أو الأورام الصلبة بيتعتبر غالبًا مريض عنده ضعف في المناعة.',
    rulesTitle: 'قواعد مهمة للتطعيم',
    beforeTitle: 'قبل بدء العلاج',
    beforeItems: [
      'لو فيه فرصة، يفضل المريض ياخد التطعيمات المطلوبة قبل العلاج الكيماوي',
      'قبل العلاج الإشعاعي',
      'قبل أي علاج مثبط للمناعة',
      'قبل استئصال الطحال المخطط له',
    ],
    whenTitle: 'إمتى ناخد التطعيم؟',
    nonLiveTitle: 'اللقاحات غير الحية',
    nonLiveExamples: ['الإنفلونزا المعطلة', 'المكورات الرئوية', 'الكبد الوبائي B'],
    nonLiveNote:
      'يفضل تتاخد قبل العلاج بأسبوعين على الأقل. ولو اضطرينا ممكن تتاخد أثناء العلاج، لكن الاستجابة المناعية ممكن تكون أقل.',
    liveTitle: 'اللقاحات الحية',
    liveExamples: ['MMR', 'الجديري المائي (Varicella)'],
    liveNote:
      'يفضل تتاخد قبل العلاج بـ 4 أسابيع على الأقل. ومش بنستخدمها أثناء العلاج أو مع ضعف المناعة الشديد.',
    duringTitle: 'التطعيم أثناء العلاج الكيماوي',
    duringP1:
      'أحيانًا بنضطر نطعم المريض أثناء العلاج لو تأجيل التطعيم هيعرضه لخطر الإصابة بعدوى خطيرة.',
    duringP2: 'اللقاحات غير الحية آمنة أثناء العلاج، حتى لو كانت الاستجابة أقل من الطبيعي.',
    duringP3:
      'أما لو المريض عنده نقص شديد جدًا في كرات الدم البيضاء (Neutropenia)، يفضل تأجيل التطعيم لحد ما يتحسن.',
    fluTitle: 'تطعيم الإنفلونزا',
    fluWhy: 'ليه مهم؟ الإنفلونزا ممكن تسبب لمريض السرطان:',
    fluRisks: ['التهاب رئوي شديد', 'دخول المستشفى', 'فشل تنفسي', 'وفي بعض الحالات الوفاة'],
    fluTherefore: 'لذلك كل مرضى السرطان من عمر 6 شهور فأكثر محتاجين تطعيم الإنفلونزا كل سنة.',
    fluWhichTitle: 'نستخدم أي نوع؟',
    fluYes: 'لقاح الإنفلونزا المعطل (الحقنة)',
    fluNo: 'لقاح الإنفلونزا الحي (البخاخ الأنفي)',
    fluWhenTitle: 'أفضل وقت للتطعيم',
    fluWhen: ['قبل الكيماوي بأسبوعين', 'بين جلسات العلاج', 'أو بعد الجلسة بحوالي أسبوعين'],
    pneumoTitle: 'تطعيم المكورات الرئوية',
    pneumoWho: [
      'المايلوما المتعددة',
      'اللوكيميا الليمفاوية المزمنة',
      'الليمفوما',
      'سرطان الرئة',
    ],
    pneumoVax: 'وغالبًا بنستخدم PCV20 أو PCV15 أو PCV13، وقد يحتاج المريض بعد كده PPSV23 حسب حالته.',
    hepBTitle: 'تطعيم الكبد الوبائي B',
    hepBItems: [
      'لازم نعرف حالة المريض بالنسبة لفيروس الكبد B وقت التشخيص',
      'نطعم غير المحصنين',
      'نتابع المرضى المعرضين لخطر إعادة التنشيط',
    ],
    tdapTitle: 'تطعيم الدفتيريا والتيتانوس والسعال الديكي',
    tdapText:
      'المناعة ضد الأمراض دي ممكن تقل بعد علاج السرطان، لذلك غالبًا بنفكر في جرعة من Tdap بعد انتهاء العلاج.',
    hpvTitle: 'تطعيم HPV',
    hpvText:
      'بيتاخد حسب العمر الطبيعي الموصى به، والمرضى المثبطين للمناعة بياخدوا جدول 3 جرعات.',
    meningoTitle: 'تطعيم المكورات السحائية',
    meningoWho: ['انعدام الطحال', 'ضعف وظيفة الطحال', 'بعض الفئات عالية الخطورة'],
    meningoVax: 'وقد يحتاج المريض MenACWY و MenB.',
    hepATitle: 'تطعيم الكبد الوبائي A',
    hepAWho: [
      'مسافر لمناطق ينتشر فيها المرض',
      'عنده عوامل خطورة معروفة',
      'معرض للعدوى بحكم شغله أو ظروفه',
    ],
    shingrixTitle: 'تطعيم الحزام الناري (Shingrix)',
    shingrixItems: [
      'موصى به لكل مريض سرطان مثبط للمناعة عمره 18 سنة أو أكثر',
      'جرعتين',
      'لقاح غير حي وآمن مع نقص المناعة',
    ],
    biologicTitle: 'المرضى اللي بياخدوا علاجات بيولوجية',
    biologicExamples: ['Rituximab', 'مثبطات TNF', 'العلاجات الموجهة للمناعة'],
    biologicNote: 'الاستجابة للتطعيمات عندهم ممكن تكون ضعيفة.',
    biologicTips: [
      'يفضل التطعيم قبل العلاج بأسبوعين على الأقل',
      'غالبًا بنؤجل التطعيمات الحية بعد العلاج من 3 إلى 12 شهر',
      'وبعد ريتوكسيماب تحديدًا يفضل تأجيل معظم التطعيمات حوالي 6 شهور أو أكثر حسب الحالة',
    ],
    liveVaxTitle: 'اللقاحات الحية',
    liveWhen: ['العلاج الكيماوي', 'وجود سرطان نشط', 'ضعف المناعة الشديد'],
    liveVaxExamples: ['MMR', 'Varicella', 'لقاح الإنفلونزا الحي'],
    liveFoot: 'ويمكن التفكير فيها بعد انتهاء العلاج واستعادة المناعة بشكل كافٍ.',
    spleenTitle: 'لو المريض عنده استئصال أو ضعف في الطحال',
    spleenVax: ['المكورات الرئوية', 'المكورات السحائية', 'Hib'],
    spleenFoot: 'ويفضل تتاخد قبل استئصال الطحال بأسبوعين لو العملية مخطط لها.',
    afterTitle: 'بعد انتهاء علاج السرطان',
    afterP1:
      'لو المريض كان مكمل تطعيماته الأساسية قبل الإصابة بالسرطان، فغالبًا بيحتفظ بجزء من الذاكرة المناعية.',
    afterP2:
      'ولو حالته مستقرة وفي مرحلة شفاء (Remission) لمدة 6 شهور على الأقل، ممكن يحتاج جرعات منشطة لبعض التطعيمات مثل:',
    afterBoosters: [
      'DTaP/Tdap',
      'IPV',
      'MMR',
      'Hepatitis B',
      'Pneumococcal vaccines',
      'Hib',
      'MenACWY و MenB',
      'HPV',
      'Varicella (لو غير محصن وعنده مناعة تسمح)',
    ],
    summaryTitle: 'الخلاصة',
    summaryTips: [
      'أفضل وقت للتطعيم هو قبل بدء علاج السرطان',
      'اللقاحات غير الحية آمنة أثناء العلاج لكنها قد تكون أقل فعالية',
      'لقاح الإنفلونزا السنوي ضروري لمعظم مرضى السرطان',
      'لقاحات المكورات الرئوية من أهم التطعيمات لهذه الفئة',
      'Shingrix موصى به لكل البالغين المصابين بالسرطان والمثبطين للمناعة',
      'اللقاحات الحية غالبًا ممنوعة أثناء العلاج أو مع ضعف المناعة الشديد',
      'تطعيم أفراد الأسرة والمخالطين مهم جدًا لحماية مريض السرطان',
      'خطة التطعيم لازم تكون فردية وتُحدد حسب نوع السرطان والعلاج والحالة المناعية لكل مريض',
    ],
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Immune protection during cancer treatment',
    title: 'Vaccinations for people with cancer',
    altTitle: 'تطعيمات لمرضى السرطان — أثناء وبعد العلاج الكيماوي',
    lead:
      'People with cancer are more likely to get vaccine-preventable infections for two main reasons:',
    leadSecond:
      'Cancer itself can weaken immunity, and treatments such as chemotherapy, radiation, immunotherapy, and biological therapies can reduce how well the immune system responds to vaccines.',
    introCallout:
      'Vaccination is therefore an essential part of cancer care, and whenever possible vaccines should be given before treatment starts.',
    planTitle: 'What shapes the vaccination plan?',
    planIntro: 'Plans differ from person to person depending on:',
    planFactors: [
      'Cancer type and stage',
      'Age',
      'Previous vaccinations',
      'Type of treatment',
      'Degree of immunosuppression',
      'Splenectomy or stem cell / bone marrow transplant',
    ],
    immunityTitle: 'How do cancer and its treatment affect immunity?',
    immunityIntro: 'Immunosuppression may result from:',
    immunityCauses: [
      'Chemotherapy',
      'Radiation therapy',
      'High-dose corticosteroids',
      'Biological therapies',
      'Drugs such as rituximab',
      'Immune-modifying treatments',
      'Cancer immunotherapy',
      'Absent or poorly functioning spleen',
    ],
    immunityFoot:
      'Anyone receiving chemotherapy or radiation for leukaemia, lymphoma, multiple myeloma, or solid tumours is usually considered immunocompromised.',
    rulesTitle: 'Important vaccination rules',
    beforeTitle: 'Before treatment starts',
    beforeItems: [
      'Give needed vaccines before chemotherapy when possible',
      'Before radiation therapy',
      'Before any immunosuppressive therapy',
      'Before planned splenectomy',
    ],
    whenTitle: 'When should vaccines be given?',
    nonLiveTitle: 'Inactivated (non-live) vaccines',
    nonLiveExamples: ['Inactivated influenza', 'Pneumococcal', 'Hepatitis B'],
    nonLiveNote:
      'Preferably at least 2 weeks before treatment. They may be given during treatment if needed, but the immune response may be weaker.',
    liveTitle: 'Live vaccines',
    liveExamples: ['MMR', 'Varicella (chickenpox)'],
    liveNote:
      'Preferably at least 4 weeks before treatment. Not used during treatment or with severe immunosuppression.',
    duringTitle: 'Vaccination during chemotherapy',
    duringP1:
      'Sometimes vaccines are given during treatment when delay would put the patient at high risk of serious infection.',
    duringP2: 'Inactivated vaccines are safe during treatment even if less immunogenic.',
    duringP3:
      'With severe neutropenia, vaccination is usually deferred until counts recover.',
    fluTitle: 'Influenza vaccination',
    fluWhy: 'Why it matters — influenza in people with cancer can cause:',
    fluRisks: ['Severe pneumonia', 'Hospital admission', 'Respiratory failure', 'Death in some cases'],
    fluTherefore: 'All people with cancer aged 6 months and older need annual influenza vaccination.',
    fluWhichTitle: 'Which vaccine?',
    fluYes: 'Inactivated influenza vaccine (injection)',
    fluNo: 'Live attenuated influenza vaccine (nasal spray)',
    fluWhenTitle: 'Best timing',
    fluWhen: ['2 weeks before chemotherapy', 'Between cycles', 'About 2 weeks after a cycle'],
    pneumoTitle: 'Pneumococcal vaccination',
    pneumoWho: ['Multiple myeloma', 'Chronic lymphocytic leukaemia', 'Lymphoma', 'Lung cancer'],
    pneumoVax: 'Often PCV20, PCV15, or PCV13, with PPSV23 later depending on the individual.',
    hepBTitle: 'Hepatitis B vaccination',
    hepBItems: [
      'Assess hepatitis B status at diagnosis',
      'Vaccinate those not immune',
      'Monitor patients at risk of reactivation',
    ],
    tdapTitle: 'Diphtheria, tetanus, and pertussis (Tdap)',
    tdapText:
      'Immunity to these diseases may wane after cancer treatment; a Tdap dose after treatment is often considered.',
    hpvTitle: 'HPV vaccination',
    hpvText:
      'Given per age-based recommendations; immunocompromised patients often receive a 3-dose schedule.',
    meningoTitle: 'Meningococcal vaccination',
    meningoWho: ['Asplenia', 'Functional asplenia', 'Other high-risk groups'],
    meningoVax: 'MenACWY and MenB may be needed.',
    hepATitle: 'Hepatitis A vaccination',
    hepAWho: ['Travel to endemic areas', 'Known risk factors', 'Occupational or other exposure'],
    shingrixTitle: 'Shingles (Shingrix)',
    shingrixItems: [
      'Recommended for immunocompromised adults with cancer aged 18 years and older',
      'Two doses',
      'Non-live and safe with immunosuppression',
    ],
    biologicTitle: 'Biological therapies',
    biologicExamples: ['Rituximab', 'TNF inhibitors', 'Immune-targeted therapies'],
    biologicNote: 'Vaccine responses may be reduced.',
    biologicTips: [
      'Vaccinate at least 2 weeks before treatment when possible',
      'Live vaccines are often delayed 3–12 months after therapy',
      'After rituximab, most vaccines are often deferred about 6 months or longer',
    ],
    liveVaxTitle: 'Live vaccines',
    liveWhen: ['During chemotherapy', 'Active cancer', 'Severe immunosuppression'],
    liveVaxExamples: ['MMR', 'Varicella', 'Live influenza vaccine'],
    liveFoot: 'They may be considered after treatment when immunity has recovered enough.',
    spleenTitle: 'Splenectomy or poor splenic function',
    spleenVax: ['Pneumococcal', 'Meningococcal', 'Hib'],
    spleenFoot: 'Give at least 2 weeks before planned splenectomy when possible.',
    afterTitle: 'After cancer treatment ends',
    afterP1:
      'Patients who completed routine vaccines before cancer often retain some immune memory.',
    afterP2:
      'If stable in remission for at least 6 months, booster doses may be needed for:',
    afterBoosters: [
      'DTaP/Tdap',
      'IPV',
      'MMR',
      'Hepatitis B',
      'Pneumococcal vaccines',
      'Hib',
      'MenACWY and MenB',
      'HPV',
      'Varicella (if not immune and clinically appropriate)',
    ],
    summaryTitle: 'Summary',
    summaryTips: [
      'Best timing is before cancer treatment starts',
      'Inactivated vaccines are safe during treatment but may be less effective',
      'Annual influenza vaccination is essential for most people with cancer',
      'Pneumococcal vaccines are among the most important for this group',
      'Shingrix is recommended for immunocompromised adults with cancer',
      'Live vaccines are usually avoided during treatment or severe immunosuppression',
      'Vaccinating household members and close contacts helps protect the patient',
      'Plans must be individualised by cancer type, treatment, and immune status',
    ],
  },
};

function ChemoArticle({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpChemotherapyDuringAfter}
    >
      <ScProseFoot>{c.leadSecond}</ScProseFoot>
      <ScCallout>{c.introCallout}</ScCallout>

      <ScCard variant="teal" icon="📋" title={c.planTitle}>
        <ScProse>
          <p>{c.planIntro}</p>
        </ScProse>
        <ScChipList items={c.planFactors} />
      </ScCard>

      <ScCard variant="slate" icon="🛡️" title={c.immunityTitle}>
        <ScProse>
          <p>{c.immunityIntro}</p>
        </ScProse>
        <ScChipList items={c.immunityCauses} />
        <ScCallout>{c.immunityFoot}</ScCallout>
      </ScCard>

      <ScCard variant="gold" icon="📌" title={c.rulesTitle}>
        <ScNestedVaxBlock title={c.beforeTitle} bullets={c.beforeItems} />
        <p className="bmt-prose-foot" style={{ fontWeight: 800, marginTop: '1rem' }}>
          {c.whenTitle}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.5rem' }}>
          <ScNestedVaxBlock title={c.nonLiveTitle} bullets={c.nonLiveExamples} paragraphs={[c.nonLiveNote]} />
          <ScNestedVaxBlock title={c.liveTitle} bullets={c.liveExamples} paragraphs={[c.liveNote]} />
        </div>
      </ScCard>

      <ScCard variant="rose" icon="💊" title={c.duringTitle}>
        <ScProse>
          <p>{c.duringP1}</p>
          <p>{c.duringP2}</p>
          <p>{c.duringP3}</p>
        </ScProse>
      </ScCard>

      <ScSpotlight icon="🌡️" title={c.fluTitle}>
        <p>{c.fluWhy}</p>
        <ScChipList items={c.fluRisks} />
        <p>{c.fluTherefore}</p>
        <p>
          <strong>{c.fluWhichTitle}</strong>
        </p>
        <ScYesBox label="✅" text={c.fluYes} />
        <p style={{ margin: '0.5rem 0' }}>❌ {c.fluNo}</p>
        <p>
          <strong>{c.fluWhenTitle}</strong>
        </p>
        <ScChipList items={c.fluWhen} />
      </ScSpotlight>

      <ScCard variant="mint" icon="🫁" title={c.pneumoTitle}>
        <ScProse>
          <p>{locale === 'ar' ? 'مهم جدًا خصوصًا لمرضى:' : 'Especially important for:'}</p>
        </ScProse>
        <ScChipList items={c.pneumoWho} />
        <ScProseFoot>{c.pneumoVax}</ScProseFoot>
      </ScCard>

      <ScCard variant="sky" icon="🩸" title={c.hepBTitle}>
        <ScCheckList items={c.hepBItems} />
      </ScCard>

      <ScCard variant="teal" icon="💉" title={c.tdapTitle}>
        <ScProse>
          <p>{c.tdapText}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="rose" icon="🦠" title={c.hpvTitle}>
        <ScProse>
          <p>{c.hpvText}</p>
        </ScProse>
      </ScCard>

      <ScCard variant="slate" icon="🧠" title={c.meningoTitle}>
        <ScProse>
          <p>{locale === 'ar' ? 'مهم لمرضى:' : 'Important for:'}</p>
        </ScProse>
        <ScChipList items={c.meningoWho} />
        <ScProseFoot>{c.meningoVax}</ScProseFoot>
      </ScCard>

      <ScCard variant="amber" icon="🟡" title={c.hepATitle}>
        <ScProse>
          <p>{locale === 'ar' ? 'يوصى به لو المريض:' : 'Recommended if the person:'}</p>
        </ScProse>
        <ScCheckList items={c.hepAWho} />
      </ScCard>

      <ScSpotlight icon="⚡" title={c.shingrixTitle}>
        <ScCheckList items={c.shingrixItems} />
      </ScSpotlight>

      <ScCard variant="gold" icon="🧬" title={c.biologicTitle}>
        <ScChipList items={c.biologicExamples} />
        <ScProseFoot>{c.biologicNote}</ScProseFoot>
        <ScCheckList items={c.biologicTips} />
      </ScCard>

      <ScCard variant="amber" icon="⚠️" title={c.liveVaxTitle}>
        <ScProse>
          <p>{locale === 'ar' ? 'غالبًا ممنوعة أثناء:' : 'Usually avoided during:'}</p>
        </ScProse>
        <ScChipList items={c.liveWhen} />
        <ScProse>
          <p>{locale === 'ar' ? 'أمثلة:' : 'Examples:'}</p>
        </ScProse>
        <ScChipList items={c.liveVaxExamples} />
        <ScProseFoot>{c.liveFoot}</ScProseFoot>
      </ScCard>

      <ScCard variant="mint" icon="⚕️" title={c.spleenTitle}>
        <ScProse>
          <p>{locale === 'ar' ? 'لازم نهتم جدًا بالتطعيمات التالية:' : 'Pay special attention to:'}</p>
        </ScProse>
        <ScCheckList items={c.spleenVax} />
        <ScCallout>{c.spleenFoot}</ScCallout>
      </ScCard>

      <ScCard variant="yes" icon="🔄" title={c.afterTitle}>
        <ScProse>
          <p>{c.afterP1}</p>
          <p>{c.afterP2}</p>
        </ScProse>
        <ScVaxCloud items={c.afterBoosters} />
        {locale === 'ar' && (
          <ScCallout>
            نقطة مهمة: لو المريض اتعض أو اتخربش من حيوان زي الكلاب والقطط وغيرهم لازيم يتطعم بس هنا جرعات التطعيم هيكونوا خمسة مش أربعة
          </ScCallout>
        )}
      </ScCard>

      <ScCard variant="tips" icon="📌" title={c.summaryTitle}>
        <ScTipsGrid tips={c.summaryTips} />
      </ScCard>
    </SpecialCaseArticleChrome>
  );
}

export default function DuringAndAfterChemotherapyPage() {
  return (
    <SpecialCasePageLayout>
      <ChemoArticle locale="ar" />
      <SpecialCaseVaccineBridge links={VACCINE_LINKS} />
      <SpecialCaseLangDivider />
      <ChemoArticle locale="en" />
    </SpecialCasePageLayout>
  );
}
