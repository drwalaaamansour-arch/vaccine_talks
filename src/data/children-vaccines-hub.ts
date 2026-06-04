export type ChildrenVaccineAgeItem = {
  href: string;
  ar: string;
  en: string;
  imageSrc: string;
  imageAlt: string;
  keywords: string;
};

export const CHILDREN_VACCINES_HERO = {
  tag: 'للأسرة المصرية · For families in Egypt',
  titleAr: 'تطعيمات الأطفال حسب العمر',
  titleEn: "Children's Vaccines by Age",
  leadAr: 'اختاروا عمر طفلكم علشان تشوفوا التطعيمات المطلوبة والموصى بها في مصر — شرح واضح بالعربي والإنجليزي.',
  leadEn: 'Pick your child’s age to see required and recommended vaccines in Egypt.',
} as const;

export const CHILDREN_VACCINE_AGES: ChildrenVaccineAgeItem[] = [
  {
    href: '/at-birth',
    ar: 'عند الميلاد',
    en: 'At Birth',
    imageSrc: '/birth.jpg',
    imageAlt: 'Newborn baby',
    keywords: 'birth newborn ميلاد ولادة',
  },
  {
    href: '/two-months',
    ar: 'شهرين',
    en: 'Two Months',
    imageSrc: '/2%20month%20old%20baby.jpeg',
    imageAlt: 'Two month old baby',
    keywords: 'two 2 months شهرين',
  },
  {
    href: '/four-months',
    ar: 'أربع شهور',
    en: 'Four Months',
    imageSrc: '/4%20month%20old%20baby.jpeg',
    imageAlt: 'Four month old baby',
    keywords: 'four 4 months اربع',
  },
  {
    href: '/six-months',
    ar: 'ست شهور',
    en: 'Six Months',
    imageSrc: '/6%20month%20old%20baby%20with%20black%20eyes.jpeg',
    imageAlt: 'Six month old baby',
    keywords: 'six 6 months ست',
  },
  {
    href: '/nine-months',
    ar: 'تسع شهور',
    en: 'Nine Months',
    imageSrc: '/9%20month%20old%20baby%20with%20black%20eyes%20not%20western%20but%20from%20egypt.jpeg',
    imageAlt: 'Nine month old baby',
    keywords: 'nine 9 months تسع',
  },
  {
    href: '/one-year',
    ar: 'سنة',
    en: 'One Year',
    imageSrc: '/1year%20old%20baby%20with%20black%20eyes%20not%20eastern%20but%20from%20egypt.jpeg',
    imageAlt: 'One year old baby',
    keywords: 'one 1 year سنة',
  },
  {
    href: '/second-year',
    ar: 'السنة الثانية من العمر',
    en: 'Second Year of Life',
    imageSrc: '/1year%20old%20baby%20with%20black%20eyes%20not%20eastern%20but%20from%20egypt-2.jpeg',
    imageAlt: 'Toddler second year',
    keywords: 'second 2 year ثانية',
  },
  {
    href: '/nine-years',
    ar: 'تسع سنوات',
    en: 'Nine Years',
    imageSrc: '/boy%20with%20girl%209%20years%20old%20and%20happy%20from%20egypt.jpeg',
    imageAlt: 'Children nine years old',
    keywords: 'nine 9 years hpv تسع سنوات',
  },
];

export const CHILDREN_VACCINE_AGE_COUNT = CHILDREN_VACCINE_AGES.length;
