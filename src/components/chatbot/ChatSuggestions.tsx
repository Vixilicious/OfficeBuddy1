import React from "react";
import { Button } from "@/components/ui/button";

interface ChatSuggestionsProps {
  onSelectSuggestion: (suggestion: string) => void;
  isProcessing: boolean;
}

const suggestions = [
  "What's on my agenda today?",
  "What meetings do I have this week?",
  "What's the weather forecast for tomorrow?",
  "What's my schedule for this week?",
];

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({
  onSelectSuggestion,
  isProcessing,
}) => {
  return (
    <div className='flex flex-wrap gap-2 p-4'>
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          variant='outline'
          size='sm'
          onClick={() => onSelectSuggestion(suggestion)}
          disabled={isProcessing}
          className='bg-white border-xlent-light-blue text-xlent-blue hover:bg-xlent-gray'
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
