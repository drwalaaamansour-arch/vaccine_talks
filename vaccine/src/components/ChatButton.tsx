'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your vaccine information assistant. I can help you with questions about vaccines, immunization schedules, vaccine safety, and vaccine-preventable diseases. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or check your connection.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button"
        aria-label="Open chat"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#40606D',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(64, 96, 109, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          touchAction: 'manipulation',
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth >= 768) {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(64, 96, 109, 0.6)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(64, 96, 109, 0.4)';
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(2px)',
              zIndex: 9998,
            }}
          />
          
          {/* Chat Window */}
          <div
            className="chat-window"
            style={{
              position: 'fixed',
              bottom: '80px',
              right: '1rem',
              left: '1rem',
              width: 'auto',
              maxWidth: '420px',
              height: 'calc(100vh - 100px)',
              maxHeight: '600px',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'slideUp 0.3s ease',
            }}
          >
            {/* Chat Header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                background: '#40606D',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 600, lineHeight: '1.3' }}>
                  🩺 Vaccine Information Assistant
                </h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', opacity: 0.9, lineHeight: '1.3' }}>
                  Ask me about vaccines & immunization
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '44px',
                  minHeight: '44px',
                  touchAction: 'manipulation',
                  flexShrink: 0,
                  marginLeft: '0.5rem',
                }}
                aria-label="Close chat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages Area */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                overflowY: 'auto',
                background: '#f8f9fa',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  {message.role === 'assistant' && (
                    <div
                      style={{
                        width: 'clamp(28px, 8vw, 32px)',
                        height: 'clamp(28px, 8vw, 32px)',
                        borderRadius: '50%',
                        background: '#40606D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      }}
                    >
                      🩺
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: '85%',
                      padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.875rem, 2.5vw, 1rem)',
                      borderRadius: '12px',
                      background: message.role === 'user' ? '#40606D' : 'white',
                      color: message.role === 'user' ? 'white' : '#40606D',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                      lineHeight: '1.5',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                      {message.content}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <div
                      style={{
                        width: 'clamp(28px, 8vw, 32px)',
                        height: 'clamp(28px, 8vw, 32px)',
                        borderRadius: '50%',
                        background: '#40606D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      }}
                    >
                      👤
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(28px, 8vw, 32px)',
                      height: 'clamp(28px, 8vw, 32px)',
                      borderRadius: '50%',
                      background: '#40606D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                    }}
                  >
                    🩺
                  </div>
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'white',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.25rem',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#40606D',
                          animation: 'bounce 1.4s infinite ease-in-out',
                        }}
                      />
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#40606D',
                          animation: 'bounce 1.4s infinite ease-in-out',
                          animationDelay: '0.2s',
                        }}
                      />
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#40606D',
                          animation: 'bounce 1.4s infinite ease-in-out',
                          animationDelay: '0.4s',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Area */}
            <div
              style={{
                padding: 'clamp(0.75rem, 2.5vw, 1rem)',
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                background: 'white',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 0.75rem)', alignItems: 'center' }}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about vaccines..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.875rem, 2.5vw, 1rem)',
                    border: '1px solid rgba(139, 115, 85, 0.2)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)',
                    outline: 'none',
                    color: '#40606D',
                    opacity: isLoading ? 0.6 : 1,
                    minHeight: '44px',
                    touchAction: 'manipulation',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#40606D';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(139, 115, 85, 0.2)';
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  style={{
                    padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.25rem)',
                    background: isLoading || !inputValue.trim() ? '#ccc' : '#40606D',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                    fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)',
                    transition: 'background 0.2s ease',
                    minHeight: '44px',
                    minWidth: '60px',
                    touchAction: 'manipulation',
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading && inputValue.trim() && window.innerWidth >= 768) {
                      e.currentTarget.style.background = '#2d4855';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading && inputValue.trim()) {
                      e.currentTarget.style.background = '#40606D';
                    }
                  }}
                >
                  {isLoading ? '...' : 'Send'}
                </button>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes bounce {
              0%, 80%, 100% {
                transform: scale(0);
                opacity: 0.5;
              }
              40% {
                transform: scale(1);
                opacity: 1;
              }
            }
            
            /* Mobile Responsive Styles */
            @media (min-width: 640px) {
              .chat-window {
                right: 1.5rem !important;
                left: auto !important;
                width: 380px !important;
                max-width: 420px !important;
                bottom: 90px !important;
                height: 500px !important;
                max-height: 600px !important;
              }
            }
            
            @media (min-width: 768px) {
              .chat-button {
                bottom: 2rem !important;
                right: 2rem !important;
                width: 60px !important;
                height: 60px !important;
              }
              
              .chat-window {
                right: 2rem !important;
                bottom: 90px !important;
              }
            }
            
            @media (max-width: 480px) {
              .chat-window {
                bottom: 70px !important;
                left: 0.75rem !important;
                right: 0.75rem !important;
                height: calc(100vh - 90px) !important;
                border-radius: 12px !important;
              }
              
              .chat-button {
                bottom: 0.75rem !important;
                right: 0.75rem !important;
                width: 52px !important;
                height: 52px !important;
              }
            }
            
            /* Prevent text selection on mobile for better UX */
            @media (max-width: 768px) {
              .chat-window * {
                -webkit-tap-highlight-color: transparent;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}

