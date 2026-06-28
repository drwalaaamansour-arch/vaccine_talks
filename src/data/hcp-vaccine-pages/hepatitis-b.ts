import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const HepatitisBPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHepatitisB",
  "title": "Hepatitis B",
  "lead": "Hepatitis is an inflammation of the liver caused by a variety of infectious viruses and non-infectious agents, leading to a range of health problems including severe liver damage and cancer, some of which can be fatal. T",
  "emoji": "🟠",
  "imageSrc": "/hb.jpeg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Hepatitis is an inflammation of the liver caused by a variety of infectious viruses and non-infectious agents, leading to a range of health problems including severe liver damage and cancer, some of which can be fatal. There are 5 main strains of the hepatitis virus (A, B, C, D and E). While all can cause liver disease, they differ in transmission, severity, geography and prevention. Types B and C cause chronic disease in hundreds of millions worldwide and are the most common causes of cirrhosis, liver cancer, and viral hepatitis-related deaths—estimated 1.3 million deaths per year. Around 304 million people live with hepatitis B or C, and for most, testing and treatment remain out of reach."
        }
      ]
    },
    {
      "id": "signs-and-symptoms",
      "title": "Signs and Symptoms",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "About 30%–50% of people aged ≥5 years with acute hepatitis B have initial signs or symptoms. Children &lt;5 years and newly infected immunosuppressed adults rarely show symptoms. When present, symptoms can include nausea, anorexia, fatigue, myalgias/arthralgias/abdominal pain, fever, diarrhea or vomiting, headache, dark urine, clay-colored stools, and jaundice. Ill patients may require hospitalization. Those with chronic HBV may be asymptomatic or range from chronic hepatitis to cirrhosis or hepatocellular carcinoma. If symptoms occur, onset is typically ~90 days after exposure (range 60–150 days)."
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
          "text": "Persons with chronic HBV infection (persistent HBsAg ≥6 months) are the main reservoir. HBV is transmitted via percutaneous, mucosal or non-intact skin exposure to infectious blood or body fluids. Blood has the highest concentration; percutaneous exposure is highly efficient. Semen and vaginal secretions are infectious; HBV can be detected in saliva, tears, and bile. Other sterile body fluids are potentially infectious. Urine, feces, vomitus, respiratory secretions and sweat are not efficient vehicles unless blood is present. Breast milk HBsAg is unlikely to transmit infection; breastfeeding is not contraindicated. HBV is environmentally stable and viable ≥7 days at room temperature; high-level tuberculocidal disinfectants inactivate HBV."
        }
      ]
    },
    {
      "id": "serologic-tests",
      "title": "Serologic Tests",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "HBsAg: Surface antigen—marker of infectivity; indicates acute or chronic infection. Anti-HBs: Antibody to surface antigen—marker of immunity (post-infection, post-vaccination, or passive antibody). Avoid abbreviation HBsAb to prevent confusion. Anti-HBc (total): Antibody to core antigen—nonspecific marker of acute, chronic, or resolved infection; not a marker of vaccine-induced immunity; useful for prevaccination screening. IgM anti-HBc: Indicates recent (&lt;6 months) infection; marker of acute infection. HBeAg: Marker of high infectivity; correlates with high viral replication; used in chronic HBV management. Anti-HBe: May be present in infected or immune persons; in chronic infection suggests lower viral titer/infectivity. HBV-DNA: Viral load; reflects replication and infectivity; used to assess and monitor chronic HBV treatment."
        }
      ]
    },
    {
      "id": "egypt-hepatitis-b-control-status",
      "title": "Egypt: Hepatitis B Control Status",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "On June 2, 2025, Egypt became the first country in the WHO Eastern Mediterranean Region to achieve hepatitis B control status—prevalence &lt;1% among children aged ≥5 years and sustained &gt;90% coverage for birth and third doses. This success reflects decades of newborn vaccination, strengthened surveillance and infection control, robust healthcare infrastructure, public awareness, expanded laboratory capacity and training, and access to affordable treatment, with continuous WHO technical support aligning strategies to global standards."
        }
      ]
    }
  ],
  "faqHref": "/faq/hepatitis-b",
  "docHref": "/doc/hepatitis-b",
  "references": [
    {
      "href": "http://www.emro.who.int/egy/egypt-news/egypt-becomes-the-first-country-in-the-region-to-achieve-hepatitis-b-control-status.html",
      "label": "WHO EMRO News"
    },
    {
      "href": "https://www.immunize.org/ask-experts/topic/hepb/",
      "label": "Immunize.org HepB"
    },
    {
      "href": "https://www.sis.gov.eg/Story/209048/Egypt-first-in-Africa-to-control-hepatitis-B%2C-Minister-of-Health?lang=",
      "label": "Egypt State Info Service"
    },
    {
      "href": "https://www.who.int/health-topics/hepatitis#tab=tab_1",
      "label": "WHO: Hepatitis"
    }
  ],
  "pdfs": [
    {
      "productName": "Euvax – Product Information",
      "src": "/Euvax.pdf"
    },
    {
      "productName": "Hep B SII – Product Information",
      "src": "/Heb%20b%20serum.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'التهاب الكبد B',
    lead: 'التهاب الكبد هو التهاب في الكبد ينجم عن مجموعة متنوعة من الفيروسات المعدية وعوامل غير معدية، مما يؤدي إلى مشاكل صحية متعددة تشمل تلفاً كبدياً شديداً وسرطاناً، بعضها قد يكون مميتاً.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'التهاب الكبد هو التهاب في الكبد ينجم عن مجموعة متنوعة من الفيروسات المعدية وعوامل غير معدية، مما يؤدي إلى مشاكل صحية متعددة تشمل تلفاً كبدياً شديداً وسرطاناً، بعضها قد يكون مميتاً. توجد 5 سلالات رئيسية لفيروس التهاب الكبد (A و B و C و D و E). رغم أنها جميعاً قد تسبب مرضاً كبدياً، إلا أنها تختلف في طرق الانتقال والشدة والانتشار الجغرافي والوقاية. يسبب النوعان B و C مرضاً مزمناً لدى مئات الملايين حول العالم وهما من أكثر أسباب التليف الكبدي وسرطان الكبد والوفيات المرتبطة بالتهاب الكبد الفيروسي—يُقدَّر بـ 1.3 مليون وفاة سنوياً. يعيش نحو 304 مليون شخص مع التهاب الكبد B أو C، ولدى معظمهم تبقى الفحوص والعلاج بعيدة عن المتناول.',
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
            text: 'يُعاني نحو 30%–50% من الأشخاص بعمر ≥5 سنوات المصابين بالتهاب الكبد B الحاد من علامات أو أعراض أولية. نادراً ما تظهر أعراض لدى الأطفال <5 سنوات والبالغين المثبطين مناعياً حديثي الإصابة. عند ظهورها، قد تشمل الأعراض: غثياناً، فقدان شهية، إرهاقاً، آلام عضلية/مفصلية/بطنية، حمى، إسهالاً أو قيئاً، صداعاً، بولاً داكناً، برازاً فاتح اللون، ويرقاناً. قد يحتاج المرضى الشديدون إلى تنويم. قد يكون المصابون بالتهاب الكبد B المزمن بدون أعراض أو يتراوح وضعهم من التهاب كبد مزمن إلى تليف أو سرطان خلايا كبدية. عند حدوث الأعراض، يبدأ ظهورها عادةً بعد نحو 90 يوماً من التعرض (المدى 60–150 يوماً).',
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
            text: 'الأشخاص المصابون بعدوى التهاب الكبد B المزمنة (HBsAg مستمر ≥6 أشهر) هم المصدر الرئيسي. ينتقل HBV عبر التعرض الجلدي أو المخاطي أو لجلد غير سليم لدم أو سوائل جسدية معدية. الدم يحتوي على أعلى تركيز؛ والتعرض الجلدي فعال للغاية. السائل المنوي والإفرازات المهبلية معدية؛ ويمكن الكشف عن HBV في اللعاب والدموع والصفراء. سوائل الجسم المعقمة الأخرى قد تكون معدية محتملة. البول والبراز والقيء والإفرازات التنفسية والعرق ليست وسائل انتقال فعالة ما لم يكن الدم حاضراً. من غير المرجح أن ينقل HBsAg في لبن الأم العدوى؛ ولا يُمنع الرضاعة الطبيعية. HBV مستقر بيئياً ويبقى قابلاً للحياة ≥7 أيام في درجة حرارة الغرفة؛ وتعطل المطهرات ذات المستوى العالي (tuberculocidal) HBV.',
          },
        ],
      },
      {
        id: 'serologic-tests',
        title: 'الفحوص المصلية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'HBsAg: المستضد السطحي—علامة للعدوى؛ يدل على إصابة حادة أو مزمنة. Anti-HBs: الأجسام المضادة للمستضد السطحي—علامة للمناعة (بعد الإصابة، أو التطعيم، أو الأجسام المضادة السلبية). تجنب اختصار HBsAb لمنع الالتباس. Anti-HBc (الكلي): الأجسام المضادة للمستضد الأساسي—علامة غير محددة للإصابة الحادة أو المزمنة أو المحلولة؛ ليست علامة للمناعة الناتجة عن اللقاح؛ مفيدة للفحص قبل التطعيم. IgM anti-HBc: يدل على إصابة حديثة (<6 أشهر)؛ علامة للإصابة الحادة. HBeAg: علامة لعدوى عالية؛ يرتبط بتكاثر فيروسي مرتفع؛ يُستخدم في إدارة التهاب الكبد B المزمن. Anti-HBe: قد يكون موجوداً لدى المصابين أو المناعيين؛ في الإصابة المزمنة يشير إلى انخفاض العيار الفيروسي/العدوى. HBV-DNA: الحمل الفيروسي؛ يعكس التكاثر والعدوى؛ يُستخدم لتقييم ومراقبة علاج التهاب الكبد B المزمن.',
          },
        ],
      },
      {
        id: 'egypt-hepatitis-b-control-status',
        title: 'مصر: وضع السيطرة على التهاب الكبد B',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'في 2 يونيو 2025، أصبحت مصر أول دولة في إقليم WHO للشرق الأوسط المتوسط تحقق وضع السيطرة على التهاب الكبد B—بانتشار <1% بين الأطفال بعمر ≥5 سنوات وتغطية مستدامة >90% لجرعتي الولادة والثالثة. يعكس هذا النجاح عقوداً من تطعيم المواليد، وتعزيز المراقبة ومكافحة العدوى، وبنية تحتية صحية قوية، وتوعية مجتمعية، وتوسيع القدرة المخبرية والتدريب، والوصول إلى علاج ميسور، مع دعم فني مستمر من WHO لمواءمة الاستراتيجيات مع المعايير العالمية.',
          },
        ],
      },
    ],
  }),
};
