import React from "react";
import { achievementsArray } from "../data/achievements.json";
import { BsAward } from "react-icons/bs";

const Achievements = () => {
  return (
    <div className="Achivements">
      <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
        <span className="text-white">$~</span> Logros
      </h1>
      <div className="wrapper">
        <div className="center-line" />
        {achievementsArray.map((achievement, key) => {
          return (
            <div key={key}>
              <div className="row-1">
                <h3 className="text-white font-bold text-4xl">
                  {achievement.year}
                </h3>
              </div>
              {achievement.achievements.map((obj, key) => {
                return (
                  <div key={key} className="row row-2">
                    <section>
                      <span className="icon fas fa-globe bg-tawsLight">
                        <BsAward size={30} className="flex items-center" />
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

export default Achievements;
