export type ImportantInfoTip = {
  emoji: string;
  ar: string;
  en: string;
  keywords: string;
  category: 'general' | 'before-after' | 'schedule' | 'who-can' | 'administration' | 'specific';
};

export const IMPORTANT_INFO_CATEGORIES: {
  id: ImportantInfoTip['category'];
  ar: string;
  en: string;
  accent: 'teal' | 'gold' | 'mint' | 'rose' | 'slate' | 'amber';
}[] = [
  { id: 'general', ar: 'عام', en: 'General', accent: 'slate' },
  { id: 'before-after', ar: 'قبل وبعد التطعيم', en: 'Before & After Vaccination', accent: 'teal' },
  { id: 'schedule', ar: 'المواعيد والجدول', en: 'Schedule & Timing', accent: 'mint' },
  { id: 'who-can', ar: 'من يقدر يتطعّم؟', en: 'Who Can Be Vaccinated', accent: 'gold' },
  { id: 'administration', ar: 'طريقة إعطاء اللقاح', en: 'How Vaccines Are Given', accent: 'rose' },
  { id: 'specific', ar: 'حالات ولقاحات محددة', en: 'Specific Situations', accent: 'amber' },
];

export const IMPORTANT_INFO_TIPS: ImportantInfoTip[] = [
  {
    emoji: '🧪',
    category: 'general',
    ar: 'متنسيش تعملي اختبار الغدة لطفلك عند الولادة لإنه مهم.',
    en: "Don't forget to do a thyroid test for your child at birth because it's important.",
    keywords: 'thyroid gland test newborn',
  },
  {
    emoji: '💉',
    category: 'before-after',
    ar: 'التطعيم عمره ما يكون سبب للإصابة بالمرض ما دام التطعيم غير حي.',
    en: 'Vaccination is never a cause of disease as long as the vaccine is not live.',
    keywords: 'live vaccine disease',
  },
  {
    emoji: '🌡️',
    category: 'before-after',
    ar: 'مينفعش حد يتطعم وهو سخن، بس عادي تحصل شوية سخونة بعد التطعيم.',
    en: "No one should be vaccinated while having a fever, but it's normal to have some fever after vaccination.",
    keywords: 'fever temperature',
  },
  {
    emoji: '💊',
    category: 'before-after',
    ar: 'بلاش خافض حرارة قبل التطعيم أو بعده مباشرة، لإنه ساعات بيأثر على كفاءة بعض التطعيمات.',
    keywords: 'fever reducer paracetamol ibuprofen',
    en: 'Avoid fever reducers before vaccination or immediately after, as it sometimes affects the effectiveness of some vaccines.',
  },
  {
    emoji: '⚠️',
    category: 'before-after',
    ar: 'بلاش تاخد دوا مضاد للحساسية قبل التطعيم، علشان لو كان في حساسية من التطعيم تظهر.',
    en: "Don't take antihistamines before vaccination, so that if there's an allergy to the vaccine, it will show up.",
    keywords: 'antihistamine allergy',
  },
  {
    emoji: '📅',
    category: 'schedule',
    ar: 'كل التطعيمات ممكن تتاخد لو لسبب ما اتأخرنا عن معادها اللي في الجدول ماعدا الروتا، هي اللي بتكون بميعاد مينفعش الطفل يتطعم بعده.',
    en: "All vaccines can be taken if we're late for their scheduled time except for Rota, which has a specific timing that the child cannot be vaccinated after.",
    keywords: 'late schedule rota rotavirus',
  },
  {
    emoji: '🔄',
    category: 'schedule',
    ar: 'لو فاتك ميعاد تطعيم متقلقش، بنكمل الجدول عادي مش هنعيد.',
    en: "If you missed a vaccination appointment, don't worry, we continue the schedule normally without repeating.",
    keywords: 'missed appointment catch up',
  },
  {
    emoji: '❓',
    category: 'schedule',
    ar: 'لو مش فاكر إبنك اتطعم ولا لأ، مفيش مشكلة من إنك تطعمه تاني.',
    en: "If you don't remember whether your child was vaccinated or not, there's no problem with vaccinating them again.",
    keywords: 'forgot record repeat',
  },
  {
    emoji: '👶',
    category: 'who-can',
    ar: 'مريض متلازمة داون ياخد تطعيماته عادي.',
    en: 'Down syndrome patients can take their vaccines normally.',
    keywords: 'down syndrome',
  },
  {
    emoji: '💊',
    category: 'who-can',
    ar: 'أي شخص ممكن ياخد التطعيم وهو بياخد مضاد حيوي.',
    en: 'Anyone can get vaccinated while taking antibiotics.',
    keywords: 'antibiotic antibiotics',
  },
  {
    emoji: '🏥',
    category: 'who-can',
    ar: 'لو اللي هيتطعم بياخد كورتيزون أو مثبطات مناعة لازم تعرف الدكتور قبل التطعيم.',
    en: 'If the person to be vaccinated is taking cortisone or immunosuppressants, you must inform the doctor before vaccination.',
    keywords: 'cortisone immunosuppressant steroid',
  },
  {
    emoji: '💉',
    category: 'administration',
    ar: 'لو هناخد كذا تطعيم في نفس اليوم، هناخدهم بفاصل ٢،٥ سم بين كل حقنة والتانية.',
    en: 'If we take multiple vaccines on the same day, we take them with a 2.5 cm gap between each injection and the next.',
    keywords: 'same day multiple injection',
  },
  {
    emoji: '💧',
    category: 'administration',
    ar: 'التطعيمات في مصر كلها حقن إلا شلل الأطفال والروتا بتكون نقط.',
    en: 'All vaccines in Egypt are injections except polio and Rota which are drops.',
    keywords: 'drops polio rota injection',
  },
  {
    emoji: '🦵',
    category: 'administration',
    ar: 'التطعيمات ما عدا الحية والدرن بتتاخد في عضلة الفخذ في أول سنة من عمر الطفل، ومن سن سنة لتلاتة ممكن في عضلة الكتف أو الفخذ، وبعد سن تلات سنين الأفضل الحقن يكون في عضلة الكتف.',
    en: "Vaccines except live and tuberculosis are given in the thigh muscle in the first year of the child's life, and from one to three years old it can be in the shoulder or thigh muscle, and after three years old it's better for the injection to be in the shoulder muscle.",
    keywords: 'thigh shoulder muscle site',
  },
  {
    emoji: '⚠️',
    category: 'administration',
    ar: 'لو التطعيم اتاخد بالغلط تحت الجلد مش عضل، ميتعادش إلا لو كان تطعيم السعار أو كبدى ب أو فيروس الورم الحليمي.',
    en: "If the vaccine was given by mistake under the skin instead of muscle, it doesn't need to be repeated except for rabies, hepatitis B, or HPV vaccines.",
    keywords: 'subcutaneous subcutaneous mistake',
  },
  {
    emoji: '🤱',
    category: 'specific',
    ar: 'لو الإم مصابة بكبدي ب، فعند الولادة لازم الطفل ياخد أجسام مضادة مع الجرعة الصفرية.',
    en: 'If the mother is infected with hepatitis B, the child must receive antibodies with the zero dose at birth.',
    keywords: 'hepatitis b mother newborn zero dose',
  },
  {
    emoji: '🔄',
    category: 'specific',
    ar: 'لو الطفل رجع شوية من الروتا وهو بياخدها مش لازم نعيد الجرعة.',
    en: "If the child vomited a little from Rota while taking it, we don't need to repeat the dose.",
    keywords: 'rota rotavirus vomit spit',
  },
  {
    emoji: '📅',
    category: 'specific',
    ar: 'تطعيم الجديري ممكن يتاخد في نفس اليوم مع تطعيم الصحة بتاع السنة والسنة ونص أو نفرق شهر بين تطعيم الصحة والجديري.',
    en: 'Chickenpox vaccine can be taken on the same day as the health vaccine at one year and one and a half years, or we separate a month between the health vaccine and chickenpox.',
    keywords: 'chickenpox varicella schedule',
  },
  {
    emoji: '🚫',
    category: 'specific',
    ar: 'لو ظهرت حبوب على الشخص بعد تطعيم الجديري نبعده عن الحوامل وضعاف المناعة.',
    en: 'If bumps appear on the person after chickenpox vaccination, keep them away from pregnant women and immunocompromised people.',
    keywords: 'chickenpox varicella rash pregnant',
  },
  {
    emoji: '⚡',
    category: 'specific',
    ar: 'لو في حالة جديري أو كبدي ألف اكتشفناها فبسرعة نطعم المخالطين، لإنه ده ممكن يمنع الإصابة بعد العدوى في بعض الحالات.',
    en: 'If we discover a case of chickenpox or hepatitis A, we quickly vaccinate the contacts, as this may prevent infection after exposure in some cases.',
    keywords: 'post exposure chickenpox hepatitis a contacts',
  },
  {
    emoji: '🐕',
    category: 'specific',
    ar: 'لو أي انسان اتعض أو اتخربش من حيوان من الثدييات أو القوارض ياخد تطعيم السعار بغض النظر عن سنه ودرجة حرارته.',
    en: 'If any human is bitten or scratched by a mammal or rodent animal, they should get the rabies vaccine regardless of their age and temperature.',
    keywords: 'rabies bite scratch animal dog',
  },
];
