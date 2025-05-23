
import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  initialRating?: number;
  readonly?: boolean;
  onChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  rating?: number; // Added this prop for compatibility
}

const StarRating = ({ initialRating = 0, readonly = false, onChange, size = 'md', rating }: StarRatingProps) => {
  // Use rating prop if provided, otherwise use initialRating
  const [internalRating, setInternalRating] = useState(rating || initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleRatingChange = (newRating: number) => {
    if (readonly) return;
    setInternalRating(newRating);
    if (onChange) onChange(newRating);
  };

  // Determine which rating to display
  const displayRating = rating !== undefined ? rating : internalRating;

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={cn(
            "focus:outline-none transition-colors duration-200 mr-0.5",
            readonly ? "cursor-default" : "cursor-pointer"
          )}
          onClick={() => handleRatingChange(star)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
        >
          <Star
            className={cn(
              sizeClasses[size],
              "transition-colors duration-200",
              (hoverRating || displayRating) >= star 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-gray-300 fill-transparent"
            )}
            strokeWidth={2}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
