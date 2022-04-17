import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
       <h1 class="footer-title">Influencer products</h1>
        <p class="footer-copyright">Copyright © 2020 influencer products</p>
        <p class="footer-copyright">All rights reserved</p>
            
            
    
        </footer>
    );
};

export default Footer;