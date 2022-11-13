import React from 'react'
import './style.css'

const Footer = () => {
    return(
        <div className='Footer bg-yellow-300'>
            <h1>-------ESTO ES UN FOOTER-------</h1>
            <h1>Contactanos</h1>
            <h2>Bloque 15 - FIEC, Guayaquil 090150, Ecuador <br></br>taws@espol.edu.ec</h2>
            <h1>Redes Sociales</h1>
            <ul>
                <li><a href="">Twitter 😎</a></li>
                <li><a href="">Facebook 👀</a></li>
                <li><a href="">Github 🎮</a></li>
            </ul>
            <p>Copyright © {new Date().getFullYear()} TAWS. All rights reserved.</p>
        </div>
    )
}

export default Footer