import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'Carrot(1kg)', price: '₹500', image: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=600 ' },
  { id: 2, name: 'Brinjal(500g)', price: '₹100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWodsdZmCsLG7aCE5nIwxA9THdR7xw9Yi87g&s' },
  { id: 3, name: 'Potato(1kg)', price: '₹150', image: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2014/01/potatoes-411975_1280.jpg' },
  { id: 4, name: 'Tomato(1kg)', price: '₹120', image: 'https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Scarlet gourds(500g)', price: '₹50', image: 'https://th-i.thgim.com/public/migration_catalog/article11982112.ece/alternates/FREE_1200/29MP_KOVAKKAI.JPG' },
  { id: 6, name: 'Arai Keerai(1kg)', price: '₹300', image: 'https://i0.wp.com/c7.staticflickr.com/9/8616/28722032142_0781c3af06_c.jpg?resize=534%2C800&ssl=1' },
  { id: 7, name: 'Coriander leaves(1kg)', price: '₹100', image: 'https://www.chfmart.com/images/detailed/2/coriander-leaves.jpg' },
  { id: 7, name: 'Green chillies(100g)', price: '₹75', image: 'https://images.pexels.com/photos/5792429/pexels-photo-5792429.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Vegetables = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden h-85 dark:bg-slate-400">
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
            <button className="mt-4 w-full bg-cyan-700 text-antiquewhite py-2 rounded-lg transition-colors duration-300 hover:bg-cyan-900">
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

export default Vegetables;
