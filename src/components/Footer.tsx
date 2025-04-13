
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <span className="text-red-light text-2xl font-bold font-playfair">HEBRON</span>
                <span className="text-gold-light text-2xl font-bold font-playfair">FOOD</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Discover exceptional dining experiences in Maiduguri, Borno State.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/hebronfoodmaiduguri" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Restaurants</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#fine-dining" className="text-gray-400 hover:text-white transition-colors">Fine Dining</Link>
              </li>
              <li>
                <Link to="/#casual" className="text-gray-400 hover:text-white transition-colors">Casual Dining</Link>
              </li>
              <li>
                <Link to="/#cafes" className="text-gray-400 hover:text-white transition-colors">Cafés & Bistros</Link>
              </li>
              <li>
                <Link to="/#street-food" className="text-gray-400 hover:text-white transition-colors">Street Food</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>info@hebronfood.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Subscribe to newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 text-sm rounded-l-md focus:outline-none flex-grow"
                />
                <button className="bg-red-dark hover:bg-red-DEFAULT px-4 py-2 text-sm rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HEBRON FOOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
