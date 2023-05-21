import './style.css'
import React from 'react'
import pattern from '../assets/logoTaws1.png'


const Dots = () => {
    return(
        <div className='Dots relative z-0'>
            <img width={120} className='absolute top-3 right-3 max-sm:hidden' src={pattern}/>
        </div>
    )
}

export default Dots