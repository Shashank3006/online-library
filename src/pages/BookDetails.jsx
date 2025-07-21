// Import React to use JSX and component functionality
import React from 'react';

// Import useParams to extract URL params, Link for navigation
import { useParams, Link } from 'react-router-dom';

// Import useSelector to access Redux state
import { useSelector } from 'react-redux';

// Define the BookDetails functional component
function BookDetails() {

  // Extract `id` parameter from the URL using useParams
  const { id } = useParams();

  // Get the book object that matches the id from the Redux store
  const book = useSelector(state => state.books.find(b => b.id === id));

  // If no book is found, show an error message
  if (!book) return <p className="text-center mt-8 text-red-500">Book not found!</p>;

  // JSX to render book details
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Layout for book image and info */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Book cover image */}
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-40 h-60 object-cover rounded shadow-md"
        />

        {/* Book information section */}
        <div className="flex-1">
          {/* Book title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h2>
          
          {/* Book author */}
          <p className="text-gray-600 mb-1"><strong>Author:</strong> {book.author}</p>
          
          {/* Book category */}
          <p className="text-gray-600 mb-1"><strong>Category:</strong> {book.category}</p>
          
          {/* Publication year */}
          <p className="text-gray-600 mb-1"><strong>Year:</strong> {book.years}</p>
          
          {/* Number of pages */}
          <p className="text-gray-600 mb-1"><strong>Pages:</strong> {book.pages}</p>
          
          {/* Book rating */}
          <p className="text-gray-600 mb-1"><strong>Ratings:</strong> {book.ratings}</p>
          
          {/* Book description */}
          <p className="text-gray-700 mt-4">{book.description}</p>

          {/* Navigation link back to home */}
          <Link
            to="/"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in routes
export default BookDetails;
