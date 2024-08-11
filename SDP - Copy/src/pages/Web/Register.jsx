import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../../services/api'
import { toast, Toaster } from 'react-hot-toast'
const Register= () => {
  
  const navigate = useNavigate()
  const [registerdata, setRegisterdata] = useState({
      username: '',
      email: '',
      password: ''
  })
  const handleChange = (e) => {
      setRegisterdata({ ...registerdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(registerdata);
      const res = await SignUp(registerdata.username, registerdata.email, registerdata.password);

      if (res.data==="User registered successfully.") {

          toast.success("Signup Success")
          setTimeout(() => {
              navigate('/login')
          }, 5000)
      }
      else {
          toast.error(res.data)
          // console.log(res.data)
      }

  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg shadow max-w-md w-full shadow-primary/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium"> Username</label>
            <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-primary/80" placeholder="sritha" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-primary/80" placeholder="sri@gmail.com" onChange={handleChange} required />
          </div>
          <div><label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-primary/80" placeholder="Enter your password" onChange={handleChange} required />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 ">Sign Up
          </button>
        <div className="mt-4 text-sm text-center">
          Already have an account? <span className="text-green-600 hover:text-primary/80 " onClick={() => navigate('/login')}>Login</span>
        </div>
        </form>
      <Toaster/>
      </div>
    </div>
  );
};

export default Register;
