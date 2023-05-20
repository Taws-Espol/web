import React from 'react'
import './style.css'

const Projects = () => {
    return(
        <div className= 'Proyects'>
            <h1 className='text-tawsBlue font-semibold text-4xl'><span className='text-white'>$~</span> Proyectos</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <div className="card flex-col py-5 px-10 text-white">
                    <img  className='rounded-full' src="https://picsum.photos/id/4/100"/>
                    <h2 className='text-xl' >Nombre de Proyecto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim nulla sit scelerisque hac sit diam hac vitae.</p>
                    <a href="">
					<button className="bg-tawsBlue rounded-full p-2 mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a>
                </div>
                <div className="card flex-col py-5 px-10  text-white">
                    <img  className='rounded-full' src="https://picsum.photos/id/3/100"/>
                    <h2 className='text-xl'>Nombre de Proyecto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim nulla sit scelerisque hac sit diam hac vitae.</p>
                    <a href="">
					<button className="bg-tawsBlue rounded-full p-2 mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a>
                </div>
                <div className="card flex-col py-5 px-10 text-white">
                    <img  className='rounded-full' src="https://picsum.photos/id/1/100"/>
                    <h2 className='text-xl'>Nombre de Proyecto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim nulla sit scelerisque hac sit diam hac vitae.</p>
                    <a href="">
					<button className="bg-tawsBlue rounded-full p-2 mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a>
                </div>
                <div className="card flex-col py-5 px-10  text-white">
                    <img  className='rounded-full' src="https://picsum.photos/id/5/100"/>
                    <h2 className='text-xl'>Nombre de Proyecto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim nulla sit scelerisque hac sit diam hac vitae.</p>
                    <a href="">
					<button className="bg-tawsBlue rounded-full p-2 mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a>
                </div>
                <div className="card flex-col py-5 px-10  text-white">
                    <img  className='rounded-full' src="https://picsum.photos/id/6/100"/>
                    <h2 className='text-xl'>Nombre de Proyecto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim nulla sit scelerisque hac sit diam hac vitae.</p>
                    <a href="">
					<button className="bg-tawsBlue rounded-full p-2 mt-2 ml-0.5 font-semibold text-black">
						Ver más
					</button>
				    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;