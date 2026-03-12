import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import MissionVision from '../components/about/MissionVision';
import WeAspireToServe from '../components/about/WeAspireToServe';
import OurApproach from '../components/about/OurApproach';
import AboutCTA from '../components/about/AboutCTA';

function About() {
  return (
    <div className="pt-24">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WeAspireToServe />
      <OurApproach />
      <AboutCTA />
    </div>
  );
}

export default About;

