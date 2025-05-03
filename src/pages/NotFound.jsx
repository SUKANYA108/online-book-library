// pages/NotFound.js
import { Link } from 'react-router-dom';
import { FaHome, FaFrown } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
        <FaFrown className="text-6xl text-yellow-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-purple-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          <FaHome className="mr-2" /> Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;