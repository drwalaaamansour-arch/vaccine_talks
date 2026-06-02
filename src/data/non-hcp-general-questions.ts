export type NonHcpQuestion = {
  question: string;
  answer: string;
  /** Optional section heading shown above this question */
  section?: string;
  questionEn?: string;
  answerEn?: string;
  sectionEn?: string;
};

export const generalQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هي التطعيمات الأساسية للأطفال في مصر؟',
    questionEn: 'What are the essential childhood vaccines in Egypt?',
    answer:
      'التطعيمات الأساسية للأطفال في مصر بتشمل: لقاح التهاب الكبد الوبائي ب، لقاح شلل الأطفال، لقاح الثلاثي البكتيري (الدفتيريا، السعال الديكي، التيتانوس)، لقاح الحصبة والنكاف والحصبة الألمانية، لقاح الإنفلونزا البكتيرية، ولقاح الدرن.',
    answerEn:
      'Essential childhood vaccines in Egypt include: hepatitis B vaccine, polio vaccine, DTP vaccine (diphtheria, pertussis, tetanus), MMR vaccine (measles, mumps, rubella), Hib vaccine, and BCG (tuberculosis) vaccine.',
  },
  {
    question: 'ممكن أطعّم طفلي لو كان مريض؟',
    questionEn: 'Can I vaccinate my child if they are sick?',
    answer:
      'في معظم الحالات، ممكن تطعّم طفلك حتى لو كان عنده نزلة برد خفيفة أو حمى منخفضة. لكن لازم تستشير الطبيب لو الطفل عنده مرض شديد أو حمى عالية. الطبيب هيفحص الحالة ويقرر لو آمن نكمل التطعيم ولا لأ.',
    answerEn:
      'In most cases, you can vaccinate your child even if they have a mild cold or low-grade fever. But you should consult a doctor if the child has a serious illness or high fever. The doctor will assess the situation and decide whether it is safe to proceed with vaccination.',
  },
  {
    question: 'إيه هي الآثار الجانبية الشائعة للتطعيمات؟',
    questionEn: 'What are the common side effects of vaccines?',
    answer:
      'الآثار الجانبية الشائعة للتطعيمات عادة بتكون خفيفة وبتشمل: احمرار أو تورم في مكان الحقن، حمى خفيفة، أو تهيج. الأعراض دي عادة بتروح في خلال يوم أو يومين. الآثار الجانبية الخطيرة نادرة جداً.',
    answerEn:
      'Common vaccine side effects are usually mild and include: redness or swelling at the injection site, mild fever, or fussiness. These symptoms usually go away within a day or two. Serious side effects are very rare.',
  },
  {
    question: 'التطعيمات آمنة؟',
    questionEn: 'Are vaccines safe?',
    answer:
      'آه، التطعيمات آمنة جداً وبتتختبر بدقة قبل ما تتنزل. الفوايد الصحية للتطعيمات أكتر بكتير من المخاطر المحتملة. التطعيمات بتحمي من أمراض خطيرة ممكن تسبب مضاعفات شديدة أو حتى الوفاة.',
    answerEn:
      'Yes, vaccines are very safe and are rigorously tested before they are released. The health benefits of vaccines far outweigh the potential risks. Vaccines protect against serious diseases that can cause severe complications or even death.',
  },
  {
    question: 'أعمل إيه لو فات موعد تطعيم طفلي؟',
    questionEn: 'What should I do if my child missed a vaccination appointment?',
    answer:
      'لو فات موعد تطعيم طفلك، لازم تتصل بالطبيب في أقرب وقت ممكن. مش هنبدأ الجدول من جديد لكن هنكمل. المهم إنك تكمل جدول التطعيمات بأسرع ما يمكن.',
    answerEn:
      'If your child missed a vaccination appointment, contact the doctor as soon as possible. You do not need to restart the schedule from the beginning—you continue where you left off. It is important to complete the vaccination schedule as soon as you can.',
  },
  {
    question: 'ممكن أعطي أكتر من تطعيم في نفس الوقت؟',
    questionEn: 'Can I give more than one vaccine at the same time?',
    answer:
      'آه، ممكن تعطي أكتر من تطعيم في نفس الوقت بأمان. ده مش هيأثر على فعالية التطعيمات ومش هيزيد الآثار الجانبية. في الواقع، إنك تعطي أكتر من تطعيم مع بعض بيوفر الوقت ويضمن حماية الطفل في أقرب وقت ممكن.',
    answerEn:
      'Yes, you can safely give more than one vaccine at the same time. This does not reduce how well the vaccines work and does not increase side effects. In fact, giving several vaccines together saves time and helps protect the child sooner.',
  },
  {
    question: 'إيه هي التطعيمات الموصى بيها للكبار؟',
    questionEn: 'What vaccines are recommended for adults?',
    answer:
      'التطعيمات الموصى بيها للكبار بتشمل: لقاح الإنفلونزا السنوي، لقاح التيتانوس والدفتيريا كل 10 سنين، لقاح التهاب الكبد الوبائي ب، ولقاح المكورات الرئوية للفئات المعرضة للخطر. ممكن يكون فيه تطعيمات إضافية حسب الحالة الصحية والعمر.',
    answerEn:
      'Recommended adult vaccines include: annual influenza vaccine, tetanus and diphtheria vaccine every 10 years, hepatitis B vaccine, and pneumococcal vaccine for people at higher risk. Additional vaccines may be needed depending on health status and age.',
  },
  {
    question: 'ينفع الحوامل تتطعّم؟',
    questionEn: 'Can pregnant women be vaccinated?',
    answer:
      'آه، بعض التطعيمات آمنة ومهمة للحوامل. لقاح الإنفلونزا واللقاح الثلاثي (Tdap) ولقاح RSV آمنين ومهمين أثناء الحمل. لكن لازم تتجنب التطعيمات الحية زي MMR أثناء الحمل. لازم تستشير الطبيب قبل أي تطعيم أثناء الحمل.',
    answerEn:
      'Yes, some vaccines are safe and important during pregnancy. Influenza, Tdap, and RSV vaccines are safe and recommended during pregnancy. But live vaccines such as MMR should be avoided during pregnancy. Always consult a doctor before any vaccination during pregnancy.',
  },
  {
    question: 'هو في وقت محدد ناخد فيه تطعيم الإنفلونزا؟',
    questionEn: 'Is there a specific time to get the influenza vaccine?',
    answer:
      'ممكن ناخد التطعيم أي وقت طول فترة صلاحيته مش لازم بس في شهر أكتوبر والتطعيم بيشتغل بعد الحقن بحوالي أسبوعين',
    answerEn:
      'The vaccine can be given any time while it is still in date—it is not only for October—and protection usually starts about two weeks after the injection.',
  },
];
