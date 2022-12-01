import './style.css'
import React from 'react'
import pattern from '../assets/dots.png'


const Dots = () => {
    return(
        <div className='Dots relative z-0'>
            <img width={250} className='absolute top-0 right-0' src={pattern}/>
        </div>
    )
}

export default Dots