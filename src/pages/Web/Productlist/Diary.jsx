import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'Milk(1 ltr)', price: '₹50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrH58JBeF8V0bFlRbcPzA4G-kJjx9glZoJew&s' },
  { id: 2, name: 'Fresh Cream', price: '₹100', image: 'https://m.media-amazon.com/images/I/51pn7p9gnfL.jpg' },
  { id: 3, name: 'Butter(100g)', price: '₹150', image: 'https://cdn.britannica.com/27/122027-050-EAA86783/Butter.jpg' },
  { id: 4, name: 'cheese(1000', price: '₹200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSya2sYLwnUvAk7hAQnfcwcR9ppNQdnCYGyVQ&s' },
  { id: 5, name: 'Paneer(150g)', price: '₹250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3Z0vkwv41ltM4UIuMLhFxHaqn98rpZl0jg&s' },
  { id: 6, name: 'Ghee(150g)', price: '₹250', image: 'https://zamaorganics.com/cdn/shop/files/Untitleddesign_86.png?v=1706774218&width=1080' },
 
];

const Diary = () => {
  
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      id: product.id, 
      name: product.name,
      quantity: 1,
      price: product.price, 
      image: product.image,
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${product.name} added to cart`, {
      position: 'top-right',
      duration: 1000,
    });
  };
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div>
    <Navbar/>
  <div className="container mt-3 mr-3 ml-3">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden h-85  dark:bg-slate-400">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-300 ${
                favorites.includes(product.id) ? 'text-red-700' : 'text-gray-400'
              }`}
            >
              <FaHeart size={20} />
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 w-full bg-cyan-700 text-antiquewhite py-2 rounded-lg transition-colors duration-300 hover:bg-cyan-900"onClick={() => handleAddToCart(product)}>
              <FaCartPlus className="inline-block mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

export default Diary;
