export type FollowUpdatesCopy = {
  titleAr: string;
  intro: string;
  question: string;
  optionHcp: string;
  optionParent: string;
  optionBoth: string;
  follow: string;
  close: string;
  unsubscribe: string;
  subscribed: string;
  pickAudience: string;
  unsupported: string;
  denied: string;
  error: string;
  saving: string;
};

export const FOLLOW_UPDATES_COPY: FollowUpdatesCopy = {
  titleAr: '🔔 اعرف كل جديد على Vaccine Talks',
  intro: 'اعرف أحدث المحتوى والتحديثات الجديدة على Vaccine Talks.',
  question: 'بتستخدم Vaccine Talks بصفتك إيه؟',
  optionHcp: 'من العاملين في المجال الطبي',
  optionParent: 'ولي أمر / مهتم بتطعيمات الأسرة',
  optionBoth: 'الاتنين',
  follow: 'متابعة التحديثات',
  close: 'إغلاق',
  unsubscribe: 'إيقاف التحديثات',
  subscribed: 'التحديثات اتفعلت.',
  pickAudience: 'اختيار نوع الاستخدام أولاً.',
  unsupported: 'المتصفح ده مش بيدعم إشعارات التحديثات.',
  denied: 'الإشعارات مقفولة من إعدادات المتصفح.',
  error: 'حصل خطأ. ممكن المحاولة مرة تانية بعد شوية.',
  saving: 'جاري تفعيل التحديثات…',
};

export function getFollowUpdatesCopy(): FollowUpdatesCopy {
  return FOLLOW_UPDATES_COPY;
}
