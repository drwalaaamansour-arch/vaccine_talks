(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vaccine/src/components/ChatButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vaccine/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vaccine/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vaccine/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ChatButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'assistant',
            content: 'Hello! I\'m your vaccine information assistant. I can help you with questions about vaccines, immunization schedules, vaccine safety, and vaccine-preventable diseases. How can I assist you today?',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatButton.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatButton.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatButton.useEffect": ()=>{
            if (isOpen && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["ChatButton.useEffect"], [
        isOpen
    ]);
    const sendMessage = async ()=>{
        if (!inputValue.trim() || isLoading) return;
        const userMessage = {
            role: 'user',
            content: inputValue.trim(),
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue('');
        setIsLoading(true);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    conversationHistory: messages.map((msg)=>({
                            role: msg.role,
                            content: msg.content
                        }))
                })
            });
            if (!response.ok) {
                throw new Error('Failed to get response');
            }
            const data = await response.json();
            const assistantMessage = {
                role: 'assistant',
                content: data.response,
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                role: 'assistant',
                content: 'I apologize, but I encountered an error. Please try again or check your connection.',
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "chat-button",
                "aria-label": "Open chat",
                style: {
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
                    touchAction: 'manipulation'
                },
                onMouseEnter: (e)=>{
                    if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(64, 96, 109, 0.6)';
                    }
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(64, 96, 109, 0.4)';
                },
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 6L6 18"
                        }, void 0, false, {
                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    }, void 0, false, {
                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsOpen(false),
                        style: {
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(2px)',
                            zIndex: 9998
                        },
                        className: "jsx-216d168b25d9a57c"
                    }, void 0, false, {
                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
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
                            animation: 'slideUp 0.3s ease'
                        },
                        className: "jsx-216d168b25d9a57c" + " " + "chat-window",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '1rem 1.25rem',
                                    background: '#40606D',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexShrink: 0
                                },
                                className: "jsx-216d168b25d9a57c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        className: "jsx-216d168b25d9a57c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                                                    fontWeight: 600,
                                                    lineHeight: '1.3'
                                                },
                                                className: "jsx-216d168b25d9a57c",
                                                children: "🩺 Vaccine Information Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: '0.25rem 0 0 0',
                                                    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                                                    opacity: 0.9,
                                                    lineHeight: '1.3'
                                                },
                                                className: "jsx-216d168b25d9a57c",
                                                children: "Ask me about vaccines & immunization"
                                            }, void 0, false, {
                                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        style: {
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
                                            marginLeft: '0.5rem'
                                        },
                                        "aria-label": "Close chat",
                                        className: "jsx-216d168b25d9a57c",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "jsx-216d168b25d9a57c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 6L6 18",
                                                    className: "jsx-216d168b25d9a57c"
                                                }, void 0, false, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 6l12 12",
                                                    className: "jsx-216d168b25d9a57c"
                                                }, void 0, false, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    padding: '1rem',
                                    overflowY: 'auto',
                                    background: '#f8f9fa',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                },
                                className: "jsx-216d168b25d9a57c",
                                children: [
                                    messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                                                alignItems: 'flex-start',
                                                gap: '0.5rem'
                                            },
                                            className: "jsx-216d168b25d9a57c",
                                            children: [
                                                message.role === 'assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 'clamp(28px, 8vw, 32px)',
                                                        height: 'clamp(28px, 8vw, 32px)',
                                                        borderRadius: '50%',
                                                        background: '#40606D',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                                                    },
                                                    className: "jsx-216d168b25d9a57c",
                                                    children: "🩺"
                                                }, void 0, false, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        maxWidth: '85%',
                                                        padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.875rem, 2.5vw, 1rem)',
                                                        borderRadius: '12px',
                                                        background: message.role === 'user' ? '#40606D' : 'white',
                                                        color: message.role === 'user' ? 'white' : '#40606D',
                                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                                        fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                                                        lineHeight: '1.5',
                                                        wordWrap: 'break-word',
                                                        overflowWrap: 'break-word'
                                                    },
                                                    className: "jsx-216d168b25d9a57c",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            margin: 0,
                                                            whiteSpace: 'pre-wrap'
                                                        },
                                                        className: "jsx-216d168b25d9a57c",
                                                        children: message.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                message.role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 'clamp(28px, 8vw, 32px)',
                                                        height: 'clamp(28px, 8vw, 32px)',
                                                        borderRadius: '50%',
                                                        background: '#40606D',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                                                    },
                                                    className: "jsx-216d168b25d9a57c",
                                                    children: "👤"
                                                }, void 0, false, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)),
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem'
                                        },
                                        className: "jsx-216d168b25d9a57c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 'clamp(28px, 8vw, 32px)',
                                                    height: 'clamp(28px, 8vw, 32px)',
                                                    borderRadius: '50%',
                                                    background: '#40606D',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                                                },
                                                className: "jsx-216d168b25d9a57c",
                                                children: "🩺"
                                            }, void 0, false, {
                                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '12px',
                                                    background: 'white',
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                                },
                                                className: "jsx-216d168b25d9a57c",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '0.25rem',
                                                        alignItems: 'center'
                                                    },
                                                    className: "jsx-216d168b25d9a57c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                background: '#40606D',
                                                                animation: 'bounce 1.4s infinite ease-in-out'
                                                            },
                                                            className: "jsx-216d168b25d9a57c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                background: '#40606D',
                                                                animation: 'bounce 1.4s infinite ease-in-out',
                                                                animationDelay: '0.2s'
                                                            },
                                                            className: "jsx-216d168b25d9a57c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                background: '#40606D',
                                                                animation: 'bounce 1.4s infinite ease-in-out',
                                                                animationDelay: '0.4s'
                                                            },
                                                            className: "jsx-216d168b25d9a57c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef,
                                        className: "jsx-216d168b25d9a57c"
                                    }, void 0, false, {
                                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 'clamp(0.75rem, 2.5vw, 1rem)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                    background: 'white',
                                    flexShrink: 0
                                },
                                className: "jsx-216d168b25d9a57c",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 'clamp(0.5rem, 2vw, 0.75rem)',
                                        alignItems: 'center'
                                    },
                                    className: "jsx-216d168b25d9a57c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            type: "text",
                                            placeholder: "Ask about vaccines...",
                                            value: inputValue,
                                            onChange: (e)=>setInputValue(e.target.value),
                                            onKeyPress: handleKeyPress,
                                            disabled: isLoading,
                                            style: {
                                                flex: 1,
                                                padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.875rem, 2.5vw, 1rem)',
                                                border: '1px solid rgba(139, 115, 85, 0.2)',
                                                borderRadius: '8px',
                                                fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)',
                                                outline: 'none',
                                                color: '#40606D',
                                                opacity: isLoading ? 0.6 : 1,
                                                minHeight: '44px',
                                                touchAction: 'manipulation'
                                            },
                                            onFocus: (e)=>{
                                                e.target.style.borderColor = '#40606D';
                                            },
                                            onBlur: (e)=>{
                                                e.target.style.borderColor = 'rgba(139, 115, 85, 0.2)';
                                            },
                                            className: "jsx-216d168b25d9a57c"
                                        }, void 0, false, {
                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: sendMessage,
                                            disabled: isLoading || !inputValue.trim(),
                                            style: {
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
                                                touchAction: 'manipulation'
                                            },
                                            onMouseEnter: (e)=>{
                                                if (!isLoading && inputValue.trim() && window.innerWidth >= 768) {
                                                    e.currentTarget.style.background = '#2d4855';
                                                }
                                            },
                                            onMouseLeave: (e)=>{
                                                if (!isLoading && inputValue.trim()) {
                                                    e.currentTarget.style.background = '#40606D';
                                                }
                                            },
                                            className: "jsx-216d168b25d9a57c",
                                            children: isLoading ? '...' : 'Send'
                                        }, void 0, false, {
                                            fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vaccine/src/components/ChatButton.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vaccine$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "216d168b25d9a57c",
                        children: "@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes bounce{0%,80%,to{opacity:.5;transform:scale(0)}40%{opacity:1;transform:scale(1)}}@media (width>=640px){.chat-window.jsx-216d168b25d9a57c{width:380px!important;max-width:420px!important;height:500px!important;max-height:600px!important;bottom:90px!important;left:auto!important;right:1.5rem!important}}@media (width>=768px){.chat-button.jsx-216d168b25d9a57c{width:60px!important;height:60px!important;bottom:2rem!important;right:2rem!important}.chat-window.jsx-216d168b25d9a57c{bottom:90px!important;right:2rem!important}}@media (width<=480px){.chat-window.jsx-216d168b25d9a57c{border-radius:12px!important;height:calc(100vh - 90px)!important;bottom:70px!important;left:.75rem!important;right:.75rem!important}.chat-button.jsx-216d168b25d9a57c{width:52px!important;height:52px!important;bottom:.75rem!important;right:.75rem!important}}@media (width<=768px){.chat-window.jsx-216d168b25d9a57c .jsx-216d168b25d9a57c{-webkit-tap-highlight-color:transparent}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
_s(ChatButton, "7qOnX8v8+onDHhl4x//eULRe1os=");
_c = ChatButton;
var _c;
__turbopack_context__.k.register(_c, "ChatButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vaccine_src_components_ChatButton_tsx_4cc9076e._.js.map