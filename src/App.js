import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useAuth } from './utils/AuthContext';
import NotFound from './pages/NotFound';

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={
        isLoggedIn ? <Navigate to="/dashboard" /> : <Home />
      } />
      <Route
        exact path="/dashboard"
        element={
          isLoggedIn ? <Dashboard /> : <Navigate to="/" />
        }
      />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default App;