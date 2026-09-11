import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/chat/route';

const { createGroqClientMock, getGroqApiKeyMock } = vi.hoisted(() => ({
  createGroqClientMock: vi.fn(),
  getGroqApiKeyMock: vi.fn(),
}));

vi.mock('@/lib/chat/groq-server', async () => {
  const actual = await vi.importActual<typeof import('@/lib/chat/groq-server')>(
    '@/lib/chat/groq-server'
  );

  return {
    ...actual,
    getGroqApiKey: getGroqApiKeyMock,
    createGroqClient: createGroqClientMock,
  };
});

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/chat', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns missing_api_key when GROQ_API_KEY is unavailable', async () => {
    getGroqApiKeyMock.mockReturnValue(undefined);

    const response = await POST(makeRequest({ message: 'What is PCV20?' }));
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toEqual({
      error: 'Chat service unavailable',
      code: 'missing_api_key',
    });
    expect(createGroqClientMock).not.toHaveBeenCalled();
  });

  it('returns invalid_request when message is missing', async () => {
    getGroqApiKeyMock.mockReturnValue('test-key');

    const response = await POST(makeRequest({ conversationHistory: [] }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.code).toBe('invalid_request');
  });

  it('returns Groq completion text in the expected response shape', async () => {
    getGroqApiKeyMock.mockReturnValue('test-key');
    createGroqClientMock.mockReturnValue({
      chat: {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [{ message: { content: 'PCV20 is a pneumococcal conjugate vaccine.' } }],
          }),
        },
      },
    });

    const response = await POST(
      makeRequest({
        message: 'What is PCV20?',
        conversationHistory: [{ role: 'user', content: 'Hello' }],
      })
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      response: 'PCV20 is a pneumococcal conjugate vaccine.',
    });
    expect(createGroqClientMock).toHaveBeenCalledTimes(1);
  });
});
