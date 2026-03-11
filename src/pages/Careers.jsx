import React from 'react';
import { Link } from 'react-router-dom';

function Careers() {
  const openPositions = [
    { id: 1, title: 'Investment Banking Analyst', department: 'Investment Banking', level: 'Junior' },
    { id: 2, title: 'Senior Consultant - M&A', department: 'Advisory', level: 'Senior' },
    { id: 3, title: 'Financial Analyst', department: 'Finance', level: 'Mid' },
    { id: 4, title: 'Business Development Manager', department: 'Business Development', level: 'Junior' },
    { id: 5, title: 'Operations Manager', department: 'Operations', level: 'Mid' },
    { id: 6, title: 'Senior Associate - Restructuring', department: 'Restructuring', level: 'Senior' },
  ];

  return (
    <div className="pt-24">
      {/* Careers Hero */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6 motion-fade-in">Join Our Team</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Be part of a dynamic team changing the investment banking landscape.</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="motion-fade-in bg-white p-12 rounded-lg border border-green-200 shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Why Should You Join Us?</h2>
              <p className="text-center text-2xl text-green-600 font-semibold mb-8 italic">"Join the house of passion & skilled team for revolutionary success"</p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                We believe that the work we undertake should affect people's lives as well as the environment. We constantly strive to combine the best minds, skills, and priorities in order to succeed at that.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                <p className="text-gray-800 text-lg font-semibold">
                  If you believe that your contribution can match our desire to perform incredible feats and make a lasting impression, get in touch with us now.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center text-green-800 mb-12 motion-fade-in">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🌟</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Career Growth</h4>
                  <p className="text-gray-700">Clear career progression paths and opportunities to work on high-impact projects with industry leaders.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start">
                <span className="text-3xl mr-4">📚</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Continuous Learning</h4>
                  <p className="text-gray-700">Regular training programs, certifications, and professional development opportunities.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start">
                <span className="text-3xl mr-4">💰</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Competitive Compensation</h4>
                  <p className="text-gray-700">Attractive salary packages, performance bonuses, and comprehensive benefits.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start">
                <span className="text-3xl mr-4">🤝</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Inclusive Culture</h4>
                  <p className="text-gray-700">Collaborative and inclusive work environment that values diversity and innovation.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start">
                <span className="text-3xl mr-4">🎯</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Meaningful Work</h4>
                  <p className="text-gray-700">Impact-driven projects that create real value for clients and society.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-green-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.5s'}}>
              <div className="flex items-start">
                <span className="text-3xl mr-4">⚖️</span>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Work-Life Balance</h4>
                  <p className="text-gray-700">Flexible working arrangements and support for maintaining work-life balance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-green-800 mb-12 text-center motion-fade-in">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {openPositions.map((position, idx) => (
              <div key={position.id} className="motion-fade-in bg-white p-6 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">{position.title}</h4>
                    <p className="text-sm text-gray-600">{position.department}</p>
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full font-semibold">{position.level}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">We're looking for talented professionals to join our {position.department} team.</p>
                <Link to="/contact" className="text-green-600 font-semibold hover:text-green-800 inline-flex items-center">
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6">Don't see a position that fits? We're always looking for talented individuals.</p>
            <Link to="/contact" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Send Your CV
            </Link>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12 motion-fade-in">Life at Capraise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="motion-fade-in bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Culture" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h4 className="text-2xl font-bold text-green-800 mb-4">Culture & Values</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Integrity and ethical conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Excellence in all work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Teamwork and collaboration</span>
                </li>
              </ul>
            </div>
            <div className="motion-fade-in bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop" alt="Skills Development" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h4 className="text-2xl font-bold text-green-800 mb-4">Skills Development</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Professional certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Industry training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Mentorship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Exposure to diverse projects</span>
                </li>
              </ul>
            </div>
            <div className="motion-fade-in bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Team Environment" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h4 className="text-2xl font-bold text-green-800 mb-4">Team Environment</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Supportive peer network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Regular team events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Open communication channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Inclusive workplace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 motion-fade-in">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-green-100 motion-fade-in" style={{animationDelay: '0.2s'}}>Apply now and join a team that's transforming the financial advisory landscape.</p>
          <Link to="/contact" className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Careers;
