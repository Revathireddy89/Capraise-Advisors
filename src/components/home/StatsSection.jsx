import React from 'react';

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Clients Served', delay: '0s' },
    { value: '₹5000Cr', label: 'Transactions Managed', delay: '0.1s' },
    { value: '20+', label: 'Years Experience', delay: '0.2s' },
    { value: '100%', label: 'Client Satisfaction', delay: '0.3s' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="motion-scale group relative p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50 hover:border-blue-500/50 hover:from-slate-800 hover:to-slate-700/50 transition-all duration-300"
              style={{animationDelay: stat.delay}}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-3xl md:text-4xl font-bold mb-1 text-blue-400 group-hover:text-blue-300 transition-colors">{stat.value}</p>
                <p className="text-slate-300 font-medium text-xs md:text-sm group-hover:text-white transition-colors">{stat.label}</p>
              </div>
              
              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 rounded-b-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

