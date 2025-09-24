import React, { useState } from 'react';
import { Send, Settings, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface PromptInputProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function PromptInput({ children, className, ...props }: PromptInputProps) {
  return (
    <form className={cn("relative", className)} {...props}>
      {children}
    </form>
  );
}

interface PromptInputTextareaProps extends React.ComponentProps<typeof Textarea> {
  // Inherits all Textarea props
}

export function PromptInputTextarea({ className, ...props }: PromptInputTextareaProps) {
  return (
    <Textarea
      className={cn(
        "min-h-[60px] max-h-[200px] resize-none pr-20 pb-12",
        "border-border bg-background",
        className
      )}
      placeholder="Type your message..."
      {...props}
    />
  );
}

interface PromptInputToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PromptInputToolbar({ children, className, ...props }: PromptInputToolbarProps) {
  return (
    <div 
      className={cn(
        "absolute bottom-2 left-2 right-2 flex items-center justify-between",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

interface PromptInputToolsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PromptInputTools({ children, className, ...props }: PromptInputToolsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      {children}
    </div>
  );
}

interface PromptInputButtonProps extends React.ComponentProps<typeof Button> {
  // Inherits all Button props
}

export function PromptInputButton({ children, className, ...props }: PromptInputButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={cn("h-8 px-2 text-xs", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

interface PromptInputSubmitProps extends React.ComponentProps<typeof Button> {
  status?: 'ready' | 'loading' | 'error';
}

export function PromptInputSubmit({ 
  status = 'ready', 
  children, 
  className, 
  ...props 
}: PromptInputSubmitProps) {
  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <div className="h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />;
      case 'error':
        return <Settings className="h-4 w-4" />;
      default:
        return <Send className="h-4 w-4" />;
    }
  };

  return (
    <Button
      type="submit"
      size="sm"
      className={cn("h-8 w-8 p-0", className)}
      {...props}
    >
      {children || getIcon()}
    </Button>
  );
}

// Model Select Components
export function PromptInputModelSelect({ children, ...props }: React.ComponentProps<typeof Select>) {
  return <Select {...props}>{children}</Select>;
}

export function PromptInputModelSelectTrigger({ className, ...props }: React.ComponentProps<typeof SelectTrigger>) {
  return (
    <SelectTrigger className={cn("h-8 w-auto text-xs", className)} {...props}>
      {props.children}
    </SelectTrigger>
  );
}

export function PromptInputModelSelectContent(props: React.ComponentProps<typeof SelectContent>) {
  return <SelectContent {...props} />;
}

export function PromptInputModelSelectItem(props: React.ComponentProps<typeof SelectItem>) {
  return <SelectItem {...props} />;
}

export function PromptInputModelSelectValue(props: React.ComponentProps<typeof SelectValue>) {
  return <SelectValue {...props} />;
}