import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '@/services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const res=await Signup(signup.username,signup.email,signup.password);
    if(res.data=="User registered successfully.")
    {
                setTimeout(() => {
                 navigate('/login')
                  }, 5000)
    }
    else{
     console.log("error");
    }
 
   }
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
     
        <div className="md:w-1/2 w-full p-6 hidden md:block">
          <img src="https://www.krrin.com/images/login.svg" alt="Signup Illustration" className="w-full h-full object-cover" />
        </div>
       
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-900">Sign Up</h2>
          <form form id="registerForm"  className="space-y-4 text-black" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                   type="text"
                   id="username"
                   name="username"
                   ref={usernameRef}
                   required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                required  
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                required  
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
           
           
            <button
              type="submit"
              className="w-full mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-900 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Sign Up
            </button>
           

          </form>
          <div className="mt-4 text-sm text-center">
            Already have an account? <Link to="/login" className="text-cyan-700 hover:text-cyan-500">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
