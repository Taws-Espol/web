import React from "react";
import "./Projects.css";
import Navbar from "../../Components/Navbar";
import Dots from '../../Components/DotPattern';
import Footer from '../../Components/Footer'


const Projects = () => {
  return (
    <div className="Projects bg-taws">
      <Dots/>
      <div className='Contenedor w-10/12 mx-auto'>
        <Navbar item='proyectos'/>
        <div className='flex flex-col items-center py-3'>
        </div>
        <h2 class="text-center text-4xl xl:text-5xl text-white py-6">Proyectos</h2>
        <div className="cards overflow-auto scrollbar scrollbar-thumb-blue scrollbar-thumb-gray-100 scrollbar-track-gray-100">
          <div id="card" class="">
            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div class="h-64 w-auto md:w-1/2">
                  <img class="inset-0 h-full w-full object-cover object-center" src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg" />
                </div>
                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 class="font-semibold text-lg leading-tight truncate">eact tailwind horizontal card image</h3>
                  <p class="mt-2">
                   react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </div>
              <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div class="h-64 w-auto md:w-1/2">
                  <img class="inset-0 h-full w-full object-cover object-center" src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg" />
                </div>
                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 class="font-semibold text-lg leading-tight truncate">eact tailwind horizontal card image</h3>
                  <p class="mt-2">
                   react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </div>
              <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div class="h-64 w-auto md:w-1/2">
                  <img class="inset-0 h-full w-full object-cover object-center" src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg" />
                </div>
                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 class="font-semibold text-lg leading-tight truncate">eact tailwind horizontal card image</h3>
                  <p class="mt-2">
                   react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer/>
      </div>
    </div>
  );
};

export default Projects;
