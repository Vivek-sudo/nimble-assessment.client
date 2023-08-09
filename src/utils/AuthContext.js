import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TOKEN_KEY = 'token';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Check if the user is already logged in (based on token in localStorage)
    useEffect(() => {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);

            // Take the user to dashboard
            navigate('/dashboard');
        } else {
            navigate('/')
        }
    }, []);

    const login = (token) => {
        setToken(token);
        setIsLoggedIn(true);

        // Store the token in localStorage for future sessions
        localStorage.setItem(TOKEN_KEY, token);

        // Navigate user to dashboard
        navigate('/dashboard');
    };

    const logout = () => {
        setToken('');
        setIsLoggedIn(false);

        // Remove the token from localStorage
        localStorage.removeItem(TOKEN_KEY);

        // Navigate user to home
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};