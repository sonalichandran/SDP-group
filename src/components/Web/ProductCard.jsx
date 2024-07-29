import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-80 h-96 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{product.title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="font-bold text-xl text-gray-800 dark:text-white">{product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;