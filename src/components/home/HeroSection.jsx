import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-32 bg-gradient-to-br from-green-900 via-green-900 to-green-900 overflow-hidden">
      {/* Premium overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-700 rounded-full blur-3xl opacity-25"></div>
      </div>
      
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Content Section */}
          <div>
            {/* Premium Tag */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-green-500/40 rounded-full bg-green-500/5 backdrop-blur-sm motion-fade-in">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-xs text-green-300 font-medium">Premium Advisory Services</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight motion-fade-in animation-delay-200">
              Elevate Your<br/>
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent font-bold">Financial</span><br/>
              Legacy
            </h1>
            
            {/* Divider */}
            <div className="w-10 h-0.5 bg-gradient-to-r from-green-500 to-green-400 mb-4"></div>
            
            {/* Description */}
            <p className="text-sm text-gray-300 mb-8 leading-relaxed max-w-lg motion-fade-in animation-delay-400">
              Transform your wealth and ambitions through strategic advisory. Capraise Advisors combines decades of expertise with personalized solutions for discerning clients.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 motion-fade-in animation-delay-600">
              <Link 
                to="/contact" 
                className="group px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
              >
                Schedule Consultation
              </Link>
              
              <Link 
                to="/about" 
                className="px-6 py-2 border-2 border-green-500/50 text-green-300 text-sm hover:border-green-400 hover:text-green-200 hover:bg-green-500/10 font-semibold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
          
          {/* Image Section with Premium Frame */}
          <div className="relative motion-float">
            <div className="relative group">
              {/* Premium frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 -z-10"></div>
              
              {/* Inner frame */}
              <div className="relative p-1 bg-gradient-to-br from-green-500/30 to-transparent rounded-lg">
                <img 
                  src="/Assets/Home/Banner.jpg" 
                  alt="Business Meeting"
                  className="w-full h-72 lg:h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-green-500 transition group-hover:border-green-400 group-hover:w-12 group-hover:h-12 duration-500"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-green-500 transition group-hover:border-green-400 group-hover:w-12 group-hover:h-12 duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
