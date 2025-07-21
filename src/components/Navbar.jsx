// Import React and the Link component from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Import logo image from assets folder
import logo from '../assets/logo.png'; // Adjust path if needed

// Define the Navbar functional component
function Navbar() {
  return (
    // Navigation bar wrapper with padding, text color, and shadow
    <nav className="text-white px-6 py-3 shadow-md" style={{ backgroundColor: '#217b7e' }}>
      {/* Container to center the navbar content and arrange it using flexbox */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo section with brand name */}
        <div className="flex items-center gap-3">
          <img
            src={logo} // Display the logo image
            alt="Logo" // Accessibility alt text
            className="h-18 w-18 object-cover rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-110"
            // Image is circular, with white border and scale animation on hover
          />
          <span className="text-xl font-bold tracking-wide">
            Library
          </span>
        </div>

        {/* Navigation links section */}
        <ul className="flex gap-4 text-sm md:text-base">
          <li>
            {/* Link to homepage */}
            <Link to="/" className="hover:underline hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            {/* Link to add a new book */}
            <Link to="/add" className="hover:underline hover:text-gray-300 transition">
              Add Book
            </Link>
          </li>
          <li>
            {/* Link to browse all books */}
            <Link to="/books/all" className="hover:underline hover:text-gray-300 transition">
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Export the Navbar component
export default Navbar;
