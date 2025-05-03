import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-lg border-2 border-secondary focus:outline-none focus:border-accent"
        />
        <button 
          type="submit"
          className="absolute right-3 top-3 text-secondary hover:text-primary"
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;