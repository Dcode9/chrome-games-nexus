
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Featured Games"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,200,120,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex flex-col justify-end h-full pb-16 px-4 md:px-6">
        <div className="max-w-lg animate-slide-in">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Discover and Play{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Amazing Games
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore thousands of titles across all platforms - from AAA blockbusters to indie gems
          </p>
          <Link to="/games">
            <Button size="lg" className="gap-2">
              Browse Games
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
