// pages/Home.js
import { Link } from 'react-router-dom';
import { bookCategories } from "../utils/mockData.js";
import BookCard from "../components/BookCard.jsx";
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const popularBooks = books.slice(0, 4); // Display first 4 books as popular

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to Our Online Library</h1>
        <p className="text-xl text-blue-600">Discover your next favorite book!</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Book Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bookCategories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category.toLowerCase()}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-800">Popular Books</h2>
          <Link to="/browse" className="flex items-center text-blue-600 hover:text-blue-800">
            View All <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;