
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 md:hidden">
            <span className="font-exo text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              D'Games
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
