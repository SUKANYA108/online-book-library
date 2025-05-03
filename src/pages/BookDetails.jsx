// pages/BookDetails.js
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar, FaArrowLeft } from 'react-icons/fa';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useSelector((state) => state.books);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl text-red-600">Book not found!</h2>
        <Link to="/browse" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-pink-100 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
        <div className="md:flex">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">{book.title}</h2>
            <p className="text-xl text-blue-600 mb-4">by {book.author}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-700">{book.rating}/5</span>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                {book.category}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">{book.description}</p>
            
            <Link 
              to="/browse" 
              className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;