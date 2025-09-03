import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Spaces = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          <header className="flex items-center h-16 px-6 border-b border-border/50 bg-background/80 backdrop-blur-sm">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
          </header>
          
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Spaces</h1>
              <p className="text-muted-foreground">Organize your searches and conversations</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Spaces;