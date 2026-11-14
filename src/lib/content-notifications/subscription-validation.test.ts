import { describe, expect, it } from 'vitest';
import {
  toStoredSubscriptionRecord,
  validateContentPushSubscriptionInput,
} from '@/lib/content-notifications/subscription-validation';

const validInput = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/abc123',
  expirationTime: null,
  keys: {
    p256dh: 'BNcRdreALRFGBmOOSnyU6kdwJX_ih2hAtpBD_RW84',
    auth: 'tBHItJI5svbpez7KI4CCXg',
  },
  audienceType: 'PARENT',
};

describe('subscription validation', () => {
  it('accepts a browser PushSubscription with audience and no identity fields', () => {
    const result = validateContentPushSubscriptionInput(validInput);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.record).toEqual({
      endpoint: validInput.endpoint,
      expirationTime: null,
      keys: validInput.keys,
      audienceType: 'PARENT',
    });
    expect(result.record).not.toHaveProperty('dob');
    expect(result.record).not.toHaveProperty('userId');
  });

  it('rejects http endpoints, missing keys, and invalid audience', () => {
    expect(
      validateContentPushSubscriptionInput({
        ...validInput,
        endpoint: 'http://insecure.example/push',
      }).ok
    ).toBe(false);
    expect(
      validateContentPushSubscriptionInput({
        ...validInput,
        keys: { p256dh: 'x', auth: 'y' },
      }).ok
    ).toBe(false);
    expect(
      validateContentPushSubscriptionInput({
        ...validInput,
        audienceType: 'FAMILY',
      }).ok
    ).toBe(false);
  });

  it('rejects medical or identity fields instead of storing them', () => {
    expect(
      validateContentPushSubscriptionInput({ ...validInput, dob: '2018-01-01' })
        .ok
    ).toBe(false);
    expect(
      validateContentPushSubscriptionInput({
        ...validInput,
        vaccineHistory: ['mmr'],
      }).ok
    ).toBe(false);
    expect(
      validateContentPushSubscriptionInput({ ...validInput, userId: 'abc' }).ok
    ).toBe(false);
  });

  it('keeps createdAt when updating an existing subscription', () => {
    const first = toStoredSubscriptionRecord(
      {
        endpoint: validInput.endpoint,
        expirationTime: null,
        keys: validInput.keys,
        audienceType: 'HCP',
      },
      '2026-11-01T00:00:00.000Z'
    );
    const updated = toStoredSubscriptionRecord(
      {
        endpoint: validInput.endpoint,
        expirationTime: 123,
        keys: validInput.keys,
        audienceType: 'BOTH',
      },
      '2026-11-02T00:00:00.000Z',
      first
    );
    expect(updated.createdAt).toBe('2026-11-01T00:00:00.000Z');
    expect(updated.updatedAt).toBe('2026-11-02T00:00:00.000Z');
    expect(updated.audienceType).toBe('BOTH');
    expect(updated.expirationTime).toBe(123);
  });
});
