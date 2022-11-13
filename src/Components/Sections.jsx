import React from "react";
import "./style.css";
import imgMision from "../assets/imgMision.png";
import calendario from "../assets/icons/calendario.png";
import miembros from "../assets/icons/miembros.png";
import talleres from "../assets/icons/talleres.png";
import Equipo from "./Equipo";
import Logros from "./Logros";
import Proyectos from "./Proyectos";

const Sections = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex-col">
          <h1 className="text-tawsBlue font-semibold">
            <span className="text-white">$~</span> Misión
          </h1>
          <p className="text-white w-96">
            Contribuir a la formación de jóvenes investigadores, precursores en
            el desarrollo de aplicaciones web, fomentando el uso de nuevas
            tecnologías informáticas.
          </p>
        </div>
        <img src={imgMision} alt={"Grupo Taws"} />
      </div>
      <div className="flex justify-evenly text-white">
        <div className="flex-col">
          <img src={miembros} alt={"Miembros"} />
          <h2>50+</h2>
          <h2>Miembros</h2>
        </div>
        <div className="flex-col">
          <img src={calendario} alt={"Calendario"} />
          <h2>05+</h2>
          <h2>Eventos</h2>
        </div>
        <div className="flex-col">
          <img src={talleres} alt={"Talleres"} />
          <h2>100+</h2>
          <h2>Talleres</h2>
        </div>
      </div>
      <Equipo></Equipo>
      <Logros></Logros>
      <Proyectos></Proyectos>
    </>
  );
};

export default Sections;
