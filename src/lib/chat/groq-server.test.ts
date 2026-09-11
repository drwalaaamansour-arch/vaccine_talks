import { describe, expect, it } from 'vitest';
import { APIConnectionError, AuthenticationError, RateLimitError } from 'groq-sdk';
import { mapGroqErrorToResponse } from '@/lib/chat/groq-server';

const emptyHeaders = {} as ConstructorParameters<typeof AuthenticationError>[3];

describe('mapGroqErrorToResponse', () => {
  it('maps authentication failures to invalid_api_key', () => {
    const mapped = mapGroqErrorToResponse(
      new AuthenticationError(401, { message: 'Invalid API Key' }, 'Invalid API Key', emptyHeaders)
    );

    expect(mapped.status).toBe(503);
    expect(mapped.body.code).toBe('invalid_api_key');
  });

  it('maps rate limits to rate_limited', () => {
    const mapped = mapGroqErrorToResponse(
      new RateLimitError(429, { message: 'Rate limit reached' }, 'Rate limit reached', emptyHeaders)
    );

    expect(mapped.status).toBe(429);
    expect(mapped.body.code).toBe('rate_limited');
  });

  it('maps network failures to network_error', () => {
    const mapped = mapGroqErrorToResponse(new APIConnectionError({ message: 'Connection failed' }));

    expect(mapped.status).toBe(503);
    expect(mapped.body.code).toBe('network_error');
  });
});
