import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
});

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

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation history for context
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: SYSTEM_PROMPT }
    ];

    // Add conversation history if provided
    if (Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg: { role: string; content: string }) => {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({
            role: msg.role as 'user' | 'assistant',
            content: msg.content
          });
        }
      });
    }

    // Add current message
    messages.push({ role: 'user', content: message });

    const completion = await groq.chat.completions.create({
      messages: messages as any,
      model: 'llama-3.3-70b-versatile', // Free and powerful model (updated from deprecated llama-3.1-70b-versatile)
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    const response = completion.choices[0]?.message?.content || 
      "I apologize, but I'm unable to process that request. Please ask me about vaccines or immunization.";

    return NextResponse.json({ 
      response
    });

  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process chat message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

