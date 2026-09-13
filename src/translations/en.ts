export const TRANSLATIONS = {
  // Opening screen
  title: 'Vaccine Checker',
  subtitle: 'Enter a few details to see which vaccines may be due now and what may be coming next.',
  disclaimer: 'Vaccine Checker provides general vaccination guidance for healthy children and does not replace medical advice.',
  startButton: 'Start',

  // Language selector
  languageSelector: 'العربية | English',

  // Step 1: Date of Birth
  step1Title: 'Child\'s date of birth',
  step1Label: 'Child\'s date of birth',
  dobFutureError: 'Date of birth cannot be in the future',
  ageFormat: 'Age: {years} years, {months} months, {days} days',
  ageFormatAr: 'عمر الطفل: {years} سنة، {months} أشهر، {days} أيام',

  // Step 2: Special medical condition
  step2Title: 'Does your child have a special medical condition or a condition that affects immunity?',
  step2LabelAr: 'هل الطفل عنده حالة صحية خاصة أو مشكلة بتأثر على المناعة؟',
  step2Yes: 'Yes',
  step2YesAr: 'أيوه',
  step2No: 'No',
  step2NoAr: 'لا',
  step2StopMessage: 'Vaccination schedules can be different for children with special medical conditions or immune problems. Their vaccination schedule should be reviewed with their doctor.',
  step2StopMessageAr: 'يمكن أن تختلف جداول التطعيم للأطفال الذين لديهم حالات طبية خاصة أو مشاكل تؤثر على المناعة، ويجب مراجعة جدول التطعيم مع الطبيب.',
  step2Restart: 'Start over',
  step2RestartAr: 'ابدأ من جديد',

  // Step 3: Routine Ministry of Health vaccinations
  step3Title: 'Has your child received the routine Ministry of Health vaccinations appropriate for their age?',
  step3LabelAr: 'الطفل أخد تطعيمات الصحة الروتينية المناسبة لسنه؟',
  step3YesAll: 'Yes, all',
  step3YesAllAr: 'ايوة كلها',
  step3Some: 'Some of them',
  step3SomeAr: 'بعضها',
  step3No: 'No',
  step3NoAr: 'لأ',

  // Routine visits mapping
  routineVisitBirth: 'Birth',
  routineVisit1Month: '1 month',
  routineVisit2Months: '2 months',
  routineVisit4Months: '4 months',
  routineVisit6Months: '6 months',
  routineVisit9Months: '9 months',
  routineVisit12Months: '12 months',
  routineVisit18Months: '18 months',
  routineVisitsSelectTitle: 'Which routine vaccination visits has your child received?',
  reviewRoutineAllReceived: 'Routine vaccination status: All reached visits received',
  reviewRoutineVisitsReceived: 'Routine visits received:',
  reviewRoutineVisitsNotReceived: 'Routine visits not received:',
  reviewRoutineLedgerTitle: 'Routine vaccine history derived from visits:',
  routineSeries_bcg: 'BCG',
  routineSeries_polioOpv: 'Polio (OPV)',
  routineSeries_polioIpv: 'Polio (IPV)',
  routineSeries_dtpContaining: 'DTaP-containing vaccine',
  routineSeries_hepatitisB: 'Hepatitis B',
  routineSeries_hib: 'Hib',
  routineSeries_mmr: 'MMR',
  routineLedgerReceived: 'received',
  routineLedgerNotReceived: 'not received',
  routineLedgerDocumentedDoses: 'Documented doses:',
  routineLedgerNone: 'none',
  reviewRoutineCatchUpTitle: 'Routine catch-up',
  routineCatchUpBcgLabel: 'BCG',
  routineCatchUpBcgTuberculin: 'A Tuberculin test is required before BCG can be planned.',
  routineCatchUpBcgEligibleNow: 'BCG catch-up can proceed.',
  routineCatchUpBcgReceived: 'BCG received.',
  routineCatchUpHexLabel: 'Hexavalent',
  routineCatchUpHexZeroDoses3Primary:
    'No previous Hexavalent doses recorded; 3 primary doses are needed.',
  routineCatchUpHexZeroDoses2Primary:
    'No previous Hexavalent doses recorded; 2 primary catch-up doses are needed.',
  routineCatchUpHexOneDoseRemaining2:
    'The child received one previous Hexavalent dose and needs 2 doses to complete the primary series.',
  routineCatchUpHexTwoDosesRemaining1:
    'The child received two previous Hexavalent doses and needs 1 remaining primary dose.',
  routineCatchUpHexPartialFirstYear2Dose:
    'The child received one previous Hexavalent dose and needs 2 doses to complete the primary series.',
  routineCatchUpHexTwoDoseInterval: 'Preferred interval between the two doses is 2 months.',
  routineCatchUpHexBoosterAfterLastDose:
    'The booster dose is given 6 months after the last primary dose.',
  routineCatchUpHexIntervalNote:
    'Preferred interval between doses is 2 months; minimum acceptable interval is 1 month.',
  note_hexRemainingPrimaryDueNow: 'Due now.',
  note_hexRoutineBoosterDueNow: 'Due now.',
  note_hexRoutineBoosterOverdue: 'This is the 18-month dose, and its scheduled date has passed.',
  note_hexRoutineBoosterHistoricalDate: 'It was scheduled at 18 months of age: {date}.',
  resultsRoutineBcgPrerequisiteTitle: 'Before BCG vaccination',
  resultsRoutineOpvTitle: 'Oral polio vaccine catch-up',
  routineCatchUpOpvLabel: 'Oral polio vaccine (OPV)',
  routineCatchUpMmrLabel: 'MMR',
  note_mmrDose1DueNow: 'First dose is due now.',
  note_mmrDose2At18Months:
    'Scheduled at 18 months, provided at least 1 month has passed since the first dose.',
  note_mmrDose2MinInterval: 'At least 1 month must pass between the two doses.',
  note_mmrDose2OneMonthAfterFirst:
    'If the first dose is given today, the second dose should be given 1 month later.',
  note_mmrDose2DueAfterOneMonthPassed:
    'One month has passed since the first dose, and the second dose is due now.',
  note_opvHealthOfficeReferral:
    "The Hexavalent vaccine includes IPV, but missed oral polio vaccine (OPV) doses should be completed through the health office according to the child's vaccination record.",
  note_bcgTuberculinRequired:
    'A Tuberculin test is required before BCG can be given after 6 months of age.',
  reason_bcgTuberculinRequired: 'Tuberculin test required before BCG after 6 months.',
  note_hexPartialHistoryReview:
    'We need to review the number and dates of previous Hexavalent doses to plan the remaining doses accurately.',
  reason_hexPartialHistoryReview:
    'Partial first-year Hexavalent series requires catch-up pathway clarification.',
  note_hexPreferredMinimumInterval:
    'The preferred interval between Hexavalent doses is 2 months; the minimum acceptable interval is 1 month.',
  note_hexAge12TwoDoseInterval: 'Preferred interval between the two doses is 2 months.',
  note_hexBoosterAfterLastPrimary: 'The booster dose is given 6 months after the last primary dose.',

  // Birth routine vaccines
  routineBirthHepB: 'Hepatitis B',
  routineBirthBCG: 'BCG',
  routineBirthOPV: 'OPV',

  // 1 month routine vaccines
  routine1MonthBCG: 'BCG',
  routine1MonthOPV: 'OPV',

  // 2 months routine vaccines
  routine2MonthsOPV: 'OPV',
  routine2MonthsHexavalent: 'Hexavalent',

  // 4 months routine vaccines
  routine4MonthsOPV: 'OPV',
  routine4MonthsHexavalent: 'Hexavalent',

  // 6 months routine vaccines
  routine6MonthsOPV: 'OPV',
  routine6MonthsHexavalent: 'Hexavalent',

  // 9 months routine vaccines
  routine9MonthsOPV: 'OPV',

  // 12 months routine vaccines
  routine12MonthsMMR: 'MMR',
  routine12MonthsOPVBooster: 'OPV booster',

  // 18 months routine vaccines
  'routine18MonthsDTPT booster': 'DPT booster',
  routine18MonthsMMR: 'MMR',
  routine18MonthsOPVBooster: 'OPV booster',

  // MMR date
  mmrDose1Title: 'When was the MMR vaccine (12-month vaccine) given?',
  mmrDose1TitleCatchUp: 'When was the first MMR dose given?',
  mmrDose1Help: 'We need the date to calculate the Varicella vaccine timing correctly.',
  mmrDose1HelpCatchUp: 'We need the date to calculate the second dose accurately.',
  mmrDose2Title: 'When was the second MMR vaccine (18-month vaccine) given?',
  mmrDose2Help: 'We need the date to calculate the Varicella timing accurately.',
  mmr18MonthVaricellaTitle: 'When was the 18-month MMR vaccine given?',
  mmr18MonthVaricellaHelp: 'We need the date to calculate the Varicella vaccine timing accurately.',
  mmr12MonthVaricellaTitle: 'When was the 12-month MMR dose given?',
  mmr12MonthVaricellaHelp: 'We need the date to calculate the Varicella vaccine timing accurately.',
  mmrMostRecentTitle: 'When was the most recent MMR dose given?',
  mmrMostRecentHelp: 'We need the date to calculate the Varicella vaccine timing accurately.',
  mmrDateErrorFuture: 'MMR date cannot be in the future',
  mmrDateErrorBeforeDOB: 'MMR date cannot be before child\'s date of birth',
  mmrDateErrorBefore18Month:
    'This date is before the 18-month MMR visit. Please check the date in the vaccination record.',
  mmrDateErrorBefore12Month:
    'This date is before the 12-month MMR visit. Please check the date in the vaccination record.',

  // Additional vaccines question
  step4Title: 'Has your child received any additional vaccines before?',
  step4LabelAr: 'الطفل أخد أي تطعيمات إضافية غير تطعيمات الصحة؟',
  step4Yes: 'Yes',
  step4YesAr: 'أيوه',
  step4No: 'No',
  step4NoAr: 'لأ',

  // Additional vaccine selection
  additionalVaccinesTitle: 'Select previously received additional vaccines',
  rotavirus: 'Rotavirus',
  pneumococcal: 'Pneumococcal (PCV)',
  meningococcalACWY: 'Meningococcal ACWY',
  meningococcalB: 'Meningococcal B',
  varicella: 'Varicella',
  hepatitisA: 'Hepatitis A',
  influenza: 'Influenza',
  hpv: 'HPV',

  // Product selection
  productTitle: 'Which product was used?',
  productTitle_rotavirus: 'Which Rotavirus vaccine did your child receive?',
  productTitle_pneumococcal: 'Which Pneumococcal (PCV) vaccine did your child receive?',
  productTitle_meningococcalACWY: 'Which MenACWY vaccine did your child receive?',
  productTitle_varicella: 'Which Varicella vaccine did your child receive?',
  productTitle_hpv: 'Which HPV vaccine will be used?',
  rotavirusProducts: {
    rotarix: 'Rotarix',
    rotateq: 'RotaTeq',
    dontKnow: "Don't know",
  },
  pneumococcalProducts: {
    synflorix: 'Synflorix',
    prevenar13: 'Prevenar 13',
    vaxneuvance: 'Vaxneuvance',
    prevenar20: 'Prevenar 20',
    dontKnow: "Don't know",
  },
  meningococcalACWYProducts: {
    nimenrix: 'Nimenrix',
    menactra: 'Menactra',
    other: 'Other',
    dontKnow: "Don't know",
  },
  varicellaProducts: {
    barycela: 'Barycela',
    varivax: 'Varivax',
    other: 'Other',
    dontKnow: "Don't know",
  },
  hpvProducts: {
    gardasil4: 'Gardasil 4',
    gardasil9: 'Gardasil 9',
    cervarix: 'Cervarix',
    dontKnow: "Don't know",
  },

  // Number of doses
  dosesTitle: 'How many doses has your child received?',
  dosesTitleAr: 'الطفل أخد كام جرعة؟',
  dosesTitle_rotavirus: 'How many Rotavirus doses has your child received?',
  dosesTitle_pneumococcal: 'How many PCV doses has your child received?',
  dosesTitle_meningococcalACWY: 'How many MenACWY doses has your child received?',
  dosesTitle_meningococcalB: 'How many MenB doses has your child received?',
  dosesTitle_varicella: 'How many Varicella doses has your child received?',
  dosesTitle_hepatitisA: 'How many Hepatitis A doses has your child received?',
  dosesTitle_influenza: 'How many Influenza doses has your child received?',
  dosesTitle_hpv: 'How many HPV doses has your child received?',
  doseCountUnavailable:
    'No valid previous dose counts are available for this age. Please go back and review the vaccine details.',

  doseDatesHeadingSingle: 'When was the {vaccine} dose given?',
  doseDatesHeadingMultiple: 'When were the {vaccine} doses given?',
  doseDatesHeading_single_rotavirus: 'When was the Rotavirus dose given?',
  doseDatesHeading_multiple_rotavirus: 'When were the Rotavirus doses given?',
  doseDatesHeading_single_pneumococcal: 'When was the PCV dose given?',
  doseDatesHeading_multiple_pneumococcal: 'When were the PCV doses given?',
  doseDatesHeading_single_meningococcalACWY: 'When was the MenACWY dose given?',
  doseDatesHeading_multiple_meningococcalACWY: 'When were the MenACWY doses given?',
  doseDatesHeading_single_meningococcalB: 'When was the MenB dose given?',
  doseDatesHeading_multiple_meningococcalB: 'When were the MenB doses given?',
  doseDatesHeading_single_varicella: 'When was the Varicella dose given?',
  doseDatesHeading_multiple_varicella: 'When were the Varicella doses given?',
  doseDatesHeading_single_hepatitisA: 'When was the Hepatitis A dose given?',
  doseDatesHeading_multiple_hepatitisA: 'When were the Hepatitis A doses given?',
  doseDatesHeading_single_influenza: 'When was the Influenza dose given?',
  doseDatesHeading_multiple_influenza: 'When were the Influenza doses given?',
  doseDatesHeading_single_hpv: 'When was the HPV dose given?',
  doseDatesHeading_multiple_hpv: 'When were the HPV doses given?',
  doseDateField_dose1: 'Dose 1 date',
  doseDateField_dose2: 'Dose 2 date',
  doseDateField_dose3: 'Dose 3 date',
  doseDateField_dose4: 'Dose 4 date',
  doseDateFutureError: 'Dose date cannot be in the future',
  doseDateBeforeDOBError: 'Dose date cannot be before the child\'s date of birth',
  doseDateOrderError: 'Each dose date must be on or after the previous dose date',

  // Last dose date
  lastDoseTitle: 'When was the last dose given?',
  lastDoseTitleAr: 'آخر جرعة اتاخدت إمتى؟',
  lastDoseTitle_rotavirus: 'When was the last Rotavirus dose given?',
  lastDoseTitle_pneumococcal: 'When was the last PCV dose given?',
  lastDoseTitle_meningococcalACWY: 'When was the last MenACWY dose given?',
  lastDoseTitle_meningococcalB: 'When was the last MenB dose given?',
  lastDoseTitle_varicella: 'When was the last Varicella dose given?',
  lastDoseTitle_hepatitisA: 'When was the last Hepatitis A dose given?',
  lastDoseTitle_influenza: 'When was the last Influenza dose given?',
  lastDoseTitle_hpv: 'When was the last HPV dose given?',
  lastDoseFutureError: 'Last dose date cannot be in the future',
  lastDoseBeforeDOBError: 'Last dose date cannot be before child\'s date of birth',

  // Add another vaccine
  addAnother: 'Add another vaccine',
  addAnotherAr: 'أضيف تطعيم تاني',
  continue: 'Continue',

  // Review screen
  reviewTitle: 'Review',
  childDOB: 'Child\'s date of birth',
  calculatedAge: 'Exact age',
  routineVaccinesStatus: 'Routine vaccination status',
  completedRoutineVisits: 'Completed routine visits',
  mmrDates: 'MMR date(s)',
  additionalVaccines: 'Additional vaccines',
  products: 'Product',
  doses: 'Number of doses',
  lastDose: 'Last dose date',
  edit: 'Edit',
  prev: 'Back',
  next: 'Review results',

  // Results page
  resultsTitle: 'Results',
  resultsPrintHeading: 'Vaccine Talks — Vaccine Checker',
  printResult: 'Print result',
  shareResult: 'Share result',
  shareChecker: 'Share Vaccine Checker',
  shareCheckerText:
    "Try the Vaccine Checker to see which vaccines may be appropriate for your child's age.",
  shareCheckerCopied: 'Vaccine Checker link copied.',
  shareResultTitle: 'Vaccine Checker Result',
  shareResultCopied: 'Result copied. You can now share it.',
  shareResultNotesHeading: 'Notes',
  calculationDateLabel: 'Calculation date',
  dueNow: 'Due Now',
  upcoming: 'Upcoming',
  routineVaccinesMissing: 'Routine Vaccines Missing',
  routineVisitsNeedCompletion: 'Routine visits that may need catch-up',
  completed: 'Completed',
  checkAnother: 'Check another child',
  checkAnotherAr: 'احسب لطفل تاني',
  resultsLearnMoreHeading: 'Want more details about each vaccine?',
  resultsLearnMoreText: 'Learn more about vaccine types and schedules.',
  resultsLearnMoreButton: 'Learn more about vaccines',
  fullDisclaimer: 'This Vaccine Checker provides general vaccination guidance for healthy children and does not replace medical advice. Recommendations may differ for children with medical conditions, weakened immune systems, unusual vaccination histories, or other special circumstances.',
  fullDisclaimerAr: 'يوفر هذاChecker للتطعيم إرشادات عامة للتطعيمات للأطفال الأصحاء. لا يغني عن المشورة الطبية. قد تختلف توصيات التطعيم للأطفال الذين لديهم حالات طبية، مشاكل في المناعة، جداول تطعيم سابقة غير عادية، أو ظروف خاصة أخرى.',

  eligibleNow: 'Eligible Now',
  needsReview: 'Needs Review',
  importantNotes: 'Important Notes',
  ageLimitPassed: 'Age-related notes',
  firstDoseTitle: 'When was the first dose given?',
  firstDoseTitleAr: 'الجرعة الأولى اتاخدت إمتى؟',
  firstDoseTitle_rotavirus: 'When was the first Rotavirus dose given?',
  firstDoseTitle_pneumococcal: 'When was the first PCV dose given?',
  firstDoseTitle_meningococcalACWY: 'When was the first MenACWY dose given?',
  firstDoseTitle_meningococcalB: 'When was the first MenB dose given?',
  firstDoseTitle_varicella: 'When was the first Varicella dose given?',
  firstDoseTitle_hepatitisA: 'When was the first Hepatitis A dose given?',
  firstDoseTitle_influenza: 'When was the first Influenza dose given?',
  firstDoseTitle_hpv: 'When was the first HPV dose given?',

  historyContext_rotavirus: 'Vaccine history: Rotavirus',
  historyContext_pneumococcal: 'Vaccine history: Pneumococcal (PCV)',
  historyContext_meningococcalACWY: 'Vaccine history: MenACWY',
  historyContext_meningococcalB: 'Vaccine history: MenB',
  historyContext_varicella: 'Vaccine history: Varicella',
  historyContext_hepatitisA: 'Vaccine history: Hepatitis A',
  historyContext_influenza: 'Vaccine history: Influenza',
  historyContext_hpv: 'Vaccine history: HPV',
  influenzaPrimingQuestion: 'Has your child received influenza vaccine before?',
  influenzaPrimingQuestionAr: 'الطفل أخد تطعيم الإنفلونزا قبل كده؟',
  influenzaCurrentSeasonQuestion: 'Has the child received the influenza vaccine for the current season?',
  influenzaCurrentSeasonQuestionAr: 'هل أخذ تطعيم الإنفلونزا للموسم الحالي؟',
  doseDateUnknown: "I don't remember the date",
  doseDateUnknownAr: 'مش فاكرة التاريخ',
  hpvSecondDoseDateUnknown: "I don't remember the date (dose 2)",
  hpvSecondDoseDateUnknownAr: 'مش فاكرة التاريخ (الجرعة الثانية)',
  hpvFirstDoseBeforeAge9:
    'This dose date is not valid. HPV vaccination starts from age 9 years.',
  hpvFirstDoseBeforeAge9Ar: 'تاريخ الجرعة غير صحيح، تطعيم HPV يبدأ من عمر 9 سنوات.',
  reviewDoseDateUnknown: 'Date unknown',
  reviewDoseDateUnknownAr: 'التاريخ غير معروف',
  influenzaDoseCountQuestionAr: 'أخد كام جرعة قبل كده؟',
  resultRecommendedDate: 'Recommended date: {date}',
  resultOriginalRecommendedDate: 'Original recommended date: {date}',
  resultScheduledDoseDate: '{{doseLabel}}: {date}',
  resultDoseDueNow: '{{doseLabel}} is due now.',
  resultInfluenzaSeasonDueNow: 'Seasonal dose is due now.',
  resultPreferredWindow: 'Preferred window: {startDate} to {endDate}',
  resultPreferredBoosterWindow: 'Preferred booster window: {startDate} to {endDate}',
  resultPastPreferredWindow:
    'Preferred window was {startDate} to {endDate}; vaccination is due now.',
  resultPastPreferredBoosterWindow:
    'The preferred booster window was from {startDate} to {endDate}, and the dose can still be given now.',
  resultMinimumStart: 'Can be given starting from {startDate}',
  resultMinimumStartBooster: 'The booster can be given starting on {startDate}.',
  resultMinimumValidDate: 'Minimum acceptable interval: starting from {minimumValidDate}',
  resultAgeLimitRange:
    'Can start from {earliestDate}; latest age to start vaccination is {latestDate}.',
  resultLatestAllowedDate: 'Latest allowed date: {latestDate}',
  resultLatestDate: 'Age limit date',
  resultConditionalNextDose:
    'If {{previousDose}} is given today, {{nextDose}} would be on {date}.',
  resultConditionalNextFixedDose:
    'If {{previousDose}} is given today, {{nextDose}} would be on {date}.',
  resultConditionalVaricellaDose2FromPlannedDose1:
    'If Dose 1 is given on {dose1Date}, Dose 2 would be on {date}.',
  resultConditionalNextDoseRotarix:
    'If Dose 1 is given today, Dose 2 would be on {date}.',
  resultConditionalHpvTwoDoseSecond:
    'If Dose 1 is given today, Dose 2 would be on {date}.',
  resultConditionalNextDoseInfluenza:
    'If this is the first time the child receives the influenza vaccine and Dose 1 is given today, Dose 2 would be on {date}.',
  resultConditionalNextDoseMenacwyBooster:
    'If the primary doses are given on schedule, the booster can start from {date}.',
  resultConditionalNimenrixInfantTwoPrimaryBooster:
    'If both primary doses are given on schedule, the booster would be on {date}.',
  resultConditionalNimenrixSinglePrimaryBooster:
    'If Dose 1 is given today, the booster can be given starting {date}.',
  resultConditionalNextDoseMenactra:
    'If Dose 1 is given today, Dose 2 would be on {date}.',
  resultConditionalNextDoseMenbBooster:
    'If the primary doses are given on schedule, the booster can start from {date}.',
  resultConditionalHexBoosterAfterRemainingPrimary:
    'If the remaining primary dose is given today, the booster dose would be on {date}.',
  resultConditionalBoosterStart:
    'If the primary doses are given on schedule, the booster can start from {date}.',
  resultConditionalPcvSevenToElevenBooster:
    'If Dose 2 is given as scheduled, the booster can start from {date}.',
  resultConditionalMenbBoosterWindow:
    'If the primary doses are given on schedule, the preferred booster window would be from {startDate} to {endDate}.',
  resultConditionalBoosterWindow:
    'If the primary doses are given on schedule, the preferred booster window would be from {startDate} to {endDate}.',
  resultConditionalPreferredBoosterWindow:
    'If the primary doses are given on schedule, the preferred booster window would be from {startDate} to {endDate}.',
  resultConditionalPreferredWindow:
    'If the doses are given on schedule, the preferred window would be from {startDate} to {endDate}.',
  resultEmptyDueNow: 'No vaccines are due right now based on the information entered.',
  resultEmptyEligibleNow: 'Nothing is eligible now outside the recommended timing.',
  resultEmptyUpcoming: 'No upcoming vaccines to show right now.',
  resultEmptyRoutineMissing: 'No overdue routine Ministry of Health visits identified.',
  resultEmptyCompleted: 'No completed vaccine series recorded from the information entered.',
  resultEmptyNeedsReview: 'No items need review.',

  status_due_now: 'Due now',
  status_eligible_now: 'Eligible now',
  status_upcoming: 'Upcoming',
  status_completed: 'Completed',
  status_not_yet_eligible: 'Not yet eligible',
  status_age_limit_passed: 'Age limit passed',
  status_needs_review: 'Needs review',

  doseLabel_dose1: 'Dose 1',
  doseLabel_singleDose: 'Single dose',
  doseLabel_dose2: 'Dose 2',
  doseLabel_dose3: 'Dose 3',
  doseLabel_nextDose: 'Next dose',
  doseLabel_booster: 'Booster',
  doseLabel_completionDose: 'Completion dose',
  doseLabel_seriesComplete: 'Series complete',
  doseLabel_reviewNeeded: 'Review needed',
  doseLabel_seasonComplete: 'Completed for this season',
  doseLabel_seasonDose: 'Season dose',

  category_rotavirus: 'Rotavirus',
  category_pneumococcal: 'Pneumococcal (PCV)',
  category_meningococcalACWY: 'Meningococcal ACWY',
  category_meningococcalB: 'Meningococcal B',
  category_varicella: 'Varicella',
  category_hepatitisA: 'Hepatitis A',
  category_influenza: 'Influenza',
  category_hpv: 'HPV',

  product_rotarix: 'Rotarix',
  product_rotateq: 'RotaTeq',
  product_dontKnow: "Don't know",
  product_synflorix: 'Synflorix',
  product_prevenar13: 'Prevenar 13',
  product_vaxneuvance: 'Vaxneuvance',
  product_prevenar20: 'Prevenar 20',
  product_pcv: 'PCV',
  product_nimenrix: 'Nimenrix',
  product_menactra: 'Menactra',
  product_other: 'Other',
  product_barycela: 'Barycela',
  product_varivax: 'Varivax',
  product_gardasil4: 'Gardasil 4',
  product_gardasil9: 'Gardasil 9',
  product_cervarix: 'Cervarix',
  product_bexsero: 'Bexsero',

  routineVisit_birth: 'Birth visit',
  routineVisit_1month: '1 month visit',
  routineVisit_2months: '2 months visit',
  routineVisit_4months: '4 months visit',
  routineVisit_6months: '6 months visit',
  routineVisit_9months: '9 months visit',
  routineVisit_12months: '12 months visit',
  routineVisit_18months: '18 months visit',

  routineVaccine_hepatitisB: 'Hepatitis B',
  routineVaccine_bcg: 'BCG',
  routineVaccine_opv: 'OPV',
  routineVaccine_opvDose1: 'OPV dose 1',
  routineVaccine_opvDose2: 'OPV dose 2',
  routineVaccine_opvDose3: 'OPV dose 3',
  routineVaccine_opvDose4: 'OPV dose 4',
  routineVaccine_hexRemainingPrimary: 'Remaining primary dose',
  routineVaccine_hexavalentDose1: 'First dose',
  routineVaccine_hexavalentDose2: 'Second dose',
  routineVaccine_hexavalentDose3: 'Third dose',
  routineVaccine_hexBooster: 'Booster dose',
  routineVaccine_mmrDose1: 'First dose',
  routineVaccine_mmrDose2: 'Second dose',
  routineVaccine_mmrSeriesComplete: 'MMR series complete',
  routineVaccine_opvBooster1: 'OPV booster',
  routineVaccine_opvBooster2: 'OPV booster',
  routineVaccine_dtpBooster: 'DPT booster',

  note_rotavirusEligibleOrWait: 'Your child can receive this vaccine now, or you may wait until the recommended age used by this checker.',
  note_rotavirusFinalDoseLimit: 'There is a strict age limit for completing the rotavirus series.',
  note_rotavirusStartLimitPassed: 'The age limit to start this rotavirus series has passed.',
  note_rotavirusRotateqStartLimitPassed: 'The age limit to start RotaTeq has passed.',
  note_rotavirusProductUnknown: 'The rotavirus product name is needed to calculate remaining doses accurately.',
  note_rotavirusProductNeededForSeries: 'Please confirm whether Rotarix or RotaTeq was used to plan the remaining doses.',
  note_rotavirusProductDependsOnChoice: 'The remaining schedule will depend on whether Rotarix or RotaTeq is used.',
  note_rotavirusRotarixOnlyCatchUp:
    'Rotarix can still be started now, but the age limit for starting RotaTeq has passed.',
  reason_rotavirusProductUnknown: 'Product name needed for rotavirus schedule.',
  reason_rotavirusStartLimitPassed: 'Too old to start this rotavirus series.',
  reason_rotavirusCatchUpStartLimitPassed: 'The age limit to start rotavirus vaccination has passed.',
  reason_rotavirusRotateqStartLimitPassed: 'Too old to start RotaTeq.',

  note_pcvEligibleOrWait: 'Your child can receive PCV now, or you may wait until 2 months to follow the recommended timing used by this checker.',
  note_pcvProductUnknown: 'The PCV product name is needed for an accurate remaining schedule.',
  note_pcvCatchUpProductDependsOnDoses:
    'The number of remaining doses depends on the PCV product used.',
  note_pcvRemainingDosesDependOnProduct:
    'The number and timing of the remaining doses depend on the PCV product used.',
  note_pcvBoosterDelayed: 'The booster is delayed but the series does not need to restart.',
  note_vaxneuvanceShortInterval: 'Because the interval between the first two doses was less than 8 weeks, a third primary dose is needed before the booster.',
  note_vaxneuvanceTwoPlusOne: 'Based on the previous doses, the next dose is the booster.',
  reason_pcvProductUnknown: 'Product name needed for PCV schedule.',

  note_menbFirstYearConsideration: 'MenB is commonly considered during the first year of life.',
  note_menbMinIntervalMet: 'The minimum interval has been met; the second dose can be given now.',
  note_menbMinIntervalOneMonth: 'Minimum acceptable interval: 1 month.',
  note_menbTwoToNineYearInterval:
    'The preferred interval between the 2 doses is 2 months; the minimum interval is 1 month.',
  note_menbTeenMinInterval: 'The second dose may be given with a minimum interval of 1 month according to the product schedule used by this checker.',

  note_menacwyFirstYearConsideration: 'MenACWY is commonly considered during the first year of life.',
  note_menacwyProductScheduleDependsOnAge:
    'The timing of the next dose depends on the vaccine product used.',
  note_menacwyProductDoseCountDependsOnProduct:
    'The number of doses needed after this one depends on the vaccine product used.',
  note_menacwyProductUnknownSchedule:
    'We need to know the MenACWY product type to calculate the remaining doses accurately.',
  note_menacwyProductUnknown:
    'We need to know the MenACWY product type to calculate the remaining doses accurately.',
  note_menactraMinimumAge: 'Menactra is not used below 9 months of age.',
  reason_menacwyProductUnknown:
    'We need to know the MenACWY product type to calculate the remaining doses accurately.',
  reason_menacwyProductUnknownSchedule:
    'We need to know the MenACWY product type to calculate the remaining doses accurately.',

  note_varicellaMmrScheduling:
    'Varicella and MMR can be given on the same day. If they are not given on the same day, they must be at least 4 weeks apart.',
  note_varicellaMmrSameDay:
    'Varicella vaccine can be given on the same day as MMR. If they are not given on the same day, they should be at least 4 weeks apart.',
  note_varicellaMmrInterval:
    'Varicella vaccine can be given on the same day as MMR. If they are not given on the same day, they should be at least 4 weeks apart.',
  note_varicellaDelayedAfterRecentMmr:
    'Since MMR was given on {mmrDate}, Varicella Dose 1 can be given starting from {earliestVaricellaDate}.',
  note_varicellaMmrDateNeeded: 'When was the MMR vaccine given?',
  reason_varicellaMmrDateNeeded: 'MMR date is needed to schedule varicella safely.',
  note_varicellaProductUnknown: 'The varicella product name is needed for an accurate remaining schedule.',
  reason_varicellaProductUnknown: 'Product name needed for varicella schedule.',

  note_hepaNoRestart: 'If the second dose is delayed, the series does not need to restart.',

  note_hpvProductUnknown:
    'We need to know which HPV vaccine was given to calculate the remaining doses accurately.',
  note_hpvRemainingDosesDependOnProduct:
    'The number and timing of the remaining doses depend on the HPV vaccine product used.',
  note_hpvThreeDoseSeriesTimingDependsOnProduct:
    '3-dose series. Timing of the remaining doses depends on the HPV vaccine product used.',
  note_hpvRemainingDosesDependOnProductAndAge:
    'The number and timing of the remaining doses depend on the HPV vaccine product and the age at the first dose.',
  note_hpvProductNeededForSchedule:
    'The number and timing of the remaining doses depend on the HPV vaccine product and the age at the first dose.',
  note_gardasil9ThirdDoseRequired: 'Because dose 2 was given less than 5 months after dose 1, a third dose is required.',
  reason_hpvProductUnknown: 'Product name needed for HPV schedule.',
  note_hpvRemainingTimingDependsOnFirstDose:
    'An additional HPV dose is needed. Exact timing and whether a third dose is required depend on the age and date of the first dose.',
  reason_hpvFirstDoseDateUnknown:
    'First HPV dose date was not provided — schedule details depend on when the first dose was given.',
  reason_hpvSecondDoseDateUnknown:
    'Second HPV dose date was not provided — remaining timing depends on the first dose date.',
  note_hpvSecondDoseDateUnknown:
    'Two prior doses were reported; the second dose date was not entered.',

  note_influenzaSeasonComplete: 'A dose has already been recorded for the current influenza season.',
  note_influenzaOneDosePerSeason: 'One dose is recommended for the current flu season.',
  note_influenzaSecondDoseInterval: 'The second dose should be given at least 4 weeks after the first dose.',

  note_conditionalNextDose: 'If Dose 1 is given now, the next recommended dose would be around this date.',
  note_clinicianReviewRecommended: 'Some answers need clinician review before the remaining schedule can be confirmed.',
}