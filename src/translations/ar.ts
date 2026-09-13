export const AR_TRANSLATIONS = {
  // Opening screen
  title: 'اعرف تطعيمات طفلك',
  subtitle: 'ادخل بعض التفاصيل لمعرفة أي التطعيمات قد تكون مستحقة الآن وما قد يأتي لاحقاً.',
  disclaimer: 'Checker للتطعيمات يوفر إرشادات عامة للتطعيمات للأطفال الأصحاء ولا يغني عن المشورة الطبية.',
  startButton: 'ابدأ',

  // Language selector
  languageSelector: 'العربية | English',

  // Step 1: Date of Birth
  step1Title: ' تاريخ ميلاد الطفل',
  step1Label: ' تاريخ ميلاد الطفل',
  dobFutureError: ' تاريخ الميلاد لا يمكن أن يكون في المستقبل',
  ageFormat: 'عمر الطفل: {years} سنوات، {months} أشهر، {days} أيام',
  ageFormatAr: 'عمر الطفل: {years} سنة، {months} أشهر، {days} أيام',

  // Step 2: Special medical condition
  step2Title: 'هل الطفل عنده حالة صحية خاصة أو مشكلة بتأثر على المناعة؟',
  step2LabelAr: 'هل الطفل عنده حالة صحية خاصة أو مشكلة بتأثر على المناعة؟',
  step2Yes: 'أيوه',
  step2YesAr: 'أيوه',
  step2No: 'لا',
  step2NoAr: 'لا',
  step2StopMessage: 'يمكن أن تختلف جداول التطعيم للأطفال الذين لديهم حالات طبية خاصة أو مشاكل تؤثر على المناعة، ويجب مراجعة جدول التطعيم مع الطبيب.',
  step2StopMessageAr: 'يمكن أن تختلف جداول التطعيم للأطفال الذين لديهم حالات طبية خاصة أو مشاكل تؤثر على المناعة، ويجب مراجعة جدول التطعيم مع الطبيب.',
  step2Restart: 'ابدأ من جديد',
  step2RestartAr: 'ابدأ من جديد',

  // Step 3: Routine Ministry of Health vaccinations
  step3Title: 'الطفل أخد تطعيمات الصحة الروتينية المناسبة لسنه؟',
  step3LabelAr: 'الطفل أخد تطعيمات الصحة الروتينية المناسبة لسنه؟',
  step3YesAll: 'ايوة كلها',
  step3YesAllAr: 'ايوة كلها',
  step3Some: 'بعضها',
  step3SomeAr: 'بعضها',
  step3No: 'لأ',
  step3NoAr: 'لأ',

  // Routine visits mapping
  routineVisitBirth: 'الولادة',
  routineVisit1Month: 'شهر',
  routineVisit2Months: 'شهرين',
  routineVisit4Months: '4 شهور',
  routineVisit6Months: '6 شهور',
  routineVisit9Months: '9 شهور',
  routineVisit12Months: 'سنة',
  routineVisit18Months: 'سنة ونص',
  routineVisitsSelectTitle: 'الطفل أخد تطعيمات الصحة في أنهي زيارات؟',
  reviewRoutineAllReceived: 'تطعيمات الصحة: كل الزيارات المستحقة لحد دلوقتي اتاخدت',
  reviewRoutineVisitsReceived: 'الزيارات اللي اتاخدت:',
  reviewRoutineVisitsNotReceived: 'الزيارات اللي ما اتاخدتش:',
  reviewRoutineLedgerTitle: 'تاريخ التطعيمات الروتينية المستنتج من الزيارات:',
  routineSeries_bcg: 'BCG',
  routineSeries_polioOpv: 'شلل الأطفال (\u2066OPV\u2069)',
  routineSeries_polioIpv: 'شلل الأطفال (\u2066IPV\u2069)',
  routineSeries_dtpContaining: 'تطعيم يحتوي على DTP',
  routineSeries_hepatitisB: 'التهاب الكبد B',
  routineSeries_hib: 'Hib',
  routineSeries_mmr: 'MMR',
  routineLedgerReceived: 'اتاخد',
  routineLedgerNotReceived: 'ما اتاخدش',
  routineLedgerDocumentedDoses: 'الجرعات المسجّلة:',
  routineLedgerNone: 'لا يوجد',
  reviewRoutineCatchUpTitle: 'استكمال تطعيمات الصحة',
  routineCatchUpBcgLabel: 'BCG',
  routineCatchUpBcgTuberculin: 'لازم يتعمل اختبار تيوبركلين الأول قبل تحديد أخذ التطعيم.',
  routineCatchUpBcgEligibleNow: 'BCG محتاج يتاخد حسب جدول الاستكمال.',
  routineCatchUpBcgReceived: 'BCG اتاخد.',
  routineCatchUpHexLabel: 'الهيكسا',
  routineCatchUpHexZeroDoses3Primary:
    'الطفل ماخدش جرعات هيكسا قبل كده، وبيحتاج استكمال 3 جرعات أساسية.',
  routineCatchUpHexZeroDoses2Primary:
    'الطفل ماخدش جرعات هيكسا قبل كده، وبيحتاج استكمال جرعتين أساسيتين.',
  routineCatchUpHexOneDoseRemaining2:
    'الطفل أخد جرعة هيكسا واحدة قبل كده، وبيحتاج جرعتين لاستكمال الجرعات الأساسية.',
  routineCatchUpHexTwoDosesRemaining1:
    'الطفل أخد جرعتين قبل كده، وفاضله جرعة أساسية واحدة.',
  routineCatchUpHexPartialFirstYear2Dose:
    'الطفل أخد جرعة هيكسا واحدة قبل كده، وبيحتاج جرعتين لاستكمال الجرعات الأساسية.',
  routineCatchUpHexTwoDoseInterval: 'الفرق المفضل بين الجرعتين شهرين.',
  routineCatchUpHexBoosterAfterLastDose:
    'الجرعة المنشطة بتكون بعد آخر جرعة أساسية بـ 6 شهور.',
  routineCatchUpHexIntervalNote: 'الفرق المفضل بين الجرعات شهرين، وأقل فرق مسموح شهر.',
  note_hexRemainingPrimaryDueNow: 'مستحقة دلوقتي.',
  note_hexRoutineBoosterDueNow: 'مستحقة دلوقتي.',
  note_hexRoutineBoosterOverdue: 'دي جرعة السنة ونص، ومعادها فات.',
  note_hexRoutineBoosterHistoricalDate: 'كان ميعادها عند سنة ونص: {date}.',
  resultsRoutineBcgPrerequisiteTitle: 'قبل تطعيم BCG',
  resultsRoutineOpvTitle: 'استكمال شلل الأطفال',
  routineCatchUpOpvLabel: 'شلل الأطفال (\u2066OPV\u2069)',
  routineCatchUpMmrLabel: 'MMR',
  note_mmrDose1DueNow: 'الجرعة الأولى مستحقة دلوقتي.',
  note_mmrDose2At18Months:
    'ميعادها عند سنة ونص، بشرط يكون عدى شهر على الأقل من الجرعة الأولى.',
  note_mmrDose2MinInterval: 'لازم يكون بين الجرعتين شهر على الأقل.',
  note_mmrDose2OneMonthAfterFirst:
    'لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى بعد شهر.',
  note_mmrDose2DueAfterOneMonthPassed:
    'مر شهر على الجرعة الأولى، والجرعة الثانية مستحقة دلوقتي.',
  note_opvHealthOfficeReferral:
    'تطعيم شلل الأطفال موجود ضمن الهيكسا كـ IPV، لكن لاستكمال جرعات شلل الأطفال الفموي (OPV) لازم تراجع مكتب الصحة حسب سجل التطعيمات.',
  note_bcgTuberculinRequired:
    'قبل أخذ تطعيم BCG بعد عمر 6 شهور، لازم يتعمل اختبار تيوبركلين أولًا.',
  reason_bcgTuberculinRequired: 'محتاج اختبار تيوبركلين قبل BCG بعد 6 شهور.',
  note_hexPartialHistoryReview:
    'محتاجين نراجع عدد وتواريخ جرعات الهيكسا السابقة علشان نحدد باقي الجرعات بدقة.',
  reason_hexPartialHistoryReview:
    'Partial first-year Hexavalent series requires catch-up pathway clarification.',
  note_hexPreferredMinimumInterval:
    'الفرق المفضل بين جرعات الهيكسا شهرين، وأقل فرق مسموح شهر.',
  note_hexAge12TwoDoseInterval: 'الفرق المفضل بين الجرعتين شهرين.',
  note_hexBoosterAfterLastPrimary: 'الجرعة المنشطة بتكون بعد آخر جرعة أساسية بـ 6 شهور.',

  // Birth routine vaccines
  routineBirthHepB: 'Hepatitis B',
  routineBirthBCG: 'BCG',
  routineBirthOPV: 'شلل الأطفال (\u2066OPV\u2069)',

  // 1 month routine vaccines
  routine1MonthBCG: 'BCG',
  routine1MonthOPV: 'شلل الأطفال (\u2066OPV\u2069)',

  // 2 months routine vaccines
  routine2MonthsOPV: 'شلل الأطفال (\u2066OPV\u2069)',
  routine2MonthsHexavalent: 'Hexavalent',

  // 4 months routine vaccines
  routine4MonthsOPV: 'شلل الأطفال (\u2066OPV\u2069)',
  routine4MonthsHexavalent: 'Hexavalent',

  // 6 months routine vaccines
  routine6MonthsOPV: 'شلل الأطفال (\u2066OPV\u2069)',
  routine6MonthsHexavalent: 'Hexavalent',

  // 9 months routine vaccines
  routine9MonthsOPV: 'شلل الأطفال (\u2066OPV\u2069)',

  // 12 months routine vaccines
  routine12MonthsMMR: 'MMR',
  routine12MonthsOPVBooster: 'جرعة \u2066OPV\u2069 داعمة',

  // 18 months routine vaccines
  'routine18MonthsDTPT booster': 'DPT booster',
  routine18MonthsMMR: 'MMR',
  routine18MonthsOPVBooster: 'جرعة \u2066OPV\u2069 داعمة',

  // MMR date
  mmrDose1Title: 'تطعيم الـ MMR (تطعيم السنة) اتاخد إمتى؟',
  mmrDose1TitleCatchUp: 'تطعيم الـ MMR (تطعيم السنة) اتاخد إمتى؟',
  mmrDose1Help: 'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.',
  mmrDose1HelpCatchUp: 'محتاجين التاريخ علشان نحدد ميعاد الجرعة الثانية بدقة.',
  mmrDose2Title: 'تطعيم الـ MMR (تطعيم سنة ونص) اتاخد إمتى؟',
  mmrDose2Help: 'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.',
  mmr18MonthVaricellaTitle: 'تطعيم MMR بتاع سنة ونص اتاخد إمتى؟',
  mmr18MonthVaricellaHelp: 'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.',
  mmr12MonthVaricellaTitle: 'تطعيم MMR بتاع السنة اتاخد إمتى؟',
  mmr12MonthVaricellaHelp: 'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.',
  mmrMostRecentTitle: 'آخر جرعة MMR اتاخدت إمتى؟',
  mmrMostRecentHelp: 'محتاجين التاريخ علشان نحدد ميعاد تطعيم الجديري المائي بدقة.',
  mmrDateErrorFuture: 'تاريخ MMR لا يمكن أن يكون في المستقبل',
  mmrDateErrorBeforeDOB: 'تاريخ MMR لا يمكن أن يكون قبل تاريخ ميلاد الطفل',
  mmrDateErrorBefore18Month:
    'التاريخ ده قبل ميعاد تطعيم MMR بتاع سنة ونص. راجعي التاريخ المكتوب في سجل التطعيمات.',
  mmrDateErrorBefore12Month:
    'التاريخ ده قبل ميعاد تطعيم MMR بتاع السنة. راجعي التاريخ المكتوب في سجل التطعيمات.',

  // Additional vaccines question
  step4Title: 'الطفل أخد أي تطعيمات إضافية قبل كده؟',
  step4LabelAr: 'الطفل أخد أي تطعيمات إضافية غير تطعيمات الصحة؟',
  step4Yes: 'أيوه',
  step4YesAr: 'أيوه',
  step4No: 'لأ',
  step4NoAr: 'لأ',

  // Additional vaccine selection
  additionalVaccinesTitle: 'حدد التطعيمات الإضافية السابقة',
  rotavirus: 'روتا',
  pneumococcal: 'المكورات الرئوية (PCV)',
  meningococcalACWY: 'السحائي ACWY',
  meningococcalB: 'السحائي B',
  varicella: 'الجديري المائي',
  hepatitisA: 'التهاب الكبد A',
  influenza: 'الإنفلونزا',
  hpv: 'فيروس الورم الحليمي البشري (HPV)',

  // Product selection
  productTitle: 'أي منتج تم استخدامه؟',
  productTitle_rotavirus: 'أي نوع روتا أخده الطفل؟',
  productTitle_pneumococcal: 'أي نوع من تطعيم المكورات الرئوية (PCV) أخده الطفل؟',
  productTitle_meningococcalACWY: 'أي نوع من تطعيم السحائي ACWY أخده الطفل؟',
  productTitle_varicella: 'أي نوع من تطعيم الجديري المائي أخده الطفل؟',
  productTitle_hpv: 'أي نوع من تطعيم HPV اتاخد؟',
  rotavirusProducts: {
    rotarix: 'Rotarix',
    rotateq: 'RotaTeq',
    dontKnow: 'لا أعرف',
  },
  pneumococcalProducts: {
    synflorix: 'Synflorix',
    prevenar13: 'Prevenar 13',
    vaxneuvance: 'Vaxneuvance',
    prevenar20: 'Prevenar 20',
    dontKnow: 'لا أعرف',
  },
  meningococcalACWYProducts: {
    nimenrix: 'Nimenrix',
    menactra: 'Menactra',
    other: 'أخرى',
    dontKnow: 'لا أعرف',
  },
  varicellaProducts: {
    barycela: 'Barycela',
    varivax: 'Varivax',
    other: 'أخرى',
    dontKnow: 'لا أعرف',
  },
  hpvProducts: {
    gardasil4: 'Gardasil 4',
    gardasil9: 'Gardasil 9',
    cervarix: 'Cervarix',
    dontKnow: 'لا أعرف',
  },

  // Number of doses
  dosesTitle: 'كم جرعة أخدها الطفل؟',
  dosesTitleAr: 'الطفل أخد كام جرعة؟',
  dosesTitle_rotavirus: 'الطفل أخد كام جرعة روتا؟',
  dosesTitle_pneumococcal: 'الطفل أخد كام جرعة من تطعيم المكورات الرئوية؟',
  dosesTitle_meningococcalACWY: 'الطفل أخد كام جرعة من السحائي ACWY؟',
  dosesTitle_meningococcalB: 'الطفل أخد كام جرعة من السحائي B؟',
  dosesTitle_varicella: 'الطفل أخد كام جرعة من الجديري المائي؟',
  dosesTitle_hepatitisA: 'الطفل أخد كام جرعة من التهاب الكبد A؟',
  dosesTitle_influenza: 'الطفل أخد كام جرعة من الإنفلونزا؟',
  dosesTitle_hpv: 'الطفل أخد كام جرعة من فيروس الورم الحليمي البشري (HPV)؟',
  doseCountUnavailable:
    'مفيش عدد جرعات سابق منطقي للسن ده. ارجع وراجع بيانات التطعيم.',

  doseDatesHeadingSingle: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeadingMultiple: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_rotavirus: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_rotavirus: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_pneumococcal: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_pneumococcal: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_meningococcalACWY: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_meningococcalACWY: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_meningococcalB: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_meningococcalB: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_varicella: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_varicella: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_hepatitisA: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_hepatitisA: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_influenza: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_influenza: 'الجرعات اتاخدت إمتى؟',
  doseDatesHeading_single_hpv: 'الجرعة اتاخدت إمتى؟',
  doseDatesHeading_multiple_hpv: 'الجرعات اتاخدت إمتى؟',
  doseDateField_dose1: 'تاريخ الجرعة الأولى',
  doseDateField_dose2: 'تاريخ الجرعة الثانية',
  doseDateField_dose3: 'تاريخ الجرعة الثالثة',
  doseDateField_dose4: 'تاريخ الجرعة الرابعة',
  doseDateFutureError: 'تاريخ الجرعة ما ينفعش يكون في المستقبل',
  doseDateBeforeDOBError: 'تاريخ الجرعة ما ينفعش يكون قبل تاريخ الميلاد',
  doseDateOrderError: 'كل جرعة لازم تكون في نفس يوم الجرعة اللي قبلها أو بعدها',

  // Last dose date
  lastDoseTitle: 'آخر جرعة اتاخدت إمتى؟',
  lastDoseTitleAr: 'آخر جرعة اتاخدت إمتى؟',
  lastDoseTitle_rotavirus: 'آخر جرعة روتا اتاخدت إمتى؟',
  lastDoseTitle_pneumococcal: 'آخر جرعة من تطعيم المكورات الرئوية اتاخدت إمتى؟',
  lastDoseTitle_meningococcalACWY: 'آخر جرعة من السحائي ACWY اتاخدت إمتى؟',
  lastDoseTitle_meningococcalB: 'آخر جرعة من السحائي B اتاخدت إمتى؟',
  lastDoseTitle_varicella: 'آخر جرعة من الجديري المائي اتاخدت إمتى؟',
  lastDoseTitle_hepatitisA: 'آخر جرعة من التهاب الكبد A اتاخدت إمتى؟',
  lastDoseTitle_influenza: 'آخر جرعة من الإنفلونزا اتاخدت إمتى؟',
  lastDoseTitle_hpv: 'آخر جرعة من فيروس الورم الحليمي البشري (HPV) اتاخدت إمتى؟',
  lastDoseFutureError: 'آخر جرعة date لا يمكن أن يكون في المستقبل',
  lastDoseBeforeDOBError: 'آخر جرعة date لا يمكن أن يكون قبل تاريخ الميلاد',

  // Add another vaccine
  addAnother: 'أضيف تطعيم تاني',
  addAnotherAr: 'أضيف تطعيم تاني',
  continue: 'كمّل',

  // Review screen
  reviewTitle: 'مراجعة',
  childDOB: ' تاريخ ميلاد الطفل',
  calculatedAge: 'العمر الدقيق',
  routineVaccinesStatus: 'تطعيمات الصحة',
  completedRoutineVisits: 'التطعيمات الروتينية المكتملة',
  mmrDates: 'تواريخ MMR',
  additionalVaccines: 'التطعيمات الإضافية',
  products: 'المنتج',
  doses: 'عدد الجرعات',
  lastDose: 'آخر جرعة تاريخ',
  edit: 'عدل',
  prev: 'رجوع',
  next: 'مراجعة النتائج',

  // Results page
  resultsTitle: 'النتيجة',
  resultsPrintHeading: 'Vaccine Talks — Vaccine Checker',
  printResult: 'طباعة النتيجة',
  shareResult: 'مشاركة النتيجة',
  shareChecker: 'شارك Vaccine Checker',
  shareCheckerText: 'جرّب Vaccine Checker لمعرفة التطعيمات المناسبة حسب عمر الطفل.',
  shareCheckerCopied: 'تم نسخ رابط Vaccine Checker.',
  shareResultTitle: 'نتيجة Vaccine Checker',
  shareResultCopied: 'تم نسخ النتيجة ويمكنك مشاركتها.',
  shareResultNotesHeading: 'ملاحظات',
  calculationDateLabel: 'تاريخ الحساب',
  dueNow: 'مستحق دلوقتي',
  upcoming: 'الجرعات الجاية',
  routineVaccinesMissing: 'تطعيمات الصحة الناقصة',
  routineVisitsNeedCompletion: 'زيارات الصحة اللي محتاجة استكمال',
  completed: 'مكتمل',
  checkAnother: 'احسب لطفل تاني',
  checkAnotherAr: 'احسب لطفل تاني',
  resultsLearnMoreHeading: 'محتاج تفاصيل أكتر عن كل تطعيم؟',
  resultsLearnMoreText: 'اعرف أكتر عن أنواع التطعيمات ومواعيدها.',
  resultsLearnMoreButton: 'اعرف أكتر عن التطعيمات',
  fullDisclaimer: 'يوفر Checker للتطعيمات إرشادات عامة للتطعيمات للأطفال الأصحاء. لا يغني عن المشورة الطبية. قد تختلف توصيات التطعيم للأطفال الذين لديهم حالات طبية، مشاكل في المناعة، جداول تطعيم سابقة غير عادية، أو ظروف خاصة أخرى.',
  fullDisclaimerAr: 'يوفر Checker للتطعيمات إرشادات عامة للتطعيمات للأطفال الأصحاء. لا يغني عن المشورة الطبية. قد تختلف توصيات التطعيم للأطفال الذين لديهم حالات طبية، مشاكل في المناعة، جداول تطعيم سابقة غير عادية، أو ظروف خاصة أخرى.',

  eligibleNow: 'ينفع يتاخد دلوقتي',
  needsReview: 'محتاجين معلومة زيادة',
  importantNotes: 'ملاحظات مهمة',
  ageLimitPassed: 'ملاحظات حدود السن',
  firstDoseTitle: 'When was the first dose given?',
  firstDoseTitleAr: 'الجرعة الأولى اتاخدت إمتى؟',
  firstDoseTitle_rotavirus: 'الجرعة الأولى من روتا اتاخدت إمتى؟',
  firstDoseTitle_pneumococcal: 'الجرعة الأولى من تطعيم المكورات الرئوية اتاخدت إمتى؟',
  firstDoseTitle_meningococcalACWY: 'الجرعة الأولى من السحائي ACWY اتاخدت إمتى؟',
  firstDoseTitle_meningococcalB: 'الجرعة الأولى من السحائي B اتاخدت إمتى؟',
  firstDoseTitle_varicella: 'الجرعة الأولى من الجديري المائي اتاخدت إمتى؟',
  firstDoseTitle_hepatitisA: 'الجرعة الأولى من التهاب الكبد A اتاخدت إمتى؟',
  firstDoseTitle_influenza: 'الجرعة الأولى من الإنفلونزا اتاخدت إمتى؟',
  firstDoseTitle_hpv: 'الجرعة الأولى من فيروس الورم الحليمي البشري (HPV) اتاخدت إمتى؟',

  historyContext_rotavirus: 'بنكمل بيانات: روتا',
  historyContext_pneumococcal: 'بنكمل بيانات: المكورات الرئوية (PCV)',
  historyContext_meningococcalACWY: 'بنكمل بيانات: السحائي ACWY',
  historyContext_meningococcalB: 'بنكمل بيانات: السحائي B',
  historyContext_varicella: 'بنكمل بيانات: الجديري المائي',
  historyContext_hepatitisA: 'بنكمل بيانات: التهاب الكبد A',
  historyContext_influenza: 'بنكمل بيانات: الإنفلونزا',
  historyContext_hpv: 'بنكمل بيانات: فيروس الورم الحليمي البشري (HPV)',
  influenzaPrimingQuestion: 'Has your child received influenza vaccine before?',
  influenzaPrimingQuestionAr: 'الطفل أخد تطعيم الإنفلونزا قبل كده؟',
  influenzaCurrentSeasonQuestion: 'Has the child received the influenza vaccine for the current season?',
  influenzaCurrentSeasonQuestionAr: 'هل أخذ تطعيم الإنفلونزا للموسم الحالي؟',
  doseDateUnknown: "I don't remember the date",
  doseDateUnknownAr: 'مش فاكرة التاريخ',
  influenzaDoseCountQuestionAr: 'أخد كام جرعة قبل كده؟',
  resultRecommendedDate: 'الميعاد المقترح: {date}',
  resultOriginalRecommendedDate: 'كان ميعاده المقترح: {date}',
  resultScheduledDoseDate: '{{doseLabel}}: {date}',
  resultPreferredWindow: 'الفترة المفضلة: من {startDate} إلى {endDate}',
  resultPreferredBoosterWindow: 'الفترة المفضلة للجرعة المنشطة: من {startDate} إلى {endDate}',
  resultPastPreferredWindow: 'الفترة المفضلة كانت من {startDate} إلى {endDate}، والتطعيم مستحق دلوقتي.',
  resultPastPreferredBoosterWindow:
    'الفترة المفضلة للجرعة المنشطة كانت من {startDate} إلى {endDate}، ولسه ممكن الطفل ياخدها دلوقتي.',
  resultMinimumStart: 'ينفع تتاخد بداية من {startDate}',
  resultMinimumStartBooster: 'يمكن أخذ الجرعة المنشطة بداية من {startDate}',
  resultMinimumValidDate: 'وأقل فرق مسموح: بداية من {minimumValidDate}',
  resultAgeLimitRange: 'ينفع تبدأ الجرعة من {earliestDate}، وآخر سن لبدء التطعيم هو {latestDate}.',
  resultLatestAllowedDate: 'آخر ميعاد مسموح: {latestDate}',
  resultLatestDate: 'آخر ميعاد مسموح',
  resultConditionalNextDose:
    'لو اتاخدت {{previousDose}} النهارده، {{nextDose}} تبقى يوم {date}.',
  resultConditionalNextFixedDose:
    'لو اتاخدت {{previousDose}} النهارده، {{nextDose}} تبقى يوم {date}.',
  resultConditionalVaricellaDose2FromPlannedDose1:
    'لو الجرعة الأولى اتاخدت يوم {dose1Date}، الجرعة الثانية تبقى يوم {date}.',
  resultConditionalNextDoseRotarix:
    'لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم {date}.',
  resultConditionalNextDoseInfluenza:
    'لو دي أول مرة والجرعة الأولى اتاخدت النهارده، الجرعة الثانية تبقى يوم {date}.',
  resultConditionalHpvTwoDoseSecond:
    'لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى بعد 6 شهور يوم {date}.',
  resultConditionalNextDoseMenacwyBooster:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الجرعة المنشطة تبدأ من {date}.',
  resultConditionalNimenrixInfantTwoPrimaryBooster:
    'لو اتاخدت الجرعتين الأساسيتين في مواعيدهم، الجرعة المنشطة تبقى يوم {date}.',
  resultConditionalNimenrixSinglePrimaryBooster:
    'لو الجرعة الأولى اتاخدت النهارده، الجرعة المنشطة تبقى بداية من {date}.',
  resultConditionalNextDoseMenactra:
    'لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم {date}.',
  resultConditionalNextDoseMenbBooster:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الجرعة المنشطة تبدأ من {date}.',
  resultConditionalHexBoosterAfterRemainingPrimary:
    'لو اتاخدت الجرعة الأساسية المتبقية النهارده، الجرعة المنشطة تبقى يوم {date}.',
  resultConditionalBoosterStart:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الجرعة المنشطة تبدأ من {date}.',
  resultConditionalPcvSevenToElevenBooster:
    'لو الجرعة الثانية اتاخدت في ميعادها، الجرعة المنشطة تبدأ من {date}.',
  resultConditionalMenbBoosterWindow:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الفترة المفضلة للجرعة المنشطة هتكون من {startDate} إلى {endDate}.',
  resultConditionalBoosterWindow:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الفترة المفضلة للجرعة المنشطة هتكون من {startDate} إلى {endDate}.',
  resultConditionalPreferredBoosterWindow:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الفترة المفضلة للجرعة المنشطة هتكون من {startDate} إلى {endDate}.',
  resultConditionalPreferredWindow:
    'لو الجرعات الأساسية اتاخدت في مواعيدها، الفترة المفضلة هتكون من {startDate} إلى {endDate}.',
  resultEmptyDueNow: 'مفيش تطعيمات مستحقة دلوقتي حسب البيانات اللي دخلتها.',
  resultEmptyEligibleNow: 'مفيش تطعيمات إضافية ينفع تتاخد دلوقتي خارج المواعيد المقترحة.',
  resultEmptyUpcoming: 'مفيش جرعات جاية نعرضها حاليًا.',
  resultEmptyRoutineMissing: 'مفيش تطعيمات صحة ناقصة ظاهرة.',
  resultEmptyCompleted: 'مفيش تطعيمات مكتملة مسجلة من البيانات اللي دخلتها.',
  resultEmptyNeedsReview: 'مفيش حاجة محتاجة معلومة زيادة.',

  status_due_now: 'مستحق دلوقتي',
  status_eligible_now: 'ينفع يتاخد دلوقتي',
  status_upcoming: 'الجرعات الجاية',
  status_completed: 'مكتمل',
  status_not_yet_eligible: 'لسه مش وقتُه',
  status_age_limit_passed: 'السن المسموح للتطعيم عدى',
  status_needs_review: 'محتاجين معلومة زيادة',

  doseLabel_dose1: 'الجرعة الأولى',
  doseLabel_singleDose: 'جرعة واحدة',
  doseLabel_dose2: 'الجرعة الثانية',
  doseLabel_dose3: 'الجرعة الثالثة',
  doseLabel_nextDose: 'الجرعة اللي جاية',
  doseLabel_booster: 'الجرعة المنشطة',
  doseLabel_completionDose: 'جرعة الاستكمال',
  doseLabel_seriesComplete: 'مكتمل',
  doseLabel_reviewNeeded: 'محتاجين معلومة زيادة',
  doseLabel_seasonComplete: 'مكتمل للموسم الحالي',
  doseLabel_seasonDose: 'جرعة الموسم',

  category_rotavirus: 'روتا',
  category_pneumococcal: 'المكورات الرئوية (PCV)',
  category_meningococcalACWY: 'السحائي ACWY',
  category_meningococcalB: 'السحائي B',
  category_varicella: 'الجديري المائي',
  category_hepatitisA: 'التهاب الكبد A',
  category_influenza: 'الإنفلونزا',
  category_hpv: 'فيروس الورم الحليمي البشري (HPV)',

  product_rotarix: 'Rotarix',
  product_rotateq: 'RotaTeq',
  product_dontKnow: 'لا أعرف',
  product_synflorix: 'Synflorix',
  product_prevenar13: 'Prevenar 13',
  product_vaxneuvance: 'Vaxneuvance',
  product_prevenar20: 'Prevenar 20',
  product_pcv: 'PCV',
  product_nimenrix: 'Nimenrix',
  product_menactra: 'Menactra',
  product_other: 'أخرى',
  product_barycela: 'Barycela',
  product_varivax: 'Varivax',
  product_gardasil4: 'Gardasil 4',
  product_gardasil9: 'Gardasil 9',
  product_cervarix: 'Cervarix',
  product_bexsero: 'Bexsero',

  routineVisit_birth: 'زيارة الولادة',
  routineVisit_1month: 'زيارة شهر',
  routineVisit_2months: 'زيارة شهرين',
  routineVisit_4months: 'زيارة 4 شهور',
  routineVisit_6months: 'زيارة 6 شهور',
  routineVisit_9months: 'زيارة 9 شهور',
  routineVisit_12months: 'زيارة سنة',
  routineVisit_18months: 'زيارة سنة ونص',

  routineVaccine_hepatitisB: 'التهاب الكبد B',
  routineVaccine_bcg: 'BCG',
  routineVaccine_opv: 'شلل الأطفال (\u2066OPV\u2069)',
  routineVaccine_opvDose1: 'شلل الأطفال (\u2066OPV\u2069) — جرعة 1',
  routineVaccine_opvDose2: 'شلل الأطفال (\u2066OPV\u2069) — جرعة 2',
  routineVaccine_opvDose3: 'شلل الأطفال (\u2066OPV\u2069) — جرعة 3',
  routineVaccine_opvDose4: 'شلل الأطفال (\u2066OPV\u2069) — جرعة 4',
  routineVaccine_hexRemainingPrimary: 'الجرعة الأساسية المتبقية',
  routineVaccine_hexavalentDose1: 'الجرعة الأولى',
  routineVaccine_hexavalentDose2: 'الجرعة الثانية',
  routineVaccine_hexavalentDose3: 'الجرعة الثالثة',
  routineVaccine_hexBooster: 'الجرعة المنشطة',
  routineVaccine_mmrDose1: 'الجرعة الأولى',
  routineVaccine_mmrDose2: 'الجرعة الثانية',
  routineVaccine_mmrSeriesComplete: 'اكتملت جرعات MMR',
  routineVaccine_opvBooster1: 'جرعة \u2066OPV\u2069 داعمة',
  routineVaccine_opvBooster2: 'جرعة \u2066OPV\u2069 داعمة',
  routineVaccine_dtpBooster: 'DPT dاعمة',

  note_rotavirusEligibleOrWait: 'ينفع يتاخد دلوقتي، أو تستنّوا لحد الميعاد المقترح.',
  note_rotavirusFinalDoseLimit: 'تطعيم الروتا ليه سن محدد لبدء واستكمال الجرعات.',
  note_rotavirusStartLimitPassed: 'عدى السن المسموح لبدء تطعيم الروتا.',
  note_rotavirusRotateqStartLimitPassed: 'عدى السن المسموح لبدء روتاتك.',
  note_rotavirusProductUnknown:
    'محتاجين نعرف نوع تطعيم الروتا اللي اتاخد علشان نحسب الجرعات اللي فاضلة بدقة.',
  note_rotavirusProductNeededForSeries: 'محتاجين نعرف نوع تطعيم الروتا اللي اتاخد قبل كده.',
  note_rotavirusProductDependsOnChoice:
    'اختيار Rotarix أو RotaTeq هيحدد عدد ومواعيد الجرعات اللي بعد كده.',
  note_rotavirusRotarixOnlyCatchUp:
    'لسه ممكن يبدأ Rotarix دلوقتي، لكن فات السن المسموح لبدء RotaTeq.',
  reason_rotavirusProductUnknown: 'محتاجين نوع تطعيم الروتا.',
  reason_rotavirusStartLimitPassed: 'الطفل عدى السن المسموح لبدء التطعيم.',
  reason_rotavirusCatchUpStartLimitPassed: 'فات السن المسموح لبدء التطعيم.',
  reason_rotavirusRotateqStartLimitPassed: 'عدى السن المسموح لبدء RotaTeq.',

  note_pcvEligibleOrWait: 'ينفع يتاخد دلوقتي، أو تستنّوا لحد شهرين حسب الميعاد المقترح.',
  note_pcvProductUnknown: 'محتاجين نوع تطعيم المكورات الرئوية عشان نحسب الجرعات اللي فاضلة.',
  note_pcvCatchUpProductDependsOnDoses:
    'عدد الجرعات اللي بعد كده بيعتمد على نوع تطعيم المكورات المستخدم.',
  note_pcvRemainingDosesDependOnProduct:
    'باقي عدد الجرعات ومواعيدها بتختلف حسب نوع التطعيم المستخدم.',
  note_pcvBoosterDelayed: 'الجرعة المنشطة متأخرة بس مش محتاجين نبدأ من الأول.',
  note_vaxneuvanceShortInterval: 'بسبب إن الفترة بين أول جرعتين أقل من 8 أسابيع، محتاج جرعة تالتة قبل المنشطة.',
  note_vaxneuvanceTwoPlusOne: 'الجدول ده جرعتين أساسيتين + جرعة منشطة.',
  reason_pcvProductUnknown: 'محتاجين نوع تطعيم المكورات الرئوية.',

  note_menbFirstYearConsideration: 'مستحق دلوقتي',
  note_menbMinIntervalMet: 'فاضل الحد الأدنى بين الجرعات؛ الجرعة التانية ينفع تتاخد دلوقتي.',
  note_menbMinIntervalOneMonth: 'الحد الأدنى بين الجرعتين: شهر.',
  note_menbTwoToNineYearInterval:
    'الفرق المفضل بين الجرعتين شهرين، وأقل فرق مسموح شهر.',
  note_menbTeenMinInterval: 'الجرعة التانية ينفع تتاخد بعد شهر على الأقل.',

  note_menacwyFirstYearConsideration: 'مستحق دلوقتي',
  note_menacwyProductScheduleDependsOnAge:
    'ميعاد الجرعة اللي بعد كده بيعتمد على نوع التطعيم المستخدم.',
  note_menacwyProductDoseCountDependsOnProduct:
    'عدد الجرعات اللي بعد كده بيعتمد على نوع التطعيم المستخدم.',
  note_menacwyProductUnknownSchedule:
    'محتاجين نعرف نوع تطعيم السحائي ACWY علشان نحسب الجرعات اللي بعد كده بدقة.',
  note_menacwyProductUnknown: 'محتاجين نعرف نوع تطعيم السحائي ACWY علشان نحسب الجرعات اللي بعد كده بدقة.',
  note_menactraMinimumAge: 'Menactra مش بيستخدم قبل 9 شهور.',
  reason_menacwyProductUnknown: 'محتاجين نعرف نوع تطعيم السحائي ACWY علشان نحسب الجرعات اللي بعد كده بدقة.',
  reason_menacwyProductUnknownSchedule:
    'محتاجين نعرف نوع تطعيم السحائي ACWY علشان نحسب الجرعات اللي بعد كده بدقة.',

  note_varicellaMmrScheduling:
    'يمكن أخذ تطعيم الجديري المائي و MMR في نفس اليوم. لو مش هيتاخدوا في نفس اليوم، لازم يكون بينهم 4 أسابيع على الأقل.',
  note_varicellaMmrSameDay:
    'تطعيم الجديري ممكن يتاخد في نفس يوم الـ MMR. لو مش هيتاخدوا في نفس اليوم، لازم يكون بينهم 4 أسابيع على الأقل.',
  note_varicellaMmrInterval: 'MMR والجديري المائي تطعيمات حية؛ لازم فاصل 4 أسابيع على الأقل ما لم يُعطوا في نفس اليوم.',
  note_varicellaDelayedAfterRecentMmr:
    'بما إن تطعيم MMR اتاخد يوم {mmrDate}، يمكن أخذ الجرعة الأولى من الجديري المائي بداية من {earliestVaricellaDate}.',
  note_varicellaMmrDateNeeded: 'تطعيم الـ MMR اتاخد إمتى؟',
  reason_varicellaMmrDateNeeded: 'محتاجين تاريخ MMR علشان نحدد موعد الجديري بأمان.',
  note_varicellaProductUnknown: 'محتاجين نوع تطعيم الجديري المائي عشان نحسب الجرعات اللي فاضلة.',
  reason_varicellaProductUnknown: 'محتاجين نوع تطعيم الجديري المائي.',

  note_hepaNoRestart: 'لو الجرعة التانية اتأخرت، مش محتاجين نبدأ من الأول.',

  note_hpvProductUnknown:
    'محتاجين نعرف نوع تطعيم HPV اللي اتاخد علشان نحسب الجرعات اللي فاضلة بدقة.',
  note_hpvRemainingDosesDependOnProduct:
    'عدد الجرعات اللي بعد كده بيعتمد على نوع تطعيم HPV المستخدم.',
  note_hpvThreeDoseSeriesTimingDependsOnProduct:
    'الجدول 3 جرعات، ومواعيد الجرعات التالية بتختلف حسب نوع التطعيم المستخدم.',
  note_hpvRemainingDosesDependOnProductAndAge:
    'عدد ومواعيد الجرعات اللي بعد كده بتختلف حسب نوع التطعيم المستخدم والسن وقت أول جرعة.',
  note_hpvProductNeededForSchedule:
    'عدد ومواعيد الجرعات اللي بعد كده بتختلف حسب نوع التطعيم المستخدم والسن وقت أول جرعة.',
  note_gardasil9ThirdDoseRequired: 'بما إن الجرعة التانية اتاخدت قبل 5 شهور من الأولى، محتاج جرعة تالتة.',
  reason_hpvProductUnknown: 'محتاجين نوع تطعيم HPV.',
  note_hpvRemainingTimingDependsOnFirstDose:
    'محتاجين جرعة HPV إضافية. التوقيت الدقيق وهل محتاجين جرعة ثالثة يعتمد على عمر وتاريخ الجرعة الأولى.',
  reason_hpvFirstDoseDateUnknown:
    'تاريخ الجرعة الأولى من HPV مش متوفر — تفاصيل الجدول تعتمد على موعد الجرعة الأولى.',

  note_influenzaSeasonComplete: 'اتسجلت جرعة للموسم الحالي.',
  note_influenzaOneDosePerSeason: 'جرعة واحدة مقترحة للموسم الحالي.',
  note_influenzaSecondDoseInterval: 'الجرعة الثانية لازم تكون بعد 4 أسابيع على الأقل من الأولى.',

  note_conditionalNextDose: 'لو اتاخدت الجرعة الأولى دلوقتي، الجرعة اللي بعد كده المقترحة هتكون حوالي التاريخ ده.',
  note_clinicianReviewRecommended: 'محتاجين مراجعة الطبيب قبل ما نأكد الجدول اللي فاضل.',
}