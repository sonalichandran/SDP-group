import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { ShoppingCart } from 'lucide-react';
const Navbar = () => {
  const navigate = useNavigate();
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
  const handleCart = () => {
    const token = localStorage.getItem('token'); 
    if (token) {
      navigate('/user/cart'); 
    } else {
      navigate('/login'); 
    }
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-[8vh] bg-white flex flex-row justify-center items-center shadow-sm shadow-primary/50">
       <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg"><NavLink to="/"><img src='https://ik.imagekit.io/sritha235/Home/logoo1.png?updatedAt=1722136081879' alt='logo' className='w-28'/></NavLink> </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 text-gray-400'>
        {/* <Link to='/'>Home </Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register </Link> */}
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
       <ShoppingCart onClick={handleCart} className="cursor-pointer" />
      </div>
    </div>

  );
}

export default Navbar