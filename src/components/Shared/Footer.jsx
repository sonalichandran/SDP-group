// import { Facebook, Twitter } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className="absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-2 border-primary/50">
//       <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg"> </div>
//       <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 '>
//         <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
//           <Facebook className='h-6 w-6' />
//         </a>
//         <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
//           <Twitter className='h-6 w-6' />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
// import '../Assets/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useNavigate } from 'react-router-dom';



function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <h3 onClick={()=>{navigate("/privacy")}}>Privacy Policy</h3>
        </div>
        <div className="footer-section"><h3 onClick={()=>{navigate("/terms")}}>Terms & Conditions</h3>
        </div>
        <div className="footer-section">
          <h3 onClick={()=>{navigate("/contact")}}>Contact Info</h3>
        </div>
        <div className="footer-section">
          <h3 onClick={()=>{navigate("/faq")}}>FAQs</h3>
        </div>
        
        <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
        <span onClick={() => window.open('https://www.facebook.com/', '_blank')}>
        <FacebookIcon />&nbsp;&nbsp;&nbsp;
        </span>
        <span onClick={() => window.open('https://www.whatsapp.com/', '_blank')}>
        <WhatsAppIcon />&nbsp;&nbsp;&nbsp;
        </span>
        <span onClick={() => window.open('https://twitter.com/i/flow/single_sign_on', '_blank')}>
        <TwitterIcon />&nbsp;&nbsp;&nbsp;
        </span>
        <span onClick={() => window.open('https://www.instagram.com/', '_blank')}>
        <InstagramIcon />&nbsp;&nbsp;&nbsp;
        </span>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;