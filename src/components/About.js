import React from 'react';
import { Link } from 'react-scroll';
import aboutImg from '../assets/img/about.png';


const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={aboutImg} alt="" />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Nishat Tasnim</h2>
                            <p className='mb-4 text-accent'>Jr. MERN Web Developer & Graphics Designer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                I'm a Computer Science and Engineering graduate from Daffodil International University. I usually build and design Web interface using HTML, Vanila CSS, JavaScript, Bootstrap, Tailwind & MERN.
                                <br />
                                I also do graphics design including logo, business card, flyer, social media banner, etc. using Adobe Photoshop, Adobe Illustrator and Canva.
                                <br />
                                I also love to do Problem Solving using C and basic Java.
                            </p>
                        </div>
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-70} ><button className='py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover transition-all'>Contact Me</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;