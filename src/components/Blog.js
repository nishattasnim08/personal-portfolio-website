import React from 'react';
import coming from '../assets/img/coming-soon.jpg';

const Blog = () => {
    return (
        <section className='section bg-primary'>
            <img className='w-fit mx-auto' src={coming} alt="" />
        </section>
    );
};

export default Blog;