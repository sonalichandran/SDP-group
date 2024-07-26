import React from 'react'
import Button from './Button'
import { ModeToggle } from './components/mode-toggle'
import AnimatedCircularProgressBar from './components/magicui/animated-circular-progress-bar'
// import Login from './components/Login'
// import Register from './components/Register'
import Nav from './components/Nav'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "/src/components/ui/card.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Web/Home'
import Notfound from './pages/Web/Notfound'
import Register from './pages/Web/Register'
import Weblayout from './layout/Weblayout'
import Login from './pages/Web/Login'


export default function App() {
    return (
        <>
     
       
        {/* <Nav/> */}
        {/* <ModeToggle/>
        <Login/>
        <Register/> */}
        <BrowserRouter>
        <Routes>
          <Route element={<Weblayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
     
        
        </>
      
    )
  }