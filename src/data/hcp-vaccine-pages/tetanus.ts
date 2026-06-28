import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const TetanusPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpTetanus",
  "title": "Tetanus",
  "lead": "Tetanus is an acute infectious disease caused by Clostridium tetani. Despite being vaccine‑preventable, it remains a public‑health problem where immunization is low and unclean birth practices persist.",
  "emoji": "🔧",
  "imageSrc": "/tet.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Tetanus is an acute infectious disease caused by Clostridium tetani. Despite being vaccine‑preventable, it remains a public‑health problem where immunization is low and unclean birth practices persist."
        }
      ]
    },
    {
      "id": "transmission-and-epidemiology",
      "title": "Transmission and Epidemiology",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Infection occurs when spores contaminate cuts or wounds. Spores are ubiquitous (soil, ash, feces, rusty surfaces). No person‑to‑person transmission. Highest risk in inadequately immunized pregnant women and newborns. Incubation usually within 14 days (range 3–21). In 2018, ~25,000 newborn deaths from neonatal tetanus (97% reduction since 1988) due to TTCV expansion. In 2023, 84% of infants received 3 DTP doses globally."
        }
      ]
    },
    {
      "id": "pathogenesis-and-risk-factors",
      "title": "Pathogenesis and Risk Factors",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "C. tetani spores resist heat and many antiseptics, surviving for years. Neonatal tetanus follows non‑sterile cord care (contaminated instruments/substances). Risk rises with unclean deliveries. Adolescent/adult males may be at risk due to waning immunity and fewer boosters (e.g., circumcision without vaccination review)."
        }
      ]
    },
    {
      "id": "clinical-features-symptoms-and-diagnosis",
      "title": "Clinical Features: Symptoms and Diagnosis",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Diagnosis is clinical; labs are not required. Typical features: Jaw cramping / inability to open mouth (lockjaw) Muscle spasms (back, abdomen, limbs); painful spasms precipitated by stimuli Dysphagia; seizures; headache, fever, sweating Autonomic signs: BP fluctuations, tachycardia"
        },
        {
          "type": "p",
          "text": "Neonatal tetanus: inability to suck/breastfeed and excessive crying, then rigidity/spasms. WHO case: loss of sucking/crying between days 3–28 plus rigidity or spasms. Non‑neonatal tetanus: sustained facial spasm (risus sardonicus) or painful contractions, sometimes without a clear wound history."
        }
      ]
    },
    {
      "id": "treatment-and-prevention",
      "title": "Treatment and Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Hospital care in a low‑stimulus setting",
            "Immediate TIG (human tetanus immune globulin)",
            "Aggressive wound care",
            "Drugs for spasm control",
            "Antibiotics",
            "Tetanus vaccination"
          ]
        },
        {
          "type": "p",
          "text": "Recovery does not confer immunity; immunize even after illness."
        },
        {
          "type": "p",
          "text": "WHO recommends six TTCV doses (three primary + three boosters) for lifelong protection: Primary series: start at 6 weeks; ≥4‑week intervals Boosters: at 12–23 months, 4–7 years, and 9–15 years (≥4 years between boosters)"
        },
        {
          "type": "p",
          "text": "Formulations: DT, DTaP, Td, Tdap. Prevent neonatal tetanus by immunizing women of reproductive age (during or outside pregnancy), clean delivery/cord care, and safe surgical/dental wound care. Countries with high coverage have very low incidence."
        }
      ]
    },
    {
      "id": "global-and-national-response",
      "title": "Global and National Response",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The MNTE goal (WHA 1989) targets &lt;1 case per 1,000 live births per district. The MNTE Initiative (UNICEF/WHO/UNFPA, 1999) accelerated progress; as of Jul 2023, 11 countries have not yet achieved elimination."
        },
        {
          "type": "ul",
          "items": [
            "Strengthen routine immunization for pregnant women and children",
            "Clean delivery and cord care",
            "Reliable neonatal tetanus surveillance",
            "School‑based booster programs"
          ]
        }
      ]
    },
    {
      "id": "tetanus-immunity-in-egypt",
      "title": "Tetanus Immunity in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Survey (n=709; age 2 months–105 years; five regions) using ELISA anti‑tetanus IgG: 31.7% susceptible (IgG &lt; 0.15 IU/ml) 15.7% partially protected (0.15–1.0 IU/ml) 52.6% protected (≥1.0 IU/ml) Protection was 68.3% in ages 2 months–50 years, but susceptibility increased with age (up to 90.3% in older groups). More males were unprotected than females. Findings support monitoring and timely boosters to maintain long‑lasting protection."
        }
      ]
    }
  ],
  "references": [
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/tetanus",
      "label": "WHO – Tetanus"
    },
    {
      "href": "https://pubmed.ncbi.nlm.nih.gov/12237476/",
      "label": "Tetanus immunity survey in Egypt"
    }
  ],
  "pdfs": [
    {
      "productName": "Tet 1500",
      "src": "/Tet%201500.pdf"
    },
    {
      "productName": "Tet 30000",
      "src": "/Tet%2030000.pdf"
    },
    {
      "productName": "Toxoid",
      "src": "/Toxoid.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الكزاز',
    lead: 'الكزاز مرض معدٍ حاد يُسببه Clostridium tetani. رغم إمكانية الوقاية بالتطعيم، يبقى مشكلة صحية عامة حيث يكون التحصين منخفضًا وتستمر ممارسات الولادة غير الآمنة.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'الكزاز مرض معدٍ حاد يُسببه Clostridium tetani. رغم إمكانية الوقاية بالتطعيم، يبقى مشكلة صحية عامة حيث يكون التحصين منخفضًا وتستمر ممارسات الولادة غير الآمنة.',
          },
        ],
      },
      {
        id: 'transmission-and-epidemiology',
        title: 'الانتقال والوبائيات',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تحدث العدوى عندما تلوث الأبواغ الجروح أو القطوع. الأبواغ منتشرة في كل مكان (التربة، الرماد، البراز، الأسطح الصدئة). لا يوجد انتقال من شخص لآخر. أعلى خطر لدى الحوامل غير المحصنات كفاية والمواليد. فترة الحضانة عادةً خلال 14 يومًا (المدى 3–21). في 2018، نحو 25,000 وفاة حديثي الولادة من كزاز حديثي الولادة (انخفاض 97% منذ 1988) بفضل توسع لقاح TTCV. في 2023، تلقى 84% من الرضع 3 جرعات DTP عالميًا.',
          },
        ],
      },
      {
        id: 'pathogenesis-and-risk-factors',
        title: 'المسار المرضي وعوامل الخطورة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'أبواغ C. tetani تتحمل الحرارة والعديد من المطهرات وتبقى لسنوات. يحدث كزاز حديثي الولادة بعد عناية غير معقمة للحبل السري (أدوات/مواد ملوثة). يرتفع الخطر مع الولادات غير النظيفة. قد يكون الذكور المراهقون/البالغون معرّضين لضعف المناعة وجرعات منشطة أقل (مثل الختان دون مراجعة التطعيم).',
          },
        ],
      },
      {
        id: 'clinical-features-symptoms-and-diagnosis',
        title: 'السمات السريرية: الأعراض والتشخيص',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'التشخيص سريري؛ لا حاجة للمختبر. السمات النموذجية: تشنج الفك/عدم القدرة على فتح الفم (lockjaw) تشنجات عضلية (الظهر، البطن، الأطراف)؛ تشنجات مؤلمة تُثار بالمحفزات عسر البلع؛ نوبات؛ صداع، حمى، تعرق علامات ذاتية: تقلبات ضغط الدم، تسرع القلب',
          },
          {
            type: 'p',
            text: 'كزاز حديثي الولادة: عدم القدرة على الرضاعة/الإرضاع والبكاء المفرط، ثم تيبس/تشنجات. حالة WHO: فقدان الرضاعة/البكاء بين اليوم 3–28 مع تيبس أو تشنجات. كزاز غير حديثي الولادة: تشنج وجهي مستمر (risus sardonicus) أو انقباضات مؤلمة، أحيانًا دون تاريخ جرح واضح.',
          },
        ],
      },
      {
        id: 'treatment-and-prevention',
        title: 'العلاج والوقاية',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'رعاية مستشفوية في بيئة منخفضة المحفزات',
              'TIG (غلوبولين مناعي كزاز بشري) فورًا',
              'عناية جراحية نشطة للجروح',
              'أدوية للسيطرة على التشنجات',
              'مضادات حيوية',
              'تطعيم ضد الكزاز',
            ],
          },
          {
            type: 'p',
            text: 'الشفاء لا يمنح مناعة؛ يجب التطعيم حتى بعد المرض.',
          },
          {
            type: 'p',
            text: 'توصي WHO بست جرعات TTCV (ثلاث أساسية + ثلاث منشطة) للحماية مدى الحياة: السلسلة الأساسية: تبدأ عند 6 أسابيع؛ فواصل ≥4 أسابيع المنشطات: عند 12–23 شهرًا، 4–7 سنوات، و9–15 سنة (≥4 سنوات بين المنشطات)',
          },
          {
            type: 'p',
            text: 'المستحضرات: DT، DTaP، Td، Tdap. امنع كزاز حديثي الولادة بتحصين النساء في سن الإنجاب (أثناء الحمل أو خارجه)، الولادة/عناية الحبل السري النظيفة، والعناية الآمنة للجروح الجراحية/السنية. البلدان ذات التغطية العالية لديها حدوث منخفض جدًا.',
          },
        ],
      },
      {
        id: 'global-and-national-response',
        title: 'الاستجابة العالمية والوطنية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'هدف MNTE (WHA 1989) يستهدف &lt;1 حالة لكل 1,000 مولود حي لكل مقاطعة. مبادرة MNTE (UNICEF/WHO/UNFPA، 1999) سرّعت التقدم؛ حتى يوليو 2023، 11 دولة لم تحقق القضاء بعد.',
          },
          {
            type: 'ul',
            items: [
              'تعزيز التطعيم الروتيني للحوامل والأطفال',
              'الولادة النظيفة وعناية الحبل السري',
              'مراقبة موثوقة لكزاز حديثي الولادة',
              'برامج منشطات مدرسية',
            ],
          },
        ],
      },
      {
        id: 'tetanus-immunity-in-egypt',
        title: 'مناعة الكزاز في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'مسح (n=709؛ العمر من شهرين إلى 105 سنة؛ خمس مناطق) باستخدام ELISA لمضاد كزاز IgG: 31.7% عرضة (IgG &lt; 0.15 IU/ml) 15.7% محمية جزئيًا (0.15–1.0 IU/ml) 52.6% محمية (≥1.0 IU/ml) كانت الحماية 68.3% في الأعمار من شهرين إلى 50 سنة، لكن زادت القابلية للعدوى مع العمر (حتى 90.3% في الفئات الأكبر سنًا). ذكور غير محميين أكثر من الإناث. تدعم النتائج المراقبة والمنشطات في الوقت المناسب للحفاظ على حماية طويلة الأمد.',
          },
        ],
      },
    ],
  }),
};
