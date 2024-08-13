import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'urad dal(1kg)', price: '₹190', image: 'https://i.etsystatic.com/23140051/r/il/e6f73a/4626517233/il_570xN.4626517233_nh3m.jpg' },
  { id: 2, name: 'Toor Dal(500g)', price: '₹100', image: 'https://rentiofoods.com/cdn/shop/products/dal1.jpg?v=1717518780&width=1445' },
  { id: 3, name: 'Peanuts(1kg)', price: '₹150', image: 'https://www.healthyorganic.in/cdn/shop/products/40094998-2_1-bb-royal-organic-raw-peanuts_2048x.jpg?v=1569850730' },
  { id: 4, name: 'Chana dal(1kg)', price: '₹200', image: 'https://5.imimg.com/data5/PI/BN/SH/SELLER-66014890/chana-dal-500x500.jpg' },
 
];

const Homee = () => {
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

export default Homee;
