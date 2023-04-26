import './style.css'
import React from 'react'
import pattern from '../assets/dots.png'


const Dots = () => {
    return(
        <div className='Dots relative z-0'>
            <img width={200} className='absolute top-0 right-0 max-sm:hidden' src={pattern}/>
        </div>
    )
}

export default Dots