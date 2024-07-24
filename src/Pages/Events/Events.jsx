import React from 'react';
import '../../Components/style.css';
import '../../Pages/Events/events.css';
import { eventosJSON } from '../../data/events';
import Navbar from '../../Components/Navbar';
import Dots from '../../Components/DotPattern';
import Footer from '../../Components/Footer';
import imageEvent from '../../assets/charla.jpg';

function Header() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold text-5xl">Próximos Eventos</h1>
        <div className="flex items-center">
          <span className="text-white text-3xl mr-2">2024</span>
          <div className="arrow-down"></div>
        </div>
      </div>
    </div>
  );
}

function Eventos() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
    {eventosJSON.eventos.map((evento, index) => (
      <div key={index} className="bg-white w-3/4 rounded-3xl shadow-2xl flex items-start">
      <div className="w-1/4 max-w-xs">
        <img src={imageEvent} alt="evento" className="rounded-lg w-full h-auto" />
      </div>
      <div className="custom-vbox pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{evento.nombre}</h2>
          <p className="text-sm text-gray-600">Guayaquil, CDG</p>
          <p className="text-sm text-gray-600">Fecha: {evento.fecha}</p>
          <p className="text-sm">{evento.descripcion}</p>
          <a href="#" className="text-blue-500">Leer Más</a>
        </div>
      </div>
      <div className="w-1/4 text-center">
        <p className="text-xl font-bold">Dic</p>
        <p className="text-4xl font-bold">{evento.fecha.split('-')[2]}</p>
        <p className="text-blue-500">10:00 AM</p>
      </div>
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
