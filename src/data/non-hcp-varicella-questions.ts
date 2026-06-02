import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

export const varicellaQuestions: NonHcpQuestion[] = [
  {
    question: 'إيه هو الجديري المائي (Varicella)؟',
    questionEn: 'What is varicella (chickenpox)?',
    answer:
      'الجديري المائي (Chickenpox) مرض فيروسي شديد العدوى، بيسبب طفح جلدي بحكة وبثور مليانة سائل، مع حرارة وتعب. بينتشر بسرعة — خصوصًا بين الأطفال.',
    answerEn:
      'Varicella (chickenpox) is a highly contagious viral illness that causes an itchy rash with fluid-filled blisters, along with fever and tiredness. It spreads quickly—especially among children.',
  },
  {
    question: 'فيروس الجديري المائي بيتنقل إزاي؟ وبيعدي لحد إمتى؟',
    questionEn: 'How does varicella spread, and how long is someone contagious?',
    answer:
      'فيروس الجديري شديد العدوى جدًا، وبيتنقل عن طريق:\n\n• الرذاذ في الهواء (الكحة أو العطس)\n• التلامس المباشر مع الحبوب أو السوائل اللي جوّاها\n• ملامسة إفرازات من حزام ناري (Shingles)\n\nالشخص بيكون معدي من 1–2 يوم قبل ظهور الطفح، ويستمر في نقل العدوى لحد ما كل الحبوب تنشف وتتحول لقشور — وده غالبًا 4–7 أيام بعد ظهور الطفح.',
    answerEn:
      'The varicella virus is very contagious and spreads through:\n\n• Airborne droplets (coughing or sneezing)\n• Direct contact with blisters or their fluid\n• Contact with secretions from shingles lesions\n\nA person is contagious from 1–2 days before the rash appears and can spread the virus until all blisters have dried and crusted over—usually 4–7 days after the rash starts.',
  },
  {
    question: 'هل الطفل المعدي يروح المدرسة؟',
    questionEn: 'Can a child with varicella go to school?',
    answer:
      'لو عنده جديري أو شك فيه: لازم يقعد في البيت، ويرجع بعد ما كل الحبوب تنشف وتتحول لقشور.',
    answerEn:
      'If they have chickenpox or it is suspected: they should stay home and return only after all blisters have dried and crusted over.',
  },
  {
    question: 'ليه التطعيم مهم؟',
    questionEn: 'Why is vaccination important?',
    answer:
      'التطعيم بيقلل بشكل كبير خطر الإصابة والمضاعفات. جرعتين بتوفر حماية أقوى من جرعة واحدة — وده السبب في توصية الجرعتين دلوقتي.',
    answerEn:
      'Vaccination greatly reduces the risk of infection and complications. Two doses provide stronger protection than one—that is why two-dose schedules are recommended now.',
  },
  {
    question: 'طفل أقل من سنة واتعرض للجديري — نعمل إيه؟',
    questionEn: 'A child under one year was exposed to varicella—what should we do?',
    answer:
      'مفيش لقاح جديري قبل عمر 12 شهر، ومش بنستخدمه حتى كوقاية بعد التعرض. الطفل غالبًا ما بياخدش أي علاج وقائي — ولو ظهر المرض ممكن يتعالج بأدوية مضادة للفيروس حسب الحالة وتقييم الطبيب.',
    answerEn:
      'There is no varicella vaccine before 12 months of age, and it is not used even as post-exposure prevention. The child usually does not receive preventive treatment—if illness develops, antiviral medicines may be used depending on the case and the doctor’s assessment.',
  },
  {
    question: 'هل ندي لقاح الجديري قبل السفر؟',
    questionEn: 'Should we give varicella vaccine before travel?',
    answer:
      'لأ. مسموح قبل السفر ندي لقاح الحصبة (MMR) من 6 شهور، لكن لقاح الجديري لا يُعطى قبل عمر سنة في أي حالة.',
    answerEn:
      'No. MMR may be given from 6 months before travel, but varicella vaccine is not given before one year of age in any situation.',
  },
  {
    question: 'إيه هو تطعيم الجديري المائي؟',
    questionEn: 'What is the varicella vaccine?',
    answer:
      'تطعيم حي مضعّف ضد فيروس الجديري (Varicella-zoster). بيُعطى تحت الجلد (SC) — مش في العضل.',
    answerEn:
      'A live attenuated vaccine against varicella-zoster virus. It is given under the skin (subcutaneous)—not in the muscle.',
  },
  {
    question: 'تطعيم الجديري بيتاخد إمتى؟',
    questionEn: 'When is varicella vaccine given?',
    section: 'التطعيم',
    sectionEn: 'Vaccination',
    answer:
      'من سن سنة. في مصر بيتاخد مع تطعيمات السنة (MMR) — إما في نفس اليوم أو نفصل بينهم 28 يوم (شهر).',
    answerEn:
      'From one year of age. In Egypt it is given with the 12-month vaccines (MMR)—either on the same day or separated by 28 days (one month).',
  },
  {
    question: 'إيه جدول الجرعات؟',
    questionEn: 'What is the dosing schedule?',
    answer:
      'جرعتين:\n\n• الأطفال: أقل فرق 4 أسابيع، والأفضل 3 شهور بين الجرعتين.\n• الكبار (أكبر من 13 سنة): جرعتين بينهم شهر.',
    answerEn:
      'Two doses:\n\n• Children: at least 4 weeks apart; 3 months between doses is preferred.\n• Adults (over 13 years): two doses one month apart.',
  },
  {
    question: 'ينفع يتاخد مع MMR في نفس اليوم؟',
    questionEn: 'Can it be given with MMR on the same day?',
    answer:
      'أيوه، ممكن في نفس اليوم. لو مش في نفس اليوم، لازم نفصل 28 يوم (4 أسابيع) بين تطعيمات الفيروسات الحية.',
    answerEn:
      'Yes, they can be given on the same day. If not on the same day, live-virus vaccines should be separated by 28 days (4 weeks).',
  },
  {
    question: 'هل ممكن نستخدم اللقاح بعد التعرض للفيروس؟',
    questionEn: 'Can the vaccine be used after exposure to the virus?',
    answer:
      'أيوه، لكن بشروط — للأطفال من سنة فما فوق:\n\n• الأفضل خلال 3 أيام من التعرض\n• ممكن يفيد لحد 5 أيام\n\nلو عدى الوقت، بنبدأ التطعيم عادي طالما الطفل أكبر من سنة — حسب تقييم الطبيب.',
    answerEn:
      'Yes, with conditions—for children from one year and up:\n\n• Best within 3 days of exposure\n• May still help up to 5 days\n\nIf that window has passed, routine vaccination can start as long as the child is over one year—per the doctor’s assessment.',
  },
  {
    question: 'لو الطفل جاله جديري قبل كده؟',
    questionEn: 'If the child already had chickenpox?',
    answer:
      'لو التشخيص مؤكد → الطفل يعتبر عنده مناعة ومش محتاج لقاح.\n\nلو في شك → الأفضل ناخد اللقاح (مفيش ضرر).\n\nلو الطفل عنده شوية حبوب بسيطة جدًا: حتى لو الحالة خفيفة، غالبًا برضه بيكتسب مناعة — لكن لو مش متأكدين، نطعّم عادي.',
    answerEn:
      'If diagnosis is confirmed → the child is considered immune and does not need vaccine.\n\nIf uncertain → vaccination is still recommended (no harm).\n\nIf the child had only a few mild spots: even a mild case usually confers immunity—but if unsure, vaccinate as usual.',
  },
  {
    question: 'هل الطفل اللي أخد اللقاح ممكن يجيله جديري؟',
    questionEn: 'Can a vaccinated child still get chickenpox?',
    answer:
      'أحيانًا ممكن يحصل «حالة خفيفة جدًا» (Breakthrough) — بيكون أقل شدة بكتير وعدد الحبوب قليل مقارنة بالجديري الطبيعي.',
    answerEn:
      'Sometimes a very mild breakthrough case can occur—much less severe, with far fewer blisters than natural chickenpox.',
  },
  {
    question: 'الحمل ولقاح الجديري',
    questionEn: 'Pregnancy and varicella vaccine',
    answer:
      'اللقاح فيروس حي — ممنوع أثناء الحمل. يُفضّل تأجيل الحمل شهر بعد كل جرعة.\n\nلو حصلت جرعة بالغلط أثناء الحمل: غالبًا مفيش ضرر على الجنين ومش سبب لإنهاء الحمل — لكن لازم استشارة الطبيب.\n\nبعد الولادة: الأم اللي مش محصنة تاخد جرعتين.',
    answerEn:
      'The vaccine is a live virus—it must not be given during pregnancy. Pregnancy should ideally be delayed one month after each dose.\n\nIf a dose was given by mistake during pregnancy: harm to the fetus is unlikely and it is not a reason to end pregnancy—but medical advice is essential.\n\nAfter delivery: an unvaccinated mother should receive two doses.',
  },
  {
    question: 'الرضاعة الطبيعية',
    questionEn: 'Breastfeeding',
    answer:
      'مفيش أي مشكلة — الأم ممكن تاخد اللقاح عادي. انتقال الفيروس للطفل نادر جدًا جدًا.',
    answerEn:
      'No problem—the mother can receive the vaccine as usual. Transmission of virus to the infant is extremely rare.',
  },
  {
    question: 'لو اتاخد اللقاح بالغلط بدري (أقل من سنة)؟',
    questionEn: 'If the vaccine was given too early (under one year) by mistake?',
    answer:
      'الجرعة دي مش بتتحسب، ولازم تتكرر بعد عمر سنة.',
    answerEn:
      'That dose does not count and must be repeated after one year of age.',
  },
  {
    question: 'لو ظهر طفح بعد التطعيم؟',
    questionEn: 'If a rash appears after vaccination?',
    answer:
      'ممكن يحصل طفح خفيف بعد التطعيم. لو ظهر، يُفضّل إبعاد الشخص عن الحوامل وضعاف المناعة لحد ما يتحسن.',
    answerEn:
      'A mild rash can occur after vaccination. If it appears, the person should avoid close contact with pregnant women and immunocompromised people until it clears.',
  },
  {
    question: 'مين ما ينفعش ياخد التطعيم؟',
    questionEn: 'Who should not receive the vaccine?',
    answer:
      'مش بيتاخد لو: حرارة عالية، مشاكل في المناعة، أو أدوية مثبطة للمناعة — لأن التطعيم حي.',
    answerEn:
      'Not given if: high fever, immune system problems, or immunosuppressive medicines—because it is a live vaccine.',
  },
  {
    question: 'الأطفال اللي عندهم مناعة ضعيفة',
    questionEn: 'Children with weakened immunity',
    answer:
      'زي السرطانات، أدوية مثبطة للمناعة، أو جرعات عالية من الكورتيزون أو الميثوتركسيت. في الحالات دي: اللقاح ممكن يكون ممنوع أو يحتاج تقييم طبي.',
    answerEn:
      'Such as cancer, immunosuppressive drugs, or high doses of corticosteroids or methotrexate. In these cases the vaccine may be contraindicated or needs medical assessment.',
  },
  {
    question: 'أدوية معينة لازم ننتبه لها',
    questionEn: 'Certain medicines to watch for',
    answer:
      'بعض الأدوية تقلل فعالية اللقاح — زي مضادات الفيروسات (Acyclovir) لو اتاخدت قريب من التطعيم أو بعده. الأفضل استشارة الطبيب عن التوقيت.',
    answerEn:
      'Some medicines reduce vaccine effectiveness—such as antivirals (Acyclovir) if taken close to or after vaccination. Ask the doctor about timing.',
  },
  {
    question: 'إيه الآثار الجانبية المتوقعة؟',
    questionEn: 'What side effects are expected?',
    answer:
      'غالبًا بسيطة: ألم مكان الحقن، حرارة خفيفة، أو طفح بسيط — وبتختفي سريعًا في معظم الحالات.',
    answerEn:
      'Usually mild: injection-site pain, low fever, or a mild rash—they usually resolve quickly in most cases.',
  },
  {
    question: 'هل التطعيم بيمنع الإصابة 100%؟',
    questionEn: 'Does vaccination prevent infection 100%?',
    answer:
      'لأ، مش بيمنع 100%، لكن بيقلل بشكل كبير خطر الإصابة والجديري الشديد.',
    answerEn:
      'No, it does not prevent 100%, but it greatly reduces the risk of infection and severe chickenpox.',
  },
  {
    question: 'هل التطعيم آمن؟',
    questionEn: 'Is the vaccine safe?',
    answer:
      'أيوه، تطعيم الجديري آمن ومستخدم من سنين طويلة، والفوايد بتفوق المخاطر في معظم الناس المؤهلين.',
    answerEn:
      'Yes. Varicella vaccination is safe and has been used for many years; benefits outweigh risks for most eligible people.',
  },
];
