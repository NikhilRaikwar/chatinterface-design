import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GreetingSection } from "@/components/GreetingSection";
import { ChatBox } from "@/components/ChatBox";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        {/* Main content area */}
        <main className="flex-1 flex items-center justify-center overflow-hidden">          
          {/* Centered content */}
          <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12 px-4 md:px-6 w-full max-w-5xl">
            <GreetingSection />
            <ChatBox />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
