
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameSidebar from "@/components/GameSidebar";
import ReviewSection from "@/components/ReviewSection";
import StarRating from "@/components/StarRating";
import { SidebarProvider } from "@/components/ui/sidebar";
import { allGames } from "@/data/gamesData";
import Navigation from "@/components/Navigation";

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

  // Find game by string or number ID
  const game = allGames.find(game => String(game.id) === id);

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
            <Navigation title={game.title} showBackButton={true} />
            
            <div className="container px-4 py-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                  {/* Game Cover Image */}
                  <div className="rounded-lg overflow-hidden aspect-video mb-6">
                    <img 
                      src={game.coverImage || game.image} 
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
                        <StarRating initialRating={game.rating} readonly />
                        <span>{game.rating?.toFixed(1) || "N/A"}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Release: {game.releaseDate || `${game.releaseYear}`}
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
                        <div className="text-xl font-bold">
                          {game.price === "0" || game.isFree ? "Free" : (game.price ? `$${game.price}` : "TBA")}
                        </div>
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
