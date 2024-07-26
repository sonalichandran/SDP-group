import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription } from '@/components/ui/card'


const Home = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div>

   <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80' alt='slide1'></img>
      </div>
      <div>
      <Carousel>
  <CarouselContent>    
    <CarouselItem><img src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80' alt='slide1' /></CarouselItem>
    <CarouselItem><img src="https://www.graceonline.in/uploads/Home-page-banner/2024/06/29/https-www-graceonline-in-ct-fruit-vegetables11719642492.webp" alt='slide2' /></CarouselItem>
    <CarouselItem><img src='https://media.starquik.com/bannerslider/s/t/starquikfl_web_halfprice1400x400.jpg' alt='slide3' /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      </div>


</div>
  )
}

export default Home