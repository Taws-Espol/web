import React from 'react'
import './style.css'
import { logros } from '../data/logros';
import {BsAward} from 'react-icons/bs'


const Achivements = () => {
    return (
      <div className="Achivements">
        <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
          <span className="text-white">$~</span> Logros
        </h1>
        <div class="wrapper">
          <div class="center-line">
          </div>
          {
            logros.map((logro)=>{
              return <div>
                <div class="row-1">
                  <h3 className="text-white font-bold text-4xl">{logro.year}</h3>
                </div>
                {
                  logro.logros.map((obj)=>{
                    return  <div class="row row-2">
                    <section>
                      <span class="icon fas fa-globe bg-tawsLight my-4">{<BsAward size={30} class="flex items-center"/>}</span>
                      <div class="details">
                        <span class="title text-white">{obj.title}</span>
                      </div>
                      <p className='text-white'>{obj.description}</p>
                    </section>
                  </div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    );
}

export default Achivements;