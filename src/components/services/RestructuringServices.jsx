import React from 'react';

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

export default RestructuringServices;
