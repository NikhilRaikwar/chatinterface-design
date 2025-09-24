import React from 'react';
import { cn } from '@/lib/utils';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  from: 'user' | 'assistant' | 'system';
  children: React.ReactNode;
}

export function Message({ from, children, className, ...props }: MessageProps) {
  return (
    <div 
      className={cn(
        "flex w-full mb-4",
        from === 'user' ? 'justify-end' : 'justify-start',
        className
      )} 
      {...props}
    >
      <div 
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          from === 'user' 
            ? 'bg-primary text-primary-foreground ml-auto' 
            : 'bg-muted text-foreground mr-auto'
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MessageContent({ children, className, ...props }: MessageContentProps) {
  return (
    <div className={cn("message-content", className)} {...props}>
      {children}
    </div>
  );
}