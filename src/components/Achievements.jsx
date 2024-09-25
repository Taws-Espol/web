import React from "react";
import { achievementsArray } from "../data/achievements.json";
import { BsAward } from "react-icons/bs";

const Achievements = () => {
  return (
    <div className="Achivements">
      <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
        <span className="text-white">$~</span> Logros
      </h1>
      <div className="wrapper lg:w-3/4 mx-auto">
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
                  <div key={key}>
                    <section className="flex p-3 lg:ml-5 ml-[-30px]">
                      <div className="">
                        <span className="icon fas fa-globe bg-tawsLight flex justify-center items-center p-2 rounded-full">
                          <BsAward size={30} color="#419fdc" />
                        </span>
                      </div>
                      <div className="lg:ml-3 ml-1">
                        <div className="details my-2">
                          <span className="title font-black lg:text-[30px] text-[23px] text-white">
                            {obj.title}
                          </span>
                        </div>
                        <p className="text-white my-2">{obj.description}</p>
                      </div>
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
