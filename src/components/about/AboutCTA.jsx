import React from 'react';

function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-fade-in">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Work With Us?</h2>
        <p className="text-xl text-gray-600 mb-8">Get in touch with our team to discuss how we can help you achieve your financial and business goals.</p>
        <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default AboutCTA;

