import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weblayout from './layout/Weblayout';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
// import Login from './components/Login';
import Register from './pages/Web/Register';
import Notfound from './pages/Web/Notfound';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import Adminlayout from './layout/Adminlayout';
import AdminProduct from './pages/Admin/AdminProduct';
import AdminVendors from './pages/Admin/AdminVendors';
import AdminOrder from './pages/Admin/AdminOrder';
import Shopc from './pages/Web/Shopc';
import Exoticfruits from './pages/Web/Productlist/Exoticfruits';
import Meat from './pages/Web/Productlist/Meat';
import Vegetables from './pages/Web/Productlist/Vegetables';
import Homee from './pages/Web/Productlist/Homee';
import Bakery from './pages/Web/Productlist/Bakery';
import BreakFast from './pages/Web/Productlist/Breakfast';
import Beverages from './pages/Web/Productlist/Beverages';
import Userlayout from "./layout/Userlayout";
import UserDashboard from './pages/User/UserDashBoard';
import Orders from './pages/User/Orders';
import Cart from './pages/User/Cart';
import Favourite from './pages/User/Favourite';
import Diary from './pages/Web/Productlist/Diary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weblayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Notfound/>} />
          <Route path="shopc" element={<Shopc />} />
          <Route path="fruits" element={<Exoticfruits />} />
          <Route path="meat" element={<Meat/>} />
          <Route path="vegetables" element={<Vegetables/>} />
          <Route path="HomeEssential" element={<Homee/>} />
          <Route path="home-essentials" element={<Homee/>} />
          <Route path="bakery-products" element={<Bakery/>} />
          <Route path="dairy-products" element={<Diary/>} />
          <Route path="staples" element={<BreakFast/>} />
          <Route path="beverages" element={<Beverages/>} />
          <Route path="users/cart" element={<Cart/>} />
        </Route>


        <Route element={<Adminlayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<AdminUser />} />
          <Route path='/admin/product' element={<AdminProduct />} />
          <Route path='/admin/orders' element={<AdminOrder />} />
          <Route path='/admin/vendors' element={<AdminVendors />} />
        </Route>
        <Route element={<Userlayout/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>} />
          <Route path='/user/orders' element={<Orders/>} />
          <Route path='/user/cart' element={<Cart/>} />
          <Route path='/user/favourite' element={<Favourite/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
