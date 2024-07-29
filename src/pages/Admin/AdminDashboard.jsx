import React, { useState, useEffect } from 'react';
import { Home, Users, Settings, BarChart2, ShoppingCart, DollarSign, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [productsCount, setProductsCount] = useState(120);
  const [usersCount, setUsersCount] = useState(200);
  const [sales, setSales] = useState(50000);
  const [ordersCount, setOrdersCount] = useState(150);

  useEffect(() => {
    // Mock real-time updates
    const interval = setInterval(() => {
      setProductsCount((prev) => prev + Math.floor(Math.random() * 5));
      setUsersCount((prev) => prev + Math.floor(Math.random() * 3));
      setSales((prev) => prev + Math.floor(Math.random() * 1000));
      setOrdersCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [5000, 7000, 8000, 6000, 9000, 10000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const ordersData = {
    labels: ['Pending', 'Completed', 'Cancelled'],
    datasets: [
      {
        label: 'Orders',
        data: [50, 80, 20],
        backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const usersData = {
    labels: ['Admins', 'Customers'],
    datasets: [
      {
        label: 'Users',
        data: [10, 190],
        backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='m-4 p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Card className='shadow-lg transition transform hover:scale-105'>
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle>Total Products</CardTitle>
            <ShoppingCart className='h-6 w-6 text-green-500' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>{productsCount}</p>
          </CardContent>
        </Card>

        <Card className='shadow-lg transition transform hover:scale-105'>
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle>Total Users</CardTitle>
            <Users className='h-6 w-6 text-blue-500' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>{usersCount}</p>
          </CardContent>
        </Card>

        <Card className='shadow-lg transition transform hover:scale-105'>
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle>Total Sales</CardTitle>
            <DollarSign className='h-6 w-6 text-red-500' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>Rs.{sales}</p>
          </CardContent>
        </Card>

        <Card className='shadow-lg transition transform hover:scale-105'>
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle>Total Orders</CardTitle>
            <Package className='h-6 w-6 text-purple-500' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>{ordersCount}</p>
          </CardContent>
        </Card>
        
      </div>

      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 flex justify-center items-center'>
        <Card className='shadow-lg flex justify-center items-center transition transform hover:scale-105 h-100 w-100'>
          <CardHeader>
            <CardTitle>Orders Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Doughnut data={ordersData} />
          </CardContent>
        </Card>
        <Card className='shadow-lg transition transform hover:scale-105'>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={salesData} />
          </CardContent>
        </Card>
      </div>

    
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <Button className='w-full flex justify-center items-center'>
          <Home className='h-5 w-5 mr-2' /> <Link to='/'> Home </Link>
        </Button>
        <Button className='w-full flex justify-center items-center'>
          <Users className='h-5 w-5 mr-2' /><Link to='/admin/users'> Users </Link>
        </Button>
        <Button className='w-full flex justify-center items-center'>
          <Settings className='h-5 w-5 mr-2' /> Settings
        </Button>
        <Button className='w-full flex justify-center items-center'>
          <BarChart2 className='h-5 w-5 mr-2' /> Reports
        </Button>
      </div>
    </div>
  );
}

export default AdminDashboard;
