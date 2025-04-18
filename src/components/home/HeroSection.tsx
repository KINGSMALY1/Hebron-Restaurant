
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {/* Storefront Image */}
          <CarouselItem>
            <div 
              className="bg-cover bg-center h-[70vh]" 
              style={{ 
                backgroundImage: `url('/lovable-uploads/cec39f65-cdab-472f-b7a0-2f4d274d0209.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-black/50"></div>
            </div>
          </CarouselItem>
          {/* Inside View Image */}
          <CarouselItem>
            <div 
              className="bg-cover bg-center h-[70vh]" 
              style={{ 
                backgroundImage: `url('/lovable-uploads/5e8b48b5-7288-4bbe-8af8-f693aa1ad0f6.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-black/50"></div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-playfair animate-fade-in">
          <span className="text-red-500">HEBRON</span> <span className="text-gold-DEFAULT">FOOD</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center animate-fade-in">
          Discover exceptional dining experiences in Maiduguri, Borno State
        </p>
        <div className="relative w-full max-w-lg pointer-events-auto">
          <Input 
            placeholder="Search for dishes, cuisines, or services..." 
            className="pl-10 py-6 bg-white/90 text-gray-900 rounded-full w-full border-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <Button 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full"
            size="sm"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
