
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Star, MapPin, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RestaurantCard from '@/components/RestaurantCard';
import ReviewCard from '@/components/ReviewCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getFeaturedRestaurants, getRecentReviews } from '@/data/restaurants';

const Index = () => {
  const featuredRestaurants = getFeaturedRestaurants();
  const recentReviews = getRecentReviews(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-[70vh]" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` 
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-playfair">
              Golden Spoon Reviews
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
              Discover exceptional dining experiences curated by our expert reviewers
            </p>
            <div className="relative w-full max-w-lg">
              <Input 
                placeholder="Search for restaurants, cuisines, or locations..." 
                className="pl-10 py-6 bg-white/90 text-gray-900 rounded-full w-full border-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-DEFAULT hover:bg-red-dark rounded-full"
                size="sm"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Restaurants Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold font-playfair">Featured Restaurants</h2>
            <Link to="/restaurants" className="text-red-DEFAULT hover:text-red-dark flex items-center gap-1">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-playfair text-center">
            Explore by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div id="fine-dining" className="bg-white rounded-lg shadow-md p-6 text-center card-hover-effect">
              <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-red-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600 mb-4">Elegant establishments with exceptional service and cuisine</p>
              <Link 
                to="/restaurants?category=fine-dining"
                className="text-red-DEFAULT hover:text-red-dark font-medium inline-flex items-center"
              >
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div id="casual" className="bg-white rounded-lg shadow-md p-6 text-center card-hover-effect">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Casual Dining</h3>
              <p className="text-gray-600 mb-4">Relaxed atmosphere with delicious everyday meals</p>
              <Link 
                to="/restaurants?category=casual"
                className="text-red-DEFAULT hover:text-red-dark font-medium inline-flex items-center"
              >
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div id="cafes" className="bg-white rounded-lg shadow-md p-6 text-center card-hover-effect">
              <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-red-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cafés & Bistros</h3>
              <p className="text-gray-600 mb-4">Cozy spots for coffee, light meals and pastries</p>
              <Link 
                to="/restaurants?category=cafes"
                className="text-red-DEFAULT hover:text-red-dark font-medium inline-flex items-center"
              >
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div id="street-food" className="bg-white rounded-lg shadow-md p-6 text-center card-hover-effect">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gold-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Street Food</h3>
              <p className="text-gray-600 mb-4">Authentic and flavorful bites from food vendors and trucks</p>
              <Link 
                to="/restaurants?category=street-food"
                className="text-red-DEFAULT hover:text-red-dark font-medium inline-flex items-center"
              >
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Reviews Section */}
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
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Discover Your Next Favorite Restaurant
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Join our community of food enthusiasts and explore the best dining experiences in your area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-red-DEFAULT hover:bg-red-dark text-white rounded-full px-8"
              size="lg"
            >
              Browse All Restaurants
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10 rounded-full px-8"
              size="lg"
            >
              Become a Reviewer
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
