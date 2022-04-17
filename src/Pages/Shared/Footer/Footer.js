import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
       <h1 className="footer-title">Strength House</h1>
        <p className="footer-copyright">Copyright © {year} strength house</p>
        <p className="footer-copyright">All rights reserved</p>
            
            
    
        </footer>
    );
};

export default Footer;