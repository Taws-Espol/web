import React from "react";
import "./members.css";
import Navbar from "../../components/Navbar";
import Dots from "../../components/DotPattern";
import Footer from "../../components/Footer";

function Header() {
  return (
    <div>
      <h1 className="text-white font-semibold text-5xl uppercase">Miembros</h1>
      <p className="text-white">
        “Los ordenadores son inútiles. Sólo pueden darte respuestas” - Pablo
        Picasso
      </p>
    </div>
  );
}

function Cards() {
  let miembros = [];
  for (let i = 0; i < 10; i++) {
    miembros.push(i);
  }
  return (
    <div className="grid grid-rows-1 grid-flow-col overflow-x-scroll cursor-pointer scrollbar scroll-container py-5 gap-3 ease-in-out">
      {miembros.map((item) => {
        return (
          <div className="bg-white card">
            <img
              className="w-full"
              src = {`https://picsum.photos/id/${item}/300`}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Miembro 1</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Python
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Backend
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #NoPainNoGain
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Members = () => {
  return (
    <div className="Members bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="miembros" />
        <Header />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Members;
