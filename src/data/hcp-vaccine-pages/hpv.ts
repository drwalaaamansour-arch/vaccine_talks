import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const HpvPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHpv",
  "title": "HPV",
  "lead": "Human papillomavirus (HPV) is the name of a group of 200 known viruses. They do not cause concerns in most people, but infection with some high‑risk types is common and can cause genital warts or cancer. In 90% of people",
  "emoji": "💗",
  "imageSrc": "/hpv.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Human papillomavirus (HPV) is the name of a group of 200 known viruses. They do not cause concerns in most people, but infection with some high‑risk types is common and can cause genital warts or cancer. In 90% of people the body controls the infection by itself. Persistent HPV infection with high‑risk HPV types is the cause of cervical cancer and is associated with cancers of the vulva, vagina, mouth/throat, penis and anus. In 2019, HPV caused an estimated 620,000 cancer cases in women and 70,000 in men. Prophylactic vaccination against HPV can prevent these cancers. HPV screening and treatment of pre‑cancer lesions is also effective for preventing cervical cancer."
        }
      ]
    },
    {
      "id": "symptoms",
      "title": "Symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Most people will not have any symptoms. The immune system usually clears HPV within a year or two with no lasting effects. Some HPV infections cause small rough lumps (genital warts) on the vagina, penis, anus, and rarely the throat; they may be painful, itchy, bleed, or cause swollen glands. Persistent infection can cause cervical cell changes leading to precancers and, if untreated, cervical cancer—typically developing over 15–20 years. Early cell changes and precancers mostly have no symptoms. Possible cervical cancer symptoms include intermenstrual or post‑coital bleeding and foul‑smelling vaginal discharge; these symptoms are nonspecific and warrant clinical evaluation."
        }
      ]
    },
    {
      "id": "health-consequences-of-hpv",
      "title": "Health Consequences of HPV",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Anogenital warts: Nearly all cases are caused by low‑risk types 6 and 11 (~90% of cases).",
            "Recurrent respiratory papillomatosis (RRP): Types 6/11 can also cause recurrent growths in the respiratory tract.",
            "Cancers: Persistent infection with oncogenic HPV types can lead to precancers and cancers of the cervix, vulva, vagina, penis, anus, and oropharynx (tonsils and base of tongue). Progression from infection to cancer can span years to decades."
          ]
        }
      ]
    },
    {
      "id": "treatment-and-management",
      "title": "Treatment and Management",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "There is currently no treatment for HPV infection itself. Management targets HPV‑associated lesions (genital warts, RRP, pre‑cancerous or cancerous changes). Approaches vary by diagnosis, size, and location; complete eradication of HPV‑containing cells is not always guaranteed, and it is unclear whether treating visible lesions reduces transmission."
        }
      ]
    },
    {
      "id": "prevention",
      "title": "Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Vaccination is the best way to prevent HPV infection and related cancers. HPV vaccines should be given to girls aged 9–14 years before sexual activity. Dosing may be 1 or 2 doses; people with reduced immunity should receive 2 or 3 doses.",
            "Screening detects cervical precancers that can be treated before cancer develops. Women should be screened every 5–10 years starting at age 30; women living with HIV every 3 years starting at age 25.",
            "Risk reduction: condom use, voluntary medical male circumcision, and avoiding tobacco reduce persistent HPV risk.",
            "After a positive HPV test, clinicians assess the cervix for changes/precancers and treat to prevent progression."
          ]
        }
      ]
    },
    {
      "id": "hpv-and-cervical-cancer-in-egypt",
      "title": "HPV and Cervical Cancer in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Historically, cervical cancer screening uptake in Egypt was low (fewer than 1 in 10 women screened within five years as of 2021), partly due to a perception that cervical cancer was rare. This view has shifted with new evidence and advocacy."
        },
        {
          "type": "p",
          "text": "In 2021, Dr. Mohamed Elazab founded the Egyptian Society for Colposcopy and Cervical Pathology to improve awareness and prevention through: training clinicians, public education, and providing free screening for economically disadvantaged women. A landmark study by the society found 14% HPV positivity among 1,000 asymptomatic women, supporting expanded screening and prevention."
        },
        {
          "type": "p",
          "text": "In August 2023, Egypt launched a government‑backed campaign (National Campaign: \"Journey of a Thousand Kilometres\") to raise awareness and screening rates. A parallel Rotary‑funded effort (~US$2M) targets Greater Cairo to screen 10,000 women and includes intensive education, workforce training, and HPV vaccination for 30,000 girls aged 9–15."
        },
        {
          "type": "p",
          "text": "As part of the \"100 Million Healthy Lives\" initiative (June 2025), a nationwide screening program has reached over 3 million adults across 18 governorates, using mobile clinics and referral pathways for abnormal results. HPV vaccine has been available in Egypt since 2009 (private sector), but is not yet included in the national schedule."
        }
      ]
    }
  ],
  "faqHref": "/faq/hpv",
  "docHref": "/doc/hpv",
  "references": [
    {
      "href": "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/human-papillomavirus",
      "label": "WHO – HPV"
    },
    {
      "href": "https://www.cdc.gov/hpv/index.html",
      "label": "CDC – HPV"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/human-papilloma-virus-and-cancer",
      "label": "WHO – HPV and Cancer"
    }
  ],
  "pdfs": [
    {
      "productName": "Gardasil – Product Information",
      "src": "/Gardasil.pdf"
    },
    {
      "productName": "Cervarix – Product Information",
      "src": "/Cervarix%20.pdf"
    },
    {
      "productName": "Human Papilloma Bivalent Vaccine",
      "src": "/Hpv%202.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'HPV',
    lead: 'فيروس الورم الحليمي البشري (HPV) اسم لمجموعة من 200 فيروس معروف. لا تثير معظمها قلقاً لدى أغلب الناس، لكن الإصابة ببعض الأنواع عالية الخطورة شائعة وقد تسبب الثآليل التناسلية أو السرطان. في 90% من الأشخاص يتحكم الجسم في العدوى بمفرده. الإصابة المستمرة بأنواع HPV عالية الخطورة هي سبب سرطان عنق الرحم وترتبط بسرطانات الفرج والمهبل والفم/البلعوم والقضيب والشرج.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'فيروس الورم الحليمي البشري (HPV) اسم لمجموعة من 200 فيروس معروف. لا تثير معظمها قلقاً لدى أغلب الناس، لكن الإصابة ببعض الأنواع عالية الخطورة شائعة وقد تسبب الثآليل التناسلية أو السرطان. في 90% من الأشخاص يتحكم الجسم في العدوى بمفرده. الإصابة المستمرة بأنواع HPV عالية الخطورة هي سبب سرطان عنق الرحم وترتبط بسرطانات الفرج والمهبل والفم/البلعوم والقضيب والشرج. في 2019، تسبب HPV في نحو 620,000 حالة سرطان لدى النساء و70,000 لدى الرجال. التطعيم الوقائي ضد HPV يمكن أن يمنع هذه السرطانات. فحص HPV وعلاج الآفات ما قبل السرطانية فعّال أيضاً في الوقاية من سرطان عنق الرحم.',
          },
        ],
      },
      {
        id: 'symptoms',
        title: 'الأعراض',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'معظم الناس لن تظهر لديهم أي أعراض. الجهاز المناعي عادة يُزيل HPV خلال سنة أو سنتين دون آثار دائمة. بعض عدوى HPV تسبب نتوءات صغيرة خشنة (ثآليل تناسلية) على المهبل والقضيب والشرج، ونادراً في الحلق؛ قد تكون مؤلمة أو مثيرة للحكة أو تنزف أو تسبب تورم الغدد. الإصابة المستمرة قد تسبب تغيرات خلوية عنق الرحم تؤدي إلى ما قبل السرطان، وإذا لم تُعالج إلى سرطان عنق الرحم — يتطور عادة على مدى 15–20 سنة. التغيرات الخلوية المبكرة وما قبل السرطان غالباً بلا أعراض. أعراض سرطان عنق الرحم المحتملة تشمل نزيف بين الدورات أو بعد الجماع وإفرازات مهبلية كريهة الرائحة؛ هذه الأعراض غير محددة وتستدعي التقييم السريري.',
          },
        ],
      },
      {
        id: 'health-consequences-of-hpv',
        title: 'العواقب الصحية لـ HPV',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'الثآليل التناسلية: تسببها تقريباً جميع الحالات الأنواع منخفضة الخطورة 6 و11 (~90% من الحالات).',
              'الورم الحليمي التنفسي المتكرر (RRP): قد تسبب الأنواع 6/11 أيضاً نموات متكررة في الجهاز التنفسي.',
              'السرطانات: الإصابة المستمرة بأنواع HPV سرطانية قد تؤدي إلى ما قبل السرطان وسرطانات عنق الرحم والفرج والمهبل والقضيب والشرج والبلعوم (اللوزتين وقاعدة اللسان). التقدم من العدوى إلى السرطان قد يستغرق سنوات إلى عقود.',
            ],
          },
        ],
      },
      {
        id: 'treatment-and-management',
        title: 'العلاج والإدارة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لا يوجد حالياً علاج لعدوى HPV نفسها. تستهدف الإدارة الآفات المرتبطة بـ HPV (الثآليل التناسلية، RRP، التغيرات ما قبل السرطانية أو السرطانية). تختلف المناهج حسب التشخيص والحجم والموقع؛ القضاء التام على الخلايا المحتوية على HPV ليس مضموناً دائماً، ومن غير الواضح ما إذا كان علاج الآفات المرئية يقلل الانتقال.',
          },
        ],
      },
      {
        id: 'prevention',
        title: 'الوقاية',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'التطعيم هو أفضل وسيلة للوقاية من عدوى HPV والسرطانات المرتبطة بها. يجب إعطاء لقاحات HPV للفتيات من 9–14 سنة قبل النشاط الجنسي. قد تكون الجرعات 1 أو 2؛ من لديهم مناعة منخفضة يجب أن يتلقوا 2 أو 3 جرعات.',
              'الفحص يكشف ما قبل السرطان عنق الرحم التي يمكن علاجها قبل تطور السرطان. يجب فحص النساء كل 5–10 سنوات ابتداء من 30 سنة؛ النساء المصابات بـ HIV كل 3 سنوات ابتداء من 25 سنة.',
              'تقليل المخاطر: استخدام الواقي الذكري، والختان الطبي الذكري الطوعي، وتجنب التبغ يقلل خطر الإصابة المستمرة بـ HPV.',
              'بعد اختبار HPV إيجابي، يقيّم الأطباء عنق الرحم للتغيرات/ما قبل السرطان ويعالجون لمنع التقدم.',
            ],
          },
        ],
      },
      {
        id: 'hpv-and-cervical-cancer-in-egypt',
        title: 'HPV وسرطان عنق الرحم في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تاريخياً، كان معدل فحص سرطان عنق الرحم في مصر منخفضاً (أقل من 1 من كل 10 نساء أُجري لها فحص خلال خمس سنوات حتى 2021)، جزئياً بسبب تصور أن سرطان عنق الرحم نادر. تغيّر هذا المنظور مع أدلة جديدة وجهود التوعية.',
          },
          {
            type: 'p',
            text: 'في 2021، أسس د. محمد العزب الجمعية المصرية للكولبوسكوبي ومرض عنق الرحم لتحسين الوعي والوقاية من خلال: تدريب الأطباء، التثقيف العام، وتوفير فحص مجاني للنساء محدودي الدخل. دراسة بارزة للجمعية وجدت 14% إيجابية HPV بين 1000 امرأة بدون أعراض، مما يدعم توسيع الفحص والوقاية.',
          },
          {
            type: 'p',
            text: 'في أغسطس 2023، أطلقت مصر حملة مدعومة حكومياً (الحملة الوطنية: «رحلة ألف كيلومتر») لرفع الوعي ومعدلات الفحص. مبادرة موازية ممولة من Rotary (~2 مليون دولار أمريكي) تستهدف القاهرة الكبرى لفحص 10,000 امرأة وتشمل تثقيفاً مكثفاً وتدريب الكوادر وتطعيم HPV لـ 30,000 فتاة من 9–15 سنة.',
          },
          {
            type: 'p',
            text: 'ضمن مبادرة «100 مليون صحة» (يونيو 2025)، وصل برنامج فحص على مستوى الجمهورية إلى أكثر من 3 ملايين بالغ في 18 محافظة، باستخدام عيادات متنقلة ومسارات إحالة للنتائج غير الطبيعية. لقاح HPV متاح في مصر منذ 2009 (القطاع الخاص)، لكنه لم يُدرج بعد في الجدول الوطني.',
          },
        ],
      },
    ],
  }),
};
