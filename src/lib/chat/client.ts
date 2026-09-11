export type ChatRole = 'user' | 'assistant';

export type ChatHistoryMessage = {
  role: ChatRole;
  content: string;
};

export type ChatClientOutcome =
  | { status: 'success'; response: string }
  | { status: 'error'; kind: 'network' | 'invalid-response' | 'api' };

export const CHAT_API_ROUTE = '/api/chat';

type FetchLike = typeof fetch;

export async function sendChatMessage(
  message: string,
  conversationHistory: ChatHistoryMessage[],
  fetchImpl: FetchLike = fetch
): Promise<ChatClientOutcome> {
  const response = await fetchImpl(CHAT_API_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      conversationHistory,
    }),
  }).catch(() => null);

  if (!response) {
    return { status: 'error', kind: 'network' };
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    return { status: 'error', kind: 'invalid-response' };
  }

  if (
    response.ok &&
    typeof data === 'object' &&
    data !== null &&
    'response' in data &&
    typeof (data as { response: unknown }).response === 'string'
  ) {
    return { status: 'success', response: (data as { response: string }).response };
  }

  return { status: 'error', kind: 'api' };
}
