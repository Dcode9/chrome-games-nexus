
import { Card } from "@/components/ui/card";

interface AdBannerProps {
  type: "sidebar" | "banner";
}

const AdBanner = ({ type }: AdBannerProps) => {
  if (type === "sidebar") {
    return (
      <Card className="glass-card overflow-hidden">
        <div className="p-4 bg-muted/20 h-[300px] flex items-center justify-center border border-border/50">
          <p className="text-sm text-muted-foreground">Advertisement</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-4">
      <Card className="glass-card overflow-hidden">
        <div className="p-4 bg-muted/20 h-[100px] flex items-center justify-center border border-border/50">
          <p className="text-sm text-muted-foreground">Advertisement Banner</p>
        </div>
      </Card>
    </div>
  );
};

export default AdBanner;
