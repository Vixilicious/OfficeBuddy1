import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isProcessing,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() && !isProcessing) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border-t border-gray-200 p-4 bg-white'
    >
      <div className='flex space-x-2'>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your question...'
          className='flex-1'
          disabled={isProcessing}
        />
        <Button
          type='submit'
          disabled={!message.trim() || isProcessing}
          className='bg-xlent-blue hover:bg-xlent-dark-blue'
        >
          <Send className='h-4 w-4' />
          <span className='sr-only'>Send</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
