// Import React library to define a component
import React from 'react';

// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Define the NotFound functional component
function NotFound() {
  return (
    // Main container with vertical centering, full height, and light gray background
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">

      {/* Large heading showing 404 error code */}
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>

      {/* Message to inform the user the page is not found */}
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Button-like link to navigate back to homepage */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

// Export the component so it can be used in routing
export default NotFound;
