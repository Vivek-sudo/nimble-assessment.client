import axiosInstance from '../utils/AxiosInstance';

const authApi = {
    login: async (email, password) => {
        try {
            const response = await axiosInstance.post(`auth/login`, { email, password });
            return response.data?.token;
        } catch (error) {
            throw new Error('Login failed');
        }
    },

    register: async (email, password) => {
        try {
            const response = await axiosInstance.post(`/auth/register`, { email, password });
            return response.data?.token;
        } catch (error) {
            throw new Error('Registration failed');
        }
    },
};

export default authApi;