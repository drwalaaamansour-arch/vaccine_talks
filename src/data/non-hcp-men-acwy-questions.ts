import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const menAcwyQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو مرض المكورات السحائية؟',
    questionEn: 'What is meningococcal disease?',
    answer:
      'مرض المكورات السحائية عدوى بكتيرية خطيرة وسريعة التطور، بسبب البكتيريا Neisseria meningitidis (سالبة الجرام ثنائية الشكل). بيظهر غالبًا في 3 صور: التهاب السحايا (~50%)، تجرثم الدم / تسمم الدم (~30%)، والتهاب رئوي (~15%). المرض ممكن يتدهور في ساعات قليلة ويُعد حالة طبية طارئة.',
    answerEn:
      'Meningococcal disease is a serious, fast-progressing bacterial infection caused by Neisseria meningitidis (a gram-negative diplococcus). It most often presents in three forms: meningitis (~50%), bloodstream infection / sepsis (~30%), and pneumonia (~15%). The illness can worsen within hours and is a medical emergency.',
  },
  {
    question: 'إزاي بينتقل المرض؟',
    questionEn: 'How does the disease spread?',
    answer:
      'بيتنقل عن طريق رذاذ الجهاز التنفسي (من الكحة أو العطس)، والمخالطة المباشرة اللصيقة، أو من شخص حامل للبكتيريا في البلعوم الأنفي من غير أعراض. مش شديد العدوى زي الحصبة، لكنه بينتشر في البيئات القريبة زي الأسر والجامعات والمعسكرات.',
    answerEn:
      'It spreads through respiratory droplets (from coughing or sneezing), close direct contact, or from someone carrying the bacteria in the nose and throat without symptoms. It is not as contagious as measles, but it spreads in close settings such as households, universities, and camps.',
  },
  {
    question: 'ليه المرض خطير؟',
    questionEn: 'Why is the disease dangerous?',
    answer:
      'حتى مع العلاج، معدل الوفاة حوالي 10–15%. و10–20% من الناجين بيعانوا من مضاعفات طويلة المدى زي فقدان السمع، إعاقات عصبية، بتر أطراف أو أصابع، وتندبات شديدة في الجلد. المرض غالبًا بيتطور بسرعة جدًا (fulminant)، خصوصًا عند الأطفال والشباب.',
    answerEn:
      'Even with treatment, the death rate is about 10–15%. And 10–20% of survivors have long-term complications such as hearing loss, neurological disability, limb or finger amputation, and severe skin scarring. The disease often progresses very quickly (fulminant), especially in children and young people.',
  },
  {
    question: 'إيه الأنماط المصلية (Serogroups)؟',
    questionEn: 'What are the serogroups?',
    answer:
      'البكتيريا ليها أنماط حسب الكبسولة: A و B و C و W و Y و X — ودي مسؤولة عن معظم الحالات عالميًا. نسبة كل نمط بتختلف حسب العمر والمنطقة الجغرافية.',
    answerEn:
      'The bacteria have capsule-based types: A, B, C, W, Y, and X — these account for most cases worldwide. The proportion of each type varies by age and geographic region.',
  },
  {
    question: 'مين الفئات الأكثر عرضة للخطر؟',
    questionEn: 'Who is at highest risk?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'حالات طبية عالية الخطورة: استئصال أو ضعف الطحال، نقص مكونات المتممة (Complement deficiency)، استخدام مثبطات المتممة (زي eculizumab و ravulizumab)، والإصابة بفيروس HIV.\n\nعوامل مرتبطة بالتعرض: السكن المزدحم، طلاب الجامعات (خصوصًا السكن الجامعي)، المجندين العسكريين، العاملين في المختبرات، والسفر لمناطق موبوءة (زي حزام التهاب السحايا في أفريقيا أو الحج).\n\nعوامل إضافية: عدوى فيروسية حديثة في الجهاز التنفسي، التدخين (نشط أو سلبي)، وأمراض مزمنة.',
    answerEn:
      'High-risk medical conditions: spleen removal or poor spleen function, complement component deficiency, use of complement inhibitors (such as eculizumab and ravulizumab), and HIV infection.\n\nExposure-related factors: crowded living, university students (especially in dormitories), military recruits, laboratory workers, and travel to endemic areas (such as the African meningitis belt or Hajj).\n\nAdditional factors: recent respiratory viral infection, smoking (active or passive), and chronic illness.',
  },
  {
    question: 'إيه هو تطعيم MenACWY؟',
    questionEn: 'What is the MenACWY vaccine?',
    answer:
      'MenACWY تطعيم مقترن بيحمي من أربع أنماط من البكتيريا المكورات السحائية: A و C و W و Y، اللي ممكن تسبب التهاب السحايا وتسمم الدم.',
    answerEn:
      'MenACWY is a conjugate vaccine that protects against four meningococcal serogroups: A, C, W, and Y, which can cause meningitis and bloodstream infection.',
  },
  {
    question: 'إيه الفرق بين MenACWY و MenB؟',
    questionEn: 'What is the difference between MenACWY and MenB?',
    answer:
      'MenACWY بيحمي من الأنماط A و C و W و Y. MenB بيحمي من النمط B. الاتنين مهمين لكن مش نفس التطعيم — كل واحد له جدوله.',
    answerEn:
      'MenACWY protects against serogroups A, C, W, and Y. MenB protects against serogroup B. Both are important but they are not the same vaccine — each has its own schedule.',
  },
  {
    question: 'إيه الفرق بين تطعيم MenACWY المقترن وتطعيم المدارس؟',
    questionEn: 'What is the difference between conjugate MenACWY and the school vaccine?',
    answer:
      'تطعيم المدارس في مصر (متعدد السكريات) بيحمي من A و C بس. تطعيم MenACWY المقترن بيغطي A و C و W و Y، ولو اتاخد مقترن مش محتاج يتكرر مع تطعيم المدرسة في بداية كل مرحلة.',
    answerEn:
      'The school vaccine in Egypt (polysaccharide) protects against A and C only. Conjugate MenACWY covers A, C, W, and Y; if conjugate vaccine was given, it does not need to be repeated with the school vaccine at the start of each school stage.',
  },
  {
    question: 'إيه أنواع تطعيم MenACWY الموجودة في مصر؟',
    questionEn: 'What types of MenACWY vaccine are available in Egypt?',
    answer:
      'في مصر 3 أنواع مقترنة رئيسية: النوع الأول من 6 أسابيع (جرعات حسب العمر + منشطة في السنة التانية). النوع التاني من 9 شهور لـ 55 سنة (جرعتين للصغار أو جرعة واحدة بعد سنتين + منشطة عند الجامعة أو اللزوم). النوع الثالث من سنتين: جرعة واحدة + منشطة عند اللزوم.',
    answerEn:
      'In Egypt there are three main conjugate types: the first from 6 weeks of age (doses by age plus a booster in the second year). The second from 9 months to 55 years (two doses for younger children or one dose after age two plus a booster at university or when needed). The third from 2 years: one dose plus a booster when needed.',
  },
  {
    question: 'إيه Menactra في مصر؟',
    questionEn: 'What is Menactra in Egypt?',
    answer:
      'Menactra (MenACWY-D) متاح في مصر ويمكن إعطاؤه من عمر 9 شهور. اللقاح فعال ضد A و C و W و Y. لكن في الأطفال المعرضين للخطر (زي ضعف الطحال أو HIV) لازم ننتبه للتداخل مع لقاح المكورات الرئوية (PCV) في الأطفال الصغار — بعض الأنواع التانية من MenACWY ما بيحصلش معاها التداخل ده.',
    answerEn:
      'Menactra (MenACWY-D) is available in Egypt and can be given from 9 months of age. The vaccine is effective against A, C, W, and Y. However, in at-risk children (such as poor spleen function or HIV), watch for interaction with pneumococcal vaccine (PCV) in young children — some other MenACWY products do not have this interaction.',
  },
  {
    question: 'مين المفروض ياخد تطعيم MenACWY؟',
    questionEn: 'Who should receive MenACWY vaccine?',
    answer:
      'الأطفال والمراهقين حسب الجدول، المسافرين لمناطق انتشار عالي (زي حزام أفريقيا أو الحج)، طلاب الجامعة، والناس اللي عندهم خطر أعلى (زي بدون طحال، HIV، نقص المتممة، أو استخدام مثبطات المتممة) — حسب تقييم الطبيب.',
    answerEn:
      'Children and adolescents per schedule, travelers to high-incidence areas (such as the African belt or Hajj), university students, and people at higher risk (such as no spleen, HIV, complement deficiency, or complement inhibitor use) — as determined by a doctor.',
  },
  {
    question: 'هل محتاج جرعة منشطة؟',
    questionEn: 'Do I need a booster dose?',
    answer:
      'لو اتاخد التطعيم المقترن، الجرعة المنشطة بتتحدد حسب العمر ونوع اللقاح والحالة الصحية. الناس اللي عندهم خطر مستمر (زي بدون طحال) ممكن يحتاجوا منشطات دورية كل 3–5 سنوات حسب توصيات الطبيب.',
    answerEn:
      'If conjugate vaccine was given, the booster depends on age, vaccine type, and health status. People with ongoing risk (such as no spleen) may need periodic boosters every 3–5 years per doctor recommendations.',
  },
  {
    question: 'لو اتأخرت في الجرعة؟',
    questionEn: 'What if a dose was delayed?',
    answer:
      'مش محتاج تبدأ من الأول في كل الحالات. كمّل الجرعات المتبقية في أقرب وقت، والطبيب يحدد الجدول المناسب.',
    answerEn:
      'You do not always need to start over. Complete the remaining doses as soon as possible; your doctor will set the right schedule.',
  },
  {
    question: 'هل ينفع قبل عملية استئصال الطحال؟',
    questionEn: 'Can it be given before splenectomy?',
    answer:
      'أيوه، ويفضل يتاخد قبل العملية بأسبوعين لو أمكن، أو بعد العملية لو ما اتحطش قبلها — حسب تقييم الطبيب.',
    answerEn:
      'Yes. It is best given two weeks before surgery when possible, or after surgery if it was not given before — per doctor assessment.',
  },
  {
    question: 'هل ينفع للمسافرين أو الحج؟',
    questionEn: 'Is it recommended for travelers or Hajj?',
    answer:
      'أيوه، التطعيم مهم للمسافرين لمناطق فيها انتشار للمرض، ومنها رحلة الحج لمنطقة مكة — حسب المتطلبات الصحية.',
    answerEn:
      'Yes. Vaccination is important for travelers to areas where the disease circulates, including Hajj to the Mecca region — per health requirements.',
  },
  {
    question: 'إيه الوقاية بعد التعرض (Post-exposure)؟',
    questionEn: 'What is post-exposure prevention?',
    answer:
      'للمخالطين المقربين: المضادات الحيوية الوقائية ضرورية وبتتاخد فورًا. التطعيم مش بيغني عن الوقاية الدوائية — الاتنين ليهم دور، لكن المضاد الحيوي هو الأساس بعد التعرض.',
    answerEn:
      'For close contacts: preventive antibiotics are essential and should be started immediately. Vaccination does not replace drug prevention — both have a role, but antibiotics are the foundation after exposure.',
  },
  {
    question: 'ينفع يتاخد مع تطعيمات تانية؟',
    questionEn: 'Can it be given with other vaccines?',
    answer:
      'في أغلب الحالات آه، ممكن يتاخد مع تطعيمات تانية في نفس الزيارة حسب توصيات الطبيب. لكن في أطفال معرضين للخطر، لازم نراعي التداخل المحتمل مع PCV لو اللقاح Menactra.',
    answerEn:
      'In most cases yes — it can be given with other vaccines at the same visit per doctor advice. But in at-risk children, consider possible interaction with PCV if using Menactra.',
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
    question: 'فين وإزاي بيتحقن تطعيم MenACWY؟',
    questionEn: 'Where and how is MenACWY injected?',
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
      'لأ، مش بيمنع 100%، لكن بيقلل بشكل كبير خطر الإصابة بالأنماط A و C و W و Y.',
    answerEn:
      'No, it does not prevent 100%, but it greatly reduces the risk of disease from serogroups A, C, W, and Y.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم MenACWY آمن ومستخدم من سنين طويلة، والفوايد بتفوق المخاطر في معظم الناس.',
    answerEn:
      'Yes. MenACWY vaccine is safe and has been used for many years; benefits outweigh risks for most people.',
  },
];
