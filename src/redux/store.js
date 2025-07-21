// Import configureStore from Redux Toolkit to set up the Redux store
import { configureStore } from '@reduxjs/toolkit';

// Import the books reducer from the booksSlice file
import booksReducer from './booksSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    // Register the books slice reducer under the 'books' key in the global state
    books: booksReducer,
  },
});

// Export the store so it can be used in your app (e.g., in <Provider>)
export default store;
