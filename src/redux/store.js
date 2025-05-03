import { configureStore } from '@reduxjs/toolkit';
import bookReducer from "./booksSlice.js";

// Create and export the store
 const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
export default store;