import './style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className='Navbar'>
            <div className='flex justify-center h-28 items-center'>
                <div className='grid grid-cols-5 gap-3 w-1/3 h-10 bg-tawsLight justify-items-center items-center rounded-full'>
                    <div><a className={`text-white font-medium ${props.item === 'inicio' ? 'border-b-2':""}`} href='/' >Inicio</a></div>
                    <div><a className={`text-white font-medium ${props.item === 'miembros' ? 'border-b-2':""}`} href='/miembros'>Miembros</a></div>
                    <div><a className={`text-white font-medium ${props.item === 'proyectos' ? 'border-b-2':""}`} href='/proyectos'>Proyectos</a></div>
                    <div><a className={`text-white font-medium ${props.item === 'eventos' ? 'border-b-2':""}`} href='/'>Eventos</a></div>
                    <div><a className={`text-white font-medium ${props.item === 'blog' ? 'border-b-2':""}`} href='/'>Blog</a></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar