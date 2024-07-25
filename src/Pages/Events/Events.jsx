import React from "react";
import "../../Components/style.css";
import { eventosJSON } from "../../data/events";
import Navbar from "../../Components/Navbar";
import Dots from "../../Components/DotPattern";
import Footer from "../../Components/Footer";

function Header() {
  return (
    <div>
      <h1 className="text-white font-semibold text-5xl">Eventos</h1>
    </div>
  );
}

function Eventos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {eventosJSON.eventos.map((evento, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{evento.nombre}</h2>
          <p className="text-sm text-gray-600">Fecha: {evento.fecha}</p>
          <p className="text-sm">{evento.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

const Events = () => {
  return (
    <div className="Members bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="eventos" />
        <Header />
        <div className="container mx-auto mt-8">
          <Eventos />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
