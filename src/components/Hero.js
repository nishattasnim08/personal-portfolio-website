import React from 'react';
import nishat from '../assets/img/Profile-Picture.png';

const Hero = () => {
    return (
        <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    {/* left side */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <p className='text-xl text-accent mb-[22px]'>Hey, I'm Nishat!</p>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:translate-[-2px]'>I Build & Design <br />Web Interface.</h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>I'm a Jr. MERN Web Developer and also a Graphics Designer...</p>
                        <div>
                            <button className='mx-8 my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Download CV</button>
                            <button className='mx-8 my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Download Resume</button>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                        <img src={nishat} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;