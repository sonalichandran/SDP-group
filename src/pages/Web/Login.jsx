import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth.jsx';

const Login = () => {
    const navigate = useNavigate();
    const usernameur = useRef();
    const [password, setPassword] = useState('');

    const checkRedirect = async () => {
        if (authService.getToken() !== null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                console.log(userRole);
                if (userRole === "ADMIN") {
                    navigate('/admin/dashboard');
                } else if (userRole === "USER") {
                    navigate('/user/dashboard');
                } else {
                    console.log("Something went wrong");
                }
            }
        }
    };

    useEffect(() => {
        checkRedirect();
    }, []);

    const handlelogin = async (e) => {
        e.preventDefault();
        const signin = {
            username: usernameur.current.value,
            password: password
        };
        try {
            const res = await authService.SignIn(signin.username, signin.password);
            if (res.status === 200) {
                authService.setToken(res.data);
                checkRedirect(); 
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
                {/* Left Side: Login Form */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center text-cyan-900">Login</h2>
                    <form className="space-y-4 text-black" onSubmit={handlelogin}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                UserName
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={usernameur}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-900 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-sm text-center text-black">
                        Don't have an account? <Link to="/register" className="text-cyan-700 hover:text-cyan-500">Sign up</Link>
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-6 hidden md:block">
                    <img src="https://www.krrin.com/images/login.svg" alt="Login Illustration" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Login;
