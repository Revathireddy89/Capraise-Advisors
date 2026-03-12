import React, { useState } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceTabs from '../components/services/ServiceTabs';
import FundraisingServices from '../components/services/FundraisingServices';
import RestructuringServices from '../components/services/RestructuringServices';
import AdvisoryServices from '../components/services/AdvisoryServices';

function Services() {
  const [activeTab, setActiveTab] = useState('fundraising');

  return (
    <div className="pt-24">
      <ServiceHero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'fundraising' && <FundraisingServices />}
          {activeTab === 'restructuring' && <RestructuringServices />}
          {activeTab === 'advisory' && <AdvisoryServices />}
        </div>
      </section>
    </div>
  );
}

export default Services;

