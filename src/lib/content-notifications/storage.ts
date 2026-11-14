import { Redis } from '@upstash/redis';
import { contentPushSubscriptionId } from '@/lib/content-notifications/subscription-id';
import {
  CONTENT_PUSH_REDIS_HASH_KEY,
  type ContentPushSubscriptionRecord,
} from '@/lib/content-notifications/types';

export type ContentPushSubscriptionStore = {
  save(record: ContentPushSubscriptionRecord): Promise<void>;
  getByEndpoint(
    endpoint: string
  ): Promise<ContentPushSubscriptionRecord | null>;
  deleteByEndpoint(endpoint: string): Promise<boolean>;
  listAll(): Promise<ContentPushSubscriptionRecord[]>;
};

export function createMemoryContentPushStore(
  seed: ContentPushSubscriptionRecord[] = []
): ContentPushSubscriptionStore {
  const records = new Map<string, ContentPushSubscriptionRecord>();
  for (const record of seed) {
    records.set(contentPushSubscriptionId(record.endpoint), record);
  }

  return {
    async save(record) {
      records.set(contentPushSubscriptionId(record.endpoint), record);
    },
    async getByEndpoint(endpoint) {
      return records.get(contentPushSubscriptionId(endpoint)) ?? null;
    },
    async deleteByEndpoint(endpoint) {
      return records.delete(contentPushSubscriptionId(endpoint));
    },
    async listAll() {
      return [...records.values()];
    },
  };
}

function readRedisEnv(): { url: string; token: string } | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL?.trim() ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL?.trim() ||
    process.env.KV_REST_API_URL?.trim();
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN?.trim() ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN?.trim() ||
    process.env.KV_REST_API_TOKEN?.trim();
  if (!url || !token) return null;
  return { url, token };
}

export function isContentPushStoreConfigured(): boolean {
  return readRedisEnv() !== null;
}

export function createRedisContentPushStore(
  redis = createRedisClient()
): ContentPushSubscriptionStore {
  return {
    async save(record) {
      await redis.hset(CONTENT_PUSH_REDIS_HASH_KEY, {
        [contentPushSubscriptionId(record.endpoint)]: record,
      });
    },
    async getByEndpoint(endpoint) {
      const value = await redis.hget<ContentPushSubscriptionRecord>(
        CONTENT_PUSH_REDIS_HASH_KEY,
        contentPushSubscriptionId(endpoint)
      );
      return parseRecord(value);
    },
    async deleteByEndpoint(endpoint) {
      const removed = await redis.hdel(
        CONTENT_PUSH_REDIS_HASH_KEY,
        contentPushSubscriptionId(endpoint)
      );
      return removed > 0;
    },
    async listAll() {
      const all = await redis.hgetall<
        Record<string, ContentPushSubscriptionRecord>
      >(CONTENT_PUSH_REDIS_HASH_KEY);
      if (!all) return [];
      return Object.values(all)
        .map(parseRecord)
        .filter((record): record is ContentPushSubscriptionRecord =>
          Boolean(record)
        );
    },
  };
}

export function getContentPushStore(): ContentPushSubscriptionStore {
  return createRedisContentPushStore();
}

function createRedisClient(): Redis {
  const env = readRedisEnv();
  if (!env) {
    throw new Error('content_push_store_unconfigured');
  }
  return new Redis({ url: env.url, token: env.token });
}

function parseRecord(
  value: ContentPushSubscriptionRecord | string | null | undefined
): ContentPushSubscriptionRecord | null {
  if (!value) return null;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as ContentPushSubscriptionRecord;
    } catch {
      return null;
    }
  }
  if (typeof value === 'object' && typeof value.endpoint === 'string') {
    return value;
  }
  return null;
}
