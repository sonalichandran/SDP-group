import React from 'react'
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  return (
    <div className=" top-0 left-0 w-full h-[10vh] flex flex-row justify-center items-center border-b-2 border-cyan-700">
      <div className="w-1/4 ml-20 font-bold flex justify-start  text-4xl tracking-wider font-Source Code Pro  text-cyan-700 items-center">
        GroCo
      </div>
      <div className="w-1/2 ml-0 h-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
        />
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 text-gray-400'>
        
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <Link to='user/cart'>
        <ShoppingCart className='size-6 hover:text-cyan-700 transition-colors duration-200'/>
        </Link>
        <ModeToggle className='ml-auto' />
      </div>
    </div>

  );
}

export default Navbar