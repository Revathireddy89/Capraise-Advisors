import React from 'react';

function AboutHero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-center motion-fade-in">About Capraise Advisors</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Delivering excellence in investment banking and strategic advisory since our inception.</p>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-8"></div>
      </div>
    </section>
  );
}

export default AboutHero;

