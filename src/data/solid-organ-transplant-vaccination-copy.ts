export type SolidOrganTransplantLocale = 'en' | 'ar';

export type SolidOrganTransplantScheduleRow = {
  vaccine: string;
  preTransplant: string;
  postTransplant: string;
  considerations: string;
};

export type SolidOrganTransplantCopy = {
  arHeroTitle: string;
  arHeroLead: string;
  overview: { title: string; paragraphs: string[] };
  corePrinciples: {
    title: string;
    intro: string;
    bullets: { label: string; text: string }[];
  };
  universalSchedule: {
    title: string;
    intro: string;
    caption: string;
    columns: { key: string; label: string; className: string }[];
    rows: SolidOrganTransplantScheduleRow[];
  };
  organSpecific: {
    title: string;
    intro: string;
    subsections: { title: string; paragraphs: { label: string; text: string }[] }[];
  };
  cocooning: {
    title: string;
    paragraphs: { strong?: string; text: string }[];
  };
};

const COLUMN_CLASSES = {
  vaccine: 'hcp-guide-table-med',
  preTransplant: 'hcp-guide-table-timing',
  postTransplant: 'hcp-guide-table-timing',
  considerations: 'hcp-guide-table-indications',
} as const;

export const SOLID_ORGAN_TRANSPLANT_COPY: Record<SolidOrganTransplantLocale, SolidOrganTransplantCopy> = {
  en: {
    arHeroTitle: '',
    arHeroLead: '',
    overview: {
      title: 'Overview',
      paragraphs: [
        'An optimal immunization strategy is critical for patients undergoing solid organ transplantation (SOT). Chronic organ failure alters innate and adaptive immunity, while post-transplant immunosuppressive (IS) therapy further elevates infection risk. Preventing infections not only safeguards the patient but also prevents acute decompensation, graft dysfunction, and organ rejection.',
      ],
    },
    corePrinciples: {
      title: 'Core principles: timing and safety',
      intro:
        'Vaccines demonstrate superior immunogenicity when given earlier in the course of organ failure before the immune system is further compromised by advanced disease or dialysis.',
      bullets: [
        {
          label: 'Pre-transplant window:',
          text: 'All required vaccinations should ideally be completed at least 2 weeks (for inactivated vaccines) or 4 weeks (for live vaccines) prior to transplantation.',
        },
        {
          label: 'Post-transplant pause:',
          text: 'Routine inactivated vaccinations should be deferred for 3 to 6 months post-transplant — the period of maximal induction immunosuppression — except during specific community outbreaks (e.g., influenza or COVID-19 epidemics).',
        },
        {
          label: 'The rule on live attenuated vaccines (LAVs):',
          text: 'LAVs (e.g., MMR, varicella, oral typhoid, yellow fever) are generally contraindicated after transplantation due to the risk of unchecked viral replication. Inactivated vaccines are completely safe post-transplant and do not increase the risk of graft rejection.',
        },
      ],
    },
    universalSchedule: {
      title: 'Universal immunization schedule for SOT patients',
      intro:
        'While organ-specific nuances apply, the following schedule outlines core pre- and post-transplant recommendations for all solid organ transplant candidates and recipients.',
      caption: 'Universal immunization schedule for solid organ transplant patients',
      columns: [
        { key: 'vaccine', label: 'Pathogen / vaccine', className: COLUMN_CLASSES.vaccine },
        { key: 'preTransplant', label: 'Pre-transplant (candidates)', className: COLUMN_CLASSES.preTransplant },
        { key: 'postTransplant', label: 'Post-transplant (recipients)', className: COLUMN_CLASSES.postTransplant },
        { key: 'considerations', label: 'Clinical considerations', className: COLUMN_CLASSES.considerations },
      ],
      rows: [
        {
          vaccine: 'Influenza (Flu)',
          preTransplant: 'Annual dose',
          postTransplant: 'Annual dose (inactivated only)',
          considerations:
            'Administer annually. Post-transplant, resume at 3–6 months (or as early as 1 month during an active outbreak). Live nasal sprays are strictly contraindicated.',
        },
        {
          vaccine: 'Pneumococcal disease',
          preTransplant: 'PCV13 or PCV20 followed by PPSV23',
          postTransplant: 'Booster doses as indicated by local guidelines',
          considerations:
            'Complete the series early in chronic organ disease. Post-transplant doses should wait at least 3–6 months. Protects against severe pneumonia and invasive disease.',
        },
        {
          vaccine: 'Hepatitis B (HBV)',
          preTransplant: 'Accelerated or double-dose series (e.g., 4-dose schedule at 0, 1, 2, and 6 months)',
          postTransplant: 'Boosters if anti-HBs titers drop below 10 mIU/mL',
          considerations:
            'Immune response is lower in end-stage organ failure. Monitor serum anti-HBs titers annually post-transplant; give boosters if they drop below the protective threshold.',
        },
        {
          vaccine: 'SARS-CoV-2 (COVID-19)',
          preTransplant: 'Primary series + boosters',
          postTransplant: 'Primary series + boosters',
          considerations:
            'Highly recommended. Post-transplant patients exhibit reduced antibody responses due to immunosuppressants; booster schedules should align with immunocompromised protocols.',
        },
        {
          vaccine: 'Herpes zoster (Shingles)',
          preTransplant: 'Recombinant zoster vaccine (RZV)',
          postTransplant: 'Recombinant zoster vaccine (RZV)',
          considerations:
            'Do not use live zoster vaccine. The non-live, recombinant vaccine (Shingrix) is safe and highly recommended both pre- and post-transplant (2-dose series).',
        },
        {
          vaccine: 'Human papillomavirus (HPV)',
          preTransplant: '3-dose series (0, 1–2, 6 months)',
          postTransplant: '3-dose series if not previously completed',
          considerations:
            'Recommended up to age 26 (and up to age 45 based on clinical discussion) due to the increased risk of HPV-related malignancies under immunosuppressive therapy.',
        },
      ],
    },
    organSpecific: {
      title: 'Specific organ system considerations',
      intro:
        'While the universal schedule applies to all, each specific organ transplant comes with unique timelines, risks, and clinical priorities.',
      subsections: [
        {
          title: '🩸 Kidney transplantation (KT)',
          paragraphs: [
            {
              label: 'Uremic immune failure:',
              text: 'KT candidates often have a poor immune response to standard HBV vaccination due to uremia. Preventing HBV is vital because post-transplant immunosuppressants can cause viral reactivation or rapid progression of liver disease.',
            },
            {
              label: 'VZV screening:',
              text: 'All candidates should be screened for VZV IgG antibodies. If negative, they must receive the live varicella vaccine at least 4 weeks before transplantation.',
            },
          ],
        },
        {
          title: '🧪 Liver transplantation (LT)',
          paragraphs: [
            {
              label: 'Accelerated protection:',
              text: 'Liver transplant candidates often present with advanced cirrhosis or acute liver failure, requiring rapid protection. Accelerated or double-dose HBV and HAV regimens (e.g., days 0, 7, 21, and a booster at 6 months) are highly utilized.',
            },
            {
              label: 'Supervised post-transplant LAVs:',
              text: 'Uniquely, liver transplant recipients generally require lower maintenance immunosuppression over time. If a liver recipient is completely stable, on minimal immunosuppression, and has no history of rejection at 1–2 years post-transplant, certain necessary live vaccines (like MMR) may be cautiously considered under strict transplant team surveillance.',
            },
          ],
        },
        {
          title: '🫁 Thoracic transplantation (heart and lung)',
          paragraphs: [
            {
              label: 'High respiratory risk:',
              text: 'Respiratory viruses can trigger acute cellular rejection, graft dysfunction, or a fatal condition in lung recipients known as chronic lung allograft dysfunction (CLAD).',
            },
            {
              label: 'Mandatory coverage:',
              text: 'Annual flu shots, updated COVID-19 boosters, and the pneumococcal series are top-tier mandates for thoracic candidates, recipients, and all household members. Invasive pneumococcal disease carries an exceptionally high mortality rate in lung transplant recipients.',
            },
          ],
        },
        {
          title: '🩺 Pancreas and intestinal transplantation',
          paragraphs: [
            {
              label: 'Profound immunosuppression:',
              text: 'These recipients undergo some of the most aggressive immunosuppressive regimens in the SOT world, frequently requiring T-cell depleting induction therapies.',
            },
            {
              label: 'Permanent live vaccine ban:',
              text: 'Due to the high levels of baseline maintenance immunosuppression required to prevent pancreas/intestinal rejection, live attenuated vaccines are strictly, indefinitely contraindicated post-transplant. Protection against encapsulated bacteria (Streptococcus pneumoniae, Neisseria meningitidis, and Hib) must be fully optimized during the candidate phase.',
            },
          ],
        },
      ],
    },
    cocooning: {
      title: 'The "cocooning" strategy: guarding the recipient',
      paragraphs: [
        {
          text: 'Because transplant recipients are on immunosuppressive therapies, they may not mount a 100% effective immune response to vaccines, even when fully compliant.',
        },
        {
          strong: "The patient's family is their shield.",
          text: 'The "Cocooning Strategy" dictates that all household contacts, close family members, and healthcare workers must be fully vaccinated (including annual flu shots, pertussis boosters, and updated COVID-19 vaccines). Creating a protective barrier of immunity around the patient is one of the most effective ways to preserve long-term health and protect the newly transplanted organ.',
        },
        {
          strong: 'Patient & provider reminder:',
          text: 'Always review immunization history as early as possible during the transplant evaluation phase. Protecting your health protects your graft!',
        },
      ],
    },
  },
  ar: {
    arHeroTitle: 'التطعيم لمرضى زراعة الأعضاء الصلبة',
    arHeroLead:
      'إرشادات قائمة على الأدلة للتطعيم قبل وبعد زراعة الأعضاء الصلبة — التوقيت، اللقاحات غير الحية مقابل الحية، الجداول الموحدة، والأولويات حسب نوع العضو.',
    overview: {
      title: 'نظرة عامة',
      paragraphs: [
        'استراتيجية التطعيم المثلى أمر بالغ الأهمية للمرضى الخاضعين لزراعة الأعضاء الصلبة (SOT). يؤدي قصور الأعضاء المزمن إلى تغيّر في المناعة الأولية والتكيفية، بينما تزيد مثبطات المناعة بعد الزراعة من خطر العدوى. الوقاية من العدوى لا تحمي المريض فحسب، بل تمنع أيضًا التدهور الحاد، وخلل وظيفة العضو المزروع، ورفضه.',
      ],
    },
    corePrinciples: {
      title: 'المبادئ الأساسية: التوقيت والسلامة',
      intro:
        'تُظهر اللقاحات استجابة مناعية أفضل عند إعطائها في وقت مبكر من مسار قصور العضو، قبل أن يضعف الجهاز المناعي أكثر بسبب تقدم المرض أو الغسيل الكلوي.',
      bullets: [
        {
          label: 'النافذة قبل الزراعة:',
          text: 'يُفضّل إكمال جميع التطعيمات المطلوبة قبل الزراعة بمدة لا تقل عن أسبوعين (للقاحات غير الحية) أو 4 أسابيع (للقاحات الحية).',
        },
        {
          label: 'التأجيل بعد الزراعة:',
          text: 'يُؤجَّل إعطاء اللقاحات غير الحية الروتينية لمدة 3 إلى 6 أشهر بعد الزراعة — أي فترة أقصى تثبيط مناعي — إلا أثناء تفشٍّ مجتمعي محدد (مثل موجات الإنفلونزا أو COVID-19).',
        },
        {
          label: 'قاعدة اللقاحات الحية المعطّاة:',
          text: 'اللقاحات الحية (مثل MMR، الجدري المائي، التيفoid الفموي، الحمى الصفراء) ممنوعة عمومًا بعد الزراعة بسبب خطر تكاثر فيروسي غير منضبط. اللقاحات غير الحية آمنة تمامًا بعد الزراعة ولا تزيد من خطر رفض العضو.',
        },
      ],
    },
    universalSchedule: {
      title: 'الجدول الموحد للتطعيم لمرضى زراعة الأعضاء الصلبة',
      intro:
        'مع وجود فروق حسب نوع العضو، يوضّح الجدول التالي التوصيات الأساسية قبل وبعد الزراعة لجميع المرشحين والمتلقين.',
      caption: 'الجدول الموحد للتطعيم لمرضى زراعة الأعضاء الصلبة',
      columns: [
        { key: 'vaccine', label: 'العامل الممرض / اللقاح', className: COLUMN_CLASSES.vaccine },
        { key: 'preTransplant', label: 'قبل الزراعة (المرشحون)', className: COLUMN_CLASSES.preTransplant },
        { key: 'postTransplant', label: 'بعد الزراعة (المتلقون)', className: COLUMN_CLASSES.postTransplant },
        { key: 'considerations', label: 'اعتبارات سريرية', className: COLUMN_CLASSES.considerations },
      ],
      rows: [
        {
          vaccine: 'الإنفلونزا',
          preTransplant: 'جرعة سنوية',
          postTransplant: 'جرعة سنوية (غير حية فقط)',
          considerations:
            'يُعطى سنويًا. بعد الزراعة، يُستأنف بعد 3–6 أشهر (أو بعد شهر واحد أثناء تفشٍّ نشط). بخاخات الأنف الحية ممنوعة تمامًا.',
        },
        {
          vaccine: 'المكورات الرئوية',
          preTransplant: 'PCV13 أو PCV20 ثم PPSV23',
          postTransplant: 'جرعات منشطة حسب الإرشادات المحلية',
          considerations:
            'أكمل السلسلة مبكرًا في مرض العضو المزمن. جرعات ما بعد الزراعة تُؤجَّل 3–6 أشهر على الأقل. تحمي من الالتهاب الرئوي الشديد والمرض الغازي.',
        },
        {
          vaccine: 'التهاب الكبد B (HBV)',
          preTransplant: 'سلسلة معجّلة أو بجرعة مضاعفة (مثل 4 جرعات: 0، 1، 2، 6 أشهر)',
          postTransplant: 'منشطات إذا انخفض anti-HBs عن 10 mIU/mL',
          considerations:
            'الاستجابة المناعية أضعف في قصور العضو المتقدم. راقب anti-HBs سنويًا بعد الزراعة؛ أعطِ منشطات عند انخفاضها عن العتبة الواقية.',
        },
        {
          vaccine: 'SARS-CoV-2 (COVID-19)',
          preTransplant: 'السلسلة الأساسية + المنشطات',
          postTransplant: 'السلسلة الأساسية + المنشطات',
          considerations:
            'موصى به بشدة. المرضى بعد الزراعة يُظهرون استجابة أضعف للأجسام المضادة بسبب مثبطات المناعة؛ جداول المنشطات تتبع بروتوكولات المرضى ذوي المناعة الضعيفة.',
        },
        {
          vaccine: 'الحزام الناري (Herpes zoster)',
          preTransplant: 'لقاح الحزام الناري recombinant (RZV)',
          postTransplant: 'لقاح الحزام الناري recombinant (RZV)',
          considerations:
            'لا تستخدم لقاح الحزام الناري الحي. اللقاح recombinant غير الحي (Shingrix) آمن وموصى به بشدة قبل وبعد الزراعة (سلسلتان).',
        },
        {
          vaccine: 'فيروس papilloma البشري (HPV)',
          preTransplant: '3 جرعات (0، 1–2، 6 أشهر)',
          postTransplant: '3 جرعات إذا لم تُكمل سابقًا',
          considerations:
            'موصى به حتى 26 سنة (وحتى 45 سنة حسب النقاش السريري) بسبب زيادة خطر الأورام المرتبطة بـ HPV تحت العلاج المثبط للمناعة.',
        },
      ],
    },
    organSpecific: {
      title: 'اعتبارات خاصة حسب جهاز العضو',
      intro:
        'رغم انطباق الجدول الموحد على الجميع، لكل نوع زراعة توقيتات ومخاطر وأولويات سريرية مختلفة.',
      subsections: [
        {
          title: '🩸 زراعة الكلى (KT)',
          paragraphs: [
            {
              label: 'فشل المناعة في اليوريميا:',
              text: 'مرشحو زراعة الكلى غالبًا لديهم استجابة ضعيفة لتطعيم HBV المعتاد بسبب اليوريميا. الوقاية من HBV حيوية لأن مثبطات المناعة بعد الزراعة قد تسبب إعادة تنشيط فيروسي أو تقدمًا سريعًا لمرض الكبد.',
            },
            {
              label: 'فحص VZV:',
              text: 'يجب فحص جميع المرشحين لأجسام VZV IgG. إذا كانت النتيجة سلبية، يجب إعطاء لقاح الجدري المائي الحي قبل الزراعة بـ 4 أسابيع على الأقل.',
            },
          ],
        },
        {
          title: '🧪 زراعة الكبد (LT)',
          paragraphs: [
            {
              label: 'حماية معجّلة:',
              text: 'مرشحو زراعة الكبد غالبًا يُعرضون بتشمع متقدم أو فشل كبدي حاد، ما يتطلب حماية سريعة. جرعات HBV و HAV المعجّلة أو بجرعة مضاعفة (مثل أيام 0، 7، 21، ومنشطة عند 6 أشهر) شائعة الاستخدام.',
            },
            {
              label: 'اللقاحات الحية بعد الزراعة تحت إشراف:',
              text: 'بشكل فريد، متلقو زراعة الكبد يحتاجون عادةً تثبيطًا مناعيًا أقل مع الوقت. إذا كان المتلقي مستقرًا تمامًا، على أقل تثبيط مناعي، وبدون تاريخ رفض بعد 1–2 سنة، قد تُؤخذ في الاعتبار بعض اللقاحات الحية الضرورية (مثل MMR) بحذر تحت إشراف فريق الزراعة.',
            },
          ],
        },
        {
          title: '🫁 زراعة الصدر (القلب والرئة)',
          paragraphs: [
            {
              label: 'خطر تنفسي مرتفع:',
              text: 'الفيروسات التنفسية قد تسبب رفضًا خلويًا حادًا، أو خلل وظيفة، أو حالة قاتلة لدى متلقي الرئة المعروفة بخلل الرئة المزمن بعد الزراعة (CLAD).',
            },
            {
              label: 'تغطية إلزامية:',
              text: 'لقاح الإنفلونزا السنوي، منشطات COVID-19 المحدّثة، وسلسلة المكورات الرئوية من أولويات القصوى لمرشحي ومتلقي زراعة الصدر وجميع أفراد الأسرة. المرض الغازي بالمكورات الرئوية له معدل وفيات استثنائي لدى متلقي زراعة الرئة.',
            },
          ],
        },
        {
          title: '🩺 زراعة البنكreas والأمعاء',
          paragraphs: [
            {
              label: 'تثبيط مناعي عميق:',
              text: 'هؤلاء المتلقون يخضعون لبعض أقوى برامج التثبيط المناعي في عالم SOT، وغالبًا لعلاجات محفزة مستنفدة لخلايا T.',
            },
            {
              label: 'حظر دائم للقاحات الحية:',
              text: 'بسبب مستويات التثبيط المناعي المستمر العالية المطلوبة لمنع رفض البنكreas/الأمعاء، اللقاحات الحية ممنوعة بشكل صارم وغير محدود بعد الزراعة. يجب تحسين الحماية ضد البكتيريا مغلفة الغشاء (Streptococcus pneumoniae، Neisseria meningitidis، و Hib) خلال مرحلة المرشح.',
            },
          ],
        },
      ],
    },
    cocooning: {
      title: 'استراتيجية «الحماية المحيطة»: حماية المتلقي',
      paragraphs: [
        {
          text: 'لأن متلقي الزراعة على علاجات مثبطة للمناعة، قد لا يحصل على استجابة مناعية 100% فعالة للقاحات حتى مع الالتزام الكامل.',
        },
        {
          strong: 'عائلة المريض هي درعه.',
          text: 'تفرض «استراتيجية الحماية المحيطة» (Cocooning) تطعيم جميع مخالطي المنزل، وأفراد العائلة المقربين، والعاملين الصحيين بالكامل (بما في ذلك الإنفلونزا السنوية، منشطات السعال الديكي، ولقاحات COVID-19 المحدّثة). إنشاء حاجز مناعي حول المريض من أكثر الطرق فعالية للحفاظ على الصحة طويلة الأمد وحماية العضو المزروع.',
        },
        {
          strong: 'تذكير للمريض ومقدم الرعاية:',
          text: 'راجع سجل التطعيم في أقرب وقت ممكن خلال تقييم الزراعة. حماية صحتك تحمي العضو المزروع!',
        },
      ],
    },
  },
};

export const SOLID_ORGAN_TRANSPLANT_SECTION_IDS = {
  en: {
    overview: 'overview',
    corePrinciples: 'core-principles',
    universalSchedule: 'universal-schedule',
    organSpecific: 'organ-specific',
    cocooning: 'cocooning',
  },
  ar: {
    overview: 'overview-ar',
    corePrinciples: 'core-principles-ar',
    universalSchedule: 'universal-schedule-ar',
    organSpecific: 'organ-specific-ar',
    cocooning: 'cocooning-ar',
  },
} as const;

export const SOLID_ORGAN_TRANSPLANT_AR_TOC = [
  { id: 'overview-ar', label: 'نظرة عامة' },
  { id: 'core-principles-ar', label: 'المبادئ الأساسية' },
  { id: 'universal-schedule-ar', label: 'الجدول الموحد' },
  { id: 'organ-specific-ar', label: 'اعتبارات حسب العضو' },
  { id: 'cocooning-ar', label: 'الحماية المحيطة' },
] as const;

export const SOLID_ORGAN_TRANSPLANT_EN_TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'core-principles', label: 'Core principles' },
  { id: 'universal-schedule', label: 'Universal schedule' },
  { id: 'organ-specific', label: 'Organ-specific considerations' },
  { id: 'cocooning', label: 'Cocooning strategy' },
  { id: 'resources', label: 'PDF resources' },
  { id: 'references', label: 'References' },
] as const;

export const SOLID_ORGAN_TRANSPLANT_AR_TOC_FULL = [
  { id: 'overview-ar', label: 'نظرة عامة' },
  { id: 'core-principles-ar', label: 'المبادئ الأساسية' },
  { id: 'universal-schedule-ar', label: 'الجدول الموحد' },
  { id: 'organ-specific-ar', label: 'اعتبارات حسب العضو' },
  { id: 'cocooning-ar', label: 'الحماية المحيطة' },
  { id: 'resources', label: 'موارد PDF' },
  { id: 'references', label: 'المراجع' },
] as const;

/** @deprecated Use SOLID_ORGAN_TRANSPLANT_EN_TOC for English tab navigation. */
export const SOLID_ORGAN_TRANSPLANT_TOC = SOLID_ORGAN_TRANSPLANT_EN_TOC;
