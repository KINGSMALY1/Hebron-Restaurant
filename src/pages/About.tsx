
import React from 'react';
import { CheckCircle, Coffee, Star, Award } from 'lucide-react';
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
              backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` 
            }}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-70" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-playfair">
              About Golden Spoon Reviews
            </h1>
            <p className="text-xl max-w-3xl text-gray-200 mb-8">
              We're passionate about connecting food lovers with exceptional dining experiences through trusted, thoughtful reviews.
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
                Golden Spoon Reviews was founded in 2018 by a group of food enthusiasts who were disappointed with the quality and reliability of restaurant reviews available online.
              </p>
              <p className="text-gray-700 mb-4">
                We set out to create a platform that celebrates culinary excellence through detailed, honest reviews that help diners discover truly exceptional restaurants worth their time and money.
              </p>
              <p className="text-gray-700">
                Today, Golden Spoon has grown into a trusted resource for food lovers across the country, with a team of expert reviewers who are passionate about sharing their dining experiences.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gold/20 absolute -top-6 -bottom-6 -left-6 -right-6 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team of food enthusiasts" 
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
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We hold ourselves and the restaurants we review to the highest standards, seeking out and celebrating truly exceptional dining experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-gold-dark" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-700">
                Our reviews are always honest, unbiased, and transparent. We pay for our own meals and never accept compensation for favorable reviews.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-red-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-700">
                Our reviewers have extensive culinary knowledge and experience, allowing them to evaluate restaurants with an educated and discerning perspective.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-playfair text-center">Our Review Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-DEFAULT rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Anonymous Visits</h3>
                  <p className="text-gray-700">
                    Our reviewers visit each restaurant at least twice, always anonymously and at different times, to ensure consistency and fairness.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-DEFAULT rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Evaluation</h3>
                  <p className="text-gray-700">
                    We assess every aspect of the dining experience, from food quality and presentation to service, ambiance, and value for money.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-DEFAULT rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Editorial Review</h3>
                  <p className="text-gray-700">
                    All reviews undergo a thorough editorial process to ensure accuracy, fairness, and consistency with our standards.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-DEFAULT rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Publication</h3>
                  <p className="text-gray-700">
                    Only after this rigorous process do we publish our reviews, along with our signature Golden Spoon rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Join Our Community
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Share your own restaurant experiences, follow your favorite reviewers, and discover exceptional dining experiences curated just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-DEFAULT hover:bg-red-dark px-8 py-3 rounded-full text-white font-medium transition-colors">
                Sign Up
              </button>
              <button className="border border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
