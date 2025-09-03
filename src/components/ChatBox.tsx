import { Plus, Settings, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ChatBox = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl bg-secondary border border-border/50 overflow-hidden search-input-glow">
        {/* Top bar with controls */}
        <div className="flex items-center justify-between p-4 border-b border-border/30">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-hover-accent h-8 w-8 p-0 rounded-lg transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-hover-accent h-8 w-8 p-0 rounded-lg transition-colors duration-200"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-hover-accent rounded-lg transition-colors duration-200 px-3"
              >
                Claude Sonnet 4
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem>Claude Sonnet 4</DropdownMenuItem>
              <DropdownMenuItem>GPT-4 Turbo</DropdownMenuItem>
              <DropdownMenuItem>Claude Haiku</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Chat input area */}
        <div className="p-6">
          <div className="relative">
            <Textarea
              placeholder="How can I help you today?"
              className="min-h-[120px] resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base leading-relaxed p-0"
            />
            
            {/* Send button */}
            <Button
              size="sm"
              className="absolute bottom-2 right-2 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl h-10 w-10 p-0 shadow-lg hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-200"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};