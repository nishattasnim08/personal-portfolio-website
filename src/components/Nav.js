import React from 'react';
import { Link } from 'react-scroll';
import { navigation } from '../data';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <ul className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <div>
                            <li className='text-white hover:text-accent cursor-pointer' key={index}>
                                <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>{item.name}</Link>
                            </li>

                        </div>
                    )
                })}
                <li>
                    <Link to='/blog' onClick={()=> navigate('/blog')} className='cursor-pointer'>Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;