import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CHAT_API_ROUTE, sendChatMessage } from '@/lib/chat/client';
import { getChatUiMessages } from '@/lib/site-ui-messages';

describe('sendChatMessage', () => {
  it('3. calls the internal chat API route with the expected payload', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: 'Rotavirus vaccines are given orally.' }),
    });

    const outcome = await sendChatMessage(
      'What is rotavirus vaccine?',
      [{ role: 'assistant', content: 'Welcome' }],
      fetchMock
    );

    expect(outcome).toEqual({
      status: 'success',
      response: 'Rotavirus vaccines are given orally.',
    });
    expect(fetchMock).toHaveBeenCalledWith(
      CHAT_API_ROUTE,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          message: 'What is rotavirus vaccine?',
          conversationHistory: [{ role: 'assistant', content: 'Welcome' }],
        }),
      })
    );
    expect(CHAT_API_ROUTE).toBe('/api/chat');
    expect(CHAT_API_ROUTE).not.toContain('localhost');
  });

  it('7. returns an API error for failed responses', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Chat service unavailable', code: 'missing_api_key' }),
    });

    const outcome = await sendChatMessage('Hello', [], fetchMock);
    expect(outcome).toEqual({ status: 'error', kind: 'api' });
  });

  it('7c. accepts the success response shape from /api/chat', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: 'Influenza vaccines are updated annually.' }),
    });

    const outcome = await sendChatMessage('What is influenza vaccine?', [], fetchMock);
    expect(outcome.status).toBe('success');
    if (outcome.status === 'success') {
      expect(outcome.response).toContain('Influenza');
    }
  });

  it('7b. exposes localized failure copy', () => {
    expect(getChatUiMessages('ar').error).toBe('حصلت مشكلة في الاتصال. جرّب تاني.');
    expect(getChatUiMessages('en').error).toBe('Something went wrong. Please try again.');
    expect(getChatUiMessages('ar').thinking).toBe('جاري الرد...');
    expect(getChatUiMessages('en').thinking).toBe('Thinking...');
  });

  it('7d. exposes bilingual AI disclaimer copy', () => {
    const ar = getChatUiMessages('ar');
    const en = getChatUiMessages('en');
    expect(ar.disclaimerAr).toContain('الذكاء الاصطناعي');
    expect(ar.disclaimerEn).toContain('artificial intelligence');
    expect(en.disclaimerAr).toBe(ar.disclaimerAr);
    expect(en.disclaimerEn).toBe(ar.disclaimerEn);
  });
});

describe('Chat UI wiring', () => {
  it('1. floating button opens chat and 2. close button closes it', () => {
    const source = readFileSync(resolve(process.cwd(), 'src/components/ChatButton.tsx'), 'utf8');

    expect(source).toContain('const openChat = () => setIsOpen(true)');
    expect(source).toContain('const closeChat = () => setIsOpen(false)');
    expect(source).toContain('aria-label={isOpen ? ui.closeChat : ui.openChat}');
    expect(source).toContain('onClick={closeChat}');
  });

  it('8. renders only one chat panel at a time', () => {
    const source = readFileSync(resolve(process.cwd(), 'src/components/ChatButton.tsx'), 'utf8');
    expect(source.match(/\{isOpen && \(/g)?.length).toBe(1);
    expect(source).toContain('id="vaccine-talks-chat-window"');
    expect(source).toContain('chat-window-disclaimer');
    expect(source).toContain('ui.disclaimerAr');
    expect(source).toContain('ui.disclaimerEn');
  });

  it('4. sends one user message and 5. appends one assistant response on success', () => {
    const source = readFileSync(resolve(process.cwd(), 'src/components/ChatButton.tsx'), 'utf8');
    expect(source).toContain('setMessages((prev) => [...prev, userMessage])');
    expect(source).toContain("role: 'assistant',\n          content: outcome.response");
    expect(source).not.toContain('setMessages((prev) => [...prev, userMessage,');
  });

  it('6. shows loading text while waiting', () => {
    const source = readFileSync(resolve(process.cwd(), 'src/components/ChatButton.tsx'), 'utf8');
    expect(source).toContain('{isLoading && (');
    expect(source).toContain('{ui.thinking}');
    expect(source).toContain('disabled={isLoading');
  });

  it('9. does not expose API keys in client code', () => {
    const chatButton = readFileSync(resolve(process.cwd(), 'src/components/ChatButton.tsx'), 'utf8');
    const chatClient = readFileSync(resolve(process.cwd(), 'src/lib/chat/client.ts'), 'utf8');
    const apiRoute = readFileSync(resolve(process.cwd(), 'src/app/api/chat/route.ts'), 'utf8');
    const groqServer = readFileSync(resolve(process.cwd(), 'src/lib/chat/groq-server.ts'), 'utf8');

    expect(chatButton).not.toContain('GROQ_API_KEY');
    expect(chatClient).not.toContain('GROQ_API_KEY');
    expect(chatButton).not.toContain('process.env');
    expect(apiRoute).not.toContain('GROQ_API_KEY');
    expect(groqServer).toContain('process.env.GROQ_API_KEY');
    expect(groqServer).not.toMatch(/apiKey:\s*['"][^'"]+['"]/);
  });
});
