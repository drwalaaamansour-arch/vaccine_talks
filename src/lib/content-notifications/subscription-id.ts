import { createHash } from 'node:crypto';

export function contentPushSubscriptionId(endpoint: string): string {
  return createHash('sha256').update(endpoint).digest('hex');
}
