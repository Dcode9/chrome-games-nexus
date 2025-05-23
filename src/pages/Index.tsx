
import { useState } from "react";
import Navigation from "@/components/Navigation";
import GameSidebar from "@/components/GameSidebar";
import HeroSection from "@/components/HeroSection";
import GameGrid from "@/components/GameGrid";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { trendingGames, freeGames } from "@/data/gamesData";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
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
            <Navigation />
            
            <div className="container px-4">
              <HeroSection />
              
              <GameGrid title="Trending Now" games={trendingGames} scrollable={true} />
              
              <AdBanner type="banner" />
              
              <GameGrid title="Top Free Picks" games={freeGames} scrollable={true} />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
