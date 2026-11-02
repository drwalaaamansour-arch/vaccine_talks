import { isContentNotificationAudience } from '@/lib/content-notifications/audience';
import type {
  ContentPushSubscriptionRecord,
} from '@/lib/content-notifications/types';

const FORBIDDEN_FIELDS = [
  'dob',
  'dateOfBirth',
  'child',
  'childId',
  'vaccineHistory',
  'history',
  'userId',
  'email',
  'name',
  'identity',
] as const;

export type SubscriptionValidationResult =
  | { ok: true; record: Omit<ContentPushSubscriptionRecord, 'createdAt' | 'updatedAt'> }
  | { ok: false; error: string };

function isHttpsEndpoint(endpoint: string): boolean {
  try {
    const url = new URL(endpoint);
    return url.protocol === 'https:' && endpoint.length < 2048;
  } catch {
    return false;
  }
}

function isPushKey(value: unknown): value is string {
  return typeof value === 'string' && value.length >= 8 && value.length < 512;
}

export function validateContentPushSubscriptionInput(
  input: unknown
): SubscriptionValidationResult {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: 'invalid_subscription' };
  }

  const body = input as Record<string, unknown>;

  for (const field of FORBIDDEN_FIELDS) {
    if (field in body) {
      return { ok: false, error: 'forbidden_field' };
    }
  }

  if (typeof body.endpoint !== 'string' || !isHttpsEndpoint(body.endpoint)) {
    return { ok: false, error: 'invalid_endpoint' };
  }

  const expirationTime =
    body.expirationTime === null || body.expirationTime === undefined
      ? null
      : typeof body.expirationTime === 'number' &&
          Number.isFinite(body.expirationTime)
        ? body.expirationTime
        : undefined;

  if (expirationTime === undefined) {
    return { ok: false, error: 'invalid_expiration' };
  }

  const keys = body.keys;
  if (!keys || typeof keys !== 'object') {
    return { ok: false, error: 'invalid_keys' };
  }

  const pushKeys = keys as Record<string, unknown>;
  if (!isPushKey(pushKeys.p256dh) || !isPushKey(pushKeys.auth)) {
    return { ok: false, error: 'invalid_keys' };
  }

  if (!isContentNotificationAudience(body.audienceType)) {
    return { ok: false, error: 'invalid_audience' };
  }

  return {
    ok: true,
    record: {
      endpoint: body.endpoint,
      expirationTime,
      keys: {
        p256dh: pushKeys.p256dh,
        auth: pushKeys.auth,
      },
      audienceType: body.audienceType,
    },
  };
}

export function toStoredSubscriptionRecord(
  validated: Omit<ContentPushSubscriptionRecord, 'createdAt' | 'updatedAt'>,
  nowIso: string,
  existing?: ContentPushSubscriptionRecord | null
): ContentPushSubscriptionRecord {
  return {
    endpoint: validated.endpoint,
    expirationTime: validated.expirationTime,
    keys: {
      p256dh: validated.keys.p256dh,
      auth: validated.keys.auth,
    },
    audienceType: validated.audienceType,
    createdAt: existing?.createdAt ?? nowIso,
    updatedAt: nowIso,
  };
}
