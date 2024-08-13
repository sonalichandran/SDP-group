import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users, Power, ShoppingCart, Package, BarChart } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const Leftbar = () => {

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Products',
            link: '/admin/product',
            icon: ShoppingCart
        },
        {
            title: 'Orders',
            link: '/admin/orders',
            icon: Package
        },
        {
            title: 'Vendors',
            link: '/admin/vendors',
            icon: BarChart
        }
    ]
    return (
        <div className="h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-6 bg-cyan-900">
        <div className="h-[5%] font-bold text-2xl flex justify-center items-center text-white">
          <ShoppingCart size={46} strokeWidth={2} className="pr-2" />
          <Link to="/" className="text-white">GroCo</Link>
        </div>
        <div className="h-[90%] w-full flex flex-col justify-start items-center gap-2">
          <Avatar className="h-24 w-24 mt-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <p className="text-lg text-white">Groco Admin</p>
          {AdminLinks.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              className="p-5 bg-cyan-700 text-white hover:bg-cyan-900  font-bold mt-2 w-full text-white"
              style={{ color: 'inherit' }}>
              <span className="flex flex-row items-center justify-start h-full w-full gap-2">
                {React.createElement(data.icon, { size: 20 })}
                {data.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="h-[5%] w-full flex flex-col justify-center items-center"></div>
      </div>
    )
}

export default Leftbar;