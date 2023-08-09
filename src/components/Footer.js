import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center py-3">
                © {new Date().getFullYear()}, Nimble - Vivek Doshi
            </div>
        </footer>
    );
};

export default Footer;
