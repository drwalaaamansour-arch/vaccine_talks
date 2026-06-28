import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const HibPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHib",
  "title": "HIB",
  "lead": "Haemophilus influenzae is a bacteria that has encapsulated (typeable) or unencapsulated (nontypeable) strains. Encapsulated strains express one of six antigenically distinct capsular polysaccharides (types a, b, c, d, e,",
  "emoji": "👶",
  "imageSrc": "/hib.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Haemophilus influenzae is a bacteria that has encapsulated (typeable) or unencapsulated (nontypeable) strains. Encapsulated strains express one of six antigenically distinct capsular polysaccharides (types a, b, c, d, e, or f). Type b (Hib) was historically the most common type to cause invasive disease, particularly in young children."
        }
      ]
    },
    {
      "id": "transmission-and-colonization",
      "title": "Transmission and Colonization",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "H. influenzae colonizes the upper respiratory tract of humans and is transmitted person-to-person by inhalation of respiratory droplets or by direct contact with respiratory tract secretions."
        }
      ]
    },
    {
      "id": "clinical-spectrum-and-strains",
      "title": "Clinical Spectrum and Strains",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Encapsulated non–type b strains, particularly type a, can cause invasive disease similar to Hib disease. Nontypeable strains also can cause invasive disease but more commonly cause mucosal infections such as otitis media, conjunctivitis, and sinusitis. Vaccines are only available for H. influenzae type b; Hib vaccines do not protect against disease caused by other H. influenzae strains."
        }
      ]
    },
    {
      "id": "important-clarification",
      "title": "Important Clarification",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Haemophilus influenzae type b is a polysaccharide-encapsulated bacteria that causes a variety of invasive diseases, such as meningitis, epiglottitis, and pneumonia. Influenza, by contrast, is a virus that causes the disease influenza."
        }
      ]
    },
    {
      "id": "historical-note",
      "title": "Historical Note",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Haemophilus influenzae was first isolated in 1889 from the sputum of a patient who died of (viral) influenza disease, and the isolated organism (then called the Pfeiffer bacillus) was incorrectly assumed to have caused the patient's illness. The name \"Haemophilus influenzae\" (1920) acknowledged this historical association. The viral cause of influenza was not discovered until 1933."
        }
      ]
    },
    {
      "id": "vaccination",
      "title": "Vaccination",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "CDC recommends Hib vaccination for all children younger than 5 years old. Older children and adults usually do not need a Hib vaccine. Hib vaccination is recommended for certain unvaccinated people with specific medical conditions and for people who receive a bone marrow transplant."
        }
      ]
    },
    {
      "id": "egypt-data-hib-pneumonia-in-children-under-five",
      "title": "Egypt Data: Hib Pneumonia in Children under Five",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Paper published: 2012 | Data collected: 2009 | Location: Ain Shams University Children's Hospital, Cairo. Sample: 100 children under 5 years hospitalized with pneumonia. Hib was detected in 31% of cases using real-time PCR, compared with 12% by blood culture. PCR was more sensitive and accurate than culture. Most effective antibiotic reported: Ceftriaxone. Hib was a major cause of pneumonia before vaccine introduction."
        }
      ]
    },
    {
      "id": "egypt-epi-context",
      "title": "Egypt EPI Context",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The Ministry of Health and Population (MoHP) continues to advance its EPI efforts through the introduction of Hib vaccine as a component of the PENTA vaccine in the national immunization programme, aiming to reduce morbidity and mortality due to bacterial pneumonia."
        }
      ]
    }
  ],
  "faqHref": "/faq/hib",
  "references": [
    {
      "href": "https://www.immunize.org/ask-experts/topic/hib/",
      "label": "https://www.immunize.org/ask-experts/topic/hib/"
    },
    {
      "href": "https://www.cdc.gov/hi-disease/vaccines/index.html",
      "label": "https://www.cdc.gov/hi-disease/vaccines/index.html"
    },
    {
      "href": "https://www.sciencedirect.com/science/article/pii/S1110863012000067",
      "label": "https://www.sciencedirect.com/science/article/pii/S1110863012000067"
    },
    {
      "href": "https://www.emro.who.int/egy/programmes/expanded-programme-on-immunization.html",
      "label": "https://www.emro.who.int/egy/programmes/expanded-programme-on-immunization.html"
    }
  ],
  "pdfs": [
    {
      "productName": "Hibrix",
      "src": "/Hibrix.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'Hib',
    lead: 'Haemophilus influenzae بكتيريا لها سلالات مغلفة (قابلة للتصنيف) أو غير مغلفة (غير قابلة للتصنيف). السلالات المغلفة تعبر عن أحد ستة أنواع من البولي سكاريدات الكبسولية المميزة من حيث المستضد (الأنواع a وb وc وd وe وf). كان النوع b (Hib) تاريخياً الأكثر شيوعاً في التسبب في الأمراض الغازية، خاصة لدى الأطفال الصغار.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'Haemophilus influenzae بكتيريا لها سلالات مغلفة (قابلة للتصنيف) أو غير مغلفة (غير قابلة للتصنيف). السلالات المغلفة تعبر عن أحد ستة أنواع من البولي سكاريدات الكبسولية المميزة من حيث المستضد (الأنواع a وb وc وd وe وf). كان النوع b (Hib) تاريخياً الأكثر شيوعاً في التسبب في الأمراض الغازية، خاصة لدى الأطفال الصغار.',
          },
        ],
      },
      {
        id: 'transmission-and-colonization',
        title: 'الانتقال والاستعمار',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'H. influenzae يستعمر الجهاز التنفسي العلوي لدى الإنسان وينتقل من شخص لآخر عبر استنشاق القطرات التنفسية أو التلامس المباشر مع إفرازات الجهاز التنفسي.',
          },
        ],
      },
      {
        id: 'clinical-spectrum-and-strains',
        title: 'الطيف السريري والسلالات',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'السلالات المغلفة غير النوع b، ولا سيما النوع a، يمكن أن تسبب أمراضاً غازية مشابهة لمرض Hib. السلالات غير القابلة للتصنيف قد تسبب أيضاً أمراضاً غازية، لكنها أكثر شيوعاً في التسبب في العدوى المخاطية مثل التهاب الأذن الوسطى، والتهاب الملتحمة، والتهاب الجيوب الأنفية. التطعيمات متاحة فقط ضد Haemophilus influenzae النوع b؛ تطعيمات Hib لا تحمي من الأمراض الناجمة عن سلالات H. influenzae الأخرى.',
          },
        ],
      },
      {
        id: 'important-clarification',
        title: 'توضيح مهم',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'Haemophilus influenzae النوع b بكتيريا مغلفة بالبولي سكاريد تسبب مجموعة متنوعة من الأمراض الغازية، مثل التهاب السحايا، والتهاب الحنجري، والالتهاب الرئوي. الإنفلونزا، بالمقابل، فيروس يسبب مرض الإنفلونزا.',
          },
        ],
      },
      {
        id: 'historical-note',
        title: 'ملاحظة تاريخية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'عُزل Haemophilus influenzae لأول مرة عام 1889 من بلغم مريض توفي بمرض الإنفلونزا (الفيروسية)، وافترض خطأً أن العامل المعزول (المسمى آنذاك bacillus Pfeiffer) هو سبب مرض المريض. الاسم «Haemophilus influenzae» (1920) يعكس هذا الارتباط التاريخي. لم يُكتشف السبب الفيروسي للإنفلونزا إلا عام 1933.',
          },
        ],
      },
      {
        id: 'vaccination',
        title: 'التطعيم',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'توصي CDC بتطعيم Hib لجميع الأطفال دون سن 5 سنوات. الأطفال الأكبر سناً والبالغون عادة لا يحتاجون تطعيم Hib. يُوصى بتطعيم Hib لبعض غير المطعّمين الذين يعانون حالات طبية محددة، ولمن يخضعون لزراعة نخاع العظم.',
          },
        ],
      },
      {
        id: 'egypt-data-hib-pneumonia-in-children-under-five',
        title: 'بيانات مصر: الالتهاب الرئوي الناجم عن Hib لدى الأطفال دون الخامسة',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'نُشر البحث: 2012 | جُمعت البيانات: 2009 | الموقع: مستشفى أطفال جامعة عين شمس، القاهرة. العينة: 100 طفل دون 5 سنوات أُدخلوا للمستشفى بسبب الالتهاب الرئوي. وُجد Hib في 31% من الحالات باستخدام PCR في الوقت الفعلي، مقارنة بـ 12% بزراعة الدم. كان PCR أكثر حساسية ودقة من الزراعة. المضاد الحيوي الأكثر فعالية المُبلغ عنه: Ceftriaxone. كان Hib سبباً رئيسياً للالتهاب الرئوي قبل إدخال اللقاح.',
          },
        ],
      },
      {
        id: 'egypt-epi-context',
        title: 'سياق برنامج التطعيمات الموسّع في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'تواصل وزارة الصحة والسكان (MoHP) تطوير جهود برنامج التطعيمات الموسّع (EPI) من خلال إدخال لقاح Hib كمكوّن من لقاح PENTA في البرنامج الوطني للتطعيم، بهدف تقليل المرض والوفيات الناجمة عن الالتهاب الرئوي البكتيري.',
          },
        ],
      },
    ],
  }),
};
