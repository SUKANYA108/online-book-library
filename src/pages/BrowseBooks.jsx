// pages/BrowseBooks.js
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from "../components/BookCard.jsx";
import { FaSearch, FaArrowLeft } from 'react-icons/fa';

const BrowseBooks = () => {
  const { category } = useParams();
  const { books } = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let result = books;
    
    if (category) {
      result = result.filter(book => 
        book.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term)
      );
    }
    
    setFilteredBooks(result);
  }, [category, searchTerm, books]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        {category && (
          <Link to="/browse" className="mr-4 text-purple-600 hover:text-purple-800">
            <FaArrowLeft size={20} />
          </Link>
        )}
        <h2 className="text-2xl font-bold text-purple-800">
          {category ? `${category} Books` : 'All Books'}
        </h2>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="pl-10 pr-4 py-2 w-full md:w-1/2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No books found. Try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;