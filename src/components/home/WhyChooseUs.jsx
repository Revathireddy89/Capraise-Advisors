import React from 'react';
import { FiCheck, FiTrendingUp, FiGlobe } from 'react-icons/fi';

function WhyChooseUs() {
  const reasons = [
    {
      icon: FiCheck,
      title: 'Tailored Services',
      description: 'Experts in facilitating complicated financial transactions customized for your unique needs.',
      delay: '0s'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytical Approach',
      description: 'We examine financial standing and market developments to provide insightful information.',
      delay: '0.2s'
    },
    {
      icon: FiGlobe,
      title: 'Robust Network',
      description: 'Our extensive network connects you with appropriate prospects and key stakeholders.',
      delay: '0.4s'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 motion-fade-in">Why Choose Capraise?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto motion-fade-in" style={{animationDelay: '0.1s'}}>We deliver excellence through expertise, innovation, and personalized service</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, idx) => {
            
            return (
            <div 
              key={idx}
              className="motion-fade-in group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              style={{animationDelay: reason.delay}}
            >
              {/* Number badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{reason.description}</p>

              {/* Feature List */}
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Expert consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Proven track record
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Dedicated support
                </li>
              </ul>
              
              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300"></div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 motion-fade-in">Ready to Elevate Your Financial Strategy?</h3>
          <p className="text-lg text-gray-600 mb-10 motion-fade-in" style={{animationDelay: '0.1s'}}>Let's explore how Capraise can help you achieve your goals</p>
          <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg motion-fade-in" style={{animationDelay: '0.2s'}}>
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

