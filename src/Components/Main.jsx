import React from 'react'
import './style.css'
import logo from '../assets/logoTaws1.png'

const Main = () => {
    return(
        <div className='Main flex justify-evenly'>
            <div className='flex-col'>
            <h1 className='text-white font-semibold'>BE DIFFERENT</h1>
            <h1 className='text-tawsBlue font-bold'>BE TAWS</h1>
            <p className='text-white w-96'>Taws es un grupo estudiantil politécnico que busca contribuir a la formación integral de jóvenes investigadores precursores en el desarrollo de tecnologías de la información.</p>
            <a href=""><button className='bg-tawsBlue rounded-full p-2 w-4/12 mt-2 ml-0.5 font-semibold'>Conoce más</button></a>
            </div>
            <img src={logo} alt={"Logo Taws"}/>
        </div>
    )
}

export default Main