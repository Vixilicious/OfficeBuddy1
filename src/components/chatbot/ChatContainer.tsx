import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatSuggestions from "./ChatSuggestions";
import {
  ChatMessage as ChatMessageType,
  generateResponse,
} from "@/utils/chatUtils";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/components/ui/use-toast";

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      text: "Hello! I'm your XLENT Hudiksvall assistant. I can help you with information about your schedule, meetings, and weather forecasts. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (isProcessing) return;

    const userMessage: ChatMessageType = {
      id: uuidv4(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      const response = await generateResponse(text);

      setTimeout(() => {
        const botMessage: ChatMessageType = {
          id: uuidv4(),
          text: response,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsProcessing(false);
      }, 500);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: "Sorry, I encountered an error processing your request.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className='flex flex-col h-[500px] max-w-3xl mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white'>
      <ChatHeader />

      <div className='flex-1 overflow-y-auto p-4 bg-gray-50 scroll-smooth'>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} className='h-0' />
      </div>

      <ChatSuggestions
        onSelectSuggestion={handleSendMessage}
        isProcessing={isProcessing}
      />
      <ChatInput
        onSendMessage={handleSendMessage}
        isProcessing={isProcessing}
      />
    </div>
  );
};

export default ChatContainer;
