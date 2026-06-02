import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const herpesZosterQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو الحزام الناري (Herpes Zoster / Shingles)؟',
    questionEn: 'What is herpes zoster (shingles)?',
    answer:
      'مرض بيسببه فيروس الحماق النطاقي (Varicella-zoster) — نفس الفيروس اللي بيسبب الجديري المائي. بيظهر كطفح جلدي مؤلم على شكل حزام في منطقة واحدة من الجسم، وغالبًا بيكون على جنب واحد بس.',
    answerEn:
      'An illness caused by varicella-zoster virus—the same virus that causes chickenpox. It appears as a painful band-like rash in one area of the body, usually on one side only.',
  },
  {
    question: 'إيه سبب الحزام الناري؟',
    questionEn: 'What causes shingles?',
    answer:
      'الفيروس بيفضل كامن في الجسم بعد إصابة قديمة بالجديري أو حتى بعد تطعيم الجديري. مع الوقت — خصوصًا مع التقدم في السن أو ضعف المناعة — ممكن ينشط تاني ويسبب الحزام الناري.',
    answerEn:
      'The virus stays dormant in the body after past chickenpox or even after varicella vaccination. Over time—especially with aging or weakened immunity—it can reactivate and cause shingles.',
  },
  {
    question: 'هل ينتقل الحزام الناري من شخص لشخص؟',
    questionEn: 'Can shingles spread from person to person?',
    answer:
      'الحزام الناري مش بيتنقل مباشرة من مريض لآخر. لكن لو شخص ما أصابش بالجديري قبل كده (ولا اتطعّم) اتعرض مباشرة لحبوب شخص عنده حزام ناري، ممكن يجيله جديري — مش حزام ناري.\n\nتغطية الحبوب بتقلل احتمال نقل الفيروس.',
    answerEn:
      'Shingles does not spread directly from one patient to another. But if someone who never had chickenpox (and was not vaccinated) has direct contact with shingles blisters, they may get chickenpox—not shingles.\n\nCovering the blisters reduces the chance of spreading the virus.',
  },
  {
    question: 'شخص عنده حزام ناري — يروح الشغل أو المدرسة؟',
    questionEn: 'Someone with shingles—can they go to work or school?',
    answer:
      'لو الحبوب متغطية تمامًا ومفيش تلامس قريب، ممكن يكمل طالما المناعة سليمة — مع الاهتمام بالنظافة وغسل الإيد بعد لمس الحبوب.\n\nلو مش ممكن تغطيتها أو تجنب التلامس، لازم يقعد في البيت لحد ما الحبوب تنشف وتتحول لقشور.',
    answerEn:
      'If blisters are fully covered and close contact can be avoided, they may continue if immunity is normal—with good hygiene and hand washing after touching lesions.\n\nIf covering or avoiding contact is not possible, they should stay home until blisters have dried and crusted over.',
  },
  {
    question: 'ليه التطعيم مهم؟',
    questionEn: 'Why is vaccination important?',
    answer:
      'الحزام الناري مؤلم وممكن يسبب مضاعفات — زي ألم الأعصاب المستمر بعد المرض (PHN). التطعيم بيقلل خطر الإصابة بنسبة كبيرة (حوالي 97%) وبيقلل شدة الألم لو حصلت إصابة.',
    answerEn:
      'Shingles is painful and can cause complications—such as long-lasting nerve pain after the illness (PHN). Vaccination greatly reduces the risk of shingles (about 97%) and lessens pain severity if infection still occurs.',
  },
  {
    question: 'إيه هو تطعيم الحزام الناري؟',
    questionEn: 'What is the shingles vaccine?',
    answer:
      'Shingrix (RZV) — لقاح معاد تركيبه (Recombinant) مش فيروس حي. بيُعطى في العضل (IM)، ومتوفر في مصر.',
    answerEn:
      'Shingrix (RZV)—a recombinant vaccine, not a live virus. It is given in the muscle (IM) and is available in Egypt.',
  },
  {
    question: 'مين المفروض ياخد تطعيم الحزام الناري؟',
    questionEn: 'Who should receive shingles vaccination?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      '• البالغين من 50 سنة فما فوق (مناعة سليمة) — حتى لو أصيبوا بالجديري أو الحزام الناري قبل كده.\n\n• من 18 سنة فما فوق لو في ضعف أو قمع مناعة بسبب مرض أو علاج — حسب النشرة المصرية وتوصيات الطبيب.',
    answerEn:
      '• Adults 50 years and older (normal immunity)—even if they had chickenpox or shingles before.\n\n• From 18 years if there is immune weakness or suppression due to illness or treatment—per Egyptian labeling and the doctor’s advice.',
  },
  {
    question: 'إيه جدول الجرعات؟',
    questionEn: 'What is the dosing schedule?',
    answer:
      'جرعتين:\n\n• الفرق الموصى به: 2–6 شهور بين الجرعتين.\n• أقل فرق مسموح: 4 أسابيع.\n\nلو تأخرت الجرعة التانية أكتر من 6 شهور، نكمل الجرعة التانية من غير ما نبدأ السلسلة من الأول.',
    answerEn:
      'Two doses:\n\n• Recommended interval: 2–6 months between doses.\n• Minimum interval: 4 weeks.\n\nIf the second dose is delayed more than 6 months, complete the second dose without restarting the series.',
  },
  {
    question: 'هل في حد أقصى للسن؟',
    questionEn: 'Is there an upper age limit?',
    answer:
      'لأ. خطر الحزام الناري وألم الأعصاب بعده بيزيد مع السن — واللقاح فعّال حتى فوق 80 سنة.',
    answerEn:
      'No. Risk of shingles and post-shingles nerve pain increases with age—and the vaccine is effective even above 80 years.',
  },
  {
    question: 'هل لازم نسأل لو الشخص أصيب بالجديري قبل كده؟',
    questionEn: 'Must we ask if the person had chickenpox before?',
    answer:
      'للناس من 50 سنة فما فوق (مناعة سليمة): لأ — نطعّم من غير ما نسأل عن تاريخ الجديري أو نعمل تحليل.\n\nلضعاف المناعة من 18 سنة: الأفضل يكون في دليل على إصابة سابقة بالجديري أو تطعيم جديري — حسب تقييم الطبيب.',
    answerEn:
      'For people 50 and older (normal immunity): no—vaccinate without asking chickenpox history or doing a blood test.\n\nFor immunocompromised people from 18 years: evidence of prior chickenpox or varicella vaccination is preferred—per the doctor’s assessment.',
  },
  {
    question: 'لو الشخص أخد لقاح الجديري (Varicella) ومش أصيب بالجديري؟',
    questionEn: 'If the person received varicella vaccine but never had chickenpox?',
    answer:
      'ممكن ياخد Shingrix. خطر الحزام الناري أقل من اللي أصيبوا بالجديري الطبيعي، لكن لسه ممكن يحصل — والتطعيم مسموح.',
    answerEn:
      'They can receive Shingrix. Shingles risk is lower than after natural chickenpox, but it can still occur—and vaccination is allowed.',
  },
  {
    question: 'لو الشخص ما أصابش بالجديري ولا اتطعّم؟',
    questionEn: 'If the person never had chickenpox and was not vaccinated?',
    answer:
      'مش معرض لخطر الحزام الناري — Shingrix مش بديل لتطعيم الجديري. الأفضل ياخد جرعتين لقاح الجديري (Varicella) حسب العمر.',
    answerEn:
      'They are not at risk of shingles—Shingrix is not a substitute for varicella vaccination. They should receive two doses of varicella vaccine according to age.',
  },
  {
    question: 'لو الشخص أصيب بالحزام الناري قبل كده؟',
    questionEn: 'If the person had shingles before?',
    answer:
      'أيوه، يُنصح بالتطعيم — لكن نأجل لحد ما ينتهي المرض الحاد والحبوب تتقشر والأعراض تتحسن.',
    answerEn:
      'Yes, vaccination is recommended—but delay until the acute illness has ended, blisters have crusted, and symptoms have improved.',
  },
  {
    question: 'هل اللقاح بيمنع ألم الأعصاب بعد الحزام الناري (PHN)؟',
    questionEn: 'Does the vaccine prevent post-shingles nerve pain (PHN)?',
    answer:
      'أيوه. في الدراسات، Shingrix قلّل خطر PHN بحوالي 91% — ولو حصل حزام ناري بعد التطعيم، الألم غالبًا أخف.',
    answerEn:
      'Yes. In studies, Shingrix reduced PHN risk by about 91%—and if shingles occurs after vaccination, pain is usually milder.',
  },
  {
    question: 'هل Shingrix ممكن يسبب حزام ناري؟',
    questionEn: 'Can Shingrix cause shingles?',
    answer:
      'لأ. اللقاح فيه جزء صغير من الفيروس بس — مفيش فيروس حي، ومش بيسبب الحزام الناري.',
    answerEn:
      'No. The vaccine contains only a small part of the virus—there is no live virus, and it does not cause shingles.',
  },
  {
    question: 'ضعاف المناعة — اللقاح آمن؟',
    questionEn: 'Weakened immunity—is the vaccine safe?',
    answer:
      'أيوه. Shingrix لقاح معاد تركيبه (مش حي) — وموصى به لضعاف المناعة من 18 سنة. الفعالية ممكن تختلف حسب نوع وشدة ضعف المناعة.',
    answerEn:
      'Yes. Shingrix is recombinant (not live) and is recommended for immunocompromised people from 18 years. Effectiveness may vary with type and severity of immune suppression.',
  },
  {
    question: 'ينفع يتاخد مع الإنفلونزا أو المكورات الرئوية؟',
    questionEn: 'Can it be given with influenza or pneumococcal vaccines?',
    answer:
      'أيوه. ممكن في نفس الزيارة — كل لقاح في مكان مختلف. ممكن الآثار الجانبية تكون أقوى شوية لو أكتر من لقاح فيه Adjuvant في نفس اليوم.',
    answerEn:
      'Yes. They can be given at the same visit—each vaccine in a different site. Side effects may be somewhat stronger if more than one adjuvanted vaccine is given the same day.',
  },
  {
    question: 'الحمل والرضاعة',
    questionEn: 'Pregnancy and breastfeeding',
    answer:
      'مفيش توصية رسمية للحامل — الأفضل تأجيل التطعيم لبعد الولادة.\n\nالرضاعة الطبيعية: مفيش مانع — الأم ممكن تاخد اللقاح عادي.',
    answerEn:
      'There is no formal recommendation during pregnancy—vaccination is best delayed until after delivery.\n\nBreastfeeding: no barrier—the mother can receive the vaccine as usual.',
  },
  {
    question: 'مين ما ينفعش ياخد التطعيم؟',
    questionEn: 'Who should not receive the vaccine?',
    answer:
      'حساسية شديدة من أي مكون في اللقاح، أو من جرعة سابقة. لو في مرض حاد (حرارة عالية أو حزام ناري نشط)، نأجل لحد ما يتحسن.',
    answerEn:
      'Severe allergy to any vaccine component or to a previous dose. If there is acute illness (high fever or active shingles), delay until recovery.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة؟',
    questionEn: 'What side effects are expected?',
    answer:
      'الأكثر شيوعًا: ألم وانتفاخ مكان الحقن، تعب، حرارة، أو وجع في العضلات — غالبًا بسيطة وتختفي في يوم أو اتنين. عند ضعاف المناعة ممكن تكون أقوى شوية.',
    answerEn:
      'Most common: injection-site pain and swelling, tiredness, fever, or muscle aches—usually mild and gone in a day or two. In immunocompromised people they may be somewhat stronger.',
  },
  {
    question: 'هل أدوية الفيروسات (زي Acyclovir) بتأثر على اللقاح؟',
    questionEn: 'Do antiviral medicines (such as Acyclovir) affect the vaccine?',
    answer:
      'لأ — Acyclovir و Valacyclovir و Famciclovir مش بيأثروا على Shingrix لأنه مش فيروس حي. ممكن يتاخد مع العلاج حسب تقييم الطبيب.',
    answerEn:
      'No—Acyclovir, Valacyclovir, and Famciclovir do not affect Shingrix because it is not a live-virus vaccine. It can be given alongside treatment per the doctor’s assessment.',
  },
  {
    question: 'هل Shingrix بيحمي من الجديري؟',
    questionEn: 'Does Shingrix protect against chickenpox?',
    answer:
      'لأ. Shingrix للوقاية من الحزام الناري بس — مش بديل لتطعيم الجديري، ومش بيُعدّ دليل على مناعة ضد الجديري.',
    answerEn:
      'No. Shingrix is only for shingles prevention—not a substitute for varicella vaccination, and it does not count as proof of immunity to chickenpox.',
  },
];
