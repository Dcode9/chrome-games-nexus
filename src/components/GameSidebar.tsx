import { useState } from "react";
import { Search, SlidersHorizontal, PanelLeft, PanelRight, Home, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { allGames } from "@/data/gamesData";
const genres = ["All", "Action", "Adventure", "RPG", "Strategy", "Shooter", "Sports", "Simulation", "Puzzle", "Horror"];
const upcomingGames = [{
  title: "Elder Scrolls VI",
  releaseYear: 2026
}, {
  title: "GTA VI",
  releaseYear: 2026
}, {
  title: "Starfield 2",
  releaseYear: 2027
}];
interface GameSidebarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string, value: string) => void;
  currentGenre: string;
  currentSort: string;
}
const GameSidebar = ({
  onSearch,
  onFilterChange,
  currentGenre,
  currentSort
}: GameSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return <Sidebar>
      <div className={`flex ${isCollapsed ? "flex-col-reverse" : "flex-col"} h-full relative`}>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10" onClick={toggleSidebar}>
          {isCollapsed ? <PanelRight className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
        </Button>
        
        <SidebarHeader className={`p-4 ${isCollapsed ? "hidden" : "block"}`}>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="font-exo text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              D'Games
            </span>
          </Link>
          
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input type="search" placeholder="Search games..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="h-9 transition-all duration-300 ease-in-out" />
            <Button type="submit" size="sm" variant="outline" className="h-9 px-2">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </SidebarHeader>
        
        <SidebarContent className={isCollapsed ? "hidden" : "block"}>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="transition-all duration-200 hover:translate-x-1">
                    <Link to="/">
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="transition-all duration-200 hover:translate-x-1">
                    <Link to="/games">
                      <Calendar className="h-4 w-4 mr-2" />
                      Games
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          
          
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              Upcoming Games
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {upcomingGames.map(game => <SidebarMenuItem key={game.title}>
                    <SidebarMenuButton className="transition-all duration-200 hover:translate-x-1">
                      <span className="flex-1 text-left">{game.title}</span>
                      <span className="text-xs text-muted-foreground">{game.releaseYear}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {isCollapsed && <div className="p-4">
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="w-full justify-start">
              <Search className="h-4 w-4 mr-2" />
              Menu
            </Button>
          </div>}
      </div>
    </Sidebar>;
};
export default GameSidebar;