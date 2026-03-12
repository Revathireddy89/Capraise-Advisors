import React, { useState } from 'react';

function WeAspireToServe() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardDetails = {
    'VCs/PEs': {
      description: 'Venture Capitalists and Private Equity firms looking to invest in promising startups and growth companies',
      features: ['Portfolio diversification', 'Growth opportunities', 'Strategic partnerships', 'Exit planning']
    },
    'Angel Investors': {
      description: 'Individual investors providing early-stage funding and mentorship to emerging entrepreneurs',
      features: ['Seed funding', 'Business mentoring', 'Industry connections', 'Long-term growth support']
    },
    'HNIs': {
      description: 'High Net Worth Individuals seeking investment opportunities with significant returns',
      features: ['Wealth management', 'Diversified portfolios', 'Exclusive deals', 'Professional guidance']
    },
    'Startups': {
      description: 'Innovative companies seeking funding, resources, and guidance to scale their operations',
      features: ['Access to capital', 'Business development', 'Mentorship programs', 'Networking opportunities']
    },
    'Incubators': {
      description: 'Organizations providing infrastructure and support to nurture early-stage ventures',
      features: ['Workspace provision', 'Training programs', 'Investor connections', 'Regulatory support']
    },
    'Accelerators': {
      description: 'Programs designed to rapidly scale startups through intensive mentoring and funding',
      features: ['Fast-track growth', 'Investor pitching', 'Expert guidance', 'Funding acceleration']
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center motion-fade-in">We Aspire to Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.keys(cardDetails).map((item, idx) => (
            <div
              key={item}
              onClick={() => setSelectedCard(item)}
              className="motion-fade-in group p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg hover:bg-blue-100 transition-all text-center cursor-pointer"
              style={{animationDelay: `${idx * 0.08}s`}}
            >
              <p className="text-slate-900 font-semibold group-hover:text-blue-800 transition-colors">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto shadow-xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedCard}</h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-white hover:bg-blue-800 rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-6">{cardDetails[selectedCard].description}</p>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {cardDetails[selectedCard].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WeAspireToServe;

