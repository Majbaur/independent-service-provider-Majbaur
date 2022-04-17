import React from 'react';
import majba from '../../images/majba.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-me">
            <img src={majba} alt="" />
        
            <h2 className='pt-5'>Name: Md.Majbaur Rahman Khan</h2>
            <p>My Goal :
            I am very dedicated to my goal.A personal trainer will be able to tailor your workout plan to one that targets your problem areas and make sure you'll enjoy it, too. They'll work with you to ensure you have perfect form throughout (also preventing injury) and pick up on any bad exercise habits you've formed in the past. I am well trained and many courses I finished in my past ages. now I am working in many Gym halls with well-trained people to make them fit and fine. I worked in many national and international Gym companies as a Gym Instructor.</p>
        </div>
    );
};

export default About;