import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const products = [
  { id: 1, name: 'Banana(no-4)', price: '₹190', image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Jack fruit(500g)', price: '₹100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT207K8PKQSlHbSIacnOr9P-BIswlG1f_KRwg&s' },
  { id: 3, name: 'Apple(1kg)', price: '₹150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s' },
  { id: 4, name: 'Orange(1kg)', price: '₹200', image: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg' },
  { id: 5, name: 'Rambutan (500g)', price: '₹100', image: 'https://images.pexels.com/photos/4869137/pexels-photo-4869137.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Mango (1kg)', price: '₹150', image: 'https://ichef.bbci.co.uk/images/ic/1040x1040/p06hk0h6.jpg' },
  { id: 7, name: 'grapes(250g)', price: '₹150', image: 'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'pomegranate(1kg)', price: '₹150', image: 'https://images.pexels.com/photos/992818/pexels-photo-992818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const Exoticfruits = () => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      id: products.id, 
      name: products.productName,
      quantity: 1,
      price: products.productcost, 
      description: products.productcategory, 
      image: products.image 
    });

    localStorage.setItem('cart', JSON.stringify(cart));
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

export default Exoticfruits;
