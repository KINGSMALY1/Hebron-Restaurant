
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const FeaturedMeals = () => {
  const meals = [
    {
      name: "Spicy Chicken with Rice",
      image: "/lovable-uploads/6fc5f678-24bc-4b69-885a-b20a520d25b8.png",
      description: "Spicy chicken served with white rice and traditional sauce",
      price: "₦3,500",
      rating: 4.8
    },
    {
      name: "Traditional Goat Meat",
      image: "/lovable-uploads/5c67abc9-98ab-4455-a6f1-b5fa5ee16e8f.png",
      description: "Tender goat meat prepared in traditional style",
      price: "₦4,000",
      rating: 4.9
    },
    {
      name: "Special Fish Stew",
      image: "/lovable-uploads/a5166af5-5502-40e5-88cc-b52ee113a0ea.png",
      description: "Fresh fish cooked in rich spicy stew",
      price: "₦3,800",
      rating: 4.7
    },
    {
      name: "Grilled Suya Special",
      image: "/lovable-uploads/d663af38-9ed4-4e1c-9948-d9e0f8282d89.png",
      description: "Perfectly spiced and grilled meat suya",
      price: "₦2,500",
      rating: 4.8
    },
    {
      name: "Special Breakfast",
      image: "/lovable-uploads/d4b6466b-b69a-4b15-88d4-9794c1edf557.png",
      description: "Morning special with toast and eggs",
      price: "₦2,000",
      rating: 4.6
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold font-playfair text-red-500">Featured Meals</h2>
          <Link to="/restaurants" className="text-red-500 hover:text-red-600 flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-64">
                <img 
                  src={meal.image} 
                  alt={meal.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{meal.name}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {meal.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-gold-DEFAULT fill-gold-DEFAULT" />
                    <span className="text-sm font-medium">{meal.rating}</span>
                  </div>
                  <span className="text-red-500 font-semibold">{meal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
