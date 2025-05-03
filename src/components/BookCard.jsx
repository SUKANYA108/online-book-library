// components/BookCard.js
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
  return (
    <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={book.coverImage} 
        alt={book.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-800">{book.title}</h3>
        <p className="text-blue-600">by {book.author}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{book.rating}</span>
        </div>
        <Link 
          to={`/book/${book.id}`} 
          className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;