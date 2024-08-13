import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <div>
     <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
              
    {/* <Navbar/> */}
   <Outlet/>
   {/* <Footer/> */}
   </div>
    </div>
  )
}

export default Weblayout