
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/AdBanner";

interface UpcomingGame {
  id: number;
  title: string;
  image: string;
  releaseYear: number;
  description: string;
  genres: string[];
}

const upcomingGamesData: UpcomingGame[] = [
  {
    id: 101,
    title: "Elder Scrolls VI",
    image: "https://placehold.co/600x800/3498db/ffffff?text=Elder+Scrolls+VI",
    releaseYear: 2026,
    description: "The long-awaited next chapter in the Elder Scrolls saga. Return to Tamriel and explore a vast new region filled with adventure and danger.",
    genres: ["RPG", "Adventure", "Open World"]
  },
  {
    id: 102,
    title: "GTA VI",
    image: "https://placehold.co/600x800/e74c3c/ffffff?text=GTA+VI",
    releaseYear: 2026,
    description: "The next installment in the Grand Theft Auto franchise. Experience a new city, new characters, and the most immersive open world to date.",
    genres: ["Action", "Adventure", "Open World"]
  },
  {
    id: 103,
    title: "Starfield 2",
    image: "https://placehold.co/600x800/9b59b6/ffffff?text=Starfield+2",
    releaseYear: 2027,
    description: "Continue your journey through the stars in this sequel to Bethesda's space epic. Explore new planets and uncover cosmic mysteries.",
    genres: ["RPG", "Sci-Fi", "Open World"]
  },
  {
    id: 104,
    title: "Dragon Age: Veilguard",
    image: "https://placehold.co/600x800/2ecc71/ffffff?text=Dragon+Age",
    releaseYear: 2025,
    description: "Return to Thedas in this new installment of the Dragon Age series. Face ancient evils and forge new alliances.",
    genres: ["RPG", "Fantasy", "Action"]
  },
  {
    id: 105,
    title: "Fable IV",
    image: "https://placehold.co/600x800/f39c12/ffffff?text=Fable+IV",
    releaseYear: 2025,
    description: "A new beginning for the Fable franchise. Create your legend in a reimagined Albion filled with magic and adventure.",
    genres: ["RPG", "Fantasy", "Adventure"]
  }
];

const UpcomingGames = () => {
  const [sortBy, setSortBy] = useState<"year" | "name">("year");

  const sortedGames = [...upcomingGamesData].sort((a, b) => {
    if (sortBy === "year") {
      return a.releaseYear - b.releaseYear;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 transition-all duration-300 animate-fade-in">
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-3xl font-bold">Upcoming Games</h1>
              
              <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">Sort By:</div>
                <Button 
                  size="sm"
                  variant={sortBy === "year" ? "default" : "outline"}
                  onClick={() => setSortBy("year")}
                  className="h-8"
                >
                  Release Year
                </Button>
                <Button 
                  size="sm"
                  variant={sortBy === "name" ? "default" : "outline"}
                  onClick={() => setSortBy("name")}
                  className="h-8"
                >
                  Name
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 gap-6">
                {sortedGames.map((game) => (
                  <Card key={game.id} className="overflow-hidden animate-fade-in">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 aspect-[3/4] relative">
                        <img 
                          src={game.image} 
                          alt={game.title} 
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary text-primary-foreground">{game.releaseYear}</Badge>
                        </div>
                      </div>
                      <CardContent className="flex-1 p-6">
                        <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {game.genres.map((genre, index) => (
                            <Badge key={index} variant="outline">{genre}</Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6">{game.description}</p>
                        <Button className="transition-all duration-300">
                          Add to Wishlist
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
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

export default UpcomingGames;
