import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const hibQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هي بكتيريا Haemophilus influenzae؟',
    questionEn: 'What is Haemophilus influenzae bacteria?',
    answer:
      'دي بكتيريا ممكن تعيش في الجهاز التنفسي عند الإنسان، وبتتنقل من شخص لآخر عن طريق الرذاذ (الكحة أو العطس) أو إفرازات الجهاز التنفسي. في أنواع منها: أنواع مغلفة (زي النوع b المعروف باسم Hib) وده أخطر نوع خصوصًا للأطفال، وأنواع تانية غير مغلفة بتسبب التهابات بسيطة زي التهاب الأذن أو الجيوب الأنفية.',
    answerEn:
      'These are bacteria that can live in the human respiratory tract and spread from person to person through droplets (coughing or sneezing) or respiratory secretions. Some types are encapsulated (such as type b, known as Hib), which is the most dangerous especially for children; other non-encapsulated types cause milder infections such as ear or sinus infection.',
  },
  {
    question: 'إيه خطورة النوع Hib؟',
    questionEn: 'How dangerous is Hib?',
    answer:
      'النوع Hib ممكن يسبب أمراض خطيرة زي: التهاب السحايا (المخ والأغشية)، التهاب لسان المزمار (ممكن يسبب اختناق)، التهاب رئوي شديد، وتلوث الدم.',
    answerEn:
      'Hib can cause serious disease such as: meningitis (brain and membranes), epiglottitis (which can block the airway), severe pneumonia, and bloodstream infection.',
  },
  {
    question: 'إيه الفرق بين Hib والإنفلونزا العادية؟',
    questionEn: 'What is the difference between Hib and ordinary flu?',
    answer:
      'Hib: بكتيريا. الإنفلونزا: فيروس. الاتنين مختلفين تمامًا، والاسم بس هو اللي شبه بعض تاريخيًا.',
    answerEn:
      'Hib: bacterium. Influenza: virus. They are completely different; only the name is similar historically.',
  },
  {
    question: 'هل في تطعيم ضد Hib؟',
    questionEn: 'Is there a vaccine against Hib?',
    answer:
      'أيوه، في تطعيم بيحمي من النوع الخطير Hib فقط، لكن مش بيحمي من باقي أنواع البكتيريا الأخرى.',
    answerEn:
      'Yes. There is a vaccine that protects against dangerous Hib type only, but not against other types of the bacterium.',
  },
  {
    question: 'تطعيم Hib بيتاخد إمتى؟',
    questionEn: 'When is Hib vaccine given?',
    section: 'تطعيم Hib للأطفال',
    sectionEn: 'Hib vaccination for children',
    answer:
      'التطعيم جزء من جدول تطعيمات الأطفال الروتيني في مصر: عند شهرين، وأربعة، وستة أشهر، مع جرعة تنشيطية عند سنة ونص (18 شهرًا). التطعيم إجباري ومجاني ضمن برنامج التطعيمات الوطنية.',
    answerEn:
      'Vaccination is part of the routine child schedule in Egypt: at 2, 4, and 6 months, with a booster at 18 months. It is mandatory and free under the national immunization program.',
  },
  {
    question: 'لو الطفل اتأخر في التطعيم؟',
    questionEn: 'What if the child’s vaccination was delayed?',
    answer:
      'مش مشكلة، الدكتور بيكمل الجرعات حسب سن الطفل. ولو الطفل أخد جرعة واحدة بعد عمر سنة، غالبًا بيكون كفاية في الحالات البسيطة.',
    answerEn:
      'That is fine. The doctor continues doses according to the child’s age. If the child received one dose after 1 year of age, that is often enough in straightforward cases.',
  },
  {
    question: 'هل الطفل محتاج جرعات إضافية بعد سن سنة؟',
    questionEn: 'Does the child need extra doses after age one?',
    answer:
      'لو الطفل صحي وأخد جرعة بعد عمر 15 شهر → غالبًا مش بيحتاج جرعات تانية. لكن الأطفال الأكثر عرضة للخطر ممكن يحتاجوا جرعات إضافية حسب الحالة.',
    answerEn:
      'If the child is healthy and received a dose after 15 months of age, they usually do not need more doses. But higher-risk children may need additional doses depending on their situation.',
  },
  {
    question: 'لو الطفل أخد جرعة قبل 6 أسابيع من العمر؟',
    questionEn: 'What if a dose was given before 6 weeks of age?',
    answer:
      'دي جرعة غير محسوبة، ولازم يبدأ جدول التطعيم من جديد في الوقت الصحيح.',
    answerEn:
      'That dose does not count, and the vaccination schedule must be restarted at the correct time.',
  },
  {
    question: 'هل الطفل الكبير (7 سنين) بياخد Hib؟',
    questionEn: 'Does an older child (7 years) get Hib vaccine?',
    answer:
      'لأ، عادةً التطعيم مش روتيني للأطفال الأكبر من 5 سنين لو صحتهم كويسة.',
    answerEn:
      'No. Routine vaccination is usually not given to children older than 5 years if they are otherwise healthy.',
  },
  {
    question: 'ممكن أطعّم طفلي لو عنده حرارة؟',
    questionEn: 'Can I vaccinate my child if they have a fever?',
    answer:
      'لو عنده حرارة أو مرض حاد، الأفضل نأجل التطعيم لحد ما تتحسن حالته. كمان التطعيم مش بيتاخد لو فيه حساسية شديدة من أي مكون في اللقاح.',
    answerEn:
      'If they have fever or acute illness, it is better to postpone vaccination until they recover. Vaccination is also not given if there is severe allergy to any vaccine component.',
  },
  {
    question: 'ينفع يتاخد مع تطعيمات تانية في نفس الزيارة؟',
    questionEn: 'Can it be given with other vaccines at the same visit?',
    answer:
      'آه، في أغلب الحالات ممكن يتاخد مع التطعيمات التانية في نفس الموعد حسب جدول التطعيمات.',
    answerEn:
      'Yes. In most cases it can be given with other vaccines at the same appointment per the immunization schedule.',
  },
  {
    question: 'هل الكبار بياخدوا تطعيم Hib؟',
    questionEn: 'Do adults receive Hib vaccine?',
    section: 'مين اللي محتاج التطعيم غير الأطفال؟',
    sectionEn: 'Who else needs vaccination?',
    answer:
      'مش كل الكبار، لكن مهم في حالات زي: استئصال الطحال أو ضعف وظيفته، بعض أمراض نقص المناعة، وبعد زراعة نخاع العظم.',
    answerEn:
      'Not all adults, but it is important in situations such as: spleen removal or poor spleen function, some immune deficiency conditions, and after bone marrow transplant.',
  },
  {
    question: 'قبل عملية استئصال الطحال؟',
    questionEn: 'Before splenectomy?',
    answer:
      'يفضل ياخد التطعيم قبل العملية بحوالي أسبوعين لو أمكن، أو بعد العملية لو ما اتحطش قبلها.',
    answerEn:
      'It is best given about two weeks before surgery when possible, or after surgery if it was not given before.',
  },
  {
    question: 'هل الناس ضعاف المناعة بياخدوا التطعيم؟',
    questionEn: 'Do people with weakened immunity get vaccinated?',
    answer:
      'أيوه في حالات معينة زي فقدان الطحال أو بعض أنواع نقص المناعة، حسب تقييم الطبيب.',
    answerEn:
      'Yes, in certain situations such as absent spleen or some types of immune deficiency, per doctor assessment.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم Hib آمن جدًا وبيستخدم من سنين طويلة وبيحمي الأطفال من أمراض خطيرة جدًا ممكن تهدد الحياة.',
    answerEn:
      'Yes. Hib vaccine is very safe, has been used for many years, and protects children from very serious, life-threatening disease.',
  },
];
