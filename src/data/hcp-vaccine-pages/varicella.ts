import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const VaricellaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpVaricella",
  "title": "Varicella",
  "lead": "Chickenpox (varicella) is very contagious. It typically causes an itchy, blister‑like rash plus fever and malaise. Most people who get chickenpox once develop lifelong immunity; reinfection is uncommon but can occur.",
  "emoji": "🔴",
  "imageSrc": "/varicella%20v.png",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Chickenpox (varicella) is very contagious. It typically causes an itchy, blister‑like rash plus fever and malaise. Most people who get chickenpox once develop lifelong immunity; reinfection is uncommon but can occur."
        }
      ]
    },
    {
      "id": "signs-and-symptoms",
      "title": "Signs and symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "A classic rash progresses from macules → papules → fluid‑filled vesicles that crust into scabs. Often begins on chest/back/face, then generalizes. Up to ~500 vesicles may occur; most lesions crust within ~1 week. Breakthrough varicella after vaccination is usually milder."
        }
      ]
    },
    {
      "id": "who-is-at-risk",
      "title": "Who is at risk?",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Anyone unvaccinated and without prior disease. Severe disease/complications are more likely in pregnant people, infants, adolescents, adults, and the immunocompromised."
        }
      ]
    },
    {
      "id": "how-it-spreads",
      "title": "How it spreads",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Varicella‑zoster virus (VZV) spreads readily by respiratory droplets/aerosols and direct contact with lesions. Up to 90% of susceptible close contacts become infected. A person is contagious from 1–2 days before rash until all lesions have crusted. Vaccinated cases without crusting are contagious until no new lesions for 24 hours."
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
          "text": "The two‑dose varicella vaccine is the best protection. All children, adolescents, and adults without evidence of immunity should receive 2 doses. CDC strongly discourages \"chickenpox parties\"; disease can be severe or fatal, and severity is unpredictable."
        }
      ]
    },
    {
      "id": "varicella-in-egypt",
      "title": "Varicella in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Egypt has high seroprevalence (immunity from prior infection) despite the absence of a routine national program. In tropical climates, acquisition can occur later in childhood, increasing adult susceptibility compared with temperate regions."
        },
        {
          "type": "p",
          "text": "Post‑COVID studies (e.g., Mansoura Medical Journal) report higher incidence and unusual presentations: older age at infection, second attacks, more severe disease, genital pruritus/pustular lesions, and dysuria."
        }
      ]
    },
    {
      "id": "implications-and-recommendations",
      "title": "Implications and recommendations",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Consider routine varicella vaccination given rising incidence and severity.",
            "Targeted vaccination for women of reproductive age (especially primigravidas) and other susceptible adults per local sero‑epidemiology."
          ]
        }
      ]
    }
  ],
  "faqHref": "/faq/varicella",
  "docHref": "/doc/varicella",
  "references": [],
  "pdfs": [
    {
      "productName": "Varivax",
      "src": "/Varivax.pdf"
    },
    {
      "productName": "Varilirix",
      "src": "/Varilirix.pdf"
    },
    {
      "productName": "Barycela",
      "src": "/Barycela.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الجدري المائي',
    lead: 'جدري الماء (الحماق) شديد العدوى. يسبب عادةً طفحًا مثيرًا للحكة شبيهًا بالفقاعات مع حمى وإعياء. معظم من يُصاب بجدري الماء مرة واحدة يكتسبون مناعة مدى الحياة؛ إعادة العدوى نادرة لكنها ممكنة.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'جدري الماء (الحماق) شديد العدوى. يسبب عادةً طفحًا مثيرًا للحكة شبيهًا بالفقاعات مع حمى وإعياء. معظم من يُصاب بجدري الماء مرة واحدة يكتسبون مناعة مدى الحياة؛ إعادة العدوى نادرة لكنها ممكنة.',
          },
        ],
      },
      {
        id: 'signs-and-symptoms',
        title: 'العلامات والأعراض',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'الطفح الكلاسيكي يتقدم من بقع → نتوءات → فقاعات مملوءة بالسائل تتقشر إلى قشور. يبدأ غالبًا على الصدر/الظهر/الوجه ثم يعمم. قد تصل الفقاعات إلى نحو 500؛ تتقشر معظم الآفات خلال نحو أسبوع. جدري الماء الاختراقي بعد التطعيم عادةً أخف.',
          },
        ],
      },
      {
        id: 'who-is-at-risk',
        title: 'من المعرّض للخطر؟',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'أي شخص غير مطعّم ودون مرض سابق. المرض الشديد/المضاعفات أكثر احتمالًا لدى الحوامل والرضع والمراهقين والبالغين ومنعكسي المناعة.',
          },
        ],
      },
      {
        id: 'how-it-spreads',
        title: 'كيف ينتشر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'ينتشر فيروس الجدري المائي (VZV) بسهولة عبر القطرات التنفسية/الرذاذ والاتصال المباشر بالآفات. يُصاب حتى 90% من المخالطين الوثيقين غير المناعيين. الشخص معدٍ من 1–2 يوم قبل الطفح حتى تقشر كل الآفات. الحالات المطعّمة دون تقشر معدية حتى لا تظهر آفات جديدة لمدة 24 ساعة.',
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
            text: 'لقاح الجدري المائي بجرعتين هو أفضل حماية. يجب أن يتلقى جميع الأطفال والمراهقين والبالغين دون دليل مناعة جرعتين. CDC يحذّر بشدة من «حفلات جدري الماء»؛ المرض قد يكون شديدًا أو مميتًا، والشدة غير متوقعة.',
          },
        ],
      },
      {
        id: 'varicella-in-egypt',
        title: 'الجدري المائي في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لدى مصر انتشار مصلي مرتفع (مناعة من عدوى سابقة) رغم غياب برنامج وطني روتيني. في المناخات الاستوائية قد تحدث العدوى في سن طفولة متأخر، ما يزيد قابلية البالغين مقارنة بالمناطق المعتدلة.',
          },
          {
            type: 'p',
            text: 'دراسات ما بعد كوفيد (مثل مجلة المنصورة الطبية) تُبلغ عن حدوث أعلى وعروض غير اعتيادية: عمر أكبر عند العدوى، نوبات ثانية، مرض أشد، حكة/بثور تناسلية، وعسر بول.',
          },
        ],
      },
      {
        id: 'implications-and-recommendations',
        title: 'الآثار والتوصيات',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'النظر في تطعيم الجدري المائي الروتيني نظرًا لارتفاع الحدوث والشدة.',
              'تطعيم موجّه للنساء في سن الإنجاب (خصوصًا البكر) والبالغين المعرّضين الآخرين وفق السيرووبائيات المحلية.',
            ],
          },
        ],
      },
    ],
  }),
};
