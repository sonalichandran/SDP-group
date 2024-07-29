// import React, { useState, useEffect } from 'react';

// const slides = [
  
//   {
//     image: 'https://newspaperads.ads2publish.com/wp-content/uploads/2021/07/pedigree-new-all-bites-for-small-mouths-pedigree-small-dog-ad-toi-mumbai-11-7-2021.png',
//     caption: 'Weekly Discounts'
//   },
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [transitionCount, setTransitionCount] = useState(0);
 
//   useEffect(() => {
//     if (!isPaused && transitionCount < 3) {
//       const timer = setTimeout(goToNextSlide, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, isPaused, transitionCount]);

//   return (
//     <div
//       className="relative w-full mx-auto overflow-hidden py-16 flex justify-center"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative w-full">
//             <img
//               src={slide.image}
//               alt={`Slide ${index}`}
//               className="w-full h-96 object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
//               {slide.caption}
//             </div>
//           </div>
//         ))}
//       </div>

      
     

//       <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentIndex(index);
//               setTransitionCount(0); // Reset the transition count when manually changing slides
//             }}
//             className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';



const items = [
  {
    src: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80"
  },
  {
    src: 'https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80'
 
  },
  {
    src: 'https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80'
    
  },
  {
    src: 'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80'
    
  }
];

const ImageSlider = () => {
  return(
    <>

    <div className='h-30 relative w-75 mx-auto overflow-hidden py-16 flex justify-center'>
            <UncontrolledCarousel items={items} />
          </div>
      </>
  )
}

export default ImageSlider;

