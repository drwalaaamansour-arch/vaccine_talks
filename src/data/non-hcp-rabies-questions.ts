import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const rabiesQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو السعار (داء الكلب)؟',
    questionEn: 'What is rabies?',
    answer:
      'السعار مرض فيروسي قاتل بيانتقل من الحيوانات للإنسان وبيصيب الجهاز العصبي المركزي. بسببه فيروس Rabies lyssavirus اللي بيهاجم المخ ويسبب التهاب حاد في الدماغ.',
    answerEn:
      'Rabies is a deadly viral disease transmitted from animals to humans that affects the central nervous system. It is caused by the rabies lyssavirus, which attacks the brain and causes severe inflammation of the brain.',
  },
  {
    question: 'إزاي بينتقل السعار؟',
    questionEn: 'How does rabies spread?',
    answer:
      'غالبًا عن طريق عضة أو خدش من حيوان مصاب — زي الكلاب، القطط، الخفافيش، الثعالب، والقوارض. الفيروس بينتقل من لعاب الحيوان للجروح أو للجلد المفتوح.',
    answerEn:
      'Usually through a bite or scratch from an infected animal—such as dogs, cats, bats, foxes, and rodents. The virus passes from the animal’s saliva into wounds or broken skin.',
  },
  {
    question: 'ليه السعار خطير؟',
    questionEn: 'Why is rabies dangerous?',
    answer:
      'لو ظهرت الأعراض، السعار تقريبًا قاتل 100% — التطعيم بعد التعرض هو الطريقة الوحيدة للوقاية. لازم نتصرف فورًا بعد أي عضة أو خدش مشكوك فيه.',
    answerEn:
      'Once symptoms appear, rabies is nearly 100% fatal—post-exposure vaccination is the only way to prevent it. You must act immediately after any suspected bite or scratch.',
  },
  {
    question: 'إيه أول حاجة أعملها بعد العضة؟',
    questionEn: 'What is the first thing to do after a bite?',
    answer:
      'اغسل الجرح فورًا بالمية والصابون لمدة 15 دقيقة على الأقل، ونظّفه كويس. بعد كده روح لأقرب مكان علاج فورًا — مش تستنى.',
    answerEn:
      'Wash the wound immediately with soap and water for at least 15 minutes and clean it thoroughly. Then go to the nearest healthcare facility right away—do not wait.',
  },
  {
    question: 'مين لازم ياخد تطعيم السعار بعد التعرض؟',
    questionEn: 'Who must receive rabies vaccination after exposure?',
    answer:
      'أي شخص اتعض أو اتخربش من حيوان ثدييات أو قارض — بغض النظر عن سنه أو لو عنده حرارة. الطبيب يحدد الجدول الكامل حسب الحالة.',
    answerEn:
      'Anyone bitten or scratched by a mammal or rodent—regardless of age or whether they have a fever. The doctor will determine the full schedule based on the case.',
  },
  {
    question: 'إيه جدول التطعيم الوقائي قبل التعرض (PrEP)؟',
    questionEn: 'What is the pre-exposure vaccination schedule (PrEP)?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'في مايو 2022، CDC حدّثت التوصيات: بقت جرعتين بس بدل 3 — وده ينطبق على كل الناس المعرضين لخطر السعار.\n\n• الجرعة الأولى: يوم 0\n• الجرعة التانية: يوم 7\n\nالسبب: الدراسات أثبتت إن جرعتين بيدوا نفس الحماية تقريبًا لحد 3 سنوات، مع تقليل التكلفة، تحسين توفر اللقاح وقت النقص، وزيادة الالتزام بالتطعيم.',
    answerEn:
      'In May 2022, the CDC updated its recommendations: two doses instead of three—for everyone at risk of rabies exposure.\n\n• First dose: Day 0\n• Second dose: Day 7\n\nReason: Studies showed that two doses provide nearly the same protection for up to 3 years, while reducing cost, improving vaccine availability during shortages, and increasing vaccination compliance.',
  },
  {
    question: 'إيه الفرق بين PrEP و PEP؟',
    questionEn: 'What is the difference between PrEP and PEP?',
    answer:
      'PEP (بعد التعرض): لو الشخص اتعرض لعضة أو خدش مشكوك فيه.\n• غير المطعّم سابقًا: HRIG (Immunoglobulin) + 4 أو 5 جرعات لقاح.\n• المطعّم وقائيًا (PrEP) قبل كده: جرعتين لقاح بس (يوم 0 ويوم 3) — من غير HRIG.\n\nPrEP (قبل التعرض): للناس المعرضين للخطر قبل أي عضة — جرعتين لقاح بس (يوم 0 ويوم 7)، من غير Immunoglobulin.',
    answerEn:
      'PEP (post-exposure): if the person was exposed to a suspected bite or scratch.\n• Not previously vaccinated: HRIG (rabies immunoglobulin) + 4 or 5 vaccine doses.\n• Previously vaccinated with PrEP: 2 vaccine doses only (Day 0 and Day 3)—without HRIG.\n\nPrEP (pre-exposure): for people at risk before any bite—2 vaccine doses only (Day 0 and Day 7), without immunoglobulin.',
  },
  {
    question: 'مين ياخد التطعيم الوقائي (PrEP)؟',
    questionEn: 'Who should receive pre-exposure vaccination (PrEP)?',
    answer:
      'مش بيتاخد روتينيًا لكل الناس — بس للمعرضين للخطر: الأطباء البيطريين، عمال المزارع، الناس اللي بيتعاملوا مع حيوانات ممكن تكون مصابة، والمسافرين لمناطق فيها انتشار عالي للسعار. بيُؤجل لو الشخص مريض بشدة (حالة متوسطة أو شديدة) — حسب تقييم الطبيب.',
    answerEn:
      'It is not given routinely to everyone—only to those at risk: veterinarians, farm workers, people who handle potentially infected animals, and travelers to areas with high rabies prevalence. It is postponed if the person is severely ill (moderate or severe illness)—as assessed by the doctor.',
  },
  {
    question: 'إيه جدول التطعيم بعد التعرض (PEP)؟',
    questionEn: 'What is the post-exposure vaccination schedule (PEP)?',
    answer:
      'للي ما اتطعّمش قبل كده: HRIG + 4 جرعات تطعيم (يوم 0، 3، 7، 14). الناس اللي عندهم ضعف مناعة ممكن يحتاجوا جرعة خامسة.\n\nللي متطعّم وقائيًا (PrEP) قبل كده: جرعتين (يوم 0 ويوم 3) — من غير HRIG.',
    answerEn:
      'For those not previously vaccinated: HRIG + 4 vaccine doses (Day 0, 3, 7, 14). People with weakened immunity may need a fifth dose.\n\nFor those previously vaccinated with PrEP: 2 doses (Day 0 and Day 3)—without HRIG.',
  },
  {
    question: 'لو اتأخرت في جرعة أو فاتتك جرعة يوم 7؟',
    questionEn: 'What if a dose is delayed or the Day 7 dose is missed?',
    answer:
      'مش محتاج تبدأ السلسلة من الأول. أي تأخير بسيط (أيام قليلة) مش مشكلة — كمّل الجرعات عادي.\n\nمثال: لو جرعة يوم 7 اتاخدت يوم 10، بتتاخد يوم 10 وبعدين باقي الجدول يكمل مع الحفاظ على الفواصل بين الجرعات.\n\nلو التأخير أسابيع، الطبيب يحدد إزاي نكمّل.',
    answerEn:
      'You do not need to restart the series. A short delay (a few days) is not a problem—continue the doses as planned.\n\nExample: if the Day 7 dose is given on Day 10, it is given on Day 10 and the rest of the schedule continues with the intervals between doses maintained.\n\nIf the delay is weeks, the doctor will determine how to proceed.',
  },
  {
    question: 'لو اتاخد التطعيم في العضلة الخلفية؟',
    questionEn: 'What if the vaccine was given in the gluteal (buttock) muscle?',
    answer:
      'الجرعة دي مش بتتحسب ولا بتعتبر صحيحة — لازم تتعاد في المكان الصح (العضل، غالبًا عضلة الكتف الدالية).\n\nلو إعادة الجرعة عملت تأخير أكتر من 3 أيام عن الجدول، ممكن يحتاج تحليل أجسام مضادة للسعار (rabies serology) بعد 7–14 يوم من آخر جرعة للتأكد من الاستجابة.',
    answerEn:
      'That dose does not count and is not considered valid—it must be repeated in the correct site (intramuscular, usually the deltoid muscle).\n\nIf repeating the dose causes a delay of more than 3 days from the schedule, rabies serology (antibody testing) may be needed 7–14 days after the last dose to confirm the immune response.',
  },
  {
    question: 'فين وإزاي بيتحقن تطعيم السعار؟',
    questionEn: 'Where and how is the rabies vaccine injected?',
    answer:
      'لازم في العضل (Intramuscular) — في عضلة الكتف الدالية أو الفخذ. مش بيتحقن في العضلة الخلفية ولا تحت الجلد — لو اتاخد كده الجرعة مش بتتحسب وبتتعاد.',
    answerEn:
      'It must be given intramuscularly—in the deltoid or thigh muscle. It should not be given in the gluteal muscle or subcutaneously—if given that way, the dose does not count and must be repeated.',
  },
  {
    question: 'هل ينفع في الحمل؟',
    questionEn: 'Can it be given during pregnancy?',
    answer:
      'أيوه، لو في تعرض أو خطر لازم يتاخد حتى لو حامل — مفيش أدلة على ضرر على الجنين وبيُعتبر آمن عند الحاجة. التطعيم الوقائي (PrEP) كمان ممكن للحامل لو خطر التعرض عالي.',
    answerEn:
      'Yes, if there is exposure or risk it must be given even during pregnancy—there is no evidence of harm to the fetus and it is considered safe when needed. Pre-exposure vaccination (PrEP) is also possible during pregnancy if exposure risk is high.',
  },
  {
    question: 'هل في موانع للتطعيم؟',
    questionEn: 'Are there contraindications to the vaccine?',
    answer:
      'بعد التعرض (PEP): مفيش موانع مطلقة — لازم يتاخد. التطعيم الوقائي (PrEP): مش للكل، ومش بيتاخد لو في مرض حاد متوسط أو شديد. لازم تبلّغ الطبيب عن أي حساسية سابقة.',
    answerEn:
      'After exposure (PEP): there are no absolute contraindications—it must be given. Pre-exposure vaccination (PrEP): not for everyone, and not given during moderate or severe acute illness. Tell the doctor about any previous allergies.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة؟',
    questionEn: 'What are the expected side effects?',
    answer:
      'الأكثر شيوعًا: ألم مكان الحقن، احمرار أو تورم، صداع، تعب، وآلام في الجسم. غالبًا بتكون بسيطة وتختفي سريعًا.',
    answerEn:
      'The most common are: pain at the injection site, redness or swelling, headache, fatigue, and body aches. These are usually mild and resolve quickly.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم السعار آمن والفوايد بتفوق المخاطر — خصوصًا بعد التعرض، لأن البديل هو مرض قاتل تقريبًا.',
    answerEn:
      'Yes, the rabies vaccine is safe and the benefits outweigh the risks—especially after exposure, because the alternative is a nearly always fatal disease.',
  },
];
