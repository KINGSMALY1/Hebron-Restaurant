
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Restaurant } from '@/data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden card-hover-effect">
        <div className="relative h-48">
          <img 
            src={restaurant.imageUrl} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
          {restaurant.featured && (
            <Badge className="absolute top-2 right-2 bg-gold border-gold text-white">
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-playfair text-gray-800">
              {restaurant.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star size={16} className="fill-gold text-gold" />
              <span className="text-sm font-medium">{restaurant.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="mt-2 text-sm text-gray-500 line-clamp-2">
            {restaurant.cuisine.join(", ")}
          </div>
          
          <div className="flex items-center mt-3 text-sm text-gray-500">
            <MapPin size={14} className="mr-1" />
            {restaurant.location}
          </div>
        </CardContent>
        
        <CardFooter className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {restaurant.priceRange}
            </span>
            <span className="text-xs text-gray-400">
              {restaurant.reviewCount} reviews
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
