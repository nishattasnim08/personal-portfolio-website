import React from 'react';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;