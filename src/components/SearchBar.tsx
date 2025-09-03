import { Search, Globe, Mic, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative search-input-glow rounded-xl bg-secondary border border-border/50 overflow-hidden">
        <div className="flex items-center">
          {/* Search button */}
          <Button 
            size="sm"
            className="m-2 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg h-10 px-4 shadow-lg hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-200"
          >
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Search input */}
          <Input
            type="text"
            placeholder="Ask anything or @mention a Space"
            className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-14 px-4"
          />
          
          {/* Right side controls */}
          <div className="flex items-center gap-1 mr-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-hover-accent h-9 w-9 p-0 rounded-lg transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-hover-accent h-9 w-9 p-0 rounded-lg transition-colors duration-200"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-hover-accent h-9 w-9 p-0 rounded-lg transition-colors duration-200"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg h-10 w-10 p-0 shadow-lg hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-200 ml-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};