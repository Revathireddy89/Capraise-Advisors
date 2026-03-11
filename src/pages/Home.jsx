import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhoWeServe from '../components/home/WhoWeServe';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HighlightsSection from '../components/home/HighlightsSection';
import CTASection from '../components/home/CTASection';
import FooterStats from '../components/FooterStats';

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <WhoWeServe />
      <WhyChooseUs />
      <HighlightsSection />
      <CTASection />
      <FooterStats />
    </div>
  );
}

export default Home;
