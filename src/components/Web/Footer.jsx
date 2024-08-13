import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-10 text-black mt-3 dark:bg-cyan-950">
        <div className="footer-content max-w-[1200px] mx-auto flex justify-between">
          <div className="footer-section w-1/3 text-black text-2xl mb-4 text-base leading-relaxed">
            <h2>About Us</h2>
            <p>Welcome to Your Supermarket, your go-to place for fresh produce, quality groceries, and household essentials. We aim to provide the best shopping experience with a wide variety of products and unbeatable prices.</p>
          </div>
          <div className="footer-section list-none p-0">
            <h2>Quick Links</h2>
            <ul>
              <Link to='/'>
                <li className='text-black no-underline'>Home</li>
              </Link>
              <Link to='/shop'>
                <li className='text-black no-underline'>Shop</li>
              </Link>
              <Link to='/deals'>
                <li className='text-black no-underline'>Deals</li>
              </Link>
              <Link to='/contact'>
                <li className='text-black no-underline'>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="footer-section contact w-[30%]">
            <h2>Contact Us</h2>
            <p>Email: support@groco.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address:pakathula than iruku</p>
            <div className='gap-1.5 flex w-[100px] h-[50px]'>
              <Instagram className='hover:text-cyan-700' />
              <Facebook className='hover:text-cyan-700' />
              <Youtube className='hover:text-cyan-700' />
              <Twitter className='hover:text-cyan-700' />
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-5 text-center pt-2 border-t border-gray-300">
          <p className='text-sm text-black'>&copy; 2023 Your Supermarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
