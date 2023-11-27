import React from 'react'
import './style.css'
import { projects } from '../data/projects';
import {BsFileCode} from 'react-icons/bs'

const Projects = () => {
    return(
        <div className= 'Proyects'>
            <h1 className='text-tawsBlue font-semibold text-4xl mt-24 mb-4'><span className='text-white'>$~</span> Proyectos</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
                { projects.map((project) => {
                    return <div className="mx-12 flex-col py-8 text-white">
                    <span class="icon2 fas fa-globe bg-tawsLight">{<BsFileCode size={30} class="flex items-center"/>}</span>
                    <h2 className='text-xl font-bold mb-3 mt-16' >{project.nombre}</h2>
                    <p className='my-3' >{project.descripcion}</p>
                    <p className='mt-4 bg-blue-600' >Mentor: {project.mentor}</p> 
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