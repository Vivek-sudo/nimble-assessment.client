import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import ErrorBoundary from './pages/ErrorBoundary';

// Set the app element for the modal
ReactModal.setAppElement('#root');

// Main App
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <Navbar />
          <App />
          <Footer />
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);