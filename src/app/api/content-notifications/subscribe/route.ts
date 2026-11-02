import { NextRequest, NextResponse } from 'next/server';
import {
  getContentPushStore,
  isContentPushStoreConfigured,
} from '@/lib/content-notifications/storage';
import {
  toStoredSubscriptionRecord,
  validateContentPushSubscriptionInput,
} from '@/lib/content-notifications/subscription-validation';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  if (!isContentPushStoreConfigured()) {
    return NextResponse.json(
      { error: 'content_push_store_unconfigured' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const validated = validateContentPushSubscriptionInput(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const store = getContentPushStore();
  const existing = await store.getByEndpoint(validated.record.endpoint);
  const record = toStoredSubscriptionRecord(
    validated.record,
    new Date().toISOString(),
    existing
  );
  await store.save(record);

  return NextResponse.json({ ok: true, audienceType: record.audienceType });
}
