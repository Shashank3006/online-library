// Import Link from react-router-dom to enable navigation without page reload
import { Link } from 'react-router-dom';

// Define the BookCard functional component that takes `book` as a prop
const BookCard = ({ book }) => {
    return (
        // Outer container for the book card, with flex layout and hover effects
        <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            
            {/* Image container with fixed height and hover zoom effect */}
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={book.coverImage} // Display the book cover image
                    alt={book.title} // Alternative text for accessibility
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" // Smooth zoom effect on hover
                />
            </div>

            {/* Textual content container */}
            <div className="flex flex-col justify-between p-6 w-full sm:w-2/3">
                {/* Text details area */}
                <div className="space-y-2">
                    {/* Book title with bold font and multi-line clamp */}
                    <h3 className="text-2xl font-bold text-gray-800 line-clamp-2">
                        {book.title}
                    </h3>

                    {/* Author name */}
                    <p className="text-sm text-gray-600">
                        <strong>Author:</strong> {book.author}
                    </p>

                    {/* Book category */}
                    <p className="text-sm text-gray-600">
                        <strong>Category:</strong> {book.category}
                    </p>

                    {/* Book rating with star and styling */}
                    <p className="text-sm text-yellow-500 font-semibold">
                        ⭐ {book.ratings}
                    </p>
                </div>

                {/* Link to the book details page using dynamic book ID */}
                <Link
                    to={`/book/${book.id}`} // Navigates to a dynamic route like `/book/123`
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 text-center w-max"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

// Export the component for use in other files
export default BookCard;
