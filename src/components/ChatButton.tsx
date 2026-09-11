'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { sendChatMessage, type ChatHistoryMessage } from '@/lib/chat/client';
import {
  getChatUiMessages,
  resolveSiteUiLanguage,
  type SiteUiLanguage,
} from '@/lib/site-ui-messages';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function createWelcomeMessage(language: SiteUiLanguage): Message {
  return {
    role: 'assistant',
    content: getChatUiMessages(language).welcome,
    timestamp: new Date(),
  };
}

export default function ChatButton() {
  const [language, setLanguage] = useState<SiteUiLanguage>('ar');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  const ui = getChatUiMessages(language);

  useEffect(() => {
    const resolved = resolveSiteUiLanguage(document.documentElement.lang);
    setLanguage(resolved);
    setMessages([createWelcomeMessage(resolved)]);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      return;
    }

    chatButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  const sendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    const historyForRequest: ChatHistoryMessage[] = messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const outcome = await sendChatMessage(trimmed, historyForRequest);

    if (outcome.status === 'success') {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: outcome.response,
          timestamp: new Date(),
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: ui.error,
          timestamp: new Date(),
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <>
      <button
        ref={chatButtonRef}
        type="button"
        onClick={() => (isOpen ? closeChat() : openChat())}
        className="chat-button"
        aria-label={isOpen ? ui.closeChat : ui.openChat}
        aria-expanded={isOpen}
        aria-controls="vaccine-talks-chat-window"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          <div className="chat-backdrop" onClick={closeChat} aria-hidden="true" />

          <div
            id="vaccine-talks-chat-window"
            className="chat-window"
            role="dialog"
            aria-modal="true"
            aria-label={ui.title}
          >
            <div className="chat-window-header">
              <div className="chat-window-header-copy">
                <h3 className="chat-window-title">{ui.title}</h3>
                <p className="chat-window-subtitle">{ui.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={closeChat}
                className="chat-window-close"
                aria-label={ui.closeChat}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="chat-window-messages">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.timestamp.getTime()}`}
                  className={`chat-message-row chat-message-row--${message.role}`}
                >
                  {message.role === 'assistant' && (
                    <div className="chat-message-avatar" aria-hidden>
                      🩺
                    </div>
                  )}
                  <div className={`chat-message-bubble chat-message-bubble--${message.role}`}>
                    <p>{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="chat-message-avatar" aria-hidden>
                      👤
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="chat-message-row chat-message-row--assistant">
                  <div className="chat-message-avatar" aria-hidden>
                    🩺
                  </div>
                  <div className="chat-message-bubble chat-message-bubble--assistant">
                    <p className="chat-loading-text">{ui.thinking}</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-window-input-area">
              <p className="chat-window-disclaimer chat-window-disclaimer--ar" dir="rtl" lang="ar">
                {ui.disclaimerAr}
              </p>
              <p className="chat-window-disclaimer chat-window-disclaimer--en" dir="ltr" lang="en">
                {ui.disclaimerEn}
              </p>
              <div className="chat-window-input-row">
                <input
                  ref={inputRef}
                  id="vaccine-talks-chat-input"
                  type="text"
                  placeholder={ui.inputPlaceholder}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={isLoading}
                  className="chat-window-input"
                  aria-label={ui.inputLabel}
                />
                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="chat-window-send"
                >
                  {isLoading ? '...' : ui.send}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
