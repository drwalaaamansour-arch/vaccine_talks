import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

const pregnancySection = {
  section: 'التطعيم في الحمل',
  sectionEn: 'Vaccination during pregnancy',
} as const;

const olderAdultsSection = {
  section: 'تطعيم Arexvy',
  sectionEn: 'Arexvy vaccination',
} as const;

export const rsvQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو فيروس RSV (الفيروس التنفسي المخلوي)؟',
    questionEn: 'What is RSV (respiratory syncytial virus)?',
    answer:
      'RSV فيروس شائع بيسبب التهابات في الجهاز التنفسي — خصوصًا الجهاز التنفسي السفلي. غالبًا أعراضه زي البرد (كحة، سيلان أنف، حرارة)، لكن عند الرضّع وكبار السن ممكن يسبب مرض شديد.',
    answerEn:
      'RSV is a common virus that causes respiratory infections—especially in the lower respiratory tract. Symptoms are often like a cold (cough, runny nose, fever), but in infants and older adults it can cause severe illness.',
  },
  {
    question: 'ليه RSV خطير على الأطفال؟',
    questionEn: 'Why is RSV dangerous for children?',
    answer:
      'معظم الأطفال بيتعرضوا للفيروس في أول سنتين. في الرضّع ممكن يسبب التهاب شعب هوائية (Bronchiolitis)، التهاب رئوي، صعوبة تنفس، ودخول مستشفى — وRSV من أكتر أسباب دخول الرضّع المستشفى.',
    answerEn:
      'Most children are exposed to the virus in their first two years. In infants it can cause bronchiolitis, pneumonia, breathing difficulty, and hospitalization—RSV is one of the leading reasons infants are admitted to hospital.',
  },
  {
    question: 'هل الكبار ممكن يتأثروا بـ RSV؟',
    questionEn: 'Can adults be affected by RSV?',
    answer:
      'أيوه. معظم الكبار بيمرضوا مرض خفيف، لكن كبار السن — خصوصًا اللي عندهم أمراض مزمنة أو ضعف مناعة — ممكن يحتاجوا مستشفى.',
    answerEn:
      'Yes. Most adults have mild illness, but older adults—especially those with chronic conditions or weakened immunity—may need hospital care.',
  },
  {
    question: 'إزاي بينتقل RSV؟',
    questionEn: 'How does RSV spread?',
    answer:
      'بينتقل عن طريق رذاذ الجهاز التنفسي (كحة، عطس) أو ملامسة أسطح ملوثة. الفيروس بيتداوم في فصل الخريف والشتاء في معظم المناطق.',
    answerEn:
      'It spreads through respiratory droplets (coughing, sneezing) or contact with contaminated surfaces. The virus is most active in fall and winter in most regions.',
  },
  {
    question: 'إيه هو تطعيم RSV في مصر؟',
    questionEn: 'What is the RSV vaccine in Egypt?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'في مصر في تطعيم RSV للحامل ( Abrysvo من Pfizer) عشان يحمي المولود وينفع برضه كبار السن وتطعيم (Arexvy من GSK)لكبار السن. الاتنين مش لقاحات حية — يعني مش هيسببوا المرض.',
    answerEn:
      'In Egypt there is an RSV vaccine for pregnant women (such as Abrysvo from Pfizer) to protect the baby, and it is also for older adults (Arexvy from GSK). Neither is a live vaccine—they cannot cause the disease.',
  },
  {
    question: 'إمتى الحامل تاخد تطعيم RSV؟',
    questionEn: 'When should a pregnant woman receive the RSV vaccine?',
    ...pregnancySection,
    answer:
      'جرعة واحدة للحامل من الأسبوع 28 إلى الأسبوع 36 من الحمل — حسب توصيات الطبيب. كل ما اتاخد في الوقت المناسب، كل ما الحماية للمولود بتكون أحسن.',
    answerEn:
      'A single dose for the pregnant woman between weeks 28 and 36 of pregnancy—as recommended by the doctor. The earlier it is given within this window, the better the protection for the newborn.',
  },
  {
    question: 'إزاي التطعيم بيحمي المولود؟',
    questionEn: 'How does the vaccine protect the newborn?',
    ...pregnancySection,
    answer:
      'لما الحامل تتطعّم، الأجسام المضادة بتعدي للجنين وتساعد تحميه من RSV في أول 6 شهور من عمره — وده وقت الخطر الأكبر.',
    answerEn:
      'When the pregnant woman is vaccinated, antibodies pass to the fetus and help protect the baby from RSV in the first 6 months of life—the period of highest risk.',
  },
  {
    question: 'إيه جدول الجرعات للحامل؟',
    questionEn: 'What is the dosing schedule during pregnancy?',
    ...pregnancySection,
    answer: 'جرعة واحدة بس — بتتحقن في عضلة الكتف.',
    answerEn: 'A single dose only—injected into the shoulder muscle.',
  },
  {
    question: 'ينفع يتاخد مع تطعيمات تانية في الحمل؟',
    questionEn: 'Can it be given with other vaccines during pregnancy?',
    ...pregnancySection,
    answer:
      'في أغلب الحالات آه (زي الإنفلونزا و Tdap)، حسب توصيات الطبيب وجدول التطعيمات في الحمل.',
    answerEn:
      'In most cases, yes (such as influenza and Tdap), according to the doctor’s recommendations and the pregnancy vaccination schedule.',
  },
  {
    question: 'ممكن الحامل تطعّم لو عندها حرارة؟',
    questionEn: 'Can a pregnant woman get vaccinated if she has a fever?',
    ...pregnancySection,
    answer:
      'لو في مرض حاد أو حرارة، الأفضل نأجل التطعيم لحد ما تتحسن — حسب تقييم الطبيب.',
    answerEn:
      'If you have an acute illness or fever, it is best to postpone vaccination until you recover—as assessed by the doctor.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة للحامل؟',
    questionEn: 'What are the expected side effects during pregnancy?',
    ...pregnancySection,
    answer:
      'الأكثر شيوعًا: ألم مكان الحقن، احمرار أو تورم، تعب، صداع، أو ألم عضلات. غالبًا بتكون بسيطة وتختفي سريعًا.',
    answerEn:
      'The most common are: pain at the injection site, redness or swelling, fatigue, headache, or muscle pain. These are usually mild and resolve quickly.',
  },
  {
    question: 'هل التطعيم بيمنع الإصابة 100%؟',
    questionEn: 'Does the vaccine prevent infection 100%?',
    ...pregnancySection,
    answer:
      'لأ، مش بيمنع 100%، لكن بيقلل بشكل كبير خطر RSV الشديد ودخول المستشفى عند المولود.',
    answerEn:
      'No, it does not prevent infection 100%, but it greatly reduces the risk of severe RSV and hospitalization in the newborn.',
  },
  {
    question: 'هل التطعيم آمن للحامل؟',
    questionEn: 'Is the vaccine safe during pregnancy?',
    ...pregnancySection,
    answer:
      'أيوه، تطعيم RSV للحامل (Abrysvo) آمن ومُدرَج ضمن التوصيات الدولية، والفوايد بتفوق المخاطر في معظم الحالات.',
    answerEn:
      'Yes, the RSV vaccine for pregnant women (Abrysvo) is safe and included in international recommendations; the benefits outweigh the risks in most cases.',
  },
  {
    question: 'إيه هو Arexvy؟',
    questionEn: 'What is Arexvy?',
    ...olderAdultsSection,
    answer:
      'Arexvy لقاح من شركة GSK بيحمي من فيروس RSV. مش لقاح حي — يعني مش هيسببلك المرض. اللقاح بيعلّم جسمك يتعرف على الفيروس ويتصدى له، وفي مادة بتقوّي المناعة شوية (زي فكرة لقاح الحزام الناري Shingrix لكن بجرعة أقل).',
    answerEn:
      'Arexvy is a vaccine from GSK that helps protect against RSV. It is not a live vaccine—it cannot give you the disease. It teaches your immune system to recognize the virus, with a small immune booster (similar in idea to the shingles vaccine Shingrix, but a lower amount).',
  },
  {
    question: 'مين يقدر ياخد Arexvy؟',
    questionEn: 'Who can get Arexvy?',
    ...olderAdultsSection,
    answer:
      'أي حد من سن 60 سنة فما فوق. ولو عندك من 50 لحد 59 سنة ومشاكل صحية بتخلي RSV أخطر عليك (زي قلب أو صدر أو سكر متأثر أو سمنة شديدة وغيرها)، ممكن يناسبك كمان — بس الطبيب هو اللي يقرر.',
    answerEn:
      'Anyone age 60 or older. If you are 50 to 59 and have health problems that make severe RSV more likely (such as heart or lung disease, complicated diabetes, severe obesity, and others), it may also be right for you—your doctor decides.',
  },
  {
    question: 'Arexvy فعلاً بيفيد؟',
    questionEn: 'Does Arexvy really help?',
    ...olderAdultsSection,
    answer:
      'أيوه. جرعة واحدة قلّلت بشكل واضح مرض RSV الشديد في أول موسمين للفيروس. ولما اتستخدم فعلًا برّه التجارب (موسم 2023–2024) على الناس من 60 سنة فما فوق، قلّل زيارات الطوارئ بسبب RSV حوالي 77% ودخول المستشفى حوالي 83%.',
    answerEn:
      'Yes. One dose clearly lowered severe RSV illness over the first two virus seasons. In real-world use (2023–2024) in people 60 and older, it cut RSV-related emergency visits by about 77% and hospital stays by about 83%.',
  },
  {
    question: 'Arexvy بياخد كام جرعة؟',
    questionEn: 'How many Arexvy shots do you need?',
    ...olderAdultsSection,
    answer:
      'جرعة واحدة بس — حقنة في العضل (زي الكتف). دلوقتي التوصيات بتقول مرة واحدة في العمر، مش كل سنة. لو محتاج تاني، الطبيب يحدد.',
    answerEn:
      'Just one shot—in the muscle (such as the shoulder). Guidance today is one dose for now, not every year. If another dose is ever needed, your doctor will say.',
  },
  {
    question: 'Arexvy ممكن يسبب إيه بعد الحقنة؟',
    questionEn: 'What might you feel after Arexvy?',
    ...olderAdultsSection,
    answer:
      'الأكثر شيوعًا: وجع أو احمرار أو تورم في مكان الحقنة، تعب، وجع في العضلات، أو صداع. غالبًا حاجات بسيطة وبتمشي في كام يوم.',
    answerEn:
      'Most often: soreness, redness, or swelling where you got the shot, tiredness, muscle aches, or headache. Usually mild and gone within a few days.',
  },
  {
    question: 'هل Arexvy بينفع للحامل؟',
    questionEn: 'Can a pregnant woman get Arexvy?',
    ...olderAdultsSection,
    answer:
      'لأ. Arexvy للكبار مش للحامل. لو حامل وعايزة تحمي مولودك من RSV، اللي بيتاخد في الحمل هو Abrysvo (Pfizer) في وقت محدد — حسب كلام الطبيب.',
    answerEn:
      'No. Arexvy is for adults, not for use in pregnancy. If you are pregnant and want to protect your baby from RSV, the vaccine used in pregnancy is Abrysvo (Pfizer) during a specific window—as your doctor advises.',
  },
];
