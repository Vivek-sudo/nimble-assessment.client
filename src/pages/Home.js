import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Home = () => {
    const [showRegister, setShowRegister] = useState(false);

    const handleToggleRegister = () => {
        setShowRegister((prevState) => !prevState);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center"
            style={{ background: 'linear-gradient(to bottom, #f0f0f0, #e6e6e6)' }} >
            <div className="bg-white p-3 my-4 rounded shadow col-11 col-md-6 px-md-5">
                {showRegister ? <Register /> : <Login />}
                <div className="d-grid gap-1 mt-3 text-center">
                    {showRegister ? (
                        <>
                            <p>Already have an account?</p>
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleToggleRegister}
                            >
                                Back to Login
                            </button>
                        </>
                    ) : (
                        <>
                            <p>Don't have an account?</p>
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleToggleRegister}
                            >
                                Register
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;