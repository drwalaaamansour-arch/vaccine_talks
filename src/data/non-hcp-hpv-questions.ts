import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const hpvQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو فيروس الورم الحليمي البشري (HPV)؟',
    questionEn: 'What is human papillomavirus (HPV)?',
    answer:
      'HPV فيروس شائع جدًا، ومن أشهر أسباب السنطات التناسلية وسرطان عنق الرحم. فيه أكتر من 200 فصيلة من الفيروس، ومش كلها خطيرة.',
    answerEn:
      'HPV is a very common virus and one of the main causes of genital warts and cervical cancer. There are more than 200 types of the virus, and not all are dangerous.',
  },
  {
    question: 'إزاي بينتقل فيروس HPV؟',
    questionEn: 'How does HPV spread?',
    answer:
      'بيتنقل غالبًا عن طريق الاتصال الجنسي أو ملامسة الجلد في منطقة التناسل. ممكن ينتقل حتى لو مفيش أعراض ظاهرة على الشخص.',
    answerEn:
      'It usually spreads through sexual contact or skin contact in the genital area. It can spread even when the person has no visible symptoms.',
  },
  {
    question: 'إيه أخطار فيروس HPV؟',
    questionEn: 'What are the risks of HPV?',
    answer:
      'بعض الفصائل ممكن تسبب سنطات تناسلية، وبعضها ممكن يسبب سرطانات زي سرطان عنق الرحم، الفرج، المهبل، القضيب، أو الشرج — خصوصًا الفصائل 16 و 18.',
    answerEn:
      'Some types can cause genital warts; others can cause cancers such as cervical, vulvar, vaginal, penile, or anal cancer — especially types 16 and 18.',
  },
  {
    question: 'هل في أنواع أخطر من غيرها؟',
    questionEn: 'Are some types more dangerous than others?',
    answer:
      'أيوه، في أنواع معينة أهمها: أنواع بتسبب أغلب السرطانات (زي 16 و 18)، وأنواع بتسبب الثآليل التناسلية (زي 6 و 11).',
    answerEn:
      'Yes. Important types include those that cause most cancers (such as 16 and 18) and those that cause genital warts (such as 6 and 11).',
  },
  {
    question: 'هل في علاج لفيروس HPV نفسه؟',
    questionEn: 'Is there treatment for HPV itself?',
    answer:
      'لأ، مفيش علاج بيقضي على الفيروس نفسه. لكن بنعالج المضاعفات زي الثآليل أو التغيرات اللي ممكن تحصل في الخلايا.',
    answerEn:
      'No, there is no treatment that clears the virus itself. But we treat complications such as warts or cell changes.',
  },
  {
    question: 'هل في تطعيم ضد HPV؟',
    questionEn: 'Is there a vaccine against HPV?',
    answer:
      'أيوه، التطعيم بيحمي من أخطر فصائل الفيروس وبيقلل خطر السنطات وبعض السرطانات المرتبطة بيه.',
    answerEn:
      'Yes. Vaccination protects against the most dangerous types and reduces the risk of warts and some related cancers.',
  },
  {
    question: 'إيه أنواع تطعيم HPV الموجودة في مصر؟',
    questionEn: 'What HPV vaccines are available in Egypt?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'في مصر نوعين رئيسيين: النوع الأول بيحمي من فصيلتين (16 و 18) وده للبنات والسيدات فقط — مسؤولين عن سرطان عنق الرحم والفرج والمهبل. النوع التاني بيحمي من 4 فصائل (6 و 11 و 16 و 18) وده للجنسين — بيحمي من السنطات التناسلية وكمان سرطانات عنق الرحم والفرج والمهبل والقضيب والشرج.',
    answerEn:
      'In Egypt there are two main types: the first protects against two types (16 and 18) for girls and women only — responsible for cervical, vulvar, and vaginal cancer. The second protects against four types (6, 11, 16, and 18) for both sexes — protecting against genital warts and also cervical, vulvar, vaginal, penile, and anal cancers.',
  },
  {
    question: 'من إمتى بيتاخد تطعيم HPV؟',
    questionEn: 'From what age is HPV vaccine given?',
    answer:
      'التطعيم من سن 9 سنوات فيما فوق. الأفضل يتاخد قبل بداية النشاط الجنسي علشان الحماية تكون أقوى.',
    answerEn:
      'Vaccination is from 9 years of age and older. It works best before sexual activity begins for stronger protection.',
  },
  {
    question: 'تطعيم HPV بيتاخد كام جرعة؟',
    questionEn: 'How many HPV vaccine doses are needed?',
    answer:
      'من سن 9 لحد 14 سنة: جرعتين بينهم 6 شهور. فوق سن 14 سنة: 3 جرعات حسب الجدول اللي الطبيب بيحدده.',
    answerEn:
      'From 9 through 14 years: two doses 6 months apart. Above 14 years: three doses per the schedule your doctor sets.',
  },
  {
    question: 'لو الطفل خد جرعتين بس والفاصل بينهم قليل؟',
    questionEn: 'What if two doses were given too close together?',
    answer:
      'لو الجرعتين كانوا قريبين قوي (أقل من 5 شهور)، لازم جرعة تالتة تكمل الحماية.',
    answerEn:
      'If the two doses were too close (less than 5 months apart), a third dose is needed to complete protection.',
  },
  {
    question: 'لو اتأخرت في الجرعات؟',
    questionEn: 'What if doses were delayed?',
    answer: 'مفيش داعي نعيد من الأول، بنكمّل عادي من نفس النقطة.',
    answerEn: 'There is no need to start over; continue from where you left off.',
  },
  {
    question: 'لو الجرعات اتقطعت فترة طويلة؟',
    questionEn: 'What if there was a long gap between doses?',
    answer: 'مفيش داعي نبدأ من الأول، بنكمّل عادي مهما كان الوقت فات.',
    answerEn: 'There is no need to start over; continue as usual no matter how much time has passed.',
  },
  {
    question: 'هل تطعيم HPV للبنات بس ولا للولاد كمان؟',
    questionEn: 'Is HPV vaccine for girls only or boys too?',
    answer:
      'التطعيم ثنائي الفصائل (16–18) للإناث فقط. التطعيم رباعي الفصائل (6–11–16–18) ينفع للجنسين.',
    answerEn:
      'The bivalent vaccine (16–18) is for females only. The quadrivalent vaccine (6–11–16–18) can be given to both sexes.',
  },
  {
    question: 'هل لازم نعمل تحليل قبل التطعيم؟',
    questionEn: 'Is testing required before vaccination?',
    answer:
      'لأ، مفيش تحليل يحدد المناعة ضد كل أنواع الفيروس، فبنطعم مباشرة بدون فحوصات مسبقة.',
    answerEn:
      'No. There is no test that shows immunity to all virus types, so we vaccinate directly without prior screening.',
  },
  {
    question: 'هل التطعيم يعالج الإصابة الموجودة؟',
    questionEn: 'Does the vaccine treat existing infection?',
    answer:
      'لأ، التطعيم بيحمي من الإصابة المستقبلية فقط، لكنه لا يعالج فيروس موجود بالفعل.',
    answerEn:
      'No. Vaccination protects against future infection only; it does not treat virus already present.',
  },
  {
    question: 'لو كان عندي HPV قبل كده، أحتاج التطعيم؟',
    questionEn: 'If I had HPV before, do I still need vaccination?',
    answer:
      'أيوه، لأن التطعيم بيحمي من أنواع تانية ممكن ما تكونش اتعرضت لها قبل كده.',
    answerEn:
      'Yes, because vaccination protects against other types you may not have been exposed to before.',
  },
  {
    question: 'هل التطعيم بيغني عن فحص عنق الرحم (Pap smear)؟',
    questionEn: 'Does vaccination replace cervical screening (Pap smear)?',
    answer:
      'لأ، التطعيم مهم جدًا لكن مش بديل لفحص عنق الرحم الدوري للسيدات حسب توصيات الطبيب.',
    answerEn:
      'No. Vaccination is very important but does not replace routine cervical screening for women per doctor recommendations.',
  },
  {
    question: 'هل التطعيم آمن أثناء الحمل؟',
    questionEn: 'Is the vaccine safe during pregnancy?',
    answer:
      'لا يُنصح به أثناء الحمل، لكن لو اتاخدت جرعة بالخطأ مفيش مشكلة، ونكمّل بعد الولادة.',
    answerEn:
      'It is not recommended during pregnancy, but if a dose was given by mistake there is no problem; complete the series after delivery.',
  },
  {
    question: 'هل المرضعة تقدر تاخد التطعيم؟',
    questionEn: 'Can a breastfeeding mother receive the vaccine?',
    answer: 'أيوه، آمن أثناء الرضاعة الطبيعية.',
    answerEn: 'Yes. It is safe during breastfeeding.',
  },
  {
    question: 'هل ينفع يتاخد مع تطعيمات تانية؟',
    questionEn: 'Can it be given with other vaccines?',
    answer: 'أيوه، ممكن يتاخد في نفس الزيارة مع تطعيمات تانية بشكل طبيعي.',
    answerEn: 'Yes. It can be given at the same visit as other vaccines as usual.',
  },
  {
    question: 'ممكن أطعّم لو عندي حرارة؟',
    questionEn: 'Can I be vaccinated if I have a fever?',
    answer:
      'لو عندك حرارة، الأفضل نأجل التطعيم لحد ما تتحسن. كمان التطعيم مش بيتاخد لو فيه حساسية من أي مكون في اللقاح.',
    answerEn:
      'If you have a fever, it is better to postpone vaccination until you recover. Vaccination is also not given if there is allergy to any vaccine component.',
  },
  {
    question: 'فين بيتحقن تطعيم HPV؟',
    questionEn: 'Where is HPV vaccine injected?',
    answer: 'بيتحقن في عضلة الكتف.',
    answerEn: 'It is injected into the shoulder muscle.',
  },
  {
    question: 'هل لازم نعيد التطعيم لو اتاخد بطريقة غلط (زي تحت الجلد بدل العضل)؟',
    questionEn: 'Must vaccination be repeated if given incorrectly (e.g. under skin instead of muscle)?',
    answer: 'أيوه، لازم يتكرر بالحقن الصحيح في العضل لضمان الفعالية.',
    answerEn: 'Yes. It should be repeated with correct intramuscular injection to ensure effectiveness.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم HPV آمن ومستخدم من سنين طويلة، وبيساعد في الوقاية من أمراض خطيرة مرتبطة بالفيروس.',
    answerEn:
      'Yes. HPV vaccine is safe and has been used for many years; it helps prevent serious diseases linked to the virus.',
  },
];
