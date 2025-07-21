// Import createSlice to create a Redux slice
import { createSlice } from '@reduxjs/toolkit';

// Import uuidv4 to generate unique IDs for new books
import { v4 as uuidv4 } from 'uuid';

// Import the initial book data from a local JSON file
import booksData from '../assets/books_data.json';

// Initialize state by mapping over books and renaming _id to id
const initialState = booksData.Books.map(book => ({
  id: book._id,    // Use _id as id for consistency in the app
  ...book          // Spread the rest of the book properties
}));

// Create a Redux slice for books
const booksSlice = createSlice({
  name: 'books',         // Slice name
  initialState,          // Initial state populated from JSON
  reducers: {
    // Reducer to add a new book
    addBook: (state, action) => {
      // Push a new book object with generated unique id and payload data
      state.push({ id: uuidv4(), ...action.payload });
    },
  },
});

// Export the action to be used in components
export const { addBook } = booksSlice.actions;

// Export the reducer to be used in the Redux store
export default booksSlice.reducer;
