
export interface Game {
  id: number | string; // Supporting both number and string IDs
  title: string;
  image: string;
  coverImage?: string; // Adding this field
  description: string;
  genres: string[];
  platform: string;
  releaseYear: number;
  rating: number;
  price?: string; // Adding price field
  releaseDate?: string; // Adding release date field
  sponsored?: boolean;
  isFree?: boolean;
  trailer?: string;
}

// Filtered games list as requested
export const allGames: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    coverImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    description: "Experience the gritty underworld of Los Santos in this action-packed open world adventure.",
    genres: ["Action", "Adventure"],
    platform: "PC",
    releaseYear: 2013,
    rating: 4.5,
    price: "29.99",
    releaseDate: "2013-09-17",
  },
  {
    id: 2,
    title: "Forza Horizon 5",
    image: "https://images.unsplash.com/photo-1627856014754-2907e2355302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    coverImage: "https://images.unsplash.com/photo-1627856014754-2907e2355302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Race through vibrant landscapes in Mexico in the ultimate horizon adventure.",
    genres: ["Racing", "Simulation"],
    platform: "PC",
    releaseYear: 2021,
    rating: 4.8,
    price: "59.99",
    releaseDate: "2021-11-09",
    sponsored: true,
  },
  {
    id: 5,
    title: "Minecraft",
    image: "https://images.unsplash.com/photo-1626751472653-9a9dafbed026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    coverImage: "https://images.unsplash.com/photo-1626751472653-9a9dafbed026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Build, explore, and survive in a 3D generated world with infinite terrain.",
    genres: ["Sandbox", "Adventure"],
    platform: "PC",
    releaseYear: 2011,
    rating: 4.7,
    price: "26.95",
    releaseDate: "2011-11-18",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80",
    coverImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80",
    description: "Become a cyber-enhanced mercenary outlaw in a dystopian metropolis obsessed with power and body modification.",
    genres: ["RPG", "Action"],
    platform: "PC",
    releaseYear: 2020,
    rating: 4.0,
    price: "59.99",
    releaseDate: "2020-12-10",
  }
];

// For compatibility with existing code
export const trendingGames = allGames;
export const freeGames = allGames.filter(game => game.isFree);

// Adding upcoming games data
export const upcomingGames = [
  {
    id: "starfield",
    title: "Starfield",
    image: "/placeholder.svg",
    description: "An epic space RPG set among the stars.",
    genres: ["RPG", "Adventure", "Sci-Fi"],
    platform: "PC",
    releaseYear: 2025,
    rating: 0,
  },
  {
    id: "elder-scrolls-6",
    title: "The Elder Scrolls VI",
    image: "/placeholder.svg",
    description: "The next chapter in the Elder Scrolls saga.",
    genres: ["RPG", "Open World", "Fantasy"],
    platform: "PC",
    releaseYear: 2026,
    rating: 0,
  },
  {
    id: "gta-6",
    title: "Grand Theft Auto VI",
    image: "/placeholder.svg",
    description: "Return to Vice City in this highly anticipated sequel.",
    genres: ["Action", "Adventure", "Open World"],
    platform: "PC",
    releaseYear: 2025,
    rating: 0,
  }
];

export const getRelatedGames = (id: number | string, count: number = 4): Game[] => {
  const game = allGames.find(g => g.id === id);
  if (!game) return [];
  
  // Get games with similar genre
  const sameGenre = allGames.filter(g => 
    g.id !== id && 
    g.genres.some(genre => game.genres.includes(genre))
  );
  
  // If not enough games with same genre, add some random games
  const remaining = allGames.filter(g => 
    g.id !== id && 
    !sameGenre.includes(g)
  );
  
  const result = [...sameGenre];
  
  while (result.length < count && remaining.length > 0) {
    const randomIndex = Math.floor(Math.random() * remaining.length);
    result.push(remaining[randomIndex]);
    remaining.splice(randomIndex, 1);
  }
  
  return result.slice(0, count);
};
