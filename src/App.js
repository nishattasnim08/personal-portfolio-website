import React from 'react';
import About from './components/About';
import BacToTop from './components/BacToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';

// import components

const App = () => {
  return <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Contact />
    <Footer />
    <BacToTop/>
  </div>;
};

export default App;
