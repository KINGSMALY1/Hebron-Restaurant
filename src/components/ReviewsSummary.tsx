
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type SummaryReview = {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  text: string;
  likes?: number;
};

const reviews: SummaryReview[] = [
  {
    id: "sum-001",
    userName: "Solomon Elias",
    userAvatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
    text: "Where u can get all meals of ur choice. The food and service are perfect.",
    likes: 1
  },
  {
    id: "sum-002",
    userName: "Olayemi Abifarin",
    userAvatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    text: "Most decent restaurant for a visitor that is not familiar with the local food. Ambience is also decent and cozy.",
    likes: 4
  },
  {
    id: "sum-003",
    userName: "Simon Oyeshola",
    userAvatar: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    text: "Amazing place to get good food at an affordable price. Customer service is good. Readily accessible from any part of the city.",
    likes: 17
  }
];

const ReviewsSummary: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 font-playfair">Our Happy Customers</h2>
          <p className="text-gray-600 max-w-2xl">
            We pride ourselves on excellent food and service. Here's what some of our valued customers have to say about their experience at Hebron Foods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm p-6 card-hover-effect">
              <div className="flex items-start mb-4">
                <Avatar className="h-10 w-10 mr-3">
                  {review.userAvatar ? (
                    <AvatarImage src={review.userAvatar} alt={review.userName} />
                  ) : (
                    <AvatarFallback className="bg-red-light text-red-dark">
                      {review.userName.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14}
                        className={i < review.rating ? "fill-gold text-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{review.text}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ThumbsUp size={14} className="mr-1" />
                  <span>{review.likes} helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/reviews" className="bg-red-DEFAULT hover:bg-red-dark text-white px-6 py-2 rounded-md transition-colors">
            See All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSummary;
