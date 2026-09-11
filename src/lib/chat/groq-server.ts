import Groq from 'groq-sdk';
import { APIConnectionError, APIError, AuthenticationError, RateLimitError } from 'groq-sdk';

/** Production Groq model with strong multilingual support (replaces deprecated free-tier Llama IDs). */
export const GROQ_CHAT_MODEL = 'openai/gpt-oss-120b';

export type ChatApiErrorCode =
  | 'missing_api_key'
  | 'invalid_api_key'
  | 'model_unavailable'
  | 'rate_limited'
  | 'invalid_request'
  | 'groq_api_error'
  | 'network_error'
  | 'unexpected_error';

export type ChatApiErrorBody = {
  error: string;
  code: ChatApiErrorCode;
  details?: string;
};

export function getGroqApiKey(): string | undefined {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  return apiKey || undefined;
}

export function createGroqClient(): Groq | null {
  const apiKey = getGroqApiKey();
  if (!apiKey) {
    return null;
  }

  return new Groq({ apiKey });
}

function isModelUnavailableError(error: APIError): boolean {
  const message = `${error.message} ${JSON.stringify(error.error ?? '')}`.toLowerCase();
  return (
    error.status === 404 ||
    message.includes('model') ||
    message.includes('decommission') ||
    message.includes('deprecated')
  );
}

export function mapGroqErrorToResponse(error: unknown): {
  status: number;
  body: ChatApiErrorBody;
  logMessage: string;
} {
  if (error instanceof AuthenticationError) {
    return {
      status: 503,
      body: {
        error: 'Chat service authentication failed',
        code: 'invalid_api_key',
      },
      logMessage: 'Groq authentication failed (invalid GROQ_API_KEY)',
    };
  }

  if (error instanceof RateLimitError) {
    return {
      status: 429,
      body: {
        error: 'Chat service is rate limited',
        code: 'rate_limited',
      },
      logMessage: 'Groq rate limit reached',
    };
  }

  if (error instanceof APIConnectionError) {
    return {
      status: 503,
      body: {
        error: 'Chat service network error',
        code: 'network_error',
      },
      logMessage: `Groq network error: ${error.message}`,
    };
  }

  if (error instanceof APIError) {
    if (isModelUnavailableError(error)) {
      return {
        status: 503,
        body: {
          error: 'Chat model unavailable',
          code: 'model_unavailable',
          details:
            process.env.NODE_ENV === 'development'
              ? `Configured model: ${GROQ_CHAT_MODEL}`
              : undefined,
        },
        logMessage: `Groq model unavailable (${GROQ_CHAT_MODEL}): ${error.message}`,
      };
    }

    if (error.status === 400 || error.status === 422) {
      return {
        status: 400,
        body: {
          error: 'Invalid chat request',
          code: 'invalid_request',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined,
        },
        logMessage: `Groq invalid request: ${error.message}`,
      };
    }

    return {
      status: 502,
      body: {
        error: 'Chat provider error',
        code: 'groq_api_error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      logMessage: `Groq API error (${error.status ?? 'unknown'}): ${error.message}`,
    };
  }

  const message = error instanceof Error ? error.message : 'Unknown chat error';
  return {
    status: 500,
    body: {
      error: 'Failed to process chat message',
      code: 'unexpected_error',
      details: process.env.NODE_ENV === 'development' ? message : undefined,
    },
    logMessage: `Unexpected chat error: ${message}`,
  };
}
