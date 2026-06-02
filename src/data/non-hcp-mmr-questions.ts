import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const mmrQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو تطعيم MMR (الثلاثي الفيروسي)؟',
    questionEn: 'What is the MMR (measles–mumps–rubella) vaccine?',
    answer:
      'MMR تطعيم مشترك بيحمي من ثلاث أمراض فيروسية: الحصبة، الحصبة الألمانية (Rubella)، والنكاف (Mumps).',
    answerEn:
      'MMR is a combined vaccine that protects against three viral diseases: measles, rubella, and mumps.',
  },
  {
    question: 'إيه أخطار الأمراض دي؟',
    questionEn: 'What are the risks of these diseases?',
    answer:
      'الحصبة ممكن تسبب حمى، طفح، ومضاعفات خطيرة زي التهاب الرئة أو الدماغ. النكاف ممكن يسبب تورم الغدد ومضاعفات. الحصبة الألمانية خفيفة في الكبار لكن خطيرة جدًا على الجنين لو حصلت أثناء الحمل.',
    answerEn:
      'Measles can cause fever, rash, and serious complications such as pneumonia or brain inflammation. Mumps can cause swollen glands and complications. Rubella is usually mild in adults but very dangerous to the fetus if it occurs during pregnancy.',
  },
  {
    question: 'إزاي بينتقلوا؟',
    questionEn: 'How do they spread?',
    answer:
      'بيتنقلوا عن طريق الرذاذ من الكحة أو العطس، أو ملامسة إفرازات الشخص المصاب. الحصبة والنكاف شديدي العدوى.',
    answerEn:
      'They spread through droplets from coughing or sneezing, or contact with secretions from an infected person. Measles and mumps are highly contagious.',
  },
  {
    question: 'هل في تطعيم ضد الأمراض دي؟',
    questionEn: 'Is there a vaccine against these diseases?',
    answer:
      'أيوه، تطعيم MMR جزء من التطعيمات الإجبارية في مصر وبيقلل خطر الإصابة والمضاعفات بشكل كبير.',
    answerEn:
      'Yes. MMR is part of mandatory vaccinations in Egypt and greatly reduces the risk of infection and complications.',
  },
  {
    question: 'تطعيم MMR بيتاخد إمتى في مصر؟',
    questionEn: 'When is MMR given in Egypt?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'جرعتين ضمن التطعيمات الإجبارية بوزارة الصحة: عند سن سنة، وعند سنة ونص (18 شهرًا).',
    answerEn:
      'Two doses as part of mandatory Ministry of Health vaccinations: at 1 year of age and at 18 months.',
  },
  {
    question: 'هل ممكن ناخده بدري أثناء انتشار المرض؟',
    questionEn: 'Can it be given early during an outbreak?',
    answer:
      'أيوه، ممكن يتاخد من عمر 6–11 شهر في حالات السفر أو انتشار المرض، لكن الجرعة دي لا تُحسب ضمن الجرعات الأساسية.',
    answerEn:
      'Yes. It can be given from 6–11 months of age for travel or during outbreaks, but this dose does not count toward the routine primary series.',
  },
  {
    question: 'ليه لازم جرعتين؟',
    questionEn: 'Why are two doses needed?',
    answer:
      'لأن في حوالي 7% من الناس مش بيكون عندهم مناعة كاملة بعد الجرعة الأولى، فجرعة تانية بتضمن حماية أعلى (تصل لـ 97%).',
    answerEn:
      'Because about 7% of people do not develop full immunity after the first dose, a second dose ensures higher protection (up to about 97%).',
  },
  {
    question: 'الكبار اللي متطعّموش قبل كده؟',
    questionEn: 'What about adults who were never vaccinated?',
    answer:
      'لو شخص كبير ومأخدش التطعيم قبل كده، ممكن ياخد جرعتين بينهم شهر.',
    answerEn:
      'If an adult was never vaccinated, they can receive two doses one month apart.',
  },
  {
    question: 'هل في حاجة اسمها جرعة منشطة للكبار؟',
    questionEn: 'Are routine booster doses needed for adults?',
    answer:
      'لأ، مفيش جرعات منشطة روتينية. اللي أخد الجرعتين بشكل صحيح يعتبر محمي مدى الحياة.',
    answerEn:
      'No. There are no routine boosters. People who received two doses correctly are considered protected for life.',
  },
  {
    question: 'لو اتأخرت في الجرعة؟',
    questionEn: 'What if a dose was delayed?',
    answer:
      'مش محتاج تبدأ من الأول. كمّل الجرعات المتبقية في أقرب وقت، والطبيب يحدد الجدول المناسب.',
    answerEn:
      'You do not need to start over. Complete the remaining doses as soon as possible; your doctor will set the right schedule.',
  },
  {
    question: 'هل ممكن ناخد جرعة إضافية لو مش متأكدين من التاريخ؟',
    questionEn: 'Can an extra dose be given if vaccination history is unclear?',
    answer: 'أيوه، مفيش ضرر من جرعة إضافية لو الحالة غير واضحة.',
    answerEn: 'Yes. An extra dose is not harmful if the history is unclear.',
  },
  {
    question: 'هل تطعيم MMR تطعيم حي؟',
    questionEn: 'Is MMR a live vaccine?',
    answer:
      'أيوه، ده تطعيم فيروسات حية مضعفة. آمن لمعظم الناس، لكن في حالات معينة مش بيتاخد (زي ضعاف المناعة).',
    answerEn:
      'Yes. It is a live attenuated viral vaccine. It is safe for most people, but in some situations it is not given (such as weakened immunity).',
  },
  {
    question: 'مين ما ينفعش ياخد تطعيم MMR؟',
    questionEn: 'Who should not receive MMR vaccine?',
    answer:
      'مش بيتاخد لو فيه حرارة، أو مشاكل في المناعة، أو أدوية مثبطة للمناعة. كمان الحامل ما ينفعش تاخده، والأفضل تأجيل الحمل لمدة شهر بعد التطعيم.',
    answerEn:
      'It is not given during fever, immune problems, or while on medicines that suppress immunity. Pregnant women should not receive it; pregnancy is best postponed for one month after vaccination.',
  },
  {
    question: 'هل التطعيم آمن في الحمل؟',
    questionEn: 'Is the vaccine safe in pregnancy?',
    answer:
      'لأ، لا يُعطى أثناء الحمل. ولو حصل بالخطأ، مفيش خطر معروف، ومش سبب لإنهاء الحمل.',
    answerEn:
      'No, it is not given during pregnancy. If given by mistake, no known harm has been shown and it is not a reason to end pregnancy.',
  },
  {
    question: 'هل المرضعة ينفع تاخد التطعيم؟',
    questionEn: 'Can a breastfeeding mother receive the vaccine?',
    answer: 'أيوه، آمن تمامًا أثناء الرضاعة.',
    answerEn: 'Yes. It is completely safe while breastfeeding.',
  },
  {
    question: 'ممكن أطعّم لو عندي حرارة؟',
    questionEn: 'Can I be vaccinated if I have a fever?',
    answer:
      'لو عندك حرارة، الأفضل نأجل التطعيم لحد ما تتحسن. كمان التطعيم مش بيتاخد لو فيه حساسية شديدة من أي مكون في اللقاح.',
    answerEn:
      'If you have a fever, it is better to postpone vaccination until you recover. Vaccination is also not given if there is a severe allergy to any vaccine component.',
  },
  {
    question: 'فين بيتحقن تطعيم MMR؟',
    questionEn: 'Where is MMR injected?',
    answer: 'بيتحقن تحت الجلد (Subcutaneous).',
    answerEn: 'It is given under the skin (subcutaneous).',
  },
  {
    question: 'هل ممكن ناخد MMR مع تطعيمات تانية؟',
    questionEn: 'Can MMR be given with other vaccines?',
    answer: 'أيوه، ينفع يتاخد في نفس اليوم مع باقي التطعيمات.',
    answerEn: 'Yes. It can be given on the same day as other vaccines.',
  },
  {
    question: 'هل ممكن ناخد التطعيم بعد التعرض للمرض؟',
    questionEn: 'Can vaccination be given after exposure to disease?',
    answer:
      'أيوه: خلال 72 ساعة من التعرض ممكن يقلل الإصابة أو يقلل شدتها. لكن لو الشخص غير محصن، لازم يتطعم حتى لو فات وقت التعرض.',
    answerEn:
      'Yes: within 72 hours of exposure it may prevent illness or reduce severity. But if the person is not immune, they should still be vaccinated even if exposure time has passed.',
  },
  {
    question: 'هل الشخص اللي أخد التطعيم ممكن ينقل العدوى؟',
    questionEn: 'Can a vaccinated person spread the disease?',
    answer:
      'لأ، الشخص اللي بياخد التطعيم ممكن ييجي له أعراض بسيطة خفيفة، لكنه غير معدي.',
    answerEn:
      'No. A vaccinated person may have mild symptoms, but they are not contagious.',
  },
  {
    question: 'هل لازم نعمل تحليل قبل التطعيم؟',
    questionEn: 'Is testing required before vaccination?',
    answer: 'لأ، مش ضروري. ولو مش معروف الحالة، الأفضل ناخد التطعيم بدل الانتظار.',
    answerEn: 'No, it is not necessary. If status is unknown, it is better to vaccinate than to wait.',
  },
  {
    question: 'هل التطعيم يسبب توحد؟',
    questionEn: 'Does the vaccine cause autism?',
    answer: 'لأ، مفيش أي علاقة بين تطعيم MMR والتوحد، وده مثبت علميًا بشكل قاطع.',
    answerEn: 'No. There is no link between MMR vaccine and autism; this is firmly established by science.',
  },
  {
    question: 'هل التطعيم بيمنع الإصابة 100%؟',
    questionEn: 'Does the vaccine prevent infection 100%?',
    answer:
      'لأ، مش بيمنع 100%، لكن بعد جرعتين بيوفر حماية عالية جدًا ضد الحصبة والنكاف والحصبة الألمانية.',
    answerEn:
      'No, it does not prevent 100%, but after two doses it provides very high protection against measles, mumps, and rubella.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم MMR آمن ومستخدم من سنين طويلة، والفوايد بتفوق المخاطر في معظم الناس.',
    answerEn:
      'Yes. MMR vaccine is safe and has been used for many years; benefits outweigh risks for most people.',
  },
];
