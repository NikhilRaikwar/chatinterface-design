import React from 'react';
import { cn } from '@/lib/utils';

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  parseIncompleteMarkdown?: boolean;
  allowedImagePrefixes?: string[];
  allowedLinkPrefixes?: string[];
  defaultOrigin?: string;
  components?: Record<string, React.ComponentType<any>>;
  rehypePlugins?: any[];
  remarkPlugins?: any[];
}

export function Response({ 
  children, 
  parseIncompleteMarkdown = true,
  allowedImagePrefixes = ["*"],
  allowedLinkPrefixes = ["*"],
  className,
  ...props 
}: ResponseProps) {
  // For now, we'll render plain text with basic markdown-like formatting
  // In a full implementation, you'd use a markdown parser like react-markdown
  const formatText = (text: string) => {
    if (!text) return '';
    
    // Basic markdown-like formatting
    return text
      .split('\n')
      .map((line, index) => {
        // Handle code blocks (basic)
        if (line.startsWith('```')) {
          return <pre key={index} className="bg-muted p-2 rounded text-sm font-mono my-2">{line.slice(3)}</pre>;
        }
        
        // Handle headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold mt-4 mb-2">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-semibold mt-3 mb-2">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-medium mt-2 mb-1">{line.slice(4)}</h3>;
        }
        
        // Handle bold text
        const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        return (
          <p 
            key={index} 
            className="mb-2 last:mb-0"
            dangerouslySetInnerHTML={{ __html: boldFormatted }}
          />
        );
      });
  };

  return (
    <div 
      className={cn(
        "prose prose-sm max-w-none dark:prose-invert",
        "text-foreground",
        className
      )} 
      {...props}
    >
      {formatText(children)}
    </div>
  );
}