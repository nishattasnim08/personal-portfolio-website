import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, projectsNav } from '../data';

const ProjectDetails = () => {

    const {id:projectId} = useParams();
    console.log(projectId);
    const [project, setProject] = useState({});

    useEffect(() => {
        
            const newProject = projectsData.filter((pro) => {
                return pro.id === projectId;
            });

            console.log(newProject[0]);
            setProject(newProject[0]);
        
    }, [projectId]);

    return (
        <section className='section bg-primary'>
            <div className='w-fit mx-auto'>
                <h1>Project Details</h1>
            </div>
            <div key={project.id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
                <img className='rounded-2xl ' src={project.image1} alt="" />
                <img className='rounded-2xl ' src={project.image2} alt="" />
                <img className='rounded-2xl ' src={project.image3} alt="" />
            </div>
            <p className='capitalize text-accent text-sm mb-3'>{project.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>{project.name}</h3>
            <p className='text-lg mb-4'>{project.detailDescription}</p>
            <p>Technology Used: {project.technology}</p>
            <div className="flex flex-1 flex-row items-center lg:items-end">
                <a href={project.liveSite} target='_blank'><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Live Site</button></a>
                <a href={project.clientSide} target='_blank'><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Client Side</button></a>
                {
                    project.serverSide && 
                    <a href={project.serverSide} target='_blank'><button className='mx-2 text-xs my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Server Side</button></a>}
            </div>
            {/* <button onClick={()=>navigate(`/projectDetails/${project.id}`)} className='mx-2 text-2xl my-4 py-2 px-5 rounded-full text-white bg-accent hover:bg-accent-hover'>Details</button> */}
        </div>
        </section>
    );
};

export default ProjectDetails;