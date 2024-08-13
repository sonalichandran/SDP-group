import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Cart from '@/pages/User/Cart';
const Navbar = () => {
  return (
    <div>
      <hr />
      <nav className="bg-cyan-700 p-2 shadow-md mt-1 font-bold">

        <div className="container mx-auto flex justify-center mt-1">
          <div className="flex space-x-3.5 font-bold">
            <Link
              exact
              to="/"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              <House />
            </Link>
            <Link
              to="/shopc"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded font-bold"
              style={{ color: 'AntiqueWhite' }}
            >
              Shop By Categories
            </Link>
            <Link
              to="/fruits"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Fruits
            </Link>
            <Link
              to="/meat"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Meat, Poultry & Seafood
            </Link>
            <Link
              to="/vegetables"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Vegetables
            </Link>
            <Link
              to="/home-essentials"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Home Essentials
            </Link>
            <Link
              to="/bakery-products"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Bakery Products
            </Link>
            <Link
              to="/dairy-products"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}
            >
              Dairy Products
            </Link>
            <Link
              to="/staples"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}>
              Daily Staples
            </Link>
            <Link
              to="/beverages"
              className="text-antiquewhite font-semibold py-1 px-2 text-sm transform transition-transform duration-200 hover:scale-105"
              activeClassName="bg-cyan-900 rounded"
              style={{ color: 'AntiqueWhite' }}>
              Beverages
            </Link>
            <Link to="users/cart">
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
