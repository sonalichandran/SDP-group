import React from 'react'

import Nav from '@/components/Web/Navbar2';
import Image from '/src/components/Web/ImageSlider';


const Home = () => {
  return (
  
    <>

    <div className='relative h-auto w-screen flex flex-col items-start justify-start top-20'>
      <div>
     
      <Image/>
      </div >
      
         </div>
        
<div>

      <Nav/>
</div>
      
      <div>
        {/* <div className='text-3xl font-bold mb-4 text-center text-green-600'>
       
   <h1>TOP OFFERS</h1>
      </div> */}
      <div className=" p-6  rounded-lg  max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-green-600">Top Offers</h2>
      </div>
      <div>
      <div className='w-full p-2'>
  <div className="flex justify-center space-x-5">
   
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_big-packs-topoffersStorefront_m_480_250723_02.jpg?tr=w-1920,q=80" alt="Card image"/>
      </div>
    </div>

   
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_combos-topoffersStorefront_m_480_250723_03.jpg?tr=w-1920,q=80" alt="Card image"/>
      </div>
    </div>

    
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_dow-topoffersStorefront_m_480_250723_01.jpg?tr=w-1920,q=80" alt="Card image"/>
      </div>
    </div>
  </div>
</div>
{/* <div className=' w-full h-[40%] flex justify-center items-center text-justify'>
  <div className='w-[80%] h-full bg-red-500 font-serif '>
  
Welcome to Smart Shopp, where quality meets convenience and our customers are at the heart of everything we do. Founded in 20XX with the mission to provide fresh, affordable, and high-quality products, we have grown into a trusted community hub. Our values are centered around offering top-quality items, maintaining affordability, delivering excellent customer service, and giving back to our community. At Smart Shopp, you'll find fresh produce, delicious deli and bakery goods, high-quality meat and seafood, essential pantry staples, household items, and specialty products to cater to diverse needs. We promise to continuously improve based on your feedback, ensure a clean and welcoming environment, and provide a seamless shopping experience both in-store and online. Thank you for choosing Smart Shopp, where we look forward to serving you and being part of your daily life. Stay connected with us through social media and our newsletter for the latest updates and promotions.
</div> */}
<div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-600">About Us</h2>
      <p className="text-gray-700 text-lg text-justify mb-4">
        Welcome to Smart Shopp, where quality meets convenience and our customers are at the heart of everything we do.
        Founded in 2024 with the mission to provide fresh, affordable, and high-quality products, we have grown into a
        trusted community hub. Our values are centered around offering top-quality items, maintaining affordability,
        delivering excellent customer service, and giving back to our community. At Smart Shopp, you'll find fresh
        produce, delicious deli and bakery goods, high-quality meat and seafood, essential pantry staples, household
        items, and specialty products to cater to diverse needs. We promise to continuously improve based on your
        feedback, ensure a clean and welcoming environment, and provide a seamless shopping experience both in-store and
        online. Thank you for choosing Smart Shopp, where we look forward to serving you and being part of your daily
        life. Stay connected with us through social media and our newsletter for the latest updates and promotions.
      </p>
    </div>
</div>
      </div>

  </>
  )
}

export default Home;
