// Import Link from react-router for navigation links (⚠️ from 'react-router-dom' not 'react-router')
import { Link } from 'react-router'; // ⚠️ Should be 'react-router-dom'
 
// Import useSelector to access Redux state
import { useSelector } from 'react-redux';

// Import BookCard component to display each book
import BookCard from '../components/BookCard';

// Define the Home functional component
function Home() {

  // Get the list of books from the Redux store
  const books = useSelector(state => state.books);

  // List of book categories to display on the homepage
  const categories = [
    'fiction',
    'nonfiction',
    'sciencefiction',
    'computersInternet',
    'actionadventure',
    'comics'
  ];

  // Return JSX to render the homepage
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      
      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-2">
        Welcome to the Online Library System!
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 mb-6">
        Discover a vast collection of books across different categories.
      </p>

      {/* Category Section Heading */}
      <h2 className="text-2xl font-semibold mb-3">Book Categories</h2>

      {/* Category Buttons */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
        {categories.map((cat) => (
          <li key={cat}>
            {/* Each category links to a BrowseBooks route */}
            <Link
              to={`/books/${cat}`} // Navigate to /books/<category>
              className="block text-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium text-gray-700"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      {/* Popular Books Section */}
      <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>

      {/* Display books in a grid using BookCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

// Export the Home component to be used in routes
export default Home;
