
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameSidebar from "@/components/GameSidebar";
import ReviewSection from "@/components/ReviewSection";
import StarRating from "@/components/StarRating";
import { SidebarProvider } from "@/components/ui/sidebar";
import { allGames } from "@/data/gamesData";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
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

  const game = allGames.find(game => game.id === id);

  if (!game) {
    return <div>Game not found</div>;
  }
  
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
                  <h1 className="text-2xl font-bold">{game.title}</h1>
                </div>
              </div>
            </div>
            
            <div className="container px-4 py-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                  {/* Game Cover Image */}
                  <div className="rounded-lg overflow-hidden aspect-video mb-6">
                    <img 
                      src={game.coverImage || "/placeholder.svg"} 
                      alt={game.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Game Info */}
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    <h2>About {game.title}</h2>
                    <p>
                      {game.description || "No description available for this game. Experience the adventure for yourself!"}
                    </p>
                  </div>
                  
                  {/* Review Section */}
                  <ReviewSection gameId={game.id} />
                </div>
                
                <div className="w-full lg:w-1/3">
                  {/* Game Details Card */}
                  <div className="rounded-lg border p-6 shadow-sm bg-card">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <StarRating rating={game.rating || 0} />
                        <span>{game.rating?.toFixed(1) || "N/A"}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Release: {game.releaseDate || "Unknown"}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Genres</h3>
                        <div className="flex flex-wrap gap-2">
                          {game.genres?.map(genre => (
                            <span key={genre} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Price</h3>
                        <div className="text-xl font-bold">{game.price === "0" ? "Free" : `$${game.price}`}</div>
                      </div>
                      
                      <Button className="w-full">Purchase Game</Button>
                    </div>
                  </div>
                  
                  {/* System Requirements */}
                  <div className="rounded-lg border p-6 shadow-sm bg-card mt-6">
                    <h3 className="font-semibold mb-4">System Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Minimum</h4>
                        <ul className="text-sm space-y-1">
                          <li>OS: Windows 10</li>
                          <li>CPU: Intel Core i5-4670K</li>
                          <li>RAM: 8 GB</li>
                          <li>GPU: NVIDIA GeForce GTX 760</li>
                          <li>Storage: 50 GB</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Recommended</h4>
                        <ul className="text-sm space-y-1">
                          <li>OS: Windows 11</li>
                          <li>CPU: Intel Core i7-8700K</li>
                          <li>RAM: 16 GB</li>
                          <li>GPU: NVIDIA GeForce RTX 2070</li>
                          <li>Storage: 50 GB SSD</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default GameDetails;
