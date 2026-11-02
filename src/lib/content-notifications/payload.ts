import { isContentNotificationAudience } from '@/lib/content-notifications/audience';
import { resolveNotificationClickUrl } from '@/lib/content-notifications/click-url';
import type {
  ContentNotificationAudience,
  ContentPushPayload,
} from '@/lib/content-notifications/types';

const DEFAULT_TITLE = 'Vaccine Talks';
const DEFAULT_BODY = 'New update available';
const DEFAULT_URL = '/';

export type ContentPushSendInput = {
  title: string;
  body: string;
  url: string;
  audienceType: ContentNotificationAudience;
  category?: string;
};

export type PayloadValidationResult =
  | { ok: true; payload: ContentPushPayload }
  | { ok: false; error: string };

export function parsePushPayload(
  raw: string | null | undefined,
  origin?: string
): ContentPushPayload {
  if (!raw) {
    return defaultPayload(origin);
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') {
      return defaultPayload(origin);
    }
    return normalizePushPayload(parsed as Record<string, unknown>, origin);
  } catch {
    return defaultPayload(origin);
  }
}

export function validateAdminSendInput(
  input: unknown,
  origin?: string
): PayloadValidationResult {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: 'invalid_payload' };
  }

  const body = input as Record<string, unknown>;
  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const text = typeof body.body === 'string' ? body.body.trim() : '';
  const url = typeof body.url === 'string' ? body.url.trim() : '';

  if (title.length < 1 || title.length > 120) {
    return { ok: false, error: 'invalid_title' };
  }
  if (text.length < 1 || text.length > 500) {
    return { ok: false, error: 'invalid_body' };
  }
  if (url.length < 1 || url.length > 500) {
    return { ok: false, error: 'invalid_url' };
  }
  if (!isContentNotificationAudience(body.audienceType)) {
    return { ok: false, error: 'invalid_audience' };
  }

  const category =
    typeof body.category === 'string' && body.category.trim()
      ? body.category.trim().slice(0, 80)
      : undefined;

  return {
    ok: true,
    payload: {
      title,
      body: text,
      url: resolveNotificationClickUrl(url, origin),
      audienceType: body.audienceType,
      category,
    },
  };
}

export function serializePushPayload(payload: ContentPushPayload): string {
  return JSON.stringify({
    title: payload.title,
    body: payload.body,
    url: payload.url,
    ...(payload.audienceType ? { audienceType: payload.audienceType } : {}),
    ...(payload.category ? { category: payload.category } : {}),
  });
}

function normalizePushPayload(
  body: Record<string, unknown>,
  origin?: string
): ContentPushPayload {
  const title =
    typeof body.title === 'string' && body.title.trim()
      ? body.title.trim()
      : DEFAULT_TITLE;
  const text =
    typeof body.body === 'string' && body.body.trim()
      ? body.body.trim()
      : DEFAULT_BODY;
  const url = resolveNotificationClickUrl(
    typeof body.url === 'string' ? body.url : DEFAULT_URL,
    origin
  );

  return {
    title,
    body: text,
    url,
    audienceType: isContentNotificationAudience(body.audienceType)
      ? body.audienceType
      : undefined,
    category:
      typeof body.category === 'string' && body.category.trim()
        ? body.category.trim()
        : undefined,
  };
}

function defaultPayload(origin?: string): ContentPushPayload {
  return {
    title: DEFAULT_TITLE,
    body: DEFAULT_BODY,
    url: resolveNotificationClickUrl(DEFAULT_URL, origin),
  };
}
