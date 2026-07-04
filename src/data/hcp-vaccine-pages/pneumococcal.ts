import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const PneumococcalPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpPneumococcal",
  "title": "Pneumococcal",
  "lead": "Pneumococcal disease, caused by the bacterium Streptococcus pneumoniae, remains a significant cause of morbidity and mortality worldwide. With over 100 distinct serotypes identified, this bacterium commonly inhabits the ",
  "emoji": "🦠",
  "imageSrc": "/pneumo.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Pneumococcal disease, caused by the bacterium Streptococcus pneumoniae, remains a significant cause of morbidity and mortality worldwide. With over 100 distinct serotypes identified, this bacterium commonly inhabits the human respiratory tract, yet only a select few serotypes are responsible for most invasive disease."
        }
      ]
    },
    {
      "id": "understanding-pneumococcal-disease",
      "title": "Understanding Pneumococcal Disease",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "S. pneumoniae is a Gram‑positive bacterium that can asymptomatically colonize the nasopharynx in 5%–90% of healthy individuals, depending on age, geography, and environment. Transmission is primarily via airborne droplets, so close‑contact settings facilitate spread."
        }
      ]
    },
    {
      "id": "serotypes-and-disease-manifestation",
      "title": "Serotypes and Disease Manifestation",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The polysaccharide capsule underpins serotyping (&gt;100 serotypes). Although most serotypes can cause disease, surveillance shows a minority account for the majority of invasive pneumococcal disease (IPD). Distribution varies by region, age, and vaccination status. IPD occurs when bacteria invade sterile sites. Major syndromes: Bacteremia: bloodstream infection leading to sepsis and possible multi‑organ dysfunction. Meningitis: infection of meninges with headache, fever, neck stiffness, altered consciousness. These are medical emergencies with high mortality and long‑term sequelae among the elderly, infants, and persons with comorbidities."
        }
      ]
    },
    {
      "id": "pneumococcal-vaccines",
      "title": "Pneumococcal Vaccines",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Vaccines target serotypes most likely to cause severe disease. Two main types:"
        },
        {
          "type": "p",
          "text": "PPSV23 contains purified polysaccharides from 23 serotypes. It elicits a T‑cell–independent response that lacks immunologic memory, is less effective in young children and elderly, and does not reduce nasopharyngeal carriage—limiting indirect (community) impact."
        },
        {
          "type": "p",
          "text": "PCV13, PCV15, PCV20 link polysaccharides to a carrier protein, engaging T‑helper cells to generate stronger, longer‑lasting immunity with memory and reduced carriage (herd protection)."
        },
        {
          "type": "p",
          "text": "PCV10 (Synflorix) protects against ten serotypes. Large studies show prevention of invasive disease, bacterial pneumonia, and acute otitis media in children, with strong antibody responses. Boosters enhance effectiveness, especially in ages 2–5 years."
        }
      ]
    },
    {
      "id": "serotype-coverage-and-regional-considerations-serotype-4",
      "title": "Serotype Coverage and Regional Considerations (Serotype 4)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "In U.S. surveillance (ABCs; Alaska; Navajo Nation), some western adult populations have ≥30% IPD due to serotype 4. Serotype 4 is included in PCV13/15/20 and PPSV23, but absent from adult PCV21 (Capvaxive). ACIP schedules for at‑risk adults in these areas maintain serotype‑4 coverage (e.g., PCV20 alone or PCV15 followed by PPSV23)."
        }
      ]
    },
    {
      "id": "community-acquired-pneumonia-in-egypt-epidemiology-and-p",
      "title": "Community‑Acquired Pneumonia in Egypt: Epidemiology and Practice",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "CAP remains a major concern in Egypt; S. pneumoniae is consistently among leading pathogens alongside H. influenzae and M. pneumoniae. Only 5–10% of CAP patients seek clinic care, suggesting underdiagnosis/underreporting."
        },
        {
          "type": "p",
          "text": "Elderly patients often present atypically (confusion, falls). Empiric antibiotics are commonly started prior to pathogen identification."
        },
        {
          "type": "ul",
          "items": [
            "Average hospital stay ≈ 7 days; longer in elderly/comorbidities.",
            "Mortality &lt; 10% in high‑risk groups.",
            "Antimicrobial misuse (inappropriate/delayed) prolongs stay and may worsen outcomes."
          ]
        }
      ]
    },
    {
      "id": "current-adult-vaccination-recommendations-egypt-experts",
      "title": "Current Adult Vaccination Recommendations (Egypt experts)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Influenza vaccine: annually for high‑risk adults.",
            "Pneumococcal vaccines: PCV13, PPSV23, and PCV20 as indicated by age/risk.",
            "COVID‑19 vaccine: not mandatory; recommended for vulnerable populations.",
            "RSV vaccine: increasingly prioritized for adult respiratory disease prevention."
          ]
        },
        {
          "type": "p",
          "text": "Despite recommendations, pneumococcal vaccine uptake is ~1% nationally. A complete pneumococcal regimen offers long‑term protection (single administration), whereas influenza requires annual revaccination."
        }
      ]
    }
  ],
  "faqHref": "/faq/pneumococcal",
  "docHref": "/doc/pneumococcal",
  "references": [
    {
      "href": "http://www.immunize.org/ask-experts/topic/pneumococcal/",
      "label": "Immunize.org – Pneumococcal"
    },
    {
      "href": "https://www.tandfonline.com/doi/full/10.1080/14760584.2024.2348608#d1e471",
      "label": "Expert Rev Vaccines 2024 – Egypt CAP"
    },
    {
      "href": "https://www.ema.europa.eu/en/medicines/human/EPAR/synflorix",
      "label": "EMA – Synflorix (PCV10)"
    }
  ],
  "pdfs": [
    {
      "productName": "Synflorix",
      "src": "/synflorix.pdf"
    },
    {
      "productName": "Prevenar",
      "src": "/prevenar.pdf"
    },
    {
      "productName": "Pneumocil",
      "src": "/pneumocil.pdf"
    },
    {
      "productName": "Pneumo 23 (PPSV23)",
      "src": "/Pneumo%2023.pdf"
    },
    {
      "productName": "Vaxneuvance",
      "src": "/Vaxnuvance%20.pdf"
    },
    {
      "productName": "Prevenar 20",
      "src": "/egypt-prevenar-20-pcv20-lpd.pdf"
    },
    {
      "productName": "Weuphoria",
      "src": "/weuphoria.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'المكورات الرئوية',
    lead: 'مرض المكورات الرئوية، الناجم عن البكتيريا Streptococcus pneumoniae، لا يزال سبباً مهماً للمرض والوفيات على مستوى العالم. مع تحديد أكثر من 100 نمط مصلي مميز، تعيش هذه البكتيريا عادة في الجهاز التنفسي البشري، لكن عدداً محدوداً من الأنماط المصلية فقط هو المسؤول عن معظم الأمراض الغازية.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'مرض المكورات الرئوية، الناجم عن البكتيريا Streptococcus pneumoniae، لا يزال سبباً مهماً للمرض والوفيات على مستوى العالم. مع تحديد أكثر من 100 نمط مصلي مميز، تعيش هذه البكتيريا عادة في الجهاز التنفسي البشري، لكن عدداً محدوداً من الأنماط المصلية فقط هو المسؤول عن معظم الأمراض الغازية.',
          },
        ],
      },
      {
        id: 'understanding-pneumococcal-disease',
        title: 'فهم مرض المكورات الرئوية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'S. pneumoniae بكتيريا موجبة الجرام يمكن أن تستعمر البلعوم الأنفي بشكل غير مصحوب بأعراض لدى 5%–90% من الأفراد الأصحاء، حسب العمر والجغرافيا والبيئة. ينتقل المرض أساساً عبر القطرات المحمولة جواً، لذا تسهّل بيئات الاتصال الوثيق الانتشار.',
          },
        ],
      },
      {
        id: 'serotypes-and-disease-manifestation',
        title: 'الأنماط المصلية ومظاهر المرض',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'الكبسولة متعددة السكريات هي أساس التصنيف المصلي (&gt;100 نمط مصلي). رغم أن معظم الأنماط المصلية يمكن أن تسبب المرض، تُظهر المراقبة أن أقلية منها تُشكّل غالبية مرض المكورات الرئوية الغازي (IPD). يختلف التوزيع حسب المنطقة والعمر وحالة التطعيم. يحدث IPD عندما تغزو البكتيريا مواقع معقمة. المتلازمات الرئيسية: تجرثم الدم: عدوى مجرى الدم تؤدي إلى تسمم دموي وربما خلل وظائف متعدد الأعضاء. التهاب السحايا: عدوى السحايا مع صداع وحمى وتيبس الرقبة وتغير في مستوى الوعي. هذه حالات طوارئ طبية بمعدلات وفيات عالية وآثار طويلة الأمد لدى كبار السن والرضع وذوي الأمراض المصاحبة.',
          },
        ],
      },
      {
        id: 'pneumococcal-vaccines',
        title: 'لقاحات المكورات الرئوية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تستهدف اللقاحات الأنماط المصلية الأكثر عرضة لإحداث مرض شديد. نوعان رئيسيان:',
          },
          {
            type: 'p',
            text: 'يحتوي PPSV23 على متعددات السكريات المنقاة من 23 نمطاً مصلياً. يثير استجابة مستقلة عن الخلايا التائية تفتقر إلى الذاكرة المناعية، وتكون أقل فعالية لدى الأطفال الصغار وكبار السن، ولا تقلل من الاستعمار البلعومي الأنفي—مما يحد من الأثر غير المباشر (المجتمعي).',
          },
          {
            type: 'p',
            text: 'يربط PCV13 وPCV15 وPCV20 متعددات السكريات ببروتين حامل، ما يُفعّل الخلايا المساعدة T لتوليد مناعة أقوى وأطول أمداً مع ذاكرة مناعية وتقليل الاستعمار (حماية القطيع).',
          },
          {
            type: 'p',
            text: 'يحمي PCV10 (Synflorix) من عشرة أنماط مصلية. تُظهر الدراسات الكبيرة الوقاية من المرض الغازي والالتهاب الرئوي البكتيري والتهاب الأذن الوسطى الحاد لدى الأطفال، مع استجابات أجسام مضادة قوية. تعزز الجرعات المعززة الفعالية، خاصة في الفئة العمرية 2–5 سنوات.',
          },
        ],
      },
      {
        id: 'serotype-coverage-and-regional-considerations-serotype-4',
        title: 'تغطية الأنماط المصلية والاعتبارات الإقليمية (النمط المصلي 4)',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'في المراقبة الأمريكية (ABCs؛ ألاسكا؛ أمة نافاجو)، تُشكّل بعض جماعات البالغين في الغرب ≥30% من IPD بسبب النمط المصلي 4. النمط المصلي 4 مُدرج في PCV13/15/20 وPPSV23، لكنه غير موجود في PCV21 للبالغين (Capvaxive). تحافظ جداول ACIP للبالغين المعرضين للخطر في هذه المناطق على تغطية النمط المصلي 4 (مثلاً PCV20 وحده أو PCV15 متبوعاً بـ PPSV23).',
          },
        ],
      },
      {
        id: 'community-acquired-pneumonia-in-egypt-epidemiology-and-p',
        title: 'الالتهاب الرئوي المكتسب مجتمعياً في مصر: الوبائيات والممارسة',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'يظل الالتهاب الرئوي المكتسب مجتمعياً (CAP) مصدر قلق كبير في مصر؛ وتُعد S. pneumoniae باستمرار من مسببات الأمراض الرئيسية إلى جانب H. influenzae وM. pneumoniae. يطلب 5–10% فقط من مرضى CAP الرعاية العيادية، ما يشير إلى نقص في التشخيص/الإبلاغ.',
          },
          {
            type: 'p',
            text: 'غالباً ما يقدم كبار السن بشكل غير نمطي (ارتباك، سقوط). تُبدأ المضادات الحيوية التجريبية عادة قبل تحديد المسبب.',
          },
          {
            type: 'ul',
            items: [
              'متوسط مدة الإقامة بالمستشفى ≈ 7 أيام؛ أطول لدى كبار السن/ذوي الأمراض المصاحبة.',
              'الوفيات &lt; 10% في الفئات عالية الخطورة.',
              'سوء استخدام المضادات الحيوية (غير المناسب/المتأخر) يطيل الإقامة وقد يفاقم النتائج.',
            ],
          },
        ],
      },
      {
        id: 'current-adult-vaccination-recommendations-egypt-experts',
        title: 'توصيات التطعيم الحالية للبالغين (خبراء مصر)',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'ul',
            items: [
              'لقاح الإنفلونزا: سنوياً للبالغين عاليي الخطورة.',
              'لقاحات المكورات الرئوية: PCV13 وPPSV23 وPCV20 حسب العمر/الخطر.',
              'لقاح COVID‑19: غير إلزامي؛ يُوصى به للفئات الضعيفة.',
              'لقاح RSV: يُعطى أولوية متزايدة للوقاية من أمراض الجهاز التنفسي لدى البالغين.',
            ],
          },
          {
            type: 'p',
            text: 'رغم التوصيات، فإن معدل التطعيم بالمكورات الرئوية ≈1% على المستوى الوطني. يوفر نظام التطعيم الكامل للمكورات الرئوية حماية طويلة الأمد (جرعة واحدة)، بينما يتطلب الإنفلونزا إعادة تطعيم سنوية.',
          },
        ],
      },
    ],
  }),
};
