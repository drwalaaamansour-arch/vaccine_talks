import { NextRequest, NextResponse } from 'next/server';
import {
  adminNotificationSecretsMatch,
  extractAdminNotificationSecret,
  readAdminNotificationSecret,
} from '@/lib/content-notifications/admin-auth';
import { validateAdminSendInput } from '@/lib/content-notifications/payload';
import {
  configureWebPushFromEnv,
  sendContentNotifications,
} from '@/lib/content-notifications/send';
import {
  getContentPushStore,
  isContentPushStoreConfigured,
} from '@/lib/content-notifications/storage';
import { SITE_URL } from '@/lib/site';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const expected = readAdminNotificationSecret();
  if (!expected) {
    return NextResponse.json(
      { error: 'admin_secret_unconfigured' },
      { status: 503 }
    );
  }

  const provided = extractAdminNotificationSecret(request.headers);
  if (!adminNotificationSecretsMatch(provided, expected)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  if (!isContentPushStoreConfigured()) {
    return NextResponse.json(
      { error: 'content_push_store_unconfigured' },
      { status: 503 }
    );
  }

  const vapid = configureWebPushFromEnv();
  if (!vapid.ok) {
    return NextResponse.json({ error: vapid.error }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const origin = process.env.AUTH_URL?.trim() || SITE_URL;
  const validated = validateAdminSendInput(body, origin);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const audienceType = validated.payload.audienceType;
  if (!audienceType) {
    return NextResponse.json({ error: 'invalid_audience' }, { status: 400 });
  }

  const result = await sendContentNotifications({
    store: getContentPushStore(),
    payload: validated.payload,
    audienceType,
  });

  return NextResponse.json({ ok: true, ...result });
}
