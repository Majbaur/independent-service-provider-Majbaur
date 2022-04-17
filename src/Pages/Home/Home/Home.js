import React from 'react';
import Achievement from '../../Achievement/Achievement.js';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Achievement></Achievement>
        </>
    );
};

export default Home;