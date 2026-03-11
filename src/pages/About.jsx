import React from 'react';

function About() {
  return (
    <div className="pt-24">
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-800 mb-6 text-center motion-fade-in">About Capraise Advisors</h1>
          <p className="text-xl text-green-700 text-center max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Delivering excellence in investment banking and strategic advisory since our inception.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="motion-fade-in">
              <h2 className="text-4xl font-bold text-green-800 mb-6">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Capraise Advisors is a multi-disciplinary investment banking and advisory firm headquartered in Hyderabad, India. We specialize in delivering comprehensive financial and strategic solutions that help clients realize their long-term objectives and create sustainable value.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong track record and a client-centric approach, Capraise Advisors partners with individuals, businesses, and institutions across the globe, offering tailored advisory services backed by deep industry knowledge and execution excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team consists of highly skilled professionals drawn from diverse backgrounds, including Chartered Accountants, Company Secretaries, Certified Public Accountants, former bankers, management professionals, and legal experts.
              </p>
            </div>
            <div className="motion-float bg-green-100 p-12 rounded-lg border border-green-300 shadow-lg">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Team collaboration" className="rounded-lg w-full h-48 object-cover mb-6" />
              <h3 className="text-2xl font-bold text-green-800 mb-6">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-green-800">Integrity</p>
                    <p className="text-gray-700 text-sm">Honest and ethical in all dealings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-green-800">Client-Centric</p>
                    <p className="text-gray-700 text-sm">Your success is our priority</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-green-800">Excellence</p>
                    <p className="text-gray-700 text-sm">Committed to superior execution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-green-800">Innovation</p>
                    <p className="text-gray-700 text-sm">Creative and forward-thinking solutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="motion-slide-in bg-white p-8 rounded-lg border-l-4 border-green-500 shadow-lg hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=200&fit=crop" alt="Mission" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver strategic financial solutions that enable our clients to focus on building and growing their businesses. We aim to maximize value through insightful advisory, innovative thinking, and uncompromising professional standards, while contributing positively to our clients, stakeholders, and communities.
              </p>
            </div>
            <div className="motion-slide-in bg-white p-8 rounded-lg border-l-4 border-green-500 shadow-lg hover:shadow-xl transition" style={{animationDelay: '0.2s'}}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Vision" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the trusted one-stop advisory partner for entrepreneurs and businesses worldwide—driving success through integrity, expertise, and consistently exceptional outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Aspire to Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center motion-fade-in">We Aspire to Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['VCs/PEs', 'Angel Investors', 'HNIs', 'Startups', 'Incubators', 'Accelerators'].map((item, idx) => (
              <div key={item} className="motion-scale text-center p-6 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 hover:shadow-lg transition" style={{animationDelay: `${idx * 0.1}s`}}>
                <p className="text-green-800 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center motion-fade-in">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" alt="Research" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Research & Analysis</h3>
                  <p className="text-gray-700">We conduct extensive research and analysis to develop a thorough understanding of the client's operations, sector, and financial situation.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=300&h=200&fit=crop" alt="Solutions" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Customized Solutions</h3>
                  <p className="text-gray-700">Using in-depth investigation results, we create financial solutions specifically matched to the unique needs of the client.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" alt="Networking" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Strategic Networking</h3>
                  <p className="text-gray-700">Our professionals make use of their vast network to connect clients with appropriate partners and resources.</p>
                </div>
              </div>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-green-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=300&h=200&fit=crop" alt="Support" className="rounded-lg w-full h-40 object-cover mb-4" />
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Implementation Support</h3>
                  <p className="text-gray-700">We work closely with clients throughout the entire process, offering continuous assistance and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
