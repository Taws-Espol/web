import React from 'react'
import './style.css'
import { projects } from '../data/projects';

const Projects = () => {
    return(
        <div className= 'Proyects'>
            <h1 className='text-tawsBlue font-semibold text-4xl mb-5'><span className='text-white'>$~</span> Proyectos</h1>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 justify-items-center">
                { projects.map((project) => {
                    return <div className="card flex-col py-5 px-5 text-white">
                    <h2 className='text-xl text-center font-bold mb-3' >{project.nombre}</h2>
                    <p className='text-justify my-3' >{project.descripcion}</p>
                    <p className='mt-4 bg-blue-600'>Miembros: {project.miembros}</p>
                    {/* <a href={project.link} target='_blank'>
					<button className="bg-tawsBlue rounded-full p-2  mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a> */}
                </div>
                })}
            </div>
        </div>
    )
}

export default Projects;