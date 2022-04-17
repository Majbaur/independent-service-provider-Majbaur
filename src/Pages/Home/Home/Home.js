import React from 'react';
import Achivement from '../../Achivement/Achivement.js';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Achivement></Achivement>
        </>
    );
};

export default Home;