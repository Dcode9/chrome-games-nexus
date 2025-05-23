
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSidebar from "@/components/GameSidebar";
import GameGrid from "@/components/GameGrid";
import { upcomingGames } from "@/data/gamesData";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

const UpcomingGames = () => {
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
            <Navigation title="Upcoming Games" showBackButton={true} />
            
            <div className="container px-4 py-6">
              <GameGrid 
                title="" 
                games={upcomingGames} 
                scrollable={false} 
              />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default UpcomingGames;
