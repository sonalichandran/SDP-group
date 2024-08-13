import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
const products = [
  { id: 1, name: 'Chicken breast (boneless 500g)', price: '₹250', image: 'https://static.vecteezy.com/system/resources/thumbnails/034/763/859/small_2x/ai-generated-raw-chicken-meat-free-png.png' },
  { id: 2, name: 'goat Curry cut(1kg)', price: '₹1135', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9ef4b548-8853-ee34-a8de-2b98510dbd4f%2Foriginal%2FPDP_5._Premium_Goat_-_Curry_Cut_(1_Kg)-13_(1).jpg&w=384&q=75' },
  { id: 3, name: 'Blue crab(500g)', price: '₹500', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Faf90d853-4d7d-c9f2-6f0d-5c5c5c57dabd%2Foriginal%2F1701852725683.jpg&w=384&q=75' },
  { id: 4, name: 'Murral fry cut(100g)', price: '₹200', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F3129f08e-2fb7-388a-358b-de748424ae39%2Foriginal%2F1701764480932.jpg&w=384&q=75' },
  { id: 5, name: 'Tiger Prawns(250g)', price: '₹500', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Ff8aa4a8e-e872-0ad0-1ca1-8876e92e97f9%2Foriginal%2F1714057708575.jpg&w=384&q=75' },
  { id: 6, name: 'Fresh water prawns(100g)', price: '₹300', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2Fcatalog-category%2Ffd796a01-eea7-8675-faa7-9bc5376dda82%2Foriginal%2F1714469368812.png&w=384&q=75' },
  { id: 7, name: 'Mutton spleen(50g)', price: '₹300', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F78a62b26-8225-b389-6bbf-1ed2fed9b059%2Foriginal%2FPDP_43._Mutton_Spleen.jpg&w=384&q=75' },
  { id: 8, name: 'Mutton paya', price: '₹300', image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fab0aaadd-f239-216e-5bdf-0d6c76f48f71%2Foriginal%2FMutton_Paya_Pdp_Image_(1).jpg&w=384&q=75' },
  { id: 9, name: 'Eggs(10)', price: '₹120', image: 'https://media.istockphoto.com/id/924194926/photo/wooden-cup-of-white-eggs.jpg?b=1&s=612x612&w=0&k=20&c=x_VLLLQb5xJU_iJgua8l1MN51wFZnKYIHNuI1_Reo9Y=' },
];

const Meat = () => {
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
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden h-85">
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

export default Meat;
