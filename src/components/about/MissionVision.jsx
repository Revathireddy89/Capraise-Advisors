import React from 'react';

function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center motion-fade-in">Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="motion-fade-in group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver strategic financial solutions that enable our clients to focus on building and growing their businesses. We aim to maximize value through insightful advisory, innovative thinking, and uncompromising professional standards.
            </p>
          </div>
          <div className="motion-fade-in group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.1s'}}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the trusted one-stop advisory partner for entrepreneurs and businesses worldwide—driving success through integrity, expertise, and consistently exceptional outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;

