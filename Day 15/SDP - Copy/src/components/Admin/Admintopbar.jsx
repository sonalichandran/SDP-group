import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { ModeToggle } from '../mode-toggle'
import { authService} from '@/services/auth'
const Admintopbar = () => {
  const username=authService.getUserEmail();
  return (
    <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
    <div className='w-[95%] h-full flex items-center justify-end gap-4'>
        <ModeToggle/>
        <Avatar>
            <AvatarImage src="https://cdn4.sharechat.com/img_558091_293cbde2_1670649555384_sc.jpg?tenant=sc&referrer=feed-service&f=384_sc.jpg" alt="@shadcn" />
            <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
    </div>
</div>
  )
}

export default Admintopbar