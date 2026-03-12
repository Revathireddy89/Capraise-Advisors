import React from 'react';

function AdvisoryServices() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Startup Advisory" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Startup Advisory</h3>
          <p className="text-gray-700 mb-4">Specialized services for business owners launching and expanding new enterprises.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Business Planning</li>
            <li>• Fundraising & Investment</li>
            <li>• Go-to-Market Strategy</li>
            <li>• Operations & Scalability</li>
            <li>• Product Development</li>
            <li>• Legal Compliance</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Capital Market Advisory" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Capital Market Advisory</h3>
          <p className="text-gray-700 mb-4">Expert services to navigate financial markets and strengthen capital structure.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Capital Raising Strategies</li>
            <li>• IPO Advisory</li>
            <li>• Debt Financing</li>
            <li>• Equity Offerings</li>
            <li>• Investor Relations</li>
            <li>• Valuation Services</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Corporate Advisory" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Corporate Advisory</h3>
          <p className="text-gray-700 mb-4">Strategic services supporting operational excellence and performance improvement.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Strategic Planning</li>
            <li>• Business Expansion</li>
            <li>• Corporate Governance</li>
            <li>• ESOP Policy</li>
            <li>• Turnaround Advisory</li>
            <li>• Investor Relations</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Family Office Advisory" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Family Office Advisory</h3>
          <p className="text-gray-700 mb-4">Personalized services tailored to unique family requirements and wealth goals.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Wealth Management</li>
            <li>• Investment Management</li>
            <li>• Tax Guidance</li>
            <li>• Estate Planning</li>
            <li>• Philanthropic Services</li>
            <li>• Concierge Services</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Special Situations Advisory</h3>
        <p className="text-gray-700 mb-4">Professional consulting for unusual or complex situations requiring specialized expertise.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Distressed Situations', 'Mergers & Acquisitions', 'Capital Structure Optimization', 'Litigation Support', 'Special Investments', 'Crisis Management'].map((item) => (
            <div key={item} className="bg-white p-4 rounded border border-blue-300">
              <p className="text-sm text-blue-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvisoryServices;
