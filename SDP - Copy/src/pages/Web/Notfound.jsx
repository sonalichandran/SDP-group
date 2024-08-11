import Meteors from '@/components/magicui/meteors'
import RetroGrid from '@/components/magicui/retro-grid'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
     Page not Found
    </span>

<div>
      <Link to='/' className='text-primary font-bold'>Go to Home </Link></div>
    <RetroGrid /></div>
     </>
  )
}

export default NotFound