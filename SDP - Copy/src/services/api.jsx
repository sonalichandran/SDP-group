import axios from 'axios';

const baseURL = 'http://localhost:8080/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (username, email,password) => axiosInstance.post('/auth/register', { username, email, password });
// const WebData = () => axios.get('/web/site');
// const UserData = (email) => axiosInstance.get(`/auth/email/${email}`);
// const UpdateUserByID = (id, data) => axiosInstance.put(`/auth/update/${id}`, data)
// const DeleteUserByID = (id) => axiosInstance.delete(`/auth/delete/${id}`)


// const getAllUsers = () => axiosInstance.get('/auth/getall')

export { axiosInstance, SignUp}
