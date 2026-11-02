import { describe, expect, it } from 'vitest';
import {
  adminNotificationSecretsMatch,
  extractAdminNotificationSecret,
} from '@/lib/content-notifications/admin-auth';

describe('admin notification protection', () => {
  it('reads Bearer or custom header secrets and compares them safely', () => {
    expect(
      extractAdminNotificationSecret(
        new Headers({ authorization: 'Bearer super-secret' })
      )
    ).toBe('super-secret');
    expect(
      extractAdminNotificationSecret(
        new Headers({ 'x-admin-notification-secret': 'header-secret' })
      )
    ).toBe('header-secret');
    expect(adminNotificationSecretsMatch('abc12345', 'abc12345')).toBe(true);
    expect(adminNotificationSecretsMatch('abc12345', 'wrongpass')).toBe(false);
    expect(adminNotificationSecretsMatch(null, 'abc12345')).toBe(false);
  });
});
