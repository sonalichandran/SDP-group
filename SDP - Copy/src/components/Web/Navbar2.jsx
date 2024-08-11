import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const NavLinks = [
    {
      title: "Fruits",
      path: "/fruits"
    },
    {
      title: "Vegetables",
      path: "/vegetables"
    },
    {
      title: "Households",
      path: "/households"
    },
    {
      title: "Snacks",
      path: "/snacks"
    },
    {
      title: "Meat",
      path: "/meat"
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = [
    { value: 'chennai', label: 'Chennai' },
    { value: 'Hosur', label: 'Hosur' },
    { value: 'Namakkal', label: 'Namakkal' },
    { value: 'Erode', label: 'Erode' },
    { value: 'Coimbatore', label: 'Coimbatore' },
  ];

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <>
    

      <div className="absolute top-16 left-0 w-full h-[7vh] flex flex-row items-center bg-white pr-10 text-gray-400">
        <div className="flex justify-start pr-40 items-center flex-row">
          <ul className="pl-60 list-none flex gap-8  text-lg font-medium">
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
          </ul>
        </div>

        <div className="flex items-center ml-4">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input pl-2 h-8 w-60  border border-green  hover:border-green rounded-l text-black"
            />
            <button className="search-button h-8 w-16 text-white bg-green-500 rounded-r">
              Search
            </button>
          </div>

          <div className="ml-4 relative">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="h-8 pl-2 pr-8 border border-gray-300 rounded text-black"
            >
              <option value="" disabled>
                Select location...
              </option>
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
            {selectedLocation && (
              <span className="absolute right-2 top-2 text-gray-600">
              
              </span>
            )}
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Navbar2;