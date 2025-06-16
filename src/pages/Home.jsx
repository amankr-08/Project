import React from 'react'

const Home = () => {
  return (
     <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Habot Connect DMCC</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          The easiest way to manage your users, grow your product, and scale faster than ever.
        </p>
        <div className="flex justify-center gap-4">
         <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">User Management</h4>
            <p className="text-gray-600">Easily manage your users and their data with powerful tools and clean UI.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Analytics</h4>
            <p className="text-gray-600">Track user behavior and business performance in real-time.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Security</h4>
            <p className="text-gray-600">Enterprise-grade security out of the box. Keep your data safe and private.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </div>
  )
}

export default Home