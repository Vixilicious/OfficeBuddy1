import React from "react";
import { MessageSquare } from "lucide-react";

const ChatHeader: React.FC = () => {
  return (
    <div className='flex items-center p-4 border-b border-gray-200 bg-xlent-blue text-white'>
      <div className='flex items-center'>
        <MessageSquare className='h-6 w-6 mr-2' />
        <div>
          <h1 className='text-xl font-semibold'>XLENT Hudiksvall Assistant</h1>
          <p className='text-sm text-gray-200'>
            Ask me about your schedule, meetings, or the weather
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
