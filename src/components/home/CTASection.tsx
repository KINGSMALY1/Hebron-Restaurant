
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
          Visit <span className="text-red-DEFAULT">HEBRON</span> FOOD Today
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto text-gray-300">
          Join our community of food enthusiasts and explore the best dining experience in Maiduguri.
        </p>
        <p className="text-md mb-8 max-w-2xl mx-auto text-gray-300">
          Located at: Maiduguri, Borno State, Nigeria - Along west end beside First Bank main branch
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
  );
};

export default CTASection;
