import React from "react";
import { teams } from "../data/teams.json";

const mentor = teams.filter((member) => member.org_structure === "Mentor");

const directiva = teams.filter(
  (member) => member.org_structure === "Directiva",
);

const lideres = teams.filter((member) => member.org_structure === "Lider");

const Team = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <h1 className="text-tawsBlue font-semibold text-4xl mt-28">
        <span className="text-white">$~ </span>Equipo de liderazgo{" "}
        {year + "-" + (year + 1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-14 mx-4 md:mx-12">
        {mentor.map((person) => {
          return (
            <div className="flex flex-col items-center mb-8" key={person.name}>
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={person.img}
                alt={person.name}
              />
              <div className="text-center">
                <h2 className="text-white font-bold mb-2">{person.name}</h2>
                <p className="text-cargo mb.2">{person.position}</p>
                <p className="text-white">{person.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 mt-8 mx-4 md:mx-14">
        {directiva.map((person) => {
          return (
            <div className="text-center mb-8" key={person.name}>
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={person.img}
                alt={person.name}
              />
              <h2 className="text-white font-bold mb-3">{person.name}</h2>
              <p className="text-cargo mb-2">{person.position}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 mx-4 md:mx-14">
        {lideres.map((person) => {
          return (
            <div className="text-center mb-8" key={person.name}>
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={person.img}
                alt={person.name}
              />
              <h2 className="text-white font-bold mb-2">{person.name}</h2>
              <p className="text-cargo mb-2">{person.position}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
