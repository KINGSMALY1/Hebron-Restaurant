
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { getFeaturedRestaurants } from '@/data/restaurants';

const FeaturedMeals = () => {
  const featuredRestaurants = getFeaturedRestaurants();

  return (
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
                alt="Yam and Egg" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-DEFAULT">
                Popular
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Yam and Egg Special</h3>
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                Delicious yam served with perfectly prepared eggs
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
  );
};

export default FeaturedMeals;
