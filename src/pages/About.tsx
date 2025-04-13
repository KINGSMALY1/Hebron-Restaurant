
import React from 'react';
import { CheckCircle, Coffee, Star, Award, MapPin, Clock, Phone, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0">
          <div 
            className="h-full w-full bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: `url('/lovable-uploads/afcd3f77-d71f-4070-b496-e46916ea501f.png')` 
            }}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-70" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-playfair">
              About HEBRON FOOD
            </h1>
            <p className="text-xl max-w-3xl text-gray-200 mb-8">
              We're passionate about connecting food lovers with exceptional dining experiences through delicious, quality food in Maiduguri.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Our Story</h2>
              <p className="text-gray-700 mb-4">
                HEBRON FOOD was founded with a vision to bring exceptional dining experiences to Maiduguri, Borno State. What began as a small eatery has now grown into one of the most beloved dining establishments in the city.
              </p>
              <p className="text-gray-700 mb-4">
                We take pride in serving a wide variety of delicious meals prepared with fresh, quality ingredients. Our team is committed to providing excellent service in a clean, welcoming environment.
              </p>
              <p className="text-gray-700">
                Today, HEBRON FOOD has become a go-to destination for locals and visitors alike, offering both traditional Nigerian cuisine and international dishes that satisfy every palate.
              </p>
            </div>
            <div className="relative">
              <div className="bg-red-DEFAULT/20 absolute -top-6 -bottom-6 -left-6 -right-6 rounded-lg -z-10"></div>
              <img 
                src="/lovable-uploads/c6ad0dbc-880b-4296-8e69-72e7e8c42113.png" 
                alt="HEBRON FOOD interior" 
                className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-playfair text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-red-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-700">
                We use only the freshest ingredients and maintain the highest standards in food preparation to ensure every meal is delicious and satisfying.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-gold-dark" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <p className="text-gray-700">
                We believe in providing warm, attentive service that makes every customer feel valued and welcome from the moment they enter our restaurant.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-red-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-700">
                We're proud to be a gathering place for the Maiduguri community, creating a space where people can connect over great food and memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Menu Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-playfair text-center">Our Menu Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/0e6cfbf5-1598-4246-8593-83a63917a404.png" 
                alt="Jollof Rice Special" 
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Jollof Rice Special</h3>
                <p className="text-gray-700">
                  Our signature jollof rice is prepared with a special blend of spices and served with your choice of protein.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/0e958da9-401d-4c2c-9ee6-cc1c2dd198c5.png" 
                alt="Suya Platter" 
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Suya Platter</h3>
                <p className="text-gray-700">
                  Delicious grilled meat skewers seasoned with traditional spices, perfect for sharing.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/8b3580e0-065b-4dae-8521-575490ac3928.png" 
                alt="Interior Counter" 
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-700">
                  Our efficient counter service ensures you get your delicious meal with minimal waiting time.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-center bg-gray-50 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/8fd7346a-9cac-4bfb-beb9-8ed3977a9906.png" 
                alt="Coffee" 
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Beverages</h3>
                <p className="text-gray-700">
                  Complement your meal with our selection of refreshing drinks, including premium coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-playfair text-center">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-red-DEFAULT flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-700">4 Krika Sama Road, Maiduguri 600282, Borno</p>
                      <p className="text-gray-700">R4RW+Q5 Maiduguri</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start space-x-4">
                    <Clock size={24} className="text-red-DEFAULT flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <p className="text-gray-700">7am - Open</p>
                      <p className="text-gray-700">Closes - 11pm</p>
                      <p className="text-gray-700">Open Daily</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-red-DEFAULT flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">0912 666 6934</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start space-x-4">
                    <Instagram size={24} className="text-red-DEFAULT flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                      <a 
                        href="https://www.instagram.com/hebronfoodmaiduguri" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-red-DEFAULT hover:underline"
                      >
                        @hebronfoodmaiduguri
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7350008272245!2d13.1358948!3d11.850280099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f3ee6b046bf%3A0x2bba0628b6d92e32!2sHebron%20Food!5e0!3m2!1sen!2sng!4v1681867362737!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HEBRON FOOD Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Dine With Us
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Experience the best food Maiduguri has to offer at HEBRON FOOD. Come for the food, stay for the atmosphere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://maps.app.goo.gl/2pm2CJfzK56r6KeJ7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-DEFAULT hover:bg-red-dark px-8 py-3 rounded-full text-white font-medium transition-colors inline-flex items-center"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
              <a 
                href="tel:09126666934"
                className="border border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
