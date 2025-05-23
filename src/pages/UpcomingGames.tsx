
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameSidebar from "@/components/GameSidebar";
import GameGrid from "@/components/GameGrid";
import { upcomingGames } from "@/data/gamesData";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";

const UpcomingGames = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentSort, setCurrentSort] = useState("popularity");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter: string, value: string) => {
    if (filter === "genre") {
      setCurrentGenre(value);
    } else if (filter === "sort") {
      setCurrentSort(value);
    }
  };

  // Convert upcoming games data to the format expected by GameGrid
  const upcomingGamesForGrid = upcomingGames.map(game => ({
    id: game.title.replace(/\s+/g, '-').toLowerCase(),
    title: game.title,
    coverImage: "/placeholder.svg",
    price: "TBA",
    releaseDate: `Planned: ${game.releaseYear}`,
    rating: 0,
    genres: ["Upcoming"],
  }));

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <GameSidebar
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            currentGenre={currentGenre}
            currentSort={currentSort}
          />
          
          <main className="flex-1 transition-all duration-300 ease-in-out">
            <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
              <div className="container flex items-center justify-between h-16 px-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <h1 className="text-2xl font-bold">Upcoming Games</h1>
                </div>
              </div>
            </div>
            
            <div className="container px-4 py-6">
              <GameGrid 
                title="" 
                games={upcomingGamesForGrid} 
                scrollable={false} 
              />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default UpcomingGames;
