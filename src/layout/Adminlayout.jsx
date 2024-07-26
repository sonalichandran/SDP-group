import Adminleftbar from '@/components/Admin/Adminleftbar'
import Admintopbar from '@/components/Admin/Admintopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Adminleftbar />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Admintopbar/>
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Adminlayout