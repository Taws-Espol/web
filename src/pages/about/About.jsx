import React from "react";
import "./about.css";
import Navbar from "../../components/Navbar";
import Dots from "../../components/DotPattern";
import Footer from "../../components/Footer";
import Logo from "../../assets/logoTawsBig.png";
import redes from "../../assets/icons/redes.png";
import lupa from "../../assets/icons/lupa.png";
import pensar from "../../assets/icons/pensar.png";
import pc from "../../assets/icons/arquitectura.png";
import amigos from "../../assets/icons/amigos.png";

const About = () => {
  return (
    <div className="About bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="about" />
        <h1 className="text-5xl text-white font-bold mb-4">Nosotros</h1>
        <p className="text-white">
          “Nadie puede ser mejor que tú que tú mismo”
        </p>
        <div className="grid grid-cols-2 bg-slate-50 mt-6 p-10 rounded-tr rounded-tl">
          <img className="w-3/4 mx-auto" src={Logo} />
          <div className="grid">
            <div>
              <h1 className="underline uppercase font-semibold">
                ¿Qué es taws?
              </h1>
              <p className="italic text-justify">
                Taws es por su naturaleza, un grupo estudiantil sin fines de
                lucro, sin discriminación de género, nacionalidad, raza,
                condición social, ideología, limitaciones físicas, mentales y/o
                sensoriales, que busca contribuir a la formación integral de
                jóvenes investigadores precursores en el desarrollo de
                tecnologías de la información.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <section>
                <h3 className="underline uppercase font-semibold">Misión</h3>
                <p className="text-justify py-1 pr-5">
                  Contribuir a la formación de jóvenes investigadores,
                  precursores en el desarrollo de aplicaciones web, fomentando
                  el uso de nuevas tecnologías informáticas.
                </p>
              </section>
              <section>
                <h3 className="underline uppercase font-semibold">Visión</h3>
                <p className="text-justify py-1">
                  Ser profesionales líderes y promotores de proyectos
                  Informáticos en la Web y sus aplicaciones de acuerdo a las
                  necesidades que la comunidad requiera satisfacer en el plano
                  educativo, comercial y laboral en general.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-10 rounded-br rounded-bl">
          <h2 className="text-center font-bold underline uppercase">
            Objetivos
          </h2>
          <section className="grid grid-cols-3 gap-10 text-sm">
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Colaborar con centros de investigación de la universidad en la
                elaboración de proyectos de investigación o desarrollo
              </p>
              <img className="h-1/2 w-1/3 mx-auto" src={redes} alt="redes" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Participar en eventos a nivel nacional o internacional, que
                promuevan el desarrollo de tecnología y difusión científica
              </p>
              <img className="h-1/2 w-1/3 mx-auto" src={lupa} alt="lupa" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Organizar talleres, cursos o tutorías que incentiven el
                desarrollo de habilidades técnicas para los organizadores y
                participantes.
              </p>
              <img className="h-1/2 w-1/3 mx-auto" src={pensar} alt="pensar" />
            </div>
          </section>
          <section className="grid grid-cols-2 gap-10 text-sm my-9">
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Generar proyectos que beneficien a la comunidad politécnica y
                con un alto impacto en la sociedad.
              </p>
              <img className="h-1/2 w-1/4 mx-auto" src={pc} alt="pc" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-center">
                Promover la ética profesional dentro de los miembros del club.
              </p>
              <img className="h-1/2 w-1/4 mx-auto" src={amigos} alt="amigos" />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
