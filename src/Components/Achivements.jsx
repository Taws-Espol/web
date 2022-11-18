import React from 'react'
import './style.css'


const Achivements = () => {
    return (
      <div className="Achivements">
        <h1 className="text-tawsBlue font-semibold text-4xl mt-8">
          <span className="text-white">$~</span> Logros
        </h1>
        <div class="wrapper">
          <div class="center-line">
          </div>
          <div class="row-1">
            <h3 className="text-white font-bold text-2xl">2022</h3>
          </div>
          <div class="row row-2">
            <section>
              <span class="icon fas fa-star bg-tawsLight">😎</span>
              <div class="details">
                <span class="title text-white">FIEC Excelencia Académica 2022-I</span>
              </div>
              <p className='text-white'>Carlos Meneses - Computación</p>
            </section>
          </div>
          <div class="row row-2">
            <section>
              <span class="icon fas fa-globe bg-tawsLight">LOGO</span>
              <div class="details">
                <span class="title text-white">FIEC Excelencia Académica 2022-I</span>
              </div>
              <p className='text-white'>Carlos Meneses - Computación</p>
            </section>
          </div>
          <div class="row row-2">
            <section>
              <span class="icon fas fa-map-marker-alt bg-tawsLight">👀</span>
              <div class="details">
                <span class="title text-white">FIEC Excelencia Académica 2022-I</span>
              </div>
              <p className='text-white'>Carlos Meneses - Computación</p>
            </section>
          </div>
          <div class="row-1">
            <h3 className="text-white font-bold text-2xl">2021</h3>
          </div>
          <div class="row row-2">
            <section>
              <span class="icon fas fa-map-marker-alt bg-tawsLight">👀</span>
              <div class="details">
                <span class="title text-white">FIEC Excelencia Académica 2022-I</span>
              </div>
              <p className='text-white'>Carlos Meneses - Computación</p>
            </section>
          </div>
          <div class="row row-2">
            <section>
              <span class="icon fas fa-map-marker-alt bg-tawsLight">👀</span>
              <div class="details">
                <span class="title text-white">FIEC Excelencia Académica 2022-I</span>
              </div>
              <p className='text-white'>Carlos Meneses - Computación</p>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Achivements;