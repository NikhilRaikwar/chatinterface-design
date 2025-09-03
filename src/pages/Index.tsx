import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BrandLogo } from "@/components/BrandLogo";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          {/* Header with sidebar trigger */}
          <header className="flex items-center h-16 px-6 border-b border-border/50 bg-background/80 backdrop-blur-sm">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
          </header>
          
          {/* Central search interface */}
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-4xl mx-auto space-y-8">
              <BrandLogo />
              <SearchBar />
              
              {/* Subtle help text */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Ask anything, search intelligently
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
