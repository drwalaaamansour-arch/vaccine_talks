import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const HepatitisAPage: HcpVaccineProductPageProps = {
  metaKey: 'hcpHepatitisA',
  title: 'Hepatitis A',
  lead: 'Hepatitis A virus (HAV) — clinical overview, transmission, and targeted vaccination considerations for Egypt.',
  emoji: '🟡',
  imageSrc: '/hepatitis%20a.png',
  imageAlt: 'Hepatitis A',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      icon: '📋',
      blocks: [
        {
          type: 'p',
          text: 'Hepatitis A is a liver disease common in many parts of the world and caused by hepatitis A virus (HAV), a picornavirus that causes acute inflammation of the liver. It is not related to the common viruses that cause hepatitis B or C.',
        },
      ],
    },
    {
      id: 'symptoms',
      title: 'Symptoms and Complications',
      icon: '🩺',
      blocks: [
        {
          type: 'p',
          text: 'Illness caused by HAV infection cannot be distinguished from other types of acute viral hepatitis, but it typically has an abrupt onset that can include fever, malaise, anorexia, nausea, abdominal discomfort, dark urine, and jaundice.',
        },
        {
          type: 'p',
          text: 'The likelihood of having symptoms with HAV infection is related to age. In children younger than age 6 years, 70% of infections are asymptomatic. When illness does occur in young children, it is typically not accompanied by jaundice. In older children and adults, infection typically is symptomatic, with jaundice occurring in more than 70% of patients.',
        },
        {
          type: 'p',
          text: 'Hepatitis A signs and symptoms usually resolve in 2–3 months, although 10% to 15% of symptomatic people have prolonged illness (usually referred to as relapsing hepatitis A) lasting up to 6 months and should be considered infectious during that time.',
        },
      ],
    },
    {
      id: 'transmission',
      title: 'Transmission',
      icon: '🔄',
      blocks: [
        {
          type: 'p',
          text: 'Person-to-person spread through the fecal-oral route is the primary means of HAV transmission. Peak infectivity in infected people occurs during the two-week period before the onset of jaundice when the concentration of virus in the stool is highest and most people are no longer infectious one week after jaundice onset. Before routine vaccination of children was recommended, children were a key source of infection because most infected children had no symptoms and could shed virus in stool for weeks or months. Transmission currently occurs primarily among susceptible adults.',
        },
        {
          type: 'p',
          text: 'Common-source outbreaks and sporadic cases can occur from exposure to fecally contaminated food or water. Uncooked HAV-contaminated foods have been recognized as a source of outbreaks. Cooked foods also can transmit HAV.',
        },
      ],
    },
    {
      id: 'incubation',
      title: 'Incubation Period',
      icon: '⏱️',
      blocks: [
        {
          type: 'p',
          text: 'HAV can produce either asymptomatic or symptomatic infection in humans after an average incubation period of 28 days (range: 15–50 days).',
        },
      ],
    },
    {
      id: 'shedding',
      title: 'Shedding',
      icon: '🧪',
      blocks: [
        {
          type: 'p',
          text: 'In infected people, HAV replicates in the liver, is excreted in bile, and is shed in stool. Peak infectivity occurs during the 2-week period before onset of jaundice or elevation of liver enzymes, when concentration of virus in stool is highest. Concentration of virus in stool declines after jaundice appears, with most people no longer infectious about a week after jaundice appears. Children can shed HAV for longer periods than adults, up to 10 weeks or longer after onset of clinical illness.',
        },
      ],
    },
    {
      id: 'chronic-liver',
      title: 'Risk in Chronic Liver Disease',
      icon: '⚠️',
      blocks: [
        {
          type: 'p',
          text: 'People with chronic liver disease are not at increased risk for acquiring HAV infection. However, they are at an increased risk for life-threatening, fulminant (severe and sudden) hepatitis if they become infected with hepatitis A. People considered to have chronic liver disease include those with hepatitis B or C infection, cirrhosis, fatty liver disease, alcoholic liver disease, and autoimmune hepatitis.',
        },
      ],
    },
    {
      id: 'egypt',
      title: 'Seroprevalence of Hepatitis A Virus Antibodies Among Egyptian Children',
      icon: '🇪🇬',
      blocks: [
        { type: 'h3', text: 'Background' },
        {
          type: 'p',
          text: 'Hepatitis A virus (HAV) is the most common cause of acute viral hepatitis worldwide, with prevalence closely tied to sanitation and socioeconomic status. In Egypt, improvements in hygiene have shifted the pattern of HAV infection, affecting strategies for vaccination.',
        },
        { type: 'h3', text: 'Key Findings from a Cairo Study' },
        {
          type: 'ul',
          items: [
            'The study analyzed 296 children (2.5–18 years) in Cairo, Egypt, across all social classes.',
            'The overall seropositivity for HAV antibodies was 61.4%.',
            'Seropositivity increased with age and decreased with higher social class: low social class 87.5%, high social class 43.0%.',
            'No significant difference in seropositivity between boys and girls.',
            'Older children were more likely to be immune, reflecting increased exposure over time.',
            'High social class children were more likely to remain susceptible into adolescence, increasing their risk for symptomatic infection if exposed later in life.',
          ],
        },
        { type: 'h3', text: 'Implications for Vaccination Policy in Egypt' },
        {
          type: 'ul',
          items: [
            'Routine national hepatitis A vaccination may not be necessary at this time, since more than half the population acquires immunity naturally at a young age.',
            'Targeted vaccination is recommended for children of high social class at preschool age, without requiring pre-testing for HAV antibodies.',
            'Vaccination may be considered for middle social class children at preschool age and for high social class adolescents (9–18 years) after testing for HAV antibodies.',
            'For children in low social class, early natural immunity is common, so vaccination is not currently needed.',
          ],
        },
        { type: 'h3', text: 'Further Recommendations' },
        {
          type: 'ul',
          items: [
            'Population-based studies across different regions are essential for refining vaccination strategies and ensuring cost-effective use of resources.',
            'Monitoring sanitation and socioeconomic shifts is critical, as improved living standards may paradoxically increase susceptibility in older children and adults.',
          ],
        },
        { type: 'h3', text: 'Conclusion' },
        {
          type: 'p',
          text: 'Vaccination remains the best way to prevent hepatitis A, especially in groups with lower rates of natural immunity. In Egypt, targeted vaccination for high-risk (especially high social class) children is more appropriate than a universal program at present, but continued surveillance is important.',
        },
      ],
    },
  ],
  faqHref: '/faq/hepatitis-a',
  docHref: '/doc/hepatitis-a',
  references: [
    {
      href: 'https://www.cdc.gov/hepatitis-a/vaccination/index.html',
      label: 'CDC Hepatitis A Vaccination Information',
    },
    {
      href: 'https://www.emro.who.int/emhj-volume-14-2008/volume-14-issue-5/seroprevalence-of-hepatitis-a-virus-antibodies-among-a-sample-of-egyptian-children.html',
      label: 'WHO EMRO — Seroprevalence Study Among Egyptian Children',
    },
    {
      href: 'https://www.immunize.org/ask-experts/topic/hepa/',
      label: 'Immunize.org Hepatitis A Expert Q&A',
    },
  ],
  pdfs: [
    { productName: 'Havrix', src: '/Havrix.pdf' },
    { productName: 'Avaxim', src: '/Avaxim.pdf' },
    { productName: 'Healive', src: '/healive.pdf' },
  ],
  ar: buildVaccineArBundle({
    title: 'التهاب الكبد A',
    lead: 'فيروس التهاب الكبد A (HAV) — نظرة سريرية، طرق الانتقال، واعتبارات التطعيم المستهدف في مصر.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'التهاب الكبد A مرض كبدي شائع في أجزاء كثيرة من العالم، يسببه فيروس التهاب الكبد A (HAV)، وهو فيروس من فصيلة البيكورنا يُسبب التهابًا حادًا في الكبد. لا يرتبط بالفيروسات التي تسبب التهاب الكبد B أو C.',
          },
        ],
      },
      {
        id: 'symptoms',
        title: 'الأعراض والمضاعفات',
        icon: '🩺',
        blocks: [
          {
            type: 'p',
            text: 'لا يمكن تمييز المرض الناجم عن HAV عن أنواع أخرى من التهاب الكبد الفيروسي الحاد، لكنه يبدأ عادةً بشكل مفاجئ وقد يشمل حمى، إعياء، فقد شهية، غثيان، ألم بطني، بول داكن، ويرقان.',
          },
          {
            type: 'p',
            text: 'احتمال ظهور الأعراض يرتبط بالعمر. في الأطفال دون 6 سنوات، 70% من الإصابات بدون أعراض. وعند ظهور المرض في الصغار، غالبًا دون يرقان. في الأكبر سناً والبالغين، الإصابة عادةً مصحوبة بأعراض، واليرقان في أكثر من 70% من المرضى.',
          },
          {
            type: 'p',
            text: 'تختفي أعراض التهاب الكبد A عادةً خلال 2–3 أشهر، لكن 10–15% من المصابين ذوي الأعراض قد يعانون مرضاً ممتداً (التهاب كبد A متكرر) حتى 6 أشهر ويُعتبرون معديين خلاله.',
          },
        ],
      },
      {
        id: 'transmission',
        title: 'الانتقال',
        icon: '🔄',
        blocks: [
          {
            type: 'p',
            text: 'الانتشار من شخص لآخر عبر المسار البرازي-الفموي هو الوسيلة الأساسية. ذروة العدوى قبل ظهور اليرقان بأسبوعين عندما يكون تركيز الفيروس في البراز أعلى ما يمكن، ومعظم المصابين يتوقفون عن نقل العدوى بعد أسبوع من ظهور اليرقان. قبل التطعيم الروتيني للأطفال، كانوا مصدراً رئيسياً لأن معظمهم بدون أعراض ويفرزون الفيروس أسابيع أو أشهر. حالياً ينتقل المرض أساساً بين البالغين غير المناعيين.',
          },
          {
            type: 'p',
            text: 'قد تحدث تفشيات من مصدر مشترك أو حالات متفرقة بسبب طعام أو ماء ملوث بالبراز. الأطعمة غير المطهوة الملوثة بـ HAV مصدر معروف للتفشيات، والأطعمة المطهوة قد تنقل الفيروس أيضاً.',
          },
        ],
      },
      {
        id: 'incubation',
        title: 'فترة الحضانة',
        icon: '⏱️',
        blocks: [
          {
            type: 'p',
            text: 'قد يسبب HAV إصابة بدون أعراض أو بأعراض بعد فترة حضانة متوسطة 28 يوماً (المدى: 15–50 يوماً).',
          },
        ],
      },
      {
        id: 'shedding',
        title: 'إفراز الفيروس',
        icon: '🧪',
        blocks: [
          {
            type: 'p',
            text: 'في المصابين، يتكاثر HAV في الكبد، يُفرز في العصارة الصفراوية، ويُطرح في البراز. ذروة العدوى خلال الأسبوعين قبل اليرقان أو ارتفاع إنزيمات الكبد. يتراجع تركيز الفيروس في البراز بعد اليرقان، ومعظم الناس لا يعدون معديين بعد نحو أسبوع. الأطفال قد يفرزون HAV فترة أطول من البالغين، حتى 10 أسابيع أو أكثر بعد بدء المرض.',
          },
        ],
      },
      {
        id: 'chronic-liver',
        title: 'الخطر عند مرض الكبد المزمن',
        icon: '⚠️',
        blocks: [
          {
            type: 'p',
            text: 'مرضى الكبد المزمن ليسوا أكثر عرضة للإصابة بـ HAV، لكنهم أكثر عرضة لالتهاب كبد fulminant مهدد للحياة إذا أُصيبوا. يشمل مرضى الكبد المزمن من لديهم التهاب كبد B أو C، تليف الكبد، الكبد الدهني، الكبد الكحولي، والتهاب الكبد المناعي الذاتي.',
          },
        ],
      },
      {
        id: 'egypt',
        title: 'معدل انتشار أجسام مضادة لفيروس التهاب الكبد A بين الأطفال المصريين',
        icon: '🇪🇬',
        blocks: [
          { type: 'h3', text: 'الخلفية' },
          {
            type: 'p',
            text: 'HAV هو السبب الأكثر شيوعاً للتهاب الكبد الفيروسي الحاد عالمياً، ويرتبط انتشاره بالصرف الصحي والوضع الاجتماعي الاقتصادي. في مصر، تحسّن النظافة غيّر نمط الإصابة وأثر على استراتيجيات التطعيم.',
          },
          { type: 'h3', text: 'نتائج رئيسية من دراسة بالقاهرة' },
          {
            type: 'ul',
            items: [
              'حللت الدراسة 296 طفلاً (2.5–18 سنة) بالقاهرة من جميع الطبقات الاجتماعية.',
              'إيجابية الأجسام المضادة الكلية 61.4%.',
              'تزداد الإيجابية مع العمر وتقل مع ارتفاع الطبقة الاجتماعية: طبقة منخفضة 87.5%، طبقة عالية 43.0%.',
              'لا فرق ذا دلالة بين الذكور والإناث.',
              'الأكبر سناً أكثر مناعة، ما يعكس زيادة التعرض مع الوقت.',
              'أطفال الطبقة العالية أكثر عرضة للبقاء غير مناعيين حتى المراهقة، ما يزيد خطر الإصابة العرضية لاحقاً.',
            ],
          },
          { type: 'h3', text: 'آثار على سياسة التطعيم في مصر' },
          {
            type: 'ul',
            items: [
              'قد لا يكون التطعيم الوطني الروتيني ضرورياً حالياً لأن أكثر من نصف السكان يكتسبون مناعة طبيعية في سن مبكرة.',
              'يُوصى بتطعيم مستهدف لأطفال الطبقة العالية في سن ما قبل المدرسة دون فحص مسبق للأجسام المضادة.',
              'قد يُنظر في التطعيم لأطفال الطبقة المتوسطة في ما قبل المدرسة ولمراهقي الطبقة العالية (9–18 سنة) بعد فحص الأجسام المضادة.',
              'في الطبقة المنخفضة، المناعة الطبيعية المبكرة شائعة، فلا حاجة للتطعيم حالياً.',
            ],
          },
          { type: 'h3', text: 'توصيات إضافية' },
          {
            type: 'ul',
            items: [
              'دراسات على مستوى السكان في مناطق مختلفة ضرورية لتحسين الاستراتيجيات واستخدام الموارد بكفاءة.',
              'مراقبة التحسن في الصرف الصحي والوضع الاجتماعي مهمة، إذ قد تزيد المعايير المعيشية من عدد غير المناعيين في الأكبر سناً.',
            ],
          },
          { type: 'h3', text: 'الخلاصة' },
          {
            type: 'p',
            text: 'التطعيم يبقى أفضل وسيلة للوقاية، خاصة في الفئات ذات المناعة الطبيعية المنخفضة. في مصر، التطعيم المستهدف للأطفال عاليي الخطورة (خصوصاً الطبقة العالية) أنسب من برنامج شامل حالياً، مع استمرار المراقبة.',
          },
        ],
      },
    ],
  }),
};
