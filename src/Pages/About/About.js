import React from 'react';
import majba from '../../images/majba.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-me">
            <img src={majba} alt="" />
            <h2>Name: Md.Majbaur Rahman Khan</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ut excepturi natus unde minus iure repudiandae accusamus accusantium fugit incidunt optio enim soluta esse eum quibusdam molestias, illum quod in ab, blanditiis porro sint voluptate? Praesentium rerum unde explicabo inventore ducimus, magnam distinctio aliquam in aspernatur. Dolorem error quo molestias?</p>
        </div>
    );
};

export default About;