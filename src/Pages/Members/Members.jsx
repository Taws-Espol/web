import React from "react";
import Navbar from "../../components/Navbar";
import Dots from '../../components/DotPattern';
import Footer from '../../components/Footer'

function Header(){
  return (
    <div>
      <h1 className="text-white">Miembros</h1>
      <p className="text-white">“Los ordenadores son inútiles. Sólo pueden darte respuestas” - Pablo Picasso</p>
    </div>
  )
}

function Cards(){
  let miembros = [];
  for(let i = 0; i < 10;i++){
    miembros.push(i);
  }
  return (
    <div className="flex overflow-x-scroll">
    {
      miembros.map((item)=>{
        return (<div class="rounded mx-3 shadow-lg bg-white">
        <img
          class="w-full"
          src="https://picsum.photos/200/300"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Miembro 1</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Python
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Backend
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NoPainNoGain
          </span>
        </div>
      </div>
      )
      })
    }
    </div>
  );
}


const Members = () => {
  return (
    <div className="Members bg-taws">
      <Dots/>
      <div className='Contenedor w-10/12 mx-auto'>
        <Navbar item='miembros'/>
        <Header/>
        <Cards/>
        <Footer/>
      </div>
    </div>
  );
};

export default Members;
