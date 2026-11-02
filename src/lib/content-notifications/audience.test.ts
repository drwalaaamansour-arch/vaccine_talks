import { describe, expect, it } from 'vitest';
import {
  isContentNotificationAudience,
  selectSubscriptionsForAudience,
  subscriptionMatchesSendAudience,
} from '@/lib/content-notifications/audience';
import type { ContentPushSubscriptionRecord } from '@/lib/content-notifications/types';

function record(
  audienceType: ContentPushSubscriptionRecord['audienceType'],
  endpoint: string
): ContentPushSubscriptionRecord {
  return {
    endpoint,
    expirationTime: null,
    keys: { p256dh: 'p256dh-key-value', auth: 'auth-key-value' },
    audienceType,
    createdAt: '2026-11-02T00:00:00.000Z',
    updatedAt: '2026-11-02T00:00:00.000Z',
  };
}

const hcp = record('HCP', 'https://push.example/hcp');
const parent = record('PARENT', 'https://push.example/parent');
const both = record('BOTH', 'https://push.example/both');

describe('audience segmentation', () => {
  it('accepts only HCP, PARENT, and BOTH', () => {
    expect(isContentNotificationAudience('HCP')).toBe(true);
    expect(isContentNotificationAudience('PARENT')).toBe(true);
    expect(isContentNotificationAudience('BOTH')).toBe(true);
    expect(isContentNotificationAudience('ALL')).toBe(false);
    expect(isContentNotificationAudience('child')).toBe(false);
  });

  it('sends HCP notifications to HCP and BOTH only', () => {
    expect(subscriptionMatchesSendAudience('HCP', 'HCP')).toBe(true);
    expect(subscriptionMatchesSendAudience('BOTH', 'HCP')).toBe(true);
    expect(subscriptionMatchesSendAudience('PARENT', 'HCP')).toBe(false);
    expect(selectSubscriptionsForAudience([hcp, parent, both], 'HCP')).toEqual([
      hcp,
      both,
    ]);
  });

  it('sends PARENT notifications to PARENT and BOTH only', () => {
    expect(subscriptionMatchesSendAudience('PARENT', 'PARENT')).toBe(true);
    expect(subscriptionMatchesSendAudience('BOTH', 'PARENT')).toBe(true);
    expect(subscriptionMatchesSendAudience('HCP', 'PARENT')).toBe(false);
    expect(
      selectSubscriptionsForAudience([hcp, parent, both], 'PARENT')
    ).toEqual([parent, both]);
  });

  it('sends BOTH notifications to every active subscription', () => {
    expect(selectSubscriptionsForAudience([hcp, parent, both], 'BOTH')).toEqual(
      [hcp, parent, both]
    );
  });
});
