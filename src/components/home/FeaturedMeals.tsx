
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const FeaturedMeals = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold font-playfair text-red-500">Featured Meals</h2>
          <Link to="/restaurants" className="text-red-500 hover:text-red-600 flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Spicy Stew */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/9e3ca5a8-33a1-455a-b8c6-690dcd926c97.png" 
                alt="Spicy Stew" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-500">
                Featured
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Spicy Stew Special</h3>
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                Rich and flavorful stew served with white rice
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-gold-DEFAULT fill-gold-DEFAULT" />
                  <span className="ml-1 text-sm font-medium">4.8</span>
                </div>
                <span className="text-sm text-gray-500">₦2,500</span>
              </div>
            </div>
          </div>

          {/* Goat Meat */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/61b7bd73-b6c9-4916-b26c-ed19fdd1b0b7.png" 
                alt="Goat Meat" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-500">
                Popular
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Peppered Goat Meat</h3>
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                Tender goat meat with spicy pepper sauce
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-gold-DEFAULT fill-gold-DEFAULT" />
                  <span className="ml-1 text-sm font-medium">4.7</span>
                </div>
                <span className="text-sm text-gray-500">₦3,000</span>
              </div>
            </div>
          </div>

          {/* Fish Stew */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/127387fc-4079-45da-b2a0-8814d2b92d08.png" 
                alt="Fish Stew" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-red-500">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Special Fish Stew</h3>
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                Fresh fish cooked in rich tomato stew
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-gold-DEFAULT fill-gold-DEFAULT" />
                  <span className="ml-1 text-sm font-medium">4.6</span>
                </div>
                <span className="text-sm text-gray-500">₦2,800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
