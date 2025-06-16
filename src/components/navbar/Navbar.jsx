import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SomeData } from '../../Layout';

const Navbar = () => {
  // Context to access and update login state
  const { logState, setlogState } = useContext(SomeData);

  // Local state to manage hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle logout button click
  const handleBTN = () => {
    localStorage.removeItem('token'); // Remove auth token
    setlogState(false); // Update context to reflect logout
  };

  // Toggles the mobile drawer menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navbar Section */}
      <div className="h-[65px] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-between items-center px-4">
        {/* Logo/Brand */}
        <div className="text-3xl font-extrabold text-white">Habot</div>

        {/* Hamburger Icon (Only visible on mobile devices) */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {/* Show 'X' icon when menu is open, else show hamburger icon */}
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <ul className="hidden md:flex space-x-6 text-white font-bold">
          <li><NavLink to="/" activeClassName="text-white">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="text-white">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="text-white">Contact</NavLink></li>
          <li><NavLink to="/services" activeClassName="text-white">Services</NavLink></li>
        </ul>

        {/* Authentication Button (Login/Logout) */}
        <div className="flex items-center space-x-4">
          {
            logState ? (
              <Link to="/login">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  onClick={handleBTN} // Logout action
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            )
          }
        </div>
      </div>

      {/* Mobile Drawer Menu (Overlay and sliding drawer) */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu} // Clicking outside the menu closes it
      >
        {/* Side Drawer (slides in from the left) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing when clicked inside
        >
          {/* Drawer Navigation Links */}
          <ul className="space-y-4 text-gray-800 font-semibold">
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
            <li><NavLink to="/services" onClick={toggleMenu}>Services</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
