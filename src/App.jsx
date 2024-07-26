import React  from "react";
// import { Button } from "@/components/ui/button"
// import { ModeToggle } from './components/mode-toggle'
// import {GridPattern} from './components/magicui/animated-grid-pattern'

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
import UserDashboard from "./pages/User/UserDashboard";
export default function App() {
    return (
    
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<Weblayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
        <Route element={<Userlayout/>}>
        <Route path='/users/dashboard' element={<UserDashboard/>}/>
        </Route>

         
        <Route element={<Adminlayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>


        </Routes>
        </BrowserRouter>

      </>
          );
  }
