import { useState } from "react";
import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";
import GameGrid from "@/components/GameGrid";
import FilterBar from "@/components/FilterBar";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { allGames, Game } from "@/data/gamesData";

const Games = () => {
  const [filteredGames, setFilteredGames] = useState<Game[]>(allGames);
  const [currentFilters, setCurrentFilters] = useState({
    genre: "All",
    platform: "All",
    sort: "Popular",
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
    
    // Filter by platform
    if (newFilters.platform !== "All") {
      result = result.filter(game => 
        game.platform === newFilters.platform
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <FilterBar onFilterChange={handleFilterChange} />
      
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Games Catalog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredGames.map((game) => (
                    <div key={game.id}>
                      <GameCard
                        id={game.id}
                        title={game.title}
                        image={game.image}
                        genres={game.genres}
                        platform={game.platform}
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
      
      <Footer />
    </div>
  );
};

export default Games;
