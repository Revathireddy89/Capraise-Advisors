import React from 'react';

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

export default FundraisingServices;
