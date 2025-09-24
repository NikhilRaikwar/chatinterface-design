import React, { useState } from "react";
import { Settings, Plus } from "lucide-react";
import { 
  Conversation, 
  ConversationContent, 
  ConversationScrollButton 
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputModelSelect,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
} from "@/components/ai-elements/prompt-input";
import { useChat } from "@/hooks/use-chat";
import ElectricBorder from "@/components/ElectricBorder";

export const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("gemini-pro");
  
  const { messages, isLoading, sendMessage } = useChat();

  const models = [
    { id: "gemini-pro", name: "Gemini Pro" },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      await sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Chat Messages */}
      {messages.length > 0 ? (
        <div className="w-full max-w-4xl mb-4 md:mb-6 h-[400px] sm:h-[500px] md:h-[600px] border border-border/30 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
          <Conversation>
            <ConversationContent>
              {messages.map((msg) => (
                <Message key={msg.id} from={msg.role}>
                  <MessageContent>
                    <Response>{msg.content}</Response>
                  </MessageContent>
                </Message>
              ))}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
        </div>
      ) : (
        <div className="w-full max-w-4xl mb-4 md:mb-6 h-16" />
      )}

      {/* Chat Input */}
      <ElectricBorder 
        color="#7df9ff" 
        speed={1} 
        chaos={0.5} 
        thickness={2} 
        style={{ borderRadius: 16 }}
        className="w-full max-w-4xl"
      >
        <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-1 shadow-2xl">
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputTextarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help you today?"
              className="min-h-[100px] sm:min-h-[120px] resize-none border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 pr-4 pb-16 pt-4"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  handleSubmit(e);
                }
              }}
            />
            
            <PromptInputToolbar>
              {/* Left side buttons */}
              <PromptInputTools>
                <PromptInputButton>
                  <Plus className="h-4 w-4" />
                </PromptInputButton>
                
                <PromptInputButton>
                  <Settings className="h-4 w-4" />
                </PromptInputButton>

                {/* Model Selector */}
                <PromptInputModelSelect value={selectedModel} onValueChange={setSelectedModel}>
                  <PromptInputModelSelectTrigger>
                    <PromptInputModelSelectValue />
                  </PromptInputModelSelectTrigger>
                  <PromptInputModelSelectContent>
                    {models.map((model) => (
                      <PromptInputModelSelectItem key={model.id} value={model.id}>
                        {model.name}
                      </PromptInputModelSelectItem>
                    ))}
                  </PromptInputModelSelectContent>
                </PromptInputModelSelect>
              </PromptInputTools>

              {/* Send Button */}
              <PromptInputSubmit
                disabled={!message.trim() || isLoading}
                status={isLoading ? 'loading' : 'ready'}
              />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </ElectricBorder>
    </div>
  );
};