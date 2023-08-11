import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center text-white py-3">
                © {new Date().getFullYear()}, Nimble - Vivek Doshi
            </div>
        </footer>
    );
};

export default Footer;
