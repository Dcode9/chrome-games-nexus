
import GameCard from "./GameCard";

interface Game {
  id: number;
  title: string;
  image: string;
  genres: string[];
  platform: string;
  sponsored?: boolean;
}

interface GameGridProps {
  title: string;
  games: Game[];
  scrollable?: boolean;
}

const GameGrid = ({ title, games, scrollable = false }: GameGridProps) => {
  if (scrollable) {
    return (
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <div className="scroll-x">
            {games.map((game) => (
              <div key={game.id} className="scroll-item w-[180px] md:w-[200px]">
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
