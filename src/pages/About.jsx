import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import MissionVision from '../components/about/MissionVision';
import WeAspireToServe from '../components/about/WeAspireToServe';
import OurApproach from '../components/about/OurApproach';
import AboutCTA from '../components/about/AboutCTA';

function About() {
  return (
    <div className="w-full bg-white">
      <div className="pt-16">
        <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WeAspireToServe />
      <OurApproach />
      <AboutCTA />
      </div>
    </div>
  );
}

export default About;

