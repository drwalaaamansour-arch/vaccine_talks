import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const menBQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو تطعيم MenB؟',
    questionEn: 'What is the MenB vaccine?',
    answer:
      'MenB تطعيم بيحمي من النمط B من البكتيريا Neisseria meningitidis. التطعيم بيتكون من بروتينات على سطح البكتيريا، ومختلف عن تطعيم MenACWY اللي بيغطي الأنماط A و C و W و Y.',
    answerEn:
      'MenB is a vaccine that protects against serogroup B of Neisseria meningitidis. It is made from proteins on the bacterial surface and is different from MenACWY, which covers serogroups A, C, W, and Y.',
  },
  {
    question: 'إيه الفرق بين MenB و MenACWY؟',
    questionEn: 'What is the difference between MenB and MenACWY?',
    answer:
      'MenB بيحمي من النمط B بس. MenACWY بيحمي من A و C و W و Y. الاتنين مهمين لكن مش بديل لبعض — كل واحد له جدوله، وممكن الشخص يحتاج الاتنين حسب عمره وحالته الصحية.',
    answerEn:
      'MenB protects against serogroup B only. MenACWY protects against A, C, W, and Y. Both are important but neither replaces the other — each has its own schedule, and a person may need both depending on age and health.',
  },
  {
    question: 'إيه أنواع تطعيم MenB الموجودة؟',
    questionEn: 'What types of MenB vaccine exist?',
    answer:
      'في العالم فيه نوعين رئيسيين: Bexsero (MenB-4C) من GSK و Trumenba (MenB-FHbp) من Pfizer. في مصر النوع المتاح هو Bexsero (MenB-4C) بس.',
    answerEn:
      'Worldwide there are two main types: Bexsero (MenB-4C) from GSK and Trumenba (MenB-FHbp) from Pfizer. In Egypt only Bexsero (MenB-4C) is available.',
  },
  {
    question: 'هل ينفع أبدّل بين Bexsero و Trumenba؟',
    questionEn: 'Can I switch between Bexsero and Trumenba?',
    answer:
      'الأفضل نكمّل السلسلة بنفس النوع. لو اتاخد نوعين مختلفين بالخطأ، الطبيب يحدد إزاي نكمّل الجدول. في مصر Bexsero هو المتاح.',
    answerEn:
      'It is best to complete the series with the same product. If two different products were given by mistake, the doctor will decide how to complete the schedule. In Egypt Bexsero is the available option.',
  },
  {
    question: 'مين المفروض ياخد تطعيم MenB؟',
    questionEn: 'Who should receive MenB vaccine?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'الناس اللي عندهم خطر أعلى: ضعف أو استئصال الطحال (زي مرض فقر الدم المنجلي)، نقص مكونات المتممة، استخدام مثبطات المتممة (زي eculizumab و ravulizumab)، العاملين في المختبرات، والمخالطين في تفشّي النمط B.\n\nللمراهقين والشباب (16–23 سنة) اللي مش عندهم خطر إضافي: التطعيم ممكن يتناقش مع الطبيب (shared clinical decision-making) — مش إجباري للكل.',
    answerEn:
      'People at higher risk: poor or absent spleen function (such as sickle cell disease), complement component deficiency, use of complement inhibitors (such as eculizumab and ravulizumab), laboratory workers, and close contacts in serogroup B outbreaks.\n\nFor adolescents and young adults (16–23 years) without extra risk: vaccination can be discussed with a doctor (shared clinical decision-making) — it is not mandatory for everyone.',
  },
  {
    question: 'تطعيم MenB بيتاخد إمتى في مصر؟',
    questionEn: 'When is MenB given in Egypt?',
    answer:
      'Bexsero متاح في مصر ويمكن إعطاؤه من سن شهرين لحد 50 سنة. عدد الجرعات جرعتين أو تلاتة حسب السن والحالة الصحية — الطبيب يحدد الجدول المناسب.',
    answerEn:
      'Bexsero is available in Egypt and can be given from 2 months to 50 years of age. The number of doses is two or three depending on age and health — your doctor sets the right schedule.',
  },
  {
    question: 'إيه جدول الجرعات؟',
    questionEn: 'What is the dosing schedule?',
    answer:
      'للناس العاديين (مش عندهم خطر عالي): جرعتين بينهم 1 شهر على الأقل. لو الجرعة التانية اتاخدت قبل 6 شهور، ممكن تحتاج جرعة تالتة.\n\nللناس عاليي الخطر (زي بدون طحال): 3 جرعات — جرعة 1، جرعة 2 بعد 1–2 شهر، وجرعة 3 بعد 6 شهور على الأقل من الأولى.',
    answerEn:
      'For people at usual risk: two doses at least 1 month apart. If the second dose was given before 6 months, a third dose may be needed.\n\nFor people at high risk (such as no spleen): 3 doses — dose 1, dose 2 after 1–2 months, and dose 3 at least 6 months after the first.',
  },
  {
    question: 'هل محتاج جرعات منشطة؟',
    questionEn: 'Are booster doses needed?',
    answer:
      'الناس عاليي الخطر (زي بدون طحال) بيحتاجوا منشطة MenB سنة بعد ما يخلصوا السلسلة الأساسية، وبعدين كل 2–3 سنوات طول ما الخطر موجود — حسب توصيات الطبيب.',
    answerEn:
      'People at high risk (such as no spleen) need a MenB booster one year after completing the primary series, then every 2–3 years while risk continues — per doctor recommendations.',
  },
  {
    question: 'إيه معنى "حماية قصيرة المدى"؟',
    questionEn: 'What does "short-term protection" mean?',
    answer:
      'تطعيم MenB اتوافق عليه بناءً على استجابة الأجسام المضادة. مستويات الحماية غالبًا بتقل خلال 1–2 سنة بعد السلسلة الأساسية، لكن المنشطة بترفع الأجسام المضادة بسرعة خلال 1–2 أسبوع.',
    answerEn:
      'MenB vaccine was approved based on antibody response. Protection levels often fall within 1–2 years after the primary series, but a booster raises antibodies quickly within 1–2 weeks.',
  },
  {
    question: 'هل ينفع قبل عملية استئصال الطحال؟',
    questionEn: 'Can it be given before splenectomy?',
    answer:
      'أيوه، ويفضل يتاخد قبل العملية بأسبوعين على الأقل لو أمكن (مع Hib و MenACWY و PCV). لو اتاخد خلال 14 يوم قبل العملية برضه بيتحسب. لو ما اتاخدش قبلها، يتاخد بعد ما الحالة تستقر.',
    answerEn:
      'Yes. It is best given at least two weeks before surgery when possible (along with Hib, MenACWY, and PCV). If given within 14 days before surgery it still counts. If not given before, give it after the person is stable.',
  },
  {
    question: 'إيه الوقاية بعد التعرض؟',
    questionEn: 'What is post-exposure prevention?',
    answer:
      'للمخالطين المقربين: المضادات الحيوية الوقائية ضرورية فورًا. التطعيم مش بيغني عن الوقاية الدوائية — الاتنين ليهم دور.',
    answerEn:
      'For close contacts: preventive antibiotics are essential immediately. Vaccination does not replace drug prevention — both have a role.',
  },
  {
    question: 'ينفع يتاخد مع تطعيمات تانية؟',
    questionEn: 'Can it be given with other vaccines?',
    answer:
      'في أغلب الحالات آه، ممكن يتاخد مع تطعيمات تانية في نفس الزيارة حسب توصيات الطبيب.',
    answerEn:
      'In most cases yes — it can be given with other vaccines at the same visit per doctor advice.',
  },
  {
    question: 'هل ينفع يتاخد MenACWY و MenB معًا؟',
    questionEn: 'Can MenACWY and MenB be given together?',
    answer:
      'أيوه، ممكن يتاخدوا في نفس الزيارة أو في أي وقت تاني من غير مشكلة.',
    answerEn:
      'Yes. They can be given at the same visit or at any other time without a problem.',
  },
  {
    question: 'ممكن أطعّم لو عندي حرارة؟',
    questionEn: 'Can I be vaccinated if I have a fever?',
    answer:
      'لو عندك حرارة أو مرض حاد، الأفضل نأجل التطعيم لحد ما تتحسن. كمان التطعيم مش بيتاخد لو فيه حساسية شديدة من أي مكون في اللقاح.',
    answerEn:
      'If you have fever or acute illness, it is better to postpone vaccination until you recover. Vaccination is also not given if there is a severe allergy to any vaccine component.',
  },
  {
    question: 'فين وإزاي بيتحقن تطعيم MenB؟',
    questionEn: 'Where and how is MenB injected?',
    answer:
      'كل لقاحات المكورات السحائية (MenACWY و MenB) بتتعطى في العضل (Intramuscular injection) — في عضلة الكتف أو عضلة الفخذ حسب سن الشخص.',
    answerEn:
      'All meningococcal vaccines (MenACWY and MenB) are given by intramuscular injection — in the shoulder muscle or thigh muscle depending on age.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة؟',
    questionEn: 'What side effects are expected?',
    answer:
      'الأكثر شيوعًا: ألم مكان الحقن، احمرار أو تورم، صداع، تعب، وآلام في الجسم. غالبًا بتكون بسيطة وتختفي سريعًا.',
    answerEn:
      'Most common: pain at the injection site, redness or swelling, headache, tiredness, and body aches. These are usually mild and go away quickly.',
  },
  {
    question: 'هل التطعيم بيمنع الإصابة 100%؟',
    questionEn: 'Does the vaccine prevent infection 100%?',
    answer:
      'لأ، مش بيمنع 100%، لكن بيقلل بشكل كبير خطر الإصابة بالنمط B. حتى الناس المطعّمين عاليي الخطر لازم ياخدوا بالهم من أعراض المرض.',
    answerEn:
      'No, it does not prevent 100%, but it greatly reduces the risk of serogroup B disease. Even vaccinated people at high risk should watch for symptoms.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، Bexsero آمن ومستخدم من سنين طويلة، والفوايد بتفوق المخاطر في معظم الناس.',
    answerEn:
      'Yes. Bexsero is safe and has been used for many years; benefits outweigh risks for most people.',
  },
];
