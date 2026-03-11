import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HighlightsSection from '../components/home/HighlightsSection';
import CTASection from '../components/home/CTASection';

function Home() {
  return (
    <div>
      <HeroSection />
     
      <ServicesPreview />
      <WhyChooseUs />
      <HighlightsSection />
      <CTASection />
       <StatsSection />
    </div>
  );
}

export default Home;
