
import { Link } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import GameSidebar from "@/components/GameSidebar";

const Navigation = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <GameSidebar />
        <div className="flex-1 flex flex-col">
          <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container flex items-center justify-between h-16 px-4 md:px-6">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Navigation;
