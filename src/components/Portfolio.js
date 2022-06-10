import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-primary min-h-[1400px]'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My Latest Projects</h2>
                    <p className='subtitle'>Here are some of my latest projects. I've used HTML5, CSS3, JavaScript, Bootstrap, Tailwind, Daisy UI, React JS, Node JS, Express Js, MongoDB, Firebase and so on to build these projects.</p>
                </div>
                <Projects />
            </div>
        </section>
    );
};

export default Portfolio;