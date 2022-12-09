import React from "react";
import Navbar from "../../components/Navbar";
import Dots from '../../components/DotPattern';
import Footer from '../../components/Footer'

const Projects = () => {
  return (
    <div className="Projects bg-taws">
      <Dots/>
      <div className='Contenedor w-10/12 mx-auto'>
        <Navbar item='proyectos'/>
        <Footer/>
      </div>
    </div>
  );
};

export default Projects;
