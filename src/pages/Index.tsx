
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HealthHubSection from '@/components/HealthHubSection';
import Footer from '@/components/Footer';
import FloatingBee from '@/components/FloatingBee';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-nature-beige">
      <Navbar />
      <FloatingBee />
      <main className="flex-grow">
        <HeroSection />
        <WhyUsSection />
        <ProcessSection />
        <ProductsSection />
        <TestimonialsSection />
        <HealthHubSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
