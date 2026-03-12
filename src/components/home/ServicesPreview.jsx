import React from 'react';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiRefreshCw, FiBarChart2 } from 'react-icons/fi';

function ServicesPreview() {
  const services = [
    {
      icon: FiDollarSign,
      title: 'Fundraising',
      description: 'Debt syndication, private equity syndication, and M&A advisory to meet your funding needs.',
      image: '/Assets/Home/funding.jpg',
      delay: '0s'
    },
    {
      icon: FiRefreshCw,
      title: 'Restructuring',
      description: 'Financial, operational, organizational, and strategic restructuring for sustainable growth.',
      image: '/Assets/Home/Restructuring.jpg',
      delay: '0.2s'
    },
    {
      icon: FiBarChart2,
      title: 'Advisory',
      description: 'Startup, capital market, corporate, family office, and special situations advisory.',
      image: '/Assets/Home/Advisory.jpg',
      delay: '0.4s'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
            <div 
              key={idx}
              className="motion-fade-in bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition"
              style={{animationDelay: service.delay}}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <div className="text-4xl mb-4 text-blue-600">
                <IconComponent size={40} />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</Link>
            </div>
            );
          })}
        </div>
        <div className="text-center">
          <Link to="/services" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;

