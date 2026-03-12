import React from 'react';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Kaushik Krishna',
      title: 'Vice President, Tata Group',
      description: 'Dynamic business leader with proven expertise in new business development, M&A, joint ventures, and product launches. Specializes in quality assurance, customer advocacy, and process excellence.',
      expertise: ['Business Development', 'M&A', 'Product Launch', 'P&L Management']
    },
    {
      id: 2,
      name: 'Devender Kodam',
      title: 'CFO, Capraise Advisors',
      description: 'Qualified Chartered Accountant with experience across accounting, auditing, taxation, business valuation, debt syndication and private equity advisory. Managing Partner of D K M H and Company.',
      expertise: ['Accounting', 'Auditing', 'Taxation', 'Business Valuation']
    },
    {
      id: 3,
      name: 'Lokesh',
      title: 'Practice Director',
      description: 'Accomplished Practice Director with extensive experience in leading IT consulting operations, strategic client engagements, and business transformation initiatives.',
      expertise: ['IT Consulting', 'Client Relations', 'Strategic Planning', 'Business Transformation']
    }
  ];

  return (
    <div className="pt-24">
      {/* Team Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 motion-fade-in">Our Leadership Team</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Meet the experienced professionals driving Capraise Advisors' vision and success.</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className="motion-fade-in bg-gradient-to-b from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-xl transition" style={{animationDelay: `${idx * 0.1}s`}}>
                <img src={`https://images.unsplash.com/photo-${1552664688 + idx}-cf412ec27db2?w=300&h=300&fit=crop`} alt={member.name} className="motion-float w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-300" />
                <h3 className="text-2xl font-bold text-blue-800 text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 text-center font-semibold mb-4">{member.title}</p>
                <p className="text-gray-700 text-center mb-6 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="motion-scale bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center motion-fade-in">Why Our Team Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Expert Credentials" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Expert Credentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Chartered Accountants (CAs)</li>
                <li>✓ Company Secretaries (CSs)</li>
                <li>✓ Certified Public Accountants (CPAs)</li>
                <li>✓ MBA Holders</li>
                <li>✓ Legal Experts</li>
              </ul>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Global Experience" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Global Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 20+ years of combined experience</li>
                <li>✓ Big 5 accounting firm background</li>
                <li>✓ Former bankers and corporate executives</li>
                <li>✓ Cross-industry expertise</li>
                <li>✓ Global client relationships</li>
              </ul>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Integrated Approach" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Integrated Approach</h3>
              <p className="text-gray-700">Our team combines diverse backgrounds and expertise to provide holistic, practical, and results-driven advisory solutions tailored to each client's unique needs.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Client-Centric Culture" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Client-Centric Culture</h3>
              <p className="text-gray-700">We prioritize building long-term relationships with our clients, understanding their challenges, and delivering solutions that create sustainable value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center motion-fade-in">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="motion-scale bg-blue-700 p-8 rounded-lg text-center hover:bg-blue-600 transition">
              <p className="text-3xl mb-3">🔒</p>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-blue-100">Honest, transparent, and ethical in all dealings</p>
            </div>
            <div className="motion-scale bg-blue-700 p-8 rounded-lg text-center hover:bg-blue-600 transition" style={{animationDelay: '0.1s'}}>
              <p className="text-3xl mb-3">⭐</p>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-blue-100">Committed to superior quality in all deliverables</p>
            </div>
            <div className="motion-scale bg-blue-700 p-8 rounded-lg text-center hover:bg-blue-600 transition" style={{animationDelay: '0.2s'}}>
              <p className="text-3xl mb-3">🚀</p>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-blue-100">Creative and forward-thinking approach to challenges</p>
            </div>
            <div className="motion-scale bg-blue-700 p-8 rounded-lg text-center hover:bg-blue-600 transition" style={{animationDelay: '0.3s'}}>
              <p className="text-3xl mb-3">👥</p>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-blue-100">Working together to achieve exceptional results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;

