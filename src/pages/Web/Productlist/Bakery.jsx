import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'bakery biscuits', price: '₹100', image: 'https://5.imimg.com/data5/BA/XR/MY-52144810/bakery-biscuits.jpg' },
  { id: 2, name: 'Fruit Biscuit', price: '₹150', image: 'https://rukminim2.flixcart.com/image/850/1000/l1pc3gw0/cookie-biscuit/8/v/s/300-kashmiri-fruit-biscuits-300gm-in-pet-jar-1-introvej-original-imagd78zhaxrpctw.jpeg?q=90&crop=false' },
  { id: 3, name: 'Milk Bread', price: '₹100', image: 'https://www.bhg.com/thmb/ov2S31znAvSCXqrpgJQ8rwBgzp8=/2250x0/filters:no_upscale():strip_icc()/BHG-milk-bread-4CdeIL1uKGyB5ryU8J_EED-aaa76729c86a413ca7500029edba79f0.jpg' },
  { id: 4, name: 'Gelatine', price: '₹20', image: 'https://www.bigbasket.com/media/uploads/p/xxl/40308388_1-fr-products-gelatine-non-veg.jpg' },
  
];

const Bakery = () => {
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
      position: 'top-center',
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

export default Bakery;
