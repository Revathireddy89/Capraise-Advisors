import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add actual form submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 motion-fade-in">Get in Touch</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="motion-fade-in">
              <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <span className="text-4xl text-blue-500 mr-6 mb-2">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Headquarters</h3>
                    <p className="text-gray-700">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-4xl text-blue-500 mr-6 mb-2">📧</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Email</h3>
                    <p className="text-gray-700">info@capraiseadvisors.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-4xl text-blue-500 mr-6 mb-2">📱</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Phone</h3>
                    <p className="text-gray-700">+91 (XXXX) XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-4xl text-blue-500 mr-6 mb-2">📲</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Social Media</h3>
                    <a 
                      href="https://www.instagram.com/capraiseadvisors/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                    >
                      Follow us on Instagram →
                    </a>
                  </div>
                </div>
              </div>

              <div className="motion-scale bg-blue-50 p-8 rounded-lg border border-blue-200 mt-8">
                <h4 className="text-lg font-bold text-blue-800 mb-3">Business Hours</h4>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM IST</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="motion-fade-in" style={{animationDelay: '0.1s'}}>
              <h2 className="text-3xl font-bold text-blue-800 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded-lg">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center motion-fade-in">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-800 mb-3">What services do you provide?</h3>
              <p className="text-gray-700">We provide comprehensive investment banking and advisory services including fundraising, restructuring, and strategic advisory across various sectors.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold text-blue-800 mb-3">How can we engage your services?</h3>
              <p className="text-gray-700">Simply reach out to us through this contact form or email us directly. We'll schedule a call to understand your requirements and discuss how we can help.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold text-blue-800 mb-3">What is your typical engagement timeline?</h3>
              <p className="text-gray-700">Timelines vary based on project complexity. We'll provide a detailed project plan and timeline during our initial consultation.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Do you work with international clients?</h3>
              <p className="text-gray-700">Yes, we have experience working with clients globally and provide services across different regulatory jurisdictions.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Are your services confidential?</h3>
              <p className="text-gray-700">Absolutely. We maintain strict confidentiality and professionalism with all client information and transactions.</p>
            </div>
            <div className="motion-fade-in bg-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition" style={{animationDelay: '0.5s'}}>
              <h3 className="text-xl font-bold text-blue-800 mb-3">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-700">We typically respond to inquiries within 24 business hours and prioritize client communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center motion-fade-in">Visit Us</h2>
          <div className="motion-scale bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg h-96 flex items-center justify-center border border-blue-200 shadow-lg">
            <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=400&fit=crop" alt="Hyderabad Office" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute text-center bg-black bg-opacity-40 p-8 rounded-lg text-white">
              <p className="text-2xl font-bold mb-2">📍 Hyderabad, India</p>
              <p className="text-gray-200">Head office location for Capraise Advisors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

