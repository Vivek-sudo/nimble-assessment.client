import axios from 'axios';
import { TOKEN_KEY } from './AuthContext';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const token = localStorage.getItem(TOKEN_KEY);

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    // Set the authorization header using the token from localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.error({ error });

        // If 401 logout user
        if (error.response.status === 401) {
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = '/';
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;