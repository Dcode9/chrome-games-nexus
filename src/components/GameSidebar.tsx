
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
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

const genres = [
  "All",
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Shooter",
  "Sports",
  "Simulation",
  "Puzzle",
  "Horror",
];

const sortOptions = ["Popular", "New", "A-Z", "Price"];

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
          />
          <Button type="submit" size="sm" variant="outline" className="h-9 px-2">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Genres
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {genres.map((genre) => (
                <SidebarMenuItem key={genre}>
                  <SidebarMenuButton
                    isActive={currentGenre === genre}
                    onClick={() => onFilterChange("genre", genre)}
                  >
                    {genre}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Sort By
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sortOptions.map((option) => (
                <SidebarMenuItem key={option}>
                  <SidebarMenuButton
                    isActive={currentSort === option}
                    onClick={() => onFilterChange("sort", option)}
                  >
                    {option}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default GameSidebar;
