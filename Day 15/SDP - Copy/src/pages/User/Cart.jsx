// import React from 'react';

// const Cart = () => {
//   const cartItems = [
//     {
//       id: 1,
//       name: 'Green Moong Dal',
//       quantity: 1,
//       price: 45,
//       description: 'High-quality green moong dal, rich in protein and essential nutrients.',
//       image: 'https://www.bigbasket.com/media/uploads/p/l/10000440_17-bb-royal-moong-dal.jpg'
//     },
//     {
//       id: 2,
//       name: 'Toor Dal',
//       quantity: 2,
//       price: 55,
//       description: 'Premium toor dal, perfect for making delicious dal tadka.',
//       image: 'https://www.bigbasket.com/media/uploads/p/l/40159897_3-super-saver-toorarhar-dal-desi.jpg'
//     },
//     {
//       id: 3,
//       name: 'Basmati Rice',
//       quantity: 1,
//       price: 120,
//       description: 'Long grain basmati rice, ideal for biryani and pulao.',
//       image: 'https://www.bigbasket.com/media/uploads/p/l/40072462_12-bb-royal-organic-basmati-rice.jpg'
//     }
//   ];

//   return (
//     <div className="pl-20 pt-5 flex flex-col gap-2">
//       <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
//       <div className="dgcont p-0">
// <div class="dcard">
//     <img className="sizereduce " src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201605/lychee-story647_052016105516.jpg?VersionId=Fwg6P2f7ItdmDsF4KgBV7RqprkKKzUWG" alt="not"/>
//     <p>Approx 500g-1 Pack</p>
//     <h4>Litchi</h4>
//     <h3>₹181</h3>
    
//     <input type="submit" value="Added" className="dogbtn" />
// </div>
// <div class="dcard">
//     <img className="sizereduce" src="https://www.bigbasket.com/media/uploads/p/m/40008982_16-fresho-dragon-fruit.jpg?tr=w-1080,q=80"alt="not"/>
//     <p>1 pc-(Approx. 300g- 400g)</p>
//     <h4>Dragon Fruit</h4>
//     <h3>₹91</h3>
//     <input type="submit" value="Added" className="dogbtn" />
// </div>
// <div class="dcard">
//     <img className="sizereduce" src="https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/brands/kisses/Kisses_MC_less-sugar_display.jpg?im=Resize=(392)"alt="not"/>
//     <p>2X100g-Multipack</p>
//     <h4>Hershey's Kisses</h4>
//     <h3>₹310.25</h3>
//     <input type="submit" value="Add to Cart" className="dogbtn" />
// </div>

// </div>
//       </div>
     
//   );
// }

// export default Cart;
// import React from 'react';
// import axios from 'axios';

// const Cart = () => {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

//   // Function to extract user ID from token
//   const getUserIdFromToken = () => {
//     const token = localStorage.getItem('token');
//     if (!token) return null;
    
//     const decodedToken = JSON.parse(atob(token.split('.')[1]));
//     return decodedToken.userId;
//   };

//   const userId = getUserIdFromToken(); // Extract user ID

//   const handleCheckout = () => {
//     if (!userId) {
//       console.error('User ID is not available');
//       return;
//     }

//     const orders = {
//       address: 'Your Address Here', // Replace with actual address input
//       number: 1234567890, // Replace with actual phone number input
//       cost: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
//       status: 'Pending',
//       product: cartItems.map(item => ({
//         productName: item.name,
//         productcategory: item.description,
//         productcost: item.price
//       }))
//     };

//     const token = localStorage.getItem('token');
//     axios.post(`http://localhost:8080/order/register/${userId}`, orders, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         console.log('Order placed successfully:', response.data);
//         localStorage.removeItem('cart'); // Clear cart after successful order
//       })
//       .catch(error => {
//         if (error.response) {
//           console.error('Error response:', error.response.data);
//           console.error('Error status:', error.response.status);
//           console.error('Error headers:', error.response.headers);
//         } else if (error.request) {
//           console.error('Error request:', error.request);
//         } else {
//           console.error('Error message:', error.message);
//         }
//       });
//   };

//   return (
//     <div className="pl-20 pt-5 flex flex-col gap-6">
//       <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map(item => (
//             <div key={item.id} className="h-96 w-80 border border-gray-200 shadow-md rounded-md p-4 flex flex-col">
//               <img src={item.image} className="h-40 w-full object-cover rounded-md mb-4" alt={item.name} />
//               <div className="flex flex-col flex-grow">
//                 <p className="font-medium text-lg">{item.name}</p>
//                 <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <div className="mt-auto font-bold text-xl flex justify-between">
//                   <span>Rs. {item.price}</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-4 rounded mt-4">Checkout</button>
//       <button onClick={() => localStorage.removeItem('cart')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Clear Cart</button>
//     </div>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import axios from 'axios';
import { authService } from '@/services/auth';

const Cart = () => {
  const defaultUsername = authService.getUserEmail(); // Fetch the username from authService
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(defaultUsername); // Set the default username
  const [addressType, setAddressType] = useState('Home'); // Default address type
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.userId;
    } catch (error) {
      console.error('Invalid token format:', error);
      return null;
    }
  };

  const userId = getUserIdFromToken();

  const handleCheckout = () => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    if (!address || !number) {
      alert('Please enter both address and number.');
      return;
    }

    const orders = {
      username, 
      addressType, 
      address,
      number,
      cost: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: 'Pending',
      product: cartItems.map(item => ({
        productName: item.name,
        productcategory: item.description,
        productcost: item.price
      }))
    };

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is not available');
      return;
    }

    axios.post(`http://localhost:8080/order/register/${userId}`, orders, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Order placed successfully:', response.data);
        localStorage.removeItem('cart');
        setShowModal(false); 
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
          if (error.response.status === 403) {
            alert('You are not authorized to perform this action. Please check your permissions.');
          }
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  };

  return (
    <div className="pl-20 pt-5 flex flex-col gap-6">
      <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="h-96 w-80 border border-gray-200 shadow-md rounded-md p-4 flex flex-col">
              <img src={item.image} className="h-40 w-full object-cover rounded-md mb-4" alt={item.name} />
              <div className="flex flex-col flex-grow">
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mt-auto font-bold text-xl flex justify-between">
                  <span>Rs. {item.price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-4">
        <button onClick={() => setShowModal(true)} className="bg-green-500 text-white py-2 px-4 rounded mt-4">Checkout</button>
        <button onClick={() => localStorage.removeItem('cart')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Clear Cart</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="number">Mobile Number</label>
              <input
                id="number"
                type="text"
                placeholder="Enter Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black">Address Type</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Home"
                    checked={addressType === 'Home'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Home
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Office"
                    checked={addressType === 'Office'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Office
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Other"
                    checked={addressType === 'Other'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="address">Address</label>
              <textarea
                id="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 border rounded w-full h-24 resize-y"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-4 rounded">Place Order</button>
              <button onClick={() => setShowModal(false)} className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;