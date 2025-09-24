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
        <main className="flex-1 flex flex-col overflow-hidden">          
          {/* Centered content with proper spacing */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 w-full max-w-7xl mx-auto">
            <div className="w-full max-w-4xl flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-12">
              <GreetingSection />
              <ChatBox />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
