import React from "react";
import "./style.css";
import { logros } from "../data/logros";
import { BsAward } from "react-icons/bs";

const Achivements = () => {
  return (
    <div className="Achivements">
      <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
        <span className="text-white">$~</span> Logros
      </h1>
      <div className="wrapper">
        <div className="center-line" />
        {logros.map((logro, key) => {
          return (
            <div key={key}>
              <div className="row-1">
                <h3 className="text-white font-bold text-4xl">{logro.year}</h3>
              </div>
              {logro.logros.map((obj, key) => {
                return (
                  <div key={key} className="row row-2">
                    <section>
                      <span className="icon fas fa-globe bg-tawsLight">
                        <BsAward size={30} class="flex items-center" />
                      </span>
                      <div className="details">
                        <span className="title text-white">{obj.title}</span>
                      </div>
                      <p className="text-white">{obj.description}</p>
                    </section>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achivements;
