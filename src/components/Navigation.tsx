
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-exo text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              D'Games
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/games" className="text-sm font-medium transition-colors hover:text-primary">
              Games
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <Input
                type="search"
                placeholder="Search games..."
                className="h-9 md:w-[200px] lg:w-[300px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                ✕
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="h-9 w-9"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
