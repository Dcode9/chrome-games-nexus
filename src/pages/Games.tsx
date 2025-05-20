
import { useState } from "react";
import GameCard from "@/components/GameCard";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { allGames, Game } from "@/data/gamesData";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

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
      
      <main className="flex-1 transition-all duration-300 animate-fade-in">
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-3xl font-bold">PC Games Catalog</h1>
              
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Genre:</div>
                  <div className="flex flex-wrap gap-1">
                    {genres.map((genre) => (
                      <Button 
                        key={genre}
                        size="sm"
                        variant={currentFilters.genre === genre ? "default" : "outline"}
                        onClick={() => handleFilterChange("genre", genre)}
                        className="h-8"
                      >
                        {genre}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Sort:</div>
                  <div className="flex gap-1">
                    {["Popular", "New", "A-Z"].map((sortOption) => (
                      <Button 
                        key={sortOption}
                        size="sm"
                        variant={currentFilters.sort === sortOption ? "default" : "outline"}
                        onClick={() => handleFilterChange("sort", sortOption)}
                        className="h-8"
                      >
                        {sortOption}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredGames.map((game) => (
                    <div key={game.id} className="animate-fade-in">
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
      
      <Footer />
    </div>
  );
};

export default Games;
