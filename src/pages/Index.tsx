
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Star, MapPin, Utensils, Clock, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RestaurantCard from '@/components/RestaurantCard';
import ReviewCard from '@/components/ReviewCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsSummary from '@/components/ReviewsSummary';
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
            backgroundImage: `url('/lovable-uploads/afcd3f77-d71f-4070-b496-e46916ea501f.png')` 
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-playfair">
              HEBRON FOOD
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
              Discover exceptional dining experiences in Maiduguri, Borno State
            </p>
            <div className="relative w-full max-w-lg">
              <Input 
                placeholder="Search for dishes, cuisines, or services..." 
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
            <h2 className="text-3xl font-bold font-playfair">Featured Meals</h2>
            <Link to="/restaurants" className="text-red-DEFAULT hover:text-red-dark flex items-center gap-1">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Meal 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/lovable-uploads/0e958da9-401d-4c2c-9ee6-cc1c2dd198c5.png" 
                  alt="Suya - Grilled meat skewers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-DEFAULT">
                  Featured
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Suya Platter</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  Delicious grilled meat skewers seasoned with traditional spices
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-gold fill-gold" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-sm text-gray-500">₦2,500</span>
                </div>
              </div>
            </div>

            {/* Featured Meal 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/lovable-uploads/0e6cfbf5-1598-4246-8593-83a63917a404.png" 
                  alt="Jollof Rice with sides" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-DEFAULT">
                  Popular
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Jollof Rice Special</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  Our signature jollof rice served with yam and fried toast
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-gold fill-gold" />
                    <span className="ml-1 text-sm font-medium">4.7</span>
                  </div>
                  <span className="text-sm text-gray-500">₦1,800</span>
                </div>
              </div>
            </div>

            {/* Featured Meal 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/lovable-uploads/8fd7346a-9cac-4bfb-beb9-8ed3977a9906.png" 
                  alt="Hot coffee" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-DEFAULT">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  Freshly brewed premium coffee to start your day right
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-gold fill-gold" />
                    <span className="ml-1 text-sm font-medium">4.5</span>
                  </div>
                  <span className="text-sm text-gray-500">₦800</span>
                </div>
              </div>
            </div>
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
      
      {/* Customer Reviews Summary Section */}
      <ReviewsSummary />
      
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
      
      {/* Contact Info & Map Section */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-playfair text-center">Find Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-700">4 Krika Sama Road, Maiduguri 600282, Borno</p>
                  <p className="text-gray-700">R4RW+Q5 Maiduguri</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-700">7am - 11pm, Open Daily</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-700">0912 666 6934</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Instagram size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <a 
                    href="https://www.instagram.com/hebronfoodmaiduguri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-DEFAULT hover:text-red-dark"
                  >
                    @hebronfoodmaiduguri
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7350008272245!2d13.1358948!3d11.850280099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f3ee6b046bf%3A0x2bba0628b6d92e32!2sHebron%20Food!5e0!3m2!1sen!2sng!4v1681867362737!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HEBRON FOOD Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Visit HEBRON FOOD Today
          </h2>
          <p className="text-lg mb-4 max-w-2xl mx-auto text-gray-300">
            Join our community of food enthusiasts and explore the best dining experience in Maiduguri.
          </p>
          <p className="text-md mb-8 max-w-2xl mx-auto text-gray-300">
            Located at: Maiduguri, Borno State, Nigeria - Along west end beside First Bank main branch
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Fix for the 'as' prop issue - replace Button with an anchor element styled like a Button */}
            <a 
              href="https://maps.app.goo.gl/2pm2CJfzK56r6KeJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-red-DEFAULT text-white px-8 py-2 h-11 text-sm font-medium transition-colors hover:bg-red-dark"
            >
              Get Directions
            </a>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10 rounded-full px-8"
              size="lg"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
