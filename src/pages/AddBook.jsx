// Import necessary hooks and modules
import { useState } from 'react'; // useState for form state management
import { useDispatch } from 'react-redux'; // useDispatch to dispatch Redux actions
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation after submission
import { addBook } from '../redux/booksSlice'; // Redux action to add a book

// Functional component
function AddBook() {
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigation function

  // State to store form input values
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    ratings: '',
    description: '',
    coverImage: '',
    years: '',
    pages: ''
  });

  // Handler to update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validation checks
    if (!form.title.trim()) {
      alert('Title is required');
      return;
    }

    if (!form.author.trim()) {
      alert('Author is required');
      return;
    }

    if (!form.category.trim()) {
      alert('Category is required');
      return;
    }

    if (!form.ratings.trim() || isNaN(form.ratings) || form.ratings < 0 || form.ratings > 5) {
      alert('Ratings must be a number between 0 and 5');
      return;
    }

    if (!form.years.trim()) {
      alert('Year is required');
      return;
    }

    if (!form.pages.trim() || isNaN(form.pages) || parseInt(form.pages) <= 0) {
      alert('Pages must be a positive number');
      return;
    }

    if (!form.coverImage.trim()) {
      alert('Cover image URL is required');
      return;
    }

    // Optional validation for image URL format
    // if (!/^https?:\/\/.+/.test(form.coverImage) || !imageUrlPattern.test(form.coverImage)) {
    //   alert('Cover image must be a valid image URL (ending in .jpg, .png, etc.)');
    //   return;
    // }

    if (!form.description.trim()) {
      alert('Description is required');
      return;
    }

    // Dispatch action to add book
    dispatch(addBook({
      ...form,
      ratings: parseFloat(form.ratings),
      pages: parseInt(form.pages),
    }));

    // Navigate to the book list page after submission
    navigate('/books/all');
  };

  // JSX for the form UI
  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem', 
        maxWidth: '600px' 
      }}
    >
      {/* Title Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Title" onChange={handleChange} value={form.title} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Author Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="author">Author</label>
        <input name="author" placeholder="Author" onChange={handleChange} value={form.author} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Category Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="category">Category</label>
        <input name="category" placeholder="Category" onChange={handleChange} value={form.category} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Ratings Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="ratings">Rating</label>
        <input name="ratings" type="number" placeholder="Rating" onChange={handleChange} value={form.ratings} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Year Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="years">Year</label>
        <input name="years" placeholder="Year" onChange={handleChange} value={form.years} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Pages Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="pages">Pages</label>
        <input name="pages" type="number" placeholder="Pages" onChange={handleChange} value={form.pages} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Cover Image Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="coverImage">Cover Pages URL</label>
        <input type="url" name="coverImage" placeholder="Cover Pages URL" onChange={handleChange} value={form.coverImage} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
      </div>

      {/* Description Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="description">Description</label>
        <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
