import React , {useEffect, useRef}from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { authService } from '../../services/auth'
const Login = () => {

  const navigate = useNavigate()

  const checkRedirect = async () => {
      if (authService.getToken() !== null && authService.isLoggedIn()) {
          const userRole = authService.getUserRole();
          if (userRole !== null) {
              if (userRole === "Admin") {
                  navigate('/admin/dashboard');
              } else if (userRole === "User") {
                  navigate('/users/dashboard');
              } else {
                  toast.error("Something went wrong");
              }
          }
      }
  };

  useEffect(() => {
      checkRedirect();
  }, []);
  const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await authService.SignIn(usernameRef.current.value, passwordRef.current.value)
        // console.log(res.data);
        if (res.status === 200) {
            authService.setToken(res.data)
            toast.success("Welcome")
            setTimeout(() => {
                navigate("/users/dashboard")
            }, 3000)

        }
      }  
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded-lg shadow max-w-md w-full shadow-primary/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium ">
              Username
            </label>
            <input type="text" ref={usernameRef} id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-primary/80"
              placeholder="Enter your username" req/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password" id="password" ref={passwordRef} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary/80 focus:ring-green/50"
              placeholder="Enter your password" required/>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
          >Login</button>
        </form>
        <div className="mt-4 text-sm text-center">
          Don't have an account? <span className="text-green-600 hover:text-primary/80" onClick={() => navigate('/register')}>Sign up</span>
        </div>
        <div className="mt-4 text-sm text-center">
          Login as Admin?<Link to='/adminlogin'> <p  className="text-green-600 hover:text-primary/80" >Login</p></Link>
      </div>
    </div>
    <Toaster/>
    </div>
  );
};

export default Login;
