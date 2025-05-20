
export interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
  genres: string[];
  platform: string;
  releaseYear: number;
  rating: string;
  sponsored?: boolean;
  isFree?: boolean;
  trailer?: string;
}

export const trendingGames: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    description: "Experience the gritty underworld of Los Santos in this action-packed open world adventure.",
    genres: ["Action", "Adventure"],
    platform: "Console",
    releaseYear: 2013,
    rating: "M",
  },
  {
    id: 2,
    title: "Forza Horizon 5",
    image: "https://images.unsplash.com/photo-1627856014754-2907e2355302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Race through vibrant landscapes in Mexico in the ultimate horizon adventure.",
    genres: ["Racing", "Simulation"],
    platform: "PC",
    releaseYear: 2021,
    rating: "E",
    sponsored: true,
  },
  {
    id: 3,
    title: "Elden Ring",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Embark on a journey through a broken world filled with fantastical creatures and perilous challenges.",
    genres: ["RPG", "Action"],
    platform: "PC",
    releaseYear: 2022,
    rating: "M",
  },
  {
    id: 4,
    title: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Join the massive combat arena with up to 150 players in this free-to-play battle royale.",
    genres: ["Shooter", "Battle Royale"],
    platform: "PC",
    releaseYear: 2020,
    rating: "M",
    isFree: true,
  },
  {
    id: 5,
    title: "Minecraft",
    image: "https://images.unsplash.com/photo-1626751472653-9a9dafbed026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Build, explore, and survive in a 3D generated world with infinite terrain.",
    genres: ["Sandbox", "Adventure"],
    platform: "PC",
    releaseYear: 2011,
    rating: "E",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80",
    description: "Become a cyber-enhanced mercenary outlaw in a dystopian metropolis obsessed with power and body modification.",
    genres: ["RPG", "Action"],
    platform: "Console",
    releaseYear: 2020,
    rating: "M",
  }
];

export const freeGames: Game[] = [
  {
    id: 7,
    title: "Apex Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A free-to-play battle royale game where legendary characters with powerful abilities team up to battle for fame and fortune.",
    genres: ["Shooter", "Battle Royale"],
    platform: "PC",
    releaseYear: 2019,
    rating: "T",
    isFree: true,
  },
  {
    id: 8,
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Be the last one standing in this battle royale game with building mechanics.",
    genres: ["Shooter", "Battle Royale"],
    platform: "PC",
    releaseYear: 2017,
    rating: "T",
    isFree: true,
  },
  {
    id: 9,
    title: "Genshin Impact",
    image: "https://images.unsplash.com/photo-1616249807402-9dae436108cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven, the gods of each element.",
    genres: ["Action", "RPG"],
    platform: "Mobile",
    releaseYear: 2020,
    rating: "T",
    isFree: true,
  },
  {
    id: 10,
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Team-based strategy game where two teams of five powerful champions face off to destroy the other's base.",
    genres: ["MOBA", "Strategy"],
    platform: "PC",
    releaseYear: 2009,
    rating: "T",
    isFree: true,
  },
  {
    id: 4,
    title: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Join the massive combat arena with up to 150 players in this free-to-play battle royale.",
    genres: ["Shooter", "Battle Royale"],
    platform: "PC",
    releaseYear: 2020,
    rating: "M",
    isFree: true,
  },
  {
    id: 11,
    title: "Destiny 2",
    image: "https://images.unsplash.com/photo-1518150795925-b9d167096c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Dive into the world of Destiny 2 to experience responsive first-person shooter combat, explore the mysteries of our solar system, and unleash elemental abilities.",
    genres: ["Shooter", "Action"],
    platform: "PC",
    releaseYear: 2017,
    rating: "T",
    isFree: true,
  }
];

export const allGames: Game[] = [
  ...trendingGames,
  ...freeGames,
  {
    id: 12,
    title: "God of War Ragnarök",
    image: "https://images.unsplash.com/photo-1558796408-84681500c35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives.",
    genres: ["Action", "Adventure"],
    platform: "Console",
    releaseYear: 2022,
    rating: "M",
    trailer: "https://www.youtube.com/embed/EE-4GvjKcfs",
  },
  {
    id: 13,
    title: "The Legend of Zelda: Tears of the Kingdom",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1247&q=80",
    description: "Embark on an epic adventure across the land and skies of Hyrule.",
    genres: ["Action", "Adventure"],
    platform: "Console",
    releaseYear: 2023,
    rating: "E10+",
    trailer: "https://www.youtube.com/embed/uHGShqcAHlQ",
  },
  {
    id: 14,
    title: "PUBG: Battlegrounds",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Land, loot, and outlive your opponents to become the last player standing.",
    genres: ["Shooter", "Battle Royale"],
    platform: "PC",
    releaseYear: 2017,
    rating: "T",
    isFree: true,
  },
  {
    id: 15,
    title: "FIFA 23",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Experience the world's game with HyperMotion2 technology.",
    genres: ["Sports", "Simulation"],
    platform: "Console",
    releaseYear: 2022,
    rating: "E",
  },
  {
    id: 16,
    title: "Rocket League",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "High-powered hybrid of arcade-style soccer and vehicular mayhem.",
    genres: ["Sports", "Racing"],
    platform: "PC",
    releaseYear: 2015,
    rating: "E",
    isFree: true,
  },
];

export const getRelatedGames = (id: number, count: number = 4): Game[] => {
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
