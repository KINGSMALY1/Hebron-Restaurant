
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-red-dark text-2xl font-bold font-playfair">HEBRON</span>
            <span className="text-gold-dark text-2xl font-bold font-playfair">FOOD</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-DEFAULT font-medium transition-colors">
              Home
            </Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-red-DEFAULT font-medium transition-colors">
              Restaurants
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-DEFAULT font-medium transition-colors">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700">
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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden bg-white fixed inset-x-0 transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 shadow-lg">
          <Link 
            to="/" 
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/restaurants" 
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurants
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex items-center space-x-2 px-4 py-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Search size={16} className="mr-1" /> Search
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <User size={16} className="mr-1" /> Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
