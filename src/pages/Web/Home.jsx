import React from 'react';
import Image from '/src/components/Web/ImageSlider';
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShinyButton from "@/components/magicui/shiny-button";


const Home = () => {
  return (
    
    <>
    <div className='relative h-auto w-screen flex flex-col items-start justify-start top-20 shadow-gray'>
      <Image />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
        <div className="pl-20 pt-7">
          <TypingAnimation
            className="text-4xl font-bold text-white dark:text-white"
            text="Swipe, Tap, Snack: Groceries for Your Lifestyle"
            />
        </div>

        <div className="pt-10">
          <ShimmerButton className="shadow-2xl border-r-2">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shop Now
            </span>
          </ShimmerButton>
        
        </div>
      </div>
    </div>
    <div>
      
    </div>
            </>
  );
}

export default Home;
