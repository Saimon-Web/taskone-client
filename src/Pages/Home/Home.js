import React from 'react';
import Hero from '../../Components/Hero';
import Navbar from '../../Components/Navbar';
import Onesection from '../../Components/Onesection';
import Secondsection from '../../Components/Secondsection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Hero></Hero>
            <Onesection></Onesection>
            <Services></Services>
            <Secondsection></Secondsection>
        </div>
    );
};

export default Home;