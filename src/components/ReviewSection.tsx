
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import StarRating from './StarRating';
import { useToast } from '@/components/ui/use-toast';
import { ScrollArea } from './ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Dummy reviews data
const initialReviews = [
  {
    id: 1,
    author: "GamerPro82",
    rating: 5,
    content: "This game is absolutely amazing! The graphics are stunning and gameplay is addictive.",
    date: "2025-04-15"
  },
  {
    id: 2,
    author: "CasualGamer",
    rating: 4,
    content: "Really enjoyed the storyline, though there were some performance issues on my system.",
    date: "2025-04-10"
  }
];

interface ReviewProps {
  gameId: number | string; // Updated to accept both number and string
}

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}

const ReviewSection = ({ gameId }: ReviewProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleAddReview = () => {
    if (newReview.trim() === "") {
      toast({
        title: "Review cannot be empty",
        description: "Please write your review before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (newRating === 0) {
      toast({
        title: "Please add a rating",
        description: "Select at least one star to rate this game.",
        variant: "destructive",
      });
      return;
    }

    const review: Review = {
      id: Date.now(),
      author: "CurrentUser",
      rating: newRating,
      content: newReview,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([review, ...reviews]);
    setNewReview("");
    setNewRating(0);
    
    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your opinion.",
      variant: "default",
    });
  };

  return (
    <div className="mt-8 bg-muted/10 rounded-lg p-5">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
              {isOpen ? "Hide Reviews" : "Show Reviews"}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="animate-accordion-down">
          <div className="mb-6 bg-background p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
            <div className="mb-2">
              <p className="text-sm text-muted-foreground mb-1">Your Rating</p>
              <StarRating onChange={setNewRating} />
            </div>
            <Textarea 
              placeholder="Share your experience with this game..." 
              className="min-h-[100px] mb-3"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <Button onClick={handleAddReview}>Post Review</Button>
          </div>

          <ScrollArea className="max-h-[400px]">
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="bg-background p-4 rounded-lg animate-fade-in"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <StarRating initialRating={review.rating} readonly size="sm" />
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <p className="text-sm">{review.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-6">
                No reviews yet! Be the first to share your thoughts.
              </p>
            )}
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ReviewSection;
