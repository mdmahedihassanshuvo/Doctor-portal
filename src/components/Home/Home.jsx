import React from 'react';
import Banner from './components/Banner/Banner';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Contact></Contact>
        <Services></Services>
        <Blog></Blog>
        <Testimonial></Testimonial>
        </>
    );
};

export default Home;