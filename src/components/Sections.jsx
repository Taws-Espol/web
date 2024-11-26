import React from "react";
import Team from "./Team";
import Projects from "./Projects";
import Achievements from "./Achievements";
import { UpcomingEvents } from "./UpcomingEvents";

const Sections = () => {
  return (
    <>
      <UpcomingEvents />
      <Achievements />
      <Projects />
      <Team />
    </>
  );
};

export default Sections;
