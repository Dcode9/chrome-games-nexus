
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { filter } from "lucide-react";

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

const platforms = ["All", "PC", "Console", "Mobile"];

const sortOptions = ["Popular", "New", "A-Z", "Price"];

interface FilterBarProps {
  onFilterChange: (filter: string, value: string) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  return (
    <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4 px-4 md:px-6 overflow-x-auto">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm gap-2">
                Genre
                <filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {genres.map((genre) => (
                <DropdownMenuItem
                  key={genre}
                  onClick={() => onFilterChange("genre", genre)}
                >
                  {genre}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm gap-2">
                Platform
                <filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {platforms.map((platform) => (
                <DropdownMenuItem
                  key={platform}
                  onClick={() => onFilterChange("platform", platform)}
                >
                  {platform}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm gap-2">
                Sort By
                <filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => onFilterChange("sort", option)}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
