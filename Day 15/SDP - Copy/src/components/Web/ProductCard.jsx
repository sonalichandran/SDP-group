import React from 'react';
import { authService } from '@/services/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  const handleAddToCart = () => {
    if(authService.isLoggedIn())
      {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      id: product.id, 
      name: product.productName,
      quantity: 1,
      price: product.productcost, 
      description: product.productcategory, 
      image: product.image 
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }
    else{
      toast.error("Login to add items to Cart");
      setTimeout(() => {
        navigate('/login');
      }, 5000);
     
    }
  
  };

  return (
<div className=''>
      <div class="dcard">
      <img className="sizereduce" src={product.image } alt={product.productName} />
       <p>{product.productName}</p>
        <p>{product.productcategory}</p>
        <h3> ₹{product.productcost}</h3>
        <input type="submit" value="Add to Cart" className="dogbtn" onClick={handleAddToCart}/> 
      </div>   
      <Toaster 
        position="top-right" 
        toastOptions={{
          success: {
            duration: 4000, 
          },
          error: {
            duration: 4000, 
          },
        }} 
      />
</div>
  );
};

export default ProductCard;