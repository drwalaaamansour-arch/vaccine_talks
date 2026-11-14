import { describe, expect, it } from 'vitest';
import { resolveNotificationClickUrl } from '@/lib/content-notifications/click-url';
import {
  parsePushPayload,
  serializePushPayload,
  validateAdminSendInput,
} from '@/lib/content-notifications/payload';
import { SITE_URL } from '@/lib/site';

describe('notification payload generation', () => {
  it('serializes title, body, url, and optional audience metadata', () => {
    const payload = {
      title: '2026–2027 influenza inserts',
      body: 'New-season product inserts are now on the HCP Influenza page.',
      url: '/hcp/influenza#inserts',
      audienceType: 'HCP' as const,
      category: 'inserts',
    };
    expect(JSON.parse(serializePushPayload(payload))).toEqual({
      title: payload.title,
      body: payload.body,
      url: payload.url,
      audienceType: 'HCP',
      category: 'inserts',
    });
  });

  it('parses a push event payload and fills safe defaults', () => {
    const parsed = parsePushPayload(
      JSON.stringify({
        title: 'New RSV page',
        body: 'Updated infant RSV guidance',
        url: '/hcp/rsv',
        audienceType: 'BOTH',
      }),
      SITE_URL
    );
    expect(parsed.title).toBe('New RSV page');
    expect(parsed.body).toBe('Updated infant RSV guidance');
    expect(parsed.url).toBe(`${SITE_URL}/hcp/rsv`);
    expect(parsed.audienceType).toBe('BOTH');
    expect(parsePushPayload('not-json', SITE_URL).title).toBe('Vaccine Talks');
  });

  it('validates admin send input including audience', () => {
    expect(
      validateAdminSendInput({
        title: 'Hello',
        body: 'World',
        url: '/whats-new',
        audienceType: 'PARENT',
      }).ok
    ).toBe(true);
    expect(
      validateAdminSendInput({
        title: 'Hello',
        body: 'World',
        url: '/whats-new',
        audienceType: 'KIDS',
      }).ok
    ).toBe(false);
  });
});

describe('notification click URL', () => {
  it('opens same-origin Vaccine Talks paths and absolute site URLs', () => {
    expect(
      resolveNotificationClickUrl('/hcp/influenza#inserts', SITE_URL)
    ).toBe(`${SITE_URL}/hcp/influenza#inserts`);
    expect(
      resolveNotificationClickUrl(
        'https://www.vaccinetalks.com/non-hcp',
        SITE_URL
      )
    ).toBe('https://www.vaccinetalks.com/non-hcp');
  });

  it('does not open off-site URLs', () => {
    expect(resolveNotificationClickUrl('https://evil.example/phish', SITE_URL)).toBe(
      `${SITE_URL}/`
    );
    expect(resolveNotificationClickUrl('javascript:alert(1)', SITE_URL)).toBe(
      `${SITE_URL}/`
    );
  });
});
