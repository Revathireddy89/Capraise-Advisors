import React from 'react';
import { HeroSection, ServicesPreview, WhoWeServe, WhyChooseUs, HighlightsSection, CTASection } from '../components/home/HomePage';
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

