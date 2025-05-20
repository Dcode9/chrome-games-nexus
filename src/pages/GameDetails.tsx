
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allGames, getRelatedGames } from "@/data/gamesData";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id || "0");
  const game = allGames.find((g) => g.id === gameId);
  const relatedGames = getRelatedGames(gameId);

  useEffect(() => {
    // Scroll to top when game changes
    window.scrollTo(0, 0);
  }, [gameId]);

  if (!game) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Game not found</h1>
            <p className="mb-6">Sorry, we couldn't find the game you're looking for.</p>
            <Link to="/games">
              <Button>Back to Games</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Game Hero */}
        <div className="relative h-[50vh] min-h-[300px] max-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={game.image}
              alt={game.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          </div>

          <div className="container relative z-10 flex flex-col justify-end h-full py-8 px-4 md:px-6">
            <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {game.genres.map((genre, index) => (
                <Badge key={index} variant="secondary">
                  {genre}
                </Badge>
              ))}
              <Badge variant="outline">
                {game.platform}
              </Badge>
              {game.isFree && (
                <Badge variant="outline" className="bg-primary/20 text-primary-foreground">
                  Free to Play
                </Badge>
              )}
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {game.description}
            </p>
          </div>
        </div>

        {/* Game Details */}
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-muted-foreground">{game.description}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Release Year</h3>
                    <p className="text-muted-foreground">{game.releaseYear}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Rating</h3>
                    <p className="text-muted-foreground">{game.rating}</p>
                  </div>
                </div>
              </div>

              {game.trailer && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={game.trailer}
                      title={`${game.title} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Game Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Platform</p>
                    <p className="font-medium">{game.platform}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Genre</p>
                    <p className="font-medium">{game.genres.join(", ")}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Release Date</p>
                    <p className="font-medium">{game.releaseYear}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rating</p>
                    <p className="font-medium">{game.rating}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  {game.isFree ? (
                    <Button className="w-full">Play for Free</Button>
                  ) : (
                    <Button className="w-full">Get Game</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedGames.length > 0 && (
          <div className="py-8 bg-muted/10">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-6">Similar Games</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedGames.map((relatedGame) => (
                  <div key={relatedGame.id}>
                    <GameCard
                      id={relatedGame.id}
                      title={relatedGame.title}
                      image={relatedGame.image}
                      genres={relatedGame.genres}
                      platform={relatedGame.platform}
                      sponsored={relatedGame.sponsored}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GameDetails;
