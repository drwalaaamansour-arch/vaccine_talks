import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const RotaPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpRota",
  "title": "Rota",
  "lead": "Rotavirus causes gastroenteritis with common symptoms like watery diarrhea and vomiting, especially in children. There is no specific medicine to treat rotavirus infection; clinicians treat symptoms. Rotavirus vaccine is",
  "emoji": "🌀",
  "imageSrc": "/rota%20v.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Rotavirus causes gastroenteritis with common symptoms like watery diarrhea and vomiting, especially in children. There is no specific medicine to treat rotavirus infection; clinicians treat symptoms. Rotavirus vaccine is the best protection for children."
        }
      ]
    },
    {
      "id": "rotavirus-structure",
      "title": "Rotavirus structure",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Triple‑layered, non‑enveloped, icosahedral virion with 11 dsRNA segments. Inner core (VP1 RNA‑dependent RNA polymerase, VP3 capping enzyme, enclosed by VP2), intermediate capsid (VP6 trimers), and outer layer (VP7 + spike protein VP4). VP4 is cleaved to VP8* and VP5* to mediate attachment/entry."
        },
        {
          "type": "ul",
          "items": [
            "Inner core: VP1, VP3 within VP2 around the 11 dsRNA segments.",
            "Intermediate capsid: 260 trimers of VP6.",
            "Outer coat: VP7 glycoprotein and VP4 spikes (cleaved to VP8*/VP5*)."
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
          "text": "Fecal–oral route."
        }
      ]
    },
    {
      "id": "environmental-stability",
      "title": "Environmental stability",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Persists for hours on hands and days on dry surfaces (toys, clothes, furniture), facilitating outbreaks in childcare settings."
        }
      ]
    },
    {
      "id": "impact-by-age",
      "title": "Impact by age",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Highest burden &lt;5 years; severe diarrhea/vomiting → dehydration, hospitalization, and risk of death without prompt care."
        },
        {
          "type": "p",
          "text": "Usually mild or asymptomatic due to prior immunity; institutional outbreaks can affect elderly with more severe symptoms."
        },
        {
          "type": "p",
          "text": "Adults may shed virus without symptoms, contributing to transmission."
        }
      ]
    },
    {
      "id": "vaccines-and-prevention",
      "title": "Vaccines and prevention",
      "icon": "📋",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "RotaTeq (2006): five reassortant human–bovine strains; 3 doses.",
            "Rotarix (2008): attenuated human strain; 2 doses."
          ]
        },
        {
          "type": "p",
          "text": "Both are oral vaccines. Widespread use reduces hospitalizations and deaths; herd effects protect unvaccinated children."
        }
      ]
    },
    {
      "id": "global-impact",
      "title": "Global impact",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Before immunization, rotavirus caused &gt;500,000 deaths/year (mostly in LMICs). Similar infection rates in rich/poor countries showed hygiene alone is insufficient; vaccination is essential."
        }
      ]
    },
    {
      "id": "rotavirus-in-egypt",
      "title": "Rotavirus in Egypt",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Benha J Appl Sci (2018): dominant strains G1P4, G1P8, G3P8 across seasons. Zoonoses Review (2023): in children, G1 most frequent, then G2, G3, G4, G8, G9, G12; mixed infections noted. Egyptian Pharm J (Apr 2024): rotavirus remains a leading cause of pediatric diarrhea; diverse genotypes detected by RT‑PCR; surveillance needed to guide vaccination strategies."
        }
      ]
    }
  ],
  "faqHref": "/faq/rotavirus",
  "docHref": "/doc/rotavirus",
  "references": [
    {
      "href": "https://www.cdc.gov/rotavirus/vaccines/index.html",
      "label": "CDC – Rotavirus vaccines"
    },
    {
      "href": "https://www.who.int/publications/i/item/WHO-WER9628",
      "label": "WHO WER 96(28)"
    },
    {
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7224034/",
      "label": "Egypt genotype studies"
    },
    {
      "href": "https://virologyj.biomedcentral.com/articles/10.1186/s12985-024-02495-8",
      "label": "Virology Journal 2024"
    }
  ],
  "pdfs": [
    {
      "productName": "Rotarix",
      "src": "/Rotarix%20.pdf"
    },
    {
      "productName": "RotaTeq",
      "src": "/Rotateq.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'الروتا',
    lead: 'فيروس الروتا يسبب التهاب المعدة والأمعاء بأعراض شائعة مثل الإسهال المائي والقيء، خاصة لدى الأطفال. لا يوجد دواء محدد لعلاج عدوى الروتا؛ يعالج الأطباء الأعراض. لقاح الروتا هو أفضل حماية للأطفال.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'فيروس الروتا يسبب التهاب المعدة والأمعاء بأعراض شائعة مثل الإسهال المائي والقيء، خاصة لدى الأطفال. لا يوجد دواء محدد لعلاج عدوى الروتا؛ يعالج الأطباء الأعراض. لقاح الروتا هو أفضل حماية للأطفال.',
          },
        ],
      },
      {
        id: 'rotavirus-structure',
        title: 'بنية فيروس الروتا',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'جسيم ثلاثي الطبقات، غير مغلف، عشرين الوجوه، بـ 11 قطعة من dsRNA. النواة الداخلية (VP1 بوليميراز RNA المعتمد على RNA، VP3 إنزيم التغليف، محاط بـ VP2)، الكبسولة الوسطى (ثلاثيات VP6)، والطبقة الخارجية (VP7 + بروتين سن VP4). يُشطر VP4 إلى VP8* وVP5* لوساطة الالتصاق/الدخول.',
          },
          {
            type: 'ul',
            items: [
              'النواة الداخلية: VP1 وVP3 داخل VP2 حول 11 قطعة dsRNA.',
              'الكبسولة الوسطى: 260 ثلاثية من VP6.',
              'الغلاف الخارجي: بروتين VP7 السكري وبروزات VP4 (مشطورة إلى VP8*/VP5*).',
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
            text: 'المسار البرازي–الفموي.',
          },
        ],
      },
      {
        id: 'environmental-stability',
        title: 'الاستقرار البيئي',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يبقى لساعات على اليدين ولأيام على الأسطح الجافة (ألعاب، ملابس، أثاث)، ما يسهّل التفشي في بيئات رعاية الأطفال.',
          },
        ],
      },
      {
        id: 'impact-by-age',
        title: 'الأثر حسب العمر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'أعلى عبء &lt;5 سنوات؛ إسهال/قيء شديد → جفاف وإدخال مستشفى وخطر وفاة دون رعاية سريعة.',
          },
          {
            type: 'p',
            text: 'عادة خفيف أو بلا أعراض بسبب المناعة السابقة؛ يمكن أن تؤثر تفشيات مؤسسية على كبار السن بأعراض أشد.',
          },
          {
            type: 'p',
            text: 'قد يُفرز البالغون الفيروس بلا أعراض، ما يساهم في الانتقال.',
          },
        ],
      },
      {
        id: 'vaccines-and-prevention',
        title: 'اللقاحات والوقاية',
        icon: '📋',
        blocks: [
          {
            type: 'ul',
            items: [
              'RotaTeq (2006): خمس سلالات معاد ترتيبها بشرية–بقرية؛ 3 جرعات.',
              'Rotarix (2008): سلالة بشرية مُوهَنة؛ جرعتان.',
            ],
          },
          {
            type: 'p',
            text: 'كلاهما لقاح فموي. يقلل الاستخدام الواسع من الإدخالات للمستشفى والوفيات؛ وتؤثر حماية القطيع على الأطفال غير الملقحين.',
          },
        ],
      },
      {
        id: 'global-impact',
        title: 'الأثر العالمي',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'قبل التطعيم، كان الروتا يسبب &gt;500,000 وفاة/سنة (معظمها في البلدان منخفضة ومتوسطة الدخل). معدلات العدوى المتشابهة في البلدان الغنية/الفقيرة أظهرت أن النظافة وحدها غير كافية؛ التطعيم ضروري.',
          },
        ],
      },
      {
        id: 'rotavirus-in-egypt',
        title: 'فيروس الروتا في مصر',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'Benha J Appl Sci (2018): السلالات السائدة G1P4 وG1P8 وG3P8 عبر المواسم. Zoonoses Review (2023): لدى الأطفال، G1 الأكثر تكراراً، ثم G2 وG3 وG4 وG8 وG9 وG12؛ سُجّلت عدوى مختلطة. Egyptian Pharm J (أبريل 2024): يظل الروتا سبباً رئيسياً للإسهال عند الأطفال؛ رُصدت أنماط جينية متنوعة بـ RT‑PCR؛ المراقبة ضرورية لتوجيه استراتيجيات التطعيم.',
          },
        ],
      },
    ],
  }),
};
