import React from 'react';

function AboutHero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-slate-800 overflow-hidden" style={{marginTop: '0'}}>
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)'}}
      ></div>
      
      {/* Accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 to-slate-800/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fadeInUp">
          <div className="mb-6">
            <span className="inline-block bg-blue-400/20 border border-blue-400/40 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">About Our Company</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-200 to-blue-50 bg-clip-text text-transparent">Capraise Advisors</span>
          </h1>
          
          <p className="text-xl text-blue-50 mb-8 leading-relaxed font-light">Delivering excellence in investment banking and strategic advisory since our inception.</p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Learn More
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

