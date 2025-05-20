
import { useState } from "react";
import { Search, Home, GamepadIcon, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface GameSidebarProps {
  onSearch?: (query: string) => void;
}

const GameSidebar = ({ onSearch }: GameSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <span className="font-exo text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            D'Games
          </span>
        </Link>
        
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 transition-all duration-300 ease-in-out"
          />
          <Button type="submit" size="sm" variant="outline" className="h-9 px-2">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="transition-all duration-200 hover:translate-x-1"
                >
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="transition-all duration-200 hover:translate-x-1"
                >
                  <Link to="/games">
                    <GamepadIcon className="h-4 w-4 mr-2" />
                    Games
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="transition-all duration-200 hover:translate-x-1"
                >
                  <Link to="/upcoming-games">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Upcoming Games
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default GameSidebar;
