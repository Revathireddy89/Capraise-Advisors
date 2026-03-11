import React from 'react';
import { FiBriefcase, FiDollarSign, FiTrendingUp, FiZap, FiBox, FiUsers } from 'react-icons/fi';

function WhoWeServe() {
  const clients = [
    {
      icon: FiBriefcase,
      title: 'Venture Capitalists & PE Firms',
      description: 'Strategic partners in growth equity investments and portfolio management'
    },
    {
      icon: FiDollarSign,
      title: 'Angel Investors & HNIs',
      description: 'Wealth management and investment advisory for high net worth individuals'
    },
    {
      icon: FiTrendingUp,
      title: 'Startups & Entrepreneurs',
      description: 'Fundraising guidance and business scaling support for growing companies'
    },
    {
      icon: FiZap,
      title: 'Incubators & Accelerators',
      description: 'Advisory support for ecosystem players driving innovation'
    },
    {
      icon: FiBox,
      title: 'Established Corporations',
      description: 'Strategic advisory for expansion, restructuring, and optimization'
    },
    {
      icon: FiUsers,
      title: 'Family Offices',
      description: 'Comprehensive wealth and investment management services'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 motion-fade-in">Who We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>
            We provide tailored solutions for diverse client segments across the financial ecosystem
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, idx) => {
            const IconComponent = client.icon;
            return (
            <div
              key={idx}
              className="motion-fade-in group bg-white p-8 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 relative"
              style={{animationDelay: `${idx * 0.08}s`}}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300">
                <IconComponent className="w-7 h-7 text-green-600 group-hover:text-green-700 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                {client.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {client.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 motion-fade-in">Don't See Your Profile?</h3>
          <p className="text-lg text-gray-600 mb-8 motion-fade-in" style={{animationDelay: '0.1s'}}>
            Every business is unique. Let's explore how Capraise can help your organization thrive.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg motion-fade-in" style={{animationDelay: '0.2s'}}>
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhoWeServe;
