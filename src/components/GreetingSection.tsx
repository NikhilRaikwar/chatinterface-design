import { Sparkles } from "lucide-react";

export const GreetingSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="text-center space-y-2 mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-8 h-8 text-primary" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground">
          {getGreeting()}, <span className="text-primary">Alex</span>
        </h1>
      </div>
      <p className="text-lg text-muted-foreground font-inter">
        What would you like to explore today?
      </p>
    </div>
  );
};