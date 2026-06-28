import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const BcgPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpBcg",
  "title": "BCG",
  "lead": "Bacille Calmette-Guérin (BCG) is a vaccine primarily used to prevent tuberculosis (TB), a disease that continues to be a major public health concern worldwide. Since its development, the BCG vaccine has played a crucial ",
  "emoji": "💉",
  "imageSrc": "/bcg.jpg",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Bacille Calmette-Guérin (BCG) is a vaccine primarily used to prevent tuberculosis (TB), a disease that continues to be a major public health concern worldwide. Since its development, the BCG vaccine has played a crucial role in reducing the incidence of severe TB forms, particularly in children. However, its use, efficacy, and policy implementation differ considerably across countries, reflecting varying epidemiological patterns and healthcare priorities."
        }
      ]
    },
    {
      "id": "general-overview",
      "title": "General Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "The BCG vaccine is derived from a live attenuated strain of Mycobacterium bovis, closely related to Mycobacterium tuberculosis, the causative agent of TB. It is administered to generate immunity, especially against severe forms of TB like TB meningitis and miliary TB in infants and children. BCG does not confer full protection against pulmonary TB in adults, and its effectiveness varies depending on geographical and individual factors. Global Usage: The BCG vaccine is part of routine immunization programs in many countries, particularly those with high TB incidence. Route of Administration: It is usually given as a single intradermal injection soon after birth. Effectiveness: BCG is most effective at preventing severe, life-threatening TB in children, but its protection against adult pulmonary TB is variable."
        }
      ]
    },
    {
      "id": "contraindications",
      "title": "Contraindications",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "BCG vaccine is a live vaccine and is therefore contraindicated in individuals with compromised immune systems, such as those with HIV infection or those preparing for organ transplantation. Pregnant women should also not receive BCG, although no direct harm to the fetus has been observed—further research is needed to ensure its safety in pregnancy."
        }
      ]
    },
    {
      "id": "bcg-vaccination-policy-and-impact-in-egypt",
      "title": "BCG Vaccination Policy and Impact in Egypt",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "h3",
          "text": "Policy implementation"
        },
        {
          "type": "p",
          "text": "Egypt, like many countries with significant TB burden, has adopted BCG vaccination as a central pillar of its TB control strategy. The World Health Organization (WHO) recommends a multifaceted approach that includes routine BCG vaccination at birth, vigilant case detection, and the administration of directly observed therapy short-course (DOTS) for TB treatment. The Egyptian Ministry of Health and Population has consistently applied the WHO control policy for more than 30 years. Vaccination Program: BCG is administered to all newborns, aligning with WHO recommendations and reflecting Egypt's ongoing efforts to reduce TB incidence, particularly severe TB in children."
        }
      ]
    },
    {
      "id": "controversies-and-challenges",
      "title": "Controversies and Challenges",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Despite its long-standing application, the BCG vaccine's limited efficacy against adult pulmonary TB has sparked debate over its continued compulsory use, especially as Egypt sees changes in TB epidemiology. Some suggest revisiting its mandate in regions with declining TB rates, but overall, the evidence continues to support its use as part of a comprehensive TB control policy."
        }
      ]
    },
    {
      "id": "trends-in-tb-control-in-egypt-1992-2011",
      "title": "Trends in TB Control in Egypt (1992–2011)",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "A comprehensive review of Egypt's TB control efforts over two decades provides valuable insight: Incidence Reduction: The incidence rate of all TB forms (pulmonary and extrapulmonary) decreased by 50%, from 34 to 17 cases per 100,000 people. Prevalence Reduction: Prevalence dropped by 60.6%, from 71 to 28 cases per 100,000 people. Case Detection and Treatment Success: Both rates improved over the period, although improvements plateaued in the last six years of analysis, suggesting the need for renewed public health focus."
        }
      ]
    },
    {
      "id": "assessing-immune-response-to-bcg-in-egyptian-infants",
      "title": "Assessing Immune Response to BCG in Egyptian Infants",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Recent research has examined how well the BCG vaccine induces an immune response in Egyptian children. In one study, 25 healthy infants aged 14-24 months (15 boys and 10 girls), who received BCG at birth, underwent both clinical and laboratory assessments."
        },
        {
          "type": "p",
          "text": "Study Findings: BCG Scar Formation: 76% of infants developed a visible BCG scar after vaccination. Tuberculin Skin Test: 28% showed a positive result, indicating exposure to TB antigens. Immune Response: The vaccine induced a significant increase in interferon-gamma (IFN-γ) production, a critical immune marker. After stimulation with purified protein derivative (PPD), median IFN-γ levels were 0.13 ng/ml, compared to 0.08 ng/ml at baseline (p = 0.001). Stimulation with phytohemagglutinin (PHA) yielded median IFN-γ levels of 1 ng/ml. Non-responders: 20% (5 infants) failed to show an adequate IFN-γ response to PPD, and these infants also had lower responses to PHA (z = -2.18, p = 0.03). Correlation with Tuberculin Testing: Infants with a positive tuberculin skin test had significantly higher IFN-γ responses after PPD stimulation than those with negative tests (z = -2.09, p = 0.036). Scar and Immunity: The presence or absence of a BCG scar did not correlate with immune function parameters."
        },
        {
          "type": "p",
          "text": "Conclusions from the Study: The current BCG vaccination protocol in Egypt appears to elicit a satisfactory immune response in most infants. Notably, the absence of a BCG scar does not necessarily indicate failed immunization—an important consideration for clinicians and public health officials. However, the study's small sample size underscores the need for larger, long-term studies to better evaluate the vaccine's clinical effectiveness."
        }
      ]
    },
    {
      "id": "recommendations-and-future-directions-in-egypt",
      "title": "Recommendations and Future Directions in Egypt",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "Based on the documented progress and ongoing challenges, the following key recommendations emerge: Continue the implementation of the WHO TB control policy, including universal BCG vaccination at birth in Egypt, given its role in reducing severe childhood TB. Enhance TB surveillance and reporting to identify emerging trends and inform policy adjustments, particularly as case detection and treatment success rates plateau. Conduct larger, longitudinal studies to fully assess the clinical protection afforded by BCG and the potential need for booster or alternative strategies. Educate healthcare providers and families about the significance of BCG vaccination and clarify misconceptions regarding scar formation and immunity."
        }
      ]
    }
  ],
  "references": [
    {
      "href": "https://www.cdc.gov/tb/hcp/vaccines/index.html",
      "label": "https://www.cdc.gov/tb/hcp/vaccines/index.html"
    },
    {
      "href": "https://www.researchgate.net/publication/260804408_Trend_of_application_of_World_Health_Organization_control_strategy_of_tuberculosis_in_Egypt",
      "label": "https://www.researchgate.net/publication/260804408_Trend_of_application_of_World_Health_Organization_control_strategy_of_tuberculosis_in_Egypt"
    },
    {
      "href": "https://ejpai.journals.ekb.eg/article_199575.html",
      "label": "https://ejpai.journals.ekb.eg/article_199575.html"
    }
  ],
  "pdfs": [
    {
      "productName": "BCG",
      "src": "/Bcg%20serum.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'BCG',
    lead: 'لقاح Bacille Calmette-Guérin (BCG) يُستخدم أساساً للوقاية من السل (TB)، وهو مرض لا يزال يمثل قلقاً صحياً عاماً كبيراً على مستوى العالم. منذ تطويره، لعب لقاح BCG دوراً حاسماً',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لقاح Bacille Calmette-Guérin (BCG) يُستخدم أساساً للوقاية من السل (TB)، وهو مرض لا يزال يمثل قلقاً صحياً عاماً كبيراً على مستوى العالم. منذ تطويره، لعب لقاح BCG دوراً حاسماً في خفض حدوث الأشكال الشديدة من السل، لا سيما لدى الأطفال. ومع ذلك، يختلف استخدامه وفعاليته وتطبيقه في السياسات الصحية اختلافاً كبيراً بين البلدان، مما يعكس أنماطاً وبائية متباينة وأولويات رعاية صحية مختلفة.',
          },
        ],
      },
      {
        id: 'general-overview',
        title: 'نظرة عامة شاملة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يُشتق لقاح BCG من سلالة حية مُوهَنة من Mycobacterium bovis، وهي قريبة من Mycobacterium tuberculosis، العامل المسبب للسل. يُعطى لتحفيز المناعة، خاصة ضد الأشكال الشديدة من السل مثل التهاب السحايا السلّي والسل المنتشر لدى الرضع والأطفال. لا يمنح BCG حماية كاملة ضد السل الرئوي لدى البالغين، وتختلف فعاليته بحسب العوامل الجغرافية والفردية. الاستخدام العالمي: يُعد لقاح BCG جزءاً من برامج التطعيم الروتينية في كثير من البلدان، لا سيما ذات معدلات السل المرتفعة. طريقة الإعطاء: يُعطى عادةً كحقنة واحدة داخل الجلد قريباً بعد الولادة. الفعالية: يكون BCG أكثر فعالية في الوقاية من السل الشديد المهدِّد للحياة لدى الأطفال، لكن حمايته ضد السل الرئوي لدى البالغين متغيرة.',
          },
        ],
      },
      {
        id: 'contraindications',
        title: 'موانع الاستعمال',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'لقاح BCG لقاح حي، ولذلك يُمنع إعطاؤه للأفراد ذوي المناعة المضعفة، مثل المصابين بفيروس نقص المناعة (HIV) أو المستعدين لزراعة الأعضاء. كما لا ينبغي إعطاء BCG للحوامل، رغم أنه لم يُلاحظ ضرر مباشر على الجنين—ولا تزال هناك حاجة لمزيد من البحث لضمان سلامته أثناء الحمل.',
          },
        ],
      },
      {
        id: 'bcg-vaccination-policy-and-impact-in-egypt',
        title: 'سياسة تطعيم BCG وأثرها في مصر',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'h3',
            text: 'تطبيق السياسة',
          },
          {
            type: 'p',
            text: 'تبنت مصر، مثل كثير من البلدان ذات العبء السلّي الكبير، تطعيم BCG كركيزة مركزية في استراتيجية مكافحة السل. توصي منظمة الصحة العالمية (WHO) بمنهج متعدد الجوانب يشمل تطعيم BCG الروتيني عند الولادة، والكشف الدقيق عن الحالات، وإعطاء العلاج قصير المدى تحت الملاحظة المباشرة (DOTS) لعلاج السل. طبّقت وزارة الصحة والسكان المصرية باستمرار سياسة مكافحة السل وفق WHO لأكثر من 30 عاماً. برنامج التطعيم: يُعطى BCG لجميع المواليد، بما يتماشى مع توصيات WHO ويعكس جهود مصر المستمرة لخفض حدوث السل، لا سيما الأشكال الشديدة لدى الأطفال.',
          },
        ],
      },
      {
        id: 'controversies-and-challenges',
        title: 'الجدل والتحديات',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'رغم تطبيقه الطويل الأمد، أثار محدودية فعالية لقاح BCG ضد السل الرئوي لدى البالغين جدلاً حول استمرار إلزاميته، لا سيما مع تغير الوبائيات السلّية في مصر. يقترح بعضهم إعادة النظر في إلزاميته في المناطق ذات معدلات السل المنخفضة، لكن الأدلة بشكل عام لا تزال تدعم استخدامه كجزء من سياسة شاملة لمكافحة السل.',
          },
        ],
      },
      {
        id: 'trends-in-tb-control-in-egypt-1992-2011',
        title: 'اتجاهات مكافحة السل في مصر (1992–2011)',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'توفر مراجعة شاملة لجهود مكافحة السل في مصر على مدى عقدين رؤى قيّمة: انخفاض الحدوث: انخفض معدل حدوث جميع أشكال السل (الرئوي والخارج الرئوي) بنسبة 50%، من 34 إلى 17 حالة لكل 100,000 نسمة. انخفاض الانتشار: انخفض الانتشار بنسبة 60.6%، من 71 إلى 28 حالة لكل 100,000 نسمة. الكشف عن الحالات ونجاح العلاج: تحسّن كلا المعدلين خلال الفترة، رغم أن التحسن استقر في السنوات الست الأخيرة من التحليل، مما يشير إلى الحاجة لتركيز صحي عام متجدد.',
          },
        ],
      },
      {
        id: 'assessing-immune-response-to-bcg-in-egyptian-infants',
        title: 'تقييم الاستجابة المناعية لـ BCG لدى الرضع المصريين',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'فحصت أبحاث حديثة مدى قدرة لقاح BCG على تحفيز استجابة مناعية لدى الأطفال المصريين. في إحدى الدراسات، خضع 25 رضيعاً سليماً بعمر 14–24 شهراً (15 ذكراً و10 إناث)، تلقوا BCG عند الولادة، لتقييمات سريرية ومخبرية.',
          },
          {
            type: 'p',
            text: 'نتائج الدراسة: تكوّن ندبة BCG: أظهر 76% من الرضع ندبة BCG مرئية بعد التطعيم. اختبار مانتو الجلدي (TST): أظهر 28% نتيجة إيجابية، مما يدل على التعرض لمستضدات السل. الاستجابة المناعية: حفّز اللقاح زيادة ملحوظة في إنتاج interferon-gamma (IFN-γ)، وهو علامة مناعية حاسمة. بعد التحفيز بمشتق البروتين المنقى (PPD)، كانت مستويات IFN-γ الوسطية 0.13 نانوغرام/مل، مقارنة بـ 0.08 نانوغرام/مل عند خط الأساس (p = 0.001). أعطى التحفيز بـ phytohemagglutinin (PHA) مستويات IFN-γ وسطية بلغت 1 نانوغرام/مل. غير المستجيبون: 20% (5 رضع) لم يُظهروا استجابة IFN-γ كافية لـ PPD، وكان لدى هؤلاء أيضاً استجابات أقل لـ PHA (z = -2.18، p = 0.03). الارتباط باختبار مانتو: كان لدى الرضع ذوي اختبار مانتو الجلدي (TST) الإيجابي استجابات IFN-γ أعلى بكثير بعد تحفيز PPD مقارنة بذوي النتيجة السلبية (z = -2.09، p = 0.036). الندبة والمناعة: لم يُلاحظ ارتباط بين وجود أو غياب ندبة BCG ومعايير الوظيفة المناعية.',
          },
          {
            type: 'p',
            text: 'استنتاجات الدراسة: يبدو أن بروتوكول تطعيم BCG الحالي في مصر يحفّز استجابة مناعية مرضية لدى معظم الرضع. من المهم للأطباء والمسؤولين الصحيين أن غياب ندبة BCG لا يعني بالضرورة فشل التحصين. ومع ذلك، يؤكد الحجم الصغير للعينة الحاجة لدراسات أكبر وطويلة الأمد لتقييم الفعالية السريرية للقاح بشكل أفضل.',
          },
        ],
      },
      {
        id: 'recommendations-and-future-directions-in-egypt',
        title: 'التوصيات والتوجهات المستقبلية في مصر',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'استناداً إلى التقدم الموثق والتحديات المستمرة، تبرز التوصيات الرئيسية التالية: الاستمرار في تطبيق سياسة WHO لمكافحة السل، بما في ذلك تطعيم BCG الشامل عند الولادة في مصر، نظراً لدوره في خفض السل الشديد لدى الأطفال. تعزيز المراقبة والإبلاغ عن السل لرصد الاتجاهات الناشئة وتوجيه تعديلات السياسة، لا سيما مع استقرار معدلات الكشف عن الحالات ونجاح العلاج. إجراء دراسات أكبر وطولية لتقييم الحماية السريرية التي يوفرها BCG والحاجة المحتملة لجرعات منشطة أو استراتيجيات بديلة. توعية مقدمي الرعاية الصحية والأسر بأهمية تطعيم BCG وتوضيح المفاهيم الخاطئة حول تكوّن الندبة والمناعة.',
          },
        ],
      },
    ],
  }),
};
