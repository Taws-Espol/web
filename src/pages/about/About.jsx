import React from "react";
import Goal from "../../components/Goal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../assets/logoTawsBig.png";
import { goals } from "../../data/goals";

const About = () => {
  return (
    <div className="About bg-taws">
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="about" />
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] px-4">
          <div className="m-4 max-w-1/2">
            <h1 className="text-5xl text-white font-bold mb-4">Nosotros</h1>
            <p className="text-white">
              “Nadie puede ser mejor que tú que tú mismo”
            </p>
            <p className="text-white mt-4">
              Taws es por su naturaleza, un grupo estudiantil sin fines de
              lucro, sin discriminación de género, nacionalidad, raza, condición
              social, ideología, limitaciones físicas, mentales y/o sensoriales,
              que busca contribuir a la formación integral de jóvenes
              investigadores precursores en el desarrollo de tecnologías de la
              información.
            </p>
          </div>
          <div className="m-auto">
            <img src={Logo} alt="Logo TAWS" className="max-h-80 aspect-auto" />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] px-4">
          <div className="m-2">
            <h2 className="text-3xl text-white font-bold mb-4">Misión</h2>
            <p className="text-white">
              Contribuir a la formación de jóvenes investigadores, precursores
              en el desarrollo de aplicaciones web, fomentando el uso de nuevas
              tecnologías informáticas.
            </p>
          </div>
          <div className="m-2">
            <h2 className="text-3xl text-white font-bold mb-4">Visión</h2>
            <p className="text-white">
              Ser profesionales líderes y promotores de proyectos Informáticos
              en la Web y sus aplicaciones de acuerdo a las necesidades que la
              comunidad requiera satisfacer en el plano educativo, comercial y
              laboral en general.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-orange text-3xl lg:text-center font-bold">
            Objetivos
          </p>
          <div className="flex flex-col justify-center mt-4 max-w-2xl mx-auto">
            {goals.map((goal, index) => (
              <Goal
                key={index}
                logo={goal.logo}
                text={goal.text}
                index={index}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
