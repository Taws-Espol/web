import './style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='Navbar'>
            <div className='flex justify-center h-28 items-center'>
                <div className='grid grid-cols-5 gap-3 w-1/3 h-10 bg-tawsLight justify-items-center items-center rounded-full'>
                    <div><a className='text-white font-medium' href='/'>Inicio</a></div>
                    <div><a className='text-white font-medium' href='/miembros'>Miembros</a></div>
                    <div><a className='text-white font-medium' href='/proyectos'>Proyecto</a></div>
                    <div><a className='text-white font-medium' href='/'>Eventos</a></div>
                    <div><a className='text-white font-medium' href='/'>Blog</a></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar