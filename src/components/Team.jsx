import React from "react";
import { teams } from "../data/teams.js";

const Team = () => {
  let anio = new Date().getFullYear();

  return (
    <>
      <h1 className="text-tawsBlue font-semibold text-4xl mt-28">
        <span className="text-white">$~ </span>Equipo de liderazgo{" "}
        {anio + "-" + (anio + 1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-14 mx-4 md:mx-12">
        {teams.map((persona) => {
          return (
            <div className="flex flex-col items-center mb-8" key={persona.name}>
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={persona.img}
                alt={persona.name}
              />
              <div className="text-center">
                <h2 className="text-white font-bold mb-2">{persona.name}</h2>
                <p className="text-cargo mb-2">{persona.role}</p>
                <p className="text-white">{persona.descripcion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
