
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-DEFAULT shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white text-2xl font-bold font-playfair">HEBRON</span>
            <span className="text-gold-DEFAULT text-2xl font-bold font-playfair">FOOD</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold-light font-medium transition-colors">
              Home
            </Link>
            <Link to="/restaurants" className="text-white hover:text-gold-light font-medium transition-colors">
              Restaurants
            </Link>
            <Link to="/about" className="text-white hover:text-gold-light font-medium transition-colors">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-red-dark">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-red-dark">
              <User size={20} />
            </Button>
          </div>
          
          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden bg-red-DEFAULT fixed inset-x-0 transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 shadow-lg">
          <Link 
            to="/" 
            className="px-4 py-2 text-white hover:bg-red-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/restaurants" 
            className="px-4 py-2 text-white hover:bg-red-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurants
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 text-white hover:bg-red-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex items-center space-x-2 px-4 py-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent text-white border-white hover:bg-red-dark">
              <Search size={16} className="mr-1" /> Search
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent text-white border-white hover:bg-red-dark">
              <User size={16} className="mr-1" /> Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
