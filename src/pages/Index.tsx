
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedMeals from '@/components/home/FeaturedMeals';
import CategorySection from '@/components/home/CategorySection';
import ContactSection from '@/components/home/ContactSection';
import CTASection from '@/components/home/CTASection';
import ReviewsSummary from '@/components/ReviewsSummary';
import RecentReviews from '@/components/home/RecentReviews';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedMeals />
      <CategorySection />
      <ReviewsSummary />
      <RecentReviews />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
