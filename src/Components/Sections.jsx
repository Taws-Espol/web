import "./style.css";
import React from "react";
import Team from "./Team";
import Projects from "./Projects";
import Achievements from "./Achivements";
import { BsPersonVideo3, BsCalendarEvent, BsPersonUp } from "react-icons/bs";

const Sections = () => {
  return (
    <>
      <div className="flex justify-around text-white my-16 max-sm:flex-col max-sm:items-center max-sm:gap-9">
        <div className="flex-col">
          <BsPersonUp size={50} />
          <h2 className="text-4xl mt-2">50+</h2>
          <h2 className="text-xl">Miembros</h2>
        </div>
        <div className="flex-col">
          <BsCalendarEvent size={50} />
          <h2 className="text-4xl mt-2">05+</h2>
          <h2 className="text-xl">Eventos</h2>
        </div>
        <div className="flex-col">
          <BsPersonVideo3 size={50} />
          <h2 className="text-4xl mt-2">100+</h2>
          <h2 className="text-xl">Talleres</h2>
        </div>
      </div>
      <Team />
      <Achievements />
      <Projects />
    </>
  );
};

export default Sections;
