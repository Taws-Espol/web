import React from "react";
import logo from "../assets/logoTawsBig.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main grid grid-cols-1 justify-items-center max-w-full">
      <div className="flex-col w-4/5 mt-8">
        <div className="flex flex-row flex-wrap">
          <div className="lg:basis-1/2 max-w-full">
            <h1 className="text-white font-medium text-5xl sm:text-6xl">
              BE DIFFERENT
            </h1>
            <h1 className="text-tawsBlue font-bold text-8xl max-w-full">
              BE TAWS
            </h1>
            <p className="text-white my-4 text-xl">
              Taws es un grupo estudiantil politécnico que busca contribuir a la
              formación integral de jóvenes investigadores precursores en el
              desarrollo de tecnologías de la información.
            </p>
            <Link to="/about">
              <button className="bg-tawsBlue rounded-full p-2 w-1/2 mt-2 font-semibold">
                Conoce más
              </button>
            </Link>
          </div>
          <div className="hidden lg:basis-1/2 lg:block">
            <img src={logo} alt="logo" className="w-3/5 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
