import './style.css'
import React from 'react'
import { teams } from '../data/teams';

const mentor = teams.shift();

const Team = () => {
    return(
        <>
        <h1 className="text-tawsBlue font-semibold">
        <span className="text-white">$~ </span>Equipo de liderazgo 2022-23
        </h1>
        <div className="flex">
            <img src={mentor.img}/>
            <div className="flex-col">
                <h2 className='text-white'>{mentor.nombre}</h2>
                <h3 className='text-cargo'>{mentor.cargo}</h3>
                <p className='text-white'>{mentor.descripcion}</p>
            </div>
        </div>
        <div className="grid grid-cols-4">
            {teams.map((persona)=>{
                return <div className='flex-col text-center'>
                        <img src={persona.img}/>
                        <h2 className='text-white'>{persona.nombre}</h2>
                        <h3 className='text-cargo'>{persona.cargo}</h3>
                       </div>
            })}
        </div>
      </>
    )
}

export default Team