import React from "react";
import "./style.css";
import { projects } from "../data/projects.json";
import { BsFileCode } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="Proyects">
      <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
        <span className="text-white">$~</span> Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, key) => {
          return (
            <div key={key} className="mx-12 flex-col py-8 text-white">
              <span className="icon2 fas fa-globe bg-tawsLight flex items-center justify-center">
                <BsFileCode size={30} class="flex items-center" />
              </span>
              <h2 className="text-xl font-bold mb-3 mt-16">{project.name}</h2>
              <p className="my-3">{project.description}</p>
              <p className="mt-4 bg-blue-600">Mentor: {project.mentor}</p>
              <p className="mt-4 bg-blue-600">Miembros: {project.members}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
