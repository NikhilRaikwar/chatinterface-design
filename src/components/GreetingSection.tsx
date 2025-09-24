import { Sparkles, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const GreetingSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="text-center space-y-3 md:space-y-4 w-full">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground">
          {getGreeting()}, <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-primary cursor-pointer hover:text-primary/80 transition-colors">
                Alex
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h1>
      </div>
      <p className="text-base sm:text-lg text-muted-foreground font-inter px-4">
        What would you like to explore today?
      </p>
    </div>
  );
};