// src/redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from "../utils/mockData.js";

const initialState = {
  books: initialBooks,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

// Export the selector
export const selectAllBooks = (state) => state.books.books;

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;