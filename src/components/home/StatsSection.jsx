import React from 'react';

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Clients Served', delay: '0s' },
    { value: '₹5000Cr', label: 'Transactions Managed', delay: '0.1s' },
    { value: '20+', label: 'Years Experience', delay: '0.2s' },
    { value: '100%', label: 'Client Satisfaction', delay: '0.3s' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="motion-scale text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
              style={{animationDelay: stat.delay}}
            >
              <p className="text-5xl font-bold mb-3 text-white">{stat.value}</p>
              <p className="text-green-100 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
