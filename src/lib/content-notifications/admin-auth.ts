import { timingSafeEqual } from 'node:crypto';

export function readAdminNotificationSecret(
  env: NodeJS.ProcessEnv = process.env
): string | null {
  const secret = env.ADMIN_NOTIFICATION_SECRET?.trim();
  return secret ? secret : null;
}

export function extractAdminNotificationSecret(
  headers: Headers
): string | null {
  const bearer = headers.get('authorization');
  if (bearer?.toLowerCase().startsWith('bearer ')) {
    const token = bearer.slice(7).trim();
    if (token) return token;
  }

  const headerSecret = headers.get('x-admin-notification-secret')?.trim();
  return headerSecret || null;
}

export function adminNotificationSecretsMatch(
  provided: string | null,
  expected: string | null
): boolean {
  if (!provided || !expected) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
