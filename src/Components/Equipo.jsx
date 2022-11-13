import React from 'react'
import './style.css'

let equipos = [
    {
        nombre:"Nombre Apellido",
        cargo:"Mentora",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Presidenta",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"VP Académica",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"VP Administrativo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Líder Admisiones",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Líder Bienestar",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Líder Eventos",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Líder Redes",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
    {
        nombre:"Nombre Apellido",
        cargo:"Líder Proyectos",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor dictumst ridiculus malesuada at maecenas.",
        img:"https://doodleipsum.com/300/avatar-2?i=cccf78a48198cc758c48aff0d56b1ff6"
    },
];

const mentor = equipos.shift();

const Equipo = () => {
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
                <p>{mentor.descripcion}</p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {equipos.map((persona)=>{
                return <div className='flex-col m-0 text-center'>
                        <img className='m-0' src={persona.img}/>
                        <h2 className='text-white'>{persona.nombre}</h2>
                        <h3 className='text-cargo'>{persona.cargo}</h3>
                       </div>
            })}
        </div>
      </>
    )
}

export default Equipo