import React from 'react';

const Project = ({item}) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
                <img className='rounded-2xl ' src={item.image1} alt="" />
            </div>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
            <p className='text-lg mb-4'>{item.shortDescription}</p>
            <p>Technology Used: {item.technology}</p>
            <div className="flex flex-1 flex-row items-center lg:items-end">
                <a href={item.liveSite}><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Live Site</button></a>
                <a href={item.clientSide}><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Client Side</button></a>
                <a href={item.serverSide}><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Server Side</button></a>
            </div>
            <button className='mx-2 text-2xl my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Details</button>
        </div>
    );
};

export default Project;