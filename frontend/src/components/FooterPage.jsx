import React from 'react';

const FooterPage = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0B1629] to-[#0A1526] border-t border-gray-800/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Links */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">Careers</a>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">Our Café</a>
                <a href="#" className="text-gray-300 hover:text-white block">Alumni</a>
              </div>
              <div>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">Consumer care</a>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">Foodservice</a>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">Business Survey News</a>
              </div>
            </div>
          </div>

          {/* Middle Column - Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.5 7c1.381 0 2.5 1.119 2.5 2.5 0 1.232-.86 2.265-2 2.5v.5c0 1.105-.895 2-2 2h-2v1h3v2h-3v1h-2v-1h-3v-2h3v-1h-3v-2h3v-1h2v1h2v-.5c-1.14-.235-2-1.268-2-2.5 0-1.381 1.119-2.5 2.5-2.5z"/>
              </svg>
            </a>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-4">
            <p className="text-gray-300">Get the freshest Business Survey news</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email here" 
                className="bg-gray-800/30 text-white px-4 py-2 rounded flex-1"
              />
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-400 text-sm">By checking this box, you agree that you are at least 16 years of age.</span>
            </label>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-4 border-t border-gray-800/20">
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Website Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Accessibility Statement</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Supplier Code of Conduct</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Marketing to Children</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Do Not Sell My Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;