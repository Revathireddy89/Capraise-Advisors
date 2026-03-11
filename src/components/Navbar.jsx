import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-green-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Capraise</span>
              <span className="text-2xl font-light text-green-50 ml-2">Advisors</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-100 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-green-100 transition">About</Link>
            <Link to="/services" className="text-white hover:text-green-100 transition">Services</Link>
            <Link to="/team" className="text-white hover:text-green-100 transition">Team</Link>
            <Link to="/careers" className="text-white hover:text-green-100 transition">Careers</Link>
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg transition">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-green-600">Home</Link>
          <Link to="/about" className="block px-4 py-2 text-white hover:bg-green-600">About</Link>
          <Link to="/services" className="block px-4 py-2 text-white hover:bg-green-600">Services</Link>
          <Link to="/team" className="block px-4 py-2 text-white hover:bg-green-600">Team</Link>
          <Link to="/careers" className="block px-4 py-2 text-white hover:bg-green-600">Careers</Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-green-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
