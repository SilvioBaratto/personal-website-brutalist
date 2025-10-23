import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

// Define types locally since we can't import from baml_client in browser
interface StreamingChatResponse {
  answer: string;
  category: QuestionCategory;
  sources: string[];
  urls: string[];
  follow_up_suggestions?: string[];
}

interface ConversationContext {
  previous_topic?: string;
  mentioned_companies: string[];
  mentioned_technologies: string[];
  user_interest_area?: QuestionCategory;
}

type QuestionCategory =
  | 'EXPERIENCE'
  | 'TECHNICAL_SKILLS'
  | 'PROJECTS'
  | 'EDUCATION'
  | 'LANGUAGES'
  | 'CAREER_JOURNEY'
  | 'GENERAL'
  | 'CONTACT'
  | 'OFF_TOPIC';

/**
 * ChatbotService - Production-ready BAML-powered chatbot service
 *
 * This service provides type-safe, structured AI responses about Silvio's
 * professional background using BAML functions.
 *
 * Features:
 * - Type-safe responses with validation
 * - Conversation history tracking
 * - Context-aware follow-ups
 * - Streaming support for real-time responses
 * - Error handling with fallbacks
 */
@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private http = inject(HttpClient);

  // Conversation state management
  private conversationHistory = signal<string[]>([]);
  private conversationContext = signal<ConversationContext>({
    mentioned_companies: [],
    mentioned_technologies: [],
    previous_topic: undefined,
    user_interest_area: undefined,
  });

  // Error state
  private lastError = signal<string | null>(null);

  /**
   * Send a message and get a structured response (non-streaming)
   *
   * @param userMessage - The user's question
   * @returns Promise<StreamingChatResponse> - Structured response with metadata
   */
  async sendMessage(userMessage: string): Promise<StreamingChatResponse> {
    try {
      // Add user message to history
      this.addToHistory(`User: ${userMessage}`);

      // Call backend API with context
      const response = await firstValueFrom(
        this.http.post<StreamingChatResponse>('/api/chatbot', {
          message: userMessage,
          conversationHistory: this.conversationHistory(),
          context: this.conversationContext(),
        })
      );

      // Update context based on response
      this.updateContextFromStreaming(response);

      // Add assistant response to history
      this.addToHistory(`Assistant: ${response.answer}`);

      // Clear any previous errors
      this.lastError.set(null);

      return response;
    } catch (error) {
      console.error('Chatbot error:', error);
      this.lastError.set(error instanceof Error ? error.message : 'Unknown error');

      // Return fallback response
      return this.getFallbackResponse();
    }
  }

  /**
   * Send a message with streaming response
   *
   * @param userMessage - The user's question
   * @param onChunk - Callback for each streamed chunk
   * @returns Promise<StreamingChatResponse> - Final complete response
   */
  async sendMessageStreaming(
    userMessage: string,
    onChunk: (chunk: Partial<StreamingChatResponse>) => void
  ): Promise<StreamingChatResponse> {
    try {
      // Add user message to history
      this.addToHistory(`User: ${userMessage}`);

      return new Promise((resolve, reject) => {
        fetch('/api/chatbot/stream', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage,
            conversationHistory: this.conversationHistory(),
            context: this.conversationContext(),
          }),
        })
          .then(async (response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let finalResponse: StreamingChatResponse | null = null;

            if (!reader) {
              throw new Error('No response body');
            }

            while (true) {
              const { done, value } = await reader.read();

              if (done) break;

              const chunk = decoder.decode(value);
              const lines = chunk.split('\n');

              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const data = line.slice(6);

                  if (data === '[DONE]') {
                    continue;
                  }

                  try {
                    const parsed = JSON.parse(data);

                    if (parsed.error) {
                      reject(new Error(parsed.details || parsed.error));
                      return;
                    }

                    // Call the chunk callback
                    onChunk(parsed);

                    // Store final response
                    if (parsed.isComplete) {
                      finalResponse = parsed as StreamingChatResponse;
                    }
                  } catch (e) {
                    // Ignore parse errors for incomplete chunks
                  }
                }
              }
            }

            if (finalResponse) {
              // Update context based on response
              this.updateContextFromStreaming(finalResponse);

              // Add assistant response to history
              this.addToHistory(`Assistant: ${finalResponse.answer}`);

              // Clear any previous errors
              this.lastError.set(null);

              resolve(finalResponse);
            } else {
              reject(new Error('No final response received'));
            }
          })
          .catch((error) => {
            console.error('Streaming error:', error);
            this.lastError.set(error instanceof Error ? error.message : 'Unknown error');
            reject(error);
          });
      });
    } catch (error) {
      console.error('Chatbot streaming error:', error);
      this.lastError.set(error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }


  /**
   * Reset conversation history and context
   */
  resetConversation(): void {
    this.conversationHistory.set([]);
    this.conversationContext.set({
      mentioned_companies: [],
      mentioned_technologies: [],
      previous_topic: undefined,
      user_interest_area: undefined,
    });
    this.lastError.set(null);
  }

  /**
   * Get current conversation history
   */
  getHistory(): string[] {
    return this.conversationHistory();
  }

  /**
   * Get current conversation context
   */
  getContext(): ConversationContext {
    return this.conversationContext();
  }

  /**
   * Get last error if any
   */
  getLastError(): string | null {
    return this.lastError();
  }

  // Private helper methods

  private addToHistory(message: string): void {
    this.conversationHistory.update((history) => {
      // Keep last 10 messages to avoid token limits
      const newHistory = [...history, message];
      return newHistory.slice(-10);
    });
  }


  private updateContextFromStreaming(response: StreamingChatResponse): void {
    this.conversationContext.update((context) => ({
      previous_topic: this.extractTopic(response.answer),
      mentioned_companies: this.mergeUnique(context.mentioned_companies, response.sources),
      mentioned_technologies: context.mentioned_technologies,
      user_interest_area: response.category,
    }));
  }

  private extractTopic(answer: string): string {
    // Simple topic extraction - take first sentence
    const firstSentence = answer.split('.')[0];
    return firstSentence.substring(0, 100);
  }

  private mergeUnique(arr1: string[], arr2: string[]): string[] {
    return Array.from(new Set([...arr1, ...arr2]));
  }

  private getFallbackResponse(): StreamingChatResponse {
    return {
      answer:
        "I apologize, but I'm having trouble processing your question right now. " +
        "This could be due to a connection issue or service unavailability. " +
        "Please try again in a moment, or feel free to contact Silvio directly at silvio.baratto22@gmail.com.",
      category: 'GENERAL',
      sources: [],
      urls: ['mailto:silvio.baratto22@gmail.com'],
      follow_up_suggestions: [
        'What is Silvio currently working on at EY?',
        'What programming languages does Silvio know?',
        'Tell me about stockpy',
      ],
    };
  }
}
