import React, { useState } from 'react';



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

