import React from 'react';

function HighlightsSection() {
  const highlights = [
    { text: '500+ Successful Engagements', delay: '0s' },
    { text: '₹5000 Crore+ in Transactions', delay: '0.2s' },
    { text: 'Global Client Base', delay: '0.4s' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="motion-float">
            <div className="relative group">
              <img 
                src="/Assets/Home/Businesses.jpg" 
                alt="Success Stories"
                className="relative rounded-2xl w-full h-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="pl-4 lg:pl-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 motion-fade-in leading-tight">
              Transforming<br/>
              <span className="text-green-600">Businesses</span><br/>
              Worldwide
            </h2>
            
            <p className="text-base text-gray-700 leading-relaxed mb-6 motion-fade-in animation-delay-200">
              With over 20 years of experience, we've successfully helped hundreds of businesses achieve their financial goals through strategic advisory and innovative solutions.
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed mb-10 motion-fade-in animation-delay-400">
              Our integrated team of experts brings deep industry knowledge and execution excellence to every engagement.
            </p>
            
            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <div 
                  key={idx} 
                  className="motion-slide-in flex items-center gap-4 py-3"
                  style={{animationDelay: highlight.delay}}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-green-600 hover:bg-green-700 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-800 font-semibold text-base">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
