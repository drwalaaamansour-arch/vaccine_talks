import { MR_CAMPAIGN_2026_ANCHOR, MR_CAMPAIGN_TEASER_AR } from '@/data/whats-new/mr-campaign-2026';

export type WhatsNewIndexItem = {
  id: string;
  date: string;
  badge: string;
  title: string;
  summary: string;
  keywords: string;
  emoji: string;
};

export const WHATS_NEW_HERO = {
  tag: 'للجميع · مصر · Vaccine Talks',
  title: 'ما الجديد',
  subtitle: 'حملات التطعيم وأخبار اللقاحات والتحديثات الصحية',
  lead:
    'أخبار التطعيم في توقيتها للأسر والعاملين في الصحة في مصر — حملات وطنية، لقاحات جديدة، وإرشادات موثوقة من Vaccine Talks.',
} as const;

export const WHATS_NEW_INTRO = [
  'التحديثات مرتبة من الأحدث إلى الأقدم. ابدأ من بطاقات «كل التحديثات» للانتقال السريع، ثم اقرأ المقالات الكاملة في قسم «أحدث التحديثات» بالأسفل.',
] as const;

export const WHATS_NEW_UI = {
  backLink: '← العودة إلى غير العاملين بالمجال الطبي',
  globalUpdatesLink: 'Global Vaccine Updates',
  statUpdates: 'تحديثات',
  statNewestFirst: 'الأحدث أولاً',
  searchPlaceholder: 'ابحث في التحديثات… مثل: حصبة، MR، RSV',
  searchAria: 'البحث في ما الجديد',
  clearSearch: 'مسح البحث',
  showingUpdates: (n: number) => `عرض ${n} ${n === 1 ? 'تحديث' : 'تحديثات'}`,
  noMatches: 'لا توجد نتائج — جرّب كلمة أخرى',
  latestTitle: 'أحدث التحديثات',
  latestSubtitle: 'مقالات كاملة — الأحدث أولاً.',
  allTitle: 'كل التحديثات',
  allSubtitle: 'بطاقات سريعة للانتقال — اضغط «اقرأ التحديث» للمقال الكامل بالأسفل.',
  readUpdate: 'اقرأ التحديث',
  rsvMoreLink: 'لمعلومات اكتر عن RSV',
  emptySearch: 'لا توجد تحديثات مطابقة لبحثك.',
  imageAlt: 'أخبار وتحديثات التطعيم',
} as const;

export const WHATS_NEW_INDEX: WhatsNewIndexItem[] = [
  {
    id: MR_CAMPAIGN_2026_ANCHOR,
    date: MR_CAMPAIGN_TEASER_AR.date,
    badge: MR_CAMPAIGN_TEASER_AR.category,
    title: MR_CAMPAIGN_TEASER_AR.title,
    summary:
      'حملة MR وطنية تبدأ 25 أكتوبر 2026 للأطفال من 9 أشهر إلى 10 سنوات — مجاناً في جميع أنحاء مصر.',
    keywords:
      'حصبة rubella mr حملة مصر 2026 وزارة الصحة تطعيم أطفال measles campaign',
    emoji: '📢',
  },
  {
    id: 'whats-new-rsv-pfizer-egypt-2025',
    date: 'ديسمبر 2025',
    badge: 'تحديثات',
    title: 'فايزر مصر: لقاح RSV للحوامل',
    summary:
      'فايزر مصر تعلن عن لقاح للحوامل للمساعدة في حماية المواليد من فيروس RSV.',
    keywords: 'rsv pfizer فايزر حمل حوامل تنفسي مخلوي',
    emoji: '🤰',
  },
];

export const WHATS_NEW_COUNT = WHATS_NEW_INDEX.length;
