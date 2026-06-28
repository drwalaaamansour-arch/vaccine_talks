import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const InfluenzaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpInfluenza",
  "title": "Influenza",
  "lead": "Influenza remains a significant public health concern year after year, affecting millions worldwide and leading to substantial morbidity and mortality, particularly among vulnerable populations. Each year, the formulatio",
  "emoji": "🤧",
  "imageSrc": "/influenza.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Influenza remains a significant public health concern year after year, affecting millions worldwide and leading to substantial morbidity and mortality, particularly among vulnerable populations. Each year, the formulation of influenza vaccines is updated as new viral strains emerge and epidemiological landscapes shift. The 2024-25 influenza season introduces several important changes and recommendations aimed at providing optimal protection against circulating influenza viruses."
        }
      ]
    },
    {
      "id": "vaccine-composition-for-2025-2026",
      "title": "Vaccine Composition for 2025-2026",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "A key update from 2025-26 influenza season is that all available vaccines are trivalent. This means they contain antigens from three different influenza virus strains: two influenza A strains and one influenza B strain. In recent years, some quadrivalent vaccines included two B strains, one from each of the Victoria and Yamagata lineages. However, for 2025-26, the B/Yamagata lineage is no longer included, as B/Yamagata viruses have not been detected globally since March 2020. Thus, the composition in 2024-25 focuses on the following: Influenza A(H1N1)pdm09-like virus, Influenza A(H3N2)-like virus, Influenza B Victoria lineage-like virus."
        },
        {
          "type": "p",
          "text": "The specific strains recommended for egg-based influenza vaccines for the 2025-26 season are as follows: an A/Victoria/4897/2022 (H1N1)pdm09-like virus; an A/Croatia/10136RV/2023 (H3N2)-like virus; and (Updated) a B/Austria/1359417/2021 (B/Victoria lineage)-like virus."
        }
      ]
    },
    {
      "id": "timing-and-administration-of-influenza-vaccination",
      "title": "Timing and Administration of Influenza Vaccination",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "For most people who require only a single dose of influenza vaccine, the best time to receive the vaccine is during September and October. This timing is crucial to ensure that immunity is at its peak during the typical months of high influenza activity. Nevertheless, vaccination should continue beyond October for those who have not yet received it, as long as influenza viruses are actively circulating and vaccines have not expired. Providers are encouraged to continue offering influenza vaccines throughout the entire influenza season. Even if a person has already had an influenza illness earlier in the season, vaccination is still recommended, as multiple strains and subtypes can circulate in the same season."
        }
      ]
    },
    {
      "id": "revaccination",
      "title": "Revaccination",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Protection from the influenza vaccine does wane over time, with the degree and speed of waning varying by viral strain and individual recipient (e.g., by age). However, studies indicate that protection generally persists for at least five to six months post-vaccination. Based on current evidence, the Centers for Disease Control and Prevention (CDC) and the Advisory Committee on Immunization Practices (ACIP) do not recommend revaccination later in the season for those who have already received the full seasonal vaccine, regardless of when it was administered."
        }
      ]
    },
    {
      "id": "rationale-for-annual-vaccination",
      "title": "Rationale for Annual Vaccination",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Annual influenza vaccination is necessary due to several factors: Antigenic Drift: Influenza viruses mutate frequently, requiring updated vaccines each season to match the most prevalent strains. Waning Immunity: Immunity from the vaccine diminishes over time, making yearly vaccination essential for continued protection. Multiple Strains: More than one type or subtype of influenza virus can circulate in any given season; the vaccine is formulated to protect against the most likely strains."
        }
      ]
    },
    {
      "id": "populations-at-increased-risk",
      "title": "Populations at Increased Risk",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "While healthy children and adults can experience severe influenza or its complications, certain groups are at notably higher risk for adverse outcomes. Vaccine recommendations place special emphasis on protecting the following populations: Children younger than 5 years (especially those under 2), Adults aged 50 years and older, Pregnant people, Alaska Natives and American Indians, Residents of nursing homes or long-term care facilities."
        },
        {
          "type": "p",
          "text": "Medical Conditions That Increase Risk: Chronic pulmonary diseases (including asthma), Cardiovascular diseases (excluding isolated hypertension), Renal, hepatic, neurologic, hematologic, or metabolic disorders (including diabetes mellitus), Immunocompromising conditions (due to any cause, such as medications or HIV infection), Extreme obesity (BMI of 40 or higher in adults), Chronic use of aspirin- or salicylate-containing medications in children through age 18 (due to risk of Reye syndrome)."
        }
      ]
    },
    {
      "id": "seasonal-influenza-in-egypt-community-based-study-2017-2",
      "title": "Seasonal Influenza in Egypt - Community-Based Study (2017–2020)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "A large community-based study conducted in five rural villages in northern Egypt followed over 2,300 individuals across three years (2017–2020) to better understand the burden of seasonal influenza."
        },
        {
          "type": "p",
          "text": "Key Findings: Infection rates varied each year, ranging from 4% to 28%. Antibodies against influenza A viruses (H1N1 and H3N2) were common, even though most participants had never received the flu vaccine. 42% showed immunity to H1N1, 65% had antibodies to H3N2. These results highlight the natural spread of flu viruses in rural Egyptian communities and the under-recognized burden of seasonal influenza."
        },
        {
          "type": "p",
          "text": "Why it matters: This study shows that seasonal influenza is widespread in Egypt, even without vaccination. It supports the importance of introducing or strengthening flu vaccination programs, especially for vulnerable groups."
        }
      ]
    }
  ],
  "faqHref": "/faq/influenza",
  "docHref": "/doc/influenza",
  "references": [
    {
      "href": "https://onlinelibrary.wiley.com/doi/full/10.1111/irv.12974",
      "label": "https://onlinelibrary.wiley.com/doi/full/10.1111/irv.12974"
    },
    {
      "href": "https://www.immunize.org/ask-experts/topic/influenza/",
      "label": "https://www.immunize.org/ask-experts/topic/influenza/"
    },
    {
      "href": "https://iris.who.int/bitstream/handle/10665/354264/WER9719-eng-fre.pdf?sequence=1",
      "label": "https://iris.who.int/bitstream/handle/10665/354264/WER9719-eng-fre.pdf?sequence=1"
    }
  ],
  "pdfs": [
    {
      "productName": "Vaxigrip",
      "src": "/Vaxigrip%202026.pdf"
    },
    {
      "productName": "Influvac",
      "src": "/Influvac%202026.pdf"
    },
    {
      "productName": "Influvac Tetra",
      "src": "/Influvac%20tetra2026.pdf"
    },
    {
      "productName": "GCFLU",
      "src": "/Gcflu%202026.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الإنفلونزا',
    lead: 'تظل الإنفلونزا مصدر قلق صحي عام كبير عاماً بعد عام، إذ تؤثر على ملايين حول العالم وتؤدي إلى مرض ووفيات كبيرة، خاصة بين الفئات الضعيفة. كل عام تُحدَّث تركيبة لقاحات الإنفلونزا مع ظهور سلالات فيروسية جديدة وتغير المشهد الوبائي.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تظل الإنفلونزا مصدر قلق صحي عام كبير عاماً بعد عام، إذ تؤثر على ملايين حول العالم وتؤدي إلى مرض ووفيات كبيرة، خاصة بين الفئات الضعيفة. كل عام تُحدَّث تركيبة لقاحات الإنفلونزا مع ظهور سلالات فيروسية جديدة وتغير المشهد الوبائي. موسم الإنفلونزا 2024–25 يقدّم عدة تغييرات وتوصيات مهمة تهدف إلى توفير حماية مثلى ضد فيروسات الإنفلونزا المتداولة.',
          },
        ],
      },
      {
        id: 'vaccine-composition-for-2025-2026',
        title: 'تركيبة اللقاح لموسم 2025–2026',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تحديث رئيسي لموسم الإنفلونزا 2025–26 هو أن جميع اللقاحات المتاحة ثلاثية (trivalent). أي أنها تحتوي على مستضدات من ثلاث سلالات فيروس إنفلونزا مختلفة: سلالتان من فيروس الإنفلونزا A وسلالة واحدة من فيروس الإنفلونزا B. في السنوات الأخيرة، تضمنت بعض اللقاحات رباعية (quadrivalent) سلالتين B، واحدة من كل سلالة Victoria وYamagata. لكن لموسم 2025–26، لم تعد سلالة B/Yamagata مُدرجة، إذ لم تُرصد فيروسات B/Yamagata عالمياً منذ مارس 2020. وبالتالي، تركز التركيبة في 2024–25 على: فيروس شبيه بـ Influenza A(H1N1)pdm09، وفيروس شبيه بـ Influenza A(H3N2)، وفيروس شبيه بسلالة Influenza B Victoria.',
          },
          {
            type: 'p',
            text: 'السلالات المحددة الموصى بها للقاحات الإنفلونزا المعتمدة على البيض لموسم 2025–26 هي: فيروس شبيه بـ A/Victoria/4897/2022 (H1N1)pdm09؛ وفيروس شبيه بـ A/Croatia/10136RV/2023 (H3N2)؛ و(مُحدَّث) فيروس شبيه بـ B/Austria/1359417/2021 (سلالة B/Victoria).',
          },
        ],
      },
      {
        id: 'timing-and-administration-of-influenza-vaccination',
        title: 'توقيت وإعطاء تطعيم الإنفلونزا',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'لمعظم من يحتاجون جرعة واحدة فقط من لقاح الإنفلونزا، أفضل وقت لتلقي اللقاح هو خلال سبتمبر وأكتوبر. هذا التوقيت مهم لضمان أن المناعة في ذروتها خلال أشهر نشاط الإنفلونزا المعتادة. ومع ذلك، يجب استمرار التطعيم بعد أكتوبر لمن لم يتلقوه بعد، طالما أن فيروسات الإنفلونزا لا تزال متداولة واللقاحات لم تنتهِ صلاحيتها. يُشجَّع مقدمو الرعاية على الاستمرار في تقديم لقاحات الإنفلونزا طوال موسم الإنفلونزا. حتى لو أصيب الشخص بمرض إنفلونزا سابقاً في الموسم، يُوصى بالتطعيم، إذ قد تتداول عدة سلالات وأنواع فرعية في الموسم نفسه.',
          },
        ],
      },
      {
        id: 'revaccination',
        title: 'إعادة التطعيم',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'الحماية من لقاح الإنفلونزا تضعف مع الوقت، وتختلف درجة وسرعة التضعف حسب السلالة الفيروسية والمتلقي (مثل العمر). لكن الدراسات تشير إلى أن الحماية تستمر عموماً لمدة خمس إلى ستة أشهر على الأقل بعد التطعيم. بناءً على الأدلة الحالية، لا توصي CDC ولجنة ممارسات التطعيم الاستشارية (ACIP) بإعادة التطعيم لاحقاً في الموسم لمن تلقوا بالفعل اللقاح الموسمي كاملاً، بغض النظر عن وقت إعطائه.',
          },
        ],
      },
      {
        id: 'rationale-for-annual-vaccination',
        title: 'مبررات التطعيم السنوي',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'التطعيم السنوي ضد الإنفلونزا ضروري لعدة عوامل: الانجراف المستضدي (Antigenic Drift): فيروسات الإنفلونزا تتحور باستمرار، ما يستلزم تحديث اللقاحات كل موسم لتطابق السلالات الأكثر شيوعاً. تضعف المناعة: المناعة من اللقاح تقل مع الوقت، ما يجعل التطعيم السنوي ضرورياً للحماية المستمرة. سلالات متعددة: أكثر من نوع أو نوع فرعي من فيروس الإنفلونزا قد يتداول في أي موسم؛ يُصمَّم اللقاح للحماية ضد السلالات الأكثر احتمالاً.',
          },
        ],
      },
      {
        id: 'populations-at-increased-risk',
        title: 'الفئات ذات الخطورة المتزايدة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'بينما قد يعاني الأطفال والبالغون الأصحاء من إنفلونزا شديدة أو مضاعفاتها، فإن بعض المجموعات أكثر عرضة بشكل ملحوظ لنتائج سلبية. توصيات التطعيم تؤكد بشكل خاص على حماية الفئات التالية: الأطفال دون 5 سنوات (خاصة دون سنتين)، البالغون من 50 سنة فأكثر، الحوامل، سكان ألاسكا والهنود الأمريكيون، مقيمو دور رعاية المسنين أو الرعاية طويلة الأمد.',
          },
          {
            type: 'p',
            text: 'الحالات الطبية التي تزيد الخطورة: أمراض رئوية مزمنة (بما فيها الربو)، أمراض القلب والأوعية (باستثناء ارتفاع ضغط الدم المعزول)، اضطرابات كلوية أو كبدية أو عصبية أو دموية أو استقلابية (بما فيها داء السكري)، حالات ضعف المناعة (لأي سبب، مثل الأدوية أو HIV)، السمنة المفرطة (BMI 40 فأكثر لدى البالغين)، الاستخدام المزمن لأدوية تحتوي على أسبرين أو ساليسيلات لدى الأطفال حتى 18 سنة (بسبب خطر متلازمة Reye).',
          },
        ],
      },
      {
        id: 'seasonal-influenza-in-egypt-community-based-study-2017-2',
        title: 'الإنفلونزا الموسمية في مصر — دراسة مجتمعية (2017–2020)',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'أُجريت دراسة مجتمعية كبيرة في خمس قرى ريفية بشمال مصر تابعت أكثر من 2300 فرد على مدى ثلاث سنوات (2017–2020) لفهم أفضل لعبء الإنفلونزا الموسمية.',
          },
          {
            type: 'p',
            text: 'النتائج الرئيسية: تفاوتت معدلات العدوى كل عام، من 4% إلى 28%. الأجسام المضادة ضد فيروسات الإنفلونزا A (H1N1 وH3N2) كانت شائعة، رغم أن معظم المشاركين لم يتلقوا لقاح الإنفلونزا. 42% أظهروا مناعة ضد H1N1، و65% لديهم أجسام مضادة لـ H3N2. تبرز هذه النتائج الانتشار الطبيعي لفيروسات الإنفلونزا في المجتمعات الريفية المصرية والعبء غير المُدرَك للإنفلونزا الموسمية.',
          },
          {
            type: 'p',
            text: 'لماذا يهم: تُظهر هذه الدراسة أن الإنفلونزا الموسمية منتشرة في مصر حتى دون التطعيم. وتدعم أهمية إدخال أو تعزيز برامج تطعيم الإنفلونزا، خاصة للفئات الضعيفة.',
          },
        ],
      },
    ],
  }),
};
