
import React from 'react';
import { NavLink } from 'react-router-dom';
import BestSeller from './BestSeller';
import Footer from '@/components/Web/Footer';

const items = [
    { src: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg', title: 'Fresh Fruits', path: '/fruits' },
    { src: 'https://gfs.com/wp-content/uploads/2022/08/MeatPoultryFish_ICHeader.jpg', title: 'Meat,Fish Products', path: '/meat' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4DkzzkH2D2cklW1IcTGZJTc8zj1yX7bR6Q&s', title: 'Vegetables', path: '/vegetables' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbem1U_nWwiPXOZQcEdCsKAgJ1oZOzEtFfSQ&s', title: 'Home Essentials', path: '/home-essentials' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnbUrTIW1J5bhZyqhmW7c80ZKYKg-L9dtjg&s', title: 'Bakery Products', path: '/bakery-products' },
    { src: 'https://idahomilkproducts.b-cdn.net/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg', title: 'Dairy Products', path: '/dairy-products' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcd7IBn3F3D8Rlzx7R36UXQ6gSt2XdV7C-Aw&s', title: 'Daily Staples', path: '/staples' },
    { src: 'https://www.shutterstock.com/image-photo/various-autumn-winter-alcohol-drinks-600nw-1823086493.jpg', title: 'Beverages', path: '/beverages' },
];

const Shopc = () => {
    return (
        <div>
            <div className="flex items-center justify-center my-5 mt-10 ">
                <div className="flex-1 border-b-2 border-black/30 mx-4 ml-16 dark:border-gray-400"></div>
                <div className="text-3xl font-bold text-cyan-900 dark:text-cyan-700">Shop By Categories</div>
                <div className="flex-1 border-b-2 border-black/30 mx-4 dark:border-gray-400"></div>
            </div>
            <div className="grid grid-cols-4 gap-1 mb-2 pb-6">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center m-0.2 text-bold">
                        <div className="mr-50 ml-50 w-40 h-40 bg-slate-300 text-gray-500 font-mono rounded-full overflow-hidden font-bold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:text-gray-400">
                            <NavLink to={item.path}>
                                <img src={item.src} alt={item.title} className="object-cover w-full h-full text-gray-500 font-mono font-bold" />
                            </NavLink>
                        </div>
                        <p className="mt-2 text-center font-bold text-cyan-900">{item.title}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="flex items-center justify-center my-5 mt-10">
                <div className="flex-1 border-b-2 border-black/30 mx-4 ml-16 dark:border-gray-400"></div>
                <div className="text-3xl font-bold text-cyan-900 dark:text-cyan-700">Best Sellers</div>
                <div className="flex-1 border-b-2 border-black/30 mx-4 dark:border-gray-400"></div>
            </div>
            
            
        </div>
    );
}

export default Shopc;
