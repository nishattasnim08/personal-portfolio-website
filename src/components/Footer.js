import React from 'react';
import { social } from '../data';

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                    <div className="flex space-x-6 items-center justify-center">
                        {
                            social.map((item, index) => {

                                const { href, icon } = item;

                                return <a className='text-accent text-base' href={href} key={index}>{icon}</a>
                            })
                        }
                    </div>

                    <div>
                        <a href="/">
                            <p className='logo'>Nishat Tasnim</p>
                        </a>
                    </div>

                    <div>
                        <p>Copyright 2022 &copy; Nishat Tasnim. All right reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;