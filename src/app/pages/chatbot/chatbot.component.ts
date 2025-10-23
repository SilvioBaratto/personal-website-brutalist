import { Component, ChangeDetectionStrategy, signal, effect, viewChild, ElementRef, inject } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../services/chatbot.service';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  category?: string;
  urls?: string[];
  followUpSuggestions?: string[];
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, DatePipe, NgOptimizedImage],
})
export class ChatbotComponent {
  private chatbotService = inject(ChatbotService);

  messages = signal<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Silvio's AI assistant powered by BAML. I can help you learn more about Silvio's experience, projects, and expertise. What would you like to know?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);

  userInput = signal('');
  isTyping = signal(false);
  currentFollowUps = signal<string[]>([]);

  messagesContainer = viewChild<ElementRef<HTMLDivElement>>('messagesContainer');

  constructor() {
    // Auto-scroll to bottom when new messages are added
    effect(() => {
      const container = this.messagesContainer()?.nativeElement;
      if (container) {
        setTimeout(() => {
          container.scrollTop = container.scrollHeight;
        }, 100);
      }
    });
  }

  async sendMessage() {
    const content = this.userInput().trim();
    if (!content) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    this.messages.update((msgs) => [...msgs, userMessage]);
    this.userInput.set('');
    this.isTyping.set(true);

    // Create a placeholder assistant message for streaming
    const assistantMessageId = (Date.now() + 1).toString();
    let assistantMessageAdded = false;

    try {
      // Call BAML-powered chatbot service with streaming
      await this.chatbotService.sendMessageStreaming(content, (chunk) => {
        // Add the assistant message on first chunk
        if (!assistantMessageAdded && chunk.answer) {
          const assistantMessage: Message = {
            id: assistantMessageId,
            content: chunk.answer,
            role: 'assistant',
            timestamp: new Date(),
            category: chunk.category,
            urls: chunk.urls || [],
            followUpSuggestions: chunk.follow_up_suggestions || [],
          };
          this.messages.update((msgs) => [...msgs, assistantMessage]);
          assistantMessageAdded = true;
        } else if (assistantMessageAdded) {
          // Update the assistant message with streaming content
          this.messages.update((msgs) =>
            msgs.map((msg) =>
              msg.id === assistantMessageId
                ? {
                    ...msg,
                    content: chunk.answer || '',
                    category: chunk.category,
                    urls: chunk.urls || [],
                    followUpSuggestions: chunk.follow_up_suggestions || [],
                  }
                : msg
            )
          );
        }

        // Update follow-up suggestions if this is the complete response
        if (chunk.follow_up_suggestions && chunk.follow_up_suggestions.length > 0) {
          this.currentFollowUps.set(chunk.follow_up_suggestions);
        }
      });
    } catch (error) {
      console.error('Error sending message:', error);

      // Add or update the assistant message with error
      if (!assistantMessageAdded) {
        const errorMessage: Message = {
          id: assistantMessageId,
          content: "I apologize, but I'm having trouble processing your question. Please try again.",
          role: 'assistant',
          timestamp: new Date(),
        };
        this.messages.update((msgs) => [...msgs, errorMessage]);
      } else {
        this.messages.update((msgs) =>
          msgs.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  content: "I apologize, but I'm having trouble processing your question. Please try again.",
                }
              : msg
          )
        );
      }
    } finally {
      this.isTyping.set(false);
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  // Optional: Handle follow-up suggestion clicks
  selectFollowUp(suggestion: string) {
    this.userInput.set(suggestion);
    this.sendMessage();
  }

  // Optional: Reset conversation
  resetChat() {
    this.chatbotService.resetConversation();
    this.messages.set([
      {
        id: '1',
        content: "Hi! I'm Silvio's AI assistant powered by BAML. I can help you learn more about Silvio's experience, projects, and expertise. What would you like to know?",
        role: 'assistant',
        timestamp: new Date(),
      },
    ]);
    this.currentFollowUps.set([]);
  }
}
