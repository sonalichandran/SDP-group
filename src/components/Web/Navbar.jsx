import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
  ];

  const CategoryLinks = [
    {
      title: "Fresh Produce",
      path: "/category/freshproduce"
    },
    {
      title: "Meat and Seafood",
      path: "/category/meatandseafood"
    },
    {
      title: "Dairy Products",
      path: "/category/dairyproducts"
    
    },
    {
      title: "Pantry Staples",
      path: "/category/pantrystaples"
    }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[9vh] flex flex-row justify-center items-center  bg-black border-grey shadow-lg shadow-gray-400">
        <div className="w-1/4 h-full  font-bold flex justify-center items-center text-4xl  bg-black text-white">
          ApExGrOcEr
        </div>
        {/* <div className="search-bar"> */}
      {/* <input
        type="text"
     
        placeholder="Search..."
        className="search-input pl-2 h-8 w-60"
      /> */}
      {/* <button  className="search-button border-2 h-8 w-16 bg-black">Search</button> */}
    {/* </div> */}
        <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 text-white'>
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
          {/* <div className="relative">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none"
            >
              Category
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-primary/10 border border-gray-200 rounded shadow-lg">
                {CategoryLinks.map((link, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-primary">
                    <NavLink to={link.path}>
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div> */}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
