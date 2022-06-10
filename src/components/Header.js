import React from 'react';
import './Header.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Nav from './Nav';
import Socials from './Socials';
import NavMobile from './NavMobile';

const Header = () => {
    const [bg, setBg] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })

    return (
        <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                {/* logo */}
                <a href="/">
                    <p className='logo'>Nishat Tasnim</p>
                </a>
                {/* nav */}
                <div className="hidden lg:block">
                    <Nav/>
                </div>
                {/* socials */}
                <div className="hidden lg:block">
                    <Socials/>
                </div>
                {/* navMobile */}
                <div className="lg:hidden">
                    <NavMobile/>
                </div>
            </div>
        </header>
    );
};

export default Header;