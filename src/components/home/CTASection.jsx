import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 motion-fade-in leading-tight">Ready to Transform Your Business?</h2>
        <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto motion-fade-in animation-delay-200">Let's discuss how Capraise Advisors can help you achieve your financial goals.</p>
        <div className="motion-fade-in animation-delay-400">
          <Link 
            to="/contact" 
            className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Contact Us Today →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
