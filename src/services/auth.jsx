import { axiosInstance } from "./api";
import { jwtDecode } from "jwt-decode";

const setToken = (token) => localStorage.setItem('token', token);

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}
const fetchUsers = async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get('/api/auth/getall', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

const getUserEmail = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.sub;
    }
    return null;
}

const getUserRole = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.role;
    }
    return null;
}
const getUserId=()=>{
    const token=getToken();
    if(token)
    {
        const payLoad=jwtDecode(token);
        return payLoad?.userId;

    }
}

const isLoggedIn = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        return isLogin;

    }
}

const SignIn = (username, password) => axiosInstance.post("/auth/login", { username, password });
const SignOut = () => localStorage.clear()


export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut,getUserId };