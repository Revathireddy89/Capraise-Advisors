import React from 'react';

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

export default ServiceTabs;
