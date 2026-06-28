import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const RsvPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpRsv",
  "title": "RSV (HCP)",
  "lead": "Respiratory Syncytial Virus (RSV) is a common, highly contagious virus of the respiratory tract. While it can infect all ages, greatest risk is in infants, young children, older adults, and people with weakened immunity.",
  "emoji": "🫁",
  "imageSrc": "/rsv%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Respiratory Syncytial Virus (RSV) is a common, highly contagious virus of the respiratory tract. While it can infect all ages, greatest risk is in infants, young children, older adults, and people with weakened immunity."
        }
      ]
    },
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "RSV primarily infects the nose, throat and lungs and is a leading cause of respiratory illness in young children globally. Most are infected by age two; disease is often mild but can be severe in vulnerable groups."
        }
      ]
    },
    {
      "id": "symptoms",
      "title": "Symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Runny nose, cough, sneezing, fever, wheezing, decreased appetite"
          ]
        },
        {
          "type": "p",
          "text": "In infants/young children RSV can cause bronchiolitis and pneumonia. Severe signs include dyspnea, tachypnea, cyanosis and dehydration."
        }
      ]
    },
    {
      "id": "transmission-and-seasonality",
      "title": "Transmission and Seasonality",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Spreads via respiratory droplets and contaminated surfaces (tables, toys, doorknobs). Season peaks in colder months (late autumn–early spring) in temperate climates."
        }
      ]
    },
    {
      "id": "high-risk-groups",
      "title": "High‑risk groups",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Infants (especially &lt;6 months), premature babies",
            "Children with chronic lung/heart disease",
            "Adults ≥65 years",
            "Immunocompromised people"
          ]
        }
      ]
    },
    {
      "id": "complications-and-outcomes",
      "title": "Complications and Outcomes",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Bronchiolitis, pneumonia",
            "Exacerbation of asthma/COPD",
            "Hospitalization in infants and the elderly",
            "Rarely fatal in very young children and older adults with comorbidities"
          ]
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
            "Hand hygiene; clean/disinfect frequently touched surfaces",
            "Avoid close contact with sick persons; limit crowds for high‑risk infants in RSV season",
            "Respiratory etiquette (cover coughs/sneezes)"
          ]
        },
        {
          "type": "ul",
          "items": [
            "Monoclonal antibodies for high‑risk infants/children to give seasonal passive protection",
            "Newly approved vaccines for older adults and for pregnant women (to protect newborns via transplacental antibodies); roll‑out is expanding globally and expected in Egypt"
          ]
        }
      ]
    },
    {
      "id": "global-burden-and-challenges",
      "title": "Global Burden and Challenges",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "RSV drives millions of hospitalizations and thousands of deaths annually, especially among young children in LMICs. Key challenges: limited access to immunization, low awareness, clinical overlap with other viruses, and seasonal surges straining health systems."
        }
      ]
    },
    {
      "id": "who-response",
      "title": "WHO Response",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Support R&amp;D for vaccines/therapeutics",
            "Strengthen global surveillance and guidance for IPC and clinical care",
            "Advocate equitable access to prevention and treatment"
          ]
        }
      ]
    },
    {
      "id": "rsv-in-egypt",
      "title": "RSV in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "2007–2008 Cairo University Pediatric Hospital study (infants with pneumonia/bronchopneumonia): RSV detected in 85% (58/68) via RT‑PCR; subtypes A 21%, B 36%, co‑infection A+B 43%. Highest rate at 2–3 months. Fever, wheeze, tachypnea, cyanosis common; CXR consolidation associated with RSV. Conclusion: major cause of severe LRTI; RT‑PCR of NPA is effective; continued surveillance needed."
        },
        {
          "type": "p",
          "text": "National outpatient survey (Oct 2022; 98 clinics; n=530 children): Influenza 25.3%, RSV 20.9%, co‑infection 2.8%. RSV cases were younger (mean 4.3y vs 7.2y for influenza). Dyspnea more frequent with RSV (62.2% vs 49.3%), especially in &lt;2 years (86.7% vs 53.1%). Conclusion: marked resurgence in 2022–2023; RSV linked to more severe symptoms in younger children; broadened viral surveillance is needed."
        }
      ]
    }
  ],
  "faqHref": "/faq/rsv",
  "docHref": "/doc/rsv",
  "references": [
    {
      "href": "https://www.cdc.gov/rsv/about/index.html",
      "label": "CDC – RSV"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/respiratory-syncytial-virus-(rsv)",
      "label": "WHO – RSV fact sheet"
    },
    {
      "href": "https://pubmed.ncbi.nlm.nih.gov/37277781/",
      "label": "Egypt national outpatient survey 2022"
    },
    {
      "href": "https://applications.emro.who.int/imemrf/Egypt_J_Med_Microbiol/Egypt_J_Med_Microbiol_2010_19_3_55_62.pdf",
      "label": "Egypt J Med Microbiol 2010"
    }
  ],
  "pdfs": [
    {
      "productName": "Synagis",
      "src": "/Synagis.pdf"
    },
    {
      "productName": "Abrysvo",
      "src": "/abrysvo.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'فيروس RSV (للممارسين الصحيين)',
    lead: 'فيروس التنفس المخلوي (RSV) فيروس شائع شديد العدوى يصيب الجهاز التنفسي. رغم إمكانية إصابة جميع الأعمار، يكون الخطر الأكبر عند الرضع والأطفال الصغار وكبار السن والأشخاص ذوي المناعة الضعيفة.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'فيروس التنفس المخلوي (RSV) فيروس شائع شديد العدوى يصيب الجهاز التنفسي. رغم إمكانية إصابة جميع الأعمار، يكون الخطر الأكبر عند الرضع والأطفال الصغار وكبار السن والأشخاص ذوي المناعة الضعيفة.',
          },
        ],
      },
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يصيب RSV بصفة أساسية الأنف والحلق والرئتين، وهو من أهم أسباب الأمراض التنفسية لدى الأطفال الصغار عالميًا. يُصاب معظم الأطفال بحلول عمر السنتين؛ وغالبًا ما تكون الأعراض خفيفة لكنها قد تكون شديدة لدى الفئات الضعيفة.',
          },
        ],
      },
      {
        id: 'symptoms',
        title: 'الأعراض',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'سيلان الأنف، سعال، عطس، حمى، صفير بالصدر، انخفاض الشهية',
            ],
          },
          {
            type: 'p',
            text: 'قد يسبب RSV لدى الرضع والأطفال الصغار التهاب القصيبات والالتهاب الرئوي. تشمل العلامات الشديدة ضيق التنفس، تسرع التنفس، ازرقاق، وجفاف.',
          },
        ],
      },
      {
        id: 'transmission-and-seasonality',
        title: 'الانتقال والموسمية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'ينتشر عبر القطرات التنفسية والأسطح الملوثة (الطاولات، الألعاب، مقابض الأبواب). يبلغ الذروة الموسمية في الأشهر الباردة (من أواخر الخريف إلى أوائل الربيع) في المناخات المعتدلة.',
          },
        ],
      },
      {
        id: 'high-risk-groups',
        title: 'الفئات عالية الخطورة',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'الرضع (خصوصًا &lt;6 أشهر)، الأطفال الخدج',
              'الأطفال المصابون بأمراض رئوية/قلبية مزمنة',
              'البالغون ≥65 سنة',
              'الأشخاص ذوو المناعة الضعيفة',
            ],
          },
        ],
      },
      {
        id: 'complications-and-outcomes',
        title: 'المضاعفات والنتائج',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'التهاب القصيبات، الالتهاب الرئوي',
              'تفاقم الربو/مرض الانسداد الرئوي المزمن (COPD)',
              'الاستشفاء لدى الرضع وكبار السن',
              'نادرًا ما يكون مميتًا لدى الأطفال الصغار جدًا وكبار السن ذوي الأمراض المصاحبة',
            ],
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
              'نظافة اليدين؛ تنظيف/تطهير الأسطح التي يُكثر لمسها',
              'تجنب الاتصال الوثيق بالمرضى؛ الحد من التجمعات للرضع عاليي الخطورة في موسم RSV',
              'آداب التنفس (تغطية السعال/العطس)',
            ],
          },
          {
            type: 'ul',
            items: [
              'الأجسام المضادة وحيدة النسيلة للرضع/الأطفال عاليي الخطورة لمنح حماية سلبية موسمية',
              'لقاحات معتمدة حديثًا لكبار السن وللحوامل (لحماية المواليد عبر الأجسام المضادة عبر المشيمة)؛ التوسع في الإتاحة عالميًا ومتوقع في مصر',
            ],
          },
        ],
      },
      {
        id: 'global-burden-and-challenges',
        title: 'العبء العالمي والتحديات',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يسبب RSV ملايين حالات الاستشفاء وآلاف الوفيات سنويًا، خصوصًا بين الأطفال الصغار في البلدان منخفضة ومتوسطة الدخل. التحديات الرئيسية: محدودية الوصول للتحصين، ضعف الوعي، التداخل السريري مع فيروسات أخرى، والموجات الموسمية التي تضغط على الأنظمة الصحية.',
          },
        ],
      },
      {
        id: 'who-response',
        title: 'استجابة منظمة الصحة العالمية',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'دعم البحث والتطوير للقاحات/العلاجات',
              'تعزيز المراقبة العالمية والإرشادات لمكافحة العدوى والرعاية السريرية',
              'الدعوة إلى إتاحة عادلة للوقاية والعلاج',
            ],
          },
        ],
      },
      {
        id: 'rsv-in-egypt',
        title: 'RSV في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'دراسة مستشفى جامعة القاهرة للأطفال 2007–2008 (رضع مصابون بالالتهاب الرئوي/التهاب القصيبات الرئوي): اكتُشف RSV في 85% (58/68) عبر RT‑PCR؛ النمط الفرعي A 21%، B 36%، والإصابة المزدوجة A+B 43%. أعلى معدل عند 2–3 أشهر. الحمى والصفير وتسرع التنفس والازرقاق شائعة؛ ارتبطت التوحّد بالأشعة السينية للصدر بـ RSV. الاستنتاج: سبب رئيسي لالتهابات الجهاز التنفسي السفلي الشديدة؛ RT‑PCR لعينة الأنف البلعومية فعّال؛ يلزم استمرار المراقبة.',
          },
          {
            type: 'p',
            text: 'مسح وطني للعيادات الخارجية (أكتوبر 2022؛ 98 عيادة؛ n=530 طفل): الإنفلونزا 25.3%، RSV 20.9%، إصابة مشتركة 2.8%. حالات RSV كانت أصغر سنًا (متوسط 4.3 سنة مقابل 7.2 سنة للإنفلونزا). ضيق التنفس أكثر شيوعًا مع RSV (62.2% مقابل 49.3%)، خصوصًا &lt;سنتين (86.7% مقابل 53.1%). الاستنتاج: انتعاش ملحوظ 2022–2023؛ ارتبط RSV بأعراض أشد لدى الأطفال الأصغر؛ يلزم توسيع المراقبة الفيروسية.',
          },
        ],
      },
    ],
  }),
};
