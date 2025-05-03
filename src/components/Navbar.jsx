// components/Navbar.js
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Online Library</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white flex items-center hover:text-yellow-300">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/browse" className="text-white flex items-center hover:text-yellow-300">
            <FaBook className="mr-1" /> Browse Books
          </Link>
          <Link to="/add-book" className="text-white flex items-center hover:text-yellow-300">
            <FaPlus className="mr-1" /> Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;