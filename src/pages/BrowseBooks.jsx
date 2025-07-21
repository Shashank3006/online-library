// Import useState hook for local state management
import { useState } from 'react';

// Import useParams to get URL parameters, and Link for navigation (Link not used in this file currently)
import { useParams, Link } from 'react-router-dom';

// Import useSelector to access Redux store
import { useSelector } from 'react-redux';

// Import BookCard component to display individual books
import BookCard from '../components/BookCard';

// Functional component for browsing books
function BrowseBooks() {

  // Extract 'category' from the URL using useParams
  const { category } = useParams();

  // Local state for managing search input
  const [search, setSearch] = useState('');

  // Get the list of books from the Redux store
  const books = useSelector(state => state.books);

  // Filter books based on selected category and search term
  const filteredBooks = books.filter(book => {
    // Check if the book matches the current category, or if 'all' is selected
    const matchCategory = category === 'all' || book.category === category;

    // Check if the book title or author matches the search input (case-insensitive)
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                        book.author.toLowerCase().includes(search.toLowerCase());

    // Return books that match both category and search
    return matchCategory && matchSearch;
  });

  // JSX rendering the search input and filtered book list
  return (
    <div>
      {/* Heading showing current category */}
      <h2>Browse Books ({category})</h2>

      {/* Search input box */}
     <input
  type="text"
  placeholder="Search by title or author"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full max-w-md px-4 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

      {/* Category heading */}
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>

      {/* Grid layout to display filtered books using BookCard component */}
       {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No books found matching your search.</p>
      )}
    
    </div>
  );
};

// Export the component so it can be used in routes
export default BrowseBooks;
