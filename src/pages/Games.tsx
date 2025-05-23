
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSidebar from "@/components/GameSidebar";
import GameGrid from "@/components/GameGrid";
import { SidebarProvider } from "@/components/ui/sidebar";
import { allGames } from "@/data/gamesData";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Games = () => {
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

  // Filter games based on search query and genre
  const filteredGames = allGames.filter(game => {
    const matchesSearch = searchQuery === "" || 
      game.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGenre = currentGenre === "All" || 
      (game.genres && game.genres.includes(currentGenre));
    
    return matchesSearch && matchesGenre;
  });

  // Sort games based on current sort option
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (currentSort === "price-asc") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (currentSort === "price-desc") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (currentSort === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    } else {
      // default: sort by popularity (which is the original order)
      return 0;
    }
  });

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
                  <h1 className="text-2xl font-bold">PC Games Catalog</h1>
                </div>
              </div>
            </div>

            <div className="container px-4 py-6">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex-1">
                    <h2 className="text-sm font-medium mb-1">Genre</h2>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Action", "Adventure", "RPG", "Strategy", "Shooter"].map(genre => (
                        <Button
                          key={genre}
                          variant={currentGenre === genre ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleFilterChange("genre", genre)}
                        >
                          {genre}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-sm font-medium mb-1">Sort By</h2>
                    <select
                      className="px-3 py-1 rounded border bg-background"
                      value={currentSort}
                      onChange={(e) => handleFilterChange("sort", e.target.value)}
                    >
                      <option value="popularity">Popularity</option>
                      <option value="rating">Rating</option>
                      <option value="price-asc">Price (Low to High)</option>
                      <option value="price-desc">Price (High to Low)</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Showing {sortedGames.length} games
                </div>
              </div>
              
              <GameGrid title="" games={sortedGames} scrollable={false} />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Games;
