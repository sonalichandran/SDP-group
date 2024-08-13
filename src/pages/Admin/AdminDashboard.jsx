import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, Legend } from 'recharts';
import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: 'January', desktop: 100, mobile: 400 },
  { month: 'February', desktop: 300, mobile: 398 },
  { month: 'March', desktop: 200, mobile: 900 },
  { month: 'April', desktop: 27, mobile: 38 },
  { month: 'May', desktop: 180, mobile: 900 },
  { month: 'June', desktop: 239, mobile: 380 },
  { month: 'July', desktop: 349, mobile: 430 },
];

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-wrap p-4 gap-4">
        <Card className='w-full md:w-1/4 shadow-lg shadow-cyan-700'>
          <CardHeader className="flex flex-row items-center justify-between text-cyan-700 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-cyan-700">
              Total Users
            </CardTitle>
            <Users className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-700">1000</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-cyan-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-cyan-700">
            <CardTitle className="text-sm font-medium text-cyan-700">
              Active Users
            </CardTitle>
            <Users className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-700">847</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-cyan-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-cyan-700">
            <CardTitle className="text-sm font-medium text-cyan-700">
              Total Products
            </CardTitle>
            <ShoppingBag className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-700">567</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-cyan-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-cyan-700">
            <CardTitle className="text-sm font-medium text-cyan-700">
              Total Orders
            </CardTitle>
            <DollarSign className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-700">5674</div>
          </CardContent>
        </Card>
        <Card className='w-full md:w-1/4 shadow-lg shadow-cyan-700'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-cyan-700">
            <CardTitle className="text-sm font-medium text-cyan-700">
              Total Vendors
            </CardTitle>
            <Package className="h-6 w-6 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-700">200+</div>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" fill="#8884d8" />
          <Bar dataKey="mobile" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
}

export default AdminDashboard;
