import React from 'react'
import Carousel from './Carousel'
import Navbar from '@/components/Web/Navbar'
import Shopc from './Shopc'
import Footer from '@/components/Web/Footer'
import BestSeller from './BestSeller'
const Home = () => {
  return (
   <div>
    <Navbar/>
    <Carousel/>
    <BestSeller/>
    <Footer/>
   </div>

  )
}

export default Home