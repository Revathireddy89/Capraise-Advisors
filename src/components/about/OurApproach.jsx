import React from 'react';

function OurApproach() {
  const steps = [
    {
      number: 1,
      title: 'Research & Analysis',
      description: 'We conduct extensive research and analysis to develop a thorough understanding of the client\'s operations, sector, and financial situation.'
    },
    {
      number: 2,
      title: 'Customized Solutions',
      description: 'Using in-depth investigation results, we create financial solutions specifically matched to the unique needs of the client.'
    },
    {
      number: 3,
      title: 'Strategic Networking',
      description: 'Our professionals make use of their vast network to connect clients with appropriate partners and resources.'
    },
    {
      number: 4,
      title: 'Implementation Support',
      description: 'We work closely with clients throughout the entire process, offering continuous assistance and support.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center motion-fade-in">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="motion-fade-in group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">{step.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-700 mt-2">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurApproach;

