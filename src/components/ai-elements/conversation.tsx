import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Conversation({ children, className, ...props }: ConversationProps) {
  return (
    <div className={cn("relative flex-1 overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

interface ConversationContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ConversationContent({ children, className, ...props }: ConversationContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div 
      ref={contentRef}
      className={cn(
        "flex-1 overflow-y-auto p-4 space-y-4",
        "scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

export function ConversationScrollButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  const scrollToBottom = () => {
    // Implementation would scroll the conversation to bottom
    const conversationContent = document.querySelector('[data-conversation-content]');
    if (conversationContent) {
      conversationContent.scrollTop = conversationContent.scrollHeight;
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={scrollToBottom}
      className={cn(
        "absolute bottom-4 right-4 h-8 w-8 p-0 rounded-full shadow-lg",
        "bg-background border-border",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
}