import { SITE_URL } from '@/lib/site';

const ALLOWED_HOSTS = new Set([
  'www.vaccinetalks.com',
  'vaccinetalks.com',
  'localhost',
  '127.0.0.1',
]);

export function resolveNotificationClickUrl(
  rawUrl: unknown,
  origin: string = SITE_URL
): string {
  const fallback = safeOriginHome(origin);

  if (typeof rawUrl !== 'string' || rawUrl.trim() === '') {
    return fallback;
  }

  const value = rawUrl.trim();

  try {
    const resolved = value.startsWith('/')
      ? new URL(value, origin)
      : new URL(value);

    if (resolved.protocol !== 'http:' && resolved.protocol !== 'https:') {
      return fallback;
    }

    if (!ALLOWED_HOSTS.has(resolved.hostname)) {
      return fallback;
    }

    return resolved.toString();
  } catch {
    return fallback;
  }
}

function safeOriginHome(origin: string): string {
  try {
    return new URL('/', origin).toString();
  } catch {
    return `${SITE_URL}/`;
  }
}
