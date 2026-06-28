import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const MmrPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpMmr",
  "title": "MMR",
  "lead": "The MMR vaccine is a combination vaccine that immunizes against three viral diseases: Measles: Highly contagious; causes fever, cough, rash; complications include pneumonia, encephalitis, and death. Mumps: Classically pa",
  "emoji": "📊",
  "imageSrc": "/mmr%20copy.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The MMR vaccine is a combination vaccine that immunizes against three viral diseases: Measles: Highly contagious; causes fever, cough, rash; complications include pneumonia, encephalitis, and death. Mumps: Classically parotitis; can lead to meningitis, hearing loss, and orchitis/oophoritis. Rubella (German measles): Mild in children but dangerous in pregnancy (congenital rubella syndrome)."
        }
      ]
    },
    {
      "id": "effectiveness-of-the-mmr-vaccine",
      "title": "Effectiveness of the MMR Vaccine",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Over 95% develop immunity to measles and rubella after the first dose.",
            "The second dose increases immunity and covers non‑responders to dose one.",
            "Widespread vaccination has drastically reduced incidence and outbreaks."
          ]
        }
      ]
    },
    {
      "id": "inclusion-of-mmr-vaccine-in-egypt-s-national-immunizatio",
      "title": "Inclusion of MMR Vaccine in Egypt's National Immunization Schedule",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt introduced MMR into the Expanded Program on Immunization (EPI) in 2000. The vaccine is provided free of charge in public facilities with robust cold‑chain and monitoring. High coverage has been key to control and elimination."
        },
        {
          "type": "ul",
          "items": [
            "First dose: typically at 12 months of age.",
            "Second dose: before school entry (around 18 months – 6 years)."
          ]
        }
      ]
    },
    {
      "id": "who-confirmation-of-disease-elimination-and-internationa",
      "title": "WHO Confirmation of Disease Elimination and International Certification",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "In 2025, WHO confirmed Egypt remains free of endemic measles and rubella transmission, reaffirming elimination status after review by the WHO Regional Verification Commission. This reflects sustained high coverage, strong surveillance, and laboratory confirmation."
        }
      ]
    },
    {
      "id": "role-of-the-ministry-of-health-and-key-official-statemen",
      "title": "Role of the Ministry of Health and Key Official Statements",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Deputy PM and Minister of Health Khaled Abdel Ghaffar highlighted the role of vaccination, surveillance, and awareness in achieving elimination, aligning with Egypt's Vision 2030 and the UN SDGs. WHO experts praised Egypt's rapid response and strong programme; the Commission unanimously endorsed Egypt's measles/rubella‑free status following field evaluations across governorates. Amr Qandil, Deputy Health Minister, noted the evaluations confirmed the strength of national systems in maintaining elimination through strict preventive measures. Since 1984, the expanded immunisation programme has substantially reduced child mortality and eradicated diseases such as polio, malaria, and hepatitis B among children under five."
        }
      ]
    }
  ],
  "faqHref": "/faq/mmr",
  "docHref": "/doc/mmr",
  "references": [
    {
      "href": "https://sis.gov.eg/Story/207233/WHO-confirms-Egypt-free-of-measles%2C-rubella-for-second-year?lang=en-us#:~:text=WHO%20experts%20praised%20Egypt%27s%20immunisation,measles%20and%20rubella%2Dfree%20status.",
      "label": "SIS – WHO confirms Egypt free of measles/rubella"
    },
    {
      "href": "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccines-quality/measles-mumps-and-rubella-(mmr)",
      "label": "WHO – MMR"
    },
    {
      "href": "https://www.immunize.org/ask-experts/topic/mmr/",
      "label": "Immunize.org – MMR"
    }
  ],
  "pdfs": [
    {
      "productName": "Priorix",
      "src": "/Priorix.pdf"
    },
    {
      "productName": "MMR (SII)",
      "src": "/mmr%20sii.pdf"
    },
    {
      "productName": "MMR (Merck)",
      "src": "/mmr%20merk.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'MMR',
    lead: 'لقاح MMR هو لقاح مركّب يوفر مناعة ضد ثلاثة أمراض فيروسية: الحصبة: شديدة العدوى؛ تسبب حمى وسعال وطفح جلدي؛ وقد تؤدي إلى مضاعفات مثل الالتهاب الرئوي والتهاب الدماغ والوفاة. النكاف: يُعرَف كلاسيكياً بالتهاب الغدة النكافية؛ وقد يؤدي إلى التهاب السحايا وفقدان السمع والتهاب الخصية/المبيض. الحصبة الألمانية (الحصبة النمشية): خفيفة عند الأطفال لكنها خطيرة في الحمل (متلازمة الحصبة الألمانية الخلقية).',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لقاح MMR هو لقاح مركّب يوفر مناعة ضد ثلاثة أمراض فيروسية: الحصبة: شديدة العدوى؛ تسبب حمى وسعال وطفح جلدي؛ وقد تؤدي إلى مضاعفات مثل الالتهاب الرئوي والتهاب الدماغ والوفاة. النكاف: يُعرَف كلاسيكياً بالتهاب الغدة النكافية؛ وقد يؤدي إلى التهاب السحايا وفقدان السمع والتهاب الخصية/المبيض. الحصبة الألمانية (الحصبة النمشية): خفيفة عند الأطفال لكنها خطيرة في الحمل (متلازمة الحصبة الألمانية الخلقية).',
          },
        ],
      },
      {
        id: 'effectiveness-of-the-mmr-vaccine',
        title: 'فعالية لقاح MMR',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'يتطور المناعة ضد الحصبة والحصبة الألمانية لدى أكثر من 95% بعد الجرعة الأولى.',
              'تعزز الجرعة الثانية المناعة وتغطي غير المستجيبين للجرعة الأولى.',
              'أدى التطعيم الواسع إلى انخفاض حاد في معدلات الإصابة وتفشي المرض.',
            ],
          },
        ],
      },
      {
        id: 'inclusion-of-mmr-vaccine-in-egypt-s-national-immunizatio',
        title: 'إدراج لقاح MMR في جدول التطعيمات الوطني في مصر',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'أدرجت مصر لقاح MMR في البرنامج الموسّع للتطعيمات (EPI) عام 2000. يُقدَّم اللقاح مجاناً في المنشآت العامة مع سلسلة تبريد قوية ومراقبة فعّالة. كان الالتزام العالي بالتغطية عاملاً أساسياً في السيطرة على المرض والقضاء عليه.',
          },
          {
            type: 'ul',
            items: [
              'الجرعة الأولى: عادة عند عمر 12 شهراً.',
              'الجرعة الثانية: قبل دخول المدرسة (حوالي 18 شهراً – 6 سنوات).',
            ],
          },
        ],
      },
      {
        id: 'who-confirmation-of-disease-elimination-and-internationa',
        title: 'تأكيد منظمة الصحة العالمية للقضاء على المرض والاعتماد الدولي',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'في عام 2025، أكدت منظمة الصحة العالمية (WHO) أن مصر لا تزال خالية من انتقال الحصبة والحصبة الألمانية المستوطن، مما يعيد تأكيد حالة القضاء على المرض بعد مراجعة لجنة التحقق الإقليمية التابعة للمنظمة. ويعكس ذلك تغطية عالية مستدامة ومراقبة قوية وتأكيداً مخبرياً.',
          },
        ],
      },
      {
        id: 'role-of-the-ministry-of-health-and-key-official-statemen',
        title: 'دور وزارة الصحة والتصريحات الرسمية الرئيسية',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'أبرز نائب رئيس مجلس الوزراء ووزير الصحة خالد عبد الغفار دور التطعيم والمراقبة والتوعية في تحقيق القضاء على المرض، بما يتماشى مع رؤية مصر 2030 وأهداف التنمية المستدامة للأمم المتحدة. أشاد خبراء منظمة الصحة العالمية بالاستجابة السريعة لمصر وقوة برنامجها؛ ووافقت اللجنة بالإجماع على حالة مصر الخالية من الحصبة والحصبة الألمانية بعد تقييمات ميدانية في المحافظات. وأشار عمرو قنديل، نائب وزير الصحة، إلى أن التقييمات أكدت قوة الأنظمة الوطنية في الحفاظ على القضاء على المرض من خلال إجراءات وقائية صارمة. ومنذ عام 1984، خفّض البرنامج الموسّع للتطعيمات بشكل كبير وفيات الأطفال وأدى إلى القضاء على أمراض مثل شلل الأطفال والملاريا والتهاب الكبد B بين الأطفال دون الخامسة.',
          },
        ],
      },
    ],
  }),
};
