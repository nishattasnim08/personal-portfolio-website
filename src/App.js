import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import BacToTop from './components/BacToTop';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';

// import components

const App = () => {
  return <div>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
      </Routes>
    <Footer />
    <BacToTop />
  </div>;
};

export default App;
