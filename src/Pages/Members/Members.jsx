import React, { useEffect, useState } from "react";
import "./members.css";
import Navbar from "../../Components/Navbar";
import Dots from "../../Components/DotPattern";
import Footer from "../../Components/Footer";
import {miembros} from "../../data/miembros";
import { Typography } from "@material-tailwind/react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <div>
      <h1 className="text-white font-semibold text-5xl">Miembros</h1>
    </div>
  );
}

function Cards() {
  const ITEMS_PER_PAGE = 5;
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [active, setActive] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(5);
  const [currentPageItems, setCurrentPageItems] = React.useState([]);
  useEffect(() => {
    setTotalPages(Math.ceil(miembros.length / ITEMS_PER_PAGE));
    setCurrentPageItems(getCurrentPageItems());
  },[]);
  useEffect(() => {
    setCurrentPageItems(getCurrentPageItems());
  }, [active]);
  const getCurrentPageItems = () => {
    const startIndex = (active - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    if(endIndex > miembros.length){
      return miembros.slice(startIndex, miembros.length);
    }
    return miembros.slice(startIndex, endIndex);
  };
  const handleInputChange = (event) => {
    setTextoBusqueda(event.target.value);
  };
  useEffect(() => {
    if (textoBusqueda === '') {
      setCurrentPageItems(getCurrentPageItems());
      setTotalPages(Math.ceil(miembros.length / ITEMS_PER_PAGE));
      return;
    }
    const filteredItems = miembros.filter((item) => item.toLowerCase().includes(textoBusqueda.toLowerCase()));
    setTotalPages(Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    setCurrentPageItems(filteredItems.slice(0, ITEMS_PER_PAGE));
    setActive(1);
  }, [textoBusqueda]);
  const next = () => {
    console.log(active);
    if (active === totalPages) return;
    setActive(active + 1);
  };
 
  const prev = () => {
    console.log(active);
    if (active === 1) return;
    setActive(active - 1);
  };
  return (<>
    <div className="flex justify-between items-center">
      <p className="text-white">
        “Los ordenadores son inútiles. Sólo pueden darte respuestas” - Pablo
        Picasso
      </p>
      <input
        type="text"
        className="px-3 py-2 mb-5 text-gray-700 border rounded-lg focus:outline-none inset-y-0 right-0 "
        value={textoBusqueda}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {currentPageItems.map((item) => (
        <div className="bg-white card p-4 md:p-6">
          <div className="font-bold text-xl mb-2">{item}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="mt-2">
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
      ))}
    </div>
    <div className="flex items-center justify-center py-4">
      <button
        className={`px-3 py-1 rounded-md bg-tawsBlue text-white mr-2 ${active === 1 ? 'bg-gray-300' : 'bg-tawsBlue'}`}
        onClick={prev}
        disabled={active === 1}
      >
        Previous
      </button>
      <p className="text-white">
        Page {active} of {totalPages}
      </p>
      <button
        className={`px-3 py-1 rounded-md bg-tawsBlue text-white ml-2 ${active === totalPages ? 'bg-gray-300' : 'bg-tawsBlue'}`}
        onClick={next}
        disabled={active === totalPages}
      >
        Next
      </button>
    </div>

    </>
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
