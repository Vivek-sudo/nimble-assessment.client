import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={`container-fluid ${!isLoggedIn && 'justify-content-center'}`}>
                <div className="d-flex align-items-center">
                    <img
                        src="./assets/nimble-logo.png"
                        alt="Logo"
                        style={{ width: '3rem', height: '3rem' }}
                    />
                    <Link to="/" className="navbar-brand">
                        Nimble
                    </Link>
                </div>
                {isLoggedIn && (
                    <ul className="navbar-nav ms-auto d-none d-md-block">
                        <li className="nav-item d-flex align-items-center">
                            <h3>Dashboard</h3>
                        </li>
                    </ul>
                )}
                {isLoggedIn && (
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item d-flex align-items-center">
                            <button className="btn btn-outline-primary" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;