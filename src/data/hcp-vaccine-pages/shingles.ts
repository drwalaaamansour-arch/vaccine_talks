import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const ShinglesPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpShingles",
  "title": "Shingles (HCP)",
  "lead": "Herpes zoster (shingles) is caused by reactivation of varicella‑zoster virus (VZV), the virus that causes chickenpox. After primary infection, VZV remains latent in dorsal root/cranial nerve ganglia and can later reactiv",
  "emoji": "⚡",
  "imageSrc": "/hzv.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Herpes zoster (shingles) is caused by reactivation of varicella‑zoster virus (VZV), the virus that causes chickenpox. After primary infection, VZV remains latent in dorsal root/cranial nerve ganglia and can later reactivate—more likely with immune senescence or immunosuppression—producing a painful dermatomal rash."
        },
        {
          "type": "p",
          "text": "The rash is typically a unilateral stripe of vesicles in one or more dermatomes; facial/ophthalmic involvement requires urgent evaluation. Shingles itself is not transmitted person‑to‑person; however, fluid from shingles vesicles can transmit VZV to a susceptible person (causing chickenpox, not shingles). Vaccination is highly effective at preventing shingles and its complications. Early antivirals reduce severity and duration."
        }
      ]
    },
    {
      "id": "risk-factors",
      "title": "Risk Factors",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "History of chickenpox (anyone previously infected is at risk)",
            "Age &gt;50 years",
            "Immunocompromise (HIV/AIDS, cancer, transplant, steroids/chemotherapy)",
            "Stress and chronic conditions (e.g., diabetes, CKD, chronic lung disease)"
          ]
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
            "Pain, itching, tingling or numbness days–weeks before rash",
            "Painful unilateral vesicular rash in a dermatomal band; vesicles crust in a few days",
            "Burning/throbbing/stabbing pain; ± fever, headache, chills, fatigue",
            "Urgent care if rash near the eye due to vision risk"
          ]
        }
      ]
    },
    {
      "id": "transmission",
      "title": "Transmission",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Shingles cannot be directly \"caught.\" VZV from vesicle fluid can infect a non‑immune person and cause chickenpox. Risk falls once lesions crust. Keep rash covered; avoid touching; frequent handwashing Avoid contact with susceptible pregnant women, newborns, and immunocompromised persons"
        }
      ]
    },
    {
      "id": "diagnosis",
      "title": "Diagnosis",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Clinical—unilateral dermatomal vesicular eruption. If uncertain/complicated, test vesicle material for VZV (PCR)."
        }
      ]
    },
    {
      "id": "treatment",
      "title": "Treatment",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Antivirals (acyclovir, valacyclovir, famciclovir) ideally within 72 hours of rash onset",
            "Pain control: NSAIDs/acetaminophen; consider neuropathic agents or stronger analgesics as needed",
            "Skin care: calamine, cool compresses; keep lesions clean/dry to prevent bacterial superinfection"
          ]
        }
      ]
    },
    {
      "id": "complications",
      "title": "Complications",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Postherpetic neuralgia (PHN): persistent neuropathic pain months–years",
            "Bacterial superinfection, scarring; ophthalmic zoster → vision loss",
            "Rare: pneumonia, encephalitis, stroke—especially in immunocompromised"
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
          "type": "p",
          "text": "WHO recommends recombinant zoster vaccine in a two‑dose schedule (≥2‑month interval) for adults ≥50 years and those with chronic conditions in settings where herpes zoster is a significant public‑health issue. The vaccine reduces risk of shingles and PHN and is indicated even after a prior episode."
        },
        {
          "type": "p",
          "text": "In Egypt, the Egyptian Drug Authority approved Shingrix on 11 Sep 2023; public launch occurred 26 Apr 2024 (GSK event). Varicella vaccination in childhood lowers lifetime shingles risk versus natural infection."
        }
      ]
    }
  ],
  "faqHref": "/faq/zoster",
  "docHref": "/doc/shingles",
  "references": [
    {
      "href": "https://www.cdc.gov/shingles/index.html",
      "label": "CDC – Shingles"
    },
    {
      "href": "https://www.who.int/news-room/fact-sheets/detail/shingles-(herpes-zoster)",
      "label": "WHO – Herpes Zoster"
    },
    {
      "href": "https://edaegypt.gov.eg/media/by4lmx15/par-bio-shingrix.pdf",
      "label": "EDA – Shingrix PI (2023)"
    }
  ],
  "pdfs": [
    {
      "productName": "Shingrix",
      "src": "/shingrix.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'القوباء المنطقية (للممارسين الصحيين)',
    lead: 'القوباء المنطقية (الهربس النطاقي) تنجم عن إعادة تنشيط فيروس الجدري المائي (VZV)، الفيروس المسبب لجدري الماء. بعد العدوى الأولية يبقى VZV كامنًا في عقد الجذور الظهرية/العقد العصبية القحفية وقد يُعاد تنشيطه لاحقًا.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'القوباء المنطقية (الهربس النطاقي) تنجم عن إعادة تنشيط فيروس الجدري المائي (VZV)، الفيروس المسبب لجدري الماء. بعد العدوى الأولية يبقى VZV كامنًا في عقد الجذور الظهرية/العقد العصبية القحفية وقد يُعاد تنشيطه لاحقًا — باحتمال أكبر مع شيخوخة المناعة أو كبت المناعة — فينتج طفحًا مؤلمًا على نمط جلدي عصبي.',
          },
          {
            type: 'p',
            text: 'الطفح عادةً شريطًا أحادي الجانب من فقاعات في نطاق جلدي عصبي واحد أو أكثر؛ الاشتباه العيني/القحفي يستلزم تقييمًا عاجلًا. القوباء المنطقية لا تُنقل مباشرة من شخص لآخر؛ لكن سائل فقاعاتها قد ينقل VZV لشخص غير محصن (فيُسبب جدري الماء وليس القوباء المنطقية). التطعيم فعّال جدًا في الوقاية من القوباء المنطقية ومضاعفاتها. المضادات الفيروسية المبكرة تقلل الشدة والمدة.',
          },
        ],
      },
      {
        id: 'risk-factors',
        title: 'عوامل الخطورة',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'تاريخ سابق لجدري الماء (أي شخص أُصيب سابقًا معرّض للخطر)',
              'العمر &gt;50 سنة',
              'كبت المناعة (HIV/AIDS، السرطان، زراعة الأعضاء، الستيرويدات/العلاج الكيميائي)',
              'الإجهاد والأمراض المزمنة (مثل السكري، الفشل الكلوي المزمن، أمراض الرئة المزمنة)',
            ],
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
              'ألم، حكة، وخز أو تنميل قبل الطفح بأيام إلى أسابيع',
              'طفح فقاعي مؤلم أحادي الجانب على شريط جلدي عصبي؛ تتقشر الفقاعات خلال أيام قليلة',
              'ألم حارق/نابض/طاعن؛ ± حمى، صداع، قشعريرة، إرهاق',
              'رعاية عاجلة إذا كان الطفح قرب العين لخطر الإصابة البصرية',
            ],
          },
        ],
      },
      {
        id: 'transmission',
        title: 'الانتقال',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لا يمكن «الإصابة» بالقوباء المنطقية مباشرة. قد ينقل VZV من سائل الفقاعات شخصًا غير محصن فيُسبب جدري الماء. يقل الخطر بعد تقشر الآفات. غطِّ الطفح؛ تجنب لمسه؛ اغسل اليدين باستمرار. تجنب الاتصال بالحوامل غير المناعيات والمواليد الجدد والأشخاص ذوي المناعة الضعيفة.',
          },
        ],
      },
      {
        id: 'diagnosis',
        title: 'التشخيص',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'سريري — طفح فقاعي أحادي الجانب على نمط جلدي عصبي. عند الشك أو التعقيد، افحص مادة الفقاعة لـ VZV (PCR).',
          },
        ],
      },
      {
        id: 'treatment',
        title: 'العلاج',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'مضادات فيروسية (أسيكلوفير، فالاسيكلوفير، فامسيكلوفير) مثاليًا خلال 72 ساعة من بدء الطفح',
              'تسكين الألم: مضادات الالتهاب غير الستيرويدية/باراسيتامول؛ قد تُستخدم أدوية الألم العصبي أو مسكنات أقوى حسب الحاجة',
              'العناية بالجلد: كالامين، كمادات باردة؛ إبقاء الآفات نظيفة/جافة لمنع العدوى البكتيرية الثانوية',
            ],
          },
        ],
      },
      {
        id: 'complications',
        title: 'المضاعفات',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'ألم عصبي ما بعد الهربس (PHN): ألم عصبي مستمر لأشهر إلى سنوات',
              'عدوى بكتيرية ثانوية، ندوب؛ الهربس العيني → فقدان البصر',
              'نادرًا: الالتهاب الرئوي، التهاب الدماغ، سكتة — خصوصًا لدى منعكسي المناعة',
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
            type: 'p',
            text: 'توصي WHO بلقاح الهربس النطاقي المؤتلف بجدول جرعتين (فاصل ≥شهرين) للبالغين ≥50 سنة ولمن لديهم أمراض مزمنة في البيئات التي يُعد فيها الهربس النطاقي مشكلة صحية عامة مهمة. يقلل اللقاح خطر القوباء المنطقية وPHN ويُشار إليه حتى بعد حلقة سابقة.',
          },
          {
            type: 'p',
            text: 'في مصر، اعتمدت هيئة الدواء المصرية Shingrix في 11 سبتمبر 2023؛ وأُطلق رسميًا في 26 أبريل 2024 (فعالية GSK). تطعيم الجدري المائي في الطفولة يخفض خطر القوباء المنطقية مدى الحياة مقارنة بالعدوى الطبيعية.',
          },
        ],
      },
    ],
  }),
};
