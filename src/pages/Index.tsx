
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameGrid from "@/components/GameGrid";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { trendingGames, freeGames } from "@/data/gamesData";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />

        <GameGrid title="Trending Now" games={trendingGames} scrollable={true} />
        
        <AdBanner type="banner" />
        
        <GameGrid title="Top Free Picks" games={freeGames} scrollable={true} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
