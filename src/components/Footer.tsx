
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">D'Games</h3>
            <p className="text-sm text-muted-foreground">
              Your ultimate gaming destination
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/games?platform=PC" className="text-muted-foreground hover:text-primary transition-colors">
                  PC Games
                </Link>
              </li>
              <li>
                <Link to="/games?platform=Console" className="text-muted-foreground hover:text-primary transition-colors">
                  Console Games
                </Link>
              </li>
              <li>
                <Link to="/games?platform=Mobile" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile Games
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/games?genre=Action" className="text-muted-foreground hover:text-primary transition-colors">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/games?genre=Adventure" className="text-muted-foreground hover:text-primary transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/games?genre=RPG" className="text-muted-foreground hover:text-primary transition-colors">
                  RPG
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} D'Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
