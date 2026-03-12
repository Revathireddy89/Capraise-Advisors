import React from 'react';

function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="motion-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
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
          <div className="motion-fade-in bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Core Values</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Integrity</p>
                  <p className="text-gray-600 text-sm">Honest and ethical in all dealings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Client-Centric</p>
                  <p className="text-gray-600 text-sm">Your success is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Excellence</p>
                  <p className="text-gray-600 text-sm">Committed to superior execution</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Innovation</p>
                  <p className="text-gray-600 text-sm">Creative and forward-thinking solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

