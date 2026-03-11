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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Why Choose Capraise?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We deliver excellence through expertise, innovation, and personalized service</p>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
            <div 
              key={idx}
              className="motion-fade-in group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300"
              style={{animationDelay: reason.delay}}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent rounded-t-xl group-hover:from-green-400 group-hover:via-green-300 group-hover:to-transparent transition-all duration-300"></div>
              
              {/* Icon Circle */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-6 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300">
                <IconComponent className="w-7 h-7 text-green-600" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{reason.description}</p>
              
              {/* Arrow indicator */}
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Learn more →
              </div>
              
              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl"></div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to elevate your financial strategy?</h3>
          <p className="text-lg text-gray-600 mb-8">Let's explore how Capraise can help you achieve your goals</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
