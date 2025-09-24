import React, { createContext, useContext, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BranchContextType {
  currentBranch: number;
  totalBranches: number;
  setBranch: (index: number) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

const useBranch = () => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('Branch components must be used within a Branch provider');
  }
  return context;
};

interface BranchProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultBranch?: number;
  onBranchChange?: (branchIndex: number) => void;
  children: React.ReactNode;
}

export function Branch({ 
  defaultBranch = 0, 
  onBranchChange,
  children,
  className,
  ...props 
}: BranchProps) {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  
  // Count total branches by counting BranchMessages components
  const totalBranches = React.Children.count(
    React.Children.toArray(children).filter(
      child => React.isValidElement(child) && child.type === BranchMessages
    )
  );

  const setBranch = useCallback((index: number) => {
    setCurrentBranch(index);
    onBranchChange?.(index);
  }, [onBranchChange]);

  return (
    <BranchContext.Provider value={{ currentBranch, totalBranches, setBranch }}>
      <div className={cn("branch-container", className)} {...props}>
        {children}
      </div>
    </BranchContext.Provider>
  );
}

interface BranchMessagesProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BranchMessages({ children, className, ...props }: BranchMessagesProps) {
  return (
    <div className={cn("branch-messages", className)} {...props}>
      {children}
    </div>
  );
}

interface BranchSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  from: 'user' | 'assistant' | 'system';
  children: React.ReactNode;
}

export function BranchSelector({ from, children, className, ...props }: BranchSelectorProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 mt-2",
        from === 'user' ? 'justify-end' : 'justify-start',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

export function BranchPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { currentBranch, setBranch } = useBranch();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setBranch(Math.max(0, currentBranch - 1))}
      disabled={currentBranch === 0}
      className={cn("h-8 w-8 p-0", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  );
}

export function BranchNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { currentBranch, totalBranches, setBranch } = useBranch();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setBranch(Math.min(totalBranches - 1, currentBranch + 1))}
      disabled={currentBranch >= totalBranches - 1}
      className={cn("h-8 w-8 p-0", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}

export function BranchPage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  const { currentBranch, totalBranches } = useBranch();
  
  return (
    <span 
      className={cn("text-sm text-muted-foreground px-2", className)} 
      {...props}
    >
      {currentBranch + 1} of {totalBranches}
    </span>
  );
}