import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const pneumococcalQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هي المكورات الرئوية؟',
    questionEn: 'What is pneumococcus (Streptococcus pneumoniae)?',
    answer:
      'المكورات الرئوية البكتيريا Streptococcus pneumoniae بتسبب أمراض زي التهاب الرئة، تسمم الدم، التهاب الأذن الوسطى، والتهاب السحايا. في أكتر من 100 نمط (serotype) منها.',
    answerEn:
      'Pneumococcus is the bacterium Streptococcus pneumoniae, which causes diseases such as pneumonia, bloodstream infection (sepsis), middle ear infection, and meningitis. There are more than 100 serotypes.',
  },
  {
    question: 'إزاي بينتقل المرض؟',
    questionEn: 'How does the disease spread?',
    answer:
      'بيتنقل عن طريق رذاذ الجهاز التنفسي (من الكحة أو العطس). البكتيريا ممكن تكون موجودة في أنف أو بلعوم ناس كتير من غير أعراض.',
    answerEn:
      'It spreads through respiratory droplets (from coughing or sneezing). The bacteria can live in the nose or throat of many people without causing symptoms.',
  },
  {
    question: 'إيه أنواع تطعيم المكورات الرئوية؟',
    questionEn: 'What types of pneumococcal vaccines are there?',
    answer:
      'فيه نوعين رئيسيين: تطعيم مقترن (PCV) — بيشتغل من سن صغير وبيعمل مناعة أقوى. وتطعيم متعدد السكريات (PPSV) — للكبار والأطفال من سنتين فما فوق، ومش بيتاخد للأطفال أقل من سنتين.',
    answerEn:
      'There are two main types: conjugate vaccine (PCV)—works from a young age and produces stronger immunity. And polysaccharide vaccine (PPSV)—for adults and children from 2 years and older, and not given to children under 2 years.',
  },
  {
    question: 'إيه الفرق بين PCV و PPSV؟',
    questionEn: 'What is the difference between PCV and PPSV?',
    answer:
      'PCV (المقترن) بيشتغل من 6 أسابيع، بيعمل مناعة أقوى وبيقلل حمل البكتيريا. PPSV (متعدد السكريات) للأطفال من سنتين والكبار، وبيتحط بعد PCV بشهرين أو سنة حسب الحالة. الأفضل PCV الأول وبعدين PPSV لو محتاجين الاتنين.',
    answerEn:
      'PCV (conjugate) works from 6 weeks of age, produces stronger immunity, and reduces bacterial carriage. PPSV (polysaccharide) is for children from 2 years and adults, and is given after PCV by 2 months or 1 year depending on the situation. PCV first, then PPSV if both are needed, is preferred.',
  },
  {
    question: 'إيه أنواع PCV الموجودة في مصر؟',
    questionEn: 'What PCV types are available in Egypt?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'في مصر 3 أنواع مقترنة:\n\n• PCV10 (10 فصايل): للأطفال، ومينفعش بعد 5 سنين.\n• PCV13 (13 فصيلة): ينفع من 6 أسابيع لأي سن، حتى الكبار.\n• PCV15 (15 فصيلة): ينفع من 6 أسابيع للأطفال والكبار، وبيغطي فصايل PCV13 زائد فصيلتين إضافيتين.',
    answerEn:
      'In Egypt there are 3 conjugate vaccines:\n\n• PCV10 (10 serotypes): for children, not given after age 5.\n• PCV13 (13 serotypes): can be given from 6 weeks at any age, including adults.\n• PCV15 (15 serotypes): can be given from 6 weeks for children and adults, and covers PCV13 serotypes plus 2 additional serotypes.',
  },
  {
    question: 'تطعيم المكورات الرئوية بيتاخد إمتى للأطفال؟',
    questionEn: 'When is the pneumococcal vaccine given to children?',
    answer:
      'PCV ممكن من 6 أسابيع. عدد الجرعات حسب العمر:\n\n• أقل من 6 شهور: 3 جرعات قبل السنة + منشطة في السنة التانية.\n• 7 شهور لسنة: جرعتين بينهم شهرين + منشطة في السنة التانية.\n• سنة لسنتين: جرعتين بينهم شهرين.\n• من سنتين: PCV13 أو PCV15 جرعة واحدة؛ PCV10 (لحد 5 سنين) جرعتين بينهم شهرين.',
    answerEn:
      'PCV can be given from 6 weeks of age. Number of doses depends on age:\n\n• Under 6 months: 3 doses before age 1 + booster in the second year.\n• 7 months to 1 year: 2 doses 2 months apart + booster in the second year.\n• 1 to 2 years: 2 doses 2 months apart.\n• From 2 years: PCV13 or PCV15 single dose; PCV10 (up to age 5) 2 doses 2 months apart.',
  },
  {
    question: 'الكبار ياخدوا تطعيم المكورات الرئوية؟',
    questionEn: 'Should adults receive the pneumococcal vaccine?',
    answer:
      'أيوه، الكبار ممكن ياخدوا PCV13 أو PCV15 — جرعة واحدة. PPSV للكبار والناس اللي عندهم خطر أعلى، وبيتحط بعد PCV بشهرين أو سنة حسب الحالة (خصوصًا بعد PCV15).',
    answerEn:
      'Yes, adults can receive PCV13 or PCV15—a single dose. PPSV is for adults and people at higher risk, given after PCV by 2 months or 1 year depending on the situation (especially after PCV15).',
  },
  {
    question: 'مين المفروض ياخد تطعيم المكورات الرئوية؟',
    questionEn: 'Who should receive the pneumococcal vaccine?',
    answer:
      'كل الأطفال حسب جدول التطعيمات. كمان الناس اللي عندهم خطر أعلى: بدون طحال أو ضعف الطحال، أمراض مزمنة (قلب، رئة، كلى، كبد، سكر)، ضعاف المناعة، HIV، مرض فقر الدم المنجلي، زراعة القوقعة، وغيرهم — حسب تقييم الطبيب.',
    answerEn:
      'All children according to the vaccination schedule. Also people at higher risk: asplenia or splenic dysfunction, chronic conditions (heart, lung, kidney, liver, diabetes), immunocompromised individuals, HIV, sickle cell disease, cochlear implant recipients, and others—as assessed by the doctor.',
  },
  {
    question: 'هل ينفع قبل عملية استئصال الطحال؟',
    questionEn: 'Can it be given before splenectomy (spleen removal)?',
    answer:
      'أيوه، ويفضل يتاخد قبل العملية بأسبوعين على الأقل لو أمكن (مع Hib و MenACWY و MenB). لو ما اتاخدش قبلها، يتاخد بعد ما الحالة تستقر.',
    answerEn:
      'Yes, and ideally at least 2 weeks before surgery if possible (along with Hib, MenACWY, and MenB). If not given beforehand, it should be given once the condition is stable.',
  },
  {
    question: 'لو اتأخرت في الجرعة؟',
    questionEn: 'What if a dose is delayed?',
    answer:
      'مش محتاج تبدأ من الأول في كل الحالات. كمّل الجرعات المتبقية في أقرب وقت، والطبيب يحدد الجدول المناسب.',
    answerEn:
      'You do not always need to restart from the beginning. Give the remaining doses as soon as possible, and the doctor will determine the appropriate schedule.',
  },
  {
    question: 'ينفع يتاخد مع تطعيمات تانية؟',
    questionEn: 'Can it be given with other vaccines?',
    answer:
      'في أغلب الحالات آه، ممكن يتاخد مع تطعيمات تانية في نفس الزيارة حسب توصيات الطبيب. لكن في أطفال معرضين للخطر، لازم نراعي التداخل المحتمل مع Menactra (MenACWY) لو بيتاخد في نفس الوقت.',
    answerEn:
      'In most cases, yes—it can be given with other vaccines at the same visit according to the doctor’s recommendations. But in at-risk children, potential interference with Menactra (MenACWY) must be considered if given at the same time.',
  },
  {
    question: 'ممكن أطعّم لو عندي حرارة؟',
    questionEn: 'Can I get vaccinated if I have a fever?',
    answer:
      'لو عندك حرارة أو مرض حاد، الأفضل نأجل التطعيم لحد ما تتحسن. PPSV كمان مش بيتاخد للأطفال أقل من سنتين.',
    answerEn:
      'If you have a fever or acute illness, it is best to postpone vaccination until you recover. PPSV is also not given to children under 2 years.',
  },
  {
    question: 'فين وإزاي بيتحقن التطعيم؟',
    questionEn: 'Where and how is the vaccine injected?',
    answer:
      'PCV بيتحقن في العضل — في عضلة الكتف أو عضلة الفخذ حسب السن. PPSV ممكن يتحقن تحت الجلد أو في عضلة الكتف.',
    answerEn:
      'PCV is injected intramuscularly—in the shoulder or thigh muscle depending on age. PPSV may be given subcutaneously or in the shoulder muscle.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة؟',
    questionEn: 'What are the expected side effects?',
    answer:
      'الأكثر شيوعًا: ألم مكان الحقن، احمرار أو تورم، حرارة خفيفة، تعب، وآلام في الجسم. غالبًا بتكون بسيطة وتختفي سريعًا.',
    answerEn:
      'The most common are: pain at the injection site, redness or swelling, low-grade fever, fatigue, and body aches. These are usually mild and resolve quickly.',
  },
  {
    question: 'هل التطعيم بيمنع الإصابة 100%؟',
    questionEn: 'Does the vaccine prevent infection 100%?',
    answer:
      'لأ، مش بيمنع 100%، لكن بيقلل بشكل كبير خطر الأمراض الخطيرة اللي بتسببها المكورات الرئوية.',
    answerEn:
      'No, it does not prevent infection 100%, but it greatly reduces the risk of serious diseases caused by pneumococcus.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم المكورات الرئوية آمن ومستخدم من سنين طويلة، والفوايد بتفوق المخاطر في معظم الناس.',
    answerEn:
      'Yes, the pneumococcal vaccine is safe and has been used for many years; the benefits outweigh the risks for most people.',
  },
];
