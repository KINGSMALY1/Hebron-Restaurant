
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Review } from '@/data/restaurants';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className }) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="flex flex-row items-start space-x-4 p-4 pb-2">
        <Avatar>
          <AvatarImage src={review.userAvatar} alt={review.userName} />
          <AvatarFallback className="bg-red-light text-red-dark">
            {review.userName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900">{review.userName}</span>
            <span className="text-xs text-gray-500">{review.date}</span>
          </div>
          
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className={cn(
                  i < review.rating ? "fill-gold text-gold" : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <p className="text-gray-700 text-sm">
          {review.text}
        </p>
        {review.images && review.images.length > 0 && (
          <div className="mt-3 flex space-x-2 overflow-x-auto pt-1 pb-2">
            {review.images.map((image, idx) => (
              <img 
                key={idx} 
                src={image} 
                alt="Review" 
                className="h-20 w-20 rounded-md object-cover flex-shrink-0" 
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
