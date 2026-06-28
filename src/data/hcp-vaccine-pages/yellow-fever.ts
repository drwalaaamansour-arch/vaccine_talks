import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const YellowFeverPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpYellowFever",
  "title": "Yellow fever",
  "lead": "Yellow fever is a mosquito‑borne viral disease endemic in tropical/subtropical regions of Africa and South America. Transmission to humans occurs primarily via the bite of infected mosquitoes.",
  "emoji": "🟨",
  "imageSrc": "/yellow.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Yellow fever is a mosquito‑borne viral disease endemic in tropical/subtropical regions of Africa and South America. Transmission to humans occurs primarily via the bite of infected mosquitoes."
        }
      ]
    },
    {
      "id": "clinical-presentation-and-diagnosis",
      "title": "Clinical Presentation and Diagnosis",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Illness ranges from mild (fever, aches, pains) to severe with hepatic injury, hemorrhage and jaundice. Diagnosis uses compatible symptoms, epidemiologic exposure (travel/residence in risk areas), and laboratory testing."
        }
      ]
    },
    {
      "id": "treatment-and-prevention",
      "title": "Treatment and Prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "No specific antivirals exist; care is supportive. Prevention relies on mosquito‑bite avoidance and vaccination where indicated."
        }
      ]
    },
    {
      "id": "vaccine-recommendations",
      "title": "Vaccine Recommendations",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Vaccinate persons ≥9 months traveling to or living in risk areas in South America/Africa, and when entry requirements mandate proof (ICVP). Because serious adverse events can occur, vaccinate only if exposure risk or proof is required. Review contraindications and precautions before vaccination."
        }
      ]
    },
    {
      "id": "administration-and-blood-donation",
      "title": "Administration and Blood Donation",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Defer blood donation ≥2 weeks post‑vaccination; rare transfusion/transplant transmission has occurred."
        }
      ]
    },
    {
      "id": "booster-doses-and-new-guidelines",
      "title": "Booster Doses and New Guidelines",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "ACIP (Feb 2015): a single dose provides long‑lasting protection for most travelers. Additional doses may be considered for: women vaccinated during pregnancy; recipients of hematopoietic stem‑cell transplant; persons with HIV; travelers vaccinated ≥10 years ago visiting high‑risk areas; laboratory workers handling wild‑type YF virus."
        }
      ]
    },
    {
      "id": "contraindications",
      "title": "Contraindications",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Severe allergy to a vaccine component",
            "Age &lt;6 months",
            "Symptomatic HIV or CD4 &lt;200/mm³ (or &lt;15% if &lt;6 years)",
            "Thymus disorders with abnormal immune function",
            "Primary immunodeficiencies; malignant neoplasms; transplantation",
            "Immunosuppressive or immunomodulatory therapies"
          ]
        }
      ]
    },
    {
      "id": "precautions",
      "title": "Precautions",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Age 6–8 months; age ≥60 years",
            "Asymptomatic HIV with CD4 200–499/mm³ (15–24% if &lt;6 years)",
            "Pregnancy; breastfeeding"
          ]
        }
      ]
    },
    {
      "id": "coadministration-with-other-vaccines",
      "title": "Coadministration with Other Vaccines",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Inactivated vaccines: give any time relative to YF vaccine (including simultaneous)."
        },
        {
          "type": "p",
          "text": "Live viral vaccines: generally may be given simultaneously; if not, separate by 30 days. Coadministration with MMR is acceptable, but consider 30‑day spacing to optimize antibody responses."
        },
        {
          "type": "p",
          "text": "Live bacterial vaccines: limited data suggest oral typhoid (Ty21a) and oral cholera (CVD103‑HgR) can be given at any interval."
        }
      ]
    },
    {
      "id": "reactions-to-vaccine",
      "title": "Reactions to Vaccine",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Usually mild (headache, myalgia, low‑grade fever). Rare but serious events include anaphylaxis, yellow fever vaccine‑associated viscerotropic disease (YEL‑AVD) and neurologic disease (YEL‑AND)."
        }
      ]
    }
  ],
  "references": [
    {
      "href": "https://www.cdc.gov/yellow-fever/about/",
      "label": "CDC – About Yellow Fever"
    },
    {
      "href": "https://www.cdc.gov/yellow-fever/hcp/vaccine/",
      "label": "CDC – Vaccine Guidance"
    }
  ],
  "pdfs": [
    {
      "productName": "Yellow Fever",
      "src": "/Yellow%20fever%20.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الحمى الصفراء',
    lead: 'الحمى الصفراء مرض فيروسي ينتقل عبر البعوض، مستوطن في المناطق الاستوائية/شبه الاستوائية في أفريقيا وأمريكا الجنوبية. ينتقل للبشر أساسًا عبر لدغة البعوض المصاب.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'الحمى الصفراء مرض فيروسي ينتقل عبر البعوض، مستوطن في المناطق الاستوائية/شبه الاستوائية في أفريقيا وأمريكا الجنوبية. ينتقل للبشر أساسًا عبر لدغة البعوض المصاب.',
          },
        ],
      },
      {
        id: 'clinical-presentation-and-diagnosis',
        title: 'العرض السريري والتشخيص',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تتراوح الأعراض من خفيفة (حمى، آلام، أوجاع) إلى شديدة مع إصابة كبدية، نزيف ويرقان. يعتمد التشخيص على أعراض متوافقة، تعرض وبائي (سفر/إقامة في مناطق خطر)، وفحوصات مخبرية.',
          },
        ],
      },
      {
        id: 'treatment-and-prevention',
        title: 'العلاج والوقاية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لا توجد مضادات فيروسية محددة؛ الرعاية داعمة. تعتمد الوقاية على تجنب لدغات البعوض والتطعيم حيث يُشار إليه.',
          },
        ],
      },
      {
        id: 'vaccine-recommendations',
        title: 'توصيات اللقاح',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'طعّم الأشخاص ≥9 أشهر المسافرين إلى أو المقيمين في مناطق خطر في أمريكا الجنوبية/أفريقيا، وعندما تتطلب شروط الدخول إثباتًا (ICVP). لأن الآثار الجانبية الخطيرة ممكنة، طعّم فقط إذا كان خطر التعرض أو الإثبات مطلوبًا. راجع موانع الاستعمال والاحتياطات قبل التطعيم.',
          },
        ],
      },
      {
        id: 'administration-and-blood-donation',
        title: 'الإعطاء والتبرع بالدم',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'أجّل التبرع بالدم ≥أسبوعين بعد التطعيم؛ حدثت حالات نادرة لانتقال عبر نقل الدم/زراعة الأعضاء.',
          },
        ],
      },
      {
        id: 'booster-doses-and-new-guidelines',
        title: 'جرعات المنشطة والإرشادات الجديدة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'ACIP (فبراير 2015): جرعة واحدة توفر حماية طويلة الأمد لمعظم المسافرين. قد تُؤخذ جرعات إضافية لـ: النساء المطعّمات أثناء الحمل؛ متلقي زراعة الخلايا الجذعية الدموية؛ من لديهم HIV؛ مسافرين طُعّموا منذ ≥10 سنوات ويزورون مناطق عالية الخطورة؛ عمال المختبرات الذين يتعاملون مع فيروس YF البري.',
          },
        ],
      },
      {
        id: 'contraindications',
        title: 'موانع الاستعمال',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'حساسية شديدة لمكوّن اللقاح',
              'العمر &lt;6 أشهر',
              'HIV عرضي أو CD4 &lt;200/mm³ (أو &lt;15% إذا &lt;6 سنوات)',
              'اضطرابات الزعتر مع خلل وظيفة مناعي',
              'نقص المناعة الأولي؛ أورام خبيثة؛ زراعة الأعضاء',
              'علاجات كابتة أو معدّلة للمناعة',
            ],
          },
        ],
      },
      {
        id: 'precautions',
        title: 'الاحتياطات',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'العمر 6–8 أشهر؛ العمر ≥60 سنة',
              'HIV بدون أعراض مع CD4 200–499/mm³ (15–24% إذا &lt;6 سنوات)',
              'الحمل؛ الرضاعة',
            ],
          },
        ],
      },
      {
        id: 'coadministration-with-other-vaccines',
        title: 'الإعطاء المتزامن مع لقاحات أخرى',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'اللقاحات المعطّلة: يمكن إعطاؤها في أي وقت بالنسبة للقاح YF (بما في ذلك التزامن).',
          },
          {
            type: 'p',
            text: 'اللقاحات الفيروسية الحية: يمكن عادةً إعطاؤها معًا؛ إن لم يكن، افصل بـ 30 يومًا. الإعطاء المتزامن مع MMR مقبول، لكن يُفضّل فاصل 30 يومًا لتحسين استجابة الأجسام المضادة.',
          },
          {
            type: 'p',
            text: 'اللقاحات البكتيرية الحية: بيانات محدودة تشير إلى إمكانية إعطاء التيفوئيد الفموي (Ty21a) والكوليرا الفموي (CVD103‑HgR) في أي فاصل زمني.',
          },
        ],
      },
      {
        id: 'reactions-to-vaccine',
        title: 'تفاعلات اللقاح',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'عادةً خفيفة (صداع، ألم عضلي، حمى منخفضة). أحداث نادرة لكن خطيرة تشمل الحساسية المفرطة، مرض الحمى الصفراء المرتبط باللقاح الجسدي (YEL‑AVD) والمرض العصبي (YEL‑AND).',
          },
        ],
      },
    ],
  }),
};
