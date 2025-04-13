
import React, { useState } from 'react';
import { Star, MapPin, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Review = {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  text: string;
  likes?: number;
  images?: string[];
  foodRating?: number;
  serviceRating?: number;
  atmosphereRating?: number;
  mealType?: string;
};

const reviews: Review[] = [
  {
    id: "rev-001",
    userName: "Solomon Elias",
    userAvatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
    date: "2 years ago",
    text: "Where u can get all meals of ur choice",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    mealType: "Dinner",
    likes: 1
  },
  {
    id: "rev-002",
    userName: "Emoni Khamofu",
    userAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
    date: "4 years ago",
    text: "Good Ambience. It's a clean and cozy place. Tasty meals and affordable too. Cordial staffs. I could have easily given them a 5 star rating but for the limited menus and for the single convenience. Nonetheless, I recommend it.",
    likes: 4
  },
  {
    id: "rev-003",
    userName: "Nsikakabasi George",
    userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    date: "2 years ago",
    text: "Learnt it one of the best around this area, Western, Maiduguri. Nice food, ambient, the environment is just so neat and welcoming.",
    likes: 18
  },
  {
    id: "rev-004",
    userName: "Temidayo Musa",
    userAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 4,
    date: "2 years ago",
    text: "I love your food and dishes. Particularly the jollof rice. However, I think you should have separate sauce for people that don't like onions in their food!",
    likes: 1
  },
  {
    id: "rev-005",
    userName: "Adiwu Talatu Onkala",
    userAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 3,
    date: "5 months ago",
    text: "Too crowded. Service teams are overwhelmed most of the time. Food shortages and limited menu. The overwhelming number of customers makes it difficult for the eating area to be kept clean and convenient for those who want to eat in the restaurant."
  },
  {
    id: "rev-006",
    userName: "Olayemi Abifarin",
    userAvatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    date: "1 year ago",
    text: "Most decent restaurant for a visitor that is not familiar with the local food, Food option includes rice, egusi, vegetables, okro e.t.c and all types of protein, ambience is also decent and cozy. The food is also very affordable",
    likes: 4
  },
  {
    id: "rev-007",
    userName: "Elias Denen Dodo",
    userAvatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    date: "8 months ago",
    text: "If the ambience at Hebron is always the way it is when I went there, then I'm not surprised they're so popular. And the food was great! I loved the assortment of meat chunks that filled the soup bowl; and their beef was so tender and well cooked."
  },
  {
    id: "rev-008",
    userName: "Simon Oyeshola",
    userAvatar: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    date: "2 years ago",
    text: "Amazing place to get good food at an affordable price, Food tastes nice. Customer service is good. Readily accessible from any part of the city",
    likes: 17
  }
];

const popularTags = [
  { name: "service", count: 22 },
  { name: "price", count: 16 },
  { name: "environment", count: 12 },
  { name: "jollof rice", count: 6 },
  { name: "snacks", count: 5 },
  { name: "delicacies", count: 5 },
  { name: "atmosphere", count: 5 },
  { name: "experience", count: 5 },
  { name: "pounded yam", count: 3 },
  { name: "goat meat", count: 3 }
];

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter reviews based on selected tag or search query
  const filteredReviews = reviews.filter(review => {
    if (searchQuery) {
      return review.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
             review.userName.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (!activeFilter) return true;
    return review.text.toLowerCase().includes(activeFilter.toLowerCase());
  });
  
  const overallRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-[40vh]" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` 
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center font-playfair">Customer Reviews</h1>
            <p className="text-xl max-w-2xl text-center">See what our valued customers have to say about their experience</p>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="flex items-end">
                <span className="text-5xl font-bold text-red-DEFAULT">{overallRating}</span>
                <span className="text-xl text-gray-500 ml-1">/5</span>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20}
                    className={i < Math.floor(Number(overallRating)) ? "fill-gold text-gold" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">Based on {reviews.length} reviews</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-gold">{reviews.filter(r => r.foodRating === 5).length}</div>
                <div className="text-sm text-gray-500">5★ Food</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold">{reviews.filter(r => r.serviceRating === 5).length}</div>
                <div className="text-sm text-gray-500">5★ Service</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold">{reviews.filter(r => r.atmosphereRating === 5).length}</div>
                <div className="text-sm text-gray-500">5★ Atmosphere</div>
              </div>
            </div>
            
            <div>
              <Button className="bg-red-DEFAULT hover:bg-red-dark">
                Write a Review
              </Button>
            </div>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Input 
                  placeholder="Search reviews..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-4 h-9">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="5star">5 Star</TabsTrigger>
                    <TabsTrigger value="4star">4 Star</TabsTrigger>
                    <TabsTrigger value="3star">3 Star</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm font-medium">Popular tags:</span>
              {popularTags.map(tag => (
                <Badge 
                  key={tag.name} 
                  variant={activeFilter === tag.name ? "default" : "outline"}
                  className={`cursor-pointer ${activeFilter === tag.name ? 'bg-gold hover:bg-gold-dark' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveFilter(activeFilter === tag.name ? null : tag.name)}
                >
                  {tag.name} ({tag.count})
                </Badge>
              ))}
              {activeFilter && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setActiveFilter(null)}
                  className="text-sm h-7 px-2"
                >
                  Clear filter
                </Button>
              )}
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-8">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-6 card-hover-effect">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        {review.userAvatar ? (
                          <img src={review.userAvatar} alt={review.userName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-red-light text-red-dark font-bold">
                            {review.userName.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{review.userName}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16}
                              className={i < review.rating ? "fill-gold text-gold" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="mt-3 text-gray-700">{review.text}</p>
                      
                      {(review.foodRating || review.serviceRating || review.atmosphereRating) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {review.mealType && <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Meal type: {review.mealType}</Badge>}
                          {review.foodRating && <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Food: {review.foodRating}</Badge>}
                          {review.serviceRating && <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Service: {review.serviceRating}</Badge>}
                          {review.atmosphereRating && <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Atmosphere: {review.atmosphereRating}</Badge>}
                        </div>
                      )}
                      
                      {review.images && review.images.length > 0 && (
                        <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
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
                      
                      <div className="mt-4 flex items-center text-sm">
                        <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-red-DEFAULT">
                          <ThumbsUp size={16} className="mr-1" />
                          {review.likes ? `Helpful (${review.likes})` : "Helpful"}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center text-gray-500 ml-2">
                          <span>Reply</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No reviews found matching your criteria.</p>
              </div>
            )}
          </div>
          
          {/* Pagination placeholder */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-1">
              {[1, 2, 3].map((page) => (
                <Button 
                  key={page} 
                  variant={page === 1 ? "default" : "outline"} 
                  className={page === 1 ? "bg-red-DEFAULT hover:bg-red-dark" : ""}
                  size="sm"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Experience Our Delicious Food?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of food lovers and taste the authentic flavors that our customers rave about.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-red-DEFAULT hover:bg-red-dark text-white">
              Reserve a Table
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
              View Menu
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Reviews;
