
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";
import GameSidebar from "@/components/GameSidebar";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { allGames, Game } from "@/data/gamesData";

const Games = () => {
  const [filteredGames, setFilteredGames] = useState<Game[]>(allGames);
  const [currentFilters, setCurrentFilters] = useState({
    genre: "All",
    sort: "Popular",
    search: "",
  });

  const handleFilterChange = (filter: string, value: string) => {
    const newFilters = { ...currentFilters, [filter]: value };
    setCurrentFilters(newFilters);
    
    // Apply filters
    let result = [...allGames];
    
    // Filter by genre
    if (newFilters.genre !== "All") {
      result = result.filter(game => 
        game.genres.includes(newFilters.genre)
      );
    }
    
    // Apply search
    if (newFilters.search.trim()) {
      const searchLower = newFilters.search.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchLower) ||
        game.genres.some(genre => genre.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply sorting
    switch (newFilters.sort) {
      case "New":
        result.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "A-Z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // Popular - no specific sort, use default order
        break;
    }
    
    setFilteredGames(result);
  };

  const handleSearch = (query: string) => {
    handleFilterChange("search", query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="flex-1">
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <GameSidebar 
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
              currentGenre={currentFilters.genre}
              currentSort={currentFilters.sort}
            />
            
            <main className="flex-1 py-6">
              <div className="container px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8">PC Games Catalog</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    {filteredGames.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredGames.map((game) => (
                          <div key={game.id}>
                            <GameCard
                              id={game.id}
                              title={game.title}
                              image={game.image}
                              genres={game.genres}
                              sponsored={game.sponsored}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <h3 className="text-xl font-medium mb-2">No games found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your filters to find what you're looking for
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <AdBanner type="sidebar" />
                    <AdBanner type="sidebar" />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default Games;
