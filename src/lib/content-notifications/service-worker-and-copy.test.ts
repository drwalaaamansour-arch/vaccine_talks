import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FOLLOW_UPDATES_COPY } from '@/lib/content-notifications/copy';

const swSource = readFileSync(
  resolve(process.cwd(), 'src/app/sw.ts'),
  'utf8'
);
const followSource = readFileSync(
  resolve(
    process.cwd(),
    'src/components/content-notifications/FollowVaccineTalksUpdates.tsx'
  ),
  'utf8'
);
const layoutSource = readFileSync(
  resolve(process.cwd(), 'src/app/layout.tsx'),
  'utf8'
);
const homeSource = readFileSync(
  resolve(process.cwd(), 'src/app/page.tsx'),
  'utf8'
);

describe('service worker content-push handlers', () => {
  it('adds push and notificationclick without removing PDF caching', () => {
    expect(swSource).toContain('cacheName: "medical-pdfs"');
    expect(swSource).toContain('...defaultCache');
    expect(swSource).toContain('serwist.addEventListeners()');
    expect(swSource).toContain('addEventListener("push"');
    expect(swSource).toContain('addEventListener("notificationclick"');
    expect(swSource).toContain('parsePushPayload');
    expect(swSource).toContain('resolveNotificationClickUrl');
    expect(swSource).toContain('openWindow(url)');
    expect(swSource).not.toContain('reminders');
    expect(swSource).not.toContain('vaccine-checker');
  });
});

describe('follow updates modal copy and wiring', () => {
  it('uses the exact gender-neutral Arabic title and copy', () => {
    expect(FOLLOW_UPDATES_COPY.titleAr).toBe(
      '🔔 اعرف كل جديد على Vaccine Talks'
    );
    expect(FOLLOW_UPDATES_COPY.intro).toBe(
      'اعرف أحدث المحتوى والتحديثات الجديدة على Vaccine Talks.'
    );
    expect(FOLLOW_UPDATES_COPY.question).toBe(
      'إنت بتستخدم Vaccine Talks علشان:'
    );
    expect(FOLLOW_UPDATES_COPY.optionHcp).toBe(
      'بتشتغل في المجال الطبي'
    );
    expect(FOLLOW_UPDATES_COPY.optionParent).toBe(
      'مهتم بتطعيمات الأسرة'
    );
    expect(FOLLOW_UPDATES_COPY.optionBoth).toBe('الاتنين');
    expect(FOLLOW_UPDATES_COPY.follow).toBe('متابعة التحديثات');
    expect(FOLLOW_UPDATES_COPY.pickAudience).toBe(
      'اختيار نوع الاستخدام أولاً.'
    );
    expect(FOLLOW_UPDATES_COPY.error).toBe(
      'حصل خطأ. ممكن المحاولة مرة تانية بعد شوية.'
    );
    expect(FOLLOW_UPDATES_COPY.subscribed).toBe('التحديثات اتفعلت.');
    expect(FOLLOW_UPDATES_COPY.unsubscribe).toBe('إيقاف التحديثات');
    expect(FOLLOW_UPDATES_COPY.close).toBe('إغلاق');

    const arabicBlob = Object.values(FOLLOW_UPDATES_COPY).join('\n');
    expect(arabicBlob).not.toContain('تابعي');
    expect(arabicBlob).not.toContain('خليكي');
    expect(arabicBlob).not.toContain('خليك');
    expect(arabicBlob).not.toContain('أنتِ');
    expect(arabicBlob).not.toContain('انتِ');
    expect(arabicBlob).not.toContain('أنتَ');
  });

  it('is mounted site-wide in the root layout, not only on the homepage', () => {
    expect(layoutSource).toContain('<FollowVaccineTalksUpdates />');
    expect(homeSource).not.toContain('FollowVaccineTalksUpdates');
    expect(homeSource).not.toContain('SiteFooter');
    expect(homeSource).toContain('FollowUpdatesFooterLink');
    expect(followSource).toContain('role="dialog"');
    expect(followSource).not.toContain('follow-updates-fallback');
  });

  it('requests permission only after an explicit follow click', () => {
    expect(followSource).toContain('subscribeToContentNotifications');
    expect(followSource).toContain('onClick={onFollow}');
    expect(followSource).toContain('rememberFollowPromptDismissed');
    expect(followSource).toContain('rememberFollowPromptSubscribed');
    expect(followSource).toContain("event.key === 'Escape'");
    expect(followSource).not.toMatch(/useEffect\([\s\S]*requestPermission/);
    expect(followSource).not.toMatch(
      /useEffect\([\s\S]*Notification\.requestPermission/
    );
  });
});
