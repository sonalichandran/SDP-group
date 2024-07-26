
import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
// import 'src/assets/css/Footer.css';
const Footer = () => {
  return (
   <div>
     <footer className="bg-gray-100 py-10 text-black">
            <div className="footer-content max-w-[1200px] mx-auto flex justify-between">
                <div className="footer-section w-1/3 text-black text-2xl mb-4 text-base leading-relaxed">
                    <h2>About Us</h2>
                    <p>Welcome to Your Personal Store, your one-stop destination for unique and thoughtful gifts. Explore our curated collection designed to make every occasion special.</p>
                </div>
                <div className="footer-section list-none p-0">
                    <h2>Quick Links</h2>
                    <ul>
                        <Link to='/'>
                            <li className='text-black no-underline'>Home</li>
                        </Link>
                        <li className=' text-black no-underline'>Shop</li>
                        <li>Occasions</li>
                        <li>Contact Us</li>
                        
                    </ul>
                </div>
                <div className="footer-section contact  w-[30%]">
                    <h2>Contact Us</h2>
                    <p>Email: info@yourgiftshop.com</p>
                    <p>Phone: 7880563295</p>
                    <p>Address: Coimbatore</p>
                    <div className='gap-1.5 flex w-[100px] h-[50px]'>
                        <Instagram />  <Facebook />   <Youtube />   <Twitter />
                        </div>
                </div>
            </div>
            <div className="footer-bottom mt-5 text-center pt-2 border-t border-gray-300">
                <p className='text-sm text-black'>&copy; 2023 Your Personal Store. All rights reserved.</p>
            </div>
        </footer>
   </div>
  )
}

export default Footer