
import React from 'react'
import { Outlet } from 'react-router-dom'
import UserleftBar from '@/components/User/UserleftBar'
import Admintopbar from '@/components/Admin/Topbar'


const Userlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
    <UserleftBar/>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Admintopbar/>
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    
    </div>
  )
}

export default Userlayout