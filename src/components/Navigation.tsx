
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationProps {
  title?: string;
  showBackButton?: boolean;
}

const Navigation = ({ title, showBackButton = false }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          {title && <h1 className="text-2xl font-bold">{title}</h1>}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
