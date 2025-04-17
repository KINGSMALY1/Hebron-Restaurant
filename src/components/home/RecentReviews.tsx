
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import ReviewCard from '@/components/ReviewCard';
import { getRecentReviews } from '@/data/restaurants';

const RecentReviews = () => {
  const recentReviews = getRecentReviews(3);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 font-playfair">Recent Reviews</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recentReviews.map(({ restaurant, review }) => (
            <div key={review.id} className="flex flex-col">
              <Link to={`/restaurant/${restaurant.id}`} className="mb-4">
                <h3 className="text-xl font-semibold hover:text-red-DEFAULT transition-colors">
                  {restaurant.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  {restaurant.location}
                </div>
              </Link>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
