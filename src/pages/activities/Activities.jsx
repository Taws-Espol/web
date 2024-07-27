import React from "react";
import "./activities.css"
import { events } from "../../data/events.json";
import Navbar from "../../components/Navbar";
import Dots from "../../components/DotPattern";
import Footer from "../../components/Footer";

function Header() {
  return (
    <div>
      <h1 className="text-white font-semibold text-5xl">Actividades</h1>
    </div>
  );
}

const Activities = () => {
  return (
    <div className="Members bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="eventos" />
        <Header />
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {events.map((evento, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md text-black">
                <h2 className="text-lg font-semibold">{evento.name}</h2>
                <p className="text-sm text-gray-600">Fecha: {evento.date}</p>
                <p className="text-sm">{evento.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Activities;
