import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const RabirsPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpRabies",
  "title": "Rabies (HCP)",
  "lead": "Rabies is a deadly viral disease affecting the central nervous system of mammals, including humans. It is almost always fatal once symptoms appear, yet entirely preventable with timely vaccination and proper wound care. ",
  "emoji": "🐕",
  "imageSrc": "/rabies%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Rabies is a deadly viral disease affecting the central nervous system of mammals, including humans. It is almost always fatal once symptoms appear, yet entirely preventable with timely vaccination and proper wound care. As a vaccine‑preventable disease, elimination is feasible with coordinated efforts."
        }
      ]
    },
    {
      "id": "global-epidemiology",
      "title": "Global Epidemiology",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Present on every continent except Antarctica, rabies causes an estimated 59,000 deaths annually—mostly in Asia and Africa. About 40% of victims are children &lt;15 years. Economic costs (~US$8.6B/year) include medical care, lost income, and livestock losses. Underreporting is common; rabies is a neglected tropical disease receiving limited funding relative to its burden."
        }
      ]
    },
    {
      "id": "transmission-and-reservoirs",
      "title": "Transmission and Reservoirs",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Transmission is primarily via bites/scratches from infected animals; virus is present in saliva. Dogs cause up to 99% of human cases globally. Other reservoirs include bats, cats, foxes, raccoons, and regional wildlife. Rare routes (organ transplant, lab aerosols) occur. Human‑to‑human transmission is exceedingly rare."
        }
      ]
    },
    {
      "id": "symptoms-and-clinical-forms",
      "title": "Symptoms and Clinical Forms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Incubation is typically 1–3 months (range days to years). Early nonspecific symptoms: fever, headache, malaise. Progressive features: anxiety, agitation, confusion, hallucinations. Two clinical forms: Furious rabies: hyperactivity, hydrophobia, aerophobia, agitation with lucid intervals (most common). Paralytic rabies: ~20%; ascending paralysis from bite site to coma and death. After symptom onset, rabies is almost invariably fatal—prevention and early care are critical."
        }
      ]
    },
    {
      "id": "prevention-and-control",
      "title": "Prevention and Control",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Mass dog vaccination to interrupt transmission.",
            "Post‑exposure prophylaxis (PEP): immediate wound washing (≥15 minutes with soap/water), vaccine, and rabies immunoglobulin when indicated.",
            "Public awareness on bite avoidance and prompt care seeking.",
            "Surveillance and reporting to target interventions and track progress."
          ]
        },
        {
          "type": "p",
          "text": "The WHO‑led Zero by 30 initiative targets elimination of dog‑mediated human rabies by 2030 via a One Health approach."
        }
      ]
    },
    {
      "id": "rabies-in-egypt",
      "title": "Rabies in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt reports sporadic human cases annually, mainly from dog exposures; cats and livestock can also transmit. Children and rural communities are disproportionately affected. Recent progress includes mass dog vaccination, improved surveillance, and integration of rabies prevention in primary care; challenges remain with stray populations, coverage gaps, and awareness."
        }
      ]
    },
    {
      "id": "egypt-s-strategic-framework-7-pillars",
      "title": "Egypt's Strategic Framework (7 Pillars)",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Leadership & coordination",
            "Surveillance of human and animal rabies",
            "Dog vaccination scale-up",
            "Access to PEP (vaccine and immunoglobulin)",
            "Community engagement",
            "Research & innovation",
            "Digital transformation for reporting and tracking"
          ]
        }
      ]
    },
    {
      "id": "recent-updates-2025-prophylaxis-protocols",
      "title": "Recent Updates (2025): Prophylaxis Protocols",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Wound care: wash thoroughly with soap/water ≥15 minutes.",
            "Rabies vaccine: IM on days 0, 3, 7, 14 after exposure.",
            "Rabies immunoglobulin: infiltrate around wounds for Category III exposures ASAP.",
            "Special populations: children, pregnant women, and immunocompromised should receive PEP as indicated (5‑dose schedule for immunocompromised).",
            "PrEP: for high‑risk groups (veterinarians, lab staff, travelers to endemic regions)."
          ]
        },
        {
          "type": "p",
          "text": "Ongoing provider training and public campaigns ensure correct adherence to protocols nationwide."
        }
      ]
    }
  ],
  "faqHref": "/faq/rabies",
  "docHref": "/doc/rabies",
  "references": [
    {
      "href": "https://www.fao.org/egypt/news/detail/-World-Rabies-Day-2021-Celebration---Egypt-presents-the-Strategic-Framework-for-Elimination-Rabies-by-2030/en",
      "label": "FAO Egypt – Strategic Framework"
    },
    {
      "href": "https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html#:~:text=One%20injection%20each%20on%20days,fifth%20dose%20on%20day%2028.",
      "label": "CDC – PEP"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/rabies",
      "label": "WHO – Rabies Fact Sheet"
    }
  ],
  "pdfs": [
    {
      "productName": "Rabies",
      "src": "/Rabies.pdf"
    },
    {
      "productName": "Verorab",
      "src": "/verorab.pdf"
    },
    {
      "productName": "Abhayrab",
      "src": "/Abhayrab.pdf"
    },
    {
      "productName": "Rabies Immunoglobulin (Berirab)",
      "src": "/rabies%20immuno%20berirab.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'داء الكلب (HCP)',
    lead: 'داء الكلب مرض فيروسي مميت يصيب الجهاز العصبي المركزي للثدييات، بما فيها البشر. يكاد يكون قاتلاً دائماً بعد ظهور الأعراض، لكنه قابل للوقاية بالكامل بالتطعيم في الوقت المناسب والعناية السليمة بالجرح.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'داء الكلب مرض فيروسي مميت يصيب الجهاز العصبي المركزي للثدييات، بما فيها البشر. يكاد يكون قاتلاً دائماً بعد ظهور الأعراض، لكنه قابل للوقاية بالكامل بالتطعيم في الوقت المناسب والعناية السليمة بالجرح. وباعتباره مرضاً يمكن الوقاية منه باللقاح، فإن القضاء عليه ممكن بجهود منسقة.',
          },
        ],
      },
      {
        id: 'global-epidemiology',
        title: 'الوبائيات العالمية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يوجد داء الكلب في كل قارة ما عدا القارة القطبية الجنوبية، ويسبب نحو 59,000 وفاة سنوياً—معظمها في آسيا وأفريقيا. نحو 40% من الضحايا أطفال &lt;15 سنة. التكاليف الاقتصادية (~8.6 مليار دولار أمريكي/سنة) تشمل الرعاية الطبية وفقدان الدخل وخسائر الماشية. الإبلاغ ناقص شائع؛ ويُعد داء الكلب مرضاً استوائياً مهملاً يحصل على تمويل محدود مقارنة بعبئه.',
          },
        ],
      },
      {
        id: 'transmission-and-reservoirs',
        title: 'الانتقال والخزانات',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'ينتقل المرض أساساً عبر العض/الخدش من حيوانات مصابة؛ الفيروس موجود في اللعاب. تسبب الكلاب حتى 99% من حالات البشر عالمياً. تشمل خزانات أخرى الخفافيش والقطط والثعالب والراكون والحياة البرية الإقليمية. طرق نادرة (زرع الأعضاء، رذاذ مخبري) تحدث. انتقال الإنسان إلى الإنسان نادر للغاية.',
          },
        ],
      },
      {
        id: 'symptoms-and-clinical-forms',
        title: 'الأعراض والأشكال السريرية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'فترة الحضانة عادة 1–3 أشهر (من أيام إلى سنوات). أعراض مبكرة غير محددة: حمى وصداع وإعياء. مظاهر متقدمة: قلق وهياج وارتباك وهلاوس. شكلان سريريان: داء الكلب الهائج: فرط النشاط ورهاب الماء ورهاب الهواء وهياج مع فترات وعي (الأكثر شيوعاً). داء الكلب الشللي: ~20%؛ شلل صاعد من موقع العض إلى غيبوبة ووفاة. بعد بدء الأعراض، يكون داء الكلب قاتلاً في الغالب—الوقاية والرعاية المبكرة حاسمان.',
          },
        ],
      },
      {
        id: 'prevention-and-control',
        title: 'الوقاية والسيطرة',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'تطعيم الكلاب الجماعي لقطع الانتقال.',
              'الوقاية بعد التعرض (PEP): غسل الجرح فوراً (≥15 دقيقة بالماء والصابون)، واللقاح، والغلوبيولين المناعي لداء الكلب عند الإشارة.',
              'التوعية العامة بتجنب العض والتوجه السريع للرعاية.',
              'المراقبة والإبلاغ لاستهداف التدخلات وتتبع التقدم.',
            ],
          },
          {
            type: 'p',
            text: 'تستهدف مبادرة Zero by 30 بقيادة WHO القضاء على داء الكلب المنقول بالكلاب لدى البشر بحلول 2030 عبر نهج الصحة الواحدة.',
          },
        ],
      },
      {
        id: 'rabies-in-egypt',
        title: 'داء الكلب في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تُبلّغ مصر عن حالات بشرية متقطعة سنوياً، غالباً من تعرض للكلاب؛ ويمكن للقطط والماشية أيضاً نقل العدوى. يتأثر الأطفال والمجتمعات الريفية بشكل غير متناسب. يشمل التقدم الأخير تطعيم الكلاب الجماعي وتحسين المراقبة ودمج الوقاية من داء الكلب في الرعاية الأولية؛ وتبقى التحديات مع الكلاب الضالة وفجوات التغطية والوعي.',
          },
        ],
      },
      {
        id: 'egypt-s-strategic-framework-7-pillars',
        title: 'الإطار الاستراتيجي لمصر (7 ركائز)',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'القيادة والتنسيق',
              'مراقبة داء الكلب البشري والحيواني',
              'توسيع تطعيم الكلاب',
              'الوصول إلى PEP (اللقاح والغلوبيولين المناعي)',
              'إشراك المجتمع',
              'البحث والابتكار',
              'التحول الرقمي للإبلاغ والتتبع',
            ],
          },
        ],
      },
      {
        id: 'recent-updates-2025-prophylaxis-protocols',
        title: 'تحديثات حديثة (2025): بروتوكولات الوقاية',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'ul',
            items: [
              'العناية بالجرح: غسل شامل بالماء والصابون ≥15 دقيقة.',
              'لقاح داء الكلب: عضلي في الأيام 0 و3 و7 و14 بعد التعرض.',
              'الغلوبيولين المناعي لداء الكلب: حقن حول الجروح للتعرض من الفئة III في أسرع وقت.',
              'فئات خاصة: يجب أن يتلقى الأطفال والحوامل وضعاف المناعة PEP حسب الإشارة (جدول 5 جرعات لضعاف المناعة).',
              'الوقاية قبل التعرض (PrEP): للفئات عالية الخطورة (الأطباء البيطريون وموظفو المختبرات والمسافرون إلى مناطق مستوطنة).',
            ],
          },
          {
            type: 'p',
            text: 'يضمن التدريب المستمر لمقدمي الرعاية والحملات العامة الالتزام الصحيح بالبروتوكولات على مستوى الجمهورية.',
          },
        ],
      },
    ],
  }),
};
