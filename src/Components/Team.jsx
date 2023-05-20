import './style.css'
import React from 'react'
import { teams } from '../data/teams';

const mentor = teams.shift();

const Team = () => {
    let anio = new Date().getFullYear();
    return(
        <>
        <h1 className="text-tawsBlue font-semibold text-4xl mt-8">
        <span className="text-white">$~ </span>Equipo de liderazgo {anio + "-" + (anio+1)}
        </h1>
        <div className="flex mt-4">
            <img className='mx-auto rounded-full' src={mentor.img}/>
            <div className="flex-col py-4 pr-4">
                <h2 className='text-white'>{mentor.nombre}</h2>
                <h3 className='text-cargo'>{mentor.cargo}</h3>
                <p className='text-white'>{mentor.descripcion}</p>
            </div>
        </div>
        <div className="grid grid-cols-4 max-sm:grid-cols-2">
            {teams.map((persona)=>{
                return <div className='text-center mt-8'>
                        <img className='w-5/6 mx-auto rounded-full' src={persona.img}/>
                        <h2 className='text-white'>{persona.nombre}</h2>
                        <p className='text-cargo'>{persona.cargo}</p>
                       </div>
            })}
        </div>
      </>
    )
}

export default Team