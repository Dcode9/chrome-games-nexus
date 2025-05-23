
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface GameCardProps {
  id: number | string;
  title: string;
  image: string;
  genres: string[];
  sponsored?: boolean;
}

const GameCard = ({ id, title, image, genres, sponsored }: GameCardProps) => {
  return (
    <Link to={`/game/${id}`} className="group">
      <Card className="glass-card overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute top-2 right-2 space-x-1">
            {sponsored && <Badge variant="outline" className="bg-primary/20 text-primary-foreground">Sponsored</Badge>}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{title}</h3>
          <div className="flex flex-wrap gap-1">
            {genres.slice(0, 2).map((genre, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {genre}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
