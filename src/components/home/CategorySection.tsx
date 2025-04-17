
import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Star, MapPin, ArrowRight } from 'lucide-react';

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 font-playfair text-center">
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard 
            id="fine-dining"
            icon={<Utensils className="text-red-DEFAULT" size={32} />}
            title="Fine Dining"
            description="Elegant establishments with exceptional service and cuisine"
            bgColor="bg-red-light"
          />
          
          <CategoryCard 
            id="casual"
            icon={<Star className="text-gold-DEFAULT" size={32} />}
            title="Casual Dining"
            description="Relaxed atmosphere with delicious everyday meals"
            bgColor="bg-gold-light"
          />
          
          <CategoryCard 
            id="cafes"
            icon={<Utensils className="text-red-DEFAULT" size={32} />}
            title="Cafés & Bistros"
            description="Cozy spots for coffee, light meals and pastries"
            bgColor="bg-red-light"
          />
          
          <CategoryCard 
            id="street-food"
            icon={<MapPin className="text-gold-DEFAULT" size={32} />}
            title="Street Food"
            description="Authentic and flavorful bites from food vendors and trucks"
            bgColor="bg-gold-light"
          />
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const CategoryCard = ({ id, icon, title, description, bgColor }: CategoryCardProps) => (
  <div id={id} className="bg-white rounded-lg shadow-md p-6 text-center card-hover-effect">
    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link 
      to={`/restaurants?category=${id}`}
      className="text-red-DEFAULT hover:text-red-dark font-medium inline-flex items-center"
    >
      Explore <ArrowRight size={16} className="ml-1" />
    </Link>
  </div>
);

export default CategorySection;
