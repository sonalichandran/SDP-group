import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users, Power, ShoppingCart, Package, BarChart, Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const UserLeftbar = () => {

    const AdminLinks = [
        {
            title: 'Profile',
            link: '/users/dashboard',
            icon: Users
        },
        {
            title: 'Your Orders',
            link: '/users/orders',
            icon: Package
        },
        {
            title: 'Cart',
            link: '/users/cart',
            icon: ShoppingCart
        },
        {
            title: 'Favourites',
            link: '/users/favourite',
            icon: Heart
        }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-6 '>
            <div className='h-[5%]  font-bold text-2xl flex justify-center items-center'>
            <img src='https://ik.imagekit.io/sritha235/Home/logoo1.png?updatedAt=1722136081879' alt='logo' className='w-28'/> 
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
           
               
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link}  className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
            <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
                <span className='flex flex-row items-center justify-start w-full gap-2 text-red-500'>
                    <Power size={20} /> <Link to={'/'}>Logout</Link>
                </span>
            </Button>
        </div>

        </div>
    )
}

export default UserLeftbar