import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

// import components

const App = () => {
  return <div>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    
    <div style={{height: '2000px'}}></div>
  </div>;
};

export default App;
