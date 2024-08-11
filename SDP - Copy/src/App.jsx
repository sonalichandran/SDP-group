import React  from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Weblayout from "./layout/Weblayout";
import Home from "./pages/Web/Home";
import Login from "./pages/Web/Login";
import Register from "./pages/Web/Register";
import Notfound from "./pages/Web/Notfound";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Adminlayout from "./layout/Adminlayout";
import AdminUsers from "./pages/Admin/AdminUsers";
import Userlayout from "./layout/Userlayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebLayout2 from "./layout/WebLayout2";
import FruitList from "./pages/Web/FruitList";
import VegetableList from "./pages/Web/Vegetables";
import Meat from "./pages/Web/Meat";
import Chocalates from "./pages/Web/Chocalates";
import Households from "./pages/Web/Households";
import Cart from "./pages/User/Cart";
import Favourites from "./pages/User/Favourites";
import Profile from "./pages/User/Profile";
import AdminProducts from "./pages/Admin/AdminProducts";
import Orders from "./pages/User/Orders";
import Login2 from "./pages/Web/Login2";
export default function App() {
    return (
    
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<Weblayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminlogin' element={<Login2/>}/>
        
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>

         
        <Route element={<Adminlayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                    </Route>
                    <Route element={<WebLayout2/>}>
                        <Route path='/fruits' element={<FruitList />} />
                       <Route path='/vegetables' element={<VegetableList />} />
                         <Route path='/snacks' element={<Chocalates/>}/>
                        <Route path='households' element={<Households/>} />
                         <Route path='/meat' element={<Meat/>}/>
                        
                    </Route>
                    <Route element={<Userlayout/>}>
                        <Route path='/users/dashboard' element={<Profile/>}/>
                        <Route path='/users/orders' element={<Orders/>}/>
                        <Route path='/users/cart' element={<Cart/>}/>
                        <Route path='/users/favourite' element={<Favourites/>}/>
                    
                        
                    </Route>
        </Routes>
        </BrowserRouter>
      </>
          );
  }
