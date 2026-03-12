import React, { useState } from 'react';

// ServiceHero Component
function ServiceHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-6 motion-fade-in">Our Services</h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Comprehensive financial and strategic solutions tailored to your unique business needs.</p>
      </div>
    </section>
  );
}

// ServiceTabs Component
function ServiceTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => setActiveTab('fundraising')}
        className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'fundraising' ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
      >
        Fundraising
      </button>
      <button
        onClick={() => setActiveTab('restructuring')}
        className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'restructuring' ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
      >
        Restructuring
      </button>
      <button
        onClick={() => setActiveTab('advisory')}
        className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'advisory' ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
      >
        Advisory
      </button>
    </div>
  );
}

// FundraisingServices Component
function FundraisingServices() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Debt Syndication" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Debt Syndication</h3>
          <p className="text-gray-700 mb-4">We help clients choose the right debt instruments, structure financing deals, and negotiate favorable terms with lenders.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Structuring & arranging debt syndication</li>
            <li>✓ Identifying suitable lenders</li>
            <li>✓ Managing due diligence & documentation</li>
            <li>✓ End-to-end transaction support</li>
            <li>✓ Debt refinancing advisory</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="PE Syndication" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Private Equity Syndication</h3>
          <p className="text-gray-700 mb-4">We facilitate syndication in private equity, serving as a bridge between investors and PE firms.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Investment opportunity identification</li>
            <li>✓ Investor roadmap development</li>
            <li>✓ Deal structuring & execution</li>
            <li>✓ Investor engagement & meetings</li>
            <li>✓ Investment terms structuring</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="M&A" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Mergers & Acquisitions</h3>
          <p className="text-gray-700 mb-4">Comprehensive guidance from deal structuring to transaction execution with thorough analysis.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Target identification & screening</li>
            <li>✓ Valuation & negotiation support</li>
            <li>✓ Due diligence assistance</li>
            <li>✓ Post-merger integration support</li>
            <li>✓ Divestiture & spin-off advisory</li>
          </ul>
        </div>
      </div>

      <div className="motion-scale bg-blue-50 p-8 rounded-lg border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Startup & VC Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-800 mb-4">Services for Startups</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Fundraising (equity/debt)</li>
              <li>• Business plan development</li>
              <li>• Pitch deck creation</li>
              <li>• Investor Outreach & Engagement</li>
              <li>• Financial Analysis & Modeling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-800 mb-4">Services for VCs</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Deal sourcing</li>
              <li>• Due diligence</li>
              <li>• Deal structuring</li>
              <li>• Portfolio management</li>
              <li>• Fund Accounting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// RestructuringServices Component
function RestructuringServices() {
  return (
    <div className="space-y-8">
      <p className="text-gray-700 leading-relaxed max-w-3xl">
        Restructuring involves the strategic reorganization of a company's operational, financial, or organizational framework to improve performance and sustainability. It is typically undertaken to enhance efficiency, realign business strategy, or address financial stress.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Financial Restructuring" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Financial Restructuring</h3>
          <p className="text-gray-700 mb-4">We assist in altering the capital structure of a business to enhance financial stability and lower financial risks.</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Debt restructuring & refinancing</li>
            <li>• Debt to equity conversion</li>
            <li>• Capital structure optimization</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Operational Restructuring" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Operational Restructuring</h3>
          <p className="text-gray-700 mb-4">We help restructure operations for efficiency and effectiveness through process streamlining.</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Process streamlining</li>
            <li>• Cost optimization programs</li>
            <li>• Technology implementation</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Organizational Restructuring" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Organizational Restructuring</h3>
          <p className="text-gray-700 mb-4">We assist with adjustments to internal organizational structure and reporting lines.</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Organizational structure redesign</li>
            <li>• Department realignment</li>
            <li>• Management restructuring</li>
          </ul>
        </div>
        <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Strategic Restructuring" className="rounded-lg w-full h-40 object-cover mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Strategic Restructuring</h3>
          <p className="text-gray-700 mb-4">We help reinvent business strategy including markets, products, and competitive positioning.</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Business strategy reinvention</li>
            <li>• Market expansion</li>
            <li>• Portfolio optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// AdvisoryServices Component
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

// Main ServicesPage Component
function ServicesPage() {
  const [activeTab, setActiveTab] = useState('fundraising');

  return (
    <div className="pt-24">
      <ServiceHero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'fundraising' && <FundraisingServices />}
          {activeTab === 'restructuring' && <RestructuringServices />}
          {activeTab === 'advisory' && <AdvisoryServices />}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
export { ServiceHero, ServiceTabs, FundraisingServices, RestructuringServices, AdvisoryServices };
