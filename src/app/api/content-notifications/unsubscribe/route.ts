import { NextRequest, NextResponse } from 'next/server';
import {
  getContentPushStore,
  isContentPushStoreConfigured,
} from '@/lib/content-notifications/storage';

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

  const endpoint =
    body && typeof body === 'object' && 'endpoint' in body
      ? (body as { endpoint?: unknown }).endpoint
      : undefined;

  if (typeof endpoint !== 'string' || !endpoint.startsWith('https://')) {
    return NextResponse.json({ error: 'invalid_endpoint' }, { status: 400 });
  }

  const store = getContentPushStore();
  await store.deleteByEndpoint(endpoint);
  return NextResponse.json({ ok: true });
}
