import { NextRequest, NextResponse } from 'next/server';
import {
  createGroqClient,
  getGroqApiKey,
  GROQ_CHAT_MODEL,
  mapGroqErrorToResponse,
  type ChatApiErrorBody,
} from '@/lib/chat/groq-server';

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `You are a professional medical information assistant specializing in vaccines and immunization. Your role is to provide accurate, evidence-based information about vaccines ONLY.

CRITICAL RULES:
1. ONLY answer questions related to vaccines, immunization, vaccination schedules, vaccine safety, and vaccine-preventable diseases
2. NEVER provide medical diagnoses, treatment recommendations, or personal medical advice
3. NEVER answer questions about non-vaccine medical conditions, symptoms, or treatments
4. If asked about non-vaccine topics, politely redirect: "I'm a vaccine information specialist. I can only provide information about vaccines and immunization. Please consult a healthcare provider for other medical questions."
5. Always emphasize that you provide information only, not medical advice
6. For vaccine-related questions, provide clear, accurate, evidence-based information
7. Support both English and Arabic languages
8. Be helpful, professional, and empathetic

Your responses should be informative, accurate, and focused solely on vaccine-related topics.`;

type ChatHistoryMessage = {
  role: string;
  content: string;
};

function missingApiKeyResponse(): NextResponse<ChatApiErrorBody> {
  if (process.env.NODE_ENV === 'development') {
    console.error(
      'Chat API: Groq API key is missing. Add it to .env.local and restart the dev server.'
    );
  }

  return NextResponse.json(
    {
      error: 'Chat service unavailable',
      code: 'missing_api_key',
    },
    { status: 503 }
  );
}

export async function POST(request: NextRequest) {
  try {
    if (!getGroqApiKey()) {
      return missingApiKeyResponse();
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: 'Invalid JSON body',
          code: 'invalid_request',
        } satisfies ChatApiErrorBody,
        { status: 400 }
      );
    }

    const { message, conversationHistory } = (payload ?? {}) as {
      message?: unknown;
      conversationHistory?: unknown;
    };

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        {
          error: 'Message is required',
          code: 'invalid_request',
        } satisfies ChatApiErrorBody,
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return NextResponse.json(
        {
          error: 'Message is required',
          code: 'invalid_request',
        } satisfies ChatApiErrorBody,
        { status: 400 }
      );
    }

    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory as ChatHistoryMessage[]) {
        if (
          (msg.role === 'user' || msg.role === 'assistant') &&
          typeof msg.content === 'string' &&
          msg.content.trim()
        ) {
          messages.push({
            role: msg.role,
            content: msg.content.trim(),
          });
        }
      }
    }

    messages.push({ role: 'user', content: trimmedMessage });

    const groq = createGroqClient();
    if (!groq) {
      return missingApiKeyResponse();
    }

    const completion = await groq.chat.completions.create({
      messages,
      model: GROQ_CHAT_MODEL,
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    const response =
      completion.choices[0]?.message?.content?.trim() ||
      "I apologize, but I'm unable to process that request. Please ask me about vaccines or immunization.";

    return NextResponse.json({ response });
  } catch (error) {
    const mapped = mapGroqErrorToResponse(error);
    console.error('Chat API error:', mapped.logMessage);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
