
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="relative">
      <div 
        className="bg-cover bg-center h-[70vh]" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/41b5c7ff-d8a5-46b6-8e4c-b88bbf04e0a9.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-playfair">
            <span className="text-red-DEFAULT">HEBRON</span> FOOD
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
  );
};

export default HeroSection;
