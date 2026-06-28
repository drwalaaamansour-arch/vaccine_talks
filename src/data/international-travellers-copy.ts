export type InternationalTravellersDoDont = {
  doTitle: string;
  doItems: string[];
  dontTitle: string;
  dontItems: string[];
};

export type InternationalTravellersExternalLink = {
  href: string;
  text: string;
};

export type InternationalTravellersSection = {
  id: string;
  title: string;
  icon: string;
  paragraphs?: string[];
  doDont?: InternationalTravellersDoDont;
  externalLink?: InternationalTravellersExternalLink;
};

export type InternationalTravellersCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: InternationalTravellersSection[];
};

export const INTERNATIONAL_TRAVELLERS_SECTION_IDS = {
  en: {
    overview: 'overview',
    prepare: 'prepare',
    cdcDestinations: 'cdc-destinations',
  },
  ar: {
    overview: 'overview-ar',
    prepare: 'prepare-ar',
    cdcDestinations: 'cdc-destinations-ar',
  },
} as const;

export const CDC_TRAVEL_DESTINATIONS_URL = 'https://wwwnc.cdc.gov/travel/destinations/list';

export const INTERNATIONAL_TRAVELLERS_EN_TOC = [
  { id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.overview, label: 'Overview' },
  {
    id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.prepare,
    label: 'How to prepare before travelling from Egypt',
  },
  {
    id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.cdcDestinations,
    label: 'Find vaccine requirements by destination',
  },
];

export const INTERNATIONAL_TRAVELLERS_AR_TOC = [
  { id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  {
    id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.prepare,
    label: 'كيف تستعد قبل السفر من مصر',
  },
  {
    id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.cdcDestinations,
    label: 'اعثر على متطلبات اللقاحات حسب الوجهة',
  },
];

const AR_HERO_TITLE = 'تطعيمات السفر للمصريين المسافرين إلى الخارج';
const AR_HERO_LEAD =
  'إذا كنت مسافرًا من مصر إلى دولة أخرى، قد تحتاج إلى تطعيمات سفر للوقاية من الأمراض الأكثر شيوعًا في وجهتك.';

export const INTERNATIONAL_TRAVELLERS_COPY: {
  en: InternationalTravellersCopy;
  ar: InternationalTravellersCopy;
} = {
  en: {
    heroTitle: 'Travel vaccinations for Egyptians travelling abroad',
    heroLead:
      'If you are travelling from Egypt to another country, you may need travel vaccinations to protect yourself from illnesses that are more common at your destination.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.overview,
        title: 'Overview',
        icon: '📋',
        paragraphs: [
          'If you are travelling from Egypt to another country, you may need travel vaccinations to protect yourself from illnesses that are more common at your destination.',
          'The vaccinations you need depend on where you are going, the exact area you will visit, how long you will stay, your planned activities, and your personal health history.',
          'Getting vaccinated before travel can reduce your risk of becoming ill while abroad. It can also help prevent infections from being brought back to Egypt, protecting your family, community, and people who may be more vulnerable to serious illness.',
          'Try to speak with a doctor, travel clinic, or qualified health professional at least 4 to 6 weeks before you travel. Some vaccines require more than one dose, and others need time to build protection. If you wait until just before your trip, you may not be fully protected.',
        ],
      },
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.prepare,
        title: 'How to prepare before travelling from Egypt',
        icon: '✅',
        doDont: {
          doTitle: 'Do',
          doItems: [
            'Check the vaccine requirements and health advice for the country you are visiting before you travel.',
            'Ask a doctor or travel health professional whether you need destination-specific vaccines, such as yellow fever, meningococcal, typhoid, hepatitis A or B, rabies, or other vaccines depending on your trip.',
            'Make sure your routine vaccinations are up to date, including vaccines recommended in Egypt for your age and health condition.',
            'Tell the person vaccinating you about any health conditions, allergies, pregnancy, a weakened immune system, or medicines you take.',
            'Book your vaccination appointment at least 4 to 6 weeks before departure, especially if your vaccine needs more than one dose.',
            'Keep a copy of your vaccination records with your travel documents. Some countries may require proof of specific vaccinations before entry.',
          ],
          dontTitle: "Don't",
          dontItems: [
            'Do not have a travel vaccination if you are unwell, including if you have a high temperature. Wait until you feel better.',
            'Do not worry too much about mild side effects, such as a small bump where you were injected, a headache or a high temperature. These are common and usually pass quickly.',
          ],
        },
      },
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.en.cdcDestinations,
        title: 'Find vaccine requirements by destination',
        icon: '🌍',
        paragraphs: [
          "The CDC Travelers' Health destinations list is an online tool for travellers and clinicians. You can look up a country or destination to see health recommendations, required and recommended vaccines, current health notices, and disease risks for that location.",
          'Use this resource when planning a trip from Egypt to check what vaccines or preventive measures may be needed for your destination before you book appointments or travel.',
        ],
        externalLink: {
          href: CDC_TRAVEL_DESTINATIONS_URL,
          text: "Browse CDC Travelers' Health destination advice",
        },
      },
    ],
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.overview,
        title: 'نظرة عامة',
        icon: '📋',
        paragraphs: [
          'إذا كنت مسافرًا من مصر إلى دولة أخرى، قد تحتاج إلى تطعيمات سفر للوقاية من الأمراض الأكثر شيوعًا في وجهتك.',
          'تعتمد اللقاحات التي تحتاجها على الوجهة، والمنطقة التي ستزورها بالتحديد، ومدة إقامتك، والأنشطة المخطط لها، وتاريخك الصحي الشخصي.',
          'الحصول على التطعيمات قبل السفر يقلل من خطر الإصابة بالمرض أثناء وجودك في الخارج. كما يساعد في منع إدخال العدوى إلى مصر، مما يحمي أسرتك ومجتمعك والأشخاص الأكثر عرضة للإصابة بأمراض خطيرة.',
          'حاول التحدث مع طبيب أو عيادة سفر أو متخصص صحي مؤهل قبل السفر بـ 4 إلى 6 أسابيع على الأقل. بعض اللقاحات تتطلب أكثر من جرعة واحدة، وبعضها يحتاج وقتًا لبناء الحماية. إذا انتظرت حتى وقت قريب من رحلتك، قد لا تحصل على حماية كاملة.',
        ],
      },
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.prepare,
        title: 'كيف تستعد قبل السفر من مصر',
        icon: '✅',
        doDont: {
          doTitle: 'افعل',
          doItems: [
            'تحقق من متطلبات اللقاحات والنصائح الصحية للدولة التي ستزورها قبل السفر.',
            'اسأل طبيبًا أو متخصصًا في صحة المسافرين عما إذا كنت بحاجة إلى لقاحات خاصة بالوجهة، مثل الحمى الصفراء، والمكورات السحائية، والتيفوئيد، والتهاب الكبد A أو B، والداء الكلبي، أو غيرها حسب رحلتك.',
            'تأكد من أن تطعيماتك الروتينية محدثة، بما في ذلك اللقاحات الموصى بها في مصر لعمرك وحالتك الصحية.',
            'أخبر الشخص الذي يُطعّمك عن أي حالات صحية، أو حساسية، أو حمل، أو ضعف في جهاز المناعة، أو أدوية تتناولها.',
            'احجز موعد التطعيم قبل موعد المغادرة بـ 4 إلى 6 أسابيع على الأقل، خاصةً إذا كان اللقاح يتطلب أكثر من جرعة واحدة.',
            'احتفظ بنسخة من سجل تطعيماتك مع مستندات السفر. قد تطلب بعض الدول إثبات تطعيمات معينة قبل الدخول.',
          ],
          dontTitle: 'لا تفعل',
          dontItems: [
            'لا تتلقَّ لقاح سفر إذا كنت غير بصحي جيد، بما في ذلك إذا كنت مصابًا بحمى مرتفعة. انتظر حتى تشعر بتحسن.',
            'لا تقلق كثيرًا من الآثار الجانبية الخفيفة، مثل دمل صغير في مكان الحقن، أو صداع، أو حمى مرتفعة. هذه شائعة وعادةً ما تختفي بسرعة.',
          ],
        },
      },
      {
        id: INTERNATIONAL_TRAVELLERS_SECTION_IDS.ar.cdcDestinations,
        title: 'اعثر على متطلبات اللقاحات حسب الوجهة',
        icon: '🌍',
        paragraphs: [
          'قائمة وجهات «صحة المسافرين» من CDC هي أداة إلكترونية للمسافرين ومقدّمي الرعاية الصحية. يمكنك البحث عن دولة أو وجهة للاطلاع على التوصيات الصحية، واللقاحات المطلوبة والموصى بها، والتنبيهات الصحية الحالية، ومخاطر الأمراض في ذلك المكان.',
          'استخدم هذا المورد عند التخطيط لرحلة من مصر للتحقق من اللقاحات أو الإجراءات الوقائية التي قد تحتاجها لوجهتك قبل حجز المواعيد أو السفر.',
        ],
        externalLink: {
          href: CDC_TRAVEL_DESTINATIONS_URL,
          text: 'تصفّح نصائح CDC لصحة المسافرين حسب الوجهة',
        },
      },
    ],
  },
};
