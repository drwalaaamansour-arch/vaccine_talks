import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const MeningococcalPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpMeningococcal",
  "title": "Meningococcal",
  "lead": "Neisseria meningitidis is a Gram-negative diplococcus recognized for its ability to colonize the mucosal surfaces of the nasopharynx. Transmission occurs primarily via direct contact with large-droplet respiratory tract ",
  "emoji": "🧫",
  "imageSrc": "/men.jpeg",
  "sections": [
    {
      "id": "overview-and-clinical-presentation",
      "title": "Overview and Clinical Presentation",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Neisseria meningitidis is a Gram-negative diplococcus recognized for its ability to colonize the mucosal surfaces of the nasopharynx. Transmission occurs primarily via direct contact with large-droplet respiratory tract secretions, either from patients or asymptomatic carriers. While many individuals may carry the bacteria without consequences, in certain cases, it invades the bloodstream or central nervous system, leading to severe, frequently life-threatening disease. Clinically, meningococcal disease most commonly manifests as: Meningitis (inflammation of the membranes covering the brain and spinal cord, accounting for about 50% of cases), Bacteremia (presence of bacteria in the bloodstream, seen in approximately 30% of cases), and Bacteremic pneumonia (infection of the lungs with concurrent blood involvement, representing about 15% of cases). The disease can progress rapidly, often within hours, and may initially be mistaken for less severe illnesses. Symptoms of meningitis include sudden onset of fever, headache, stiff neck, nausea, vomiting, photophobia, and altered mental status. Bacteremia can present with fever and signs of septic shock, including hypotension and multi-organ dysfunction."
        }
      ]
    },
    {
      "id": "classification-serogroups-and-their-global-relevance",
      "title": "Classification: Serogroups and Their Global Relevance",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "N. meningitidis is classified into twelve serogroups based on the polysaccharide capsule. However, the vast majority of invasive disease—such as meningitis and sepsis—is attributed to serogroups A, B, C, W, X, and Y. The prevalence and relative importance of each serogroup fluctuate according to geographic region, age group, and time."
        },
        {
          "type": "ul",
          "items": [
            "Serogroup A: Historically responsible for devastating outbreaks, especially in the \"meningitis belt\" of sub-Saharan Africa. Rare in the United States due to successful vaccination campaigns.",
            "Serogroup B: The leading cause among infants and young children in several high-income countries, including the United States. Between 2011 and 2020, serogroup B accounted for about 60% of cases among U.S. children under 5.",
            "Serogroups C, W, Y: Most common among adolescents and older age groups in the United States; responsible for nearly two-thirds of cases in people aged 11 years and older (2011–2020).",
            "Other serogroups: X and D are less common, though may be regionally significant."
          ]
        }
      ]
    },
    {
      "id": "epidemiology-surveillance-and-vaccination-strategies-in-",
      "title": "Epidemiology, Surveillance, and Vaccination Strategies in Egypt",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Meningococcal meningitis has long been endemic in Egypt. Large outbreaks occurred in the 1970s and late 1980s, prompting the Egyptian Ministry of Health and Population (MOHP) to implement a national, school-based vaccination program in 1992 utilizing MenAC polysaccharide vaccines."
        },
        {
          "type": "p",
          "text": "Surveillance efforts, initiated in 1998, have provided insight into trends, serogroup prevalence, and outcomes. Key findings include: Incidence in 2017: Estimated at 13.68 cases per 100,000 population; death rate 0.08 per 100,000. Most common pathogen: N. meningitidis led confirmed bacterial meningitis (28.9% of cases, 1997–2006), followed by S. pneumoniae and H. influenzae. CFR: Ranged from 13.4% (Mobarak) to 23% (Youssef in children under 6). Age distribution: Highest burden among young children; average age in one study was 1.5 years. Seasonality: Peaks in colder seasons, especially late autumn and winter. Decline in N. meningitidis: Share of bacterial meningitis due to N. meningitidis fell from up to 72.5% (1988–1995) to 18.9%–38.2% (1997–2006)."
        }
      ]
    },
    {
      "id": "serogroup-distribution-and-evolution",
      "title": "Serogroup Distribution and Evolution",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Early reports found MenA responsible for 95% of cases; after MenAC vaccine introduction, MenB (51–54.5%) and MenA (31.8–35%) became dominant, with smaller contributions from MenW (4–4.5%), MenY (2–2.3%), and MenD (2%). This shift mirrors the impact of MenAC vaccination."
        },
        {
          "type": "p",
          "text": "Data from isolates (1998–2004): 51% MenB, 35% MenA, 4% MenW, 2% MenY, 2% MenD, 8% untypeable. Several sequence types and clonal complexes were identified; ST2174 and ST7 were most prevalent. The ST2174 clone may be endemic to Egypt, supporting ongoing molecular monitoring."
        }
      ]
    },
    {
      "id": "antibiotic-resistance",
      "title": "Antibiotic Resistance",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Resistance to sulphonamides was first documented in the 1960s. By the early 2000s, high resistance to trimethoprim/sulfamethoxazole (~86%) and intermediate resistance to ampicillin and penicillin were reported in 40–71% of isolates, varying by serogroup."
        }
      ]
    },
    {
      "id": "impact-of-vaccination-and-policy",
      "title": "Impact of Vaccination and Policy",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "School-based MenAC polysaccharide vaccination since 1992 significantly reduced outbreak frequency and altered serogroup patterns. Incidence in 2004 fell to 0.1 per 100,000. Egypt also recommends MenACWY polysaccharide vaccination for travelers to high-risk areas."
        }
      ]
    }
  ],
  "faqHref": "/faq/meningococcal-acwy",
  "docHref": "/doc/meningococcal-acwy",
  "references": [
    {
      "href": "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/meningococcal-meningitis",
      "label": "WHO – Meningococcal meningitis"
    },
    {
      "href": "https://www.cdc.gov/meningococcal/index.html",
      "label": "CDC – Meningococcal Disease"
    },
    {
      "href": "https://www.ijidonline.com/article/S1201-9712(20)32473-5/pdf",
      "label": "IJID 2020 – Egypt epidemiology"
    }
  ],
  "pdfs": [
    {
      "productName": "Bexsero – Product Information",
      "src": "/Bexsero.pdf"
    },
    {
      "productName": "Menactra – Product Information",
      "src": "/Menactra.pdf"
    },
    {
      "productName": "Nimenrix – Product Information",
      "src": "/nimenrix.pdf"
    },
    {
      "productName": "MenQuadfi – Product Information",
      "src": "/Menquadfi.pdf"
    },
    {
      "productName": "AC – Product Information",
      "src": "/Ac.pdf"
    },
    {
      "productName": "MenQuadfi FDA Insert",
      "src": "/menquadfi%20FDA%20insert.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'المكورات السحائية',
    lead: 'Neisseria meningitidis diplococcus سالب الغرام معروف بقدرته على استعمار الأسطح المخاطية للبلعوم الأنفي. ينتقل أساساً عبر التلامس المباشر مع إفرازات الجهاز التنفسي ذات القطرات الكبيرة، سواء من المرضى أو الحاملين بدون أعراض.',
    sections: [
      {
        id: 'overview-and-clinical-presentation',
        title: 'نظرة عامة والعرض السريري',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'Neisseria meningitidis diplococcus سالب الغرام معروف بقدرته على استعمار الأسطح المخاطية للبلعوم الأنفي. ينتقل أساساً عبر التلامس المباشر مع إفرازات الجهاز التنفسي ذات القطرات الكبيرة، سواء من المرضى أو الحاملين بدون أعراض. بينما قد يحمل كثيرون البكتيريا دون عواقب، في بعض الحالات تغزو مجرى الدم أو الجهاز العصبي المركزي، ما يؤدي إلى مرض شديد وغالباً مهدد للحياة. سريرياً، يظهر مرض المكورات السحائية غالباً على شكل: التهاب السحايا (التهاب الأغشية المحيطة بالدماغ والنخاع الشوكي، ~50% من الحالات)، bacteremia (وجود البكتيريا في الدم، ~30% من الحالات)، والالتهاب الرئوي مع bacteremia (عدوى الرئة مع إصابة الدم، ~15% من الحالات). قد يتقدم المرض بسرعة، غالباً خلال ساعات، وقد يُخطأ في البداية لأمراض أقل شدة. أعراض التهاب السحايا تشمل بدء مفاجئ للحمى والصداع وتيبس الرقبة والغثيان والقيء وفرط حساسية الضوء وتغير الحالة الذهنية. bacteremia قد تظهر بالحمى وعلامات septic shock، بما فيها انخفاض ضغط الدم وخلل وظائف متعدد الأعضاء.',
          },
        ],
      },
      {
        id: 'classification-serogroups-and-their-global-relevance',
        title: 'التصنيف: المجموعات المصلية وأهميتها العالمية',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'يُصنَّف N. meningitidis إلى اثنتي عشرة مجموعة مصلية بناءً على الكبسولة البولي سكاريدية. لكن الغالبية العظمى من الأمراض الغازية — مثل التهاب السحايا والتسمم — تُعزى للمجموعات A وB وC وW وX وY. تتقلب شيوع وأهمية كل مجموعة حسب المنطقة الجغرافية والفئة العمرية والزمن.',
          },
          {
            type: 'ul',
            items: [
              'المجموعة A: مسؤولة تاريخياً عن تفشيات مدمرة، خاصة في «حزام التهاب السحايا» جنوب الصحراء الكبرى في أفريقيا. نادرة في الولايات المتحدة بفضل حملات التطعيم الناجحة.',
              'المجموعة B: السبب الرئيسي بين الرضع والأطفال الصغار في عدة دول ذات دخل مرتفع، بما فيها الولايات المتحدة. بين 2011 و2020، شكّلت المجموعة B نحو 60% من الحالات بين الأطفال الأمريكيين دون 5 سنوات.',
              'المجموعات C وW وY: الأكثر شيوعاً بين المراهقين والفئات العمرية الأكبر في الولايات المتحدة؛ مسؤولة عن نحو ثلثي الحالات لدى من هم 11 سنة فأكثر (2011–2020).',
              'مجموعات أخرى: X وD أقل شيوعاً، لكنها قد تكون ذات أهمية إقليمية.',
            ],
          },
        ],
      },
      {
        id: 'epidemiology-surveillance-and-vaccination-strategies-in-',
        title: 'الوبائيات والمراقبة واستراتيجيات التطعيم في مصر',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'التهاب السحايا بالمكورات السحائية مستقر (endemic) في مصر منذ زمن طويل. حدثت تفشيات كبيرة في السبعينيات أواخر الثمانينيات، ما دفع وزارة الصحة والسكان (MOHP) إلى تنفيذ برنامج تطعيم وطني في المدارس عام 1992 باستخدام لقاحات MenAC polysaccharide.',
          },
          {
            type: 'p',
            text: 'جهود المراقبة، التي بدأت عام 1998، قدمت رؤى حول الاتجاهات وانتشار المجموعات المصلية والنتائج. النتائج الرئيسية تشمل: معدل الإصابة 2017: ~13.68 حالة لكل 100,000 نسمة؛ معدل الوفاة 0.08 لكل 100,000. الممرض الأكثر شيوعاً: N. meningitidis كان الأبرز في التهاب السحايا البكتيري المؤكد (28.9% من الحالات، 1997–2006)، يليه S. pneumoniae وH. influenzae. معدل الوفاة (CFR): تراوح من 13.4% (مبارك) إلى 23% (يوسف لدى الأطفال دون 6 سنوات). التوزيع العمري: أعلى عبء بين الأطفال الصغار؛ متوسط العمر في دراسة كان 1.5 سنة. الموسمية: ذروة في المواسم الباردة، خاصة أواخر الخريف والشتاء. انخفاض N. meningitidis: انخفضت حصة التهاب السحايا البكتيري الناجمة عن N. meningitidis من حتى 72.5% (1988–1995) إلى 18.9%–38.2% (1997–2006).',
          },
        ],
      },
      {
        id: 'serogroup-distribution-and-evolution',
        title: 'توزيع المجموعات المصلية وتطورها',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'التقارير المبكرة وجدت MenA مسؤولة عن 95% من الحالات؛ بعد إدخال لقاح MenAC، أصبحت MenB (51–54.5%) وMenA (31.8–35%) سائدة، مع مساهمات أصغر من MenW (4–4.5%) وMenY (2–2.3%) وMenD (2%). يعكس هذا التحول أثر تطعيم MenAC.',
          },
          {
            type: 'p',
            text: 'بيانات من العزلات (1998–2004): 51% MenB، 35% MenA، 4% MenW، 2% MenY، 2% MenD، 8% غير قابلة للتصنيف. حُددت عدة أنواع تسلسلية ومجموعات clonal؛ ST2174 وST7 كانتا الأكثر شيوعاً. قد يكون clone ST2174 endemic محلياً في مصر، ما يدعم المراقبة الجزيئية المستمرة.',
          },
        ],
      },
      {
        id: 'antibiotic-resistance',
        title: 'مقاومة المضادات الحيوية',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'وُثقت مقاومة السلفوناميدات لأول مرة في الستينيات. أوائل الألفية الثانية، أُبلغ عن مقاومة عالية لـ trimethoprim/sulfamethoxazole (~86%) ومقاومة متوسطة لـ ampicillin وpenicillin في 40–71% من العزلات، مع تفاوت حسب المجموعة المصلية.',
          },
        ],
      },
      {
        id: 'impact-of-vaccination-and-policy',
        title: 'أثر التطعيم والسياسة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'التطعيم المدرسي بـ MenAC polysaccharide منذ 1992 قلل بشكل كبير تكرار التفشيات وغيّر أنماط المجموعات المصلية. انخفضت الإصابة عام 2004 إلى 0.1 لكل 100,000. توصي مصر أيضاً بتطعيم MenACWY polysaccharide للمسافرين إلى مناطق عالية الخطورة.',
          },
        ],
      },
    ],
  }),
};
