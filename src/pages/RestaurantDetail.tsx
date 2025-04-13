
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, ChevronLeft, Star, ExternalLink, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import ReviewCard from '@/components/ReviewCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getRestaurantById } from '@/data/restaurants';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const restaurant = getRestaurantById(id || '');
  
  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
        <Button onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-[50vh]" 
          style={{ backgroundImage: `url('${restaurant.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-white mb-4 hover:bg-white/10"
              >
                <ChevronLeft size={20} className="mr-1" /> Back to restaurants
              </Button>
              
              <div className="flex items-center gap-3 mb-2">
                {restaurant.cuisine.map((type, index) => (
                  <Badge key={index} className="bg-gold text-black">
                    {type}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">
                {restaurant.name}
              </h1>
              
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-1" />
                  <span>{restaurant.location}</span>
                </div>
                
                <div className="flex items-center">
                  <Star size={18} className="fill-gold text-gold mr-1" />
                  <span>{restaurant.rating.toFixed(1)} ({restaurant.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium">{restaurant.priceRange}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 font-playfair">About</h2>
                      <p className="text-gray-700">{restaurant.description}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 font-playfair">Location</h2>
                      <p className="text-gray-700 mb-4">{restaurant.address}</p>
                      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Map placeholder</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="photos">
                  <h2 className="text-2xl font-semibold mb-6 font-playfair">Photos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurant.images.map((image, index) => (
                      <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${restaurant.name} - Photo ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold font-playfair">Reviews</h2>
                      <Button className="bg-red-DEFAULT hover:bg-red-dark">
                        Write a Review
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      {restaurant.reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 font-playfair">Hours</h3>
                <div className="space-y-2">
                  {Object.entries(restaurant.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <Button className="w-full bg-red-DEFAULT hover:bg-red-dark">
                    Reserve a Table
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Share2 size={18} className="mr-2" /> Share
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink size={18} className="mr-2" /> Website
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
