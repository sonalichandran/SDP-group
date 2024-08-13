import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'Product 1', price: '₹500', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '₹1000', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '₹1500', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '₹2000', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '₹2500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '₹3000', image: 'https://via.placeholder.com/150' },
];

const Beverages = () => {
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
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden  dark:bg-slate-400">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-58 object-cover"
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
              <button className="mt-4 w-full bg-cyan-700 text-antiquewhite py-2 rounded-lg transition-colors duration-300 hover:bg-cyan-900" onClick={() => handleAddToCart(product)}>
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

export default Beverages;
