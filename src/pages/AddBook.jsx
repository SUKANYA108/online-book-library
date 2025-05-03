// pages/AddBook.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from "../redux/booksSlice.js";
import { bookCategories } from "../utils/mockData.js";
import { FaCheck, FaTimes } from 'react-icons/fa';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: bookCategories[0],
    description: '',
    rating: '',
    coverImage: ''
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        id: Date.now(), // Simple ID generation
        ...formData,
        rating: parseFloat(formData.rating)
      };
      dispatch(addBook(newBook));
      setSuccess(true);
      setTimeout(() => {
        navigate('/browse');
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-pink-100 rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Add a New Book</h2>
        
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <div className="flex items-center">
              <FaCheck className="mr-2 text-green-500" />
              Book added successfully! Redirecting...
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${errors.title ? 'border-red-500' : 'border-purple-300 focus:border-purple-500'}`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FaTimes className="mr-1" /> {errors.title}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${errors.author ? 'border-red-500' : 'border-purple-300 focus:border-purple-500'}`}
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FaTimes className="mr-1" /> {errors.author}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${errors.description ? 'border-red-500' : 'border-purple-300 focus:border-purple-500'}`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FaTimes className="mr-1" /> {errors.description}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="rating">
              Rating (0-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${errors.rating ? 'border-red-500' : 'border-purple-300 focus:border-purple-500'}`}
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FaTimes className="mr-1" /> {errors.rating}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-purple-700 font-bold mb-2" htmlFor="coverImage">
              Cover Image URL
            </label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="https://example.com/book-cover.jpg"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;