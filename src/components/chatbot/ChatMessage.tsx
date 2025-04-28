import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { ChatMessage as ChatMessageType } from "@/utils/chatUtils";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] md:max-w-[70%]",
          isBot ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div className={cn("flex items-start", isBot ? "mr-2" : "ml-2")}>
          <Avatar
            className={cn(
              "h-8 w-8",
              isBot
                ? "bg-xlent-blue text-white"
                : "bg-xlent-light-blue text-white"
            )}
          >
            <span className='text-xs font-medium'>{isBot ? "XA" : "Me"}</span>
          </Avatar>
        </div>
        <div>
          <div
            className={cn(
              "rounded-lg p-3",
              isBot
                ? "bg-xlent-gray text-gray-800 rounded-tl-none"
                : "bg-xlent-blue text-white rounded-tr-none"
            )}
          >
            <div className='whitespace-pre-wrap'>
              {message.text.split("\n").map((line, i) => {
                // Handle markdown-like bold syntax
                const boldPattern = /\*\*(.*?)\*\*/g;
                const formattedLine = line.replace(
                  boldPattern,
                  "<strong>$1</strong>"
                );

                return (
                  <React.Fragment key={i}>
                    <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
                    {i < message.text.split("\n").length - 1 && <br />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div
            className={cn(
              "text-xs text-gray-500 mt-1",
              isBot ? "text-left" : "text-right"
            )}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
