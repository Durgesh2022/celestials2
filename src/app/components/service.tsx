import React from 'react';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-5xl font-bold mb-4 text-pink-600 text-center">Our Offerings</h1>
      
      <p className="mb-12 text-lg text-gray-700 text-center">
        A wide range of services are provided to help you understand yourself better and make
        better decisions in life.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Courses Card */}
        <div className="border border-pink-600 rounded-lg p-6 shadow-lg flex items-center gap-4 justify-center">
          <div className="text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-pink-600">Courses</h2>
            <p className="text-gray-800">Learn from the best</p>
          </div>
        </div>
        
        {/* Consultations Card */}
        <div className="border border-pink-600 rounded-lg p-6 shadow-lg flex items-center gap-4 justify-center">
          <div className="text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-pink-600">Consultations</h2>
            <p className="text-gray-800">Talk to top astrologers</p>
          </div>
        </div>
        
        {/* Products Card */}
        <div className="border border-pink-600 rounded-lg p-6 shadow-lg flex items-center gap-4 justify-center">
          <div className="text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-pink-600">Products</h2>
            <p className="text-gray-800">Shop our store</p>
          </div>
        </div>
      </div>
    </div>
  );
}
