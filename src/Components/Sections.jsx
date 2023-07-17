import "./style.css";
import React from "react";
import Team from "./Team";
import Projects from "./Projects";
import Achivements from "./Achivements";
import calendario from "../assets/icons/calendario.png";
import miembros from "../assets/icons/miembros.png";
import talleres from "../assets/icons/talleres.png";
import { BsPersonVideo3, BsCalendarEvent, BsPersonUp } from "react-icons/bs"

const Sections = () => {
  return (
    <>
      {/* <div className="Sections grid grid-cols-2 mt-8 max-sm:grid-cols-1">
        <div className="flex-col">
          <h1 className="text-tawsBlue font-semibold text-4xl">
            <span className="text-white">$~</span> Misión
          </h1>
          <p className="text-white my-4">
            Contribuir a la formación de jóvenes investigadores, precursores en
            el desarrollo de aplicaciones web, fomentando el uso de nuevas
            tecnologías informáticas.
          </p>
        </div>
        <img width={"200"} className='justify-self-center' src={imgMision} alt={"Grupo Taws"} />
      </div> */}
      <div className="flex justify-around text-white my-16 max-sm:flex-col max-sm:items-center max-sm:gap-9">
        <div className="flex-col">
          <BsPersonUp size={50}/>
          <h2 className="text-4xl mt-2">50+</h2>
          <h2 className="text-xl">Miembros</h2>
        </div>
        <div className="flex-col">
          <BsCalendarEvent size={50}/>
          <h2 className="text-4xl mt-2">05+</h2>
          <h2 className="text-xl">Eventos</h2>
        </div>
        <div className="flex-col">
          <BsPersonVideo3 size={50}/>
          <h2 className="text-4xl mt-2">100+</h2>
          <h2 className="text-xl">Talleres</h2>
        </div>
      </div>
      <Team/>
      <Achivements/>
      <Projects/>
    </>
  );
};

export default Sections;
