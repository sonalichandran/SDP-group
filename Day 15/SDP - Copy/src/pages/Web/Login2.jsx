// Login.js

import React from 'react';
import { Link } from 'react-router-dom';

const Login2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded-lg shadow max-w-md w-full shadow-primary/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium ">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-primary/80"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-green/50"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
          ><Link to='/admin/dashboard'>Login</Link>
            
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login2;
