import './style.css'
import React from 'react'
import { teams } from '../data/teams';

const mentor = teams.filter(
    (member) => member.estructura_organizacional === 'Mentor'
);

const directiva = teams.filter(
    (member) => member.estructura_organizacional === 'Directiva'
);

const lideres = teams.filter(
    (member) => member.estructura_organizacional === 'Lider'
);

const Team = () => {
    let anio = new Date().getFullYear();
    return (
        <>
            <h1 className="text-tawsBlue font-semibold text-4xl mt-28">
                <span className="text-white">$~ </span>Equipo de liderazgo {anio + "-" + (anio + 1)}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-14 mx-4 md:mx-12">
                {mentor.map((persona) => {
                    return <div className='flex flex-col items-center mb-8'key={persona.nombre}>
                        <img className='w-32 h-32 rounded-full mx-auto mb-4' src={persona.img} alt={persona.nombre} />
                        <div className="text-center">
                            <h2 className='text-white font-bold mb-2'>{persona.nombre}</h2>
                            <p className='text-cargo mb.2'>{persona.cargo}</p>
                            <p className='text-white'>{persona.descripcion}</p>
                        </div>
                    </div>
                })}
            </div >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 mt-8 mx-4 md:mx-14">
                {directiva.map((persona) => {
                    return <div className='text-center mb-8'key={persona.nombre}>
                        <img className='w-32 h-32 rounded-full mx-auto mb-4' src={persona.img} alt={persona.nombre} />
                        <h2 className='text-white font-bold mb-3'>{persona.nombre}</h2>
                        <p className='text-cargo mb-2'>{persona.role}</p>
                    </div>
                })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 mx-4 md:mx-14">
                {lideres.map((persona) => {
                    return <div className='text-center mb-8'key={persona.nombre}>
                        <img className='w-32 h-32 rounded-full mx-auto mb-4' src={persona.img} alt={persona.nombre} />
                        <h2 className='text-white font-bold mb-2'>{persona.nombre}</h2>
                        <p className='text-cargo mb-2'>{persona.cargo}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Team